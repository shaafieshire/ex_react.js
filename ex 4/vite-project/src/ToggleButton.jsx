//// ToggleButton
import { useState  } from "react";
function ToggleButton() {
  const [isToggled, setIsToggled] = useState(true);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
   <>
    <button onClick={handleToggle}>
      {isToggled ? 'ON' : 'OFF'}
    </button>
    <p>{isToggled ? 'ToggleButton is OFF' : 'ToggleButton is NO'}</p>
    </>
  );
}

export default ToggleButton;
