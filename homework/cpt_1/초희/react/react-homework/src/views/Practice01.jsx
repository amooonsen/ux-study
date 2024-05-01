import React, { useState, useEffect } from "react";

const items = [
  {
    name: 'cho',
    age: 27,
    jobs: {
      occupation: 'devloper',
      experienceYears: 3
    }
  },
  {
    name: 'jhon',
    age: 32,
    jobs: {
      occupation: 'devloper',
      experienceYears: 6
    }
  },
  {
    name: 'miru',
    age: 16,
    jobs: {
      occupation: 'student',
      experienceYears: 0
    }
  },
];

export default function Practice01() {
  const [count, setCount] = useState(0);

  // 과제1 : 카운터 만들기
  function countUp() {
    if (count < 10) {
      setCount(count + 1);
    } else {
      alert('더 이상 증가시킬 수 없습니다');
    }
  }
  
  function countDown() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  // 과제3 : 컴포넌트 주기 알아보기
  useEffect(() => {
    // 컴포넌트가 마운트 될 때 실행
    const textElement = document.getElementById('mountText');
    if (textElement) {
      textElement.remove();
    }
  }, []);

  return (
    <div>
      <div>
        <div>{count}</div>
        <button onClick={countUp}>+ 증가</button>
      <button onClick={countDown} disabled={count <= 0}>- 감소</button>
      </div>
      <ul>
        <li>
          <div>성명</div>
          <div>나이</div>
          <div>
            <span>직군</span>
            <span>연차</span>
          </div>
        </li>
        {/* 과제2 : 배열 순회시켜보기 */}
        {items.map((item, index) => (
          <li key={index} style={{ backgroundColor: item.age < 20 ? '#aaa' : 'transparent' }}>
            <div>{item.name}</div>
            <div>{item.age}</div>
            <div>
              <span style={{ color: item.jobs.occupation ? 'inherit' : 'red', display: 'block' }}>{item.jobs.occupation || '경력 없음'}</span>
              <span style={{ color: item.jobs.experienceYears ? 'inherit' : 'red', display: 'block' }}>{item.jobs.experienceYears || '경력 없음'}</span>
            </div>
          </li>
        ))}
      </ul>
      <p id="mountText">컴포넌트가 마운트 되면 사라지는 텍스트</p>
    </div>
  );
}
