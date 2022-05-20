/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import LeisureCard from "./LeisureCard";
import useFetch from "../useFetch";

const Leisure = () => {
  const styles = {
    sectionElement: css`
      background-color: #ffffff;
      margin: 20px;
      border-radius: 8px;
    `,
  };

  const {
    data: leisure,
    isPending,
    error,
  } = useFetch("http://localhost:7000/leisure");

  console.log(leisure);

  return (
    <section className="leisure" css={styles.sectionElement}>
      {isPending && <div>Indholdet indlæses...</div>}
      {leisure &&
        leisure.map((card) => (
          <LeisureCard leisure={card} section="Leisure" key={card.id} />
        ))}
      {error && <div>{error}</div>}
    </section>
  );
};

export default Leisure;
