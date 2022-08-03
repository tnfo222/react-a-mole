import React, { useState } from 'react';
import Mole from './Mole';
import EmptySlot from './EmptySlot';

function MoleContainer (props) {
  let [theMole, setMole] = useState(false);
  
  function handleClick(e)  {
    props.setScore(props.score + 1)
    setMole(false)
  }
  let displayMole = theMole ? <Mole setScore={props.setScore} toggle={setMole} handleClick={handleClick} /> : <EmptySlot toggle={setMole}/>

  return (
    <div style={{'display': 'inline-block', 'width': '30vw'}}>
        {displayMole}
    </div>
  )
}

export default MoleContainer