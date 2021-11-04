import "./App.css";
import SideMenu from "./components/SideMenu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import About from "./components/About";
import { useState } from "react";

const Course = () => {
  return <h1>This is Course</h1>;
}

const Video = () => {
  return <h1>This is Video</h1>;
}

const Social = () => {
  return <h1>This is Social</h1>;
}

const Contact = () => {
  return <h1>This is Contact</h1>;
}

function App() {

  const [inactive, setInactive] = useState(false)

  return (
    <div className="App">
      <Router>
        <SideMenu
          onCollapse={(inactive) => {
            console.log(inactive);
            setInactive(inactive)
          }}
        />

        <div className={`container ${inactive ? 'inactive' : ''}`}>
          <h1>menu</h1>
          <Routes>
            <Route path={"/"}
            element={<Dashboard />}
            >
              
            </Route>
            <Route path={"/about"} element={<About />}>
              
              </Route>
            <Route path={"/content/course"} element={<Course />}>
              
            </Route>
            <Route path={"/content/videos"} element={<Video />}>{/* <Content /> */}</Route>
            <Route path={"/content/social"} element={<Social />}>{/* <Content /> */}</Route>
        
            <Route path={"/contact"} element={<Contact />}>{/* <Contact /> */}</Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
