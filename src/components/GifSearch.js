import React from 'react'

class GifSearch extends React.Component {
    
    state ={
        searchVal : ""
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.props.submitHandler(this.state.searchVal)
        this.setState({searchVal: "" })
    }

    onChangeHelper = (e) => {
        this.setState({ searchVal : e.target.value })
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <input type="text" onChange={this.onChangeHelper} value={this.state.searchVal}  name="searchVal" placeholder="search gifs here"/>
                <input type="submit" value="Find Gifs"/>
            </form>
        )
    }
}

export default GifSearch