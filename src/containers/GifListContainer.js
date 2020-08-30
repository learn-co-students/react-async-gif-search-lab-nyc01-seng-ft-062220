import React from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';


class GifListContainer extends React.Component {

    state = {
        api: [],
    }



    componentDidMount() {
        fetch(`https://api.giphy.com/v1/gifs/search?q=dolphins&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(res => res.json())
        .then(res => this.setState({ api: res.data.slice(0, 3) }))

    }

    submitHandler = (e, passedSearch) => {
        e.preventDefault()
        fetch(`https://api.giphy.com/v1/gifs/search?q=${passedSearch}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(res => res.json())
        .then(res => this.setState({ api: res.data.slice(0, 3) }))
    }


    render() {

        return (

            <div className="GifListContainer Cards">
                <GifSearch submitHandler={this.submitHandler} /><br></br>
                <GifList data={this.state.api} />
                {console.log(this.state)}
            </div>
        )
    }
}

export default GifListContainer;