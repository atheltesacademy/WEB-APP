import React from 'react'
import './BestCoaches.css'

//bootstrap import
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export const BestCoaches = (props) => {
    return (
        <div className='bestCoaches' style={{
            padding: '40px 240px 40px',
            borderRadius: 30
        }}>
            <div style={{
                color: '#FFFFFF',
                fontWeight: "500",
                fontSize: "25px",
                textAlign: "center"
            }}>{props.name}<br />
                <span style={{
                    color: '#FFFFFF',
                    fontWeight: "100",
                    fontSize: "15px",
                    textAlign: "center"
                }}>{props.sports}</span></div>

            <button type='btn'
                style={{
                    borderRadius: 20,
                    backgroundColor: "#EFCC00",
                    borderColor: "transparent",
                    color: "white",
                    fontSize: '14px',
                    padding: '5px 25px 5px',
                    textAlign: 'center',
                    marginTop: '10px'
                }}
            >SEE MORE</button>
        </div>
    )
}
