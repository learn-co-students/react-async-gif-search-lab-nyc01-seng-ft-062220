import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {

    state = {
        gifs: [],
        searchQuery: ""
    }

    searchHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    submitHandler = (event) => {
        event.preventDefault()
        this.getGifs()
    }

    render() {
        return(
            <div>
                <GifList gifs={this.state.gifs}/>
                <GifSearch submitHandler={this.submitHandler} searchHandler={this.searchHandler} searchQuery={this.state.searchQuery}/>
            </div>
        )
    }

    mapImages = (gifObjs) => {
        return(
            gifObjs.map(gif =>{
                gif.images.original.url
            })
        )
    }

    getGifs = () => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.searchQuery}&api_key=m4WE3NaOwEviHSLd7Xj9JVSnIlHSzGDE&rating=g`)
            .then(response => response.json())
            .then(newGifs => {
                console.log(newGifs)
                this.setState({
                    gifs: this.mapImages(newGifs)
            })
        })
    }
}

export default GifListContainer
