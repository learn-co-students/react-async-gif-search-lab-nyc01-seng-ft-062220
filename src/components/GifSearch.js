import React from 'react'


class GifSearch extends React.Component {

    state= {
        search: ""
    }


    changeHandler = (e) => {
        this.setState({
            search: e.target.value
        })
    }
    render() {

        return (
            
                <form onSubmit={this.props.submitHandler}>
                    <label>
                        Enter a Search Term:
                    </label>
                    <input type="text" name="search" value={this.state.search} onChange={this.changeHandler}></input>
                    <input type="submit" />
                </form>
           
        )
    }
}

export default GifSearch