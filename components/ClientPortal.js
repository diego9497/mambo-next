import { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function ClientPortal({
  children,
  selector,
  close,
  goRight = () => {},
  goLeft = () => {},
}) {
  const ref = useRef();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector(selector);
    setMounted(true);
  }, [selector]);

  useEffect(() => {
    function onKeyUp(e) {
      switch (e.key) {
        case "Escape":
          close();
          break;
        case "ArrowRight":
          goRight();
          break;
        case "ArrowLeft":
          goLeft();
          break;
      }
    }
    window.addEventListener("keyup", onKeyUp);
    return () => {
      window.removeEventListener("keyup", onKeyUp);
    };
  }, []);

  return mounted ? createPortal(children, ref.current) : null;
}
