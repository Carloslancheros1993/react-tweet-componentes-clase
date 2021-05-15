import React from 'react';
import './styles.css';

class Tweet extends React.Component {
    render(){
        return (
            <div className="tweet-container">
                <div className="row">
                    <div className="c1">
                        <img src={this.props.profile} alt="tweet"/>
                    </div>
                    <div className="c2">
                        <h6>{this.props.profileName}</h6>
                        <h6>{this.props.username}</h6>
                    </div>
                    <div className="c3">
                        
                    </div>
                </div>
                <div className="row">
                <p className="content">{this.props.content}</p>
            </div>
        </div>
        )
    }
}


export default Tweet;

