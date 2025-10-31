import { useEffect, useRef } from "react";
import lampHead from "@/assets/lamp-head.svg";
import ellipse from "@/assets/ellipse.svg";

const InteractiveLamp = () => {
  const lampRef = useRef<HTMLDivElement>(null);
  const ellipseRef = useRef<HTMLImageElement>(null);
  const headRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!lampRef.current || !ellipseRef.current || !headRef.current) return;

      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      // Calculate movement relative to center
      const xPercent = (clientX / innerWidth - 0.5) * 2;
      const yPercent = (clientY / innerHeight - 0.5) * 2;

      // Ellipse follows cursor more
      const ellipseX = xPercent * 30;
      const ellipseY = yPercent * 30;

      // Head follows cursor subtly
      const headX = xPercent * 15;
      const headY = yPercent * 15;

      ellipseRef.current.style.transform = `translate(${ellipseX}px, ${ellipseY}px)`;
      headRef.current.style.transform = `translate(${headX}px, ${headY}px)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed top-0 right-0 w-full h-full pointer-events-none z-0">
      <div ref={lampRef} className="absolute bottom-0 right-0 w-full h-full flex items-end justify-end">
        {/* Lamp Head - Behind */}
        <img
          ref={headRef}
          src={lampHead}
          alt=""
          className="absolute bottom-0 right-0 w-[clamp(280px,40vw,500px)] h-auto transition-transform duration-200 ease-out"
          style={{ transformOrigin: "center bottom" }}
        />

        {/* Ellipse - In Front */}
        <img
          ref={ellipseRef}
          src={ellipse}
          alt=""
          className="absolute bottom-[clamp(140px,22vw,280px)] right-[clamp(100px,15vw,220px)] w-[clamp(150px,20vw,250px)] h-auto transition-transform duration-200 ease-out"
          style={{ transformOrigin: "center center" }}
        />
      </div>
    </div>
  );
};

export default InteractiveLamp;
