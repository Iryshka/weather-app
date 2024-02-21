import ButtonCss from "./button.module.css";
const Button = ({ name }) => {
  return <button className={ButtonCss.button}>{name}</button>;
};

export default Button;
