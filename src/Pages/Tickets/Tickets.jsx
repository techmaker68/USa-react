import React, { useState } from "react";
import Layout from "Layout/Index";
import { Modal, Button } from "antd";

import { Link } from "react-router-dom";
import SearchIcon from "../../Assets/icons/Icon material-search (1).svg";
import AddIcon from "../../Assets/icons/Icon material-add.svg";
import FlagIcon from "../../Assets/icons/Icon material-flag.svg";
import CommentIcon from "../../Assets/icons/Icon awesome-comment-alt (1).svg";
import Component12 from "../../Assets/icons/Component 12 – 11.svg";
import HorixontalIcon from "../../Assets/icons/ellipsis-horizontal-sharp.svg";
import LeftIcon from "../../Assets/icons/Icon feather-chevrons-left (3).svg";
import LeftIcon1 from "../../Assets/icons/Icon feather-chevrons-left (1).svg";
import QuestionCircle from "../../Assets/icons/Icon awesome-question-circle.svg";
import { right } from "@popperjs/core";
import ReactQuill from "react-quill";

function Tickets(props) {
  const [modal, setModal] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [assignee, setAssignee] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [action, setAction] = useState(false);

  const handleCancel = () => {
    setIsModalVisible(false);
    setShowEditModal(false);
  };
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };
  return (
    <Layout title={"Tickets"} currentPage={1}>
      <div className="main-wrapper">
        <div className="index-wrap">
          <div className="content-box bg-white card">
            <div className="title-bar d-flex align-items-center justify-content-between">
              <div style={{ position: "relative" }}>
                <input type="text" className="search-input" />
                <img
                  src={SearchIcon}
                  style={{
                    position: "absolute",
                    left: 0,
                    top: "10px",
                    left: "9px",
                  }}
                  alt=""
                />
              </div>
              <div className="d-flex">
                <button className="btn-create" onClick={showModal}>
                  <img
                    style={{ marginRight: "8px", marginBottom: "1px" }}
                    src={AddIcon}
                    alt=""
                  />
                  Create new ticket
                </button>
              </div>
            </div>

            <div className="d-flex justify-content-start ticket-filter-wrap">
              <p className="total-t">All tickets (11)</p>

              <div className="d-flex ticket-filter-d1 float-right">
                <div className="d-flex">
                  <p className="status-select-text mr-3">Status</p>
                  <select name="status" id="" className="status-select">
                    <option value="all">All</option>
                    <option value="progress">In Progress</option>
                    <option value="supportteam">Support Team</option>
                    <option value="technicalteam">
                      Technical Team resolved
                    </option>
                    <option value="waiting for customer">
                      Waiting for customer
                    </option>
                    <option value="closed">closed</option>
                    <option value="Reopen">Reopen</option>
                  </select>
                </div>
                <div className="d-flex ml-5">
                  <p className="status-select-text mr-3">Source</p>
                  <select name="status" id="" className="status-select">
                    <option value="all">All</option>
                    <option value="progress">WhatsApp</option>
                    <option value="supportteam">Instagram</option>
                    <option value="technicalteam">Email</option>
                    <option value="waiting for customer">Erp System</option>
                  </select>
                </div>
                <div className="d-flex ml-5">
                  <p className="status-select-text2"></p>
                  <select name="status" id="" className="status-select">
                    <option value="">Date</option>
                    <option value="progress">WhatsApp</option>
                    <option value="supportteam">Instagram</option>
                    <option value="technicalteam">Email</option>
                    <option value="waiting for customer">Erp System</option>
                  </select>
                </div>
                <div className="d-flex ml-5">
                  <p className="status-select-text mr-3"></p>
                  <select name="status" id="" className="status-select">
                    <option value="">Assignes</option>
                    <option value="progress">WhatsApp</option>
                    <option value="supportteam">Instagram</option>
                    <option value="technicalteam">Email</option>
                    <option value="waiting for customer">Erp System</option>
                  </select>
                </div>
                <div className="d-flex ml-5">
                  <p className="status-select-text mr-3">Type</p>
                  <select name="status" id="" className="status-select">
                    <option value="all">All</option>
                    <option value="progress">WhatsApp</option>
                    <option value="supportteam">Instagram</option>
                    <option value="technicalteam">Email</option>
                    <option value="waiting for customer">Erp System</option>
                  </select>
                </div>
                <div className="d-flex ml-5">
                  <p className="status-select-text mr-3">Priority</p>
                  <select name="status" id="" className="status-select">
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="table-responsive">
              <table className="table">
                <thead
                  style={{
                    backgroundColor: "#d6edff",
                    color: "000000",
                    fontSize: " 12px",
                    // textAlign: " center",
                    height: "43px",

                    verticalAlign: "inherit",
                  }}
                >
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Title</th>
                    <th scope="col">Created By</th>
                    <th scope="col">Source</th>
                    <th scope="col">Due date</th>
                    <th scope="col">Priority</th>
                    <th scope="col">Comments</th>
                    <th scope="col">Assigned to</th>
                    <th scope="col">Status</th>
                    <th scope="col" style={{ textAlign: "center" }}>
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ height: "53px", verticalAlign: "middle" }}>
                    <td className="table-content-text1">3</td>
                    <td className="table-content-text1">
                      <p
                        style={{
                          fontSize: "12px",
                          marginBottom: "0px",
                          fontWeight: "500",
                        }}
                      >
                        Title Here
                      </p>
                      <p
                        style={{
                          fontSize: "12px",
                          marginBottom: "0px",
                          fontWeight: "400",
                        }}
                      >
                        Type
                      </p>
                    </td>
                    <td className="table-content-text1">
                      <p
                        style={{
                          fontSize: "12px",
                          marginBottom: "0px",
                          fontWeight: "500",
                        }}
                      >
                        John Doe
                      </p>
                      <p
                        style={{
                          fontSize: "12px",
                          marginBottom: "0px",
                          fontWeight: "400",
                        }}
                      >
                        20 July, 2021
                      </p>
                    </td>
                    <td className="table-content-text1">WhatsApp</td>
                    <td style={{ fontSize: "12px", color: "#fb3d3d" }}>
                      12/05/2021
                    </td>
                    <td style={{ fontSize: "12px" }}>
                      <img
                        style={{ marginRight: "9px" }}
                        height="19px"
                        src={FlagIcon}
                        alt=""
                      />
                      High
                    </td>
                    <td style={{ fontSize: "12px" }}>
                      <img
                        style={{ marginRight: "4px", marginTop: "4px" }}
                        src={CommentIcon}
                        alt=""
                      />
                      2
                      <p
                        style={{
                          textDecoration: "underline",
                          color: "#216bff",
                          fontSize: "12px",
                        }}
                      >
                        1 new
                      </p>
                    </td>
                    <td>
                      <div className="d-flex">
                        <div className="assign-dashed-user">
                          <p
                            style={{
                              fontSize: "10px",
                              color: "#1767aa",
                              fontWeight: "600",
                              marginBottom: "0px",
                              marginTop: "3px",
                              marginLeft: "2px",
                            }}
                          >
                            MH
                          </p>

                          <div className="dot-div"></div>
                        </div>
                        <div className="position-relative">
                          <img
                            style={{ cursor: "pointer" }}
                            className="mr-1"
                            src={Component12}
                            alt=""
                            onClick={() => setAssignee(!assignee)}
                          />

                          {assignee && (
                            <div
                              className="assign-new-user-d mt-1"
                              id="searchuser"
                            >
                              <div className="d-flex assign-btns-wrap">
                                <button className="btn-user">Users</button>
                                <button className="btn-team">Teams</button>
                              </div>

                              <div className="search-d">
                                <input
                                  type="text"
                                  className="search-d-input"
                                  name="search"
                                />

                                <div className="mt-3 d-flex">
                                  <div className="search-name-d mr-1">
                                    <p
                                      className=""
                                      style={{ marginBottom: "0px" }}
                                    >
                                      MH
                                    </p>
                                  </div>
                                  <p
                                    className="search-f-name"
                                    style={{ marginBottom: "0px" }}
                                  >
                                    Muzammil afridi
                                  </p>
                                </div>
                                <div className="mt-3 d-flex">
                                  <div className="search-name-d mr-1">
                                    <p
                                      className=""
                                      style={{ marginBottom: "0px" }}
                                    >
                                      MH
                                    </p>
                                  </div>
                                  <p
                                    className="search-f-name"
                                    style={{ marginBottom: "0px" }}
                                  >
                                    Muzammil afridi
                                  </p>
                                </div>
                                <div className="mt-3 d-flex">
                                  <div className="search-name-d mr-1">
                                    <p
                                      className=""
                                      style={{ marginBottom: "0px" }}
                                    >
                                      MH
                                    </p>
                                  </div>
                                  <p
                                    className="search-f-name"
                                    style={{ marginBottom: "0px" }}
                                  >
                                    Muzammil afridi
                                  </p>
                                </div>
                                <div className="mt-3 d-flex">
                                  <div className="search-name-d mr-1">
                                    <p
                                      className=""
                                      style={{ marginBottom: "0px" }}
                                    >
                                      MH
                                    </p>
                                  </div>
                                  <p
                                    className="search-f-name"
                                    style={{ marginBottom: "0px" }}
                                  >
                                    Muzammil afridi
                                  </p>
                                </div>
                                <div className="mt-3 d-flex">
                                  <div className="search-name-d mr-1">
                                    <p
                                      className=""
                                      style={{ marginBottom: "0px" }}
                                    >
                                      MH
                                    </p>
                                  </div>
                                  <p
                                    className="search-f-name"
                                    style={{ marginBottom: "0px" }}
                                  >
                                    Muzammil afridi
                                  </p>
                                </div>
                                <div className="mt-3 d-flex">
                                  <div className="search-name-d mr-1">
                                    <p
                                      className=""
                                      style={{ marginBottom: "0px" }}
                                    >
                                      MH
                                    </p>
                                  </div>
                                  <p
                                    className="search-f-name"
                                    style={{ marginBottom: "0px" }}
                                  >
                                    Muzammil afridi
                                  </p>
                                </div>
                                <div className="mt-3 d-flex">
                                  <div className="search-name-d mr-1">
                                    <p
                                      className=""
                                      style={{ marginBottom: "0px" }}
                                    >
                                      MH
                                    </p>
                                  </div>
                                  <p
                                    className="search-f-name"
                                    style={{ marginBottom: "0px" }}
                                  >
                                    Muzammil afridi
                                  </p>
                                </div>
                                <div className="mt-3 d-flex">
                                  <div className="search-name-d mr-1">
                                    <p
                                      className=""
                                      style={{ marginBottom: "0px" }}
                                    >
                                      MH
                                    </p>
                                  </div>
                                  <p
                                    className="search-f-name"
                                    style={{ marginBottom: "0px" }}
                                  >
                                    Muzammil afridi
                                  </p>
                                </div>
                                <div className="mt-3 d-flex">
                                  <div className="search-name-d mr-1">
                                    <p
                                      className=""
                                      style={{ marginBottom: "0px" }}
                                    >
                                      MH
                                    </p>
                                  </div>
                                  <p
                                    className="search-f-name"
                                    style={{ marginBottom: "0px" }}
                                  >
                                    Muzammil afridi
                                  </p>
                                </div>
                                <div className="mt-3 d-flex">
                                  <div className="search-name-d mr-1">
                                    <p
                                      className=""
                                      style={{ marginBottom: "0px" }}
                                    >
                                      MH
                                    </p>
                                  </div>
                                  <p
                                    className="search-f-name"
                                    style={{ marginBottom: "0px" }}
                                  >
                                    Muzammil afridi
                                  </p>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </td>
                    <td style={{ width: "93px" }}>
                      <div className="status-d">In progress</div>
                    </td>
                    <td style={{ cursor: "pointer", textAlign: "center" }}>
                      {action && (
                        <div
                          className="position-absolute table-actions"
                          id="actionview"
                        >
                          <p className="action-view">
                            {" "}
                            <Link to="/tickets/detail"> view</Link>
                          </p>
                          <p
                            onClick={() => setShowEditModal(!showEditModal)}
                            className=" viewaction-"
                            data-toggle="modal"
                            data-target="#exampleModal"
                          >
                            edit
                          </p>
                        </div>
                      )}
                      <img
                        src={HorixontalIcon}
                        alt=""
                        style={{ cursor: "pointer" }}
                        onClick={() => setAction(!action)}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="pagination-wrapper">
              <div className="d-flex justify-content-end pagination">
                <img src={LeftIcon} className="mr-4" alt="" />
                <div className="paginate-num-box">1</div>
                <div className="paginate-num-box2">2</div>
                <div className="paginate-num-box2">3</div>
                <img className="ml-3" src={LeftIcon1} alt="" />

                <div className="d-flex images-wrap"></div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Modal --> */}

        {isModalVisible && (
          <div
            className="modal fade new-t-model"
            id="exampleModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    New Ticket
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="form-field-wrapper">
                    <div className="d-flex justify-content-between">
                      <div>
                        <p className="t1">title</p>
                        <input type="text" className="m-input-1" name="title" />
                      </div>
                      <div>
                        <p className="t1">Ticket type</p>

                        <select name="ticketType" className="m-input-1" id="">
                          <option value="">All</option>
                        </select>
                      </div>
                      <div>
                        <p className="t1">Bussiness name</p>
                        <select name="ticketType" className="m-input-1" id="">
                          <option value="">All</option>
                        </select>
                      </div>
                    </div>
                    <div
                      className="d-flex justify-content-between"
                      style={{ marginTop: "43px" }}
                    >
                      <div>
                        <p className="t1">Email</p>
                        <input type="text" className="m-input-1" name="title" />
                      </div>
                      <div>
                        <div className="d-flex justify-content-between">
                          <p className="t1">Optional Email</p>

                          <img src={QuestionCircle} alt="" />
                        </div>

                        <input type="text" className="m-input-1" name="title" />
                      </div>
                      <div>
                        <p className="t1">Source</p>
                        <select name="ticketType" className="m-input-1" id="">
                          <option value="">All</option>
                        </select>
                      </div>
                    </div>
                    <div
                      className="d-flex justify-content-start"
                      style={{ marginTop: "43px" }}
                    >
                      <div className="mr-5">
                        <p className="t1">Module</p>
                        <select name="ticketType" className="m-input-1" id="">
                          <option value="">All</option>
                        </select>
                      </div>
                      <div>
                        <div className="d-flex justify-content-between">
                          <p className="t1">Sub Module</p>
                        </div>
                        <select name="ticketType" className="m-input-1" id="">
                          <option value="">All</option>
                        </select>
                      </div>
                    </div>

                    <div
                      className="d-flex justify-content-start"
                      style={{ marginTop: "43px" }}
                    >
                      <div className="mr-5">
                        <p className="t1">Description</p>

                        <div className="quill-wrap">
                          <div id="editor">
                            <p className="ql-align-center"></p>
                          </div>
                          <div id="toolbar">
                            <span className="ql-formats">
                              <button className="ql-image"></button>

                              <button className="ql-bold"></button>
                              <button className="ql-italic"></button>
                              <button className="ql-underline"></button>
                            </span>
                            <span className="ql-formats">
                              <select className="ql-color"></select>
                              <select className="ql-background"></select>
                            </span>
                            <span className="ql-formats">
                              <button
                                className="ql-list"
                                value="ordered"
                              ></button>
                              <button
                                className="ql-list"
                                value="bullet"
                              ></button>
                            </span>

                            <span className="ql-formats">
                              <button className="clear-format-btn" value="">
                                Clear Format
                              </button>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn-close"
                    data-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button type="button" className="btn-save ml-4">
                    Create
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 
      <!-- ///////////////////////////////////////////// -->
      <!-- ============================Modal edit -->
      <!-- //////////////////////////////////////////////// -->

      <!-- Modal --> */}
        <div
          className="modal fade new-t-model"
          id="editmodal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Edit Ticket
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="form-field-wrapper">
                  <div className="d-flex justify-content-between">
                    <div>
                      <p className="t1">title</p>
                      <input type="text" className="m-input-1" name="title" />
                    </div>
                    <div>
                      <p className="t1">Ticket type</p>

                      <select name="ticketType" className="m-input-1" id="">
                        <option value="">All</option>
                      </select>
                    </div>
                    <div>
                      <p className="t1">Bussiness name</p>
                      <select name="ticketType" className="m-input-1" id="">
                        <option value="">All</option>
                      </select>
                    </div>
                  </div>
                  <div
                    className="d-flex justify-content-between"
                    style={{ marginTop: "43px" }}
                  >
                    <div>
                      <p className="t1">Email</p>
                      <input type="text" className="m-input-1" name="title" />
                    </div>
                    <div>
                      <div className="d-flex justify-content-between">
                        <p className="t1">Optional Email</p>

                        <img src={QuestionCircle} alt="" />
                      </div>

                      <input type="text" className="m-input-1" name="title" />
                    </div>
                    <div>
                      <p className="t1">Source</p>
                      <select name="ticketType" className="m-input-1" id="">
                        <option value="">All</option>
                      </select>
                    </div>
                  </div>
                  <div
                    className="d-flex justify-content-start"
                    style={{ marginTop: "43px" }}
                  >
                    <div className="mr-5">
                      <p className="t1">Module</p>
                      <select name="ticketType" className="m-input-1" id="">
                        <option value="">All</option>
                      </select>
                    </div>
                    <div>
                      <div className="d-flex justify-content-between">
                        <p className="t1">Sub Module</p>
                      </div>
                      <select name="ticketType" className="m-input-1" id="">
                        <option value="">All</option>
                      </select>
                    </div>
                  </div>

                  <div
                    className="d-flex justify-content-start"
                    style={{ marginTop: "43px" }}
                  >
                    <div className="mr-5">
                      <p className="t1">Description</p>

                      <div className="quill-wrap">
                        <div id="editor">
                          <p className="ql-align-center"></p>
                        </div>
                        <div id="toolbar">
                          <span className="ql-formats">
                            <button className="ql-image"></button>

                            <button className="ql-bold"></button>
                            <button className="ql-italic"></button>
                            <button className="ql-underline"></button>
                          </span>
                          <span className="ql-formats">
                            <select className="ql-color"></select>
                            <select className="ql-background"></select>
                          </span>
                          <span className="ql-formats">
                            <button
                              className="ql-list"
                              value="ordered"
                            ></button>
                            <button className="ql-list" value="bullet"></button>
                          </span>

                          <span className="ql-formats">
                            <button className="clear-format-btn" value="">
                              Clear Format
                            </button>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn-close"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
                <button type="button" className="btn-save ml-4">
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        title="New Ticket"
        onCancel={handleCancel}
        visible={isModalVisible}
        width={738}
        className="new-t-model"
      >
        <div className="form-field-wrapper">
          <div className="d-flex justify-content-between">
            <div>
              <p className="t1">title</p>
              <input type="text" className="m-input-1" name="title" />
            </div>
            <div>
              <p className="t1">Ticket type</p>

              <select name="ticketType" className="m-input-1" id="">
                <option value="">All</option>
              </select>
            </div>
            <div>
              <p className="t1">Bussiness name</p>
              <select name="ticketType" className="m-input-1" id="">
                <option value="">All</option>
              </select>
            </div>
          </div>
          <div
            className="d-flex justify-content-between"
            style={{ marginTop: "43px" }}
          >
            <div>
              <p className="t1">Email</p>
              <input type="text" className="m-input-1" name="title" />
            </div>
            <div>
              <div className="d-flex justify-content-between">
                <p className="t1">Optional Email</p>

                <img src={QuestionCircle} alt="" />
              </div>

              <input type="text" className="m-input-1" name="title" />
            </div>
            <div>
              <p className="t1">Source</p>
              <select name="ticketType" className="m-input-1" id="">
                <option value="">All</option>
              </select>
            </div>
          </div>
          <div
            className="d-flex justify-content-start"
            style={{ marginTop: "43px" }}
          >
            <div className="mr-5">
              <p className="t1">Module</p>
              <select name="ticketType" className="m-input-1" id="">
                <option value="">All</option>
              </select>
            </div>
            <div>
              <div className="d-flex justify-content-between">
                <p className="t1">Sub Module</p>
              </div>
              <select name="ticketType" className="m-input-1" id="">
                <option value="">All</option>
              </select>
            </div>
          </div>

          <div
            className="d-flex justify-content-start"
            style={{ marginTop: "43px" }}
          >
            <div className="mr-5">
              <p className="t1">Description</p>

              <div className="quill-wrap">
                <div id="editor">
                  <p className="ql-align-center"></p>
                  <ReactQuill theme="snow" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        title="Edit Ticket"
        onCancel={handleCancel}
        visible={showEditModal}
        width={738}
        className="new-t-model"
      >
        <div className="form-field-wrapper">
          <div className="d-flex justify-content-between">
            <div>
              <p className="t1">title</p>
              <input type="text" className="m-input-1" name="title" />
            </div>
            <div>
              <p className="t1">Ticket type</p>

              <select name="ticketType" className="m-input-1" id="">
                <option value="">All</option>
              </select>
            </div>
            <div>
              <p className="t1">Bussiness name</p>
              <select name="ticketType" className="m-input-1" id="">
                <option value="">All</option>
              </select>
            </div>
          </div>
          <div
            className="d-flex justify-content-between"
            style={{ marginTop: "43px" }}
          >
            <div>
              <p className="t1">Email</p>
              <input type="text" className="m-input-1" name="title" />
            </div>
            <div>
              <div className="d-flex justify-content-between">
                <p className="t1">Optional Email</p>

                <img src={QuestionCircle} alt="" />
              </div>

              <input type="text" className="m-input-1" name="title" />
            </div>
            <div>
              <p className="t1">Source</p>
              <select name="ticketType" className="m-input-1" id="">
                <option value="">All</option>
              </select>
            </div>
          </div>
          <div
            className="d-flex justify-content-start"
            style={{ marginTop: "43px" }}
          >
            <div className="mr-5">
              <p className="t1">Module</p>
              <select name="ticketType" className="m-input-1" id="">
                <option value="">All</option>
              </select>
            </div>
            <div>
              <div className="d-flex justify-content-between">
                <p className="t1">Sub Module</p>
              </div>
              <select name="ticketType" className="m-input-1" id="">
                <option value="">All</option>
              </select>
            </div>
          </div>

          <div
            className="d-flex justify-content-start"
            style={{ marginTop: "43px" }}
          >
            <div className="mr-5">
              <p className="t1">Description</p>

              <div className="quill-wrap">
                <div id="editor">
                  <p className="ql-align-center"></p>
                </div>
                <div id="toolbar">
                  <span className="ql-formats">
                    <button className="ql-image"></button>

                    <button className="ql-bold"></button>
                    <button className="ql-italic"></button>
                    <button className="ql-underline"></button>
                  </span>
                  <span className="ql-formats">
                    <select className="ql-color"></select>
                    <select className="ql-background"></select>
                  </span>
                  <span className="ql-formats">
                    <button className="ql-list" value="ordered"></button>
                    <button className="ql-list" value="bullet"></button>
                  </span>

                  <span className="ql-formats">
                    <button className="clear-format-btn" value="">
                      Clear Format
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </Layout>
  );
}

export default Tickets;
