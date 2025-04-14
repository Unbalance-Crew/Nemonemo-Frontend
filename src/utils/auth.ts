import { ACCESS_TOKEN } from "@/constants/token/token.constants";
import { Token } from "@/libs/Token/token";

export const isAuthenticated = (): boolean => {
  const token = Token.getToken(ACCESS_TOKEN);
  return !!token;
};
