import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateArea from './CreateArea';


function App() {
  return (
    <div className="App">
      <Header title='Keeper' />
      <CreateArea />
      <Note />
      <Footer />
    </div>
  );
}

export default App;
