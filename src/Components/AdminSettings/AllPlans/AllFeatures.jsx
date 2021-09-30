import {useState} from "react";
import PlusIcon from "Assets/icons/plus.svg";
import FeatureCloseIcon from "Assets/icons/featureCloseIcon.svg";
import {Checkbox, Input, Button} from "antd";

const AllFeatures = ({features, setFeatures, newFeatures, setNewFeatures}) => {
  const [newFeatureModal, setNewFeatureModal] = useState(false);
  const [newFeature, setNewFeature] = useState("");
  const handleFeatureToggle = () => {
    setNewFeatureModal(!newFeatureModal);
  };

  const handleCreateNewFeature = () => {
    setNewFeatureModal(false);
    setNewFeatures([...newFeature, {title: newFeature, id: null}]);
    setNewFeature("");
  };

  const handleFeatureChange = ({target}) => {
    if (target.value !== "") setNewFeature(target.value);
  };

  const isFeatureChecked = (id) => {
    return features.some((feature) => feature.id === id || feature?.new);
  };

  const handleFeatureChecked = (doDelete, index) => {
    if (!doDelete) {
      features.map((feature, i) => {
        let temp = feature;
        if (i === index) temp.unCheck = true;
        return temp;
      });
    } else {
      features.map((feature, i) => {
        let temp = feature;
        if (i === index) temp.unCheck = false;
        return temp;
      });
    }
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
          {Array.isArray(features) &&
            features.map((feature, index) => (
              <div key={feature?.id || index} className='col-6 feature-box'>
                <div className='d-flex'>
                  <Checkbox
                    onChange={({target}) =>
                      handleFeatureChecked(target.checked, index)
                    }
                    defaultChecked={true}
                    style={{marginTop: 2}}
                  />

                  <span className='d-block f-16 ml-8'>{feature?.title}</span>
                </div>
                <img
                  onClick={handleFeatureChecked(true, index)}
                  src={FeatureCloseIcon}
                  alt=''
                />
              </div>
            ))}
        </div>
        {newFeatureModal && (
          <div className='feature-modal'>
            <h3 className='f-12 fw-500 mb-8'>Feature Name</h3>
            <Input
              className='primary-input'
              value={newFeature}
              onChange={handleFeatureChange}
            />

            <div className='d-flex justify-content-end align-items-center mt-16'>
              <Button
                htmlType='reset'
                className='default-button mr-16'
                onClick={handleFeatureToggle}
              >
                Cancel
              </Button>

              <Button
                onClick={handleCreateNewFeature}
                className='primary-button'
              >
                <img src={PlusIcon} alt='' /> Add
              </Button>
            </div>
            <div className='triangle'></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllFeatures;
