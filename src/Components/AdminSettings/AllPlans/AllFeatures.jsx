import {useState} from "react";
import PlusIcon from "Assets/icons/plus.svg";
import FeatureCloseIcon from "Assets/icons/featureCloseIcon.svg";
import {Checkbox, Input, Button} from "antd";

const AllFeatures = ({features, setFeatures}) => {
  const [newFeatureModal, setNewFeatureModal] = useState(false);
  const [newFeature, setNewFeature] = useState("");
  const handleFeatureToggle = () => {
    setNewFeatureModal(!newFeatureModal);
  };

  const handleCreateNewFeature = () => {
    setNewFeatureModal(false);
    setFeatures([...features, {title: newFeature, id: -1, check: true}]);

    setNewFeature("");
  };

  const handleFeatureChange = ({target}) => {
    if (target.value !== "") setNewFeature(target.value);
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
              <Feature
                key={index}
                feature={feature}
                features={features}
                index={index}
                setFeatures={setFeatures}
              />
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

const Feature = ({feature, index, features, setFeatures}) => {
  const [checked, setChecked] = useState(
    feature?.check ? feature?.check : false
  );

  // handle feature checkbox toggle
  const handleCheckedChange = () => {
    setChecked(!checked);

    if (checked) {
      setFeatures(
        features.map((feature, i) => {
          let temp = feature;
          if (i === index) temp.check = !checked;
          return temp;
        })
      );
    } else {
      setFeatures(
        features.map((feature, i) => {
          let temp = feature;
          if (i === index) temp.check = !checked;
          return temp;
        })
      );
    }
  };

  // handle feature delete

  const handleFeatureDelete = () => {
    setFeatures(features.filter((feature, i) => i !== index));
  };

  return (
    <div key={feature?.id || index} className='col-6 feature-box'>
      <div className='d-flex'>
        <Checkbox
          onChange={handleCheckedChange}
          checked={checked}
          style={{marginTop: 2}}
        />

        <span className='d-block f-16 ml-8'>{feature?.title}</span>
      </div>
      <img src={FeatureCloseIcon} onClick={handleFeatureDelete} alt='' />
    </div>
  );
};
