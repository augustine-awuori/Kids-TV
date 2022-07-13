import { Routes, Route } from "react-router-dom";

import {
  Friendship,
  FunAtTheDoctor,
  KikiAndElla,
  Mukago,
  Nutrition,
  TimeTechKids,
} from "./sections";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";

export default function App() {
  return (
    <section>
      <NavBar />
      <main className="container">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/friendship" element={<Friendship />} />
          <Route path="/fun-at-the-doctor" element={<FunAtTheDoctor />} />
          <Route path="/kiki-and-ella" element={<KikiAndElla />} />
          <Route path="/mukago" element={<Mukago />} />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/time-tech-kids" element={<TimeTechKids />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </section>
  );
}
