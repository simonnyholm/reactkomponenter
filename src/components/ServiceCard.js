/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { MdOutlineDeliveryDining } from "react-icons/md";
import { FiArchive } from "react-icons/fi";
import { BsJournalCheck } from "react-icons/bs";
import { MdPhone } from "react-icons/md";

const ServiceCard = ({ service, section }) => {
  const styles = {
    serviceCard: css``,
  };

  return (
    <div
      css={styles.serviceCard}
      style={{ backgroundColor: service.background }}
    >
      <div className="imageDiv">
        {service.image === "MdOutlineDeliveryDining" && (
          <MdOutlineDeliveryDining />
        )}
        {service.image === "FiArchive" && <FiArchive />}
        {service.image === "BsJournalCheck" && <BsJournalCheck />}
        {service.image === "MdPhone" && <MdPhone />}
      </div>
      <h3>{service.title}</h3>
      <p>{service.body}</p>
    </div>
  );
};

export default ServiceCard;
