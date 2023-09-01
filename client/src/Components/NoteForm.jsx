import { Button, Col, Form, Modal, Row } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NoteForm = ({ showNoteForm, setShowNoteForm, userId  }) => {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        heading: '',
        note: '',
        tag: '',
        // userId:userId,
    })

    const handleChange = (e) => {
        setFormData((pre)=>{ // 
            return({
            ...pre,
            [e.target.name]: e.target.value 
        })})
    }

    const onFinish = async () => {
        console.log('Form submitted');
        try {
            // debugger;
            // let response = null
            // if(type === 'add') {

            const dataToSend = { ...formData, userId }
            const token = localStorage.getItem('token');
            const response = await axios.post(`http://localhost:8000/user-notes`, dataToSend, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            console.log('Response from backend:', response.data);
            // }
            setShowNoteForm(false); 
        } catch (error) {
            console.log('Error:', error.response.data)
        }
    }

    return ( 
        <>
            <p>NoteForm</p>
            <Modal 
                width={800}
                title='create notes' 
                visible={showNoteForm}
                onCancel={() => setShowNoteForm(false)}
                footer={false}
            >
                <Form layout="vertical" onFinish={onFinish}>
                    <Form.Item label='heading:' name='heading'>
                        <input 
                            type="text"
                            name='heading'
                            value={formData?.heading} 
                            onChange={handleChange}
                        />  
                    </Form.Item>
                    <Form.Item label='note:' name='note'>
                        <input 
                            type="text" 
                            name='note'
                            value={formData?.note} 
                            onChange={handleChange}
                        />
                    </Form.Item>
                    <Form.Item label='tag:' name='tag'>
                        <input 
                            type="text"
                            name='tag'
                            value={formData.tag} 
                            onChange={handleChange}
                        />
                    </Form.Item>
                    <div>
                        <Form.Item>
                            <Button htmlType="submit" type="primary">save</Button>
                        </Form.Item>
                    </div>
                </Form>
            </Modal>
        </>
     );
}

export default NoteForm;