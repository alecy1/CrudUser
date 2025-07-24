import * as React from "react";
import { Routes, Route } from "react-router-dom";
import {LunaSol} from "./crudStaff.js";

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LunaSol/>}/>
      </Routes>
    </>
  );
}
