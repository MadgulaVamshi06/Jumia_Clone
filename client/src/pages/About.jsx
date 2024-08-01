import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          Delivering your advertising material, or products samples within our daily delivered nationwide packages. In addition to Advertising at Jumia sites (customer pickup stations and vendors drop off stations) visited by thousands of visitors on a monthly basis.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;