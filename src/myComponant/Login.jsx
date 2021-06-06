import React from 'react'
import hello from "./images/download.jpg";
export const Login = () => {
    let style1 = {
        display: "flex",
    justifyContent:" center",
    height: "90vh",
    alignItems:" center",
    position: "relative",
    }
    let style2 = {
        display: "flex",
        width: "75vw",
        justifyContent:"space-between",
        alignItems:" center",
}
    let style3 = {
        width: "60%",
}
    let style4 = {
        width: "40%",
}
    let styleImg = {
        width: "100%",
        height:"100%"
}
    return (
        <>
        <div style={style1}>
            <div style={style2}>
            <div className="p-4" style={style3}>
                <div className="border border-primary rounded p-1 px-2">
                    <input type="email" className="form-control m-1" id="floatingInput" placeholder="Email:shunya@expert.com" />
                
                    <input type="password" className="form-control m-1" id="floatingPassword" placeholder="Password:@#$%$#"/>
                </div>
                <button className="btn btn-outline-success mt-3 mx-1">Log In</button>
            </div>
            <div style={style4}>
                    <img style={styleImg} src={hello} alt=""/>
            </div>
            </div>
        </div>    
        </>
    )
}
