import React, { useState } from "react";
import Layout from "Layout/Index";
import { Modal, Button } from "antd";

import CheckIcon from "../../Assets/icons/Group 2106 (1).svg";
import UnderProgressIcon from "../../Assets/icons//Group 2142.svg";

import FlagIcon from "../../Assets/icons/Icon material-flag (1).svg";
import FlagIcon3 from "../../Assets/icons/Icon material-flag (3).svg";
import FlagIcon2 from "../../Assets/icons/Icon material-flag (2).svg";

import BucketIcon from "../../Assets/icons/Icon ionic-logo-bitbucket (1).svg";
import ExternalIcon from "../../Assets/icons/Group 2257 (1).svg";

import InternalIcon from "../../Assets/icons/Group 2257.svg";
import TechnicalIcon from "../../Assets/icons/Group 2112 (1).svg";
import LinkIcon from "../../Assets/icons/Icon feather-link.svg";
import Component11 from "Assets/icons/Component 12 – 11.svg";

import SearchIcon from "../../Assets/icons/Icon material-search (1).svg";

import IconFeatherCheck from "../../Assets/icons/Icon feather-check.svg";

import ReactQuill from "react-quill";
import { right } from "@popperjs/core";
import { ToggleButton } from "react-bootstrap";

function TicketDetails(props) {
  const [flag, setFlag] = useState(false);

  const [comment, setComment] = useState(true);
  const [comment2, setComment2] = useState(true);

  const [activityLog, setActivityLog] = useState(false);
  const [activityLog2, setActivityLog2] = useState(false);

  const [assignee, setAssignee] = useState(false);
  const [subTask, setSubTask] = useState(false);

  const [linkModal, setLinkModal] = useState(false);

  const showActivity = () => {
    setComment(false);
    setActivityLog(true);
  };

  const showActivity2 = () => {
    setComment2(false);
    setActivityLog2(true);
  };

  const showComment = () => {
    setComment(true);
    setActivityLog(false);
  };
  const showComment2 = () => {
    setComment2(true);
    setActivityLog2(false);
  };

  return (
    <>
      <Layout title={"Tickets"} currentPage={1}>
        <div className="main-wrapper">
          <div className="content-box bg-white">
            <div asp-validation-summary="All" className="text-danger"></div>

            <div
              className="d-flex justify-content-between"
              style={{
                marginBottom: "12px",
              }}
            >
              <div>
                <h3 className="text-main mx-3">
                  <img className="mb-1" src="~/images/Group 175.svg" alt="" />
                  ERP - 01 Jul 2021 -01
                </h3>
              </div>
              <p className="page-title-text01">
                Created :{" "}
                <span className="page-title-text02">20 July,2021</span>
              </p>
            </div>

            <div className="bs-stepper">
              <div className="bs-stepper-header" role="tablist">
                <div className="d-flex justify-content-between">
                  <div className="d-flex">
                    <img src={CheckIcon} className="mr-5" alt="" />
                    <p className="stepper-text mr-2">New</p>
                  </div>
                  <hr className="hr" />
                  <div className="d-flex">
                    <img src={CheckIcon} className="mr-5" alt="" />
                    <p className="stepper-text mr-2">In Progress</p>
                  </div>
                  <hr className="hr" />
                  <div className="d-flex">
                    <img src={CheckIcon} className="mr-5" alt="" />
                    <p className="stepper-text mr-2">Support</p>
                  </div>
                  <hr className="hr" />
                  <div className="d-flex">
                    <img src={TechnicalIcon} className="mr-5" alt="" />
                    <p className="stepper-text mr-2">Technical</p>
                  </div>
                  <hr className="hr" style={{ color: "#e1e1e1" }} />
                  <div className="d-flex">
                    <img src={UnderProgressIcon} className="mr-5" alt="" />
                    <p className="stepper-text mr-2">Resolved</p>
                  </div>
                  <hr className="hr" style={{ color: "#e1e1e1" }} />
                  <div className="d-flex">
                    <img src={UnderProgressIcon} className="mr-5" alt="" />
                    <p className="stepper-text mr-2">Closed</p>
                  </div>
                  <hr className="hr" style={{ color: "#e1e1e1" }} />
                  <div className="d-flex">
                    <img src={UnderProgressIcon} className="mr-5" alt="" />
                    <p className="stepper-text mr-2">Reopen</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-between">
              <div className="Drivers">
                <div className="help-wrapper">
                  <div className="d-flex justify-content-between">
                    <p className="t1">ERP - 01 Jul 2021 -01</p>
                    <p className="t1">
                      Status
                      <select
                        className="g-select"
                        style={{ outline: "none" }}
                        aria-label="Default select example"
                      >
                        <option selected>Reopen</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </p>
                  </div>
                  <h5 className="t2">Need Help</h5>

                  <div className="d-flex justify-content-between">
                    <p className="text-muted">soiban@gmail.com</p>

                    <div className="d-flex">
                      <select name="type" className="type-drop" id="">
                        <option value="">High</option>
                        <option value="">Medium</option>
                        <option value="">low</option>
                      </select>
                      <div className="d-flex position-relative">
                        <div
                          className="flag-div"
                          onclick="showFlag()"
                          style={{ cursor: "pointer" }}
                        >
                          <img
                            data-toggle="collapse"
                            href="#flagdiv"
                            style={{
                              marginBottom: "5px",
                              marginLeft: "6px",
                            }}
                            src={FlagIcon}
                            height="11"
                            alt=""
                          />
                        </div>

                        <p
                          id="renderflag"
                          className="flag-type-text"
                          style={{ cursor: "pointer" }}
                          onclick="showFlag()"
                          onClick={() => setFlag(!flag)}
                        >
                          High
                        </p>

                        {flag && (
                          <div className="flag-options">
                            <p
                              className="flag-options-text"
                              onclick="setFlag('high')"
                            >
                              <img
                                src={FlagIcon}
                                style={{ marginRight: "8px" }}
                                height="11"
                                alt=""
                              />
                              High
                            </p>
                            <p
                              className="flag-options-text"
                              onclick="setFlag('Medium')"
                            >
                              <img
                                src={FlagIcon2}
                                style={{ marginRight: "8px" }}
                                height="11"
                                alt=""
                              />
                              Medium
                            </p>
                            <p
                              className="flag-options-text"
                              onclick="setFlag('low')"
                            >
                              <img
                                src={FlagIcon3}
                                style={{ marginRight: "8px" }}
                                height="11"
                                alt=""
                              />
                              Low
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <input
                    id="driverId"
                    name="driverId"
                    v-model="selectedId"
                    hidden
                  />
                  <input
                    id="deliveryId"
                    name="deliveryId"
                    value="@Model.SaleDeliveryID"
                    hidden
                  />
                  <hr />
                  <div className="d-flex justify-content-between driver-row-header">
                    <p className="t3">Issue Type</p>
                    <p className="t3">Module</p>
                    <p className="t3">Sub - Module</p>
                  </div>
                  <div className="d-flex justify-content-between driver-row-header">
                    <p className="t4">Technical</p>
                    <p className="t4">Dashboard</p>
                    <p className="t4">Power BI</p>
                  </div>
                  <br />
                  <br />
                  <p className="t3">Description</p>
                  <p className="t5">
                    This is just a dummy description of a ticket where you can
                    clearly understand our issue.
                  </p>
                </div>

                <div className="help-wrapper2">
                  <p
                    style={{ cursor: "pointer" }}
                    className="customer-satisfaction-title"
                    data-toggle="modal"
                    data-target="#createsubtask"
                  >
                    Sub Tasks
                    <img
                      src="/Assets/Icon material-add-circle (1).svg"
                      height="22"
                      alt=""
                    />
                  </p>
                  <div className="customer-satifaction-wrapper">
                    <div
                      className="subtask-d d-flex justify-content-between"
                      data-toggle="modal"
                      data-target="#exampleModal"
                      type="button"
                      onClick={() => setSubTask(!subTask)}
                    >
                      <div
                        className="d-flex"
                        data-toggle="modal"
                        data-target="#exampleModal"
                        type="button"
                      >
                        <img
                          src="/Assets/Icon material-local-activity.svg"
                          s
                          height="14"
                          style={{ marginTop: "2px" }}
                          className="mr-2"
                          alt=""
                        />
                        <p className="t1 mr-2">ID-213</p>
                        <p className="t2">Sub Task</p>
                        <p className="t3">12/05/2021</p>
                      </div>

                      <div>
                        <select name="" id="" className="subtask-select">
                          <option value="">Reopen</option>
                          <option value="">Reopen</option>
                          <option value="">Reopen</option>
                        </select>
                      </div>
                    </div>
                    <div
                      className="subtask-d d-flex justify-content-between"
                      style={{ marginTop: "9px" }}
                    >
                      <div className="d-flex">
                        <img
                          src="/Assets/Icon material-local-activity.svg"
                          s
                          height="14"
                          style={{ marginTop: "2px" }}
                          className="mr-2"
                          alt=""
                        />
                        <p className="t1 mr-2">ID-213</p>
                        <p className="t2">Sub Task</p>
                        <p className="t3">12/05/2021</p>
                      </div>

                      <div>
                        <select name="" id="" className="subtask-select">
                          <option value="">Reopen</option>
                          <option value="">Reopen</option>
                          <option value="">Reopen</option>
                        </select>
                      </div>
                    </div>

                    <div className="activity-tabs-wrap">
                      <button
                        className="btn-comments"
                        onClick={showComment}
                        onclick="changeCommentView('comments')"
                        style={{
                          background: `${comment ? "#437CBE" : "#F3F3F3"}`,
                          color: `${comment ? "white" : "#AEADAD"}`,
                        }}
                      >
                        Comments
                      </button>
                      <button
                        className="btn-log"
                        id="activitylogs"
                        onClick={showActivity}
                        style={{
                          background: `${activityLog ? "#437CBE" : "#F3F3F3"}`,
                          color: `${activityLog ? "white" : "#AEADAD"}`,
                        }}
                      >
                        activity Log
                      </button>
                    </div>

                    {comment && (
                      <div className="comments-wrapper" id="commentsection">
                        <div style={{ minWidth: "518px" }}>
                          <div className="d-flex justify-content-between filter">
                            <h5 className="t2"></h5>
                            <h5 className="t1">
                              Sort by
                              <select
                                style={{ outline: "none", marginLeft: "8px" }}
                                aria-label="Default select example"
                              >
                                <option selected>Newest</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </h5>
                          </div>

                          <div className="comments-body">
                            <div className="comment d-flex">
                              <div className="avatar-background">
                                <img
                                  className="avatar"
                                  src={BucketIcon}
                                  alt="
                          asdas"
                                />

                                <div className="online-dot"></div>
                              </div>

                              <div className="d1">
                                <p className="comment-t1">
                                  Have questions or feedback about Office VBA or
                                  this documentation? Please see Office VBA
                                  support and feedback for guidance about the
                                  ways you can receive support and provide
                                  feedback.
                                </p>

                                <p className="comment-date">
                                  20 July,2020
                                  <span style={{ marginLeft: "32px" }}>
                                    12:36 PM{" "}
                                  </span>
                                </p>
                              </div>
                            </div>
                            <div className="comment d-flex mt-5">
                              <div className="avatar-background">
                                <img
                                  className="avatar"
                                  src={BucketIcon}
                                  alt="
                          asdas"
                                />
                                <div className="online-dot"></div>
                              </div>

                              <div className="d1">
                                <p className="comment-t1">
                                  Have questions or feedback about Office VBA or
                                  this documentation? Please see Office VBA
                                  support and feedback for guidance about the
                                  ways you can receive support and provide
                                  feedback.
                                </p>

                                <p className="comment-date">
                                  20 July,2020
                                  <span style={{ marginLeft: "32px" }}>
                                    12:36 PM{" "}
                                  </span>
                                </p>
                              </div>
                            </div>
                            <div className="comment d-flex mt-5">
                              <div className="avatar-background">
                                <img
                                  className="avatar"
                                  src={BucketIcon}
                                  alt="
                          asdas"
                                />
                                <div className="online-dot"></div>
                              </div>

                              <div className="d1">
                                <p className="comment-t1">
                                  Have questions or feedback about Office VBA or
                                  this documentation? Please see Office VBA
                                  support and feedback for guidance about the
                                  ways you can receive support and provide
                                  feedback.
                                </p>

                                <p className="comment-date">
                                  20 July,2020
                                  <span style={{ marginLeft: "32px" }}>
                                    {" "}
                                    12:36 PM{" "}
                                  </span>
                                </p>
                              </div>
                            </div>

                            <div></div>
                          </div>

                          <div className="external-d d-flex">
                            <img
                              src={InternalIcon}
                              style={{
                                marginTop: "4px",

                                marginRight: "-8px",
                              }}
                              height="14"
                              alt=""
                            />
                            <button
                              className="btn-external"
                              onclick="changeColor('external')"
                              id="external"
                            >
                              External
                            </button>

                            <img
                              src={ExternalIcon}
                              style={{ marginTop: "4px", marginRight: "-8px" }}
                              height="14"
                              alt=""
                            />
                            <button
                              className="btn-internal"
                              onclick="changeColor('internal')"
                              id="internal"
                            >
                              Internal
                            </button>
                          </div>

                          <div className="quill-wrap">
                            <div id="editor">
                              <p className="ql-align-center"></p>
                            </div>
                            <div id="toolbar">
                              <ReactQuill theme="snow" />
                            </div>
                          </div>
                        </div>

                        <div className="d-flex justify-content-end btns-wrapper">
                          <button className="cancel-btn">Cancel</button>
                          <button className="comment-btn">Comment</button>
                        </div>
                      </div>
                    )}

                    {activityLog && (
                      <div className="activitylogs-body" id="activitylogs1">
                        <div className="d-flex justify-content-between">
                          <p className="t1">
                            John Doe Changed the status from
                            <span
                              style={{
                                color: "#30c47c",
                                marginLeft: "20px",
                                marginRight: "12px",
                              }}
                            >
                              Resolved
                            </span>
                            to
                            <span
                              style={{ marginLeft: "12px", color: "#30c47c" }}
                            >
                              Closed
                            </span>
                          </p>

                          <p className="t1">12/05/2021</p>
                        </div>
                        <div
                          className="d-flex justify-content-between"
                          style={{ marginTop: "10px" }}
                        >
                          <div className="d-flex">
                            <p className="t1">
                              John Doe Changed the Assignee from
                            </p>
                            <div
                              className="name-wrap-div"
                              style={{
                                marginLeft: "10px",
                                marginRight: "10px",
                              }}
                            >
                              <p className="mini-name">MA</p>
                            </div>
                            <p className="name mr-2">Muzamil Afridi</p>

                            <p className="t2" style={{ marginRight: "10px" }}>
                              To
                            </p>
                            <p className="name" style={{ marginRight: "10px" }}>
                              Muzamil Afridi
                            </p>
                            <div className="name-wrap-div">
                              <p className="mini-name">MA</p>
                            </div>
                          </div>
                          <p className="t1">12/05/2021</p>
                        </div>

                        <div className="d-flex justify-content-between">
                          <p className="t1">John Doe Changed the description</p>
                          <p className="t1">12/05/2021</p>
                        </div>

                        <div className="d-flex" style={{ marginTop: "45px" }}>
                          <p className="t1" style={{ marginRight: "42px" }}>
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat, sed diam
                            voluptua. At vero eos et accusam et justo duo
                            dolores et ea rebum. Stet clita kasd gubergren, no
                            sea takimata sanctus est Lorem ipsum dolor sit
                          </p>
                          <p className="t1">
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat, sed diam
                            voluptua. At vero eos et accusam et justo duo
                            dolores et ea rebum. Stet clita kasd gubergren, no
                            sea takimata sanctus est Lorem ipsum dolor sit
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <form
                asp-action="CreateSchedule"
                data-ajax="true"
                data-ajax-method="post"
                data-ajax-success="PostDeliverySuccess"
                data-ajax-failure="PostDeliveryError"
              ></form>

              <div className="sla-wrapper">
                <div>
                  <p className="st1">SLA</p>

                  <p className="st2" style={{ marginTop: "17px" }}>
                    Time to first response
                    <span style={{ color: "#141414", marginLeft: "22px" }}>
                      2 Days
                    </span>
                  </p>
                </div>

                <div style={{ marginTop: "17px" }}>
                  <p className="st2">
                    Time to Resolution :
                    <span style={{ color: "#141414", marginLeft: "30px" }}>
                      24 Hours
                    </span>
                  </p>
                </div>
                <div style={{ marginTop: "17px" }}>
                  <p className="st2">
                    Time to first response
                    <span
                      style={{
                        color: "#141414",
                        marginLeft: "59px",
                        fontWeight: 600,
                      }}
                    >
                      Total Resolution Time
                    </span>
                  </p>
                </div>

                <div
                  className="d-flex justify-content-between"
                  style={{ marginTop: "17px" }}
                >
                  <p className="st3">14:25min</p>
                  <button className="btn-start">Start Working</button>
                </div>

                <div className="d-flex">
                  <div>
                    <div className="position-relative">
                      <p className="st1">Assignee</p>

                      {assignee && (
                        <div
                          className="position-absolute assignee-div"
                          id="assignee"
                        >
                          <div className="d-flex assign-btns-wrap">
                            <button className="btn-user">Users</button>
                            <button className="btn-team">Teams</button>
                          </div>

                          <div className="body">
                            <input
                              type="text"
                              placeholder="Search"
                              className="n-search-input"
                            />
                            <div className="mt-3 d-flex">
                              <div
                                className="search-name-d mr-1"
                                style={{ marginRight: "5px" }}
                              >
                                <p
                                  className=""
                                  style={{
                                    MarginBottom: "0px",
                                    marginTop: -"2px",
                                  }}
                                >
                                  MH
                                </p>
                              </div>
                              <p
                                className="search-f-name"
                                style={{ MarginBottom: "0px" }}
                              >
                                Muzammil afridi
                              </p>
                            </div>
                            <div className="mt-3 d-flex">
                              <div
                                className="search-name-d mr-1"
                                style={{ marginRight: "5px" }}
                              >
                                <p
                                  className=""
                                  style={{
                                    MarginBottom: "0px",
                                    marginTop: "-2px",
                                  }}
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
                              <div
                                className="search-name-d mr-1"
                                style={{ marginRight: "5px" }}
                              >
                                <p
                                  className=""
                                  style={{
                                    marginBottom: "0px",
                                    marginTop: "-2px",
                                  }}
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
                              <div
                                className="search-name-d mr-1"
                                style={{ marginRight: "5px" }}
                              >
                                <p
                                  className=""
                                  style={{
                                    marginBottom: "0px",
                                    marginTop: "-2px",
                                  }}
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
                              <div
                                className="search-name-d mr-1"
                                style={{ marginRight: "5px" }}
                              >
                                <p
                                  className=""
                                  style={{
                                    marginBottom: "0px",
                                    marginTop: "-2px",
                                  }}
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
                              <div
                                className="search-name-d mr-1"
                                style={{ marginRight: "5px" }}
                              >
                                <p
                                  className=""
                                  style={{
                                    marginBottom: "0px",
                                    marginTop: "-2px",
                                  }}
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
                              <div
                                className="search-name-d mr-1"
                                style={{ marginRight: "5px" }}
                              >
                                <p
                                  className=""
                                  style={{
                                    marginBottom: "0px",
                                    marginTop: "-2px",
                                  }}
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
                  <img
                    className="ml-3"
                    style={{ marginLeft: "17px", cursor: "pointer" }}
                    src={Component11}
                    alt=""
                    onClick={() => setAssignee(!assignee)}
                  />
                </div>

                <div
                  className="d-flex justify-content-between"
                  style={{ marginTop: "27px" }}
                >
                  <div className="d-flex">
                    <div className="name-div position-relative">
                      <p
                        style={{
                          fontSize: "10px",
                          color: "white",
                          fontWeight: 700,
                          marginTop: "5px",
                          marginLeft: "4px",
                        }}
                      >
                        MH
                      </p>

                      <div className="position-absolute active-dot"></div>
                    </div>

                    <p className="st4" style={{ marginLeft: "14px" }}>
                      Muzamil Afridi
                    </p>
                  </div>

                  <p className="st2">12/05/2021 12:50 PM</p>
                </div>

                <div className="linked-issues">
                  <p
                    className="st1"
                    style={{ cursor: "pointer" }}
                    onClick={() => setLinkModal(!linkModal)}
                  >
                    Linked Issues
                    <img
                      src={LinkIcon}
                      data-toggle="modal"
                      data-target="#linkmodal"
                      className="ml-2"
                      style={{ cursor: "pointer", marginLeft: "17px" }}
                      alt=""
                    />
                  </p>

                  <div className="lined-issues-list">
                    <div className="d-flex">
                      <img
                        src="/Assets/Icon material-local-activity.svg"
                        alt=""
                      />
                      <p className="st5 ml-3">ID-213</p>
                      <p className="st5 ml-3">
                        <b> Issue title </b>
                      </p>
                    </div>
                    <div className="d-flex" style={{ marginTop: "31px" }}>
                      <img
                        src="/Assets/Icon material-local-activity.svg"
                        alt=""
                      />
                      <p className="st5 ml-3">ID-213</p>
                      <p className="st5 ml-3">
                        <b> Issue title </b>
                      </p>
                    </div>
                    <div className="d-flex" style={{ marginTop: "31px" }}>
                      <img
                        src="/Assets/Icon material-local-activity.svg"
                        alt=""
                      />
                      <p className="st5 ml-3">ID-213</p>
                      <p className="st5 ml-3">
                        <b> Issue title </b>
                      </p>
                    </div>
                  </div>

                  <div className="created-list">
                    <div
                      className="d-flex justify-content-between"
                      style={{ marginBottom: "14px" }}
                    >
                      <p className="st4">Create by Muzamil Afridi</p>
                      <p className="st2">12/05/2021 12:50 PM</p>
                    </div>
                    <div
                      className="d-flex justify-content-between"
                      style={{ marginBottom: "14px" }}
                    >
                      <p className="st4">Create by Muzamil Afridi</p>
                      <p className="st2">12/05/2021 12:50 PM</p>
                    </div>
                    <div
                      className="d-flex justify-content-between"
                      style={{ marginBottom: "14px" }}
                    >
                      <p className="st4">Create by Muzamil Afridi</p>
                      <p className="st2">12/05/2021 12:50 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- =============================================================== -->
    <!-- ==================================================================== -->
    <!-- Modal -->
    <!-- ============================================================================== -->
    <!-- ================================================================================= --> */}

        <div
          className="modal fade create-subtask-modal"
          id="createsubtask"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Create Sub task
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
                <p className="t1">Title</p>

                <input type="text" className="input-title" />

                <p className="t1">Description</p>

                <div className="quill-wrap">
                  <div id="editor2">
                    <p className="ql-align-center"></p>
                  </div>
                  <div id="toolbar2">
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
                <div className="d-flex">
                  <div>
                    <p className="t1">Assign To</p>

                    <select className="assign" name="assign" id="">
                      <option value=""></option>
                      <option value=""></option>
                      <option value=""></option>
                    </select>
                  </div>
                  <div style={{ marginLeft: "26px" }}>
                    <p className="t1">Due Date</p>

                    <input
                      type="date"
                      placeholder="asdasdsd"
                      className="date-input"
                    />
                  </div>
                </div>

                <div className="d-flex" style={{ marginTop: "13px" }}>
                  <div className="suggestion">
                    <p className="suggestion-t">
                      Muzamil Afridi
                      <img
                        src="/Assets/Icon ionic-md-close.svg"
                        className="ml-3"
                        alt=""
                      />
                    </p>
                  </div>
                  <div className="suggestion ml-3">
                    <p className="suggestion-t">
                      Muzamil Afridi
                      <img
                        src="/Assets/Icon ionic-md-close.svg"
                        className="ml-3"
                        alt=""
                      />
                    </p>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn-cancel"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
                <button type="button" className="btn-create">
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal fade link-modal"
          id="linkmodal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Link Issues
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
                <div className="d-flex justify-content-between">
                  <div style={{ position: "relative" }}>
                    <input type="text" className="search-input" />
                    <img
                      src="/Assets/Icon material-search (1).svg"
                      style={{
                        position: "absolute",
                        left: "0",
                        top: "10px",
                        left: "9px",
                      }}
                      alt=""
                    />
                  </div>

                  <p className="t1">selected: 4</p>
                </div>

                <div className="links-wrapper">
                  <div className="d-flex">
                    <div className="link-check-div position-relative">
                      <img
                        src="/Assets/Icon feather-check.svg"
                        className="check-icon"
                        alt=""
                      />
                    </div>

                    <div className="link-inner-div">
                      <p className="t2">
                        ID-213
                        <span
                          style={{
                            color: "#1768ac",
                            fontWeight: "700",
                            marginLeft: "7px",
                          }}
                        >
                          Issue Name
                        </span>
                        <span style={{ color: "#8d8d8d", marginLeft: "7px" }}>
                          12/05/2021
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="link-check-div position-relative">
                      <img
                        src="/Assets/Icon feather-check.svg"
                        className="check-icon"
                        alt=""
                      />
                    </div>

                    <div className="link-inner-div">
                      <p className="t2">
                        ID-213
                        <span
                          style={{
                            color: "#1768ac",
                            fontWeight: 700,
                            marginLeft: "7px",
                          }}
                        >
                          Issue Name
                        </span>
                        <span style={{ color: "#8d8d8d", marginLeft: "7px" }}>
                          12/05/2021
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="link-check-div position-relative">
                      <img
                        src="/Assets/Icon feather-check.svg"
                        className="check-icon"
                        alt=""
                      />
                    </div>

                    <div className="link-inner-div">
                      <p className="t2">
                        ID-213
                        <span
                          style={{
                            color: " #1768ac",
                            fontWeight: "700",
                            marginLeft: "7px",
                          }}
                        >
                          Issue Name
                        </span>
                        <span style={{ color: "#8d8d8d", marginLeft: "7px" }}>
                          12/05/2021
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="link-check-div position-relative">
                      <img
                        src="/Assets/Icon feather-check.svg"
                        className="check-icon"
                        alt=""
                      />
                    </div>

                    <div className="link-inner-div">
                      <p className="t2">
                        ID-213
                        <span
                          style={{
                            color: "#1768ac",
                            fontWeight: 700,
                            marginLeft: "7px",
                          }}
                        >
                          Issue Name
                        </span>
                        <span style={{ color: "#8d8d8d", marginLeft: "7px" }}>
                          12/05/2021
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="link-check-div position-relative">
                      <img
                        src="/Assets/Icon feather-check.svg"
                        className="check-icon"
                        alt=""
                      />
                    </div>

                    <div className="link-inner-div">
                      <p className="t2">
                        ID-213
                        <span
                          style={{
                            color: "#1768ac",
                            fontWeight: "700",
                            marginLeft: "7px",
                          }}
                        >
                          Issue Name
                        </span>
                        <span style={{ color: "#8d8d8d", marginLeft: "7px" }}>
                          12/05/2021
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="link-check-div position-relative">
                      <img
                        src="/Assets/Icon feather-check.svg"
                        className="check-icon"
                        alt=""
                      />
                    </div>

                    <div className="link-inner-div">
                      <p className="t2">
                        ID-213
                        <span
                          style={{
                            color: "#1768ac",
                            fontWeight: 700,
                            marginLeft: "7px",
                          }}
                        >
                          Issue Name
                        </span>
                        <span style={{ color: "#8d8d8d", marginLeft: "7px" }}>
                          12/05/2021
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="link-check-div position-relative">
                      <img
                        src="/Assets/Icon feather-check.svg"
                        className="check-icon"
                        alt=""
                      />
                    </div>

                    <div className="link-inner-div">
                      <p className="t2">
                        ID-213
                        <span
                          style={{
                            color: "#1768ac",
                            fontWeight: "700",
                            marginLeft: "7px",
                          }}
                        >
                          Issue Name
                        </span>
                        <span style={{ color: "#8d8d8d", marginLeft: "7px" }}>
                          12/05/2021
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="link-check-div position-relative">
                      <img
                        src="/Assets/Icon feather-check.svg"
                        className="check-icon"
                        alt=""
                      />
                    </div>

                    <div className="link-inner-div">
                      <p className="t2">
                        ID-213
                        <span
                          style={{
                            color: "#1768ac",
                            fontWeight: 700,
                            marginLeft: "7px",
                          }}
                        >
                          Issue Name
                        </span>
                        <span style={{ color: "#8d8d8d", marginLeft: "7px" }}>
                          12/05/2021
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="bt-close" data-dismiss="modal">
                  Close
                </button>
                <button type="button" className="bt-link">
                  Link
                </button>
              </div>
            </div>
          </div>
        </div>

        <Modal
          title="Link Issues"
          visible={linkModal}
          onOk={() => setLinkModal(!linkModal)}
          onCancel={() => setLinkModal(!linkModal)}
          className="link-modal"
          footer={null}
        >
          <div className="d-flex justify-content-between">
            <div style={{ position: "relative" }}>
              <input type="text" className="search-input" />
              <img
                src={SearchIcon}
                style={{
                  position: "absolute",
                  left: "0",
                  top: "10px",
                  left: "9px",
                }}
                alt=""
              />
            </div>

            <p className="t1">selected: 4</p>
          </div>

          <div className="links-wrapper">
            <div className="d-flex">
              <div className="link-check-div position-relative">
                <img src={IconFeatherCheck} className="check-icon" alt="" />
              </div>

              <div className="link-inner-div">
                <p className="t2">
                  ID-213
                  <span
                    style={{
                      color: "#1768ac",
                      fontWeight: "700",
                      marginLeft: "7px",
                    }}
                  >
                    Issue Name
                  </span>
                  <span style={{ color: "#8d8d8d", marginLeft: "7px" }}>
                    12/05/2021
                  </span>
                </p>
              </div>
            </div>
            <div className="d-flex">
              <div className="link-check-div position-relative">
                <img src={IconFeatherCheck} className="check-icon" alt="" />
              </div>

              <div className="link-inner-div">
                <p className="t2">
                  ID-213
                  <span
                    style={{
                      color: "#1768ac",
                      fontWeight: 700,
                      marginLeft: "7px",
                    }}
                  >
                    Issue Name
                  </span>
                  <span style={{ color: "#8d8d8d", marginLeft: "7px" }}>
                    12/05/2021
                  </span>
                </p>
              </div>
            </div>
            <div className="d-flex">
              <div className="link-check-div position-relative">
                <img src={IconFeatherCheck} className="check-icon" alt="" />
              </div>

              <div className="link-inner-div">
                <p className="t2">
                  ID-213
                  <span
                    style={{
                      color: " #1768ac",
                      fontWeight: "700",
                      marginLeft: "7px",
                    }}
                  >
                    Issue Name
                  </span>
                  <span style={{ color: "#8d8d8d", marginLeft: "7px" }}>
                    12/05/2021
                  </span>
                </p>
              </div>
            </div>
            <div className="d-flex">
              <div className="link-check-div position-relative">
                <img src={IconFeatherCheck} className="check-icon" alt="" />
              </div>

              <div className="link-inner-div">
                <p className="t2">
                  ID-213
                  <span
                    style={{
                      color: "#1768ac",
                      fontWeight: 700,
                      marginLeft: "7px",
                    }}
                  >
                    Issue Name
                  </span>
                  <span style={{ color: "#8d8d8d", marginLeft: "7px" }}>
                    12/05/2021
                  </span>
                </p>
              </div>
            </div>
            <div className="d-flex">
              <div className="link-check-div position-relative">
                <img src={IconFeatherCheck} className="check-icon" alt="" />
              </div>

              <div className="link-inner-div">
                <p className="t2">
                  ID-213
                  <span
                    style={{
                      color: "#1768ac",
                      fontWeight: "700",
                      marginLeft: "7px",
                    }}
                  >
                    Issue Name
                  </span>
                  <span style={{ color: "#8d8d8d", marginLeft: "7px" }}>
                    12/05/2021
                  </span>
                </p>
              </div>
            </div>
            <div className="d-flex">
              <div className="link-check-div position-relative">
                <img src={IconFeatherCheck} className="check-icon" alt="" />
              </div>

              <div className="link-inner-div">
                <p className="t2">
                  ID-213
                  <span
                    style={{
                      color: "#1768ac",
                      fontWeight: 700,
                      marginLeft: "7px",
                    }}
                  >
                    Issue Name
                  </span>
                  <span style={{ color: "#8d8d8d", marginLeft: "7px" }}>
                    12/05/2021
                  </span>
                </p>
              </div>
            </div>
            <div className="d-flex">
              <div className="link-check-div position-relative">
                <img src={IconFeatherCheck} className="check-icon" alt="" />
              </div>

              <div className="link-inner-div">
                <p className="t2">
                  ID-213
                  <span
                    style={{
                      color: "#1768ac",
                      fontWeight: "700",
                      marginLeft: "7px",
                    }}
                  >
                    Issue Name
                  </span>
                  <span style={{ color: "#8d8d8d", marginLeft: "7px" }}>
                    12/05/2021
                  </span>
                </p>
              </div>
            </div>
            <div className="d-flex">
              <div className="link-check-div position-relative">
                <img src={IconFeatherCheck} className="check-icon" alt="" />
              </div>

              <div className="link-inner-div">
                <p className="t2">
                  ID-213
                  <span
                    style={{
                      color: "#1768ac",
                      fontWeight: 700,
                      marginLeft: "7px",
                    }}
                  >
                    Issue Name
                  </span>
                  <span style={{ color: "#8d8d8d", marginLeft: "7px" }}>
                    12/05/2021
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="bt-close" data-dismiss="modal">
              Close
            </button>
            <button type="button" className="bt-link">
              Link
            </button>
          </div>
        </Modal>
      </Layout>

      {subTask && (
        <Modal
          title="Need Help"
          visible={subTask}
          onOk={() => setSubTask(!subTask)}
          onCancel={() => setSubTask(!subTask)}
          className="subtask-modal"
          footer={null}
        >
          <div className="content-box bg-white">
            <div asp-validation-summary="All" className="text-danger"></div>

            <div className="bs-stepper">
              <div className="bs-stepper-header" role="tablist">
                <div className="d-flex justify-content-start">
                  <div className="d-flex">
                    <img src={CheckIcon} className="mr-5" alt="" />
                    <p className="stepper-text mr-5">New</p>
                  </div>
                  <hr className="hr" />
                  <div className="d-flex">
                    <img src={CheckIcon} className="mr-5" alt="" />
                    <p className="stepper-text mr-5">In Progress</p>
                  </div>
                  <hr className="hr" />
                  <div className="d-flex">
                    <img src={UnderProgressIcon} className="mr-5" alt="" />
                    <p
                      className="stepper-text mr-5"
                      style={{ color: "#A8A8A8" }}
                    >
                      Resolved
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-between">
              <div className="Drivers">
                <div className="help-wrapper">
                  <div className="d-flex justify-content-between">
                    <p className="t1">ERP - 01 Jul 2021 -01</p>
                    <p className="t1">
                      Status
                      <select
                        className="g-select"
                        style={{ outline: "none" }}
                        aria-label="Default select example"
                      >
                        <option selected>Reopen</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </p>
                  </div>
                  <h5 className="t2">Need Help</h5>

                  <div className="d-flex justify-content-between">
                    <p className="text-muted">soiban@gmail.com</p>

                    <div className="d-flex">
                      <select name="type" className="type-drop" id="">
                        <option value="">High</option>
                        <option value="">Medium</option>
                        <option value="">low</option>
                      </select>
                      <div className="d-flex position-relative">
                        <div
                          className="flag-div"
                          onclick="showFlag()"
                          style={{ cursor: "pointer" }}
                        >
                          <img
                            data-toggle="collapse"
                            href="#flagdiv"
                            style={{
                              marginBottom: "5px",
                              marginLeft: "6px",
                            }}
                            src={FlagIcon}
                            height="11"
                            alt=""
                          />
                        </div>

                        <p
                          id="renderflag"
                          className="flag-type-text"
                          style={{ cursor: "pointer" }}
                          onclick="showFlag()"
                          onClick={() => setFlag(!flag)}
                        >
                          High
                        </p>

                        {flag && (
                          <div className="flag-options">
                            <p
                              className="flag-options-text"
                              onclick="setFlag('high')"
                            >
                              <img
                                src={FlagIcon}
                                style={{ marginRight: "8px" }}
                                height="11"
                                alt=""
                              />
                              High
                            </p>
                            <p
                              className="flag-options-text"
                              onclick="setFlag('Medium')"
                            >
                              <img
                                src={FlagIcon2}
                                style={{ marginRight: "8px" }}
                                height="11"
                                alt=""
                              />
                              Medium
                            </p>
                            <p
                              className="flag-options-text"
                              onclick="setFlag('low')"
                            >
                              <img
                                src={FlagIcon3}
                                style={{ marginRight: "8px" }}
                                height="11"
                                alt=""
                              />
                              Low
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <input
                    id="driverId"
                    name="driverId"
                    v-model="selectedId"
                    hidden
                  />
                  <input
                    id="deliveryId"
                    name="deliveryId"
                    value="@Model.SaleDeliveryID"
                    hidden
                  />
                  <hr />
                  <div className="d-flex justify-content-between driver-row-header">
                    <p className="t3">Issue Type</p>
                    <p className="t3">Module</p>
                    <p className="t3">Sub - Module</p>
                  </div>
                  <div className="d-flex justify-content-between driver-row-header">
                    <p className="t4">Technical</p>
                    <p className="t4">Dashboard</p>
                    <p className="t4">Power BI</p>
                  </div>
                  <br />
                  <br />
                  <p className="t3">Description</p>
                  <p className="t5">
                    This is just a dummy description of a ticket where you can
                    clearly understand our issue.
                  </p>
                </div>

                <div className="help-wrapper2">
                  <p
                    style={{ cursor: "pointer" }}
                    className="customer-satisfaction-title"
                    data-toggle="modal"
                    data-target="#createsubtask"
                  >
                    Sub Tasks
                    <img
                      src="/Assets/Icon material-add-circle (1).svg"
                      height="22"
                      alt=""
                    />
                  </p>
                  <div className="customer-satifaction-wrapper">
                    <div
                      className="subtask-d d-flex justify-content-between"
                      data-toggle="modal"
                      data-target="#exampleModal"
                      type="button"
                      onClick={() => setSubTask(!subTask)}
                    >
                      <div
                        className="d-flex"
                        data-toggle="modal"
                        data-target="#exampleModal"
                        type="button"
                      >
                        <img
                          src="/Assets/Icon material-local-activity.svg"
                          s
                          height="14"
                          style={{ marginTop: "2px" }}
                          className="mr-2"
                          alt=""
                        />
                        <p className="t1 mr-2">ID-213</p>
                        <p className="t2">Sub Task</p>
                        <p className="t3">12/05/2021</p>
                      </div>

                      <div>
                        <select name="" id="" className="subtask-select">
                          <option value="">Reopen</option>
                          <option value="">Reopen</option>
                          <option value="">Reopen</option>
                        </select>
                      </div>
                    </div>
                    <div
                      className="subtask-d d-flex justify-content-between"
                      style={{ marginTop: "9px" }}
                    >
                      <div className="d-flex">
                        <img
                          src="/Assets/Icon material-local-activity.svg"
                          s
                          height="14"
                          style={{ marginTop: "2px" }}
                          className="mr-2"
                          alt=""
                        />
                        <p className="t1 mr-2">ID-213</p>
                        <p className="t2">Sub Task</p>
                        <p className="t3">12/05/2021</p>
                      </div>

                      <div>
                        <select name="" id="" className="subtask-select">
                          <option value="">Reopen</option>
                          <option value="">Reopen</option>
                          <option value="">Reopen</option>
                        </select>
                      </div>
                    </div>

                    <div className="activity-tabs-wrap">
                      <button
                        className="btn-comments"
                        onClick={showComment2}
                        onclick="changeCommentView('comments')"
                        style={{
                          background: `${comment2 ? "#437CBE" : "#F3F3F3"}`,
                          color: `${comment2 ? "white" : "#AEADAD"}`,
                        }}
                      >
                        Comments
                      </button>
                      <button
                        className="btn-log"
                        id="activitylogs"
                        onClick={showActivity2}
                        style={{
                          background: `${activityLog2 ? "#437CBE" : "#F3F3F3"}`,
                          color: `${activityLog2 ? "white" : "#AEADAD"}`,
                        }}
                      >
                        activity Log
                      </button>
                    </div>

                    {comment2 && (
                      <div className="comments-wrapper" id="commentsection">
                        <div style={{ minWidth: "518px" }}>
                          <div className="d-flex justify-content-between filter">
                            <h5 className="t2"></h5>
                            <h5 className="t1">
                              Sort by
                              <select
                                style={{ outline: "none", marginLeft: "8px" }}
                                aria-label="Default select example"
                              >
                                <option selected>Newest</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </h5>
                          </div>

                          <div className="comments-body">
                            <div className="comment d-flex">
                              <div className="avatar-background">
                                <img
                                  className="avatar"
                                  src={BucketIcon}
                                  alt="
                      asdas"
                                />

                                <div className="online-dot"></div>
                              </div>

                              <div className="d1">
                                <p className="comment-t1">
                                  Have questions or feedback about Office VBA or
                                  this documentation? Please see Office VBA
                                  support and feedback for guidance about the
                                  ways you can receive support and provide
                                  feedback.
                                </p>

                                <p className="comment-date">
                                  20 July,2020
                                  <span style={{ marginLeft: "32px" }}>
                                    12:36 PM{" "}
                                  </span>
                                </p>
                              </div>
                            </div>
                            <div className="comment d-flex mt-5">
                              <div className="avatar-background">
                                <img
                                  className="avatar"
                                  src={BucketIcon}
                                  alt="
                      asdas"
                                />
                                <div className="online-dot"></div>
                              </div>

                              <div className="d1">
                                <p className="comment-t1">
                                  Have questions or feedback about Office VBA or
                                  this documentation? Please see Office VBA
                                  support and feedback for guidance about the
                                  ways you can receive support and provide
                                  feedback.
                                </p>

                                <p className="comment-date">
                                  20 July,2020
                                  <span style={{ marginLeft: "32px" }}>
                                    12:36 PM{" "}
                                  </span>
                                </p>
                              </div>
                            </div>
                            <div className="comment d-flex mt-5">
                              <div className="avatar-background">
                                <img
                                  className="avatar"
                                  src={BucketIcon}
                                  alt="
                      asdas"
                                />
                                <div className="online-dot"></div>
                              </div>

                              <div className="d1">
                                <p className="comment-t1">
                                  Have questions or feedback about Office VBA or
                                  this documentation? Please see Office VBA
                                  support and feedback for guidance about the
                                  ways you can receive support and provide
                                  feedback.
                                </p>

                                <p className="comment-date">
                                  20 July,2020
                                  <span style={{ marginLeft: "32px" }}>
                                    {" "}
                                    12:36 PM{" "}
                                  </span>
                                </p>
                              </div>
                            </div>

                            <div></div>
                          </div>

                          <div className="external-d d-flex">
                            <img
                              src={InternalIcon}
                              style={{
                                marginTop: "4px",

                                marginRight: "-8px",
                              }}
                              height="14"
                              alt=""
                            />
                            <button
                              className="btn-external"
                              onclick="changeColor('external')"
                              id="external"
                            >
                              External
                            </button>

                            <img
                              src={ExternalIcon}
                              style={{ marginTop: "4px", marginRight: "-8px" }}
                              height="14"
                              alt=""
                            />
                            <button
                              className="btn-internal"
                              onclick="changeColor('internal')"
                              id="internal"
                            >
                              Internal
                            </button>
                          </div>

                          <div className="quill-wrap">
                            <div id="editor">
                              <p className="ql-align-center"></p>
                            </div>
                            <div id="toolbar">
                              <ReactQuill theme="snow" />
                            </div>
                          </div>
                        </div>

                        <div className="d-flex justify-content-end btns-wrapper">
                          <button className="cancel-btn">Cancel</button>
                          <button className="comment-btn">Comment</button>
                        </div>
                      </div>
                    )}

                    {activityLog2 && (
                      <div className="activitylogs-body" id="activitylogs1">
                        <div className="d-flex justify-content-between">
                          <p className="t1">
                            John Doe Changed the status from
                            <span
                              style={{
                                color: "#30c47c",
                                marginLeft: "20px",
                                marginRight: "12px",
                              }}
                            >
                              Resolved
                            </span>
                            to
                            <span
                              style={{ marginLeft: "12px", color: "#30c47c" }}
                            >
                              Closed
                            </span>
                          </p>

                          <p className="t1">12/05/2021</p>
                        </div>
                        <div
                          className="d-flex justify-content-between"
                          style={{ marginTop: "10px" }}
                        >
                          <div className="d-flex">
                            <p className="t1">
                              John Doe Changed the Assignee from
                            </p>
                            <div
                              className="name-wrap-div"
                              style={{
                                marginLeft: "10px",
                                marginRight: "10px",
                              }}
                            >
                              <p className="mini-name">MA</p>
                            </div>
                            <p className="name mr-2">Muzamil Afridi</p>

                            <p className="t2" style={{ marginRight: "10px" }}>
                              To
                            </p>
                            <p className="name" style={{ marginRight: "10px" }}>
                              Muzamil Afridi
                            </p>
                            <div className="name-wrap-div">
                              <p className="mini-name">MA</p>
                            </div>
                          </div>
                          <p className="t1">12/05/2021</p>
                        </div>

                        <div className="d-flex justify-content-between">
                          <p className="t1">John Doe Changed the description</p>
                          <p className="t1">12/05/2021</p>
                        </div>

                        <div className="d-flex" style={{ marginTop: "45px" }}>
                          <p className="t1" style={{ marginRight: "42px" }}>
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat, sed diam
                            voluptua. At vero eos et accusam et justo duo
                            dolores et ea rebum. Stet clita kasd gubergren, no
                            sea takimata sanctus est Lorem ipsum dolor sit
                          </p>
                          <p className="t1">
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat, sed diam
                            voluptua. At vero eos et accusam et justo duo
                            dolores et ea rebum. Stet clita kasd gubergren, no
                            sea takimata sanctus est Lorem ipsum dolor sit
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <form
                asp-action="CreateSchedule"
                data-ajax="true"
                data-ajax-method="post"
                data-ajax-success="PostDeliverySuccess"
                data-ajax-failure="PostDeliveryError"
              ></form>

              <div className="sla-wrapper">
                <div>
                  <p className="st1">SLA</p>

                  <p className="st2" style={{ marginTop: "17px" }}>
                    Time to first response
                    <span style={{ color: "#141414", marginLeft: "22px" }}>
                      2 Days
                    </span>
                  </p>
                </div>

                <div style={{ marginTop: "17px" }}>
                  <p className="st2">
                    Time to Resolution :
                    <span style={{ color: "#141414", marginLeft: "30px" }}>
                      24 Hours
                    </span>
                  </p>
                </div>
                <div style={{ marginTop: "17px" }}>
                  <p className="st2">
                    Time to first response
                    <span
                      style={{
                        color: "#141414",
                        marginLeft: "59px",
                        fontWeight: 600,
                      }}
                    >
                      Total Resolution Time
                    </span>
                  </p>
                </div>

                <div
                  className="d-flex justify-content-between"
                  style={{ marginTop: "17px" }}
                >
                  <p className="st3">14:25min</p>
                  <button className="btn-start">Start Working</button>
                </div>

                <div className="d-flex">
                  <div>
                    <div className="position-relative">
                      <p className="st1">Assignee</p>

                      {assignee && (
                        <div
                          className="position-absolute assignee-div"
                          id="assignee"
                        >
                          <div className="d-flex assign-btns-wrap">
                            <button className="btn-user">Users</button>
                            <button className="btn-team">Teams</button>
                          </div>

                          <div className="body">
                            <input
                              type="text"
                              placeholder="Search"
                              className="n-search-input"
                            />
                            <div className="mt-3 d-flex">
                              <div
                                className="search-name-d mr-1"
                                style={{ marginRight: "5px" }}
                              >
                                <p
                                  className=""
                                  style={{
                                    MarginBottom: "0px",
                                    marginTop: -"2px",
                                  }}
                                >
                                  MH
                                </p>
                              </div>
                              <p
                                className="search-f-name"
                                style={{ MarginBottom: "0px" }}
                              >
                                Muzammil afridi
                              </p>
                            </div>
                            <div className="mt-3 d-flex">
                              <div
                                className="search-name-d mr-1"
                                style={{ marginRight: "5px" }}
                              >
                                <p
                                  className=""
                                  style={{
                                    MarginBottom: "0px",
                                    marginTop: "-2px",
                                  }}
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
                              <div
                                className="search-name-d mr-1"
                                style={{ marginRight: "5px" }}
                              >
                                <p
                                  className=""
                                  style={{
                                    marginBottom: "0px",
                                    marginTop: "-2px",
                                  }}
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
                              <div
                                className="search-name-d mr-1"
                                style={{ marginRight: "5px" }}
                              >
                                <p
                                  className=""
                                  style={{
                                    marginBottom: "0px",
                                    marginTop: "-2px",
                                  }}
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
                              <div
                                className="search-name-d mr-1"
                                style={{ marginRight: "5px" }}
                              >
                                <p
                                  className=""
                                  style={{
                                    marginBottom: "0px",
                                    marginTop: "-2px",
                                  }}
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
                              <div
                                className="search-name-d mr-1"
                                style={{ marginRight: "5px" }}
                              >
                                <p
                                  className=""
                                  style={{
                                    marginBottom: "0px",
                                    marginTop: "-2px",
                                  }}
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
                              <div
                                className="search-name-d mr-1"
                                style={{ marginRight: "5px" }}
                              >
                                <p
                                  className=""
                                  style={{
                                    marginBottom: "0px",
                                    marginTop: "-2px",
                                  }}
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
                  <img
                    className="ml-3"
                    style={{ marginLeft: "17px", cursor: "pointer" }}
                    src={Component11}
                    alt=""
                    onClick={() => setAssignee(!assignee)}
                  />
                </div>

                <div
                  className="d-flex justify-content-between"
                  style={{ marginTop: "27px" }}
                >
                  <div className="d-flex">
                    <div className="name-div position-relative">
                      <p
                        style={{
                          fontSize: "10px",
                          color: "white",
                          fontWeight: 700,
                          marginTop: "5px",
                          marginLeft: "4px",
                        }}
                      >
                        MH
                      </p>

                      <div className="position-absolute active-dot"></div>
                    </div>

                    <p className="st4" style={{ marginLeft: "14px" }}>
                      Muzamil Afridi
                    </p>
                  </div>

                  <p className="st2">12/05/2021 12:50 PM</p>
                </div>

                <div className="linked-issues">
                  <div className="lined-issues-list"></div>

                  <div className="created-list">
                    <div
                      className="d-flex justify-content-between"
                      style={{ marginBottom: "14px" }}
                    >
                      <p className="st4">Create by Muzamil Afridi</p>
                      <p className="st2">12/05/2021 12:50 PM</p>
                    </div>
                    <div
                      className="d-flex justify-content-between"
                      style={{ marginBottom: "14px" }}
                    >
                      <p className="st4">Create by Muzamil Afridi</p>
                      <p className="st2">12/05/2021 12:50 PM</p>
                    </div>
                    <div
                      className="d-flex justify-content-between"
                      style={{ marginBottom: "14px" }}
                    >
                      <p className="st4">Create by Muzamil Afridi</p>
                      <p className="st2">12/05/2021 12:50 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}

export default TicketDetails;
