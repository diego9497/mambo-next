import { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function ClientPortal({ children, selector, close }) {
  const ref = useRef();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector(selector);
    setMounted(true);
  }, [selector]);

  useEffect(() => {
    function onKeyUp(e) {
      if (e.key == "Escape") {
        close();
      }
    }
    window.addEventListener("keyup", onKeyUp);
    return () => {
      window.removeEventListener("keyup", onKeyUp);
    };
  }, []);

  return mounted ? createPortal(children, ref.current) : null;
}
