import { useContext } from "react";
import { DataContext } from "../../DataProvider/DataProvider";

const EmpDetails = () => {
  const { empData } = useContext(DataContext);
  return (
    <>
      <div className="mt-10 p-2 overflow-x-auto">
        <table className="w-full text-center border-collapse">
          <thead>
            <tr className="bg-red-500 border-emerald-400 border text-white">
              <th className="p-3">Employee Name</th>
              <th className="p-3">New Task</th>
              <th className="p-3">Active Task</th>
              <th className="p-3">Completed Task</th>
              <th className="p-3">Failed Task</th>
            </tr>
          </thead>

          <tbody>
            {empData.map((e, i) => {
              return (
                <tr key={i} className="border border-emerald-400 text-white">
                  <td className="p-2">{e.firstName}</td>
                  <td className="text-purple-300">{e.taskCounts.newTask}</td>
                  <td className="text-yellow-300">{e.taskCounts.active}</td>
                  <td className="text-gray-300">{e.taskCounts.completed}</td>
                  <td className="text-red-400">{e.taskCounts.failed}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default EmpDetails;
