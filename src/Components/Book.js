import React from 'react'

class Book extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: this.props.data.shelf };
        this.handleChange = this.handleChange.bind(this);

    }
    handleChange(event) {
        console.log(event)
        this.setState({ value: event.target.value });
        this.props.onMoveToShelf(this.props.data, event.target.value)
    }

    render() {
        const { data } = this.props;
        let coverImage = data.imageLinks ? data.imageLinks.thumbnail : '';
        
        return <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${coverImage}")`  }}></div>
                <div className="book-shelf-changer">
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
            </div>
            <div className="book-title">{data.title}</div>
            <div className="book-authors">{data.authors && data.authors.join(' , ')}</div>
        </div>
    }


}

export default Book