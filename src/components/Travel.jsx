/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import TravelCard from "./TravelCard";
import useFetch from "../useFetch";

const Travel = () => {
  const styles = {
    sectionElement: css`
      background-color: #ffffff;
      margin: 20px;
      border-radius: 8px;
    `,
  };

  const {
    data: travel,
    isPending,
    error,
  } = useFetch("http://localhost:7000/travel");

  console.log(travel);

  return (
    <section className="travel" css={styles.sectionElement}>
      {isPending && <div>Indholdet indlæses...</div>}
      {travel &&
        travel.map((card) => (
          <TravelCard travel={card} section="Travel" key={card.id} />
        ))}
      {error && <div>{error}</div>}
    </section>
  );
};

export default Travel;
