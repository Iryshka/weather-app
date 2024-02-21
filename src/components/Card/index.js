import CardCss from "./card.module.css";

const Card = ({ city, air, daytemp, nighttemp, temp }) => {
  return (
    <div className={CardCss.card}>
      <div className={CardCss.firstcolumn}>
        <p className={CardCss.city}>{city}</p>
        <span className={CardCss.air}>AQI {air}</span>
        <span className={CardCss.daytemp}>{daytemp}</span>/
        <span className={CardCss.nighttemp}>{nighttemp}</span>
      </div>
      <div className="secondcolumn">
        <p className={CardCss.temp}>{temp}</p>
      </div>
    </div>
  );
};

export default Card;
