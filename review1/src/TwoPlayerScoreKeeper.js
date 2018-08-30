import React, { Component } from 'react';
import ScoreButton from './ScoreButton';

class TwoPlayerScoreKeeper extends Component {

    render() {

        return (
            <div className="TwoPlayerScoreKeeper">
                <h1> Two Player Clicker Game </h1>
                <div>
                    <div id="scoreTotal"></div>

                </div>

                        <ScoreButton/>
                        <ScoreButton/>

            </div>
        );
    }
}

export default TwoPlayerScoreKeeper;