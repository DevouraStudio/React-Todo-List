export default function Input({ type, label, textarea, ref, ...props }) {
  const inputClassName =
    "w-full bg-stone-200 h-10 text-stone-700 font-semibold text-lg outline-none border-b-2 border-gray-300 hover:border-b-2 hover:border-gray-900 focus:border-b-2 focus:border-gray-900 rounded-sm px-2 py-1";
  return (
    <div className="w-2/3 flex flex-col justify-center items- mb-5">
      <label
        htmlFor={label}
        className="uppercase font-bold text-stone-600 mb-1"
      >
        {label}
      </label>
      {textarea ? (
        <textarea id={label} ref={ref} className={inputClassName}></textarea>
      ) : (
        <input
          id={label}
          type={type}
          className={inputClassName}
          ref={ref}
          {...props}
        />
      )}
    </div>
  );
}
