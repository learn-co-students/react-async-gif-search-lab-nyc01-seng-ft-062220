import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {

    state = {
        searchValue: '',
        filteredBois: []
    }

    searchHandler = (e) => {
        this.setState({
            searchValue: e.target.value
        })
    }

    componentDidUpdate() {
        fetch('https://api.giphy.com/v1/gifs/search?q=YOUR%20QUERY%20HERE&api_key=dc6zaTOxFJmzC&rating=g')
        .then(response => response.json())
        .then(data => {
            this.filterGifs(data.data)
        })
    }

    

    filterGifs = (data) => {
        let filteredArrays = data.filter(gif => {
            return gif.title.toLowerCase().includes(this.state.searchValue.toLowerCase())
        })
        this.setState({
            filteredBois: filteredArrays
        })
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <GifSearch value={this.state.searchValue} searchHandler={this.searchHandler}/>
                </div>
                <GifList gifs={this.state.filteredBois}/>
            </React.Fragment>
        )
    }
}

export default GifListContainer
