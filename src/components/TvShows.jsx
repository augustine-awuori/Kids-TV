import React, { useEffect, useState } from "react";

import { getSections } from "../services/fakeVideosService";
import TvShow from "./TvShow";

export default function TvShows() {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    setSections(getSections());
  }, []);

  return (
    <section>
      {sections.map((section) => (
        <TvShow
          key={section.heading}
          heading={section.heading}
          videos={section.videos}
        />
      ))}
    </section>
  );
}
