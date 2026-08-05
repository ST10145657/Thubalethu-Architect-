// This is now a mock that can be replaced with your actual API client
export const base44 = {
  auth: {
    me: async () => {
      const token = localStorage.getItem('auth_token');
      const response = await fetch('/api/auth/me', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      return response.json();
    },
    logout: (redirectUrl) => {
      localStorage.removeItem('auth_token');
      if (redirectUrl) window.location.href = redirectUrl;
    },
    redirectToLogin: (redirectUrl) => {
      window.location.href = `/login?redirect=${encodeURIComponent(redirectUrl)}`;
    }
  }
};