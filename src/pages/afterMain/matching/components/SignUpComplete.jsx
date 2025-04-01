import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MenuIcon } from "../../../../style/Icons";
import axios from "axios";

import Modal from "react-modal";


function DeleteModal({ isModalOpen, setIsModalOpen, handleDelete }) {
    return (
        <Modal 
            isOpen={isModalOpen}
            ariaHideApp={false}
            onRequestClose={() => {
                setIsModalOpen(false);
            }}
            shouldCloseOnOverlayClick={true}
            className="flex flex-col z-10 justify-center items-center w-[304px] h-[191px] absolute top-[300px] left-[44px]
           rounded-2xl bg-white outline-none"
           overlayClassName="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center"
        >
            <p className="mb-4 text-2xl font-bold">매칭 취소</p>
            <p className="text-[#969696] mb-8">5월 15일 (화) 매칭을 취소하시겠어요?</p>
            <div className="flex flex-row gap-3">
              <div className="flex justify-center items-center w-[122px] h-[44px] border border-[#DFDFDF] text-[#858585] rounded-lg"
              onClick={() => setIsModalOpen(false)}>
                아니요
              </div>
              <div className="flex justify-center items-center w-[122px] h-[44px] bg-[#FC5852] text-white rounded-lg"
              onClick={() => handleDelete()}>
                매칭 취소
              </div>
            </div>
        </Modal>
    );

}

export default function SignUpComplete({ matchingData }) {
    const outside = useRef();
    const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const handlerOutside = (e) => {
      if (!outside.current.contains(e.target)) {      
        setIsOpen(false);    
      }  
    };

    const transformDate = (date) => {
      const dateNum = date.match(/\d+/g);
      const intDateNum = dateNum.map((str) => {
        return parseInt(str);
      });
  
      const objectDate = new Date(Date.UTC(2025, intDateNum[0]-1, intDateNum[1], 0, 0, 0));
      const modifiedDate = objectDate.toISOString().slice(0, -5);
      return modifiedDate.split('T')[0];
    }

    const handleDelete = async () => {
      const JWT_TOKEN = localStorage.getItem("jwtToken");
      const transDate = transformDate(matchingData["date"]);
      await axios.delete(
        `/v1/api/match/${transDate}`, {
          headers: {
            Authorization: `Bearer ${JWT_TOKEN}`, // JWT 토큰을 사용한 인증
          }
        }
      )
      .then((res) => {
        console.log(res);
        navigate('/matching');
        // window.location.reload();
      })
      .catch((err) => {
        console.err(err);
      })
    }

    const handleModify = () => {
      //tossData에 들어갈 date와 time을 형식에 맞춰 변경
      const sliceDate = matchingData.matchDateTime.split(' ');
      let modifyDate = "";
      let modifyTime = "";
      sliceDate.map((str, idx) => {
        if (idx !== 3) {
          modifyDate += str;
        }
        else {
          modifyTime += str;
        }

        if (idx === 0 || idx === 1) {
          modifyDate += " ";
        }
      })

      // tossData에 들어갈 drink와 drinkHalf을 형식에 맞춰 변경
      const sliceDrink = matchingData.drink.split(' ');
      let modifyDrink = "";
      let modifyHalf = "";
      if (sliceDrink.length === 1) {
        modifyDrink = sliceDrink[0];
      } else {
        modifyDrink = sliceDrink[0];
        modifyHalf = " "+sliceDrink[1];
      }

      const tossData = {
        date: modifyDate,
        nickname: matchingData.nickname,
        img: matchingData.groupImg,
        gender: matchingData.gender,
        wantedGender: matchingData.desiredGender,
        time: modifyTime,
        drink: modifyDrink,
        drinkHalf: modifyHalf,
        people: parseInt(matchingData.people[0]),
        mood: matchingData.mood,
        contact: matchingData.contact,
      };

      navigate("/signup-matching", { state: tossData });
    };

  
    useEffect(() => {    
      document.addEventListener('mousedown', handlerOutside);    
      return () => {      
        document.removeEventListener('mousedown', handlerOutside);    
      };  
    });
  
    return (
      <>
        <div>
          <div className="flex flex-row">
              <header className="py-6 text-lg font-medium">
                <span className="font-bold ">{matchingData.nickname}님의</span> 등록 내역
              </header>
              <div className="py-6 absolute right-8"
                ref={outside}>
                {!isOpen? <MenuIcon onIconClick={() => setIsOpen(true)}/> : 
                  <div className="flex flex-col w-[97px] h-[118px] rounded-2xl gap-8 bg-white border border-[#f3f3f3] justify-center items-center">
                    <div className=""
                    onClick={() => {
                      handleModify();
                    }}>
                      수정하기
                    </div>
                    <div
                    onClick={() => {
                      setIsOpen(false);
                      setIsModalOpen(true);
                    }}>
                      등록취소
                    </div>
                </div>}
              </div>
              {isModalOpen?
              <DeleteModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} handleDelete={handleDelete}/>
              :null}

            </div>
          <div className="className=w-full bg-white p-5 rounded-2xl shadow-md">
            <div className="flex justify-center items-center">
                <div className="w-[160px] h-[160px] mb-6 rounded-xl">
                <img
                    src={matchingData.groupImg}
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
                {matchingData.desiredGender}
              </span>
            </p>
            <p className="flex justify-between ">
              시간
              <span className="text-sm font-bold text-black">
                {matchingData.matchDateTime}
              </span>
            </p>
            <p className="flex justify-between ">
              평균 주량
              <span className="text-sm font-bold text-black">
                {matchingData.drink}
              </span>
            </p>
            <p className="flex justify-between ">
              원하는 인원
              <span className="text-sm font-bold text-black">
                {matchingData.people}
              </span>
            </p>
            <p className="flex justify-between ">
              원하는 분위기
              <span className="text-sm font-bold text-black">
                {matchingData.mood}
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
        </div>
      </>
    );
  }
  