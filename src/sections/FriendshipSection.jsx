import { getFriendshipVideos } from "../services/fakeVideosService";
import useSection from "../hooks/useSection";

export default function FriendshipSection() {
  return useSection(getFriendshipVideos);
}
