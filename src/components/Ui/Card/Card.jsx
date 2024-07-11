import styles from './Card.module.css';

export const Card = ({ title, rating }) => {
  return (
    <article>
      <div className={styles.card}>
        <figure>
          <img
            src="src/images/kard1.png"
            alt="Изображение 1"
          />
        </figure>
        <div className="article-body">
          <h2>{title}</h2>
          <p>{rating}</p>
          <a href="chatgpt.html" className="read-more">
            <span className="sr-only">about this is some title</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
};
