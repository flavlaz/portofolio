import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import SinglePost from "./components/SinglePost";
import Posts from "./components/Posts";
import Projects from "./components/Projects";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} path='/' exact/>
        <Route component={About} path='/about'/>
        <Route component={SinglePost} path='/post/:slug'/>
        <Route component={Posts} path='/posts'/>
        <Route component={Projects} path='/projects'/>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
