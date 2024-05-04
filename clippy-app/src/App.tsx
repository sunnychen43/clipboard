import { useState } from "react";
import "./App.css";
import { Button } from "@radix-ui/themes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button onClick={() => setCount((count) => count + 1)}>
        Counter: {count}
      </Button>
    </>
  );
}

export default App;
