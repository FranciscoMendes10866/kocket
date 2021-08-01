import React, { useState } from "react";
import "./App.css";

import { RadioButton } from "./components";

type State = {
  title: string;
  icon: string;
};

const App: React.FC = () => {
  const cellList = [
    {
      title: "Github",
      icon: "ti ti-brand-github",
    },
    {
      title: "Gitlab",
      icon: "ti ti-brand-gitlab",
    },
    {
      title: "Bitbucket",
      icon: "ti ti-brand-bitbucket",
    },
  ];
  const [selected, setSelected] = useState<State>({
    title: "",
    icon: "",
  });
  return (
    <div className="container">
      <h2>What repository do you use?</h2>
      <div className="radio-buttons">
        {cellList.map((el, i) => (
          <RadioButton
            key={i}
            title={el.title}
            icon={el.icon}
            setSelected={setSelected}
          />
        ))}
      </div>
      <>{JSON.stringify(selected, null, " ")}</>
    </div>
  );
};

export default App;
