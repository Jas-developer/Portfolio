import Header from "./Header";
import Hero from "./Hero";
import { TechStack } from "./TechStack";

export const MainLayout = () => {
  return (
    <>
      <Header job="Software Engineer" name="Jason E." />
      <Hero discription=" Open Source Enthusiast | Lifelong Learner " />
      <TechStack />
    </>
  );
};
