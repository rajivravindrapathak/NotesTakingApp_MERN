import { Button, Col, Form, Layout, Row } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

    const handleBookData = [
        {
            name: "Sardar Bhagat Singh Autobiography",
        },
        {
            name: "A Tragedy of divide India",
        },
        {
            name: "A Tragedy of divide India",
        },
        {
            name: "A Tragedy of divide India",
        },
        {
            name: "A Tragedy of divide India",
        }
    ]

    return (
        <>
            <Layout className="mainDiv">
                {/* <Row>
                    <Col>
                        <h1>welcome to Notes app</h1>
                    </Col>
                    <Col className="subDiv">
                        <Link to='/register'><Button type="primary">Register</Button></Link>
                        <Link to='/login'><Button type="primary">Login</Button></Link>
                    </Col>  
                </Row> */}
                <Row>
                    <Col>
                        <h1>
                            Some Free Notes Book that affect All indian people life,
                            Avilable to Read, Click on details button to Read Books Also you create your 
                            note book and book and publish it.
                        </h1>
                    </Col>
                </Row>
                <Row>
                    {
                        handleBookData && handleBookData.map((item, index) => {
                            return (
                                <Col>

                                </Col>
                            )
                        })
                    }
                     {/* <p>
                        Sardar Bhagat Singh Autobiography
                    </p>
                    <Button type='primary'>
                        Details
                    </Button>
                    <p>
                        A Tragedy of divide India
                    </p>  */}
                </Row>
               
            </Layout>
        </>
    )
}

export default Home



