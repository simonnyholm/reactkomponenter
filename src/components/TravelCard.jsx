/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import travel1 from "../img/travel-1.webp";

const TravelCard = ({ travel, section }) => {
  console.log("fetch card", travel.title);

  const styles = {
    cardDiv: css`
      width: 30vw;
      border-radius: 8px;
    `,
    imageDiv: css`
      border-radius: 8px;
      width: 30vw;
    `,
    imageImg: css`
      width: 100%;
      height: 180px;
      object-fit: cover;
      object-position: bottom;
      border-radius: 8px 8px 0 0;
    `,
    articleDiv: css`
      padding: 25px 35px 25px 35px;
    `,
    section: css`
      font-size: 12px;
      color: #353573;
      text-transform: uppercase;
      letter-spacing: 3px;
      font-weight: 800;
      margin: 0 0 5px 0;
    `,
    cardHeader: css`
      font-size: 35px;
      font-weight: 800;
      color: #000000c9;
      margin: 0;
    `,
    cardBody: css`
      color: #1f152ccc;
      font-size: 17px;
      margin: 0;
    `,
  };

  return (
    <div className="cardDiv" css={styles.imageDiv}>
      <div className="imageDiv" css={styles.imageDiv}>
        <img src={travel1} alt="" css={styles.imageImg} />
      </div>

      <div className="articleDiv" css={styles.articleDiv} key={travel.id}>
        <p css={styles.section}>{section}</p>
        <h1 css={styles.cardHeader}>{travel.title}</h1>
        <p css={styles.cardBody}>{travel.body}</p>
      </div>
    </div>
  );
};

export default TravelCard;
