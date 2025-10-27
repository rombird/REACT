import logo from './logo.svg';
import './App.css';

// 01_Basic.jsx에서 만들었던 component 연결
import {Element1, Element2, Element3, Element4, Element5} from "./02JSX/01_Basic"
import Basic_01 from "./02JSX/01_Basic"
import CustomComponent from "./02JSX/CustomComponent" // 기본 컴포넌트라 
import {Component_Event_01, Component_Event_02, Component_Event_03} from "./02JSX/03_Event" 


function App() {
  // State - 해당 컴포넌트내에서 유지시켜야할 값을 지정
  // props 한쪽에서 다른쪽으로 전달시킬 때 (컴포넌트가 내용전달할때)
  const footerState = "Footer State..."
  const headerState = "Header State..."
  return (
    <div className="App">
      {/* 가상돔 내에서는 class 가 아닌 className으로 지정 */}
      <header className="gnb" style={{height:"100px", backgroundColor:"red"}}>
        <h1>{headerState}</h1>
      </header>
      <main>
        <section>
          <h1>01_BASIC</h1>
          <div>
            <Element1 />
            <Element2 />
            <Element3 auth={"ROLE_USER"} name={"홍길동"} />
            <Element3 auth={"ROLE_ADMIN"} name={"티모"} />
            <hr/>
            <Element4 auth={"ROLE_USER"} name={"김범수"} />
            <hr/>
            {/* 내용을 배열형태로 전달 */}
            <Element5 list={["aaa", "bbb", "ccc", "ddd"]} /> 
            <hr/>
            <Basic_01.DefaultComponent1 />
            <Basic_01.DefaultComponent2 />
          </div>
        </section>
        <hr />
        <section>
          {/* default  component가 하나일 때는 바로 사용 가능 */}
          <h1>02_CUSTOM_COMPONENT</h1>
          <div>
            <CustomComponent />
          </div>
        </section>
        <hr />
        <section>
          <h1>03_EVENT_HANDLER</h1>
          <Component_Event_01 />
          <Component_Event_02 />
          <Component_Event_03 />
        </section>
        
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
