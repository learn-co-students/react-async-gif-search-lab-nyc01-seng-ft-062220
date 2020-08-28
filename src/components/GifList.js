import React, { Component } from 'react';

class GifList extends Component {
    state = {
        
    }
    
    gifListArray = () => {
        console.log(this.props.gifArray)
        return this.props.gifArray.map(gifObj => <li><img src={gifObj.images.original.url}/></li>)
    }
    
    render() {
        console.log(this.props)
        return (
            <ul>
                {this.gifListArray()}
            </ul>
        );
    }
}

export default GifList;
