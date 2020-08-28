import React from 'react';

class GifSearch extends React.Component {

    state = {
        searchValue: ''
    }

    searchHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = (e) => {
        this.props.submitHandler(e, this.state.searchValue)
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <input type="text" placeholder="search gifs" name="searchValue" value={this.state.searchValue} onChange={this.searchHandler}/>
                <input type="submit" value="Search Gifs" />
            </form>
        )
    }
}

export default GifSearch