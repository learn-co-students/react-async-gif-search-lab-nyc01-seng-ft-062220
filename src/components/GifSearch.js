import React from 'react'

class GifSearch extends React.Component {



   
    render () {
        return(
            <form onSubmit={event => this.props.submitHandler(event)}>
                Enter a search term:
                <input 
                    id="search"
                    name="searchQuery"
                    onChange={this.props.searchHandler}
                    value={this.props.searchQuery}
                />
                How many GIFs would you like sir?
                <input
                    id="search"
                    name="limit"
                    onChange={this.props.searchHandler}
                    value={this.props.limit}
                />
                <input type="submit" value="Find Gifs"/>
            </form>
        )
    }
}

export default GifSearch