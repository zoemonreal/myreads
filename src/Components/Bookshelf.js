import React from 'react'
import Book from './Book'
class Bookshelf extends React.Component {
    render() {
        const { onMoveToShelf } = this.props
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.name}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.books.map(function (book) {
                            return <li key={book.id}>
                                <Book
                                    onMoveToShelf={onMoveToShelf}
                                    key={book.id}
                                    data={book} /></li>
                        })}

                    </ol>
                </div>
            </div>
        )

    }
}

export default Bookshelf;