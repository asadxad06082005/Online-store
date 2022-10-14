import React, {useContext} from 'react';
import ProductsPhoto from "../../components/ProductsPhoto/ProductsPhoto";
import {Context} from "../../Context";
import styled from "styled-components";

const Products = ({el}) => {
    const {array} = useContext(Context)

    return (
        <Wrapper>
            <div className="Nice">
                {
                    array.map(el => {
                        return <ProductsPhoto el={el}/>
                    })
                }
            </div>

        </Wrapper>
    );
};

const Wrapper = styled.div`
  width: 100%;
  margin: auto;
  padding: 15px;

  button {
    margin: 10px 0;
    width: 100px;
    height: 30px;
    border-radius: 5px;
    padding: 5px;
    border: none;
    color: white;
    background: #343434;
    outline: none;


  }

  button:hover {
    background: white;
    color: #343434;
    border: 1px solid black;
    transition: 0.5s;
  }

  .Nice {
    margin: 20px auto;
    width: 80%;
    text-align: center !important;
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    img {
      width: 15vw;
      height: 180px;
      object-fit: cover;
      cursor: pointer;
    }
  }

  @media screen and (max-width: 912px) {
    .Nice {
      width: 99%;
      display: grid;
      grid-gap: 5px 10px;
      grid-template-columns:1fr 1fr;
      margin: auto;

      img {
        width: 45vw;
        height: 25vh;
      }
    }
  }
`

export default Products;