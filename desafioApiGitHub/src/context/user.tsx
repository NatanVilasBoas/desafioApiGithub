import { ReactNode, createContext, useContext, useState } from "react";

interface User {
    login: string;
    avatar_url: string;
}

const initialValue = {
    user: {} as User,
    setUser: () => {},
};

type UserContextProps = {
    children: ReactNode;
};

type UserContextType = {
    user: User;
    setUser: (newState: User) => void;
};

export const UserContext = createContext<UserContextType>(initialValue);

UserContext.displayName = "Wheater";

export const UserProvider = ({ children }: UserContextProps) => {
    const [user, setUser] = useState<User>(initialValue.user);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export function useUserContext() {
    const { user, setUser } = useContext(UserContext);
    return { user, setUser };
}
