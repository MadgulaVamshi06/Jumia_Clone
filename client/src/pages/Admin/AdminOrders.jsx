import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "../../components/Layout/Layout";
import { useAuth } from "../../context/auth";
import moment from "moment";
import { Select } from "antd";
const { Option } = Select;

const AdminOrders = () => {
  const [status, setStatus] = useState([
    "Not Process",
    "Processing",
    "Shipped",
    "Delivered",
    "Cancel",
  ]);
  const [changeStatus, setChangeStatus] = useState("");
  const [orders, setOrders] = useState([]);
  const [auth, setAuth] = useAuth();

  // Getting orders data
  const getOrders = async () => {
    try {
      const { data } = await axios.get(
        `/api/product/all-orders`
      );
      setOrders(data.orders); // Ensure `data.orders` is set correctly
      console.log(data.orders);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (auth?.token) getOrders();
  }, [auth?.token]);

  const handleChange = async (orderId, value) => {
    try {
      const { data } = await axios.put(
        `/api/product/order-status/${orderId}`,
        { status: value }
      );
      getOrders();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout title="All Orders Data">
      <div className="row dashboard">
        <div className="col-md-3">
          <AdminMenu />
        </div>
        <div className="col-md-9">
          <h1 className="text-center">All Orders</h1>
          {orders.map((o, i) => (
            <div key={o._id} className="border shadow mb-3">
              <table className="table table-responsive">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Status</th>
                    <th scope="col">Buyer</th>
                    <th scope="col">Date</th>
                    <th scope="col">Payment</th>
                    <th scope="col">Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{i + 1}</td>
                    <td>
                      <Select
                        bordered={false}
                        onChange={(value) => handleChange(o._id, value)}
                        defaultValue={o?.status}
                      >
                        {status.map((s, i) => (
                          <Option key={i} value={s}>
                            {s}
                          </Option>
                        ))}
                      </Select>
                    </td>
                    <td>{o.buyer?.name}</td>
                    <td>{moment(o.createdAt).fromNow()}</td>
                    <td>{o.payment.success ? "Success" : "Failed"}</td>
                    <td>{o.products?.length}</td>
                  </tr>
                </tbody>
              </table>
              <div className="container">
                {o.products?.map((p) => (
                  <div className="row mb-2 p-3 card flex-row" key={p._id}>
                    <div className="col-4 col-md-3">
                      <img
                        src={`/api/product/get-product-photo/${p._id}`}
                        className="card-img-top"
                        alt={p.name}
                        style={{ width: "100%", height: "auto" }}
                      />
                    </div>
                    <div className="col-8 col-md-9">
                      <p>{p.name}</p>
                      <p>{p.description.substring(0, 30)}</p>
                      <p>Price: {p.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default AdminOrders;
