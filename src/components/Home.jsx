import React, { useEffect, useState } from "react";

import { getSections } from "../services/fakeSectionsService";
import Card from "./Card";

export default function Home() {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    setSections(getSections);
  }, []);

  return (
    <section className="home">
      {sections.map(({ title, image, url }) => (
        <Card key={title} title={title} img={image} to={url} />
      ))}
    </section>
  );
}
