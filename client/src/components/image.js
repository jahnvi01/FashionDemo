import React, { Component } from 'react';
import {connect} from 'react-redux';
class Image extends Component{

render(){
  const list=this.props.items.map(item=>{
      return <div className="col-md-3"><img src={item.img} alt="img" width="250" height="250"/></div>
  })
  
    return(

        <div className="row d-flex list">
          {list}
            </div>
    )
}

}
export default Image;