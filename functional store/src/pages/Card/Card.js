import React, {useState, useEffect, useRef} from 'react';
import axios from "axios";
import {useCart} from 'react-use-cart';
import styled from "styled-components";


const Card = ({el}) => {

    const [isOpen, setOpen] = useState(false)
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [account, setAccount] = useState("")
    const {items, isEmpty, emptyCart, removeItem} = useCart();
    // if (isEmpty) return <p>Sizning Korzinangiz Bosh</p>

    const TelegramPost = () => {
        if (name.length || phone.length || account.length) {
            axios.post(`https://api.telegram.org/bot5564814493:AAE-fW4LsvsR5azRSdOu24GRpEiuFxt3Em8/sendMessage?chat_id=-1001756381397&text=${encodeURIComponent(
                    `
<b>Details:   </b>
           
<b>Isim:   ${name}</b>
           
<b>Telefon:   ${phone}</b>
           
<b>Accaunt:   ${account}</b>
           
<b>product:${items.map((item) => {
                        return `
<b>${item.name}</b>
<b>${item.price}$</b>
                      `
                    })}</b>
           `
                )} &parse_mode=html`
            )
            setName("")
            setAccount("")
            setPhone("")
        }


    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        const onKeyDown = e => {
            if (e.keyCode === 13) {
                TelegramPost()

            }
        };
        document.addEventListener('keydown', onKeyDown);
        return () => {
            document.removeEventListener('keydown', onKeyDown);
        };
    }, []);


    return (
        <Div>


            <div>
                <ul>
                    <p>Remove All Items</p>
                    <li>
                        <button className="danger" onClick={emptyCart}>Remove</button>
                    </li>
                </ul>
            </div>

            <form>
                <input className="input" type="text" value={name} onChange={(e) => setName(e.target.value)}
                       placeholder="    Name"/>
                <input className="input" type="text" value={phone} onChange={(e) => setPhone(e.target.value)}
                       placeholder="    Number"/>
                <input className="input" type="text" value={account}
                       onChange={(e) => setAccount(e.target.value)}
                       placeholder="    Contact Account"/>
                <button id="enter" className="btn" disabled={!account}
                        onClick={() => TelegramPost()}>post
                </button>
            </form>
            <div className="first">


                {items.map((item) => {
                    return (
                        <div className="container">
                            <div className="main">
                                <div>
                                    <img src={item.image} alt=""/>
                                    <div className="second">
                                        <h5 key={item.name}>{item.name}</h5>
                                        <button className="danger" onClick={() => removeItem(item.id)}>
                                           Remove
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    )
                })}
            </div>
        </Div>
    );
};
const Div = styled.div`
  width: 90%;
  margin: auto;

  .btn {
    margin: 10px 0;
    width: 300px;
    height: 50px;
    border-radius: 5px;
    padding: 5px;
    border: none;
    color: white;
    background: #343434;
    outline: 1px solid grey;
  }

  @media screen and (max-width: 1028px) {
    .btn {
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

  li {
    list-style: none;
  }

  .container {
    margin: auto;
    padding: 20px 10px 20px 10px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }


  .main {
    width: 90%;
    margin: 10px auto;
    display: flex;
    flex-direction: column;
  }

  .first {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }

  img {
    width: 19vw;
    height: 180px;
    cursor: pointer;
    min-width: 150px;
    object-fit: cover;
    max-width: 300px;

  }

  .second {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .third {
    display: flex;
    flex-direction: column;
  }

  @media screen and (max-width: 412px) {
    .first {
      width: 99%;
      display: grid;
      grid-gap: 5px 10px;
      grid-template-columns:1fr 1fr;
      margin: auto;
    }
  }
  @media screen and (min-width: 412px) and (max-width: 912px) {
    .first {
      width: 100%;
      display: grid;

      grid-template-columns:1fr 1fr;
      margin: auto;

      img {
        width: 200px;
        height: 150px;

      }
    }


  }
`
export default Card;