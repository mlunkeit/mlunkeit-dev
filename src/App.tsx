import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Hero from "./pages/Hero";
import Notes from "./pages/Notes";
import Imprint from "./pages/Imprint";
import Privacy from "./pages/Privacy";

export default function App()
{
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Hero />} />

          <Route path="notes/*" element={<Notes />} />

          <Route path="imprint" element={<Imprint />} />
          <Route path="privacy" element={<Privacy />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
