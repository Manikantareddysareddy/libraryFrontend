import React from 'react'
import {Link} from 'react-router-dom'
import './index.css'

export const Home = () => {
  return (
    <div className='main-container'>
        <div className='info-container'>
            <h1> Smart Library Management Assistant</h1>
            <p>Smart Library Manager is a comprehensive application designed to simplify library management tasks. 
                It allows users to efficiently manage a collection of books by providing features to add new books, edit existing book details, 
                and delete outdated or irrelevant entries. Each book in the library comes with detailed 
                information that users can easily access. Additionally, the app includes a powerful search functionality, 
                enabling users to quickly find books by their titles.</p>
                <Link to='/books'>
                <button className='visit-btn'>Visit Now</button>
                </Link>
            
        </div>
        <img src="https://res.cloudinary.com/dg3csk2jz/image/upload/v1734184788/pexels-pixabay-159711_fjyyll.jpg" alt="library-image" className='home-image'/>
    </div>
  )
}
