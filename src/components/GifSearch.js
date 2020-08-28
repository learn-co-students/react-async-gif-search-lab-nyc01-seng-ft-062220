import React from 'react'

class GifSearch extends React.Component {
 
    render() {
        return (
            <form onSubmit={this.props.submitHandler}>
                <input type="text" onChange={this.props.onChangeHelper} value={this.props.searchVal}  name="searchVal" placeholder="search gifs here"/>
                <input type="submit" value="Find Gifs"/>
            </form>
        )
    }
}

export default GifSearch