import Layout from "Layout/Index";
import {Card, Form, Input, Row, Col, InputNumber, Radio} from "antd";
import {Link} from "react-router-dom";
import ArrowBack from "Assets/icons/arrow-back.svg";
import PhoneInput from "react-phone-input-2";
import CountryComponent from "Components/CountryComponent";
import {Upload, message} from "antd";
import {InboxOutlined} from "@ant-design/icons";

const {Dragger} = Upload;

const props = {
  name: "file",
  onChange(info) {
    const {status} = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
  beforeUpload: (file) => {
    return false;
  },
};

const CreateTenant = () => {
  return (
    <Layout title='Manage Tenants' currentPage={2}>
      <div className='main-wrapper'>
        <div className='page-card manage-tenants-create'>
          <div className='page-card-header d-flex justify-content-between align-item-center'>
            {
              // breadcrumbs
            }
            <Link to='/manage-requests' className='breadcrumb'>
              <img src={ArrowBack} alt='' /> <span className='mt-0'>Back</span>
            </Link>
          </div>
          <div className='manage-tenants-create__content'>
            <Form layout='vertical' initialValues={{payment_mode: 1}}>
              {/*Personal Details*/}
              <section>
                <p className='f-16 fw-500'>Personal Information</p>
                <hr />
                <div className='mx-49'>
                  <Row gutter={[24, 16]}>
                    <Col xs={24} lg={8}>
                      <Form.Item label='First Name'>
                        <Input className='primary-input' />
                      </Form.Item>
                    </Col>
                    <Col xs={24} lg={8}>
                      <Form.Item label='Last Name'>
                        <Input className='primary-input' />
                      </Form.Item>
                    </Col>
                    <Col xs={24} lg={8}>
                      <Form.Item label='Email'>
                        <Input className='primary-input' />
                      </Form.Item>
                    </Col>
                    <Col xs={24} lg={8}>
                      <Form.Item label='Phone Number'>
                        <PhoneInput
                          country='sa'
                          placeholder='Enter phone number'
                          containerClass='primary-input-phone'
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                </div>
              </section>
              {/*Business Details*/}
              <section>
                <p className='f-16 fw-500'>Business Detail</p>
                <hr />
                <div className='mx-49'>
                  <Row gutter={[24, 16]}>
                    <Col xs={24} lg={8}>
                      <Form.Item label='Business Name'>
                        <Input className='primary-input' />
                      </Form.Item>
                    </Col>
                    <Col xs={24} lg={8}>
                      <Form.Item label='Number of Branches'>
                        <InputNumber className='primary-input-number' min={0} />
                      </Form.Item>
                    </Col>
                    <Col xs={24} lg={8}>
                      <Form.Item label='Number of Users'>
                        <InputNumber min={0} className='primary-input-number' />
                      </Form.Item>
                    </Col>
                    <Col xs={24} lg={8}>
                      <Form.Item label={"Position (Title)"}>
                        <Input className='primary-input' />
                      </Form.Item>
                    </Col>
                  </Row>
                </div>
              </section>
              {/*Billing Address*/}
              <section>
                <p className='f-16 fw-500'>Billing Address</p>
                <hr />
                <div className='mx-49'>
                  <Row gutter={[24, 16]}>
                    <Col xs={24} lg={8}>
                      <Form.Item label='Country'>
                        <CountryComponent
                          size='large'
                          style={{width: "100%"}}
                        />
                      </Form.Item>
                    </Col>
                    <Col xs={24} lg={8}>
                      <Form.Item label='Address'>
                        <InputNumber min={0} className='primary-input-number' />
                      </Form.Item>
                    </Col>
                    <Col xs={24} lg={8}>
                      <Form.Item label='City'>
                        <InputNumber min={0} className='primary-input-number' />
                      </Form.Item>
                    </Col>
                    <Col xs={24} lg={8}>
                      <Form.Item label='State'>
                        <Input className='primary-input' />
                      </Form.Item>
                    </Col>
                    <Col xs={24} lg={8}>
                      <Form.Item label='Postal / Zip code'>
                        <Input className='primary-input' />
                      </Form.Item>
                    </Col>
                  </Row>
                </div>
              </section>
              {/*Payment Information*/}
              <section>
                <p className='f-16 fw-500'>Payment Information</p>
                <hr />
                <div className='mx-49'>
                  <Row gutter={[24, 16]}>
                    <Col xs={24}>
                      <Form.Item label='Payment Mode' name='payment_mode'>
                        <Radio.Group>
                          <Radio value={1}>Cash</Radio>
                          <Radio value={2}>Cheque</Radio>
                          <Radio value={3}>Bank Transfer</Radio>
                        </Radio.Group>
                      </Form.Item>
                    </Col>
                    <Col xs={24}>
                      <div className='d-flex align-items-center'>
                        <Dragger {...props} className='p-3'>
                          <p className='ant-upload-drag-icon'>
                            <InboxOutlined />
                          </p>
                          <p className='ant-upload-text'>
                            Drag & drop file to upload
                          </p>
                          <p className='ant-upload-text'>Or</p>
                          <p className='ant-upload-text'>Browser</p>
                        </Dragger>
                        <div></div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </section>
            </Form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateTenant;
