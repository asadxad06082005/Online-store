import React, {useContext} from 'react';
import {Context} from "../../Context";
import styled from 'styled-components'
import HeaderCom from "../Header/HeaderCom";
import {Link} from "react-router-dom";

const Home = () => {
    const {array} = useContext(Context)

    return (

        <div>

            <Wrapper>
                <HeaderCom/>
                <div className="main">
                    <div className="container1">
                        <div className="h11">
                            <h1>Products</h1>
                        </div>
                        <div className="Nice">
                            {
                                array.slice(1, 17).map(el => {
                                    return (
                                        <Link to="/products">
                                            <div className="return">
                                                <p>{el.name}</p>
                                                <img src={el.image} alt=""/>
                                            </div>
                                        </Link>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </Wrapper>

        </div>

    )

};


const Wrapper = styled.div`
  width: 100%;
  margin: auto;

  .main {
    width: 100%;
    background: #8f9097;


    .container1 {
      margin: auto;
      padding: 20px 10px 20px 10px;
      background: #8f9097;

      .Nice {
        width: 80%;
        margin: 10px auto;
        display: grid;
        grid-gap: 0 5px;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

      }

      //@media screen and (max-width: 412px) {
      //  .Nice {
      //    width: 99%;
      //    display: grid;
      //    grid-gap: 5px 10px;
      //    grid-template-columns:1fr 1fr;
      //    margin: auto;
      //
      //    img {
      //      width: 45vw;
      //      height: 20vh;
      //    }
      //  }
      //}
      @media screen and (min-width: 412px) and (max-width: 820px) {
        .Nice {
          width: 60%;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));

          p {
            color: #343434;
            text-align: center;
          }

          img {
            width: 100%;
          }
        }
      }

      img {
        height: 180px;
        cursor: pointer;
        min-width: 150px;
        max-width: 300px;
        object-fit: cover;
      }

    }
  }

  h1 {
    margin: 0 0 30px;
    text-align: left;
    font-weight: 300;
    color: #343434;
    line-height: 24px;
  }

  .h11 {
    @media screen and (max-width: 912px) {
      width: 90%;
      margin: auto;
    }
    width: 81%;
    margin: auto;
  }

  .return {
    width: 300px;
    display: flex;
    flex-direction: column-reverse;
    text-align: center;
  }
`
export default Home;