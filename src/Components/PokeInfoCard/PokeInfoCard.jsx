import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './PokeInfoCard.css'

function PokeInfoCard(props) {
    let name = props.name;
    let img = props.img;
    let types = props.types;
  return (
    <Card className='card-pokemon'>
      <Card.Img src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
         
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        {types.map((t, i) => (
          <ListGroup.Item key={i}>{t}</ListGroup.Item>
        ))}
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default PokeInfoCard;