import { useState } from "react";
import "./Button.scss"; // You can create a separate CSS file for styling

const MovingButton = (props) => {
  const [position, setPosition] = useState(props.data.position);

  const handleMouseMove = (e) => {
   
    const randomX = Math.floor(Math.random() * 500) + 1; 
    const randomY = Math.floor(Math.random() * -500) + 1;

    setPosition({ x: randomX, y: randomY });
 
  };
  const clickHandler = () => {
  
    
    console.log(props)
    props.onClick()
  };

  return (
    <button
    type="button"
      className="moving-button"
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      onMouseMove={props.data.isMoving ? handleMouseMove: null}
      onClick={  clickHandler }
    >
     {props.data.text}
    </button>
  );
};

export default MovingButton;
