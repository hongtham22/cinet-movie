import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header.jsx";


function App() {


  return (
    <>
    <Header></Header>
    <Outlet></Outlet>
  </>
  )
}

export default App
