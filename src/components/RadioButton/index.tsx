import React from "react";
import "./RadioButton.css";

type Selected = {
  title: string;
  icon: string;
};

type Props = {
  title: string;
  icon: string;
  setSelected: (arg: Selected) => void;
};

const RadioButton: React.FC<Props> = ({ title, icon, setSelected }) => {
  return (
    <label
      className="custom-radio"
      onClick={() => setSelected({ title, icon })}
    >
      <input type="radio" name="radio" />
      <span className="radio-btn">
        <i className="ti ti-check"></i>
        <div className="cell-icon">
          <i className={icon}></i>
          <h3>{title}</h3>
        </div>
      </span>
    </label>
  );
};

export default RadioButton;
