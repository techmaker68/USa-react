import {Form, Input} from "antd";

// render plan details
const PlanDetail = ({charges, handleCharges}) => {
  return (
    <div className='plan-details'>
      <h2>Plan Detail</h2>

      <Form.Item label='Plan Name' name='planName'>
        <Input className='primary-input plan-name-input' />
      </Form.Item>
      <div className='d-flex plan-detail-input-number'>
        <div className='mr-53'>
          <Form.Item label='Monthly Charges'>
            <Input
              onChange={handleCharges}
              value={charges?.monthlyCharges}
              name='monthlyCharges'
              className='primary-input'
              suffix={<span className='input-domain-suffix'>SAR</span>}
            />
          </Form.Item>
          <Form.Item label='No of Users' name='numberOfUsers'>
            <Input
              className='primary-input'
              suffix={<span className='input-domain-suffix'>SAR</span>}
            />
          </Form.Item>
          <Form.Item label='Discount %' name='discountPercentage'>
            <Input
              className='primary-input'
              suffix={<span className='input-domain-suffix'>SAR</span>}
            />
          </Form.Item>
        </div>
        <div>
          <Form.Item
            label={
              <span className='fw-500'>
                Annually Charges
                <span className='color-primary fw-500 ml-4-px'>
                  {charges?.discount} % Off
                </span>
              </span>
            }
          >
            <Input
              className='primary-input'
              onChange={handleCharges}
              name='annuallyCharges'
              value={charges?.annuallyCharges}
              suffix={<span className='input-domain-suffix'>SAR</span>}
            />
          </Form.Item>
          <Form.Item label='Database' name='databaseSize'>
            <Input
              className='primary-input'
              suffix={<span className='input-domain-suffix'>SAR</span>}
            />
          </Form.Item>
        </div>
      </div>
    </div>
  );
};

export default PlanDetail;
