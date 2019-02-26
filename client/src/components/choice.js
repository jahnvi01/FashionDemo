import React, { Component } from 'react';
import {connect} from 'react-redux';
import Image from './image';
class Choice extends Component {
  explore=(event)=>{
event.preventDefault();
var article=document.getElementById("article").value;
var style=document.getElementById("style").value;
var date=document.getElementById("date").value;
var data={
  article:article,
  style:style,
  date:date
}
this.props.get(data);
    console.log(data);
  }
    render() {
      return (
        <div className="container">
        <div className="choice">
                           
        <form method="post">

        <label>Article Type:  </label>
            <select id="article" required>
               <option>Choose any one</option>
               <option> dresses </option>
                <option> shirts </option>
                <option> tops </option>
                <option> t-shirt </option>
              
             </select>
<br />
<br />
 <label>Style Type:  </label>
            <select id="style" required>
               <option>Choose any one</option>
               <option> QUIRKY CLASSIC </option>
                <option>ALTERNATIVE </option>
                <option> CITY WORK </option>
                <option> GLAMOUR </option>
                <option>VINTAGE </option>
                <option> ARTY</option>
                <option> TIMELESS </option>
                <option>EXPERIMENTAL</option>
                <option> MINIMALIST  </option>
                <option> ROMANTIC</option>
                <option> FLAMBOYANT</option>
             </select>
             <br /><br />
            <label>Date frame:  </label>
            <select id="date" required>
               <option>Choose any one</option>
                <option> 23oct_06nov  </option>
                <option>22aug_12sep</option>
                 <option>13sep_26sep</option>
                </select>
                <br /><br />
                <button id="post" type="submit" onClick={(event)=>{this.explore(event)}}>Explore</button>
            </form>

        
        </div>
        <Image items={this.props.items}/>
      
</div>

      );
    }
  }
  
  function mapStateToProps(state){
    console.log(state.items);
    return {items:state.items};
}
function mapDispatchToProps(dispatch){
return{
    get:(data)=>{
      console.log(data);
        return fetch('api/items',{
          method:"post", headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },body:JSON.stringify(data)})
        .then(response=>response.json())
        .then(data=>dispatch({type:"get",payload:data}))
    },

}
}

  export default connect(mapStateToProps,mapDispatchToProps)(Choice);