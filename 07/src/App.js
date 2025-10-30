import logo from './logo.svg';
import './App.css';

import ParentComponent_01 from './07/01Parent';
import CustomProvider from './07/Provider'

function App() {
  
  return (
    <CustomProvider>
      {/* children이 Provider 영역 안으로 들어오게됨 (App의 영역이 Provider에서 지정했던 children안으로) */}
      <div className="App">
        <h1>컴포넌트 간 통신</h1>

        {/* 부모 -> 자식 전달(props) */}
        {/* 부모 <- 자식 전달(callback) */}
        <ParentComponent_01 />
        <hr />
        
        {/* 컴포넌트간의 데이터 공유 - ContextAPI */}


      </div>
    </CustomProvider>
  );
}

export default App;