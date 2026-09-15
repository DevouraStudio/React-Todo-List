import { useState, useEffect, useRef } from "react";

import SideBar from "./SideBar";
import NoProject from "./NoProject";
import NewProject from "./NewProject";
import Project from "./Project";

import { v4 as uuid } from "uuid";

function App() {
  const [data, setData] = useState({ appStatus: {}, projects: {} });

  const refs = {
    title: useRef(),
    description: useRef(),
    dueDate: useRef(),
    modal: useRef(),
  };

  useEffect(() => {
    const storedProjects = localStorage.getItem("storedProjects");
    if (storedProjects) {
      try {
        const parsed = JSON.parse(storedProjects);
        setData((prevData) => ({
          appStatus: prevData.appStatus,
          projects: parsed?.projects ?? {},
        }));
      } catch {
        localStorage.removeItem("storedProjects");
      }
    }
  }, []);

  const { appStatus = {}, projects = {} } = data ?? {};

  const handleSideBarNewProjectClick = () =>
    setData((prevData) => ({
      appStatus: {
        ...prevData.appStatus,
        isAddingProject: true,
        isEditingProject: false,
      },
      projects: { ...prevData.projects },
    }));

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      refs.title.current.value.trim() === "" ||
      refs.dueDate.current.value.trim() === ""
    ) {
      refs.modal.current.open();
      return;
    }
    setData((prevData) => {
      const id = uuid();
      const newData = {
        appStatus: {
          ...prevData.appStatus,
          isAddingProject: false,
          isEditingProject: false,
        },
        projects: {
          ...prevData.projects,
          [id]: {
            title: refs.title.current.value,
            description: refs.description.current.value,
            dueDate: refs.dueDate.current.value,
            tasks: [],
            id,
          },
        },
      };
      localStorage.setItem("storedProjects", JSON.stringify(newData));
      return newData;
    });
  };

  const handleSideBarProjectClick = (project) => {
    setData((prevData) => ({
      appStatus: {
        isAddingProject: false,
        isEditingProject: true,
        intendedProject: project,
      },
      projects: { ...prevData.projects },
    }));
  };

  const handleCancel = () => {
    setData((prevData) => ({
      appStatus: {
        ...prevData.appStatus,
        isAddingProject: false,
        isEditingProject: false,
      },
      projects: { ...prevData.projects },
    }));
  };

  return (
    <>
      <SideBar
        onNewProjectClick={handleSideBarNewProjectClick}
        projects={projects}
        onProjectClick={handleSideBarProjectClick}
        intendedProject={appStatus.intendedProject}
        isEditingProject={appStatus.isEditingProject}
      />
      <main className="flex flex-col justify-center items-center w-full md:px-5 px-2">
        {appStatus.isEditingProject && !appStatus.isAddingProject && (
          <Project
            setData={setData}
            intendedProject={appStatus.intendedProject}
            projects={projects}
            onCancel={handleCancel}
          />
        )}
        {appStatus.isAddingProject && !appStatus.isEditingProject ? (
          <NewProject
            onCancel={handleCancel}
            onFormSubmit={handleSubmit}
            refs={refs}
          />
        ) : null}
        {!appStatus.isAddingProject && !appStatus.isEditingProject ? (
          <NoProject onClick={handleSideBarNewProjectClick} />
        ) : null}
      </main>
    </>
  );
}

export default App;