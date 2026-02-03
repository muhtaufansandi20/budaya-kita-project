const WaterEffect = () => {
  const bubbles = Array.from({ length: 15 });

  return (
    <div className="bubbles fixed inset-0 h-full w-full pointer-events-none z-0">
      {bubbles.map((_, i) => {
        // BOS HIRAUKAN SAJA KALAU MERAHKI MATHNYA
        const size = Math.random() * 40 + 10 + "px";
        const left = Math.random() * 100 + "%";
        const duration = Math.random() * 10 + 10 + "s";
        const delay = Math.random() * 5 + "s";

        return (
          <div
            key={i}
            className="bubble"
            style={{
              width: size,
              height: size,
              left: left,
              animationDuration: duration,
              animationDelay: delay,
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default WaterEffect;
