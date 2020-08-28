import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component{

    state = {
        gifs: []
    }
    
    renderDolphins =()=>{
        return this.state.gifs.data.map((array) => <GifList key={array.id} gifs={array.images.original.url}/>)
    }
    
    componentDidMount(){
        console.log("CDM")
        fetch("https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=hhQklpKo6YAaJxm1usKdcvtUNTa1jL2l&rating=g&limit=3")
        .then(resp=>resp.json())
        .then(data => this.setState({gifs: data}))
    }

    render(){
        console.log("GifListContainer Render", this.state.gifs.data)
        return(
            <>
            <GifSearch/>
                <h3>GifListContainer</h3>
                <ul>
                    { this.state.gifs.length === 0 ? null : this.renderDolphins() }
                </ul>
 
            </>
        )
    }
}

export default GifListContainer