import React, { useState } from "react";
import Transition from "./components/Transition";

const tabs = ["batching", "transition", "suspense"] as const;

function App() {
  const [tab, setTab] = useState<"batching" | "transition" | "suspense">(
    "batching"
  );

  return (
    <>
      <h1>React18 Playground 🪄</h1>
      <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            style={{ backgroundColor: tab === t ? "#d1e7ff" : undefined }}
          >
            {t}
          </button>
        ))}
      </div>
      {/* {tab === "batching" && <Batching />} */}
      {tab === "transition" && <Transition />}
      {/* {tab === "suspense" && <Suspense />} */}
    </>
  );
}

export default App;
