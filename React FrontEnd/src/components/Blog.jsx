import React from 'react';
import axios from "axios";
import { useState, useEffect } from "react"
import Update from "./Update"
import Delete from './Delete'
//import { borderBottom } from '@mui/system';

function Blog() {
    const [allblogs, setAllBlogs] = useState([]);
    const [deleteId, setDeleteId] = useState(null);
    const [updateId, setUpdateId] = useState(null);
    const [updateTitle, setUpdateTitle] = useState(null);
    const [updateText, setUpdateText] = useState(null);

    const container = {
        backgroundColor: "whitesmoke",
        marginTop: "-8px",
        padding: "10px"
    }

    const blogPost = {
        backgroundColor: "white",
        padding: "10px",
        margin: "10px"

    }
    const getPostsData = () => {
        axios
            .get("http://127.0.0.1:8000/post")
            .then((data) => {
                setAllBlogs(data.data);

                console.log(data.data);
            })
            .catch((error) => console.log(error));
    };
    useEffect(() => {
        getPostsData();
    }, []);


    return (
        <div className='blog-container' style={container}>
            {allblogs.map((blog) => (
                <div id={`userdata-${blog.id}`} data-id={blog.id} key={blog.id} style={blogPost}>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <h3 style={{ color: "red" }}>{blog.title}</h3>
                    </div>
                    <button onClick={() => {
                        setUpdateId(blog.id)
                        setUpdateTitle(blog.title)
                        setUpdateText(blog.text)
                        // window.location.assign("http://127.0.0.1:3000/update")

                    }} style={{ backgroundColor: "skyblue", margin: "10px", border: "0px", padding: "8px", color: "white" }}>UPDATE</button>

                    <button onClick={() => {
                        let setId = blog.id
                        setDeleteId(setId)
                    }} style={{ backgroundColor: "#F08080", margin: "10px", border: "0px", padding: "8px", color: "white" }}>DELETE</button>

                    <h6>Published on : {blog.published_date}</h6>
                    <p style={{ padding: "3px", fontFamily: "serif"}}>{blog.text}</p>

                    <div id='update-container'>
                        {console.log(updateId)}
                        {updateId === blog.id && <Update id={updateId} title={updateTitle} text={updateText} />}
                    </div>
                </div>

            ))}
            {deleteId && <Delete id={deleteId} />}
        </div>
    );
}

export default Blog;
