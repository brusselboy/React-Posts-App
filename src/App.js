import './styles/App.css'
import React from 'react';
import {
    BrowserRouter, Navigate,
    Route, Routes
} from "react-router-dom";
import MyPosts from "./pages/MyPosts";
import InternetPosts from "./pages/InternetPosts";

function App() {

  return (
    <BrowserRouter>
        <div>
            <Routes>
                <Route path="/my-posts" element={<MyPosts/>} />
                <Route path="/internet-posts" element={<InternetPosts/>} />
                <Route path="*" element={<Navigate replace to="/my-posts" />} />
            </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
