/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import travel1 from "../img/travel-1.webp";

const TravelCard = ({ travel, section }) => {
  console.log("fetch card", travel.title);

  const styles = {
    imageDiv: css``,
  };

  return (
    <div className="cardDiv">
      <div className="imageDiv" css={styles.imageDiv}>
        <img src={travel1} alt="" />
      </div>
      <p css={styles.section}>{section}</p>

      {travel.map((element) => (
        <div className="blog-preview" key={element.id}>
          <h1 css={styles.cardHeader}>{element.title}</h1>
          <p css={styles.cardBoby}>{element.body}</p>
        </div>
      ))}
    </div>
  );
};

export default TravelCard;
