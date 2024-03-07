import axios from "axios";

export async function UserLoginService(data) {
  try {
    const headers = {
      "Content-Type": "application/json",
    };

    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}login`,
      data,
      { headers }
    );

    console.log("try");
    return response;
  } catch (err) {
    return err.response;
  }
}
