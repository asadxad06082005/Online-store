import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import {useCart} from "react-use-cart";

const ProductsPhoto = ({el}) => {

    const {addItem} = useCart();

    return (
        <Container>
            <div>
                <Link to={`/${el.id}`}>
                    <img className="img-fluid" src={el.image} alt=""/>
                </Link>
                <p>{el.name}</p>
                <p>{el.price}$</p>
                <button onClick={() => addItem(el)} className="btn btn-primary">Add To Card</button>
            </div>
        </Container>
    );
};

const Container = styled.div`
  p {
    color: #343434;
    line-height: 18px;
    font-size: 13px;
    text-align: center;
  }



`

export default ProductsPhoto;