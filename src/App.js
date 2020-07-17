import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "./pages/Search";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/Jumbotron";

function App() {
  return (
    <Router>
      <div>
        <Wrapper>
          <Jumbotron />
          <Route exact path="/" component={Search} />
          <Route exact path="/search" component={Search} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
