import { useContext } from "react";
import { DataContext } from "../DataProvider/DataProvider";

const Navbar = (props) => {
  const { setempLog, setadminLog } = useContext(DataContext);
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      <div>
        {/* {console.log(props)} */}
        <h5 className="font-medium text-lg sm:text-2xl text-white">Hello</h5>
        <h6 className="font-bold text-2xl sm:text-4xl text-white">
          {props.username} ✋
        </h6>
      </div>

      <button
        onClick={() => setempLog(false) & setadminLog(false)}
        className="text-white bg-red-600 rounded-lg px-4 py-2 active:scale-95 hover:bg-red-700 transition"
      >
        LOG OUT
      </button>
    </div>
  );
};

export default Navbar;
