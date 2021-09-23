import {Form, Input} from "antd";

// render plan details
const PlanDetail = () => {
  return (
    <div className='plan-details'>
      <h2>Plan Detail</h2>
      <Form layout='vertical'>
        <Form.Item label='Plan Name' name='planName'>
          <Input className='primary-input plan-name-input' />
        </Form.Item>
        <div className='d-flex plan-detail-input-number'>
          <div className='mr-53'>
            <Form.Item label='Monthly Charges' name='monthlyCharges'>
              <Input
                className='primary-input'
                suffix={<span className='input-domain-suffix'>SAR</span>}
              />
            </Form.Item>
            <Form.Item label='No of Users' name='noOfUsers'>
              <Input
                className='primary-input'
                suffix={<span className='input-domain-suffix'>SAR</span>}
              />
            </Form.Item>
            <Form.Item label='Discount %' name='discount'>
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
                  Yearly Charges
                  <span className='color-primary fw-500 ml-4-px'>10 % Off</span>
                </span>
              }
              name='monthlyCharges'
            >
              <Input
                className='primary-input'
                suffix={<span className='input-domain-suffix'>SAR</span>}
              />
            </Form.Item>
            <Form.Item label='Database' name='database'>
              <Input
                className='primary-input'
                suffix={<span className='input-domain-suffix'>SAR</span>}
              />
            </Form.Item>
            <Form.Item label='VAT %' name='vat'>
              <Input
                className='primary-input'
                suffix={<span className='input-domain-suffix'>SAR</span>}
              />
            </Form.Item>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default PlanDetail;
