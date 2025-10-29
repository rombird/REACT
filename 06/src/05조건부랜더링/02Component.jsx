
const Component_02 = ({isAuth}) => {


    // {isAuth? () : ()} -> 여러줄 쓸 경우 소괄호로 묶어주고! -> 상위태그도 반드시!! 

    // 한줄로 작업
    // return isAuth?<p>로그인 확인</p>:<p>로그인실패</p>

    // 여러줄로 작업
    return (
        <>
            {isAuth? (
                <>
                    <p>로그인 완료</p>
                    <p>환영합니다</p>
                </>
                
                ) : (
                <>
                    <p>로그인 실패</p>
                    <p>로그인을 하세요 -!</p>
                </>    
                
                )}

        </>
        
    )

    
    
}

export default Component_02