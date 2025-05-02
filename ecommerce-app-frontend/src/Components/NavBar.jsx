import "../CSS/NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar(){
    
    return (
        <>
            <div className="navbar-principal-container">
                <div className="logo-container">
                    <Link className="temp-logo">
                        {/* <img src="#" alt="store logo" className="logo-img"></img> */}
                        <h1>E-COM</h1>
                    </Link>
                </div>
                <nav className="links-container">
                    <Link to={"/"}><p className="navbar-link"> HOME </p></Link>
                    <Link to={"/products"}><p className="navbar-link"> PRODUCTS </p></Link>
                    <Link to={"/promotions"}><p className="navbar-link"> PROMOS </p></Link>
                    <Link to={"/cart"}><p className="navbar-link"> CART </p></Link>
                    <Link to={"/signup"}><p className="navbar-link"> SIGN UP </p></Link>
                </nav>
            </div>
        </>
    );
}