import { LOGOUT, AUTH } from "../actions/actionTypes";

export default (state = { authData: null }, action) => {
  switch (action.type) {
    case AUTH:
   //   console.log("Auth reducer", action?.data);
     localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return { ...state, authData: action?.data };
    case LOGOUT:
    //  console.log('LOGOUT action happen');
      localStorage.clear();
      return { ...state, authData: null };

    default:
      //console.log("default");
      return state;
  }
};


