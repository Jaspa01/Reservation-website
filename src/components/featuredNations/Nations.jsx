import Background from "../../media/nations/n10.jpg";
import "./Nations.css";
import NationCard from "./NationCard";
import { NATIONS } from "./data";

const Nations = () => {
  return (
    <div className="cards">
      <img src={Background} alt="" className="background" />
      <h3 className="cards-title">Feel at home wherever you go</h3>
      <div className="card">
        {NATIONS.map((nation) => (
          <NationCard data={nation} />
        ))}
      </div>
    </div>
  );
};

export default Nations;
