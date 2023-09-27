import Home from "./Home";
import Faculty from "./Faculty";
import Student from "./Student";
import About from "./About";
import Contact from "./Contact";
import Layout from "./Layout";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import UseState from "./UseState";
import UseEffect from "./UseEffect";
import { Calculator } from "./Calculator";
import { StudentById } from "./StudentById";
import { StudentADD } from "./StudentADD";
import StudentEdit from "./StudentEdit";
import CustomVideoPlayer from "./CustomVideoPlayer";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/Faculty" element={<Faculty />}></Route>
          <Route path="/Student" element={<Student />}></Route>
          <Route path="/Video" element={<CustomVideoPlayer />}></Route>

          <Route path="/Student/:id" element={<StudentById />}></Route>
          <Route path="/Student/Add" element={<StudentADD  />}></Route>
          <Route path="/Student/Edit/:id" element={<StudentEdit  />}></Route>

          <Route path="/useState" element={<UseState />}></Route>
          <Route path="/useEffect" element={<UseEffect />}></Route>
          <Route path="/useEffect/Calculator" element={<Calculator />}></Route>
          
          <Route path="/About" element={<About />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);

//npm install react-router-dom
//npm install react-bootstrap bootstrap
{/* <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9"
      crossorigin="anonymous"
    /> */}