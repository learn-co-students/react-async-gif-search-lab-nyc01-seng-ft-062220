import React from 'react'


class GifList extends React.Component {

    item = () => {
        //map throgh array of gifs and render a li for each one
        //console.log(this.props.card)
        return this.props.card.map((gifObj) =>  <li> <img alt="flatiron" src={gifObj}></img> </li> )

    }
        //console.log(gifObj)
    //     <div>
    //     <li> 
    //         <img src={gifObj}/> 
    //     </li> 
    //     </div>
    //     })
    // }

    render() {
        
        return(<div>
            <ul>
               {this.item()} 
            </ul>
          </div>
        )
    }
       
    

}   
    //     return (
    //         <div>
    //           <ul>
    //              {this.item()} 
    //           </ul>
    //         </div>
    //     )
    // }


export default GifList
