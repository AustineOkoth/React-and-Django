import React, { useState } from 'react';
import axios from 'axios';
import { fontFamily } from '@mui/system';

function Create() {

    const [titleValue, setTitleValue] = useState('');
    const [textValue, setTextValue] = useState('');
    const [publishedValue, setPublishedValue] = useState('');

    const inputStyling = {
        margin: '15px',
        backgroundColor: "whitesmoke",
        border: "0px",
        fontSize: "15px",
        fontFamily: " Garamond, serif",
        padding: "15px",
        color: "black",
        fontWeight: "lighter"
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post('http://127.0.0.1:8000/post/', {
                author: 1,
                title: titleValue,
                text: textValue,
                published_date: publishedValue,
            });
            setTitleValue('');
            setTextValue('');
            setPublishedValue('');
        } catch (error) {
            console.error(error);
        }
        alert("SUCCESSFULLY ADDED")
        window.location.replace('http://localhost:3000/blog');
    };

    return (
        <div className="blog" style={{ backgroundColor: "white", border: "20px dotted whitesmoke", width: "70%", marginLeft: "auto", marginRight: "auto" }}>

            <h3 style={{ color: "red", textAlign: "center" ,fontFamily :"fantacy"}}>CREATE NEW POST HERE</h3>
            <form onSubmit={handleSubmit} style={{ width: "fit-content", marginLeft: "auto", marginRight: "auto" }}>
                <b>Title</b> <br /> <input
                    style={inputStyling}
                    value={titleValue}
                    onChange={(e) => setTitleValue(e.target.value)}
                    type="text"
                    placeholder="Title of your Post"
                    required
                />
                <br />
               <b> Whats on your mind</b>  <br />
             <textarea
                    style={inputStyling}
                    defaultValue={textValue}
                    onChange={(e) => setTextValue(e.target.value)}
                    type="text"
                    placeholder="Enter Your text"></textarea>
                <br />
                <b>Published Date</b>  <br /><input
                    style={inputStyling}
                    value={publishedValue}
                    onChange={(e) => setPublishedValue(e.target.value)}
                    type="date"
                />
                <br />
                <input style={{backgroundColor : "red", border : "0px", padding : "10px",margin :"20px", color : "white"}} type="submit" value="SUBMIT BLOG" />
            </form>
        </div>
    );
}

export default Create;
