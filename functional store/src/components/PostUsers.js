import axios from "axios";
import React, {useState} from "react";
import styled from "styled-components";

const PostUsers = () => {

    const qs = require("qs");


    const [image, setImage] = useState("");
    const [name, setName] = useState("");


    const post_Users = () => {

        axios.post(
            "http://127.0.0.1:8000/barber/",

            qs.stringify({
                username: name,
                image: image,
            })
        );
        window.location.reload();
    };


    return (
        <Div>
            <h1>Yangi tovarqoshish:</h1>
            <div className="forms">


                <input placeholder="    Product Name"
                       type="text"
                       value={name}
                       onChange={(e) => setName(e.target.value)}
                />

              
                <input placeholder="    Product URL"
                       type="text"
                       value={image}
                       onChange={(e) => setImage(e.target.value)}
                />


            </div>
            <button onClick={post_Users}>Add</button>
        </Div>
    );
};
const Div = styled.div`
  .forms {
    display: grid;
    grid-template-columns:1fr;

    input {
      border: none;
      border-bottom: 1px solid gray;
      outline: none;
      width: 99%;
      height: 40px;
      margin-top: 20px;
    }
  }
h1{
  color:#343434;
}
  button {
    margin: 10px 0;
    width: 300px;
    height: 50px;
    border-radius: 5px;
    padding: 5px;
    border: none;
    color: white;
    background: #343434;
    outline: 1px solid #343434;
  }
  @media screen and (max-width: 1028px) {
    button {
      margin: 10px 0;
      width: 100%;
      height: 50px;
      border-radius: 5px;
      padding: 5px;
      border: none;
      color: white;
      background: #343434;
      outline: 1px solid grey;
    }
  }

`
export default PostUsers;