import { useState } from "react";
import { Button } from "./components/ui/button";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Count: {count}</h1>
      <Button onClick={() => setCount(count + 1)}>Increment</Button>
      <Button onClick={() => setCount(count - 1)}>Decreement</Button>
    </>
  );
}

export default App;
