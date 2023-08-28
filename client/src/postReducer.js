import { FETCH_ALL,CREATE,UPDATE ,LIKE,DELETE} from "./actionTypes";


const  rootReducer= (posts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      //console.log("Payload received in reducer:", action.payload);
      return {
        ...posts,
        posts: action.payload,
      };
    case LIKE:
      return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
    case CREATE:
      return [...posts, action.payload];
    case UPDATE:
      return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
    case DELETE:
      //console.log("Payload received in reducer for delete Action:", action.payload);
      return posts.filter((post) => post._id !== action.payload);
    default:
      return posts;
  }
};

export default rootReducer;