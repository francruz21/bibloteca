



import './App.css'
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <div className="w-full h-screen bg-blue-500 flex items-center justify-center">
        <h1 className="text-7xl text-white">Section 1</h1>
      </div>
      <Footer />
    </>
  );
}

export default App;
