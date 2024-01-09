import { useState } from "react";
import Button from "../components/ui-elements/Button";

const Home = () => {
  const [count, setCount] = useState(0);

  // const minusHandler = () => { count === 0 ? setCount(0) : setCount(count - 1) }

  const plusHandler = () => { 
   // setCount(count + 1) 
   alert('Button Clicked')
  }
  
  return (
    <>
      <Button title="Add to Cart" event={plusHandler} />
    </>
  )
}

export default Home;
