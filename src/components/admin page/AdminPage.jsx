import { useContext, useState } from "react";
import Navbar from "../Navbar";
import { DataContext } from "../../DataProvider/DataProvider";
import EmpDetails from "./EmpDetails";

const AdminPage = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [date, setDate] = useState("");
  const [empName, setEmpName] = useState("");
  const [category, setCategory] = useState("");
  const [taskDescription, settaskDescription] = useState("");

  const { empData, setempData } = useContext(DataContext);

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = {
      active: false,
      newTask: true,
      failed: false,
      completed: false,
      taskTitle,
      date,
      empName,
      category,
      taskDescription,
    };

    const copyData = [...empData];

    const emp = copyData.find(
      (e) => e.firstName.toLowerCase() === empName.toLowerCase()
    );

    if (emp) {
      emp.tasks.push(formData);
      emp.taskCounts.newTask += 1;

      setempData(copyData);

      setTaskTitle("");
      setDate("");
      setEmpName("");
      setCategory("");
      settaskDescription("");
    } else {
      alert("Invalid Employee Name");
    }
  };

  return (
    <div className="min-h-screen bg-gray-800 p-4">
      <Navbar username={"admin"} />

      <form
        onSubmit={submitHandler}
        className="mt-10 grid gap-6 grid-cols-1 lg:grid-cols-2 bg-gray-800 rounded-2xl p-6"
      >
        <div className="flex flex-col gap-4">
          <label className="text-white flex flex-col">
            Task Title
            <input
              required
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="mt-1 p-2 rounded-md bg-transparent border border-gray-400 text-white"
              type="text"
              placeholder="Make a UI design"
            />
          </label>

          <label className="text-white flex flex-col">
            Date
            <input
              required
              onChange={(e) => setDate(e.target.value)}
              className="mt-1 p-2 rounded-md  border bg-white"
              type="date"
            />
          </label>

          <label className="text-white flex flex-col">
            Assign To
            <input
              required
              value={empName}
              onChange={(e) => setEmpName(e.target.value)}
              className="mt-1 p-2 rounded-md bg-transparent border border-gray-400 text-white"
              type="text"
              placeholder="Employee name"
            />
          </label>

          <label className="text-white flex flex-col">
            Category
            <input
              required
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="mt-1 p-2 rounded-md bg-transparent border border-gray-400 text-white"
              type="text"
              placeholder="Design, Dev, etc"
            />
          </label>
        </div>

        <div className="flex flex-col gap-4">
          <label className="text-white flex flex-col">
            Description
            <textarea
              required
              value={taskDescription}
              onChange={(e) => settaskDescription(e.target.value)}
              className="mt-1 p-2 rounded-md bg-transparent border border-gray-400 text-white"
              rows={6}
            />
          </label>

          <button
            type="submit"
            className="mt-auto bg-emerald-600 text-white p-3 rounded-md hover:bg-emerald-700 transition active:scale-95"
          >
            Create Task
          </button>
        </div>
      </form>
      <EmpDetails />
    </div>
  );
};

export default AdminPage;
