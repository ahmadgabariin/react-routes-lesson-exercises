import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/fentity.css'


class Fentity extends Component {
    render() {
        const name = this.props.match.params.name
        const fentities = this.props.match.params.fentities
        const state = this.props.state
        const fentity = state[fentities].find(f => f.name === name )
        return (
            <div id="creature-container">
                <Link to={`/directory/${fentities}`}> Back </Link>
                <h1>{fentity.name}</h1>
                <img src={fentity.imgUrl} alt=""/>
                <div className="title">Power:</div>
                <div className="power text"> {fentity.power}</div>
                <div className="other text">{fentity.other}</div>
            </div>
        )
    }
}

export default Fentity;
