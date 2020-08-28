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
        fetch(`https://api.giphy.com/v1/gifs/search?q=dolphin&{$API_KEY_PLACEHOLDER}=APIKEY&rating=g&limit=3`)
        .then(resp=>resp.json())
        .then(data => this.setState({gifs: data}, () => console.log("GifListCont CDM: ", this.state)))
    }

    submitHandler=(e, searchValue)=>{
        e.preventDefault()
        fetch(`https://api.giphy.com/v1/gifs/search?q=${searchValue}&api_key={$API_KEY_PLACEHOLDER}&rating=g&limit=3`)
        .then(resp=>resp.json())
        .then(data => this.setState({gifs: data}))
    }


    render(){
        console.log("GifListContainer State: ", this.state)
        return(
            <>
                <GifSearch submitHandler={this.submitHandler}/>
                <ul>
                    { (this.state.gifs.length === 0 || this.state.gifs.data.length === 0) ? null : this.renderDolphins()}
                </ul>
            </>
        )
    }
}

export default GifListContainer