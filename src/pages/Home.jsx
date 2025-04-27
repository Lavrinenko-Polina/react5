import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Фільми</h1>
      <ul className="space-y-2">
        <li><Link to="/movie/the-king" className="text-blue-500 hover:underline">The King</Link></li>
        <li><Link to="/movie/joker" className="text-blue-500 hover:underline">Joker</Link></li>
      </ul>
    </div>
  );
}