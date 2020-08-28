import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {

    state = {
        firstThree: []
    }

    componentDidMount() {
        this.fetchGifs()
    }

    submitHandler = (searchTerm) => {
        this.fetchGifs(searchTerm)
    }
    
    fetchGifs = (term = "dolphins" ) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${term}&api_key=tfFszbbifOLiUXE1fs8GUfv9oKLJ8eQs&rating=g`)
        .then(response => response.json())
        .then(apiData => {
            let shuffled = apiData.data.sort(() => 0.5 - Math.random()).slice(0,3)
            this.setState({firstThree: shuffled}) 
        })
    }

    render() {
        return(
        <React.Fragment>
            {this.state.firstThree.length === 0 ? <h1>Hang on, Loading Gifs...</h1> : 
            <React.Fragment>
                <GifSearch submitHandler={this.submitHandler} />
                <h1>Giflistcontainer reporting for duty!</h1>
                <GifList key={this.state.firstThree.id} gifData={this.state.firstThree}/>
            </React.Fragment>
            }
        </React.Fragment>
        )
    }

}

export default GifListContainer