import { useState } from 'react'

export default function ToggleButton() {
  const [btnActive, setBtnActive] = useState(false)
  return (
    <>
      <button
        onClick={() => {
          setBtnActive(!btnActive);
        }}
      >
        버튼
      </button>
      <p>버튼 {btnActive ? "활성화" : "비활성화"} 상태입니다.</p>
    </>
  );
}
