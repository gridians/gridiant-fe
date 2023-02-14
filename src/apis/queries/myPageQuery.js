import { getCookieToken } from "../../cookie/cookie";
import { api, cookieApi } from "../untils";

// mypage query
// 유저프로필 이미지
export const myPageUseMutationPutUserProfile = async (uploadProfile) => {
  console.log(uploadProfile);
  const res = await api.put(
    `/user/profile`,
    {
      base64Image: uploadProfile,
    },
    {
      headers: {
        "Content-Type": "application/json",
        accept: "application/json,",
        Authorization: `Bearer ${getCookieToken("accessToken")}`,
      },
    }
  );
  return res.data;
};

// 유저정보 받아오기
export const myPageUseQueryGetUserInfo =  async() => {
  const res = await api.get("/user/valid", {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      accept: "application/json,",
      Authorization: `Bearer ${getCookieToken("accessToken")}`,
    },
  });
  return res.data;
};

// 유저이메일 보내기
export const myPageUseMutationPostEditEmail =async (email) => {
  const res = api.post(
    "/user/update-email",
    { email: email },
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

// 유저이메일 수정
export const myPageUseMutationPutEditEmail =async (id) => {
  const res = cookieApi.put("/user/update-email", { email: id });
  return res.data;
};

// 유저닉네임, 아이디, 비밀번호 수정
export const myPageUseMutationPutEditUserInfo =async (userInfo) => {
  const res = api.put(
    "/user/update-user",
    {
      nickname: userInfo.nickname,
      password: userInfo.password,
      updatePassword: userInfo.newPassword,
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


// 유저 회원탈퇴
export const myPageUseMutationDeleteUserInfo = async(deleteInfo) => {
  const res = await api.delete(
    "/user/delete",
    {
      data: { password: deleteInfo } ,
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        accept: "application/json,",
        Authorization: `Bearer ${getCookieToken("accessToken")}`,
      },
    }
  );
  return res.data;
};
