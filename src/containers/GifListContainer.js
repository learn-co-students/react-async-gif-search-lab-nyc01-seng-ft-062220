import React from 'react'
import GifList from '../components/GifList.js'
import GifSearch from '../components/GifSearch.js'

class GifListContainer extends React.Component{
    
    state = {
        giphyResponse: [],
        searchterm: '',
        submission: ''
    }

    componentDidMount(){
            fetch(`https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=jSAfl3smgyyChxXci1w3801PhU4LzDEV`)
            .then(response => response.json())
            .then(dataDolphins => {
                this.setState({giphyResponse: dataDolphins.data})
             })
    }


    renderDataDolphins = () => {
        return this.state.giphyResponse.map(dolphin => <GifList dolphinObj={dolphin} /> )
    }

    // filterDolphins = () => {
    //     let searchTerm = this.state.submission.toLowerCase()
    //      return this.state.giphyResponse.filter(dolphin => dolphin.title.toLowerCase().includes(searchTerm))
    // }

    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({ 
            submission: event.target.search.value 
        })
        fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.submission}&api_key=jSAfl3smgyyChxXci1w3801PhU4LzDEV`)
            .then(response => response.json())
            .then(dataDolphins => {
                this.setState({giphyResponse: dataDolphins.data})
            })
    }
    
        
        

    changeHandler = (event) => {
        this.setState({searchterm: event.target.value},() => console.log(this.state.searchterm))
    }
    render (){
        // console.log(this.state)
        return <div>
            <GifSearch filterSubmit={this.handleSubmit} valueProp={this.state.searchterm} onChangeSearch={this.changeHandler} /> 
            <h2>here is the gif list container</h2>
                {this.renderDataDolphins()}
                
            </div>
    }
}

export default GifListContainer


// (dolphin => this.setState({
//     giphyResponse: this.giphyResponse.push(dolphin.images.original.url)