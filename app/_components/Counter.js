"use client";

import { useState } from "react";

function Counter({ users }) {
  const [count, setCount] = useState(0);

  return (
    <div className="mb-8">
      <p className="text-lg mb-4">Users loaded from the server: {users.length}</p>
      <button
        className="bg-accent-500 px-6 py-3 text-primary-800 font-semibold hover:bg-accent-600 transition-all"
        onClick={() => setCount(count + 1)}
      >
        Clicks: {count}
      </button>
    </div>
  );
}

export default Counter;
