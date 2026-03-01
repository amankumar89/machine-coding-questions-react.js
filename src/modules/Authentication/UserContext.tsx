/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

type UserContextType = {
    isLoggedin: boolean;
    setIsLoggedin: React.Dispatch<React.SetStateAction<boolean>>;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const [isLoggedin, setIsLoggedin] = useState<boolean>(false);

    return <UserContext.Provider value={{
        isLoggedin,
        setIsLoggedin
    }}>
        {children}
    </UserContext.Provider>
}

const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useUser must be used inside UserProvider");
    }
    return context;
};

export { useUser, UserProvider }