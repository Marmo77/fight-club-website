import { Route, Routes } from "react-router-dom";
import Test from "./components/test";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Test />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
