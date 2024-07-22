"use client";

import React, { useEffect, useState } from "react";

const createFirefly = () => ({
  id: Math.random(),
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  animationDuration: `${Math.random() * 5 + 5}s`,
});

const FireFliesBackground = () => {
  const [fireflies, setFireflies] = useState<any>([]);

  useEffect(() => {
    const addFireflyPeriodically = () => {
      const newFirefly = createFirefly();
      setFireflies((currentFireflies: string | any) => [
        ...currentFireflies.slice(-14),
        newFirefly,
      ]);
    };

    const interval = setInterval(addFireflyPeriodically, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
      {fireflies.map(
        (firefly: {
          id: React.Key | null | undefined;
          top: any;
          left: any;
          animationDuration: any;
        }) => {
          return (
            <div
              key={firefly.id}
              className="absolute rounded-full w-[10px] h-[10px] bg-firefly-radial"
              style={{
                top: firefly.top,
                left: firefly.left,
                animation: `move ${firefly.animationDuration} infinite alternate`,
              }}
            ></div>
          );
        }
      )}
    </div>
  );
};

export default FireFliesBackground;
