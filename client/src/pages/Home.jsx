import { Button, Col, Form, Layout, Row } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

    return (
        <>
            <Layout className="mainDiv">
                <h1>welcome to Notes app</h1>
                <div className="subDiv">
                    <Link to='/register'><Button type="primary">Register</Button></Link>
                    <Link to='/login'><Button type="primary">Login</Button></Link>
                </div>  
               
            </Layout>
        </>
    )
}

export default Home



