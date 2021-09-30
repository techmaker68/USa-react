import {Form, Input} from "antd";
import {Rules} from "Constants/Global";

// render plan details
const PlanDetail = ({charges, handleCharges}) => {
  return (
    <div className='plan-details'>
      <h2>Plan Detail</h2>

      <Form.Item label='Plan Name' name='planName' rules={Rules.Required}>
        <Input className='primary-input plan-name-input' />
      </Form.Item>
      <div className='d-flex plan-detail-input-number'>
        <div className='mr-53'>
          <Form.Item label='Monthly Charges' rules={Rules.Required}>
            <Input
              onChange={handleCharges}
              value={charges?.monthlyCharges}
              name='monthlyCharges'
              className='primary-input'
              suffix={<span className='input-domain-suffix'>SAR</span>}
            />
          </Form.Item>
          <Form.Item
            label='No of Users'
            name='numberOfUsers'
            rules={Rules.Required}
          >
            <Input
              className='primary-input'
              suffix={<span className='input-domain-suffix'>SAR</span>}
            />
          </Form.Item>
          <Form.Item
            label='Discount %'
            name='discountPercentage'
            rules={Rules.Required}
          >
            <Input
              className='primary-input'
              suffix={<span className='input-domain-suffix'>SAR</span>}
            />
          </Form.Item>
        </div>
        <div>
          <Form.Item
            label={
              <span className='fw-500 text-nowrap'>
                Annually Charges
                <span className='color-primary fw-500 ml-4-px'>
                  {charges?.discount} % Off
                </span>
              </span>
            }
            rules={Rules.Required}
          >
            <Input
              className='primary-input'
              onChange={handleCharges}
              name='annuallyCharges'
              value={charges?.annuallyCharges}
              suffix={<span className='input-domain-suffix'>SAR</span>}
            />
          </Form.Item>
          <Form.Item
            label='Database'
            name='databaseSize'
            rules={Rules.Required}
          >
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
