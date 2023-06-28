import React, { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAccountsData } from "./actions/accountActions";
import AccountContainer from "./components/AccountContainer";

function App() {
  const dispatch = useDispatch();
  const accounts = useSelector((state) => state.accounts);

  useEffect(() => {
    dispatch(fetchAccountsData());
  }, [dispatch]);

  if (!accounts) {
    return <div>Loading...</div>;
  }

  return (
    <div className="main-container">
      <Suspense fallback={<div>Loading....</div>}>
        <AccountContainer accounts={accounts} />
      </Suspense>
    </div>
  );
}

export default App;
