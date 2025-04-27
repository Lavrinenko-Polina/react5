import { useParams } from 'react-router-dom';
import { useState } from 'react';

const movies = {
  'the-king': {
    title: 'The King',
    description: 'Історичний фільм про молодого Генріха V.',
    image: 'https://example.com/the-king.jpg',
    actors: [
      { name: 'Тімоті Шаламе', photo: 'https://example.com/chalamet.jpg' },
      { name: 'Джоел Едгертон', photo: 'https://example.com/edgerton.jpg' },
    ]
  },
  'joker': {
    title: 'Joker',
    description: 'Темна історія становлення Джокера.',
    image: 'https://example.com/joker.jpg',
    actors: [
      { name: 'Хоакін Фенікс', photo: 'https://example.com/phoenix.jpg' },
      { name: 'Роберт Де Ніро', photo: 'https://example.com/deniro.jpg' },
    ]
  }
};

export default function Movie() {
  const { id } = useParams();
  const movie = movies[id];
  const [showActors, setShowActors] = useState(false);

  if (!movie) return <div>Фільм не знайдено</div>;

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-2">{movie.title}</h1>
      <img src={movie.image} alt={movie.title} className="w-full max-w-md mb-4" />
      <p className="mb-4">{movie.description}</p>
      <button
        className="text-blue-500 underline"
        onClick={() => setShowActors(!showActors)}
      >
        Актори
      </button>
      {showActors && (
        <div className="mt-4 grid grid-cols-2 gap-4">
          {movie.actors.map((actor, idx) => (
            <div key={idx} className="text-center">
              <img src={actor.photo} alt={actor.name} className="w-24 h-24 object-cover rounded-full mx-auto mb-2" />
              <p>{actor.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}