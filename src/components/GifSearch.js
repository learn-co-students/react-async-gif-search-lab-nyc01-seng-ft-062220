import React from "react"

class GifSearch extends React.Component {

    state = {
        search: ''
    }

    onChangeHandler = (e) => {
        this.setState({
            search: e.target.value
        })
    }

    searchClick = (e) => {
        e.preventDefault()
        this.props.submitHandler(this.state.search)
        this.setState({
            search: ''
        })
    }

    render() {
        return(
            <div>
                <form onSubmit={this.searchClick} >
                    <input type="text" name="search" onChange={this.onChangeHandler} value={this.state.search} placeholder="Search Gifs"/>
                    <input type= "submit" />
                </form>
            </div>
        )

    }
}

export default GifSearch