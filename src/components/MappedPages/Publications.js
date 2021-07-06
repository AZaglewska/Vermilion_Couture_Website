import React from "react";

const Publications = ({ publicationsData }) => {
  return (
    <div>
      <ul>
        {publicationsData.map((publicationsDataElement) => {
          const {
            id,
            name,
            images,
            articleFirst,
            articleSecond,
            articleThird,
          } = publicationsDataElement;

          return (
            <li key={id}>
              <h1>{name}</h1>
              <img src={images[0]} />
              <p>{articleFirst}</p>
              <img src={images[1]} />
              <p>{articleSecond}</p>
              <img src={images[2]} />
              <p>{articleThird}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Publications;
