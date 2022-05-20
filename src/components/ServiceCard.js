const ServiceCard = ({ service, section }) => {
  return (
    <div>
      <div className="imageDiv">
        <img src="" alt="" className="imageImg" />
      </div>
      <h3>{service.title}</h3>
      <p>{service.body}</p>
    </div>
  );
};

export default ServiceCard;
