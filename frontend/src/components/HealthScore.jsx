export default function HealthScore({ score }) {
  return (
    <div className="bg-slate-800 p-4 rounded text-center">
      <p className="text-sm text-gray-400">Health Score</p>
      <p className="text-3xl font-bold">{score}</p>
    </div>
  );
}
