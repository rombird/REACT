import {useState, useEffect} from "react"

const MyComponent = () => {
    // state
    // let count = 0
    const [count, setCount] = useState(1) // useState Hook을 사용하여 상태(count)를 정의, useState(1) : 초기값이 1로 설정, setCount : count 상태값을 업데이트 하는 함수(이 함수를 호출해야 컴포넌트를 리렌더링)
    // handler
    const handleClick = () => { // 버튼 클릭 시 실행될 이벤트 핸들러 함수
        // count++;
        setCount(count+1) // 비동기함수
        // console.log(count);

    }

    // 최초 1회 실행(1회만 랜더링 이후 처리 Hook) !!!!!!!!!! 중요
    useEffect(()=>{
        console.log("init setting");
    }, [])


    // count state가 변경될 때마다 실행(변경될때마다 랜더링 이후 처리 Hook)
    useEffect(()=>{
        console.log("count state changed...", count);
    }, [count]) // count 값이 변경되었을 때 움직이는 consolelog
    return (
        <>
            <h2>MyComponent...</h2>
            <button onClick={handleClick}>Btn Count : {count}</button>
        </>
    )
}

export default MyComponent