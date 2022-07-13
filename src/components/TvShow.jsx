import React from "react";

export default function TvShow({ heading, videos = [] }) {
  return (
    <section className="tv-show">
      <h2 className="tv-show__heading">{heading}</h2>
      <article className="tv-show__videos">
        {videos.map((v) => (
          <article className="tv-show__video">
            <video src={v.video} controls className="video" draggable="false" />
            <p className="tv-show__video__title">{v.title}</p>
          </article>
        ))}
      </article>
    </section>
  );
}
