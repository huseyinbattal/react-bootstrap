import {Col, Container, Row, Stack} from "react-bootstrap";


const Lesson_6=()=>{

    const renderGrid=()=>{
        return(
            <>
                <Container fluid="md">
                    <Row>
                        <Col>1 of 1</Col>

                    </Row>
                </Container>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>

                <Container>
                    <Row>
                        <Col>1 of 2</Col>
                        <Col>2 of 2</Col>
                    </Row>
                    <Row>
                        <Col>1 of 3</Col>
                        <Col>2 of 3</Col>
                        <Col>3 of 3</Col>
                    </Row>
                </Container>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>


                <Container>
                    <Row>
                        <Col>1 of 3</Col>
                        <Col style={{background:"blue"}} md={4} sm={12} xs={2} lg={9} xl={3} xxl={6}>2 of 3 (wider)</Col>
                        <Col>3 of 3</Col>
                    </Row>
                    <Row>
                        <Col>1 of 3</Col>
                        <Col style={{background:"red"}} xxl={8}>2 of 3 (wider)</Col>
                        <Col>3 of 3</Col>
                    </Row>
                </Container>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>


                <Container>
                    <Row>
                        <Col md={4}>md=4</Col>
                        <Col style={{background:"red"}} md={{ span: 4, offset: 4 }}>{`md={{ span: 4, offset: 4 }}`}</Col>
                    </Row>
                    <Row>
                        <Col style={{background:"blue"}} md={{ span: 3, offset: 3 }}>{`md={{ span: 3, offset: 3 }}`}</Col>
                        <Col style={{background:"orange"}} md={{ span: 6, }}>{`md={{ span: 3, offset: 3 }}`}</Col>
                    </Row>
                    <Row>
                        <Col style={{background:"aliceblue"}} md={{ span: 6, offset: 3 }}>{`md={{ span: 6, offset: 3 }}`}</Col>
                    </Row>
                </Container>
            </>
        )
    }

    const renderStack=()=>{
        return(
            <>
                <Stack direction="horizontal" gap={3}>
                    <div className="bg-light border">First item</div>
                    <div className="bg-light border">Second item</div>
                    <div className="bg-light border">Third item</div>
                </Stack>

                <Stack gap={3}>
                    <div className="bg-light border">First item</div>
                    <div className="bg-light border">Second item</div>
                    <div className="bg-light border">Third item</div>
                </Stack>
            </>
        )
    }
    return(
        <>
            {
           /*     renderGrid()*/
            }
            {
                renderStack()
            }
        </>
    )
}
export default Lesson_6
