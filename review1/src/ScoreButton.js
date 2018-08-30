import React, { Component } from 'react';


class ScoreButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clickNum: 0,
            scoreDisplay: 0
        }
    }

    scoreChange = (event) => {
        console.log("Click Button working");
        this.setState({scoreDisplay: this.state.clickNum += 1});
        // document.getElementById("scoreTotal").innerHTML = this.state.scoreDisplay;
        event.preventDefault();
    };

    render() {

        return (
            <span>
                <span>{this.state.scoreDisplay}</span>
                <span className="ScoreButton">
                    <input type="button" value="click me" onClick={this.scoreChange}/>
                </span>
            </span>
        );
    }
}

export default ScoreButton;