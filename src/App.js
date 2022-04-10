import './assets/styles/App.css';
import PaperCard from './components/PaperCard/PaperCard';
import cardContents from './utils/cardContent';

function App() {
  return (
    <div className="App">
        {cardContents.map(function(cardContent, index) {
          return <div className="paper-card-container">
            <PaperCard
              key={index}
              title={cardContent.title}
              subheading={cardContent.subheading}
              image={cardContent.image}
              text={cardContent.text}
              footer={cardContent.footer}
            />
          </div>
        })}
    </div>
  );
}

export default App;
