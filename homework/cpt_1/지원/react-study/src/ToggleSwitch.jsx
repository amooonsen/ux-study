import React, { useState } from 'react';

const ToggleSwitch = () => {
  const [isActive, setisActive] = useState(false); // [상태값, 상태값 업데이트할수있는 함수] 초기값 false

  const handleToggle = () => {
    setisActive(!isActive);
  };
  

  return (
    <div>
      <label className="switch">
        <input type="checkbox" onChange={handleToggle}/>
      </label>
      {isActive ? <p>활성화</p> : <p>비활성화</p>}
    </div>
  );
};

export default ToggleSwitch;