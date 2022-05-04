import "./styles.css";
import { useEffect, useState } from "react";

// Since React components are simply JS functions
// you can create a component with any method that
// creates a JS function. Below creates a const Object
// Btn and assigns an arrow function to it.
const Btn = () => {
  // ^ Alternative to this method of creating a function
  // function Btn() {
  const [count, setCount] = useState(0);
  const [otherCount, setOtherCount] = useState(10);

  useEffect(() => {
    console.log(`First effect: ${count}`);
    // This will use the effect whenever any state changes
  });

  useEffect(() => {
    console.log(`Second effect: ${otherCount}`);
    // This will use the effect whenever the otherCount state changes
  }, [otherCount, count]);

  useEffect(() => {
    console.log(`Third effect`);
    // Because of the empty dependency array, this effect
    // will only run on component mount/ unmount.
  }, []);

  useEffect(() => {
    console.log(`Fourth effect`);
    function doDestroy() {
      console.log(`hello world`);
    }
    return doDestroy();
  }, []);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Your count is {count}</button>

      <button onClick={() => setOtherCount(otherCount - 1)}>
        The other count is {otherCount}
      </button>
    </>
  );
};

export default Btn;
