import React from "react";
import Layout from "Layout/Index";
import {
  Tabs,
  Collapse,
  Button,
  Select,
  Form,
  Checkbox,
  DatePicker,
  Input,
  Table,
} from "antd";

import FilterIcon from "../../Assets/icons/Icon material-filter-list (2).svg";
import ExportIcon from "../../Assets/icons/Icon awesome-file-export.svg";

import Flag4 from "../../Assets/icons/Icon material-flag (4).svg";
import Flag5 from "../../Assets/icons/Icon material-flag (5).svg";
import Flag6 from "../../Assets/icons/Icon material-flag (6).svg";
import Flag7 from "../../Assets/icons/Icon material-flag (7).svg";
import SearchIcon from "../../Assets/icons/Icon material-search (2).svg";
import SettingIcon from "../../Assets/icons/Icon material-settings.svg";

import { useState } from "react";

function Report(props) {
  const dataSource = [
    {
      key: "1",
      username: "John Doe",
      TotalAssigned: 32,
      New: "10 Downing Street",
      Inprogress: 32,
      SupportTeam: 32,
      TechnicalTeam: 32,
      Resolved: 32,
      waitingForCustomer: 32,
      Closed: 32,
      Reopen: 32,
    },
    {
      key: "1",
      username: "John Doe",
      TotalAssigned: 32,
      New: "10 Downing Street",
      Inprogress: 32,
      SupportTeam: 32,
      TechnicalTeam: 32,
      Resolved: 32,
      waitingForCustomer: 32,
      Closed: 32,
      Reopen: 32,
    },
    {
      key: "1",
      username: "John Doe",
      TotalAssigned: 32,
      New: "10 Downing Street",
      Inprogress: 32,
      SupportTeam: 32,
      TechnicalTeam: 32,
      Resolved: 32,
      waitingForCustomer: 32,
      Closed: 32,
      Reopen: 32,
    },
    {
      key: "1",
      username: "John Doe",
      TotalAssigned: 32,
      New: "10 Downing Street",
      Inprogress: 32,
      SupportTeam: 32,
      TechnicalTeam: 32,
      Resolved: 32,
      waitingForCustomer: 32,
      Closed: 32,
      Reopen: 32,
    },
    {
      key: "1",
      username: "John Doe",
      TotalAssigned: 32,
      New: "10 Downing Street",
      Inprogress: 32,
      SupportTeam: 32,
      TechnicalTeam: 32,
      Resolved: 32,
      waitingForCustomer: 32,
      Closed: 32,
      Reopen: 32,
    },
  ];

  const columns = [
    {
      title: "User Name",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Total Assigned",
      dataIndex: "TotalAssigned",
      key: "total",
    },
    {
      title: "New",
      dataIndex: "New",
      key: "new",
    },
    {
      title: "In progress",
      dataIndex: "Inprogress",
      key: "Inprogress",
    },
    {
      title: "Support Team",
      dataIndex: "SupportTeam",
      key: "SupportTeam",
    },
    {
      title: "Technical Team",
      dataIndex: "TechnicalTeam",
      key: "TechnicalTeam",
    },
    {
      title: "Resolved",
      dataIndex: "Resolved",
      key: "Resolved",
    },
    {
      title: "Waiting for Customer",
      dataIndex: "waitingForCustomer",
      key: "waitingForCustomer",
    },
    {
      title: "Closed",
      dataIndex: "Closed",
      key: "Closed",
    },
    {
      title: "Reopen",
      dataIndex: "Reopen",
      key: "Reopen",
    },
  ];
  function callback(key) {
    console.log(key);
  }
  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }
  const { RangePicker } = DatePicker;
  const [filter, setFilter] = useState(false);
  const [filter2, setFilter2] = useState(false);

  const { Option } = Select;
  const { Panel } = Collapse;
  const { TabPane } = Tabs;
  return (
    <Layout title="Reports" currentPage="1">
      <div className="main-wrapper">
        <div className="report-page-wrapper">
          <div>
            <Tabs defaultActiveKey="1" onChange={callback}>
              <TabPane tab="Summary Report" key="1">
                <div className="d-flex justify-content-between">
                  <Button
                    className="filter-btn"
                    onClick={() => setFilter2(!filter2)}
                  >
                    Filter
                    <img
                      style={{ marginLeft: "10px", marginBottom: "3px" }}
                      src={FilterIcon}
                      alt=""
                    />
                  </Button>
                  <Button className="export-btn">
                    Export
                    <img
                      src={ExportIcon}
                      style={{ marginLeft: "10px", marginBottom: "3px" }}
                      alt=""
                    />
                  </Button>
                </div>

                {true && (
                  <div
                    className={
                      filter2
                        ? "filter-wrapper2 animate-filter-wrapper2"
                        : "filter-wrapper2"
                    }
                  >
                    <div className="filter-padding">
                      <Form>
                        <div className="d-flex justify-content-between">
                          <div>
                            <p className="t1">Duration</p>

                            <Form.Item>
                              <Select defaultValue="" style={{ width: 120 }}>
                                <Option value="jack">Created Date</Option>
                                <Option value="lucy">Due date</Option>

                                <Option value="Yiminghe">Updated date</Option>
                              </Select>
                            </Form.Item>
                          </div>
                          <div>
                            <p className="t1">Date (From-To)</p>

                            <Form.Item>
                              <RangePicker className="range-picker" />
                            </Form.Item>
                          </div>

                          <div>
                            <p className="t1">Users</p>

                            <Form.Item>
                              <Select
                                defaultValue=""
                                className="status-select"
                                style={{ width: 120, height: "38px" }}
                              >
                                <Option value="lucy">
                                  <Checkbox>New</Checkbox>
                                </Option>
                                <Option value="lucy">
                                  <Checkbox>In Progress</Checkbox>
                                </Option>{" "}
                                <Option value="lucy">
                                  <Checkbox>Support Team Resolved</Checkbox>
                                </Option>{" "}
                                <Option value="lucy">
                                  <Checkbox>TEchnical team Resolved</Checkbox>
                                </Option>{" "}
                                <Option value="lucy">
                                  <Checkbox>Rsolved</Checkbox>
                                </Option>
                              </Select>
                            </Form.Item>
                          </div>
                          <div>
                            <p className="t1">Priority</p>

                            <Form.Item>
                              <Select
                                defaultValue=""
                                className="assigned-by"
                                style={{ width: 120 }}
                              >
                                <Option value="lucy">
                                  <Checkbox>DEmo 1</Checkbox>
                                </Option>
                                <Option value="lucy">
                                  <Checkbox>Demo 2</Checkbox>
                                </Option>{" "}
                                <Option value="lucy">
                                  <Checkbox>Demo 3</Checkbox>
                                </Option>{" "}
                                <Option value="lucy">
                                  <Checkbox>Demo 4</Checkbox>
                                </Option>{" "}
                                <Option value="lucy">
                                  <Checkbox>Demo 5</Checkbox>
                                </Option>
                              </Select>
                            </Form.Item>
                          </div>
                        </div>
                      </Form>

                      <div className="btns-wrap">
                        <Button className="btn-clear">Clear</Button>
                        <Button className="btn-apply">Apply</Button>
                      </div>
                    </div>
                  </div>
                )}

                <div className="d-flex table-wrapper justify-content-between">
                  <p className="t2">All Summary Reports (100)</p>

                  <Input
                    className="searchinput"
                    prefix={<img src={SearchIcon} />}
                  ></Input>
                </div>

                <div className="data-table">
                  <Table dataSource={dataSource} columns={columns} />
                </div>
              </TabPane>
              <TabPane tab="Daily Report" key="2">
                <div className="d-flex justify-content-between">
                  <Button
                    className="filter-btn"
                    onClick={() => setFilter(!filter)}
                  >
                    Filter
                    <img
                      style={{ marginLeft: "10px", marginBottom: "3px" }}
                      src={FilterIcon}
                      alt=""
                    />
                  </Button>
                  <Button className="export-btn">
                    Export
                    <img
                      src={ExportIcon}
                      style={{ marginLeft: "10px", marginBottom: "3px" }}
                      alt=""
                    />
                  </Button>
                </div>

                {true && (
                  <div
                    className={
                      filter
                        ? "filter-wrapper animate-filter-wrapper"
                        : "filter-wrapper"
                    }
                  >
                    <Form>
                      <div className="d-flex justify-content-between">
                        <div>
                          <p className="t1">Date</p>

                          <Form.Item>
                            <Select defaultValue="" style={{ width: 120 }}>
                              <Option value="jack">Created Date</Option>
                              <Option value="lucy">Due date</Option>

                              <Option value="Yiminghe">Updated date</Option>
                            </Select>
                          </Form.Item>
                        </div>
                        <div>
                          <p className="t1">Duration</p>

                          <Form.Item>
                            <Select defaultValue="" style={{ width: 120 }}>
                              <Option value="jack"></Option>
                              <Option value="lucy">Yesterday</Option>
                            </Select>
                          </Form.Item>
                        </div>

                        <div>
                          <p className="t1">Status</p>

                          <Form.Item>
                            <Select
                              defaultValue=""
                              className="status-select"
                              style={{ width: 120, height: "38px" }}
                            >
                              <Option value="lucy">
                                <Checkbox>New</Checkbox>
                              </Option>
                              <Option value="lucy">
                                <Checkbox>In Progress</Checkbox>
                              </Option>{" "}
                              <Option value="lucy">
                                <Checkbox>Support Team Resolved</Checkbox>
                              </Option>{" "}
                              <Option value="lucy">
                                <Checkbox>TEchnical team Resolved</Checkbox>
                              </Option>{" "}
                              <Option value="lucy">
                                <Checkbox>Rsolved</Checkbox>
                              </Option>
                            </Select>
                          </Form.Item>
                        </div>
                        <div>
                          <p className="t1">Assigned by</p>

                          <Form.Item>
                            <Select
                              defaultValue=""
                              className="assigned-by"
                              style={{ width: 120 }}
                            >
                              <Option value="lucy">
                                <Checkbox>DEmo 1</Checkbox>
                              </Option>
                              <Option value="lucy">
                                <Checkbox>Demo 2</Checkbox>
                              </Option>{" "}
                              <Option value="lucy">
                                <Checkbox>Demo 3</Checkbox>
                              </Option>{" "}
                              <Option value="lucy">
                                <Checkbox>Demo 4</Checkbox>
                              </Option>{" "}
                              <Option value="lucy">
                                <Checkbox>Demo 5</Checkbox>
                              </Option>
                            </Select>
                          </Form.Item>
                        </div>

                        <div>
                          <p className="t1">Priority</p>

                          <Form.Item>
                            <Select
                              defaultValue=""
                              className="assigned-by"
                              style={{ width: 120 }}
                            >
                              <Option value="lucy">
                                <img
                                  src={Flag4}
                                  style={{ marginRight: "14px" }}
                                  alt=""
                                />
                                un organized
                              </Option>
                              <Option value="lucy">
                                <img
                                  src={Flag5}
                                  style={{ marginRight: "14px" }}
                                  alt=""
                                />
                                High
                              </Option>{" "}
                              <Option value="lucy">
                                <img
                                  src={Flag6}
                                  style={{ marginRight: "14px" }}
                                  alt=""
                                />
                                Medium
                              </Option>{" "}
                              <Option value="lucy">
                                <img
                                  src={Flag7}
                                  style={{ marginRight: "14px" }}
                                  alt=""
                                />
                                Low
                              </Option>
                            </Select>
                          </Form.Item>
                        </div>
                      </div>
                      <div className="d-flex">
                        <div>
                          <p className="t1">Ticket Type</p>

                          <Form.Item>
                            <Select defaultValue="" style={{ width: 170 }}>
                              <Option value="lucy">
                                <Checkbox>Demo1</Checkbox>
                              </Option>
                              <Option value="lucy">
                                <Checkbox>Demo 2</Checkbox>
                              </Option>{" "}
                            </Select>
                          </Form.Item>
                        </div>
                        <div style={{ marginLeft: "30px" }}>
                          <p className="t1">Source</p>

                          <Form.Item>
                            <Select defaultValue="" style={{ width: 170 }}>
                              <Option value="lucy">
                                <Checkbox>Demo1</Checkbox>
                              </Option>
                              <Option value="lucy">
                                <Checkbox>Demo 2</Checkbox>
                              </Option>{" "}
                            </Select>
                          </Form.Item>
                        </div>

                        <div style={{ marginLeft: "30px" }}>
                          <p className="t1">Team</p>

                          <Form.Item>
                            <Select
                              defaultValue=""
                              style={{
                                width: 170,
                                height: "38px",
                              }}
                            >
                              <Option value="lucy">
                                <Checkbox>Team 1</Checkbox>
                              </Option>
                              <Option value="lucy">
                                <Checkbox>Team 2</Checkbox>
                              </Option>{" "}
                              <Option value="lucy">
                                <Checkbox>Team 3</Checkbox>
                              </Option>
                            </Select>
                          </Form.Item>
                        </div>
                        <div style={{ marginLeft: "30px" }}>
                          <p className="t1">Assigned by</p>

                          <Form.Item>
                            <Select
                              defaultValue=""
                              className="assigned-by"
                              style={{ width: 120 }}
                            >
                              <Option value="lucy">
                                <Checkbox>DEmo 1</Checkbox>
                              </Option>
                              <Option value="lucy">
                                <Checkbox>Demo 2</Checkbox>
                              </Option>{" "}
                              <Option value="lucy">
                                <Checkbox>Demo 3</Checkbox>
                              </Option>{" "}
                              <Option value="lucy">
                                <Checkbox>Demo 4</Checkbox>
                              </Option>{" "}
                              <Option value="lucy">
                                <Checkbox>Demo 5</Checkbox>
                              </Option>
                            </Select>
                          </Form.Item>
                        </div>
                      </div>
                    </Form>

                    <div className="btns-wrap">
                      <Button className="btn-clear">Clear</Button>
                      <Button className="btn-apply">Apply</Button>
                    </div>
                  </div>
                )}
                <div className="d-flex table-wrapper justify-content-between">
                  <p className="t2">All Detail Reports (100)</p>

                  <div className="d-flex">
                    <Input
                      className="searchinput"
                      prefix={<img src={SearchIcon} />}
                    ></Input>

                    <Button
                      className="setting-btn"
                      icon={<img src={SettingIcon} />}
                    ></Button>
                  </div>
                </div>

                <div className="data-table">
                  <Table dataSource={dataSource} columns={columns} />
                </div>
              </TabPane>
            </Tabs>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Report;
