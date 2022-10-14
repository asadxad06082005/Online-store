import React, {useState} from "react"
import "./Sty.css"
import {Link} from "react-router-dom";
import {faAlignJustify, faAlignRight, faShoppingCart,faCouch} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {signInWithGoogle} from "../../firebase/config";

const Nav = () => {
    const [Mobile, setMobile] = useState(false)
    return (<>
        <header>
            <div className='container'>
                <nav>


                    <Link to="/">
                        <FontAwesomeIcon className="logo" icon={faCouch}/>
                    </Link>
                    <ul className={Mobile ? "navMenu-list" : "flexSB"} onClick={() => setMobile(false)}>

                        <li>
                            <Link to='/about'><p>About</p></Link>
                        </li>
                        <li>
                            <Link to='/contacts'><p>Contact </p></Link>
                        </li>
                        <li>
                            <Link to='/products'><p>All Products</p></Link>
                        </li>
                    </ul>
                    <div className="dis">
                        <button onClick={signInWithGoogle} className="success">
                            Sign Up

                        </button>
                        <Link to="/card">
                            <FontAwesomeIcon className="cart" icon={faShoppingCart}/>
                        </Link>
                    </div>


                    <button className='toggle' onClick={() => setMobile(!Mobile)}>
                        {Mobile ? <FontAwesomeIcon icon={faAlignRight}/> : <FontAwesomeIcon icon={faAlignJustify}/>}
                    </button>
                </nav>

            </div>
        </header>
    </>)
}

export default Nav
