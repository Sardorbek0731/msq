import "./Advantages.css";
import { useTranslation } from "react-i18next";

// Icons
import like from "../../assets/icons/like.png";
import speed from "../../assets/icons/speed.png";
import coin from "../../assets/icons/coin.png";

const Advantages = () => {
  const { t } = useTranslation();

  const advantage = [
    {
      icon: like,
      title: "Yuqori sifat",
      description: `Lorem ipsum dolor amet consectetur adipiscing dolore magna aliqua
enim`,
    },
    {
      icon: speed,
      title: "Qulay narx",
      description: `Lorem ipsum dolor amet consectetur adipiscing dolore magna aliqua
enim`,
    },
    {
      icon: coin,
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
              <img src={adv.icon} alt="Logo" />
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
