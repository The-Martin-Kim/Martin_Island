import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Story from "./Story";

function MainPage() {
    return (
        <Container>
            <Row>
                <Col><Intro/></Col>
                <Col style={{width: "700px", height: "700px"}}><img src="/island.png" alt="island" width={"700px"} height={"700px"}></img></Col>
            </Row>
            <Story/>
        </Container>
    );
}

function Intro() {
    return (
        <div style={{textAlign:'left', marginTop:"200px"}}>
            <h5 className="skranji-regular" style={{color:'#4796FF', fontSize:"32px"}}>Welcome to...</h5>
            <h1 className="skranji-regular" style={{fontSize:"96px"}}>Martin Island</h1>
            <p style={{fontSize:"21px"}} className="pretendard-regular">
                논리와 코딩의 섬,
                <br/>
                Martin Island로 여러분을 초대합니다.
                <br/>
                이 곳에서 무한의 상상을 마음껏 펼쳐보세요.
            </p>
            <Button style={{background:'#4796FF', fontSize:"21px", width:"195px", height: "51px"}} className="pretendard-regular">탐험하러 가기</Button>
        </div>
    );
}

export default MainPage;