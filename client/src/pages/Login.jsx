import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Col, Form, Layout, Row, Spin, message } from "antd";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((pre) => {
      return {
        ...pre,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleLogin = async (formData) => {
    // debugger
    try {
      const response = await axios.post(
        "https://notes-taking-app-mern.vercel.app/login",
        formData
      );
      console.log("Login successful:", response.data);
      const { userId, token } = response.data;

      // Store the token in local storage (you can use session storage as well)
      localStorage.setItem("userId", userId);
      localStorage.setItem("token", token);

      navigate("/notes");
      // You can handle successful sign-up, show a success message, or redirect to another page.
    } catch (error) {
      navigate("/register");
      console.error("Login failed:", error.response.data);
      // You can handle sign-up errors, display an error message, or take appropriate actions.
    }
  };

  const onFinish = () => {
    // debugger
    handleLogin(formData);
  };

  return (
    <>
      <Layout>
        <Row className="modal-mainDiv" gutter={16}>
          <Col className="model-firstDiv"></Col>
          <Col
            className={`model-secDiv`} // ${loading ? "blur" : ""}
            xs={24}
            sm={24}
            md={16}
            lg={16}
            xl={16}
          >
            <h1>Login page</h1>
            <hr />
            <Form className="FormDiv" onFinish={onFinish}>
              <Form.Item name="email">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  placeholder="Enter Your Email"
                  onChange={handleChange}
                  // required
                />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  placeholder="Enter your password"
                  onChange={handleChange}
                  // required
                />
              </Form.Item>
              <div className="btn-div">
                <Form.Item>
                  <Link to="/register" style={{ textAlign: "center" }}>
                    <Button type="primary">click here to register</Button>
                  </Link>
                </Form.Item>
                <Form.Item>
                  <Button htmlType="submit" type="primary">
                    Login
                  </Button>
                  <Link to='/forgot-password'>
                    <Button style={{ marginLeft: "2%"}} type="primary">
                      Forgot password
                    </Button>
                  </Link>
                </Form.Item>
              </div>
            </Form>
          </Col>
        </Row>
      </Layout>
      {/* {loading && <Spin className="loader" size="large" />} */}
    </>
  );
};

export default Login;
