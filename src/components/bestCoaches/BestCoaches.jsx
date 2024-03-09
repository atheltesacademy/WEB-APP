import React from 'react'
import './BestCoaches.css'

//bootstrap import
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export const BestCoaches = (props) => {
    return (
        <div className='bestCoaches'>
            <div className='coachName'>{props.name}<br />
                <span className='coachSport'>{props.sports}</span></div>

            <button type='btn' className='button'
            >SEE MORE</button>
        </div>
    )
}
