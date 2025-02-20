import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define profile
interface ProfileState {
  name: string;
  age: number;
  height: number;
  weight: number;
}

// Define the context and actions
interface ProfileContextType extends ProfileState {
  setName: (name: string) => void;
  setAge: (age: number) => void;
  setHeight: (height: number) => void;
  setWeight: (weight: number) => void;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export const ProfileProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [name, setName] = useState<string>('');
  const [age, setAge] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);

  return (
    <ProfileContext.Provider
      value={{ name, age, height, weight, setName, setAge, setHeight, setWeight }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = (): ProfileContextType => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error('useProfile must be used within a ProfileProvider');
  }
  return context;
};
