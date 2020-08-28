import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'


class GifListContainer extends React.Component {

    

    state = {
        gif: []
    }

    componentDidMount(){
        let url = "https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=9DbSABWzk2jhgAw5LaSDweGnJjPXuCt0&limit=3"
        fetch(url)
        .then(response => response.json())
        .then(bacon =>{
            let results = bacon.data.map((obj)=> obj.url)
            this.setState({
                gif: results
            })
    })
}


    render() {
        return (
            <div>
                <h1> Gif GifListContainer</h1>
                <GifList card={this.state.gif}/>
                <GifSearch />
            </div>
        )
    }


}

export default GifListContainer
