import { getTimeTechVideos } from "../services/fakeVideosService";
import useSection from "../hooks/useSection";

export default function TimeTechKidsSection() {
  return useSection(getTimeTechVideos);
}
