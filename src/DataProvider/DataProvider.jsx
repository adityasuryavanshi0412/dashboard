import React, { createContext, useEffect, useState } from "react";
import { employees } from "../Data/Data";
import { admin } from "../Data/Data";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [empLog, setempLog] = useState(false);
  const [adminLog, setadminLog] = useState(false);
  const [empData, setempData] = useState([]);
  const [adminData, setadminData] = useState([]);
  const [sendEmpData, setSendEmpData] = useState([]);
  const [sendAdminData, setSendAdminData] = useState([]);

  useEffect(() => {
    localStorage.clear();
    localStorage.setItem("employees", JSON.stringify(employees));
    localStorage.setItem("admin", JSON.stringify(admin));
    const empData = JSON.parse(localStorage.getItem("employees"));
    const adminData = JSON.parse(localStorage.getItem("admin"));
    // console.log(empData);
    setempData(empData);
    setadminData(adminData);
  }, []);

  return (
    <div>
      <DataContext.Provider
        value={{
          empData,
          empLog,
          setempLog,
          adminLog,
          setadminLog,
          adminData,
          sendEmpData,
          setSendEmpData,
          sendAdminData,
          setSendAdminData,
          setempData,
        }}
      >
        {children}
      </DataContext.Provider>
    </div>
  );
};

export default DataProvider;
