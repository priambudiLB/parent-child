import './index.css'

function Hero({
  imgSrc = "hahaha",
  text,
}) {
  return (
    <>
      <img width={300} src={imgSrc} />
      <p>{text}</p>
    </>
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
