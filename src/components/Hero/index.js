import { Button, Card } from 'react-bootstrap';
import './index.css'

function Hero({
  imgSrc = "hahaha",
  text,
}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imgSrc} />
      <Card.Body>
        <Card.Text>
          {text}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

// Hero.defaultProps = {
//   imgSrc: "haha"
// }

// Hero.propTypes  = {
//   imgSrc: PropTypes.string,
//   text: PropTypes.string,
// }

export default Hero;
