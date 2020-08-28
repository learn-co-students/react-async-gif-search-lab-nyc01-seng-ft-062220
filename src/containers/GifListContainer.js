import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component{

    state = {
        gifs: [],
        searchValue: ""
    }
    
    renderDolphins =()=>{
        return this.state.gifs.data.map((array) => <GifList key={array.id} gifs={array.images.original.url}/>)
    }
    
    componentDidMount(){
        fetch("https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=hhQklpKo6YAaJxm1usKdcvtUNTa1jL2l&rating=g&limit=3")
        .then(resp=>resp.json())
        .then(data => this.setState({gifs: data}))
    }

    searchHandler=(e)=>{
    
        this.setState({
            searchValue: e.target.value
        })
    }

    submitHandler=(e)=>{
        e.preventDefault()
        fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.searchValue}&api_key=hhQklpKo6YAaJxm1usKdcvtUNTa1jL2l&rating=g&limit=3`)
        .then(resp=>resp.json())
        .then(data => this.setState({gifs: data}))
    }

    // componentDidUpdate(prevProps, prevState){
    //     if (prevState.searchValue !== this.state.searchValue){
    //         console.log("Let's fetch NEW GIFFFSSS")
    //     }
    // }

    render(){
        // console.log("GifListContainer Render", this.state.gifs.data)
        return(
            <>
                <GifSearch searchHandler={this.searchHandler} value={this.state.searchValue} submitHandler={this.submitHandler}/>
                <ul>
                    { this.state.gifs.length === 0 ? null : this.renderDolphins() }
                </ul>
 
            </>
        )
    }
}

export default GifListContainer