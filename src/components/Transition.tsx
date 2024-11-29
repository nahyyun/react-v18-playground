import React, { useState, useTransition } from "react";

export default function Transition() {
  const [isPending, startTransition] = useTransition();
  const [list, setList] = useState<number[]>([]);

  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        marginTop: "50px",
        alignItems: "center",
      }}
    >
      <div>Transition Status: {isPending ? "pending..⚙️" : "Idle ✨"}</div>
      <input
        type="text"
        style={{
          width: "300px",
          padding: "8px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "rgb(83 86 138)",
          color: "white",
        }}
        placeholder="Input Something..."
      />

      <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
        <button
          type="button"
          onClick={() => setList(Array.from({ length: 20000 }, (_, i) => i))}
        >
          Update List Without Using Transition (20,000 items)
        </button>
        <button
          type="button"
          onClick={() =>
            startTransition(() =>
              setList(Array.from({ length: 1000 }, (_, i) => i))
            )
          }
        >
          Update List Using Transition (20,000 items)
        </button>
      </div>

      {list.length !== 0 && (
        <div>
          <h4>------ list ------</h4>
          {list.map((el, i) => (
            <div key={i}>{el}</div>
          ))}
        </div>
      )}
    </section>
  );
}
