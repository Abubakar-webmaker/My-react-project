import { useEffect, useState } from "react";
import Search from "./components/Search";

interface Movie {
  id: number;
  poster_path: string | null;
  title: string;
  vote_average: number;
  release_date: string;
}

const BASE_URL = "https://api.themoviedb.org/3/search/movie";
const TOKEN = import.meta.env.VITE_TMDB_API_SECRET;

export default function App() {
  const [searchTerm, setSearchTerm] = useState("john wick");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchMovies = async (query: string) => {
    try {
      setLoading(true);
      const res = await fetch(
        `${BASE_URL}?query=${encodeURIComponent(query)}`,
        {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
          },
        }
      );
      const data = await res.json();
      setMovies(data.results);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies(searchTerm);
  }, [searchTerm]);

  return (
    <main className="min-h-screen bg-[rgb(12,12,31)] text-white px-6">
      {/* HEADER */}
      <header className="flex flex-col items-center text-center py-10">
        <h1 className="text-4xl md:text-5xl font-bold">
          Find <span className="text-blue-400">Movies</span> You’ll Enjoy
        </h1>
        <p className="text-gray-400 mt-3">
          Without the hassle
        </p>
      </header>

      {/* SEARCH */}
      <div className="flex justify-center mb-10">
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>

      {/* LOADING */}
      {loading && (
        <p className="text-center text-lg">Loading...</p>
      )}

      {/* MOVIES GRID */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {!loading &&
          movies.map((movie) => (
            <div
              key={movie.id}
              className="bg-[#0f172a] rounded-xl overflow-hidden shadow-lg hover:scale-105 transition"
            >
              <img
                className="w-full h-100 object-cover"
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : "https://via.placeholder.com/500x750?text=No+Image"
                }
                alt={movie.title}
              />
              <div className="p-4 text-center">
                <h3 className="font-semibold text-lg">
                  {movie.title}
                </h3>
                <p className="text-yellow-400 mt-1">
                  ⭐ {movie.vote_average}
                </p>
                <p className="text-gray-400 text-sm">
                  {movie.release_date}
                </p>
              </div>
            </div>
          ))}
      </section>

      {!loading && movies.length === 0 && (
        <p className="text-center mt-10">
          No movies found
        </p>
      )}
    </main>
  );
}
