import logo from './logo.svg';
import './App.css';

function Header() {
  return (<h1>Hello world</h1>);
}

function App() {
  return (
    <div>
      <Header name = "Anna" color="purple" />
      <Nav greet="Howdy" />
      <Promo heading="LALA" promoSubHeading="XIXI" />
      <Intro1 />
      <Intro2 />
      <Intro3 />
      <Footer />
      <Trunk>
        <Bag>
          <Apples color="yellow" number="5" />
          <Pears friend="Peter" />
        </Bag>
      </Trunk>
      {/* Props and children alternative
      <Bag children={<Apples color="yellow" number="5" />} />
      <Bag children={<Pears friend="Peter" />} /> */}
    </div>
  )
}

export default App;
