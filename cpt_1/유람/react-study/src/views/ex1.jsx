import React, { useEffect, useState } from "react";

const items = [
  {
    name: "cho",
    age: 27,
    jobs: {
      occupation: "developer",
      experienceYears: 3,
    },
  },
  {
    name: "jhon",
    age: 32,
    jobs: {
      occupation: "developer",
      experienceYears: 6,
    },
  },
  {
    name: "miru",
    age: 16,
    jobs: {
      occupation: "student",
      experienceYears: 0,
    },
  },
];

const Practice01 = () => {

  const [count, setCount] = useState(0);

    const handleIncrement = () => {
        if (count < 10) {
        setCount(prevCount => prevCount + 1);
        } else {
        alert('더 이상 증가시킬 수 없습니다');
        }
    };

    const handleDecrement = () => {
        if (count > 0) {
        setCount(prevCount => prevCount - 1);
        }
    };


  useEffect(() => {
    // 컴포넌트가 마운트될 때 실행되는 작업
    const mountText = document.getElementById("mountText");
    if (mountText) {
      mountText.style.display = "none"; // 마운트된 후 해당 텍스트를 숨깁니다.
    }
  }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때만 실행되도록 합니다.

  return (
    <div>
      <div>
      <div>{count}</div>
      <button onClick={handleIncrement} disabled={count >= 10}>
        + 증가
      </button>
      <button onClick={handleDecrement} disabled={count <= 0}>
        - 감소
      </button>
      </div>
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            style={{ backgroundColor: item.age < 20 ? "#aaa" : "inherit" }}
          >
            <div>{item.name}</div>
            <div>{item.age}</div>
            {item.jobs.occupation || item.jobs.experienceYears !== 0 ? (
              <>
                <div>{item.jobs.occupation}</div>
                <div>{item.jobs.experienceYears}</div>
              </>
            ) : (
              <div>경력 없음</div>
            )}
          </li>
        ))}
      </ul>
      <p id="mountText">컴포넌트가 마운트 되면 사라지는 텍스트</p>
    </div>
  );
};

export default Practice01;