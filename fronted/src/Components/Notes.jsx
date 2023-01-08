import React, { useEffect, useState } from 'react'

const Notes = () => {

    const [notes, setNotes] = useState([])
    
    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        fetch("http://localhost:8080/notes", {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then((res) => res.json())
        .then((res) => setNotes(res))
        .catch((err) => console.log(err))
    }

    if(!localStorage.getItem("Notes_app_token")) {
        return <h1>please login again</h1>
    }
    

    return (
        <div>
            <h1>Notes</h1>
            {
                notes && notes.map((note, index) => {
                    return  <div key={index}>
                              <p>{note.Heading}</p>
                              <button>delete</button>
                            </div>
                })
            }
        </div>
    )
}

export default Notes
