import { Routes, Route } from "react-router-dom";
import Header from "./Components/HeaderComponent/Header.jsx";
import Main from "./Components/Main/Main.jsx";
import { infoArray } from "./data.js";
import Chef from "./Components/ChefApp/Chef.jsx";
import ObjectUserState from "./Components/FormObject/ObjectUserState.jsx";
import Effect from "./Components/UseEffect/Effect.jsx";

function AppRoutes() {
  return (
    <>
      <Header />
      <Routes>
        {/*Define the route for each page */}
        <Route path="/" element={<Main info={infoArray} />} />
        <Route path="/Chef" element={<Chef />} />
        <Route path="/Form" element={<ObjectUserState />} />
        <Route path="/Meme_Generator" element={<Effect />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
