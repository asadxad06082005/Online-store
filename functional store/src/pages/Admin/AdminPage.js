import React, {useEffect} from 'react';
import Users from "../../components/Users";
import PostUsers from "../../components/PostUsers";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";


const AdminPage = () => {
    const navigate = useNavigate()

    useEffect(() => {
        if (!localStorage.getItem("tokenAdmin")) {
            navigate("/adminpassword")
        }
    }, [])

    return (
        <Div>


            <div className="admin__main">
                <PostUsers/>
                <Users/>
            </div>


        </Div>
    );
};
const Div = styled.div`
  width: 90%;
  margin: auto;

  .admin__main {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  @media screen and (max-width: 712px) {
    .admin__main {
      display: flex;
      flex-direction: column;
    }
  }
`
export default AdminPage;