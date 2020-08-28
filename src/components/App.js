import React from 'react'

import NavBar from './NavBar'
import GifSearch from "./GifSearch"
import GifList from "./GifList";


// the App component should render out the GifListContainer component

let url = "https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g"

class App extends React.Component {

    state = {
        gif: [],
        search: []
    }

    changeHandler = (obj) => {
        if (obj.length === 0) {
            this.setState({
                search: this.state.gif
            })
        } else {
            let newArray = this.state.gif.filter(gif => gif.title.toLowerCase().includes(obj.toLowerCase()))
            this.setState({
                search: newArray
            })
        }
    }

    componentDidMount() {
        fetch(url)
            .then(res => res.json())
            .then(gifs => this.setState({gif: gifs.data, search: gifs.data}))
    }

    render() {
        return (
            <div>
                <NavBar color='black' title="Giphy Search" />
                <GifSearch changeHandler={this.changeHandler}/>
                <GifList data={this.state.search}/>
            </div>
        )
    }
}

export default App
