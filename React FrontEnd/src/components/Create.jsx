import React, { useState } from 'react';
import axios from 'axios';

function Create() {

    const [titleValue, setTitleValue] = useState('');
    const [textValue, setTextValue] = useState('');
    const [publishedValue, setPublishedValue] = useState('');

    const inputStyling = {
        width: '250px',
        height: '70px',
        margin: '15px',
        backgroundColor : "white",
        border : "0px", 
        fontSize : "20px",
        fontFamily : " Garamond, serif",
        padding : "15px"
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
        <div className="blog" style={{backgroundColor : "whitesmoke", width : "80%", marginLeft : "auto", marginRight : "auto"}}>

            <h1 style={{color : "red"}}>CREATE NEW POST HERE</h1>
            <form onSubmit={handleSubmit}>
                <input
                    style={inputStyling}
                    value={titleValue}
                    onChange={(e) => setTitleValue(e.target.value)}
                    type="text"
                    placeholder="Title of your Post"
                    required
                />
                <br />

                <textarea
                    style={inputStyling}
                    defaultValue={textValue}
                    onChange={(e) => setTextValue(e.target.value)}
                    type="text"
                    placeholder="Enter Your text"></textarea>
                <br />
                <input
                    style={inputStyling}
                    value={publishedValue}
                    onChange={(e) => setPublishedValue(e.target.value)}
                    type="date"
                />
                <br />
                <input style={inputStyling} type="submit" value="SUBMIT DATA" />
            </form>
        </div>
    );
}

export default Create;
