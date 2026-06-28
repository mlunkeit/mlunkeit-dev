import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Notes from "./pages/Notes";
import Imprint from "./pages/Imprint";
import Privacy from "./pages/Privacy";

export default function App()
{
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="notes/*" element={<Notes />} />

          <Route path="imprint" element={<Imprint />} />
          <Route path="privacy" element={<Privacy />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
