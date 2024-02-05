import Loder from "../assets/loader.svg";
import './Components Css/Loader.css';

const Loader = ({ title }) => (
  <div className="Loader">
    <img src={Loder} alt="" />
    <h2>{title}</h2>
  </div>
);

export default Loader;
