import "./Advantages.css";
import { useTranslation } from "react-i18next";

// Icons
import like from "../../assets/icons/like.png";
import speed from "../../assets/icons/speed.png";
import coin from "../../assets/icons/coin.webp";

const Advantages = () => {
  const { t } = useTranslation();

  const advantage = [
    {
      icon: like,
      title: t("advantageItems.titleFirst"),
      description: `Lorem ipsum dolor amet consectetur adipiscing dolore magna aliqua magna
enim`,
    },
    {
      icon: coin,
      title: t("advantageItems.titleSecond"),
      description: `Lorem ipsum dolor amet consectetur adipiscing dolore magna aliqua magna
enim`,
    },
    {
      icon: speed,
      title: t("advantageItems.titleThird"),
      description: `Lorem ipsum dolor amet consectetur adipiscing dolore magna aliqua magna
enim`,
    },
  ];
  return (
    <section className="advantages" id="advantages">
      <div className="container">
        <div className="sectionTitle">
          <h1>{t("section.advantageTitle")}</h1>
        </div>
        <div className="advantageRow flex alignCenter justifyBetween">
          {advantage.map((adv, index) => (
            <div className="advantageItem flex column alignCenter" key={index}>
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
