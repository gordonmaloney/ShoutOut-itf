import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//routes & components
import { Campaign } from "./Pages/Campaign/Campaign";
import { Header } from "./Components/Header";
import { Post } from "./Pages/Campaign/Post";
import { Browse } from "./Pages/Browse/Browse";
import { Footer } from "./Components/Footer";
import { Create } from "./Pages/Create/Create";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<Browse />} />
        <Route path="/create" exact element={<Create />} />
        <Route path="/campaign/:campId" element={<Campaign />} />
        <Route path="/post/:Language" element={<Post />} />
      </Routes>
    </Router>
  );
};

export default App;
