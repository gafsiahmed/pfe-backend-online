import { createContext, useMemo, useState } from "react";

export const UserContext = createContext({
    user: null,
    token: null,
    setUser: () => {},
    setToken: () => {},
});

export default function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);

    const value = useMemo(() => {
        return {
            user,
            token,
            setUser,
            setToken,
        };
    }, [user, token]);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
