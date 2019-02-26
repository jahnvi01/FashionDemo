var initialState={
 
    items:[
        
    ]

}
const rootReducer=(state=initialState,action)=>{

switch(action.type){

   case "get":
   return {...state,items:action.payload}
    ;
   default:
return state;
}

}
export default rootReducer;