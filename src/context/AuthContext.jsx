import { pb } from '@/api/pocketbase';
import { createContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const AuthContext = createContext();

const initalAuthState = {
  isAuth: false,
  user: null,
  token: '',
};

function AuthProvider({ displayName = 'Auth.Provider', children }) {
  const [authState, setAuthState] = useState(initalAuthState);

  useEffect(() => {
    pb.authStore.onChange((model, token) => {
      setAuthState((prev) => ({
        ...prev,
        isAuth: !!model,
        user: model,
        token,
      }));
    });

    return () => {};
  }, []);

  const signUp = async (registerUser) => {
    return await pb.collection('users').create(registerUser);
  };
  const signIn = async (userNameOrEmail, password) => {
    return await pb
      .collection('users')
      .authWithPassword(userNameOrEmail, password);
  };
  const signOut = async () => {
    return await pb.collection('users').clear();
  };
  const membershipWithdrawal = async (recordId) => {
    return await pb.collection('users').delete(recordId);
  };

  const authValue = {
    ...authState,
    signUp,
    signIn,
    signOut,
    membershipWithdrawal,
  };

  return (
    <AuthContext.Provider value={authValue} displayName={displayName}>
      {children}
    </AuthContext.Provider>
  );
}
export default AuthProvider;
