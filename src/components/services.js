/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import useFetch from "../useFetch";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const styles = {
    sectionElement: css`
      display: flex;
    `,
  };

  const {
    data: services,
    isPending,
    error,
  } = useFetch("http://localhost:7000/services");

  console.log("fetch services", services);

  return (
    <section className="services" css={styles.sectionElement}>
      {isPending && <div>Indholdet indlæses...</div>}
      {services &&
        services.map((card) => (
          <ServiceCard service={card} section="Services" key={card.id} />
        ))}
      {error && <div>{error}</div>}
    </section>
  );
};

export default Services;
