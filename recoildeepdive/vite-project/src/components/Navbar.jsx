import React from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import {
  networkAtom,
  jobsAtom,
  notifyAtom,
  allValuesSelector,
} from "../atoms.jsx";
const Navbar = () => {
  const [networkCount, setNetworkCount] = useRecoilState(networkAtom);
  const jobsCount = useRecoilValue(jobsAtom);
  const notifyCount = useRecoilValue(notifyAtom);
  const allValues = useRecoilValue(allValuesSelector);

  function handleClick() {
    setNetworkCount((prev) => prev + 1);
  }
  return (
    <div className="flex">
      {" "}
      '<button>HOME</button>
      <button>MY NETWORK ({networkCount})</button>
      <button>JOBS({jobsCount})</button>
      <button>NOTIFY ({notifyCount})</button>
      <button>ALL NOTIFICATIONS ({allValues})</button>
      <button onClick={handleClick}>Increase</button>
    </div>
  );
};

export default Navbar;
