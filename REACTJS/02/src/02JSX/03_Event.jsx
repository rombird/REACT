// 01
// 함수명 그대로 사용(외부에서 만든 함수를 컴포넌트로)
function handleClick_01(){
    console.log("clicked_01...");
}


export function Component_Event_01(){
    return (
        <div>
            <h2>Component_Event_01...</h2>
            <button onClick={handleClick_01}>CLICK_ME</button>
        </div>
    )
}

export function Component_Event_02(){
    // State

    // Handler
    function handleClick_02(){
    console.log("clicked_02...");
    }

    // 상태값과 처리값을 컴포넌트 내부에서 다 처리해줌
    return (
        <div>
            <h2>Component_Event_02...</h2>
            <button onClick={handleClick_02}>CLICK_ME</button>
        </div>
    )
}

export function Component_Event_03(){
    // State

    // Handler
    function handleKeyDown(event){
    console.log("clicked_03...", event.target.value);
    }

    return (
        <div>
            <h2>Component_Event_03...</h2>
            <input type="text" onKeyDown={handleKeyDown}></input>
        </div>
        // 키보드가 내려갈때 마다 동작 감지됨
    )
}