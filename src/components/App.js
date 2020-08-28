import React from 'react'

import NavBar from './NavBar'
import GifSearch from "./GifSearch"
import GifList from "./GifList";


// the App component should render out the GifListContainer component

let url = "https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g"

class App extends React.Component {

    state = { gif: [] }


    submitHandler = (obj) => {

    }

    componentDidMount() {
        fetch(url)
            .then(res => res.json())
            .then(gifs => this.setState({gif: gifs.data}))
    }

    render() {

        return (
            <div>
                <NavBar color='black' title="Giphy Search" />
                <GifSearch submitHandler={this.submitHandler}/>
                <GifList data={this.state.gif}/>
            </div>
        )
    }
}

export default App
