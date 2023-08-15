import sedan from "../images/icon-sedans.svg";
import suv from "../images/icon-suvs.svg";
import luxury from "../images/icon-luxury.svg";

const Card = () => {
  const data = [
    {
      image: sedan,
      heading: "Sedans",
      paragraph: `Choose a sedan for its affordability and excellent fuel economy. Ideal
        for cruising in the city or on vour next road trip.`,
      background: "hsl(31, 77%, 52%)",
    },
    {
      image: suv,
      heading: "Suvs",
      paragraph: `Take an SUV for its spacious
      interior, power, and
      versatility. Perfect for your
      next family vacation and
      off-road adventures.`,
      background: "hsl(184, 100%, 22%)",
    },
    {
      image: luxury,
      heading: "Luxury",
      paragraph: `Cruise in the best car brands
      without the bloated prices.
      Enjoy the enhanced comfort
      of a luxury rental and arrive
      in style.`,
      background: "hsl(179, 100%, 13%)",
    },
  ];

  return (
    <div className="container">
      {data.map((e) => (
        <div
          className="card"
          style={{
            backgroundColor: `${e.background}`,
          }}
        >
          <div className="icon">
            <img src={e.image} alt={e.heading} />
          </div>
          <h1 className="heading">{e.heading}</h1>
          <p className="para">{e.paragraph}</p>
          <input
            type="button"
            className="button"
            value="Learn More"
            style={{
              color: e.background,
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default Card;
