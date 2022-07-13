import { getNutritionVideos } from "../services/fakeVideosService";
import useSection from "../hooks/useSection";

export default function NutritionSection() {
  return useSection(getNutritionVideos);
}
