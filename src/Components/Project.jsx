import { useRef } from "react";
import { v4 as uuid } from "uuid";

export default function Project({
  intendedProject,
  projects,
  setData,
  onCancel,
}) {
  const [year, month, day] = intendedProject.dueDate.split("-").map(Number);

  const dateObj = new Date(year, month - 1, day);

  const formattedDate = dateObj.toLocaleString("en-US", {
    dateStyle: "medium",
  });

  const input = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const value = input.current.value;
    if (value.trim() === "") {
      return;
    }
    setData((prevData) => {
      const project = prevData.projects[intendedProject.id];
      const newTask = { id: uuid(), text: value };
      const newData = {
        appStatus: { ...prevData.appStatus },
        projects: {
          ...prevData.projects,
          [intendedProject.id]: {
            ...project,
            tasks: [newTask, ...project.tasks],
          },
        },
      };
      localStorage.setItem("storedProjects", JSON.stringify(newData));
      return newData;
    });
    input.current.value = "";
  };

  const handleClear = (taskId) => {
    setData((prevData) => {
      const project = prevData.projects[intendedProject.id];
      const newData = {
        appStatus: { ...prevData.appStatus },
        projects: {
          ...prevData.projects,
          [intendedProject.id]: {
            ...project,
            tasks: project.tasks.filter((t) => t.id !== taskId),
          },
        },
      };
      localStorage.setItem("storedProjects", JSON.stringify(newData));
      return newData;
    });
  };

  const handleDelete = () => {
    setData((prevData) => {
      const newData = {
        appStatus: {
          isAddingProject: false,
          isEditingProject: false,
          intendedProject: null,
        },
        projects: { ...prevData.projects },
      };
      delete newData.projects[intendedProject.id];
      localStorage.setItem("storedProjects", JSON.stringify(newData));
      return newData;
    });
  };

  const storedProject = projects[intendedProject.id];

  return (
    <section className="flex flex-col justify-center items-start w-full md:ps-8 md:pe-[10rem] px-5">
      <section className="flex flex-col items-start w-full">
        <span className="w-full flex md:flex-row flex-col justify-between items-center mb-4">
          <h2 className="md:text-4xl text-3xl font-bold text-stone-800 md:mb-0 mb-5 md:text-start text-center">
            {intendedProject.title}
          </h2>
          <span className="flex justify-center items-center">
            <button
              className="text-lg me-5 hover:text-stone-900 hover:scale-90 transition duration-300 ease-out"
              onClick={onCancel}
            >
              Cancel
            </button>
            <button
              className="text-lg hover:text-red-800 hover:scale-90 transition duration-300 ease-out"
              onClick={handleDelete}
            >
              Delete
            </button>
          </span>
        </span>
        <p className="text-lg text-stone-500 mb-4">{formattedDate}</p>
        {intendedProject.description ? (
          <p className="text-stone-900 md:text-lg/10 text-lg mb-5 md:w-5/6 w-full">
            {intendedProject.description}
          </p>
        ) : null}
      </section>
      <hr className="h-1 bg-stone-300 w-full mb-4" />
      <section className="flex flex-col items-start w-full">
        <h3 className="text-3xl font-bold text-stone-800 mb-5">Tasks</h3>
        <form
          className="flex justify-start items-center md:w-3/4 w-full mb-7 gap-4"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            className="md:w-64 w-32 px-2 py-1 bg-stone-200 h-9 text-gray-900 font-semibold text-lg outline-none hover:border-2 hover:border-blue-600 focus:border-2 focus:border-blue-600 rounded-md"
            ref={input}
            required
          />
          <button className="md:w-[9rem] w-[5rem] px-0 font-semibold me-5 text-stone-700 hover:text-stone-900 hover:scale-90 transition duration-300 ease-out">
            Add Task
          </button>
        </form>
        {storedProject?.tasks && storedProject.tasks.length !== 0 ? (
          <menu className="w-full bg-stone-200 py-8 px-4 rounded-md">
            {storedProject.tasks.map((task) => (
              <li
                className="w-full flex justify-between items-center mb-3"
                key={task.id}
              >
                <p className="font-medium text-lg">{task.text}</p>
                <button
                  className="text-lg text-gray-900 font-medium hover:font-medium hover:text-red-800 hover:scale-90 transition duration-300 ease-out"
                  onClick={() => handleClear(task.id)}
                >
                  Clear
                </button>
              </li>
            ))}
          </menu>
        ) : (
          <p className="text-red-700 font-semibold">
            This project does not have any tasks yet!
          </p>
        )}
      </section>
    </section>
  );
}
