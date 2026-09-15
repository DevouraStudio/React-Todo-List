import { useRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children, buttonLabel, ref }) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={dialog} className="backdrop:bg-stone-900/90 rounded-md shodow-md p-4 bg-stone-50 transition duration-300 ease-out animate-pulse">
      {children}
      <form method="dialog" className="mt-4 text-right">
        <button className="w-full px-auto py-2 bg-stone-800 text-stone-400 font-semibold text-xl rounded-lg hover:text-stone-300 hover:scale-90 transition duration-300 ease-out">{buttonLabel}</button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
}
