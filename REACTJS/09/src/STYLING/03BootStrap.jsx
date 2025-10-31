import { Button } from "react-bootstrap"
import "./03BootStrap.scss"

const Component_03 = () => {

    return (
        <div>
            <h3>부트스트랩 컴포넌트 사용하기</h3>
            <div>
                <Button variant="" className="btn btn-success">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="success">Success</Button>
                <Button variant="warning">Warning</Button>
                <Button variant="danger">Danger</Button>
                <Button variant="info">Info</Button>
                <Button variant="light">Light</Button>
                <Button variant="dark">Dark</Button>
                <Button variant="link">Link</Button>
            </div>
            <div className="text-primary">
                TEST
            </div>
        </div>
    )
}

export default Component_03