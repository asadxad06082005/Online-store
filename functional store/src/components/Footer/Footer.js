import React from 'react';
import styled from 'styled-components'
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Footer = () => {
    return (
        <Div>
            <div className="first__main">
                <a href="#">Back To Top</a>

            </div>

            <div className="second__main">
                <ul>
                    <li>
                        <h1>Get to Know Us</h1>
                    </li>
                    <li><a href="">Careers</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">About Amazon</a></li>
                    <li><a href="">Investor Relations</a></li>
                    <li><a href="">Amazon Science</a></li>
                </ul>
                <ul>
                    <li>
                        <h1>Make Money with Us</h1>
                    </li>
                    <li><a href="">Sell products on Amazon</a></li>
                    <li><a href="">Sell on Amazon Business</a></li>
                    <li><a href="">Sell apps on Amazon</a></li>
                    <li><a href="">Become an Affiliate</a></li>
                    <li><a href="">Advertise Your Products</a></li>
                    <li><a href="">Self-Publish with Us</a></li>
                    <li><a href="">Host an Amazon Hub</a></li>
                    <li><a href="">›See More Make Money with Us</a></li>
                </ul>
                <ul>
                    <li>
                        <h1>Amazon Payment Products</h1>
                    </li>
                    <li><a href="">Amazon Business Card</a></li>
                    <li><a href="">Shop with Points</a></li>
                    <li><a href="">Reload Your Balance</a></li>
                    <li><a href="">Amazon Currency Converter</a></li>
                </ul>
                <ul>
                    <li>
                        <h1>Let Us Help You</h1>
                    </li>
                    <li><a href="">Amazon and COVID-19</a></li>
                    <li><a href="">Your Account</a></li>
                    <li><a href="">Your Orders</a></li>
                    <li><a href="">Shipping Rates & Policies</a></li>
                    <li><a href="">Returns & Replacements</a></li>
                    <li><a href="">Manage Your Content and Devices</a></li>
                    <li><a href="">Amazon Assistant</a></li>
                    <li><a href="">Help</a></li>
                </ul>
            </div>

        </Div>
    );
};
const Div = styled.div`
  width: 100%;
  background: #232F3E;
  .first__main{
    padding: 10px;
    width: 100%;
    height: 40px;
    margin: auto;
    text-align: center;
    background: #4C5981;
    
    a{
      color: white;
    }
    a:hover{
      color: #8f9097;
    }
  }
  .second__main{
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: space-between;
  }
  ul{
    
    display: flex;
    flex-direction: column;
    
    li{
      margin: 5px 0;
      
      h1{
        font-weight: 700;
        color: white;  
      }
      a{
        color:#8f9097 ;
      }
    }
  }
`
export default Footer;