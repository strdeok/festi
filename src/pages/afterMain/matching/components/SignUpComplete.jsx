import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MenuIcon } from "../../../../style/Icons";

import Modal from "react-modal";

function DeleteModal({ isModalOpen, setIsModalOpen }) {
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
              <div className="flex justify-center items-center w-[122px] h-[44px] bg-[#FC5852] text-white rounded-lg">
                매칭 취소
              </div>
            </div>
        </Modal>
    );

}

export default function SignUpComplete({ matchingData }) {
    const isNickname = matchingData.nickname !== "닉네임"? true : false;

    const outside = useRef();
    const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const handlerOutside = (e) => {
      if (!outside.current.contains(e.target)) {      
        setIsOpen(false);    
      }  
    };

    const handleModify = () => {
      //
      const matchingData = {
        date: "5월 14일 (목)",
        nickname: "닉네임",
        img: "/images/sample image (1).jpg",
        gender: "남자",
        wantedGender: "혼성",
        time: "19:00",
        drink: "1병",
        drinkHalf: " 반",
        people: "4",
        mood: "도란도란",
        contact: [{ id:0, title:"인스타@1234" },
          { id: 1, title: "카카오톡@1234" }
        ],
      };

      navigate("/signup-matching", { state: matchingData });
    };

    // useEffect(() => {
    //   // axios.
    //   //   get(
    //   //     "/v1/api/match/",

    //   //   )
    // }, []);
  
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
                <span className="font-bold ">닉네임님</span>팀의 등록 내역
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
              <DeleteModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
              :null}

            </div>
          <div className="className=w-full bg-white p-5 rounded-2xl shadow-md">
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
        </div>
      </>
    );
  }
  