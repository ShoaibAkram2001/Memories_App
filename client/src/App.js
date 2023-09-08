import AppHeader from "./components/AppHeader";
import AppContent from "./components/AppContent";
import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { getPosts } from "./actions/postAction";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Auth from "./components/Auth";
import { GoogleOAuthProvider } from '@react-oauth/google';

const App = () => {
  return (
    //<GoogleOAuthProvider clientId="429708968029-006d7flsvdinml1vab7csvu6bvkmdh95.apps.googleusercontent.com">
      <BrowserRouter>
        <div className="App">
          <AppHeader />

          <Routes>
            <Route path="/" Component={AppContent} />
            <Route path="/auth" Component={Auth} />
          </Routes>
        </div>
      </BrowserRouter>
    //</GoogleOAuthProvider>
  );
};

export default App;
