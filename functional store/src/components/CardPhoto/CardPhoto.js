import React from 'react';
import styled from "styled-components";

const CardPhoto = ({el}) => {


    return (
        <Wrappers>
           <div className="beauty">
               <img src={el.image} alt=""/>
           </div>
        </Wrappers>
    );


};

const Wrappers = styled.div`
  .beauty{
    //position: relative;

    . {
      .faShoppingCart {
        position: absolute;
        top: 20px;
        left: 20px;
        color: black;
      }

      .faShoppingCart {
        position: absolute;
        top: 20px;
        right: 20px;
        color: red;
      }

    }
  }
`

export default CardPhoto;