import React from "react";

export const Paragrahp = () => {
  return (
    <div className="flex flex-col items-center py-5 ">
      <div
        className="max-w-lg rounded-lg bg-white pl-2  md:p-6 "
        style={{ boxShadow: "-8px 0px 10px -4px rgba(0,0,0,0.75)" }}
      >
        <p className="mb-4 text-lg">
          As a software developer, I am passionate about creating innovative and
          user-friendly digital experiences.
        </p>
        <p className="mb-4 text-lg">
          My tech stack includes React.js, Laravel, MySQL, Figma, and Tailwind.
        </p>
        <p className="mb-4 text-lg">
          With React.js, I develop dynamic and interactive user interfaces that
          deliver a seamless browsing experience. Leveraging its component-based
          architecture, I can build scalable and modular applications that
          prioritize performance and maintainability.
        </p>
        <p className="mb-4 text-lg">
          Laravel serves as my go-to PHP framework for back-end development. Its
          elegant syntax and extensive feature set allow me to build robust web
          applications with ease. I harness the power of Laravel to handle
          complex business logic and ensure secure data management with MySQL
          databases.
        </p>
        <p className="mb-4 text-lg">
          In the design process, I rely on Figma to bring my ideas to life. With
          its collaborative features, I can create visually stunning and
          intuitive user interfaces.
        </p>
        <p className="text-lg">
          To streamline the styling process, I utilize Tailwind CSS. Its
          utility-first approach enables me to rapidly build responsive and
          customizable designs, while maintaining consistency across projects.
        </p>
      </div>
    </div>
  );
};
