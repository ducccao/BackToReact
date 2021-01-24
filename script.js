const react = require("react");
const reactDOM = require("react-dom");

reactDOM.render(<Hi name={"Duccao"} />);

const Hi = (props) => {
  return <h1>Hello {props.name}! </h1>;
};

const statelessSum = (a, b) => a + b;

let a = 0;
const statefulSum = () => a++;

console.log(statefulSum(2));
