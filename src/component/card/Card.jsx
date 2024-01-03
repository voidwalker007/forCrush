
import MovingButton from '../button/Button'
import './Card.scss'
import Image1 from "../../assets/dudu.gif"
import Image2 from "../../assets/dudu_dance.gif"
import { useState } from 'react'
export const Card = () => {
    const [value, setValue] = useState({showImg: false,
    showText:false})
    const yesBtn ={
        position:{x:-150,y:10},
        isMoving:false,
        text:'Yes',
        alert:true
    }
  const noBtn ={
    position:{x:10,y:10},
    isMoving:true,
        text:'No',
        alert:false
    }

    const handleYesButtonClick = () => {
        setValue({
            showText: true,
            showImg: true
          });
        console.log("btn click",showImg)
      };
  return (
    <div className='card' >
<h1>{!value.showText ?  "Do You LOVE Me?" : "Love you too "} </h1>
<div>
    {!value.showImg  ? <img src={Image1} alt='image' /> : 
    <img src={Image2} alt='image' />}

</div>
< MovingButton data={yesBtn} onClick={handleYesButtonClick}/>
< MovingButton data={noBtn} />

    </div>
  )
}
