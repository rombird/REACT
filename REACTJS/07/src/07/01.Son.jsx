import {useState, useEffect, useContext}  from "react"
import CustomContext from "./Context"

const Son_01 = ({user, onChangeName}) => {
    const [name, setName] = useState(user)

    const {globalState, setGlobalState} = useContext(CustomContext)

    const handleChange = (e) => {
        setName(e.target.value)
    }
    const handleClick = () => {
        onChangeName(name)
    }

    const handleChangeGlobal = (e) => {
        setGlobalState(e.target.value)
    }

    const handleClickGlobal = () => {
        onChangeName(globalState)
    }

    return (
        <>
            <h3>SON_01 COMPONENT</h3>
            젼역 변수 : {globalState} <br/>
            변경하기 : <input onChange={handleChangeGlobal} className="input" type="text" value={globalState} /> 
            <button onClick={handleClickGlobal}>전역변수의 부모상태값 변경</button>
            <br/>
            <br/>
            자식 상태값 name : {name} <br />
            변경하기 : <input onChange={handleChange} className="input" type="text" value={name} /> 
            <button onClick={handleClick}>부모상태값 변경하기</button>
            {/* Parent에서 지정한 user :  name : {user} */}
            {/* 자식 -> 부모로 이동 */}
        </>
    )
}

export default Son_01