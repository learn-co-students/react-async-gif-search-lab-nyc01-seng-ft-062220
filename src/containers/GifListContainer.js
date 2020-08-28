import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {
    
    state = {
        searchValue: "",
        filteredBois: []
    }
    
    searchHandler = (e) => {
        
        this.setState({
            searchValue: e.target.value
        }, () =>  fetch("https://api.giphy.com/v1/gifs/search?q=batman&api_key=DEgOneL8mblJkdcPXclaiT2tQXhKH1Kf&rating=g")
        .then(res => res.json())
        .then(data => this.filterGifs(data.data)))
    }

    

    filterGifs = (data) => {
        
        let filteredArrays = data.filter(gif => gif.title.toLowerCase().includes(this.state.searchValue.toLowerCase()))
       
        this.setState({
            filteredBois: filteredArrays
        })

        // return this.data.filter(gif => gif.title.toLowerCase().includes(this.state.searchValue.toLowerCase()))
    }
    
    render() {
        return(
            <div>
                < GifSearch searchValue={this.state.searchValue} searchIteration = {this.searchHandler}/>
                < GifList filterGifs={this.state.filteredBois}/>
            </div>
        )
    }
}

export default GifListContainer