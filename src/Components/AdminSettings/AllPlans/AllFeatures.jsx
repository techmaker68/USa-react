import {useState} from "react";
import PlusIcon from "Assets/icons/plus.svg";
import {Checkbox, Input, Button, Form} from "antd";

const AllFeatures = () => {
  const [features, setFeatures] = useState([
    {id: 0, title: "30 days support"},
    {id: 1, title: "Unlimited Storage"},
    {id: 2, title: "Unlimited Storage"},
    {id: 3, title: "Full Storage"},
    {id: 4, title: "Trial"},
  ]);

  const [planFeatures, setPlanFeatures] = useState([
    {id: 0, title: "30 days support"},
    {id: 1, title: "Unlimited Storage"},
    {id: 2, title: "Unlimited Storage"},
  ]);
  const [newFeatureModal, setNewFeatureModal] = useState(false);

  const handleFeatureToggle = () => {
    setNewFeatureModal(!newFeatureModal);
  };

  const handleAddNewFeature = () => {
    setNewFeatureModal(false);
  };

  const handleFeatureSubmit = (values) => {
    setNewFeatureModal(false);
    setPlanFeatures([...planFeatures, {title: values.feature, id: null}]);
  };
  return (
    <div className='all-features'>
      <div className='position-relative d-inline-block'>
        <h2>
          All Features
          <u
            className='ml-8 color-primary f-14 cursor-pointer'
            onClick={handleFeatureToggle}
          >
            Add Feature
          </u>
        </h2>
        <p className='f-12 color-silver-chalice mt-6 mb-13'>
          You can specify features for this plan
        </p>
        {
          // feature modal
        }

        <div className='row gap-4'>
          {Array.isArray(planFeatures) &&
            planFeatures.map((feature, index) => (
              <div key={feature?.id || index} className='col-6 feature-box'>
                <div className='d-flex'>
                  <Checkbox style={{marginTop: 2}} />
                  <span className='d-block f-16 ml-8'>{feature?.title}</span>
                </div>
              </div>
            ))}
        </div>
        {newFeatureModal && (
          <Form onFinish={handleFeatureSubmit}>
            <div className='feature-modal'>
              <h3 className='f-12 fw-500 mb-8'>Feature Name</h3>
              <Form.Item name='feature'>
                <Input className='primary-input' />
              </Form.Item>

              <div className='d-flex justify-content-end align-items-center mt-16'>
                <Button
                  htmlType='reset'
                  className='default-button mr-16'
                  onClick={handleFeatureToggle}
                >
                  Cancel
                </Button>

                <Button htmlType='submit' className='primary-button'>
                  <img src={PlusIcon} alt='' /> Add
                </Button>
              </div>
              <div className='triangle'></div>
            </div>
          </Form>
        )}
      </div>
    </div>
  );
};

export default AllFeatures;
