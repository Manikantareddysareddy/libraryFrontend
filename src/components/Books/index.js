import React, { useState,useEffect } from 'react'
import { MdDelete } from "react-icons/md";
import { MdEditSquare } from "react-icons/md";
import { v4 as uuidv4 } from 'uuid';
import './index.css'
import { FaXmark } from "react-icons/fa6";
import Popup from 'reactjs-popup'
import ReactSlick from '../bookDetails'

export const Books = () => {
  const [searchInput,setInput]=useState("")
  const [bookTitle,setBookTitle]=useState("")
  const [bookAuthor,setBookAuthor]=useState("")
  const [publishedDate,setBookDate]=useState("")
  const [bookGenre,setBookGenre]=useState("Adventure")
  const [pages,setBookPages]=useState("")
  const [booksList,setBooks]=useState([])

  const handleInputChange=(e)=>{
    setInput(e.target.value)
  }

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('http://localhost:5000/books');
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  });

  const enterBookPages=(e)=>{
    setBookPages(e.target.value)
  }

  const enterBookTitle=(e)=>{
    setBookTitle(e.target.value)
  }
  const enterbookDate=(e)=>{
    setBookDate(e.target.value)
  }
  const onSelectGenre=(e)=>{
    setBookGenre(e.target.value)
  }
  const enterBookAuthor=(e)=>{
    setBookAuthor(e.target.value)
  }

  const addTheBook= async ()=>{
    const newBook={
      id:uuidv4(),
      Title:bookTitle,
      Author:bookAuthor,
      Genre:bookGenre,
      Pages:pages,
      PublishedDate:publishedDate
    }
      try {
        const response = await fetch('http://localhost:5000/books', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newBook),
        });
        const data = await response.json();
        console.log('Book added:', data);
      } catch (error) {
        console.error("Error adding book:", error);
      }
    setBookTitle("")
    setBookAuthor("")
    setBookGenre("Adventure")
    setBookPages("")
    setBookDate("")
  }

  const handleUpdate = async (id) => {
    const updatedBook = {
      bookTitle,
      bookAuthor,bookGenre,pages,publishedDate
    };

    try {
      const response = await fetch(`http://localhost:5000/books/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedBook),
      });

      const data = await response.json();
      if (response.ok) {
        alert(data.message);
      } else {
        alert('Failed to update the book.');
      }
    } catch (error) {
      console.error('Error updating book:', error);
      alert('An error occurred while updating the book.');
    }
  };

  const deleteBook = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/books/${id}`, {
        method: 'DELETE',
      });
      const data = await response.json();
      console.log('Book deleted:', data);
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };
  return (
    <div>
        <ReactSlick/>
        <div className='search-container'>
          <input type="search" placeholder="Search book here..." value={searchInput} onChange={handleInputChange}/>
          <button >Search</button>
        </div>
        <div className='add-container'>
        <h1 className='books-main-heading'>Books</h1>
        <div className='pop-container'>
        <Popup
        modal
        trigger={
            <button className="note-btn">+</button>
        }
    >
        {close => (
        <>

            <div className="popup-container">
            <button onClick={() => close()} type="button" className="remove-btn"><FaXmark /></button>
                <input type="text" placeholder="Enter book Title...." value={bookTitle} onChange={enterBookTitle}/>
                <input type="text" value={bookAuthor} placeholder="Enter book author...." onChange={enterBookAuthor}/>
                <select onChange={onSelectGenre} value={bookGenre}>
                    <option value="Adventure">Adventure</option>
                    <option value="Fiction">Fiction</option>
                    <option value="Romance">Romance</option>
                    <option value="Classic">Classic</option>
                    <option value="Dystopian">Dystopian</option>
                    <option value="Historical Fiction">Historical Fiction</option>
                    <option value="Philosophical">Philosophical</option>
                    <option value="Fiction">Fiction</option>
                    <option value="Crime">Crime</option>
                    <option value="Fantasy">Fantasy</option>
                    <option value="Mystery/Thriller">Mystery/Thriller</option>

                    <option value="Horror"></option>
                </select>
                <input type="text" value={publishedDate} placeholder="Enter book published Date...." onChange={enterbookDate}/>
                <input type="text" value={pages} placeholder="Enter book total pages...." onChange={enterBookPages}/>

            <button
            type="button"
            className="add-btn"
            onClick={addTheBook}
            >
            Add
            </button>
            </div>
        </>
        )}
          </Popup>
              </div>
        </div>
        <ul>
            {booksList.map((each,index)=>(
                <div className='book' key={index}>
                    <h4>{each.Title}</h4>
                    <p>{each.Author}</p>
                    <div className='bottom-container'>
                      <div className='gen-page-container'>
                      <p>{each.Genre}</p>
                      <p>{each.Pages} Pages</p>
                      </div>
                    <div className='icon-container'>
                    <h5>{each.PublishedDate}</h5>
                    <MdDelete className='icon' onClick={() => deleteBook(each.BookID)}/>
                    <MdEditSquare className='icon' onClick={() => handleUpdate(each.BookID)}/>
                    </div>
                    </div>
                </div>
            ))}
        </ul>
    </div>
  )
}
