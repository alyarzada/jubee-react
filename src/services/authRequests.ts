import axios from "axios";

export const authHandlers = {
  loginHandler: async (data: string): Promise<any> => {
    try {
      const response = await axios.post(
        process.env.VITE_APP_API_URL + "/auth/login",
        data,
      );
      return response.data;
    } catch (error: any) {
      return error.message;
    }
  },
  logoutHandler: async (): Promise<any> => {
    try {
      const response = await axios.delete(
        process.env.VITE_APP_API_URL + "/auth/logout",
        {
          headers: { token: "daksndklasn" },
        },
      );
      return response;
    } catch (error: any) {
      return error.message;
    }
  },
};
