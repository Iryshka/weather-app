// const Input = ({onInputChange}) => {
//     return (
//         <input onChange={onInputChange} type="text"/>
//     )
// }
import InputCss from "./input.module.css";
const Input = () => {
  return (
    <div className={InputCss.search}>
      <input
        className={InputCss.input}
        placeholder="Enter location"
        type="text"
      />
      <button className={InputCss.button}>
        <img
          src="../../assets/images/search.svg"
          alt=""
          className={InputCss.glass}
        />
      </button>
    </div>
  );
};

export default Input;
