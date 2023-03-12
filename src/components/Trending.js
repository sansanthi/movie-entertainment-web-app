import { useEffect, useState } from "react";
import { API_KEY, Trending_URL, Image_URL } from "../MovieAPI";

const Trending = () => {
  console.log("Trending work");
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getTrendingMovie();
  }, []);
  const getTrendingMovie = () => {
    console.log("Get trending;");
    let url = Trending_URL;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setMovies(data.results));
  };

  console.log("Trending: ", movies);
  return (
    <section className="trending-section">
      <h2 className="heading-title">Trending</h2>
      <article className="trending">
        {movies.slice(0, 5).map((movie) => {
          return (
            <div className="movie-box" key={movie.id}>
              <img
                className="movie-image"
                src={`${Image_URL}${movie.backdrop_path}`}
                alt="movie cover"
              />
              <div className="movie-info">
                <ul>
                  <li>2019</li>
                  <li>
                    <div className="movie-type">
                      <svg
                        width="20"
                        height="20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.956 0H3.044A3.044 3.044 0 0 0 0 3.044v13.912A3.044 3.044 0 0 0 3.044 20h13.912A3.044 3.044 0 0 0 20 16.956V3.044A3.044 3.044 0 0 0 16.956 0ZM4 9H2V7h2v2Zm-2 2h2v2H2v-2Zm16-2h-2V7h2v2Zm-2 2h2v2h-2v-2Zm2-8.26V4h-2V2h1.26a.74.74 0 0 1 .74.74ZM2.74 2H4v2H2V2.74A.74.74 0 0 1 2.74 2ZM2 17.26V16h2v2H2.74a.74.74 0 0 1-.74-.74Zm16 0a.74.74 0 0 1-.74.74H16v-2h2v1.26Z"
                          fill="#5A698F"
                        />
                      </svg>
                      <span>{movie.media_type}</span>
                    </div>
                  </li>
                  <li>PG</li>
                </ul>
                <h2>{movie.title || movie.name}</h2>
              </div>
              <div className="bookmark">
                <button className="btn-bookmark">
                  <svg
                    width="12"
                    height="14"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
                      stroke="#FFF"
                      strokeWidth="1.5"
                      fill="none"
                    />
                  </svg>
                </button>
              </div>
            </div>
          );
        })}
      </article>
    </section>
  );
};
export default Trending;
