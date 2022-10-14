import React, {useEffect, useState} from 'react';
import axios from "axios"
import styled from "styled-components";
import "../index.css"

const Users = () => {
    const [data, setData] = useState([])
    const [userNameEdit, setUserNameEdit] = useState("")
    const [userImgEdit, setUserImgEdit] = useState("")
    const getBarber = () => {
        axios
            .get("http://127.0.0.1:8000/barber/")
            .then((res) => setData(res.data))
            .catch((err) => {
                console.log(err)
            })
    }
    useEffect(() => {
        getBarber()
    }, [])

    const AdminDelete = async (id) => {
        try {
            const res = await axios
                .delete(`http://127.0.0.1:8000/barber/${id}`)
                .then(() => window.location.reload());
            console.log("Data deleted");
        } catch (error) {
            alert(error);
        }
    };

    const EditPost = async (id) => {
        try {
            const res = await axios.put(`http://127.0.0.1:8000/barber/${id}/`, {
                username: userNameEdit,
                image: userImgEdit,
            })
                .then(() => window.location.reload());
            console.log("Data ");
        } catch (error) {
            alert(error)
        }
    }
    return (
        <div>
            <h1 className="h1">Mavjud Tovarni Ochirish Yoki Ozgartirish:</h1>
            <div className="forms">
                <input className="input" placeholder="  name" type="text" value={userNameEdit}
                       onChange={(e) => setUserNameEdit(e.target.value)}/>
                <input className="input" placeholder="  img" type="text" value={userImgEdit}
                       onChange={(e) => setUserImgEdit(e.target.value)}/>
                <h1 className="h1">Mavjud Tovarlar:</h1>
            </div>
            <div className="Grid card-Img">

                {data.map((el) => {
                    return (
                        <Div key={el.id}>
                            <div className="div">
                                <p>{el.username}</p>
                                <div>
                                    <img className="img-fluid" src={el.image} alt=""/>
                                    <div className="btns">
                                        <button className="danger" onClick={() => AdminDelete(el.id)}>Delete
                                        </button>
                                        <button disabled={!userImgEdit} className="success"
                                                onClick={() => EditPost(el.id)}>Put
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Div>
                    )
                })}
            </div>

        </div>
    )

}

const Div = styled.div`
  width: 90%;
  margin: auto;

  .div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 50px auto;
  }

  img {
    width: 300px;
    min-width: 150px;
  }

  .btns {
    width: 300px;
    display: flex;
    justify-content: space-between;

    .danger {
      background: red;
      width: 100px;
      border: 1px solid red;
      outline: none;
      border-radius: 5px;
      padding: 10px;
      color: white;
    }

    .success {
      background: #343434;
      width: 100px;
      border: 1px solid #343434;
      outline: none;
      border-radius: 5px;
      padding: 10px;
      color: white;
    }
  }



`
export default Users;
