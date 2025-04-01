import { StarIcon } from "../../../style/Icons";
import { FreeTitle } from "../../../components/Title";
import { ForwardArrow } from "../../../style/Icons";
import { useNavigate } from"react-router-dom";
import { useState, useEffect } from "react";
import Loading from "../../../components/Loading";

import axios from "axios";

export default function Matching() {
    const navigate = useNavigate();
    const [clickList, setClickList] = useState(false);

    const transformDate = (date) => {
        const dateNum = date.match(/\d+/g);
        const intDateNum = dateNum.map((str) => {
          return parseInt(str);
        });
    
        const objectDate = new Date(Date.UTC(2025, intDateNum[0]-1, intDateNum[1], 0, 0, 0));
        const modifiedDate = objectDate.toISOString().slice(0, -5);
        return modifiedDate.split('T')[0];
      }

    const getUserInfo = async (matchingData) => {
    await axios
        .get("/v1/api/user/info", {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
        },
        })
        .then((res) => {
        for (let i = 0; i < matchingData.length; i++) {
            matchingData[i]["nickname"] = res.data.nickname;
        }
        })
        .catch((err) => {
            console.log(err);
        });
    };

    const getData = async (data, index) => {
        const transDate = transformDate(data[index]["date"]);
        await axios.get(
          `/v1/api/match/${transDate}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
          },
        })
        .then((res) => {
          Object.assign(data[index], res.data.data);
          //stringify한 contact 정보 parsing
          data[index].contact = data[index].contact.map((item) => {
            return JSON.parse(item);
          })
          data[index].people = String(data[index].people) + "명";
          // //다시 되돌리기
          const reverseNum = data[index].matchDateTime.match(/\d+/g);
          //시간 구하기
          const time = reverseNum[3]+":"+reverseNum[4];
    
          const intReverseNum = reverseNum.map((str) => {
            return parseInt(str);
          });
    
          //요일 구하기
          const formatter = new Intl.DateTimeFormat("ko-KR", { weekday: "short" });
          const objectDate = new Date(Date.UTC(2025, intReverseNum[0]-1, intReverseNum[1], intReverseNum[2], intReverseNum[3], intReverseNum[4]));
          const week = formatter.format(objectDate);
    
          //month에 합치기
          const month = intReverseNum[1].toString() + "월 " + intReverseNum[2].toString() + "일 (" + week + ") " + time;
          data[index].matchDateTime = month;
        })
        .catch((err) => {
          console.log("해당 날짜에 등록된 매칭이 없습니다!!");
        })
      }

      const callGetData = async (matchingData) => {
        for (const [i, data] of matchingData.entries()) {
          await getData(matchingData, i);
        }
        navigate("/signup-list", { state: matchingData });

      }


    useEffect(() => {
        if (clickList) {
            const matchingData = [{date:"5월 14일"}, {date:"5월 15일"}, {date:"5월 16일"}];
            getUserInfo(matchingData);
            callGetData(matchingData);
            // console.log(matchingData);
        }
    }, [clickList]);


    return (
        clickList ? <Loading />
        :
        <div>
            <div className="flex flex-col z-0">
                <div className="pt-4 pb-4 mb-5">
                    <FreeTitle size={"3xl"} />
                </div>
                <div className="flex flex-row">
                    <div>
                        <p className="font-bold text-2xl mb-2">주점팟 매칭</p>
                        <p className="text-[15px] text-[#686868]">
                            주점팟 매칭으로 축제를 더욱 재밌게 즐겨보세요!</p>
                    </div>
                    <div className="absolute right-0 top-7">
                        <StarIcon size={{width:"120", height:"150"}}/>
                    </div>
                </div>
                <div className="absolute left-7 top-[253px] z-0">
                    <StarIcon size={{width:"55", height:"65"}}/> 
                </div>
                <div className = "flex flex-col mt-[150px] z-10">
                    <div className="w-full flex flex-col justify-start items-start gap-1 p-5 bg-white mb-4 rounded-xl"
                        style={{ boxShadow: "4px 4px 16px 8px rgba(210,210,210,0.25)" }}
                        onClick={() => {
                            navigate("/signup-matching");
                        }}
                        >
                        <div className="w-full flex flex-row justify-between">
                            <p className="font-bold text-[#FCAF16]">매칭 등록</p>
                            <button
                                className="
                                w-5
                                text-2xl
                                relative
                                "
                            >
                                <ForwardArrow />
                            </button>
                        </div>
                        <p className="text-sm">매칭을 등록해 나와 비슷한 <br></br>조건의 사람들과 주점 매칭을 기다려요.</p>
                    </div>
                    <div className="w-full flex flex-col justify-start items-start gap-1 p-5 bg-white mb-4 rounded-xl"
                        style={{ boxShadow: "4px 4px 16px 0 rgba(210,210,210,0.25)" }}>
                        <div className="w-full flex flex-row justify-between">
                            <p className="font-bold text-[#FCAF16]">매칭 등록 내역</p>
                            <button
                                className="
                                w-5
                                text-2xl
                                relative
                                "
                                onClick={() => {
                                    // navigate("/signup-list");
                                    setClickList(true);
                                }}
                            >
                                <ForwardArrow />
                            </button>
                        </div>
                        <p className="text-sm">나의 매칭 등록 내역을 확인해요.<br></br>매칭 등록 내역에서 수정하고 취소할 수 있어요.</p>
                    </div>
                    <div className="w-full flex flex-col justify-start items-start gap-1 p-5 bg-white mb-[120px] rounded-xl"
                        style={{ boxShadow: "4px 4px 16px 0 rgba(210,210,210,0.25)" }}>
                        <div className="w-full flex flex-row justify-between">
                            <p className="font-bold text-[#FCAF16]">매칭 결과</p>
                            <button
                                className="
                                w-5
                                text-2xl
                                relative
                                "
                                onClick={() => {

                                    navigate("/result-list");

                                }}
                            >
                                <ForwardArrow />
                            </button>
                        </div>
                        <p className="text-sm">나의 매칭 결과를 확인하고<br></br>나와 비슷한 조건의 사람들과 주점을 즐겨요.</p>
                        <p className="text-sm"></p>
                    </div>

                </div>
            </div>
        </div>);
}