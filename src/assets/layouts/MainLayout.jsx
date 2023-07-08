import Header from "./Header";
import Hero from "./Hero";
import { TechStack } from "./TechStack";
import { RecentProject } from "./RecentProject";
import { Footer } from "./Footer";

export const MainLayout = () => {
  return (
    <>
      <Header job="Software Engineer" name="Jason E." />
      <Hero discription=" Open Source Enthusiast | Lifelong Learner " />
      <TechStack />
      <RecentProject />
      <Footer />
    </>
  );
};
