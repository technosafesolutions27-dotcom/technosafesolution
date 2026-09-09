import React, { useEffect, useRef, useState } from "react";
import "./StatsBar.css";

const stats = [
  {
    number: 14,
    suffix: "+",
    label: "Years of Expertise",
  },
  {
    number: 12000,
    suffix: "+",
    label: "Sites Protected",
  },
  {
    number: 42,
    suffix: "+",
    label: "Cities Covered",
  },
  {
    number: 98,
    suffix: "%",
    label: "Client Retention",
  },
];

export default function StatsBar() {
  const sectionRef = useRef(null);
  const [started, setStarted] = useState(false);
  const [counts, setCounts] = useState(
    stats.map(() => 0)
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      {
        threshold: 0.35,
      }
    );

    const current = sectionRef.current;

    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [started]);

  useEffect(() => {
    if (!started) return;

    const duration = 1800;
    const startTime = performance.now();

    const animate = (time) => {
      const progress = Math.min(
        (time - startTime) / duration,
        1
      );

      const easeOut = 1 - Math.pow(1 - progress, 3);

      setCounts(
        stats.map((item) =>
          Math.floor(item.number * easeOut)
        )
      );

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCounts(stats.map((item) => item.number));
      }
    };

    requestAnimationFrame(animate);
  }, [started]);

  return (
    <section
      className="statsbar"
      ref={sectionRef}
    >
      <div className="container stats-grid">
        {stats.map((item, index) => (
          <div className="stat-card" key={item.label}>
            <h2>
              {counts[index].toLocaleString()}
              <span>{item.suffix}</span>
            </h2>

            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}