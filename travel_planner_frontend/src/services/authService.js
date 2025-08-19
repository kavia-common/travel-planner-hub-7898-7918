// Mock auth service
export const login = async (email, password) => {
  console.log('Logging in with', email, password);
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ success: true, user: { name: 'Test User' } });
    }, 1000);
  });
};

export const logout = async () => {
  console.log('Logging out');
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ success: true });
    }, 500);
  });
};
