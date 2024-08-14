import { FaGoogle } from "react-icons/fa";
import { Button } from "./button";

function GoogleOathButton() {
  function handleClick () {
    console.log(123);
  }
  
  return <Button className="w-full" onClick={()=> handleClick()}>
    <FaGoogle></FaGoogle>
  </Button>
}

export default GoogleOathButton;
