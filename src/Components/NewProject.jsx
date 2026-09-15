import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ onCancel, onFormSubmit, refs }) {
  return (
    <>
      <Modal buttonLabel="Close" ref={refs.modal}>
        <h2 className="font-bold text-2xl text-stone-800 mb-5 text-center">
          Invalid Values!
        </h2>
        <p className="text-lg font-medium text-stone-600 mb-2 text-start">
          Looks like your required inputs are empty!
        </p>
        <p className="text-lg font-medium text-stone-600 mb-8 text-start">
          Please fill out the all required inputs to make a new project.
        </p>
      </Modal>
      <form
        className="flex flex-col justify-center items-center w-full"
        onSubmit={onFormSubmit}
      >
        <menu className="flex justify-end items-center w-2/3 mb-6">
          <li>
            <button
              className="font-semibold text-xl me-5 text-stone-700 hover:text-stone-900 hover:scale-90 transition duration-300 ease-out"
              type="button"
              onClick={onCancel}
            >
              Cancel
            </button>
          </li>
          <li>
            <button className="font-normal text-xl px-6 py-2 bg-stone-800 text-stone-300 rounded-md hover:bg-stone-900 hover:text-stone-200 hover:scale-90 transition duration-300 ease-out">
              Save
            </button>
          </li>
        </menu>
        <Input type="text" label="title *" ref={refs.title} />
        <Input label="description" ref={refs.description} textarea />
        <Input type="date" label="dueDate *" ref={refs.dueDate} />
        <p className="text-red-700 font-semibold">
          <em>Inputs marked with * is required to fill out!</em>
        </p>
      </form>
    </>
  );
}
