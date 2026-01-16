import { useContext } from "react";
import Navbar from "./Navbar";
import { DataContext } from "../DataProvider/DataProvider";

const EmployeePage = () => {
  const {sendEmpData} = useContext(DataContext);

  return (
    <div className="min-h-screen bg-gray-800 p-4">
      <Navbar username={sendEmpData.firstName} />

      <div className="mt-4 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {[
          {
            color: "bg-blue-400",
            title: "New Task",
            taskCount: sendEmpData.taskCounts.newTask,
          },
          {
            color: "bg-green-400",
            title: "Completed Task",
            taskCount: sendEmpData.taskCounts.completed,
          },
          {
            color: "bg-yellow-400",
            title: "Accepted Task",
            taskCount: sendEmpData.taskCounts.active,
          },
          {
            color: "bg-red-400",
            title: "Failed Task",
            taskCount: sendEmpData.taskCounts.failed,
          },
        ].map((item, index) => (
          <div key={index} className={`p-5 rounded-2xl ${item.color}`}>
            <h1 className="text-4xl font-bold">{item.taskCount}</h1>
            <p className="text-xl mt-1">{item.title}</p>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <h2 className="text-white text-2xl font-bold mb-4">Assigned Tasks</h2>

        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {sendEmpData.tasks.map((e, i) => {
            return (
              <div
                key={i}
                className="p-4 rounded-2xl bg-cyan-100 flex flex-col gap-3"
              >
                {/* {console.log(e)} */}
                <div className="flex justify-between items-center">
                  <button className="bg-red-700 py-1 px-3 rounded-md text-white text-sm">
                    {e.category}
                  </button>
                  <p className="text-sm text-gray-700">{e.taskDate}</p>
                </div>

                <div>
                  <h1 className="font-bold text-xl">{e.taskTitle}</h1>
                  <p className="text-gray-700 text-sm mt-1">
                    {e.taskDescription}
                  </p>
                </div>
                <div className=" flex gap-1 flex-wrap justify-around">
                  <button className=" px-2 rounded-md mt-auto bg-blue-400   hover:bg-blue-700 transition active:scale-95">
                    {e.newTask && "NEWTASK"}
                  </button>
                  <button className="px-2 rounded-md mt-auto bg-green-400   hover:bg-green-700 transition active:scale-95">
                    {e.completed && "COMPLETED"}
                  </button>
                  <button className="rounded-md px-2 mt-auto bg-yellow-400   hover:bg-yellow-700 transition active:scale-95">
                    {e.active && "ACTIVE"}
                  </button>
                  <button className=" rounded-md px-2 mt-auto bg-red-400   hover:bg-red-700 transition active:scale-95">
                    {e.failed && "FAILED"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EmployeePage;
