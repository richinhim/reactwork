import { useState } from 'react';
import './App.css';
import Sub from './Sub';

function App() {
  // let number = 1; //상
  const [number, setNumber] = useState(2); // React안에 hooks 라이브러리 상태값이 됨.

  const add = () => {
    //number++;
    setNumber(number + 1); // 리엑트한테 number 값 변경할께라고 요청
    console.log('add', number);
  };

  //랜더링 시점 = 상태값 변경
  return (
    <div>
      <h1>숫자: {number}</h1>
      <button onClick={add}>더하기</button>
      <Sub />
    </div>
  );
}

export default App;
