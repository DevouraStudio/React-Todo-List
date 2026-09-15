export default function SideBar({
  onNewProjectClick,
  projects,
  onProjectClick,
  intendedProject,
  isEditingProject,
}) {
  return (
    <aside className="bg-stone-900 md:w-1/3 w-1/2 px-8 py-16 text-stone-200 mt-12 rounded-tr-2xl flex flex-col items-start">
      <h1 className="text-3xl font-bold uppercase mb-14">Your projects</h1>
      <button
        className="bg-stone-700 md:px-6 px-3 text-center text-stone-400 text-xl py-3 rounded-lg font-medium hover:text-stone-100 hover:scale-90 transition duration-300 ease-out"
        onClick={onNewProjectClick}
      >
        + Add Project
      </button>
      <menu className="mt-12 w-full">
        {projects &&
          Object.values(projects).map((project, index) => {
            return (
              <li key={index} className="flex flex-col items-start w-full">
                <button
                  className={`font-medium ${
                    intendedProject &&
                    intendedProject.id === project.id &&
                    isEditingProject
                      ? "text-stone-200 bg-stone-800"
                      : "text-stone-400"
                  } text-xl hover:text-stone-200 hover:bg-stone-800 transition duration-300 ease-out w-full text-start py-1 ps-1 rounded-md ps-2 mb-3`}
                  onClick={() => onProjectClick(project)}
                >
                  {project.title}
                </button>
              </li>
            );
          })}
      </menu>
    </aside>
  );
}
