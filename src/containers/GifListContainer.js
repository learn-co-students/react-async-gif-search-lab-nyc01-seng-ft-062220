import React, { Component } from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {
    state = {
        key: `C9hm7KwBhoFesXygNwIszkBay5xRc8cy`,
        search: ``,
        gifArray: []
    }
    
    searchHandler = (gifSearchState) => {
        const newSearchValue = gifSearchState.search
        
        this.setState({
            search: newSearchValue
        }, () => {
            fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.search}&api_key=${this.state.key}&rating=g`)
            .then(r => r.json())
            .then(data => {
                this.setState({
                    gifArray: [data.data[0], data.data[1], data.data[2]]
                }, () => console.log(this.state))
            })}
        )
    }

    componentDidMount() {
        console.log(`mounted`)
        fetch(`https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=${this.state.key}&rating=g`)
        .then(r => r.json())
        .then(data => {
            this.setState({
                gifArray: [data.data[0], data.data[1], data.data[2]]
            }, () => console.log(this.state))
        })
    }

    render() {
        return (
            <div> 
                <GifSearch searchHandler={this.searchHandler}/>
                <GifList gifArray={this.state.gifArray}/>
                 <h1 name="hi" age="7"></h1>
            </div>
        );
    }
}

export default GifListContainer;
