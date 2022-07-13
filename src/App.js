import NavBar from "./components/NavBar";
import TvShows from "./components/TvShows";

export default function App() {
  return (
    <section>
      <NavBar />
      <main className="container">
        <TvShows />
      </main>
    </section>
  );
}
