import HomeCss from "../../home.module.css";
import Logo from "components/Logo";
import Button from "components/Button";
import Input from "components/Input";
import Card from "components/Card";

const Main = () => {
  const weather = [
    {
      id: 1,
      city: "London",
      air: "53",
      daytemp: "25",
      nighttemp: "14",
      temp: "9",
    },
    {
      id: 2,
      city: "New York",
      air: "45",
      daytemp: "28",
      nighttemp: "18",
      temp: "11",
    },
    {
      id: 3,
      city: "Tokyo",
      air: "62",
      daytemp: "30",
      nighttemp: "22",
      temp: "17",
    },
    {
      id: 4,
      city: "Sydney",
      air: "38",
      daytemp: "31",
      nighttemp: "24",
      temp: "19",
    },
  ];
  return (
    <div className={HomeCss.home}>
      <Logo className={HomeCss.logo} />
      <h1 className={HomeCss.title}>Weather app</h1>
      <Button className={HomeCss.button} name="Let's go" />
      <Input />
      {weather.map((card, index) => (
        <Card
          key={card.id}
          city={card.city}
          air={card.air}
          daytemp={card.daytemp}
          nighttemp={card.nighttemp}
          temp={card.temp}
        />
      ))}
    </div>
  );
};

export default Main;
