import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "../../../components/Button";
import axios from "axios";
// import SignUpComplete from "./components/SignUpComplete";

function SignUpComplete({ matchingData }) {
  const isNickname = matchingData.nickname !== "닉네임"? true : false;
  return (
    <>
      <div className="w-full bg-white p-5 rounded-2xl shadow-md">
          {isNickname?
          <div className="flex justify-center font-bold mb-4">
              <p>
                  {matchingData.nickname}님의 팀
              </p>
          </div>
          :
          null}
          
          <div className="flex justify-center items-center">
              <div className="w-[160px] h-[160px] mb-6 rounded-xl">
              <img
                  src={matchingData.img}
                  alt="팀사진"
                  className="w-full h-full rounded-xl object-fill"
                  />
              </div>
          </div>
        

        <div className="flex flex-col gap-4 text-[#969696] text-[0.8125rem]">
          <p className="flex justify-between">
            본인 (팀) 성별
            <span className="text-sm font-bold text-black">
              {matchingData.gender}
            </span>
          </p>
          <p className="flex justify-between ">
            원하는 성별
            <span className="text-sm font-bold text-black">
              {matchingData.preferredGender}
            </span>
          </p>
          <p className="flex justify-between ">
            시간
            <span className="text-sm font-bold text-black">
              {matchingData.time}
            </span>
          </p>
          <p className="flex justify-between ">
            평균 주량
            <span className="text-sm font-bold text-black">
              {matchingData.averageAlcohol}
            </span>
          </p>
          <p className="flex justify-between ">
            원하는 인원
            <span className="text-sm font-bold text-black">
              {matchingData.preferredPeople}
            </span>
          </p>
          <p className="flex justify-between ">
            원하는 분위기
            <span className="text-sm font-bold text-black">
              {matchingData.preferredMood}
            </span>
          </p>
          <p className="flex justify-between ">
            연락처
            <span className="text-sm font-bold text-black text-right">
              {matchingData.contact.map((item) => {
                  return(
                      <p>{item.title}</p>
                  );
              })}
            </span>
          </p>
        </div>
      </div>
    </>
  );
}


export default function SignUpMatchingComplete() {
  const location = useLocation();

  const title = location.state.title;
  const fileUrl = location.state.fileUrl;

  const signUpData = {
    date: location.state.date,
    nickname: location.state.nickname,
    img: location.state.img,
    gender: location.state.gender,
    preferredGender: location.state.preferredGender,
    time: location.state.time,
    averageAlcohol: location.state.averageAlcohol,
    preferredPeople: location.state.preferredPeople,
    preferredMood: location.state.preferredMood,
    contact: location.state.contact
};

const transformDate = () => {
  const dateNum = signUpData.time.match(/\d+/g);
  const intDateNum = dateNum.map((str) => {
    return parseInt(str);
  });

  const objectDate = new Date(Date.UTC(2025, intDateNum[0]-1, intDateNum[1], intDateNum[2], intDateNum[3], 0));
  const modifiedDate = objectDate.toISOString().slice(0, -5);
  signUpData.time = modifiedDate;
  signUpData.date = modifiedDate.split('T')[0];


  // //다시 되돌리기
  // const reverseNum = modifiedDate.match(/\d+/g);
  // //시간 구하기
  // const time = reverseNum[3]+":"+reverseNum[4];
  // console.log(time);

  // const intReverseNum = reverseNum.map((str) => {
  //   return parseInt(str);
  // });

  // //요일 구하기
  // const formatter = new Intl.DateTimeFormat("ko-KR", { weekday: "short" });
  // const week = formatter.format(objectDate);

  // //month에 합치기
  // const month = intReverseNum[1].toString() + "월 " + intReverseNum[2].toString() + "일 (" + week + ") " + time;
  // console.log(month);

};

const postMatchingData = async () => {
  const JWT_TOKEN = localStorage.getItem("jwtToken");
  let imgUrl = "";

  const formData = new FormData();
  formData.append("file", fileUrl); // 파일을 FormData에 추가 (첫 번째 인자는 서버에서 사용할 필드 이름)

  await axios
      .post(
      "/v1/api/polaroid/upload",
      formData,
      {
          headers: {
          Authorization: `Bearer ${JWT_TOKEN}`,
          "Content-Type": "multipart/form-data", // 파일 업로드 시 필수 헤더
          },
      }
      )
      .then((res) => {
        imgUrl = res.data.data.imgLink;
      })
      .catch((err) => {
      console.log(err);
  });

  // const transformData = JSON.stringify(signUpData.contact);
  // signUpData.contact = transformData;
  transformDate();
  const postData = {
    groupName: "Test Group",
    groupInfo: "This is a test group for matching.",
    people: parseInt(signUpData.preferredPeople[0]),
    matchDate: signUpData.date,
    startTime: signUpData.time,
    gender: signUpData.gender,
    desiredGender: signUpData.preferredGender,
    drink: signUpData.averageAlcohol,
    mood: signUpData.preferredMood,
    contact: signUpData.contact,
    // contact:["1234"],
    groupImg: imgUrl,
  };
  // postData.contact = JSON.stringify(postData.contact);
  postData.contact = postData.contact.map((item) => {
    return JSON.stringify(item);
  });

  console.log(postData);

  // axios.defaults.headers.common["Content-Type"] = "application/json";

  // console.log("📌 요청 헤더:", axios.defaults.headers.common); // 🔥 3️⃣ Axios 헤더 확인
  console.log(JWT_TOKEN);
  await axios
    .post(
      "/v1/api/match",
      postData,
      {
        headers: {
        Authorization: `Bearer ${JWT_TOKEN}`,
        "Content-Type": "application/json", // 🔥 이 부분 명확하게 추가!
       }
      },
    )
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log("매칭 등록 실패:", err.response);
    });

    // await axios
    //   .get(
    //     "/v1/api/match/2025-05-16",
    //     {
    //       headers: {
    //         Authorization: `Bearer ${JWT_TOKEN}`,
    //       }
    //     }
    //   )
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => console.log(err));
};



  return (
    <div className="flex flex-col h-full ">
      <div className="flex justify-center align-center mt-12 mb-6">
        <p className="font-semibold text-lg">
            {title}
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <SignUpComplete matchingData={signUpData} />
      </div>


      <div className="flex justify-center items-center mt-12 mb-4">
        <p className="text-[#686868] text-sm font-medium">매칭 결과는 0시에 알려드릴게요!</p>
      </div>

      <div className="mb-4"
        onClick={() => postMatchingData()}>
        <Button state={true} title={"확인"} path={"/matching"} />
      </div>
    </div>
  );
}
