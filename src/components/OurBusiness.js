import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import AccessControl from '../image/AccessControl.png';



export default function OurBusiness(){
    return(
        <>
        <div>
        
              <h1 className='OurBusiness_align new-Comp-top-margin App'>Our Business</h1>

              <div className='short-com-top-margin'>

              <Row xs={1} md={3} className="g-4">
      {Array.from({ length: 6 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src={AccessControl} />
            <Card.Body>
              <Card.Title >Intense Technologies</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
        </div>
        </div>
        
        </>
    )
}