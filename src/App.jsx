import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAccountsData } from "./actions/accountActions";
import Dropdown from "./components/Dropdown";


function App() {
  const dispatch = useDispatch();
  const accounts = useSelector((state) => state.accounts);

  useEffect(() => {
    dispatch(fetchAccountsData());
  }, [dispatch]);

  console.log(accounts);
  if (!accounts) {
    return <div>Loading...</div>;
  }

  return (
    <div className="main-container">
      <Dropdown accounts={accounts} />
    </div>
  );
}

export default App;
