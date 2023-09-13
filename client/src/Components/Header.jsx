import { Button, Col, Layout, Row } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const { Header } = Layout;

const HeaderCom = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token from local storage
    // Redirect to login page
    navigate("/login");
    setIsLoggedIn(false);
  };

  return (
    <Header
    // style={{
    //   alignItems: "center",
    //   display: "flex",
    //   position: "sticky",
    //   top: "0",
    //   zIndex: "1",
    // }}
    >
      <Row gutter={[16, 16]} style={{ justifyContent: "space-evenly" }}>
        <Col
          className="logo"
          style={{ display: "flex" }}
          xs={8}
          sm={8}
          md={8}
          lg={8}
          xl={8}
        >
          <img
            src="https://img.freepik.com/premium-vector/notepad-logo-design-with-data-paper_446783-1250.jpg"
            alt="logo"
            style={{ height: "50px", width: "120px" }}
          />
        </Col>
        <Col xs={8} sm={8} md={8} lg={8} xl={8}>
          <h1 style={{ color: "white" }}>welcome to Notes app</h1>
        </Col>

        <Col className="subDiv" xs={8} sm={8} md={8} lg={8} xl={8}>
          {isLoggedIn ? (
            <Button
              style={{ marginLeft: "2%" }}
              type="primary"
              onClick={handleLogout}
            >
              {" "}
              Logout{" "}
            </Button>
          ) : (
            <Col>
              <Link to="/register">
                <Button type="primary">SignUp</Button>
              </Link>
              <Link to="/login">
                <Button style={{ marginLeft: "2%" }} type="primary">
                  SignIn
                </Button>
              </Link>
            </Col>
          )}
        </Col>
      </Row>
    </Header>
  );
};

export default HeaderCom;
