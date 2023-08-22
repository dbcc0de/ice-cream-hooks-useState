import "./Ad.css";

interface Props {
  flavor: string;
  lightTheme: boolean;
  fontSize: number;
}

const Ad = ({ flavor, lightTheme, fontSize }: Props) => {
  return (
    <div className={`Ad${!lightTheme ? " darkTheme" : ""}`}>
      <p>Vote For</p>
      <h3 style={{ fontSize: fontSize + "px" }}>{flavor}</h3>{" "}
    </div>
  );
};

export default Ad;
