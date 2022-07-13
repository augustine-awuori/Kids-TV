import React from "react";

import TvShow from "../components/TvShow";
import UseApi from "../hooks/useApi";

export default function FriendshipSection(func) {
  const { data } = UseApi(func);

  return <TvShow heading={data.heading} videos={data.videos} />;
}
