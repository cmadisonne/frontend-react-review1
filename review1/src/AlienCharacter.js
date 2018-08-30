import React, { Component } from 'react';
import DisplayAliens from './DisplayAliens';

class AlienCharacter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            aliens: [
                {name: "DoDo", planet: "Mars", size: "small", type: "gorg"}
            ],
            name: "",
            planet: "",
            size: "",
            type: ""
        }
    }

    nameChange = (event) => {
        this.setState ({name: event.target.value})
    };

    planetChange = (event) => {
        this.setState ({planet: event.target.value})
    };

    sizeChange = (event) => {
        this.setState ({size: event.target.value})
    };

    typeChange = (event) => {
        this.setState ({type: event.target.value})
    };

    submitFunc = (event) => {
        let newCollection = {name: this.state.name, planet: this.state.planet, size: this.state.size, type: this.state.type}
        this.state.aliens.push(newCollection);
        this.setState({aliens: this.state.aliens,
        name: "",
        planet:"",
        size:"",
        type: ""});
        event.preventDefault();
    };

    render() {

        return (
            <div className="AlienCharacter">

                <form onSubmit={this.submitFunc}>

                    <label htmlFor="name">Character Name: </label>
                    <input type="text" value={this.state.name} onChange={this.nameChange}/>
                    <label htmlFor="planet"> Planet: </label>
                    <input type="text" value={this.state.planet} onChange={this.planetChange}/>
                    <label htmlFor="size"> Size: </label>
                    <input type="text" value={this.state.size} onChange={this.sizeChange}/>
                    <label htmlFor="size"> Type: </label>
                    <input type="text" value={this.state.type} onChange={this.typeChange}/>

                    <div>
                        <br/>
                        <button>Submit</button>

                    </div>

                </form>

                <DisplayAliens aliens= {this.state.aliens}/>

            </div>
        );
    }
}

export default AlienCharacter;