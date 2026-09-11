import React, { createContext, useContext, useState } from 'react';

const AuthRoleContext = createContext();

export function AuthRoleProvider({ children }) {
  // Read saved role or default to 'officer'
  const [role, setRole] = useState(() => {
    return localStorage.getItem('bhoomi_role') || 'officer';
  });

  const [language, setLanguage] = useState('en'); // 'en' or 'kn'
  const [isAffidavitSigned, setIsAffidavitSigned] = useState(false);
  const [notificationCount, setNotificationCount] = useState(3);
  const [isTechStackOpen, setIsTechStackOpen] = useState(false);

  const changeRole = (newRole) => {
    setRole(newRole);
    localStorage.setItem('bhoomi_role', newRole);
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'kn' : 'en');
  };

  return (
    <AuthRoleContext.Provider
      value={{
        role,
        setRole: changeRole,
        language,
        setLanguage,
        toggleLanguage,
        isAffidavitSigned,
        setIsAffidavitSigned,
        notificationCount,
        setNotificationCount,
        isTechStackOpen,
        setIsTechStackOpen
      }}
    >
      {children}
    </AuthRoleContext.Provider>
  );
}

export function useAuthRole() {
  const context = useContext(AuthRoleContext);
  if (!context) {
    throw new Error('useAuthRole must be used within an AuthRoleProvider');
  }
  return context;
}

