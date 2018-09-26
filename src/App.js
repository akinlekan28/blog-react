import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./main.css";
import Sidebar from "./components/common/Sidebar";
import Footer from "./components/common/Footer";
import Index from "./components/Index";
import Singlepost from "./components/posts/Singlepost";
import Createpost from './components/admin/Createpost';

class App extends Component {

  render() {
    
    return (
      <Router>
        <div>
          <Sidebar />
          <main>
            <Switch>
              <Route exact path="/" component={Index} />
              <Route exact path="/single-post/:id" component={Singlepost} />
              <Route exact path="/create-post" component={Createpost} />
            </Switch>
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
