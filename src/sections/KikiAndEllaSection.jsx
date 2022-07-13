import { getKikiAndElla } from "../services/fakeVideosService";
import useSection from "../hooks/useSection";

export default function KikiAndElla() {
  return useSection(getKikiAndElla);
}
