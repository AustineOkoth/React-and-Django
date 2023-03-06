import React from 'react';
import axios from 'axios'
import { useState } from 'react'

function Update(props) {

    let [updateTitle, setUpdateTitle] = useState(null)
    let [updateText, setUpdateText] = useState(null)



    let updateRoot = {
        backgroundColor : "red",
        width : "700px",
        marginLeft : "auto",
        marginRight : "auto",
        marginBottom :"50px",
        textAlign : "center"
    }

    let inputStyling = {
        padding: "20px",
        margin: "15px",
        border: "0px",
        backgroundColor: "whitesmoke",
        width :"500px"
    }


    let updateBtn = {
        backgroundColor: "skyblue",
        color: "white",
        margin: "10px",
        border: "0px",
        padding: "10px"

    }

    let updateContainer = {

        backgroundColor: " white"
    }


    const updateData = async () => {
        try {
            await axios.put(`http://127.0.0.1:8000/post/${props.id}/`, {
                author: 1,
                title: `${updateTitle}`,
                text: `${updateText}`
            });

        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div className="updateRoot" style={updateRoot}>
            <form onSubmit={updateData} style={updateContainer}>
                <h1 style={{textAlign : "center" , color : "red"}}>{props.title}</h1>
                <input
                    style={inputStyling}
                    type="text"
                    //defaultValue={props.title}
                    onChange={(e) => { setUpdateTitle(e.target.value) }}
                    placeholder="Update Title of your Blog"
                    required
                />
                <br />

                <textarea
                    style={inputStyling}
                    type="text"
                    defaultValue={props.text}
                    onChange={(e) => { setUpdateText(e.target.value) }}
                    //placeholder ="Whats on your mind "
                    required
                >

                </textarea>
                <br />
                <input
                    style={inputStyling}
                    placeholder="Published Date"
                    type="date"
                />
                <br />
                <input style={updateBtn} type="submit" value="SUBMIT DATA" />
            </form>
        </div>
    )
}

export default Update;