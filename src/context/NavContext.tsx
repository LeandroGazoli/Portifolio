import React, { useState, ReactNode, createContext } from 'react';

type NavContextProps = {
  activeLinkId: string;
  setActiveLinkId: React.Dispatch<string>;
};

export const NavContext = createContext({} as NavContextProps);

interface NavProviderProps {
  children: ReactNode;
}

const NavProvider = ({ children }: NavProviderProps) => {
  const [activeLinkId, setActiveLinkId] = useState('');
  const providerValue = {
    activeLinkId,
    setActiveLinkId,
  };
  return <NavContext.Provider value={providerValue}>{children}</NavContext.Provider>;
};

export default NavProvider;
