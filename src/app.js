import Button from "./components/Button/index.js";
import Input from "./components/Input/index";
import Logo from "./components/Logo/index";
import Card from "./components/Card/index";
import HomeCss from "./home.module.css";
const App = () => {
  const weather = [
    { city: "London", air: "53", daytemp: "25", nighttemp: "14", temp: "9" },
    { city: "New York", air: "45", daytemp: "28", nighttemp: "18", temp: "11" },
    { city: "Tokyo", air: "62", daytemp: "30", nighttemp: "22", temp: "17" },
    { city: "Sydney", air: "38", daytemp: "31", nighttemp: "24", temp: "19" },
  ];
  function onButtonClick() {
    console.log("click");
  }
  function onInputChange(event) {
    console.log(event.target.value);
  }
  return (
    <div className={HomeCss.home}>
      <Logo className={HomeCss.logo} />
      <h1 className={HomeCss.title}>Weather app</h1>
      <Button className={HomeCss.button} name="Let's go" />
      <Input />
      {weather.map((card, index) => (
        <Card
          key={index}
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

export default App;
