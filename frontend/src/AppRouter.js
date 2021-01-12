import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Students from "./pages/Students";
import Transcripts from "./pages/Transcripts";

function AppRouter() {
  return (
    <Router>
      <div>
        <Route exact path='/' component={Home} />
        <Route path='/matakuliah' component={Courses} />
        <Route path='/mahasiswa' component={Students} />
        <Route path='/transkrip' component={Transcripts} />
      </div>
    </Router>
  );
}

export default AppRouter;
