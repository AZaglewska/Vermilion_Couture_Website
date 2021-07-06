import React from "react";

const About = ({ designerData }) => {
  return (
    <div>
      <ul>
        {designerData.map((designerDataElement) => {
          const { id, name, images, articleFirst, articleSecond } =
            designerDataElement;

          return (
            <li key={id}>
              <h1>{name}</h1>
              <img src={images[0]} />
              <img src={images[1]} />
              <p>{articleFirst}</p>
              <p>{articleSecond}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default About;
