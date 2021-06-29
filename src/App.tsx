import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen'
import Header from './components/Header'
import Footer from './components/Footer'
import ProductScreen from './Screens/ProductScreen'

function App() {
  return (
    <Router>
      <Header></Header>
        <main>
          <Container className="py-3">
            <Route path="/" component={HomeScreen} exact />
            <Route path="/product/:id" component={ProductScreen} />
          </Container>
        </main>
      <Footer></Footer>
    </Router>
  );
}

export default App;
