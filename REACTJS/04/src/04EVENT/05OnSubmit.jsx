const EventComponent_05 = () => {
    
    const handleSubmit = (e) => {
        e.preventDefault(); // 이동하지 않고 submit이 내부에서 유지되도록 (전송 버튼을 누르면 url test.jsp로 변경 X)
        console.log("submit...");
    }

    return (
        <div>
            <form onSubmit={handleSubmit} action="/test.jsp">
                <input type="text" /><br/>
                <button type="submit">전송</button>
            </form>

        </div>
    )
}

export default EventComponent_05