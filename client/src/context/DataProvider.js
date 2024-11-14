// we created this context folder because if the user did the sign up then we have change the status of login button in header i.e from LoginDialog box in login folder to CustomButton in header folder
// we will need the change in status of the login button to username in multiple pages so we created a context API

import React, { createContext, useState } from "react";

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const [account, setAccount] = useState("");

  return (
    <DataContext.Provider
      value={{
        account,
        setAccount,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;

//Now, we go in App.js to import the dataProvider
