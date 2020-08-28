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
                <input type="submit" value="Find Gifs"/>
            </form>
        )
    }
}

export default GifSearch