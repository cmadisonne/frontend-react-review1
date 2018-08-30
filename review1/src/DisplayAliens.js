import React, { Component } from 'react';


class DisplayAliens extends Component {
    render() {

        var alienArray = this.props.aliens.map(
            eachAlien => {
                return (
                    <div>
                        <p> {eachAlien.name} , {eachAlien.planet} , {eachAlien.size} , {eachAlien.type} </p>
                    </div>
                )
            }
        );

        return (
            <div className="DisplayAliens">
                <h2>{alienArray}</h2>
            </div>
        );
    }
}

export default DisplayAliens;