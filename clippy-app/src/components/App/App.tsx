import { useState } from "react";
import { Button, Flex } from "@radix-ui/themes";
import "./App.css";
import Sidebar from "../Sidebar/Sidebar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Flex gap="3" className="App">
      <Sidebar></Sidebar>
      <Button onClick={() => setCount((count) => count + 1)}>
        Counter: {count}
      </Button>
    </Flex>
  );
}

export default App;
