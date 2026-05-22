import { useEffect, useState } from "react";
import { Shell } from "./components/Shell";
import { Intro } from "./sections/Intro";
import { Agent } from "./sections/Agent";
import { Skill } from "./sections/Skill";
import { MCP } from "./sections/MCP";
import { Demo } from "./sections/Demo";
import { Outro } from "./sections/Outro";
import { SLIDES } from "./slides";

const SECTIONS = [
  <Intro />,
  <Agent />,
  <Skill />,
  <MCP />,
  <Demo />,
  <Outro />,
];

function App() {
  const [index, setIndex] = useState<number>(() => {
    const hash = parseInt(window.location.hash.replace("#", ""), 10);
    if (Number.isFinite(hash) && hash >= 1 && hash <= SLIDES.length) {
      return hash - 1;
    }
    return 0;
  });

  useEffect(() => {
    window.location.hash = String(index + 1);
  }, [index]);

  return (
    <Shell current={index} onChange={setIndex}>
      {SECTIONS[index]}
    </Shell>
  );
}

export default App;
