
import React from 'react'
import { Link } from 'react-router-dom'
import Bookshelf from './Components/Bookshelf'



function Home (props) {


        const bookshelfs = [{ 'name': 'Currently Reading', 'tag': 'currentlyReading' },
        { 'name': 'Want to Read', 'tag': 'wantToRead' },
        { 'name': 'Read', 'tag': 'read' },]
        const { onMoveToShelf, books } = props
        return (

            <div className="list-books">
                <div className="list-books-title">
                    <h1>My Reads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        {bookshelfs.map(function (bookshelf) {
                            return <Bookshelf
                                key={bookshelf.tag}
                                onMoveToShelf={onMoveToShelf}
                                name={bookshelf.name}
                                books={books.filter((c) => (
                                    c.shelf.includes(bookshelf.tag)))}
                            />
                        })
                        }
                    </div>
                </div>

                <div className="open-search">
                    <Link to="/search"
                    >Add a book</Link>
                </div>
            </div>
        )


    




}

export default Home
