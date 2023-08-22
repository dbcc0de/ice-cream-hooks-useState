import { useState } from "react";
import "./AdDesigner.css";
import Ad from "./Ad";

const AdDesigner = () => {
  let [flavor, setFlavor] = useState("Vanilla");
  let [lightTheme, setTheme] = useState(true);
  let addClass = "";
  if (!lightTheme) {
    addClass += " darkTheme";
  }
  let [fontSize, setFontSize] = useState(18);
  // const styles = {
  //   fontSize: fontSize + "px",
  // };
  return (
    <div className="AdDesigner">
      <h2>Ad Designer</h2>
      <Ad flavor={flavor} lightTheme={lightTheme} fontSize={fontSize} />
      <p>What to Support</p>
      <button
        disabled={flavor === "Chocolate"}
        onClick={() => setFlavor("Chocolate")}
      >
        Chocolate
      </button>
      <button
        disabled={flavor === "Vanilla"}
        onClick={() => setFlavor("Vanilla")}
      >
        Vanilla
      </button>
      <button
        disabled={flavor === "Strawberry"}
        onClick={() => setFlavor("Strawberry")}
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
        <button onClick={() => setFontSize((prev) => prev - 1)}>Down</button>
        {/* onClick={() => setFontSize((fontSize += 1))} */}
        <span>{fontSize}</span>
        <button onClick={() => setFontSize((prev) => prev + 1)}>Up</button>
      </div>
    </div>
  );
};

export default AdDesigner;
