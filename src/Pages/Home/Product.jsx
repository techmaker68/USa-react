import React, { useState, useEffect } from "react";
import Layout from "../../Layout/Index.jsx";
import Api from "Api.js";
import axios from "axios";
import { Card, Button, Modal, Form, Input, message, Select } from "antd";
import Brand from "./Brand.jsx";
import { useUserContext } from "Context/USerContext.js";

function Product(props) {
  const { login: signin, getUser } = useUserContext();
  const [uploadFile, setUploadFile] = React.useState();
  const [uploadFile2, setUploadFile2] = React.useState();

  const [refresh, setRefresh] = useState(false);
  const [editData, setEditData] = useState();
  const [loading, setLoading] = useState(false);
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);

  const [data, setData] = useState([]);
  const [editModal, setEditModal] = useState(false);
  const [response, setResponse] = useState();
  const { Meta } = Card;
  const { Option } = Select;
  const [modal, setModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    Api.get("/products").then((res) => {
      setData(res.data);

      console.log("products", res.data);
    });

    Api.get("/brands").then((res) => {
      setBrands(res.data);

      console.log("brands", brands);
    });
    Api.get("/category").then((res) => {
      setCategories(res.data);
    });
  }, [refresh]);

  function handleEdit(id) {
    setLoading(true);
    Api.post("/products/" + id)

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
    Api.post("/products/delete/" + id)

      .then((response) => {
        message.success("products deleted successfully");
        setRefresh(!refresh);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function updateData(values, id) {
    console.log("update", values);
    setEditModal(false);

    const formData = new FormData();

    formData.append("image", uploadFile2);
    formData.append("brand_id", values.brand_id);
    formData.append("category_id", values.category_id);
    formData.append("name", values.name);
    formData.append("price", values.price);

    Api.post("/products/update/" + id, values)

      .then((response) => {
        message.success("brand edited successfully");
        setRefresh(!refresh);
        // setResponse(response.data);
        // console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleNew(values) {
    const formData = new FormData();

    formData.append("image", uploadFile);
    formData.append("brand_id", values.brand_id);
    formData.append("category_id", values.category_id);
    formData.append("name", values.name);
    formData.append("price", values.price);

    setModal(false);

    Api.post("/products/create", formData)

      .then((response) => {
        message.success("product added successfully");
        setRefresh(!refresh);

        setResponse(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // function onFileHandler(event) {
  //   event.target.files[0];
  // }

  return (
    <Layout title="Products" currentPage={3}>
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

        <div className="cards-wrapper d-flex flex-wrap">
          {data.map((brand) => (
            <Card
              hoverable
              style={{ width: 240, marginRight: "50px", marginTop: "50px" }}
              cover={<img alt="example" src={brand.image} />}
            >
              <Meta title="Name" description={brand?.name} />
              <Meta title="price" description={brand?.price} />
              <Meta title="Category" description={brand?.category.name} />
              <Meta title="brand" description={brand?.brand.name} />

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
        <p>Enter product Details</p>

        <Form layout="vertical" onFinish={handleNew}>
          <Form.Item label="Name" name="name">
            <Input
              className="primary-input"
              required
              placeholder="Enter Name "
            />
          </Form.Item>
          <Form.Item label="Price" name="price">
            <Input
              className="primary-input"
              required
              placeholder="Enter price "
            />
          </Form.Item>
          <Form.Item label="category" name="category_id">
            <Select
              style={{ width: "269px", height: "48px" }}
              placeholder="select one"
            >
              {categories.map((category) => (
                <Option value={category.id}>{category.name}</Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="Brand" name="brand_id">
            <Select
              style={{ width: "269px", height: "48px" }}
              placeholder="select one"
            >
              {brands.map((brand) => (
                <>
                  <Option value={brand?.id}>{brand?.name}</Option>
                </>
              ))}
            </Select>
          </Form.Item>

          <Form.Item label="image" name="image">
            <Input
              type="file"
              required
              className="primary-input"
              onChange={(e) => setUploadFile(e.target.files[0])}
            ></Input>
          </Form.Item>

          <div className="d-flex">
            <Button className="primary-button" htmlType="submit">
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
          <Form.Item label="Price" name="price">
            <Input
              className="primary-input"
              required
              placeholder="Enter price "
            />
          </Form.Item>
          <Form.Item label="category" name="category_id">
            <Select
              style={{ width: "269px", height: "48px" }}
              placeholder="select one"
            >
              {categories.map((category) => (
                <Option value={category.id}>{category.name}</Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="Brand" name="brand_id">
            <Select
              style={{ width: "269px", height: "48px" }}
              placeholder="select one"
            >
              {brands.map((brand) => (
                <>
                  <Option value={brand?.id}>{brand?.name}</Option>
                </>
              ))}
            </Select>
          </Form.Item>

          <Form.Item label="image" name="image">
            <Input
              type="file"
              className="primary-input"
              onChange={(e) => setUploadFile2(e.target.files[0])}
            ></Input>
          </Form.Item>

          <div className="d-flex">
            <Button className="primary-button" htmlType="submit">
              update
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
      </Modal>
    </Layout>
  );
}

export default Product;
