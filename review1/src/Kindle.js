import React, { Component } from 'react';
import DisplayBooks from './DisplayBooks';

class Kindle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books:[
                {bookName: "Before I Go", numofStars: 5, url:"http://urbanmoms.ca/wp-content/uploads/2015/02/beforeigocolleenoakley.jpg"},
                {bookName: "Lovely Bones", numofStars: 4, url:"https://images-na.ssl-images-amazon.com/images/I/71x7ABw2OnL.jpg"}
            ]
        }
    }

    render() {

        return (
            <div className="Kindle">

                <h1> Book List: </h1>

                <DisplayBooks books={this.state.books}/>

            </div>
        );
    }
}

export default Kindle;