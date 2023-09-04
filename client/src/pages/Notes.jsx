import { Button, Input, Space, Table, message } from 'antd'
import { SearchOutlined, DownloadOutlined } from "@ant-design/icons";
import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import Highlighter from "react-highlight-words";
import NoteForm from '../Components/NoteForm'
import axios from 'axios'

const Notes = () => {

    const [showNoteForm, setShowNoteForm] = useState()
    const [notes, setNotes] = useState([])
    // const [id, setId] = useState()
    const [userId, setUserId] = useState()
    const navigate = useNavigate()
    const searchInput = useRef(null);
    const [searchText, setSearchText] = useState("");
    const [searchedColumn, setSearchedColumn] = useState("");
    const [unfilteredData, setUnfilteredData] = useState([]); //unfilteredData is the data that we are going to use for filtering

    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };

    const handleReset = (clearFilters) => {
        console.log("clearFilters", clearFilters);
        console.log("unfilteredData", unfilteredData);
        clearFilters();
        setSearchText("");
        setSearchedColumn(unfilteredData);
    };

    const getNotesData = async () => {
      // debugger;
      // Check if the user is authenticated and retrieve the user ID from localStorage
      const token = localStorage.getItem('token');
      // const storedUserId = localStorage.getItem('userId');

      if(!token) {
        return navigate('/login'); 
      }

      // setUserId(storedUserId);   

      try {
          const response = await axios.get("https://notes-taking-app-mern.vercel.app/getuser-notes", {
              headers: {
                  Authorization: `Bearer ${token}`,
              },
          }) 
          console.log("API Response:", response.data.data);
          setNotes(response.data.data)
          if(response.data.success) {
              setNotes(response.data)
              console.log("responsedatadata", response.data)
          } else {
              message.error(response.data.message)
          }
      } catch (error) {
          console.log(error)
      }
    
    }

    console.log("notes", notes)

    useEffect(() => {
        getNotesData()
    }, [])

    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({
          setSelectedKeys,
          selectedKeys,
          confirm,
          clearFilters,
          close,
        }) => (
          <div
            style={{
              padding: 8,
            }}
            onKeyDown={(e) => e.stopPropagation()}
          >
            <Input
              ref={searchInput}
              placeholder={`Search ${dataIndex}`}
              value={selectedKeys[0]}
              onChange={(e) =>
                setSelectedKeys(e.target.value ? [e.target.value] : [])
              }
              onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
              style={{
                marginBottom: 8,
                display: "block",
              }}
            />
            <Space>
              <Button
                type="primary"
                onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                icon={<SearchOutlined />}
                size="small"
                style={{
                  width: 90,
                }}
              >
                Search
              </Button>
              <Button
                type="primary"
                onClick={() => clearFilters && handleReset(clearFilters)}
                size="small"
                style={{
                  width: 90,
                }}
              >
                Reset
              </Button>
              <Button
                type="link"
                size="small"
                onClick={() => {
                  confirm({
                    closeDropdown: false,
                  });
                  setSearchText(selectedKeys[0]);
                  setSearchedColumn(dataIndex);
                }}
              >
                Filter
              </Button>
              <Button
                type="link"
                size="small"
                onClick={() => {
                  close();
                }}
              >
                close
              </Button>
            </Space>
          </div>
        ),
        filterIcon: (filtered) => (
          <SearchOutlined
            style={{
              color: filtered ? "#1677ff" : undefined,
            }}
          />
        ),
        onFilter: (value, record) =>
          record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
          if (visible) {
            setTimeout(() => searchInput.current?.select(), 100);
          }
        },
        render: (text) =>
          searchedColumn === dataIndex ? (
            <h1
              highlightStyle={{
                backgroundColor: "#ffc069",
                padding: 0,
              }}
              searchWords={[searchText]}
              autoEscape
              textToHighlight={text ? text.toString() : ""}
            />
          ) : (
            text
          ),
      });

    const columns = [
        {
            title: "Heading",
            dataIndex: "heading",
            key: "heading",
            ...getColumnSearchProps("heading")
        },
        {
            title: "note",
            dataIndex: "note",
            key: "note" ,
            ...getColumnSearchProps("note")
        },
        {
            title: "tag",
            dataIndex: "tag",
            key: "tag",
            ...getColumnSearchProps("tag")
        },
    ]

    const handleLogout = () => {
      localStorage.removeItem('token'); // Remove token from local storage
      // Redirect to login page
      navigate('/login');
          
    }

    return (
        <>
            <h1>Notes</h1>
            <Button
                onClick={() => setShowNoteForm(true)}
                type="primary"
            > create notes 
            </Button>
            <Button style={{ marginLeft: '2%'}} type="primary" onClick={handleLogout}> Logout </Button>
            <Table 
                columns={columns}
                dataSource={notes}
            />

            {
              showNoteForm && (
                <NoteForm 
                  // id={id}
                  showNoteForm={true} 
                  setShowNoteForm={setShowNoteForm} 
                  userId={userId}
                />
              )
            }
        </>
    )
}

export default Notes
