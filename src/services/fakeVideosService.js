import friendship from "../assets/videos/friendship/friendship.mp4";
import funAtTheDoctors from "../assets/videos/fun_at_the_doctors/fun_at_the_doctors.mp4";
import kikiEpisode1 from "../assets/videos/kiki&Ella/episode_1.mp4";
import kikiEpisode2 from "../assets/videos/kiki&Ella/episode_2.mp4";
import mukangoEpisode1 from "../assets/videos/mukango/episode_1.mp4";
import mukangoEpisode2 from "../assets/videos/mukango/episode_2.mp4";
import nutrition from "../assets/videos/nutrition/nutrition.mp4";
import timeTechKids from "../assets/videos/time_tech-kids/time_tech_kids.mp4";

const getTimeTechVideos = () => ({
  heading: "Time Tech Kids",
  videos: [{ title: "", video: timeTechKids }],
});

const getNutritionVideos = () => ({
  heading: "Sinza - Learn about nutrition",
  videos: [{ title: "", video: nutrition }],
});

const getMukagoVideos = () => ({
  heading: "Mukango",
  videos: [
    { title: "Episode 1", video: mukangoEpisode1 },
    { title: "Episode 2", video: mukangoEpisode2 },
  ],
});

const getFriendshipVideos = () => ({
  heading: "Learn About Friendship",
  videos: [{ title: "", video: friendship }],
});

const getFunAtTheDoctor = () => ({
  heading: "Fun at the Doctors",
  videos: [{ title: "", video: funAtTheDoctors }],
});

const getKikiAndElla = () => ({
  heading: "Kiki & Ella",
  videos: [
    { title: "Episode 1", video: kikiEpisode1 },
    { title: "Episode 2", video: kikiEpisode2 },
  ],
});

export {
  getTimeTechVideos,
  getFriendshipVideos,
  getFunAtTheDoctor,
  getKikiAndElla,
  getMukagoVideos,
  getNutritionVideos,
};
