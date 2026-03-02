import { useEffect, useState } from "react";

const apiBase = import.meta.env.VITE_API_URL || "";

export default function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadDashboard() {
      try {
        const res = await fetch(`${apiBase}/api/dashboard`);
        if (!res.ok) throw new Error(`Request failed: ${res.status}`);
        const json = await res.json();
        setData(json);
      } catch (err) {
        setError(err.message || "Failed to load dashboard");
      }
    }

    loadDashboard();
  }, []);

  return (
    <main className="page">
      <section className="hero">
        <p className="tag">React + Node + Nginx</p>
        <h1>{data?.appName || "Cool Stack App"}</h1>
        <p className="subtitle">{data?.headline || "Loading live backend data..."}</p>
      </section>

      {error && <p className="error">{error}</p>}

      <section className="grid">
        {(data?.stats || []).map((item) => (
          <article key={item.label} className="card metric">
            <span>{item.label}</span>
            <strong>{item.value}</strong>
          </article>
        ))}
      </section>

      <section className="card highlights">
        <h2>What is running</h2>
        <ul>
          {(data?.highlights || []).map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
