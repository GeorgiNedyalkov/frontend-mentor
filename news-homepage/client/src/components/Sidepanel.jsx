import React from "react";
import "./Sidepanel.css";

const Sidepanel = () => {
  return (
    <div className="sidepanel">
      <h2 className="sidepanel__title">New</h2>
      <ul className="sidepanel__list">
        <li className="sidepanel__list-item">
          <h4 className="sidepanel__list-item-title">
            Hydrogen VS Electric Cars
          </h4>
          <p className="sidepanel__list-item-text">
            Will hydrogen-fueled cars ever catch up to EVs?
          </p>
        </li>
        <hr />
        <li className="sidepanel__list-item">
          <h4 className="sidepanel__list-item-title">
            The Downsides of AI artistry
          </h4>
          <p className="sidepanel__list-item-text">
            What are the possible adverse effects of on-demand AI image
            generator?
          </p>
        </li>
        <hr />
        <li className="sidepanel__list-item">
          <h4 className="sidepanel__list-item-title">
            Is VC Funding Drying Up?
          </h4>
          <p className="sidepanel__list-item-text">
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means?
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Sidepanel;
