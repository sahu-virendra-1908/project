export async function analyzePR() {
  const res = await fetch(
    "https://ai-engine-2.onrender.com/analyze",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        prNumber: 1,
        repo: "demo-repo",
      }),
    }
  );

  return res.json();
}
