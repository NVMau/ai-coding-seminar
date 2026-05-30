import { useEffect, useState } from "react";
import { Shell } from "./components/Shell";
import { WhatIsAgent } from "./sections/WhatIsAgent";
import { HowItWorks } from "./sections/HowItWorks";
import { SLIDES } from "./slides";

const SECTIONS = [
  <WhatIsAgent />,
  <HowItWorks />,
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
