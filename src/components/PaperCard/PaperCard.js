import '../../assets/styles/PaperCard.css';

function PaperCard(props) {
  return (
    <div className="paper-card">
      <header className='paper-card-header'>
        <span className="paper-card-title">{props.title}</span>
      </header>

      <div className='paper-card-date'>
          <span className="paper-card-subheading">{props.subheading}</span>
      </div>

      <div className='paper-card-content'>
        <div className='paper-card-img-container'>
          <img src={props.image.url} className="paper-card-img" alt={props.image.alt} />
        </div>

        <div className='paper-card-content-text'>
          <p>{props.text}</p>
        </div>
      </div>

      <footer className='paper-card-footer'>
        <span className="paper-card-footer-text">{props.footer}</span>
      </footer>
    </div>
  );
}

export default PaperCard;