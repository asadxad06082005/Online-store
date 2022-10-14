import React from 'react';
import "../../index.css"
import bg from "../../image/HomeServices_slice02.jpg"
import bg1 from "../../image/fabric-samples.jpg"
import styled from "styled-components";
;

const About = () => {


    return (
        <Div>
            <div className="header">
                <div className="first">
                    <img src={bg} alt=""/></div>
                <div className="second">
                    <h1>About Your Roseville Store
                    </h1>
                    <p>As Northern California's preferred design center since 2005, Bassett Home Furnishings Roseville
                        makes
                        your custom home design easy. Whether you're looking for a custom ottoman or a complete room
                        makeover, you'll find styles to make your home complete, from bedroom and dining to home storage
                        and
                        entertainment. Explore Bassett's collections of handmade American solid Maple and Oak BenchMade
                        Furniture at your own pace. Find inspiration in the beautiful rooms of custom upholstered
                        furniture
                        in Roseville's locally owned Bassett store. Bassett's friendly design consultants offer expert
                        guidance to bring just the right touch to your home. With over 700 fabrics in our custom design
                        center, you're sure to find something to love. Bassett Home Furnishings Roseville is located in
                        the
                        Roseville Retail Shopping Hub, on Stanford Ranch & Fairway Dr. Visit Bassett Home Furnishings
                        Roseville today to find the right fit for your home.</p>
                </div>
            </div>
            <div className="content">

                <div className="first">
                    <h1>
                        Free Design Services: Your place or ours
                    </h1>
                    <p>Whether you know exactly what you want, or you don’t know where to begin, our talented design
                        consultants make sure you get exactly what you want. Maybe it’s just one piece, or a whole room,
                        either way we’re here to help. And we’ll make sure you enjoy every step along the way. We’ll
                        even come out to your home and help with measurements, space planning, and learning more about
                        your style.

                        Want personal time? Book a virtual or in-store appointment. But you can always just drop in.
                        Lastly you need to decide what material you prefer the most for your furniture. Each material
                        has its own benefits ranging from durability to aesthetic design to portability. For example, if
                        you want a coffee table that is both light and easy to move, acrylic furniture is a fantastic
                        option because it has both of those qualities. Metal is another fantastic material because it
                        will last a long time and there are plenty of design options to choose from because of this
                        materials popularity. With the combination of its sheen and the versatility with which it can be
                        shaped, metal is a great option to look into as well. Your material selection isn't limited to
                        only acrylic furniture and metal, you can find glass, marble, or wood in abundance here at
                        Wayfair. So feel free to mix and match as you wish in order to design your room the way you
                        want</p>

                    <button>
                        <a href="https://community.bassettfurniture.com/s/schedulerch?apptType=nonvirtual&fromurl=stores.bassettfurniture.com%2FCA%2FRoseville%2F572795%2F&storechoice=0Hh3l0000000FPWCA2">BOOK
                            NOW</a>
                    </button>

                </div>
                <div className="second">
                    <img src={bg1} alt=""/>
                </div>
            </div>

        </Div>
    );
};
const Div = styled.div`
  width: 80%;
  margin: auto;

  .header {
    display: flex;
    justify-content: space-between;
  }

  img {
    width: 625px;
  }

  .first {
    width: 45%;


  }

  .second {
    text-align: left;
    padding: 20px;
    width: 45%;


  }

  h1 {
    color: #343434;
    margin-bottom: 20px;
  }

  p {
    font-weight: 1;
    color: #343434;
    font-size: 20px;
  }

  .content {
    margin-top: 100px;
    display: flex;
    justify-content: space-between;
  }

  button {
    margin-top: 20px;
    width: 200px;
    border: none;
    outline: none;
    height: 45px;
    color: #8f9097;
    background: #343434;
    border-radius: 5px;
    padding: 10px;
  }

  a {
    color: #C0C0C0;
  }
  @media (max-width: 1024px ) {
    Div{
     width: 100%; 
      margin: auto;
    }
    .header{
      display: flex;
      flex-direction: column;
    }
    .first ,.second{
      width: 100%;
    }
    img{
      width: 100%;
    }
    .content{
      display: flex;
      flex-direction: column-reverse;
    }
    button{
      width: 100%;
    }
  }
`
export default About;