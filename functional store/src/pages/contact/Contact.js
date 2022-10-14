import React, {useState} from 'react';
import axios from "axios";
import styled from "styled-components";
import Footer from "../../components/Footer/Footer";
import Nav from "../../components/Nav/Nav";


const Contact = () => {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [account, setAccount] = useState("")
    const TelegramPost = () => {

        axios.post(`https://api.telegram.org/bot5564814493:AAE-fW4LsvsR5azRSdOu24GRpEiuFxt3Em8/sendMessage?chat_id=-1001756381397&text=${encodeURIComponent(
                `
<b>Details:   </b>
           
<b>Name:   ${name}</b>
           
<b>Telefon:   ${phone}</b>
           
<b>Accaunt:   ${account}</b>
           

           `
            )} &parse_mode=html`
        )
        setName("")
        setAccount("")
        setPhone("")
    }


    return (
        <Div>




            <input className="input" type="text" value={name} onChange={(e) => setName(e.target.value)}
                   placeholder="    Name"/>
            <input className="input" type="text" value={phone} onChange={(e) => setPhone(e.target.value)}
                   placeholder="    Number"/>
            <input className="input" type="text" value={account}
                   onChange={(e) => setAccount(e.target.value)}
                   placeholder="    Contact Account"/>
            <button id="enter" className="btn" disabled={!account}
                    onClick={() => TelegramPost()}>SEND
            </button>

        </Div>
    );
};
const Div = styled.div`
  width: 50%;
  margin: auto;

 

  input {
    border-radius: 3px;
    outline: none;
    border: none;
  }

  button {
    width: 200px;
    height: 40px;
    border-radius: 3px;
    background: #C0C0C0;
    color: #343434;
    padding: 10px;
    border: 1px solid #343434;
    outline: none;
  }

  @media (max-width: 1024px) {

    width: 90%;
    margin: auto;
    button{
      width: 99%;
      margin: auto;
    }
  }
`
export default Contact;