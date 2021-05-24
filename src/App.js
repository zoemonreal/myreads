import React from 'react'
import { Route, Switch } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

import Home from './Home'
import Search from './Search'
import NotFound from './NotFound'
import './App.css'


class BooksApp extends React.Component {
    state = {
        books: [],
        /**
         * TODO: Instead of using this state variable to keep track of which page
         * we're on, use the URL in the browser's address bar. This will ensure that
         * users can use the browser's back and forward buttons to navigate between
         * pages, as well as provide a good URL they can bookmark and share.
         */
    }
    loadBooks() {
        BooksAPI.getAll()
            .then((books) => {
                this.setState(() => ({
                    books
                }))
            })
    }
    componentDidMount() {

        this.loadBooks();

    }
    addToShelf = (book, shelf) => {
        BooksAPI.update(book, shelf)
            .then((book) => {
                this.loadBooks();
            })
    }
    search = (query, maxResults) => {
        return BooksAPI.search(query, maxResults);

    }
    render() {
        const { books } = this.state;

        return (


            <div className="app">
              <Switch>
                <Route exact path='/search' render={() => (

                    <Search myBooks={books} search={this.search} onMoveToShelf={this.addToShelf}>
                    </Search>
                )} />

                <Route exact path='/' render={({ history }) => (

                    <Home
                        onMoveToShelf={this.addToShelf}
                        books={books}
                    />
                )} />

				<Route component={NotFound} />



			</Switch>


            </div>

        )
    }
}

export default BooksApp
