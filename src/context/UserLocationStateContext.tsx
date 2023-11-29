import { ReactNode, createContext, useContext, useState } from "react";

interface LocationStateContextProviderProps {
  children: ReactNode;
}

type UserLocation = {
  coords: any;
  latitude: number;
  longitude: number;
};

const useUserLocationStateContextValue = () => {
  const [userLocation, setUserLocation] = useState<UserLocation>();

  return {
    userLocation,
    setUserLocation,
  };
};

type UserLocationStateContextValue = ReturnType<
  typeof useUserLocationStateContextValue
>;

 const UserLocationStateContext = createContext<UserLocationStateContextValue | null>(null);

export const UserLocationStateContextProvider = ({
  children,
}: LocationStateContextProviderProps) => {
  const userLocationStateContextValue = useUserLocationStateContextValue();
  return (
   <UserLocationStateContext.Provider
      value={userLocationStateContextValue}
    >
      {children}
    </UserLocationStateContext.Provider>
  );
};
    
export const useUserLocationStateContext = () => {
    const context = useContext(UserLocationStateContext);
    if (!context) {
        throw new Error("useUserLocationStateContext must be used within a UserLocationStateContextProvider");
    }
    return context;
};