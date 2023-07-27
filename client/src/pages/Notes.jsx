import { Button } from 'antd'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NoteForm from '../Components/NoteForm'

const Notes = () => {

    const [showNoteForm, setShowNoteForm] = useState([])
    const navigate = useNavigate()
    
    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        const token = localStorage.getItem("Notes_app_token")

        if(!token) {
            return <h1>please login again</h1>
            // navigate('/login')
        }    

        fetch("http://localhost:8000/notes", {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then((res) => res.json())
        .then((res) => setShowNoteForm(res))
        .catch((err) => console.log(err))
    }

    return (
        <>
            <h1>Notes</h1>
            {
                showNoteForm && showNoteForm.map((note, index) => {
                    return  <div key={index}>
                              <p>{note.heading}</p>
                              <Button>delete</Button>
                            </div>
                })
            }
            <Button
                onClick={() => setShowNoteForm(true)}
            >create notes</Button>
            {
                showNoteForm && <NoteForm showNoteForm={showNoteForm} setShowNoteForm={setShowNoteForm} />
            }
        </>
    )
}

export default Notes
