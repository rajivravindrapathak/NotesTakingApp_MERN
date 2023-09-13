import { Button, Col, Form, Layout, Row } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import HeaderCom from '../Components/Header'

const Home = () => {

    const handleBookData = [
        {
            bookname: "Srimad Bhagavad Gita",
            writer: "Maharishi Veda Vyasa"
        },
        {
            bookname: "Without Fear: The Life & Trial of Bhagat Singh.",
            writer: "Kuldip Nayar"
        },
        {
            bookname: "Veer Savarkar: Echoes from a Forgotten Past",
            writer: "Vikram Sampath"
        },
        {
            bookname: "The Great Tragedy of India's Partition ",
            writer: "S.S. Sharma"
        },
        {
            bookname: "Syama Prasad Mookerjee: A Life: Life and Times",
            writer: "Tathagata Roy"
        },
        {
            bookname: "Syama Prasad Mookerjee: A Life: Life and Times",
            writer: "Tathagata Roy"
        },
        {
            bookname: "Syama Prasad Mookerjee: A Life: Life and Times",
            writer: "Tathagata Roy"
        },
        {
            bookname: "Syama Prasad Mookerjee: A Life: Life and Times",
            writer: "Tathagata Roy"
        },
        {
            bookname: "Syama Prasad Mookerjee: A Life: Life and Times",
            writer: "Tathagata Roy"
        }
    ]

    return (
        <>
            <HeaderCom />
            <Layout className="mainDiv">
                <Row>
                    <Col>
                        <h1>                     
                            "Access free books with valuable insights that have a profound impact on 
                            the lives of all Indians. Click the 'Details' button to start reading these
                            books. Additionally, you can create and publish your own notebook or book."
                        </h1>
                    </Col>
                </Row>
                <Row>
                    {
                        handleBookData && handleBookData.map((item, index) => {
                            return (
                                <>
                                    <Col
                                        xs={24}
                                        sm={24}
                                        md={8}
                                        lg={12}
                                        xl={12}
                                    >
                                       <p>{item.bookname}</p>
                                    </Col>
                                    <Col
                                        xs={24}
                                        sm={24}
                                        md={8}
                                        lg={6}
                                        xl={6}
                                    >
                                        <p>{item.writer}</p>
                                    </Col>
                                    <Col
                                        xs={24}
                                        sm={24}
                                        md={8}
                                        lg={6}
                                        xl={6}
                                    >
                                        <Button htmlType='submit' type='primary'>Details</Button>
                                    </Col>
                                </> 
                            )
                        })
                    }
                </Row>
               
            </Layout>
        </>
    )
}

export default Home



