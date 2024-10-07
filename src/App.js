import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import Content from './Content';

const notes = Content();

function App() {
  return (
    <div className="App">
      <Header title='Keeper' />
        {notes.map((item) => (
          <Note 
            key={item.id}
            title={item.title}
            content={item.content}
          />
        ))}
      <Footer />
    </div>
  );
}

export default App;
