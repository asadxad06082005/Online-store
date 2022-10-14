import React, {useContext} from 'react';
import {Link, useParams} from "react-router-dom";
import {Context} from "./Context";
import styled from "styled-components";
import Footer from "./components/Footer/Footer";

const FileInfo = () => {


    const {array} = useContext(Context)
    const {id} = useParams()
    const singlePhoto = array.find(el => {
        return el.id == id
    })

    return (

        <FileInfoStyle>

            <div className="main">


                <div key={id} className="shift">
                    <img src={singlePhoto.image} alt=""/>
                    <p>a{singlePhoto.username}</p>
                    <Link to="/card">
                        <button>Card</button>
                    </Link>
                </div>
            </div>

          
            <Footer/>
        </FileInfoStyle>
    );
};

const FileInfoStyle = styled.div`
  width: 90%;
  margin: auto;

  .main {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    grid-gap: 15px;
    margin: auto;
    max-width: 75%;
    padding: 25px;


    .shift {
      color: black;

      img {
        width: 350px;
        height: 350px;
        border-radius: 10px;
      }
    }
  }
`

export default FileInfo;