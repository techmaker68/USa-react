import React, { useState, useEffect } from "react";
import Layout from "../../Layout/Index.jsx";
import { Card, Button, Modal, Form, Input, message } from "antd";
import Api from "Api.js";
import axios from "axios";
import { useUserContext } from "Context/USerContext.js";
function Brand(props) {
  const { login: signin, getUser } = useUserContext();
  const [refresh, setRefresh] = useState(false);
  const [editData, setEditData] = useState({});
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    Api.get("/brands").then((res) => {
      setData(res.data);
    });
  }, [refresh]);

  const [response, setResponse] = useState();

  function handleNew(values) {
    console.log(values);
    setModal(false);

    Api.post("/brands/create", values)

      .then((response) => {
        message.success("brand added successfully");
        setRefresh(!refresh);

        setResponse(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  console.log("asd", editData);

  function handleEdit(id) {
    setLoading(true);
    Api.post("/brands/" + id)

      .then((response) => {
        setLoading(false);

        setEditData(response.data);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });

    setEditModal(true);
  }

  function deletedata(id) {
    Api.post("/brands/delete/" + id)

      .then((response) => {
        message.success("brand deleted successfully");
        setRefresh(!refresh);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function updateData(values, id) {
    console.log(values);
    setEditModal(false);

    Api.post("/brands/update/" + id, values)

      .then((response) => {
        message.success("brand edited successfully");
        setRefresh(!refresh);
        setResponse(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleChange(event) {
    setEditData(event.target.value);
  }
  const { Meta } = Card;

  const [modal, setModal] = useState(false);
  const [editModal, setEditModal] = useState(false);

  return (
    <Layout title="Brands" currentPage="1">
      <div className="main-wrapper">
        <div style={{ marginBottom: "50px" }}>
          {getUser().role == "admin" && (
            <Button
              className="btn-create-new"
              style={{ background: "#186bb1", color: "white" }}
              onClick={() => setModal(true)}
            >
              create new
            </Button>
          )}
        </div>

        <div className="cards-wrapper d-flex  flex-wrap">
          {data.map((brand) => (
            <Card
              hoverable
              style={{ width: 240, marginRight: "50px", marginTop: "50px" }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta title={brand.name} description="www.instagram.com" />

              {getUser().role == "admin" && (
                <div className="d-flex float-end" style={{ marginTop: "20px" }}>
                  <Button
                    style={{ background: "red", color: "white" }}
                    onClick={() => deletedata(brand.id)}
                  >
                    Delete
                  </Button>
                  <Button
                    style={{ background: "#186bb1", color: "white" }}
                    onClick={() => handleEdit(brand.id)}
                  >
                    Edit
                  </Button>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>

      <Modal
        title="create new Brand"
        closable={true}
        footer={false}
        maskClosable={true}
        visible={modal}
      >
        <p>Enter Brand Name</p>

        <Form layout="vertical" onFinish={handleNew}>
          <Form.Item label="Name" name="name">
            <Input
              className="primary-input"
              required
              placeholder="Enter Name "
            />
          </Form.Item>

          <div className="d-flex">
            <Button
              className="primary-button"
              htmlType="submit"
              onClick={handleNew}
            >
              Create
            </Button>
            <Button
              className="primary-button"
              style={{
                marginLeft: "10px",
                background: "white",
                color: "black",
              }}
              onClick={() => setModal(false)}
            >
              Close
            </Button>
          </div>
        </Form>
      </Modal>

      <Modal
        title="Edit"
        closable={true}
        footer={false}
        maskClosable={true}
        visible={editModal}
      >
        <p>Edit Brand Name</p>
        {editData.name && editData.name.length > 0 && (
          <Form
            layout="vertical"
            onFinish={(values) => {
              updateData(values, editData.id);
            }}
            initialValues={editData}
          >
            <Form.Item label="Name" name="name">
              <Input
                className="primary-input"
                required
                placeholder="Enter Name "
              />
            </Form.Item>

            <div className="d-flex">
              <Button htmlType="submit" className="primary-button">
                Update
              </Button>
              <Button
                className="primary-button"
                style={{
                  marginLeft: "10px",
                  background: "white",
                  color: "black",
                }}
                onClick={() => setEditModal(false)}
              >
                Close
              </Button>
            </div>
          </Form>
        )}
      </Modal>
    </Layout>
  );
}

export default Brand;
