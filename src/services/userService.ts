import { appEnv } from "@/config/appEnv";
import { UserApi } from "@/types/apiInterfaces";
import { User } from "@/types/sharedInterfaces";

const userService: UserApi = {
  async createUser(user: User) {
    const response = await fetch(`${appEnv.baseApiUrl}/api/user`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    return {
      data,
      message: "User created successfully",
      status: response.status,
    };
  },
};

export default userService;
