import TravelCard from "./TravelCard";
import useFetch from "../useFetch";

const Travel = () => {
  const {
    data: travel,
    isPending,
    error,
  } = useFetch("http://localhost:7000/travel");

  console.log(travel);

  return (
    <section className="travel">
      {isPending && <div>Indholdet indlæses...</div>}
      {travel && <TravelCard travel={travel} section="Travel" />}
      {error && <div>{error}</div>}
    </section>
  );
};

export default Travel;
