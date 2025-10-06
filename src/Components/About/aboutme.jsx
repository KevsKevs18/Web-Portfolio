import React, { useState } from "react";

const aboutme = () => {
  const [isExpanded, setExpanded] = useState(false);

  return (
    <div className="m-4">
      <div className={`transition-all ${isExpanded ? "" : "line-clamp-3"}`}>
        <p className="font-Inter text-[1rem]">
          I'm a Front-End Developer with a designer's eye, turning complex
          requirements into sleek, intuitive Uls using React, Ant Design, MUI,
          Styled Components, and GraphQL. With a background in graphic design
          and photography, I don't just code-l craft visual stories that
          resonate and endure. Currently, I'm leading the frontend development
          of a Human Resource Information System (HRIS) from scratch. Working
          alongside a perfection-driven project manager, I translate
          pixel-perfect designs into responsive, production ready interfaces.
          Outside the dev world, I get creative through photography and dabble
          in affiliate marketing. I like learning new things, experimenting, and
          staying sharp in and out of tech. Let's connect if you're passionate
          about design-driven development, component systems, or building
          meaningful digital products.
        </p>
      </div>
      <button
        className="text-blue-500 cursor-pointer hover:underline"
        onClick={() => setExpanded(!isExpanded)}
      >
        {isExpanded ? "see less" : "see more.."}
      </button>
    </div>
  );
};

export default aboutme;
