import React from "react"

class GifSearch extends React.Component {

    state = {
        search: ''
    }

    onChangeHandler = (e) => {
        this.setState({
            search: e.target.value
        })
        this.props.changeHandler(e.target.value)
    }


    render() {
        return(
            <div>
                <form>
                    <input type="text" name="search" onChange={this.onChangeHandler} value={this.state.search} placeholder="Search Gifs"/>
                </form>
            </div>
        )

    }
}

export default GifSearch