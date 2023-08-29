import { FETCH_ALL,CREATE,UPDATE ,LIKE,DELETE} from "../actionTypes";

const initialState={
  posts:[],
}

export default (posts= [], action) => {
  switch (action.type) {
    case FETCH_ALL:
    posts=action.payload;
    console.log(posts);
    return action.payload;

    case LIKE:
      console.log("Like : ",posts);
      return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
    case CREATE:
      console.log("CREATE : ",posts);
      return [...posts, action.payload];
    case UPDATE:
      return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
    case DELETE:
      console.log("Delete : ",posts);
      //console.log("Payload received in reducer for delete Action:", action.payload);
      return posts.filter((post) => post._id !== action.payload);
    default:
      return posts;
  }
};

