import HomeCss from "../../home.module.css";
import Logo from "components/Logo";
import Button from "components/Button";
import Input from "components/Input";
import Card from "components/Card";
import { Link } from "react-router-dom";
import weather from "../../mock";

const Main = () => {
  return (
    <div className={HomeCss.home}>
      <Logo className={HomeCss.logo} />
      <h1 className={HomeCss.title}>Weather app</h1>
      <Button className={HomeCss.button} name="Let's go" />
      <Input />
      {weather.map((card, index) => (
        <Link to={`/details/${card.id}`}>
          <Card
            key={card.id}
            city={card.city}
            air={card.air}
            daytemp={card.daytemp}
            nighttemp={card.nighttemp}
            temp={card.temp}
          />
        </Link>
      ))}
    </div>
  );
};

export default Main;
