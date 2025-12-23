import { Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index path="/" element={<Home />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
