
const EventComponent_01 = () => {
    // 핸들러 추가
    const handleClick = () => {console.log('clicked ...');}

    return <button onClick={handleClick}>onClick</button>
}

export default EventComponent_01