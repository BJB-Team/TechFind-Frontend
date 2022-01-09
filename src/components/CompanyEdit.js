import React from 'react'
import { Link } from "react-router-dom"
import { useGlobalState } from '../utils/stateContext'

const SeekerEdit = () => {
    const{ store, dispatch } = useGlobalState()
    const { loggedInUser } = store

    return (
        <div>
            <h2>Profile</h2>
            <h4>Company Name:</h4>
            {/* Edit company name here */}

            <h4>Company Username:</h4>
            {/* Edit company name here */}

            <h4>Company E-Mail:</h4>
            {/* Edit company name here */}

            <h4>Company Phone Number:</h4>
            {/* Edit company name here */}

            <h4>Company Website:</h4>
            {/* Edit company name here */}

            <h4>About the Company:</h4>
            {/* Edit company name here */}

            <Link to = "/"><button>Save</button></Link>

        </div>
    )
}

export default SeekerEdit