import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

//api call HERE!

class GifListContainer extends React.Component {

    state = {
        firstThree: [],
        searchVal : ""
    }

    componentDidMount() {
        fetch("https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=tfFszbbifOLiUXE1fs8GUfv9oKLJ8eQs&rating=g")
            .then(response => response.json())
            .then(apiData => this.setState({
                firstThree: apiData.data.slice(0,300)
            }))
    }

   
        submitHandler = (e) => {
            e.preventDefault()
            fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.searchVal}&api_key=tfFszbbifOLiUXE1fs8GUfv9oKLJ8eQs&rating=g`)
            .then(response => response.json())
            .then(apiData => this.setState({
                firstThree: apiData.data.slice(0,3),
                searchVal: ""
            }))
        }

    onChangeHelper = (e) => {
        this.setState({ [e.target.name] : e.target.value })
    }

    render() {
        return(
        <React.Fragment>
            {this.state.firstThree.length === 0 ? <h1>Hang on, Loading Gifs...</h1> : 
            <React.Fragment>
                <GifSearch searchVal={this.state.searchVal} submitHandler={this.submitHandler} onChangeHelper={this.onChangeHelper} />
                <h1>Giflistcontainer reporting for duty!</h1>
                <GifList gifData={this.state.firstThree}/>
            </React.Fragment>
            }
        </React.Fragment>
        )
    }

}

export default GifListContainer