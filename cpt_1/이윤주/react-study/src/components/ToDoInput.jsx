import { useEffect, useState } from "react";

export default function ToDoInput() {
  const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    handleInputValueChnage();
    console.log(inputValue)
  }, [inputValue])

  const handleInputValueChnage = (e) => {
    setInputValue(e?.target?.value)
    
  };
  
  return (
    <>
      <input
        type="text"
        onChange={handleInputValueChnage}
        placeholder="오늘은 뭐할까"
      />
      <button type="submit">추가</button>
    </>
  );
}
