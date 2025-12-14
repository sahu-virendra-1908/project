import { useEffect, useState } from "react";
import { analyzePR } from "../services/api";
import PRCard from "../components/PRCard";
import HealthScore from "../components/HealthScore";

export default function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    analyzePR().then(setData);
  }, []);

  if (!data) return <p className="p-4">Loading...</p>;

  return (
    <div className="p-6 grid grid-cols-3 gap-6">
      <HealthScore score={data.health.newHealthScore} />

      <div className="col-span-2">
        <PRCard pr={data.maintainer} />
      </div>
    </div>
  );
}
