/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import leisure1 from "../img/leisure-1.jpg";
import leisure2 from "../img/leisure-2.jpg";
import leisure3 from "../img/leisure-3.jpg";
import leisure4 from "../img/leisure-4.jpg";
import { useState } from "react";

const LeisureCard = ({ leisure, section }) => {
  console.log("fetch card", leisure.title);

  const [ImgSrc, setImgSrc] = useState(leisure1);

  const styles = {
    cartDiv: css`
      display: flex;
      gap: 5px;
      justify-content: space-between;
      width: 58vw;
      padding: 35px;
    `,
    imageImg: css`
      width: 100%;
      height: 350px;
      object-fit: cover;
      object-position: bottom;
      border-radius: 8px;
    `,
    imageDiv: css`
      width: 24vw;
    `,
    articleDiv: css`
      width: 25vw;
    `,
    section: css`
      color: white;
      background-color: #3865c7;
      text-align: center;
      font-size: 12px;
      padding: 4px;
      border-radius: 20px;
      width: 85px;
      height: 25px;
      margin-left: auto;
      text-transform: uppercase;
      letter-spacing: 3px;
      font-weight: 800;
    `,
    header: css`
      font-size: 45px;
      font-weight: 800;
      color: #000000c9;
      margin: 40px 0 0 0;
    `,
    thumbnailsDiv: css`
      display: flex;
    `,
    thumbnailImg: css`
      width: 100%;
      height: 90px;
      object-fit: cover;
      object-position: bottom;
      border-radius: 8px;
    `,
    thumbnailDiv: css`
      width: 8vw;
      margin: 10px 10px 0 0;
      cursor: pointer;
    `,
  };

  return (
    <div className="cardDiv" css={styles.cartDiv}>
      <>
        <div css={styles.imageDiv}>
          <img css={styles.imageImg} src={ImgSrc} alt="" />
        </div>
        <div className="articleDiv" css={styles.articleDiv}>
          <div css={styles.section}>{leisure.section}</div>
          <h1 css={styles.header}>{leisure.title}</h1>
          <p css={styles.p}>{leisure.body}</p>
          <div className="thumnailsDiv" css={styles.thumbnailsDiv}>
            <div css={styles.thumbnailDiv}>
              <img
                onClick={(event) => {
                  setImgSrc(leisure2);
                }}
                css={styles.thumbnailImg}
                src={leisure2}
                alt=""
              />
            </div>
            <div css={styles.thumbnailDiv}>
              <img
                onClick={(event) => {
                  setImgSrc(leisure3);
                }}
                css={styles.thumbnailImg}
                src={leisure3}
                alt=""
              />
            </div>
            <div css={styles.thumbnailDiv}>
              <img
                onClick={(event) => {
                  setImgSrc(leisure4);
                }}
                css={styles.thumbnailImg}
                src={leisure4}
                alt=""
              />
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default LeisureCard;

/*         
      <div className="imageDiv" css={styles.imageDiv}>
        <img src={leisure1} alt="" />
      </div>
      <p css={styles.section}>{section}</p>
<div className="blog-preview" key={element.id}>
          <h1 css={styles.cardHeader}>{element.title}</h1>
          <p css={styles.cardBody}>{element.body}</p>
        </div>
    */
