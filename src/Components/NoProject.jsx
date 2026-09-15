import noProjectsImage from "../assets/no-projects.png";

export default function NoProject({onClick}) {
    return (
        <section className="flex flex-col justify-center items-center">
        <img
          src={noProjectsImage}
          alt="No Projects Image"
          className="md:w-16 md:h-16 w-20 h-20 object-contain mx-auto mb-5"
        />
        <h2 className="font-bold text-2xl text-stone-600 mb-5 text-center">
          No Project Selected
        </h2>
        <p className="text-lg font-medium text-stone-400 mb-10 text-center">
          Select a project or get started with a new one.
        </p>
        <button
          className="px-5 py-2 bg-stone-800 text-stone-400 font-semibold text-xl rounded-lg hover:text-stone-300 hover:scale-110 hover:-translate-y-2 transition duration-300 ease-out"
          onClick={onClick}
        >
          Create new project
        </button>
      </section>
    )
}