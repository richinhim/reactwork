import './App.css';
import { useEffect, useState } from 'react';

//import Sub1 from './Sub1';
//import Third from './aa/Third';
//import { num } from './Sub1';

function App() {
  const [data, setData] = useState(0);

  const download = () => {
    // 다운로드 받고 (통신)
    let downloadData = 5; // 가정
    setData(downloadData);
  };
  //실행시점:
  // (1) App()함수가 최초 실행될 때(마운트될 때, App() 그림이 최초 그려질 때) - 그림이 그려질때

  // (1) App() 그림이 최초 그려질 때
  // (2) 상태 별수가 변경될 때
  //
  useEffect(() => {
    console.log('useEffect 실행됨');

    download();
  }, []);

  return (
    <div>
      <h1> 데이터: {data}</h1>
      <button
        onClick={() => {
          setData(data + 1);
        }}
      >
        더하기
      </button>
    </div>
  );
}

export default App;
