import { useState } from "react";
import "./AdDesigner.css";

const AdDesigner = () => {
  let [flavor, setFlavor] = useState("Vanilla");
  let [lightTheme, setTheme] = useState(true);
  let addClass = "";
  if (!lightTheme) {
    addClass += " darkTheme";
  }
  let [fontSize, setFontSize] = useState(18);
  const styles = {
    fontSize: fontSize + "px",
  };
  return (
    <div className="AdDesigner">
      <h2>Ad Designer</h2>
      <div className={"voteForContainer" + addClass}>
        <p>Vote For</p>
        <h3 style={styles}>{flavor}</h3>
      </div>
      <p>What to Support</p>
      <button
        disabled={flavor === "Chocolate"}
        onClick={() => setFlavor((flavor = "Chocolate"))}
      >
        Chocolate
      </button>
      <button
        disabled={flavor === "Vanilla"}
        onClick={() => setFlavor((flavor = "Vanilla"))}
      >
        Vanilla
      </button>
      <button
        disabled={flavor === "Strawberry"}
        onClick={() => setFlavor((flavor = "Strawberry"))}
      >
        Strawberry
      </button>
      <p>Color Theme</p>
      <button
        disabled={lightTheme}
        onClick={() => setTheme((lightTheme = true))}
      >
        Light
      </button>
      <button
        disabled={!lightTheme}
        onClick={() => setTheme((lightTheme = false))}
      >
        Dark
      </button>
      <p>Font Size</p>
      <div className="font-container">
        <button onClick={() => setFontSize((fontSize -= 1))}>Down</button>
        <span>{fontSize}</span>
        <button onClick={() => setFontSize((fontSize += 1))}>Up</button>
      </div>
    </div>
  );
};

export default AdDesigner;
