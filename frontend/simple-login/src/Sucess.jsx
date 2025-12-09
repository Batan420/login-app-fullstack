import { useState } from 'react';
import { Film, Star, TrendingUp, Clock } from 'lucide-react';

const Sucess = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const movies = [
    { id: 1, title: "The Matrix", rating: 8.7, year: 1999, genre: "Sci-Fi", duration: "136 min", image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=600&fit=crop" },
    { id: 2, title: "Inception", rating: 8.8, year: 2010, genre: "Thriller", duration: "148 min", image: "https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=400&h=600&fit=crop" },
    { id: 3, title: "Interstellar", rating: 8.6, year: 2014, genre: "Sci-Fi", duration: "169 min", image: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=400&h=600&fit=crop" },
    { id: 4, title: "The Dark Knight", rating: 9.0, year: 2008, genre: "Action", duration: "152 min", image: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&h=600&fit=crop" },
    { id: 5, title: "Pulp Fiction", rating: 8.9, year: 1994, genre: "Crime", duration: "154 min", image: "https://images.unsplash.com/photo-1574267432644-f74b80427a80?w=400&h=600&fit=crop" },
    { id: 6, title: "Forrest Gump", rating: 8.8, year: 1994, genre: "Drama", duration: "142 min", image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=600&fit=crop" },
  ];

  const stats = [
    { label: "Total Movies", value: "1,234", icon: Film, color: "bg-blue-500" },
    { label: "Avg Rating", value: "8.5", icon: Star, color: "bg-yellow-500" },
    { label: "Trending", value: "156", icon: TrendingUp, color: "bg-green-500" },
    { label: "Watch Time", value: "2.4k hrs", icon: Clock, color: "bg-purple-500" },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Movie Dashboard</h1>
          <p className="text-gray-400">Your personal movie collection</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold">{stat.value}</p>
                </div>
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <stat.icon size={24} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Movies Section */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-4">Popular Movies</h2>
        </div>

        {/* Movies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {movies.map((movie) => (
            <div
              key={movie.id}
              onClick={() => setSelectedMovie(movie)}
              className="bg-gray-800 rounded-lg overflow-hidden cursor-pointer transition-transform hover:scale-105"
            >
              <img
                src={movie.image}
                alt={movie.title}
                className="w-full h-80 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{movie.title}</h3>
                <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
                  <span>{movie.year}</span>
                  <span>{movie.genre}</span>
                  <span className="flex items-center gap-1">
                    <Star size={16} className="text-yellow-500 fill-yellow-500" />
                    {movie.rating}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <Clock size={16} />
                  <span>{movie.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Movie Detail Modal */}
        {selectedMovie && (
          <div
            onClick={() => setSelectedMovie(null)}
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-gray-800 rounded-lg max-w-2xl w-full p-6"
            >
              <div className="flex gap-6">
                <img
                  src={selectedMovie.image}
                  alt={selectedMovie.title}
                  className="w-48 h-72 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-4">{selectedMovie.title}</h2>
                  <div className="space-y-3 text-gray-300">
                    <p><span className="text-gray-400">Year:</span> {selectedMovie.year}</p>
                    <p><span className="text-gray-400">Genre:</span> {selectedMovie.genre}</p>
                    <p><span className="text-gray-400">Duration:</span> {selectedMovie.duration}</p>
                    <p className="flex items-center gap-2">
                      <span className="text-gray-400">Rating:</span>
                      <Star size={20} className="text-yellow-500 fill-yellow-500" />
                      <span className="text-xl font-bold">{selectedMovie.rating}</span>
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedMovie(null)}
                    className="mt-6 bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-lg font-semibold transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sucess;