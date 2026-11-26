import { useEffect, useState } from "react";

function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handlePointerMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    const handlePointerOver = (event) => {
      setIsHovering(Boolean(event.target.closest("a, button, input, textarea")));
    };

    window.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("pointerover", handlePointerOver);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerover", handlePointerOver);
    };
  }, []);

  return (
    <span
      className={`custom-cursor${isHovering ? " is-hovering" : ""}`}
      style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
      aria-hidden="true"
    />
  );
}

export default CustomCursor;
