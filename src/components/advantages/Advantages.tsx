import "./Advantages.css";
import { AttachMoney, ThumbUpAlt, Timer } from "@mui/icons-material";

const Advantages = () => {
  const advantage = [
    {
      icon: <ThumbUpAlt className="Icon" />,
      title: "Yuqori sifat",
      description: `Lorem ipsum dolor amet consectetur adipiscing dolore magna aliqua
enim`,
    },
    {
      icon: <AttachMoney className="Icon" />,
      title: "Qulay narx",
      description: `Lorem ipsum dolor amet consectetur adipiscing dolore magna aliqua
enim`,
    },
    {
      icon: <Timer className="Icon" />,
      title: "Yuqori tezlik",
      description: `Lorem ipsum dolor amet consectetur adipiscing dolore magna aliqua
enim`,
    },
  ];

  return (
    <div>
      <div className="title"> 
        <h1>
          <span className="firstLetter">A</span>fzalliklarimiz
        </h1>
      </div>
      <div className="OurAdvantagesRow">
        {advantage.map((adv, index) => (
          <div className="IconBox" key={index}>
            <div className="IconWrap">{adv.icon}</div>
            <h4 className="title">{adv.title}</h4>
            <p className="description">{adv.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Advantages;
