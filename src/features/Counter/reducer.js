import {ADD_COUNT} from "./actiontype.js";
let init={count:0};
export const reducer=(state=init,{type,payload})=>{
switch(type){
    case ADD_COUNT:
        return {count:state.count+payload}
    default:
            return state;
 }
}