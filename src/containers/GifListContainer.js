import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component{

state = {
  gifs: []
}    
//initially when user loads app, we give them a default fetch with dolphin
componentDidMount(){
    this.fetchGifs()
}


fetchGifs = (searchText = "dolphins") => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${searchText}&api_key=dc6zaTOxFJmzC&rating=g&limit=10`) //adding limit at the end to 3 
    .then(resp => resp.json())
    .then(data => this.setState({ gifs: data.data }))
}

//searchTerm is coming from child GiftSearch submitHandler
submitHandler = (searchTerm) => {
 //on submit we want to re-fetch the list with user search value
 this.fetchGifs(searchTerm)
}

render(){
    return(
        <React.Fragment>
            < GifSearch submitHandler={this.submitHandler}/>    
            < GifList gifs={this.state.gifs}/>
        </React.Fragment>
    )
}

}

export default GifListContainer