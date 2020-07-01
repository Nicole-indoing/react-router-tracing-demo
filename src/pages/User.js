import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const { firstname, lastname } = useParams()
    return (
        <div>User {firstname} {lastname}</div>
    )
}

export default User