import { User } from "../../entities/User";
import { httpClient } from "../httpClient";

type MeResponse = {
  user: User
};

export async function me() {
  const { data } = await httpClient.get<MeResponse>('/users/me');

  return data;
}
