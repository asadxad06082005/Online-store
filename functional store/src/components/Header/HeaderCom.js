import React from 'react';
import styled from 'styled-components'
import MbImg from "../../image/G13-Bedroom-Furniture-1920px-x-850px-2.jpg"
import Contact from "../../pages/contact/Contact";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

const HeaderCom = () => {
    return (
        <HeaderStyle>
            <div className="good">

            </div>
            <div className="about">
                <div>
                    <h1>Furniture</h1>

                    <p>
                        When it comes to furnishing your home, finding the perfect furniture that is both stylish and
                        functional is one of the best parts about owning a home. You can let your inner interior
                        designer flourish sorting through all the decoration options, deciding on how to blend colors,
                        patterns, and materials. With such variety in home furniture, it's important to know the
                        differences between these styles and materials so you can find what works best for you. For
                        instance, will Victorian furniture fit in with your design if you want to create a vibrant room
                        with bright colors and contrasting highlights? Or does it make more sense to use a brighter
                        theme and utilize coastal furniture to accomplish your goals? We'll try to go over all these
                        details here so you can get on your way to finding the best home furniture for you.

                        living room set
                        Furniture Styles


                    </p>
                    <p> There are many styles that you can use and combine to create the aesthetic look that you want.
                        From coastal to modern to Victorian home furniture styles can literally come in any shape or
                        color. So how do you decide what style works best for you? It comes down to how you want to
                        present your home. If you live near a beach and want to have a coastal style you can blend your
                        coastal furniture, which are generally wickers and bright colored couches with light blue walls
                        and yellow highlights.

                        Or if you want a more traditional look, Victorian furniture might fit your style more
                        effectively. This furniture type is usually made from dark, solid wood and features classic
                        designs. You can blend Victorian furniture with darker walls and different colored finishes of
                        wood to have a complete home design. Finally, modern furniture is the most recent style. Modern
                        furniture features simple, clean lines and is most commonly finished in black or white to create
                        a minimalist look.</p>
                    <p>
                        Lastly you need to decide what material you prefer the most for your furniture. Each material
                        has its own benefits ranging from durability to aesthetic design to portability. For example, if
                        you want a coffee table that is both light and easy to move, acrylic furniture is a fantastic
                        option because it has both of those qualities. Metal is another fantastic material because it
                        will last a long time and there are plenty of design options to choose from because of this
                        materials popularity. With the combination of its sheen and the versatility with which it can be
                        shaped, metal is a great option to look into as well. Your material selection isn't limited to
                        only acrylic furniture and metal, you can find glass, marble, or wood in abundance here at
                        Wayfair. So feel free to mix and match as you wish in order to design your room the way you
                        want.
                    </p>
                </div>

            </div>
            <div className="main__">
                <h1>Contacts</h1>
                <div className="third">

                    <div className='small'>
                        <ul>
                            <li className="li">Export Manager: <p>Mr. Taner GALİP – export@chairium.com</p>
                            </li>
                            <li className="li">Mobile Phone : <p><a
                                href="https://api.whatsapp.com/send?phone=905421175221">+90
                                542 117 52 21</a> (Whatsapp, Viber Available)</p></li>
                            <li className="li">Company e-Mail : <a
                                href="export@chairium.com">export@chairium.com</a></li>

                        </ul>
                    </div>
                    <Contact/>
                </div>

            </div>


        </HeaderStyle>
    );
};

const HeaderStyle = styled.div`
  width: 100%;
  text-align: center;
  @media screen and (max-width: 768px) {
    .good {
      display: none;
    }
  }

  .about {
    width: 100%;
    color: #343434;
    padding: 30px 0;

    div {
      width: 80%;
      margin: auto;
      @media screen and (max-width: 912px) {
        width: 90%;
        margin: auto;
      }
    }

    p {
      color: #343434;
      text-align: left;
      font-size: 16px;
      line-height: 24px;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0;
      margin-inline-end: 0;
    }

    h1 {
      margin: 0 0 30px;
      text-align: left;
      font-weight: 300;
      color: #343434;
      line-height: 24px;
    }

  }

  .good {
    height: 500px;
    background: url("${MbImg}") no-repeat fixed center/cover;

    .bad {
      position: relative;
      top: 35%;
      left: 20%;
    }

    h1 {
      color: white;
      font-size: 40px;
      font-weight: 100
    }


    div {
      position: relative;
      top: 1%;
      left: 40%;
      text-align: left;
      width: 500px;
      background: linear-gradient(-45deg, transparent 40px, rgba(0, 76, 84, .8) 0);
      line-height: 40px;
      color: #fff !important;
      text-transform: uppercase;
      padding: 10px 50px 10px 20px;
      @media screen and (max-width: 768px) {
        display: none;
      }
    }

  }

  .main__ {
    width: 80%;
    margin: auto;
    text-align: left;
    @media screen and (max-width: 912px) {
      width: 90%;
      margin: auto;
    }

    h1 {
      color: #343434;
      font-weight: 100;
      margin-bottom: 20px;
    }
  }

}

.third {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto 100px auto;
  @media screen and (max-width: 912px) {
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 50px auto;
    
  }

  ul {
    display: flex;
    flex-direction: column;

    .li {
      margin: 22px 0 22px 0;
      display: flex;

      p {

        font-weight: 300;
        font-size: 16px;
        color: #343434;
      }

      a {
        color: dimgray;
      }
    }
  }
}



`


export default HeaderCom;







