import { useContext } from "react";
import "./App.css";
import AdminPage from "./components/admin page/AdminPage";
import EmployeePage from "./components/EmployeePage";
import Login from "./components/Login";
import { DataContext } from "./DataProvider/DataProvider";

function App() {
  const { empLog, adminLog } = useContext(DataContext);
  return (
    <>
      <div>
        {empLog && <EmployeePage />}
        {adminLog && <AdminPage />}
        {!empLog && !adminLog && <Login />}
      </div>
    </>
  );
}

export default App;
