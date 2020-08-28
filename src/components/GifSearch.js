import React from 'react';

class GifSearch extends React.Component {

    state = {
        searchValue: ''
    }

    searchHandler = (e) => {
        this.setState({
            searchValue: e.target.value
        })
    }

    submitHandler = (e) => {
        this.props.submitHandler(e, this.state.searchValue)
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <input type="text" placeholder="search gifs" value={this.state.searchValue} onChange={this.searchHandler}/>
                <input type="submit" value="Search Gify" />
            </form>
        )
    }
}

export default GifSearch