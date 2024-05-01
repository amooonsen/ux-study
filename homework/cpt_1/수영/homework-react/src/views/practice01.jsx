import { useState, useEffect } from 'react'

// 시작하기
// main.jsx에서 App.jsx 파일 대신 해당 파일을 import 하고 적용시켜 주세요.

// 1. +- 버튼을 누르면 카운터가 증가되고 감소되는 로직을 적용해보세요
// 조건1) 0 미만일 때는 버튼이 disabled 되게 해주세요.
// 조건2) 카운터가 10을 초과하면 alert('더 이상 증가시킬 수 없습니다')를 띄워주세요.
// 힌트: useState에서 setter의 첫번째 콜백 인자는 이전값을 받아옵니다. ex) setCount((prev => prev))

// 2. 배열 items를 ul의 li에 순회시켜 보세요. 예시 마크업을 지우고 채워보세요.
// 조건1) 연차가 0이거나 직군이 없을 경우 '경력 없음' 텍스트를 노출시켜 주세요.
// 조건2) 나이가 20살 미만인 사람은 li에 backgroundColor를 '#aaa'로 주세요. 

// 3. 컴포넌트가 실행될 때, 즉 마운트 될 때 '<p>컴포넌트가 마운트 되면 사라지는 텍스트</p>' 를 삭제해주세요.
// 힌트: useEffect를 활용해보세요.
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
      occupation: '',
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
]

export default function Practice01() {
  // 1번문제
  const [count, setCount] = useState(0);
  function countUp() {
    count < 10 ? setCount(count + 1) : alert('더 이상 증가시킬 수 없습니다');
  }
  function countDown() {
    count > 0 ? setCount(count - 1) : null;
  }
  // 3번문제
  const [txt, setTxt] = useState(true);
  useEffect(()=>{
    setTxt(false)
  },[])
  return (
    <div>
      <div>
      <div>{count}</div>
      <button onClick={countUp}>+ 증가</button>
      <button onClick={countDown} disabled={count <= 0}>- 감소</button>
      </div>
      <ul>
      {/* 2번문제 */}
      {items.map(item => (
        <li key={item.name}>
          <div>{item.name}</div>
          <div>{item.age}</div>
          <div>
            {item.jobs.occupation !== '' && item.jobs.experienceYears !== 0 ? (
              <>
                <span>{item.jobs.occupation}</span>
                <span>{item.jobs.experienceYears}</span>
              </>
            ) : (
              <span>경력 없음</span>
            )}
          </div>
        </li>
      ))}
      </ul>
      <div>
      {txt && <p>컴포넌트가 마운트 되면 사라지는 텍스트</p>}
    </div>
    </div>
  )
}
