import React, { Component } from 'react';

class DisplayBooks extends Component {
    render() {

        var bookArray = this.props.books.map(
            eachBook => {
                return (
                    <div>
                        <img width="300" src={eachBook.url} />
                        <p>Name: {eachBook.bookName} Stars: {eachBook.numofStars}</p>
                    </div>
                )
            }
            );
        return (
            <div className="DisplayBooks">

                <h3>{bookArray}</h3>

            </div>
        );
    }
}

export default DisplayBooks;