import { useState } from 'react';
import './App.css';
import Hero from './components/Hero';
import Input from './components/Input';

const data = {
  imgSrc: "https://dibimbing.id/_next/image?url=https%3A%2F%2Fdibimbing-cdn.sgp1.cdn.digitaloceanspaces.com%2FEza-Desktop.webp&w=2048&q=75",
  text: "tulisannya"
}

function App() {
  const [helo, setHelo] = useState('Hello from parent');
  return (
    <>
      <Hero
        imgSrc="https://dibimbing.id/_next/image?url=https%3A%2F%2Fdibimbing-cdn.sgp1.cdn.digitaloceanspaces.com%2FEza-Desktop.webp&w=2048&q=75"
        text="tulisannya"
      />
      <Hero {...data} />
      <Hero text="hmmmmm" />
      <h1>{helo}</h1>
      <Input dataParent={helo} setDataParent={setHelo} />
    </>
  );
}

export default App;
