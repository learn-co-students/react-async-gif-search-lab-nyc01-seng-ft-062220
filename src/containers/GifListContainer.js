import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {

    state = {
        firstThree: [],
        searchVal : ""
    }

    componentDidMount() {
        fetch("https://api.giphy.com/v1/gifs/search?q=nba&api_key=tfFszbbifOLiUXE1fs8GUfv9oKLJ8eQs&rating=g")
            .then(response => response.json())
            .then(apiData => {
                let shuffled = apiData.data.sort(() => 0.5 - Math.random()).slice(0,3)
                this.setState({firstThree: shuffled}) 
            })
    }

   
        submitHandler = (e) => {
            e.preventDefault()
            fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.searchVal}&api_key=tfFszbbifOLiUXE1fs8GUfv9oKLJ8eQs&rating=g`)
            .then(response => response.json())
            .then(apiData => this.setState({
                firstThree: apiData.data.slice(0,3)
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
                <GifList key={this.state.firstThree.id} gifData={this.state.firstThree}/>
            </React.Fragment>
            }
        </React.Fragment>
        )
    }

}

export default GifListContainer