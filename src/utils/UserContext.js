import { createContext } from "react";

const UserContext = createContext({
    loggedInUser: "Default User",
    test: "test data"
});

export default UserContext;