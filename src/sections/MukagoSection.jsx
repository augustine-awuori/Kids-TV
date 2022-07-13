import { getMukagoVideos } from "../services/fakeVideosService";
import useSection from "../hooks/useSection";

export default function MukagoSection() {
  return useSection(getMukagoVideos);
}
