import Layout from "Layout/Index";
import {Link} from "react-router-dom";
import ArrowBack from "Assets/icons/arrow-back.svg";
import CameraIcon from "Assets/icons/camera.svg";
import {Button, Form, Input} from "antd";

const Index = () => {
  return (
    <Layout currentPage={5} title='User Management'>
      <div className='main-wrapper'>
        <div className='page-card business-info-wrapper'>
          <Form layout='vertical'>
            <div className='page-card-header'>
              {
                // breadcrumbs
              }
              <span className='mt-0'>Business Details</span>
            </div>
            {
              // content
            }
            <div className='business-profile'>
              <label htmlFor='profile'>
                <div className='profile'>
                  <img src={CameraIcon} alt='' />
                  <p>Add Logo</p>
                </div>
                <input type='file' className='d-none' id='profile' />
              </label>
            </div>
            {
              // geenral details
            }
            <div className='general-details'>
              <h1 className='f-14 fw-500 color-gray'> General Information</h1>
              <div className='d-flex'>
                <Form.Item label='Seller Name (Arabic)' className='mr-24'>
                  <Input className='primary-input' />
                </Form.Item>
                <Form.Item label='Seller Name (English)' className='mr-24'>
                  <Input className='primary-input' />
                </Form.Item>
                <Form.Item label='Email'>
                  <Input className='primary-input' />
                </Form.Item>
              </div>
              <div className='d-flex'>
                <Form.Item label='Business Name (Arabic)' className='mr-24'>
                  <Input className='primary-input' />
                </Form.Item>
                <Form.Item label='Business Name (English)' className='mr-24'>
                  <Input className='primary-input' />
                </Form.Item>
                <Form.Item label='Business Tagline (Arabic)' className='mr-24'>
                  <Input className='primary-input' />
                </Form.Item>
                <Form.Item label='Business Tagline (English)'>
                  <Input className='primary-input' />
                </Form.Item>
              </div>
              <div className='d-flex'>
                <Form.Item label='Mobile' className='mr-24'>
                  <Input className='primary-input' />
                </Form.Item>
                <Form.Item label='Telephone' className='mr-24'>
                  <Input className='primary-input' />
                </Form.Item>
              </div>
              <div className='d-flex'>
                <Form.Item label='District' className='mr-24'>
                  <Input className='primary-input' />
                </Form.Item>
                <Form.Item label='City' className='mr-24'>
                  <Input className='primary-input' />
                </Form.Item>
                <Form.Item label='Street Name (Arabic)' className='mr-24'>
                  <Input className='primary-input' />
                </Form.Item>
                <Form.Item label='Street Name (English)' className='mr-24'>
                  <Input className='primary-input' />
                </Form.Item>
              </div>
              <div className='d-flex'>
                <Form.Item label='Postal Code' className='mr-24'>
                  <Input className='primary-input' />
                </Form.Item>
              </div>

              {
                //tax details
              }
              <h1 className='f-14 fw-500 color-gray mt-24'> Tax Details</h1>
              <div className='d-flex'>
                <Form.Item label='VAT Number' className='mr-24'>
                  <Input className='primary-input' />
                </Form.Item>
                <Form.Item label='Group VAT Number' className='mr-24'>
                  <Input className='primary-input' />
                </Form.Item>
                <Form.Item label='CR' className='mr-24'>
                  <Input className='primary-input' />
                </Form.Item>
              </div>
              {
                // action
              }
              <div className='d-flex justify-content-end align-items-center mt-16'>
                <Button className='default-button  btn-role mr-16'>
                  Cancel
                </Button>
                <Button className='primary-button  btn-role'>
                  Create Role
                </Button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
