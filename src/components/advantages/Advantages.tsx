import "./Advantages.css";
import { AttachMoney, ThumbUpAlt, Timer } from "@mui/icons-material";
import { useTranslation } from "react-i18next";

const Advantages = () => {
  const { t } = useTranslation();

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
    <section className="advantages">
      <div className="container">
        <div className="sectionTitle">
          <h1>{t("section.advantageTitle")}</h1>
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
    </section>
  );
};

export default Advantages;
