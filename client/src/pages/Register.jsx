
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Col, Form, Layout, Row, Spin, message } from "antd"
import axios from 'axios'


const Register = () => {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        age: ''
      });
  
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };    

      const handleRegister = async (formData) => {
        try {
          const response = await axios.post('http://localhost:8000/signup', formData);
          console.log('Sign-up successful:', response.data);
          navigate('/login')
        } catch (error) {
          console.error('Sign-up failed:', error.response.data);
        }
      };

    const onFinish = (e) => {
      handleRegister(formData);
    }


    return (
         <>
         <Layout>
          <Row className="modal-mainDiv">               
            <Col className="model-firstDiv"></Col>
            <Col className={`model-secDiv`}  // ${loading ? "blur" : ""}
              xs={24}
              sm={24}
              md={16}
              lg={16}
              xl={16}
            >
              <h1>Register page</h1>
              <hr />
              <Form className="FormDiv" onFinish={onFinish}>
                 <Form.Item name="email">
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    placeholder="Enter Your Email" 
                    onChange={handleChange} 
                  />
                </Form.Item>
                <Form.Item name="password">
                  <input 
                    type="password" 
                    name="password"
                    value={formData.password}
                    placeholder="Enter your password" 
                    onChange={handleChange} 
                  />
                </Form.Item>
                <Form.Item name='age'>
                  <input 
                    type="number" 
                    name='age'
                    value={formData.username}
                    placeholder="Enter Your age" 
                    onChange={handleChange} 
                  />
                </Form.Item>
                <div className="btn-div">
                  <Form.Item>
                    <Link to='/login' style={{ textAlign: 'center'}} >
                      <Button type="primary">click here to login</Button>
                    </Link>
                  </Form.Item>
                  <Form.Item>
                    <Button htmlType="submit" type="primary">Register</Button>
                  </Form.Item>
                </div>
              </Form>
            </Col>
          </Row>
        </Layout>
        {/* {loading && <Spin className="loader" size="large" />} */}
       </>
    )
}

export default Register