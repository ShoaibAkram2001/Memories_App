
import {combineReducers} from 'redux';


const postreducer=(posts=[],action)=>
{
    switch(action.type)
    {
        case 'FETCH_ALL':
            return posts;
       case 'CREATE':
        return posts;

        default:
        return posts;

    }
    
}


const reducer=combineReducers({postreducer});





module.exports=reducer;