import Home from "./components/Home";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <section>
      <NavBar />
      <main className="container">
        <Home />
      </main>
    </section>
  );
}
