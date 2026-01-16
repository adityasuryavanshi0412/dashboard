import { useContext, useState } from "react";
import { DataContext } from "../DataProvider/DataProvider";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {
    empData,
    setempLog,
    setadminLog,
    adminData,
    setSendEmpData,
    setSendAdminData,
  } = useContext(DataContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const adminFind = adminData.find(
      (item) => email === item.email && password === item.password
    );

    if (adminFind) {
      setadminLog(true);
      setempLog(false);
      setSendAdminData(adminFind);
      setEmail("");
      setPassword("");
      return;
    }

    const empFind = empData.find(
      (item) => email === item.email && password === item.password
    );

    if (empFind) {
      setempLog(true);
      setadminLog(false);
      setSendEmpData(empFind);
      // console.log(empFind);
      setEmail("");
      setPassword("");
      return;
    }

    alert("Invalid email or password");
  };

  return (
    <>
      <div className="min-h-screen flex justify-center items-center bg-gray-900 px-4">
        <form
          onSubmit={handleSubmit}
          className="
          w-full 
          sm:w-[90%] 
          md:w-[70%] 
          lg:w-[40%] 
          bg-black 
          border-2 border-emerald-500 
          rounded-2xl 
          p-6 
          flex 
          flex-col 
          gap-4
        "
        >
          <h2 className="text-white text-2xl font-semibold text-center">
            Login
          </h2>

          <input
            type="email"
            placeholder="Email"
            className="
            w-full 
            p-3 
            rounded-2xl 
            bg-transparent 
            border-2 
            border-emerald-500 
            text-white 
            placeholder:text-gray-400
          "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="
            w-full 
            p-3 
            rounded-2xl 
            bg-transparent 
            border-2 
            border-emerald-500 
            text-white 
            placeholder:text-gray-400
          "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="
            w-full 
            bg-emerald-500 
            text-white 
            py-3 
            rounded-2xl 
            font-semibold
            transition 
            duration-300 
            hover:bg-white 
            hover:text-black 
            hover:scale-95
          "
          >
            LOG IN
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
