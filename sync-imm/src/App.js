import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/"><HomePage/></Route>
          <Route path="/about-us"><AboutUs/></Route>
          <Route path="/pages-forms"></Route>
        </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
