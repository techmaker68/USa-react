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
  Modal,
} from "antd";

import FilterIcon from "../../Assets/icons/Icon material-filter-list (2).svg";
import ExportIcon from "../../Assets/icons/Icon awesome-file-export.svg";

import Flag4 from "../../Assets/icons/Icon material-flag (4).svg";
import Flag5 from "../../Assets/icons/Icon material-flag (5).svg";
import Flag6 from "../../Assets/icons/Icon material-flag (6).svg";
import Flag7 from "../../Assets/icons/Icon material-flag (7).svg";
import SearchIcon from "../../Assets/icons/Icon material-search (2).svg";
import SettingIcon from "../../Assets/icons/Icon material-settings.svg";
import LeftIcon from "../../Assets/icons/Icon feather-chevrons-left (3).svg";
import LeftIcon1 from "../../Assets/icons/Icon feather-chevrons-left (1).svg";
import DateIcon from "../../Assets/icons/XMLID_12_.svg";

import DragIcon from "../../Assets/icons/Group 3093.svg";

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
  const columns2 = [
    {
      title: "Ticket ID",
      dataIndex: "TicketId",
      key: "TicketId",
    },
    {
      title: "Ticket Type",
      dataIndex: "TicketType",
      key: "TicketType",
    },
    {
      title: "Title",
      dataIndex: "Title",
      key: "Title",
    },
    {
      title: "Description",
      dataIndex: "Description",
      key: "Description",
    },
    {
      title: "Created by",
      dataIndex: "CreatedBy",
      key: "CreatedBy",
    },
    {
      title: "Created Date",
      dataIndex: "CreatedDate",
      key: "CreatedDate",
    },
    {
      title: "Assigned by",
      dataIndex: "AssignedBy",
      key: "AssignedBy",
    },
    {
      title: "Assigned Date",
      dataIndex: "AssignedDate",
      key: "AssignedDate",
    },
    {
      title: "Assigned To",
      dataIndex: "AssignedTo",
      key: "AssignedTo",
    },
    {
      title: "Priority",
      dataIndex: "Priority",
      key: "Priority",
    },
    {
      title: "Due date",
      dataIndex: "DueDate",
      key: "DueDate",
    },
    {
      title: "status",
      dataIndex: "Status",
      key: "Status",
    },
    {
      title: "Updated Date",
      dataIndex: "UpdatedDate",
      key: "UpdatedDate",
    },
    {
      title: "Resolution Date",
      dataIndex: "ResolutionDate",
      key: "ResolutionDate",
    },
    {
      title: "Time Spent",
      dataIndex: "TimeSpent",
      key: "TimeSpent",
    },
    {
      title: "Close Date",
      dataIndex: "CloseDate",
      key: "CloseDate",
    },
  ];

  const dataSource2 = [
    {
      key: "1",
      TicketId: 1,
      TicketType: 32,
      Title: "Demo",
      Description: "lorem",
      CreatedBy: "John",
      CreatedDate: "2020/20/1",
      AssignedBy: "John",
      AssignedDate: "2020/20/1",
      AssignedTo: "John",
      Priority: "high",
      DueDate: "2020/20/1",
      Status: "Pending",
      UpdatedDate: "2020/10/10",
      ResolutionDate: "2020/10/10",
      TimeSpent: "20hrs",
      CloseDate: "2020/10/10",
    },
    {
      key: "1",
      TicketId: 1,
      TicketType: 32,
      Title: "Demo",
      Description: "lorem",
      CreatedBy: "John",
      CreatedDate: "2020/20/1",
      AssignedBy: "John",
      AssignedDate: "2020/20/1",
      AssignedTo: "John",
      Priority: "high",
      DueDate: "2020/20/1",
      Status: "Pending",
      UpdatedDate: "2020/10/10",
      ResolutionDate: "2020/10/10",
      TimeSpent: "20hrs",
      CloseDate: "2020/10/10",
    },
    {
      key: "1",
      TicketId: 1,
      TicketType: 32,
      Title: "Demo",
      Description: "lorem",
      CreatedBy: "John",
      CreatedDate: "2020/20/1",
      AssignedBy: "John",
      AssignedDate: "2020/20/1",
      AssignedTo: "John",
      Priority: "high",
      DueDate: "2020/20/1",
      Status: "Pending",
      UpdatedDate: "2020/10/10",
      ResolutionDate: "2020/10/10",
      TimeSpent: "20hrs",
      CloseDate: "2020/10/10",
    },
    {
      key: "1",
      TicketId: 1,
      TicketType: 32,
      Title: "Demo",
      Description: "lorem",
      CreatedBy: "John",
      CreatedDate: "2020/20/1",
      AssignedBy: "John",
      AssignedDate: "2020/20/1",
      AssignedTo: "John",
      Priority: "high",
      DueDate: "2020/20/1",
      Status: "Pending",
      UpdatedDate: "2020/10/10",
      ResolutionDate: "2020/10/10",
      TimeSpent: "20hrs",
      CloseDate: "2020/10/10",
    },
    {
      key: "1",
      TicketId: 1,
      TicketType: 32,
      Title: "Demo",
      Description: "lorem",
      CreatedBy: "John",
      CreatedDate: "2020/20/1",
      AssignedBy: "John",
      AssignedDate: "2020/20/1",
      AssignedTo: "John",
      Priority: "high",
      DueDate: "2020/20/1",
      Status: "Pending",
      UpdatedDate: "2020/10/10",
      ResolutionDate: "2020/10/10",
      TimeSpent: "20hrs",
      CloseDate: "2020/10/10",
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

  const [settingModal, setSettingModal] = useState(false);

  const { Option } = Select;
  const { Panel } = Collapse;
  const { TabPane } = Tabs;
  return (
    <>
      <Layout title="Reports" currentPage="1">
        <div className="main-wrapper">
          <div className="report-page-wrapper">
            <div>
              <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="Summary Report" key="1">
                  <div className="d-flex justify-content-between">
                    <Button
                      className="filter-btn"
                      style={{
                        backgroundColor: `${filter2 ? "#1768AC" : "white"}`,
                        color: `${filter2 ? "#FFFFFF" : "#000000"}`,
                      }}
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
                                <RangePicker
                                  className="range-picker"
                                  suffixIcon={
                                    <img height="55px" src={DateIcon} />
                                  }
                                />
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
                    <Table
                      dataSource={dataSource}
                      columns={columns}
                      pagination={false}
                    />
                  </div>
                  <div className="pagination-wrapper">
                    <div className="d-flex justify-content-end pagination">
                      <img
                        src={LeftIcon}
                        style={{ marginRight: "10px" }}
                        alt=""
                      />
                      <div className="paginate-num-box">1</div>
                      <div className="paginate-num-box2">2</div>
                      <div className="paginate-num-box2">3</div>
                      <img
                        style={{ marginLeft: "10px" }}
                        src={LeftIcon1}
                        alt=""
                      />

                      <div className="d-flex images-wrap"></div>
                    </div>
                  </div>
                </TabPane>
                <TabPane tab="Detail Report" key="2">
                  <div className="d-flex justify-content-between">
                    <Button
                      className="filter-btn"
                      style={{
                        backgroundColor: `${filter ? "#1768AC" : "white"}`,
                        color: `${filter ? "#FFFFFF" : "#000000"}`,
                      }}
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
                        onClick={() => setSettingModal(!settingModal)}
                        icon={
                          <img
                            style={{ marginBottom: "3px" }}
                            src={SettingIcon}
                          />
                        }
                      ></Button>
                    </div>
                  </div>

                  <div className="data-table">
                    <Table
                      dataSource={dataSource2}
                      columns={columns2}
                      scroll={{ x: "100vw" }}
                      pagination={false}
                    />
                  </div>
                  <div className="pagination-wrapper">
                    <div className="d-flex justify-content-end pagination">
                      <img
                        src={LeftIcon}
                        style={{ marginRight: "10px" }}
                        alt=""
                      />
                      <div className="paginate-num-box">1</div>
                      <div className="paginate-num-box2">2</div>
                      <div className="paginate-num-box2">3</div>
                      <img
                        style={{ marginLeft: "10px" }}
                        src={LeftIcon1}
                        alt=""
                      />

                      <div className="d-flex images-wrap"></div>
                    </div>
                  </div>
                </TabPane>
              </Tabs>
            </div>
          </div>
        </div>
      </Layout>

      <Modal
        title="Table Setting"
        visible={settingModal}
        onOk={() => setSettingModal(false)}
        onCancel={() => setSettingModal(false)}
        className="setting-modal"
        footer={false}
      >
        <p className="t1">
          Alter the columns of table by making selection below
        </p>

        <div className="coloumns-wrapper d-flex">
          <div>
            <div className="d-flex">
              <img src={DragIcon} style={{ marginRight: "11px" }} alt="" />
              <Checkbox>Ticket ID</Checkbox>
              <br />
            </div>
            <div className="d-flex dl">
              <img src={DragIcon} style={{ marginRight: "11px" }} alt="" />
              <Checkbox>Ticket Type</Checkbox>
              <br />
            </div>
            <div className="d-flex dl">
              <img src={DragIcon} style={{ marginRight: "11px" }} alt="" />
              <Checkbox>Title</Checkbox>
              <br />
            </div>
            <div className="d-flex dl">
              <img src={DragIcon} style={{ marginRight: "11px" }} alt="" />
              <Checkbox>Description</Checkbox>
              <br />
            </div>
            <div className="d-flex dl">
              <img src={DragIcon} style={{ marginRight: "11px" }} alt="" />
              <Checkbox>Created By</Checkbox>
              <br />
            </div>
            <div className="d-flex dl">
              <img src={DragIcon} style={{ marginRight: "11px" }} alt="" />
              <Checkbox>Created Date</Checkbox>
              <br />
            </div>
            <div className="d-flex dl">
              <img src={DragIcon} style={{ marginRight: "11px" }} alt="" />
              <Checkbox>Assigned By</Checkbox>
              <br />
            </div>
            <div className="d-flex dl">
              <img src={DragIcon} style={{ marginRight: "11px" }} alt="" />
              <Checkbox>Assigned Date</Checkbox>
              <br />
            </div>
            <div className="d-flex dl">
              <img src={DragIcon} style={{ marginRight: "11px" }} alt="" />
              <Checkbox>Assigned to</Checkbox>
              <br />
            </div>
            <div className="d-flex dl">
              <img src={DragIcon} style={{ marginRight: "11px" }} alt="" />
              <Checkbox>Priority</Checkbox>
              <br />
            </div>
            <div className="d-flex dl">
              <img src={DragIcon} style={{ marginRight: "11px" }} alt="" />
              <Checkbox>Due Date</Checkbox>
              <br />
            </div>
          </div>

          <div style={{ marginLeft: "184px" }}>
            <div className="d-flex">
              <img src={DragIcon} style={{ marginRight: "11px" }} alt="" />
              <Checkbox>Status</Checkbox>
              <br />
            </div>
            <div className="d-flex dl">
              <img src={DragIcon} style={{ marginRight: "11px" }} alt="" />
              <Checkbox> Update Status</Checkbox>
              <br />
            </div>
            <div className="d-flex dl">
              <img src={DragIcon} style={{ marginRight: "11px" }} alt="" />
              <Checkbox> Resolution Date</Checkbox>
              <br />
            </div>
            <div className="d-flex dl">
              <img src={DragIcon} style={{ marginRight: "11px" }} alt="" />
              <Checkbox> Time Spent</Checkbox>
              <br />
            </div>
            <div className="d-flex dl">
              <img src={DragIcon} style={{ marginRight: "11px" }} alt="" />
              <Checkbox> Close date</Checkbox>
              <br />
            </div>
          </div>
        </div>

        <div className="btns-wrapper">
          <Button className="btn-cancel">Cancel</Button>
          <Button className="btn-save">Save</Button>
        </div>
      </Modal>
    </>
  );
}

export default Report;
