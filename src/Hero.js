import './hero.css'
import hero from './images/hero.png'
export default function Hero() {
  return (
    <section className='hero'>
      <img className="hero--img" alt="hero--img" src={hero} />
      <h1 className='hero--h1'>Online Experiences</h1>
      <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
      <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
      <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
    </section>
  )
}