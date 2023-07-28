import { Button } from 'antd'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NoteForm from '../Components/NoteForm'

const Notes = () => {

    const [showNoteForm, setShowNoteForm] = useState()
    const [userId, setUserId] = useState()
    const navigate = useNavigate()
    
    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        // Check if the user is authenticated and retrieve the user ID from localStorage
        const token = localStorage.getItem('token');
        const storedUserId = localStorage.getItem('user_id');

        if(!token && !storedUserId) {
            return navigate('/login'); 
        }

        // Set the userId state variable with the retrieved user ID
        setUserId(storedUserId);  
        // fetch("http://localhost:8000/notes", {
        //     method: "GET",
        //     headers: {
        //         'Authorization': `Bearer ${token}`
        //     }
        // })
        // .then((res) => res.json())
        // .then((res) => setShowNoteForm(res))
        // .catch((err) => console.log(err))
    }


    return (
        <>
            <h1>Notes</h1>
            {/* <div>
                {
                    showNoteForm && showNoteForm.map((note, index) => {
                        return  (
                                    <div key={index}>
                                        <p>{note.heading}</p>
                                        <Button>delete</Button>
                                    </div>
                                )
                    })
                }
            </div> */}
            <Button
                onClick={() => setShowNoteForm(true)}
            > create notes </Button>
            {
                showNoteForm && (
                    <NoteForm 
                        showNoteForm={true} 
                        setShowNoteForm={setShowNoteForm} 
                        userId={userId}
                        token
                    />
                )
            }
        </>
    )
}

export default Notes
