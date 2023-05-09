import "./styles.css";
import { useState } from "react";
export default function App() {
  const [v, uv] = useState(0);
  const [v1, uv1] = useState(0);
  function e() {
    let a = parseInt(event.target.value);
    uv(a);

    let b = a + 10;
    uv1(b);
  }
  function e1() {
    let a1 = parseInt(event.target.value);
    uv1(a1);
    uv(a1 - 10);
  }
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <input onChange={e} value={v} />
      <h1>Total salary {v}</h1>
      <input onChange={e1} value={v1} />
      <h1>inhand salary1 {v1}</h1>
    </div>
  );
}
