export default function PRCard({ pr }) {
  return (
    <div className="bg-slate-800 p-4 rounded mb-3">
      <p className="font-bold">PR #{pr.prNumber}</p>
      <p className="text-sm text-gray-400">{pr.summary}</p>
      <p className="mt-2 text-yellow-400">Risk: {pr.riskLevel}</p>
    </div>
  );
}
