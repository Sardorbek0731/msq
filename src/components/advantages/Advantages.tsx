import "./Advantages.css";

const Advantages = () => {
  const advantage = [
    {
      icon: "43",
      title: "Yuqori sifat",
      description: `Lorem ipsum dolor amet consectetur adipiscing dolore magna aliqua
enim`,
    },
    {
      icon: "434",
      title: "Tezkor xizmat ko'rsatish",
      description: `Lorem ipsum dolor amet consectetur adipiscing dolore magna aliqua
enim`,
    },
    {
      icon: "545",
      title: "Yangicha dizaynlar",
      description: `Lorem ipsum dolor amet consectetur adipiscing dolore magna aliqua
enim`,
    },
  ];

  return (
    <div>
      <h1>
        <span className="firstLetter">A</span>fzalliklarimiz
      </h1>
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
