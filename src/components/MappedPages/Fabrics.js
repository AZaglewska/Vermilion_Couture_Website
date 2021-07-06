import React from "react";

const Fabrics = ({ fabricsData }) => {
  return (
    <div>
      <ul>
        {fabricsData.map((fabricsDataElement) => {
          const { id, name, images, description } = fabricsDataElement;

          return (
            <li key={id}>
              <h1>{name}</h1>
              <img src={images} />
              <p>{description}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Fabrics;
