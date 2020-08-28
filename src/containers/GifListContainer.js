import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'


class GifListContainer extends React.Component {

    state = {
        gif: [],
        searchWord : "NYC"
    }

    submitHandler = (e) => {
        e.persist()
        //console.log(e)
        e.preventDefault()
        
        this.setState({
            ...this.state,
            searchWord: e.target.search.value
        })
    }

    componentDidUpdate(){
        let url = `https://api.giphy.com/v1/gifs/search?q=${this.state.searchWord}&api_key=9DbSABWzk2jhgAw5LaSDweGnJjPXuCt0&limit=3`
        fetch(url)
        .then(response => response.json())
        .then(bacon =>{
            let results = bacon.data.map((obj)=> obj.images.original.url)
            this.setState({
                ...this.state,
                gif: results
                
            })
    })
}


    componentDidMount(){
        let url = `https://api.giphy.com/v1/gifs/search?q=${this.state.searchWord}&api_key=9DbSABWzk2jhgAw5LaSDweGnJjPXuCt0&limit=3`
        fetch(url)
        .then(response => response.json())
        .then(bacon =>{
            let results = bacon.data.map((obj)=> obj.images.original.url)
            this.setState({
                ...this.state,
                gif: results
                
            })
    })
}


    render() {
        return (
            <div>
                
                <GifSearch submitHandler={this.submitHandler}/>
                <GifList card={this.state.gif}/>
                
            </div>
        )
    }


}

export default GifListContainer
