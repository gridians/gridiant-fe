import { getCookieToken } from '../../cookie/cookie';
import { api } from "../untils";

// login query
// 로그인 정보 보내기
export const postLoginUseQueryUserInfo = async (userLoginInfo) => {
  const res = await api.post("/user/auth/login", {
    email: userLoginInfo.email,
    password: userLoginInfo.password,
  });
  return res.data;
};

// 비밀번호 찾기
export const postLoginQueryFindUserPassword = async (email) => {

  console.log(email);
  const res = api.post(
    "/user/auth/find-password",
    {
      email: email,
    },
    {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        accept: "application/json,",

        Authorization: `Bearer ${getCookieToken("accessToken")}`,
      },
    }
  );
  return res.data;
};