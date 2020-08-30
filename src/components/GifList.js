import React from 'react'

class GifList extends React.Component {


    render () {
        
        let picArr = this.props.data.map(picObj => <li><img alt="" src={picObj.images.original.url} /></li>)

        return (

            <ul>
                {picArr}
                {/* {console.log(this.props.data)} */}
            </ul>
        )
    }

}

export default GifList;