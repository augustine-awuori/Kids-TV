import { getFunAtTheDoctor } from "../services/fakeVideosService";
import useSection from "../hooks/useSection";

export default function FunAtTheDoctor() {
  return useSection(getFunAtTheDoctor);
}
