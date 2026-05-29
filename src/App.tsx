import { useEffect, useState } from "react";
import { Shell } from "./components/Shell";
import { Intro } from "./sections/Intro";
import { WhatIsAgent } from "./sections/WhatIsAgent";
import { HowAgentsThink } from "./sections/HowAgentsThink";
import { Architecture } from "./sections/Architecture";
import { Tools } from "./sections/Tools";
import { RealWorld } from "./sections/RealWorld";
import { BestPractices } from "./sections/BestPractices";
import { Outro } from "./sections/Outro";
import { SLIDES } from "./slides";

const SECTIONS = [
  <Intro />,
  <WhatIsAgent />,
  <HowAgentsThink />,
  <Architecture />,
  <Tools />,
  <RealWorld />,
  <BestPractices />,
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
