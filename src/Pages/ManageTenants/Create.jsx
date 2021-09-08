import Layout from "../../Layout/Index";
import {Card, Form, Input, Row, Col, InputNumber} from "antd";
import {Link} from "react-router-dom";
import ArrowBack from "../../Assets/icons/arrow-back.svg";
import PhoneInput from 'react-phone-input-2'

const CreateTenant = () => {
    return (
        <Layout title='Manage Tenants' currentPage={2}>
            <Card
                className={"p-49"}
                style={{margin: 28}}
                title={<><Link to={"/manage-tenants"}> <img src={ArrowBack} alt={""} width={"20"} height={"15"}/>
                </Link><span className={"fw-700"}>Create Tenant</span></>}
            >
                <Form layout={"vertical"}>
                    {/*Personal Details*/}
                    <section>
                        <p className="f-16 fw-600">Personal Information</p>
                        <hr/>
                        <div className="p-49">
                            <Row gutter={[24, 16]}>
                                <Col xs={24} lg={8}>
                                    <Form.Item label={"First Name"}>
                                        <Input size={"large"} style={{width:"100%"}}/>
                                    </Form.Item>
                                </Col>
                                <Col xs={24} lg={8}>
                                    <Form.Item label={"Last Name"}>
                                        <Input size={"large"} style={{width:"100%"}}/>
                                    </Form.Item>
                                </Col>
                                <Col xs={24} lg={8}>
                                    <Form.Item label={"Email"}>
                                        <Input size={"large"} style={{width:"100%"}}/>
                                    </Form.Item>
                                </Col>
                                <Col xs={24} lg={8}>
                                    <Form.Item label={"Phone Number"}>
                                        <PhoneInput
                                            country={"sa"}
                                            placeholder="Enter phone number"
                                            inputClass={"w-100"}
                                            />
                                    </Form.Item>
                                </Col>
                            </Row>
                        </div>
                    </section>

                {/*Business Details*/}
                    <section>
                        <p className="f-16 fw-600">Business Detail</p>
                        <hr/>
                        <div className="p-49">
                            <Row gutter={[24, 16]}>
                                <Col xs={24} lg={8}>
                                    <Form.Item label={"Business Name"}>
                                        <Input size={"large"} style={{width:"100%"}}/>
                                    </Form.Item>
                                </Col>
                                <Col xs={24} lg={8}>
                                    <Form.Item label={"Number of Branches"}>
                                        <InputNumber min={0} size={"large"} style={{width:"100%"}}/>
                                    </Form.Item>
                                </Col>
                                <Col xs={24} lg={8}>
                                    <Form.Item label={"Number of Users"}>
                                        <InputNumber min={0} size={"large"} style={{width:"100%"}}/>
                                    </Form.Item>
                                </Col>
                                <Col xs={24} lg={8}>
                                    <Form.Item label={"Position (Title)"}>
                                        <Input size={"large"} style={{width:"100%"}}/>
                                    </Form.Item>
                                </Col>
                            </Row>
                        </div>
                    </section>

                    {/*Billing Address*/}
                    <section>
                        <p className="f-16 fw-600">Billing Address</p>
                        <hr/>
                        <div className="p-49">
                            <Row gutter={[24, 16]}>
                                <Col xs={24} lg={8}>
                                    <Form.Item label={"Business Name"}>
                                        <Countr size={"large"} style={{width:"100%"}}/>
                                    </Form.Item>
                                </Col>
                                <Col xs={24} lg={8}>
                                    <Form.Item label={"Number of Branches"}>
                                        <InputNumber min={0} size={"large"} style={{width:"100%"}}/>
                                    </Form.Item>
                                </Col>
                                <Col xs={24} lg={8}>
                                    <Form.Item label={"Number of Users"}>
                                        <InputNumber min={0} size={"large"} style={{width:"100%"}}/>
                                    </Form.Item>
                                </Col>
                                <Col xs={24} lg={8}>
                                    <Form.Item label={"Position (Title)"}>
                                        <Input size={"large"} style={{width:"100%"}}/>
                                    </Form.Item>
                                </Col>
                            </Row>
                        </div>
                    </section>

                </Form>
            </Card>
        </Layout>
    );
};

export default CreateTenant;
