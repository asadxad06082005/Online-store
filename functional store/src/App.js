import React, {useEffect, useState} from "react";
import "./index.css"
import HomePhoto from "./components/PhotoCom/HomePhoto";
import {Routes, Route} from "react-router-dom";
// import Card from "./pages/Card/Card";
import About from "./pages/About/About";
import Products from "./pages/Products/Products";
import Card from "./pages/Card/Card"
import AdminPage from "./pages/Admin/AdminPage";
import Password from "./pages/Password/Password";
import firebase from "./firebase/config";
import Contact from "./pages/contact/Contact";
import FileInfo from "./fileInfo";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";

function App() {
    const [users, setUsers] = useState(null)

    useEffect(() => {
        firebase.auth().onAuthStateChanged(users => {
            setUsers(users)
        })
    })


    return (
        <div className="App">
            <Nav/>
            <Routes>

                <Route path="/" element={ <HomePhoto />}/>

                <Route path="/about" element={<About/>}/>
                <Route path="/contacts" element={<Contact/>}/>
                <Route path="/admin" element={<AdminPage/>}/>
                <Route path="/adminpassword" element={<Password/>}/>
                <Route path="/card" element={<Card/>}/>
                <Route path="/products" element={<Products/>}/>
                <Route path="/card" element={<Card/>}/>
                <Route path="/:id" element={<FileInfo/>}/>
                {/*<Route path="/:id/:id" element={<FileCategory/>}/>*/}
            </Routes>
<Footer/>
        </div>
    );
}


export default App;

