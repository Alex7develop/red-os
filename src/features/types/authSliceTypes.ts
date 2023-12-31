export interface AuthState {
  isAuthenticated: boolean;
}

export const initialState: AuthState = {
  isAuthenticated: localStorage.getItem('isAuthenticated') === 'true',
};
