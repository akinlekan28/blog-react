import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./main.css";
import Sidebar from "./components/common/Sidebar";
import Footer from "./components/common/Footer";
import Allpost from "./components/posts/Allpost";
import Singlepost from "./components/posts/Singlepost";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [
        {
          userId: 1,
          id: 1,
          title:
            "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          body:
            "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
          userId: 1,
          id: 2,
          title: "qui est esse",
          body:
            "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        },
        {
          userId: 1,
          id: 3,
          title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
          body:
            "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
        },
        {
          userId: 1,
          id: 4,
          title: "eum et est occaecati",
          body:
            "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
        },
        {
          userId: 1,
          id: 5,
          title: "nesciunt quas odio",
          body:
            "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
        },
        {
          userId: 1,
          id: 6,
          title: "dolorem eum magni eos aperiam quia",
          body:
            "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
        }
      ]
    };
  }

  render() {
    let postContents;
    const { posts } = this.state;

    if (true) {
      postContents = posts.map(post => <Allpost key={post.id} post={post} />);
    } else {
      postContents = <h1>No posts</h1>;
    }
    return (
      <Router>
        <div>
          <Sidebar />
          <main>
            <h1 className="lg-heading">
              My
              <span className="text-secondary">Blog</span>
            </h1>
            <h2 className="sm-heading">
              Random stuffs going through my mind...
            </h2>
            <div className="blog-home">{postContents}</div>
            <Switch>
              <Route exact path="/single-post/:id" component={Singlepost} />
            </Switch>
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
