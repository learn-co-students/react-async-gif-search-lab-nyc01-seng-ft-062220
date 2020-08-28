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
        fetch("")
        .then(resp=>resp.json())
        .then(data => this.setState({gifs: data}))
    }

    submitHandler=(e, searchValue)=>{
        e.preventDefault()
        fetch(``)
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
                <GifSearch submitHandler={this.submitHandler}/>
                <ul>
                    { this.state.gifs.length === 0 ? null : this.renderDolphins() }
                </ul>
 
            </>
        )
    }
}

export default GifListContainer