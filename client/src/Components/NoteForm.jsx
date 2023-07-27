import { Button, Col, Form, Modal, Row } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NoteForm = ({ showNoteForm, setShowNoteForm, type='add' }) => {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        heading: '',
        note: '',
        tag: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value 
        })
    }

    const onFinish = async () => {
        try {
            let response = null
            if(type = 'add') {
                response = await axios.post(`http://localhost:8000/notes`, )
            }
        } catch (error) {
            console.log(error)
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
                            value={formData.heading} 
                            onChange={handleChange}

                        />
                    </Form.Item>
                    <Form.Item label='note:' name='note'>
                        <input 
                            type="text" 
                            value={formData.note} 
                            onChange={handleChange}
                        />
                    </Form.Item>
                    <Form.Item label='tag:' name='tag'>
                        <input 
                            type="text" 
                            value={formData.tag} 
                            onChange={handleChange}
                        />
                    </Form.Item>
                    <div>
                        <Form.Item>
                            <button htmltype="submit">save</button>
                        </Form.Item>
                    </div>
                </Form>
            </Modal>
        </>
     );
}
 
export default NoteForm;