import React from 'react'
import { useLocation, useHistory } from 'react-router-dom'

function About() {
    const location = useLocation()
    const history = useHistory()
    console.log('location', location)

    function goBackhandle() {
        history.goBack()
    }
    
    return (
        <>
            <div>About</div>
            <div>Location = {location.pathname}</div>
            <div>From = {location.state.from}</div>
            <button onClick={goBackhandle}>Go Back</button>
        </>
    )
}

export default About