import React from "react";

export default function TvShow({ heading, videos = [] }) {
  return (
    <section className="tv-show">
      <h2 className="tv-show__heading">{heading}</h2>
      <article className="tv-show__videos">
        {videos.map((v) => (
          <article className="tv-show__video">
            <iframe
              className="video"
              width="100%"
              height="350"
              src={v.video}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; full-screen"
              allowfullscreen
            ></iframe>
            <p className="tv-show__video__title">{v.title}</p>
          </article>
        ))}
      </article>
    </section>
  );
}
