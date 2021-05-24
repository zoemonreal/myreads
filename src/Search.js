import React from 'react'
import { Link } from 'react-router-dom'
import Book from './Components/Book'




class Search extends React.Component {
    state = {
        query: '',
        books: [] 
    }
    updateQuery = (query) => {
        this.setState(() => ({
            query: query
        }))

        this.loadSearchBooks(query);
    }
    loadSearchBooks = (query) => {
     const myBooks = this.props.myBooks
        if (query.length !== 0) {
          this.props.search(query).then((booksResult) => {
              if(booksResult && booksResult.length > 0){
              const  matchedBooks =  
                booksResult.map(function(book){
                  let bookOnShelf = myBooks.find((b) => book.id === b.id)
                  
                  book.shelf = bookOnShelf ? bookOnShelf.shelf : "none";
                  
                  return book;
                })
                this.setState({ books: matchedBooks })
              }else{
                this.setState({ books: [] })
              }
            });
        } else {
            this.setState({ books: [] })
        }


    }

    render() {


        const { onMoveToShelf } = this.props
        const { books, query } = this.state;
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link
                        to='/'
                        className='close-search'
                    > Close </Link>

                    <div className="search-books-input-wrapper">
                        {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            value={query}
                            onChange={(event) => this.updateQuery(event.target.value)}
                        />

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">{books.length > 0 ?
                        books.map(function (book) {
                            return <li key={book.id}>
                                <Book
                                    onMoveToShelf={onMoveToShelf}
                                    key={book.id}
                                    data={book} /></li>
                        }) : <h1>No Results!</h1>}
                    </ol>
                </div>
            </div>

        )


    }




}

export default Search
