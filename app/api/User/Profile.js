import axios from "axios";
import { getCookie } from "cookies-next";

export async function UserGetProfileData() {
  const token = getCookie("accessToken");
  try {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };

    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}profile`,
      { headers }
    );

    return response;
  } catch (err) {
    return err.response;
  }
}
