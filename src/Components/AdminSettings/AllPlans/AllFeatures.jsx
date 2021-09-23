import {useState} from "react";
import {Checkbox} from "antd";

const AllFeatures = () => {
  const features = [
    {id: 0, title: "30 days support"},
    {id: 1, title: "Unlimited Storage"},
    {id: 2, title: "Unlimited Storage"},
    {id: 3, title: "Full Storage"},
    {id: 4, title: "Trial"},
  ];

  const [planFeatures, setPlanFeatures] = useState([
    {id: 0, title: "30 days support"},
    {id: 1, title: "Unlimited Storage"},
  ]);
  return (
    <div className='all-features'>
      <h2>
        All Features
        <u className='ml-8 color-primary f-14'>Add Feature</u>
        <p className='f-12 color-silver-chalice mt-6 mb-13'>
          You can specify features for this plan
        </p>
        <div className='row gap-4'>
          <div className='col-6 feature-box'>
            <div className='d-flex'>
              <Checkbox />
              <span className='d-block f-16 ml-8'>30 days support </span>
            </div>
          </div>
        </div>
      </h2>
    </div>
  );
};

export default AllFeatures;
