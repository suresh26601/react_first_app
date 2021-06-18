import React from 'react'
import hello from "./images/download.jpg";
import { Link } from "react-router-dom";
export const Login = () => {
    let style1 = {
        display: "flex",
        justifyContent: " center",
        height: "90vh",
        alignItems: " center",
        position: "relative",
    }
    let style2 = {
        display: "flex",
        width: "75vw",
        justifyContent: "space-between",
        alignItems: " center",
    }
    let style3 = {
        width: "60%",
    }
    let style4 = {
        width: "40%",
    }
    let styleImg = {
        width: "100%",
        height: "100%"
    }
    return (
        <>
            <div style={style1}>
                <div style={style2}>
                    <div className="p-4 border border-primary rounded " style={style3}>
                        <div>
                            <input type="email" className="form-control my-2" id="floatingInput" placeholder="Email:shunya@expert.com" />

                            <input type="password" className="form-control my-2" id="floatingPassword" placeholder="Password:@#$%$#" />
                        </div>
                        <Link className="nav-link active btn btn-outline-success my-2 mx-1" aria-current="page" to="/home">Log In</Link>
                        <p className="text-center">OR</p>
                        <Link className="nav-link active btn btn-outline-success my-0 mx-1" aria-current="page" to="/">Sign UP</Link>
                    </div>
                    <div style={style4}>
                        <img style={styleImg} src={hello} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
