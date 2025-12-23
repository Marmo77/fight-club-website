import { Route, Routes } from "react-router-dom";
import Test from "./components/Test";
import NotFound from "./components/NotFound";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index path="/" element={<Test />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
