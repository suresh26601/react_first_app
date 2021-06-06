import React from 'react'

export default function Footer() {
    let style={
        position: "fixed",
    width: "100%",
    borderTop:" 3px solid darkslategrey",
    bottom: "0px",
    borderRadius:" 73px 73px 0px 0px",
        
    }
    return (
        <div className="bg-dark text-center text-white p-2" style={style}>
            <p>&copy;CopyRight Content.</p>
        </div>
    )
}
