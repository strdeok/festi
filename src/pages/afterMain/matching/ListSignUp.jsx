import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import { BackArrow } from "../../../style/Icons";
import SignUpComplete from "./components/SignUpComplete";
import NoSignUp from "./components/NoSignUp";
import { MenuIcon } from "../../../style/Icons";
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


export default function ListSignUp() {
  const navigate = useNavigate();

  const outside = useRef();

  const [active, setActive] = useState("5월 14일");

  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlerOutside = (e) => {
    if (!outside.current.contains(e.target)) {      
      setIsOpen(false);    
    }  
  };


  useEffect(() => {    
    document.addEventListener('mousedown', handlerOutside);    
    return () => {      
      document.removeEventListener('mousedown', handlerOutside);    
    };  
  });

  

  const matchingData = [
    {
      date: "5월 14일",
      nickname: "닉네임",
      img: "/images/sample image (1).jpg",
      gender: "남자",
      preferredGender: "혼성",
      time: "5월 14일 (화) 19:00",
      averageAlcohol: "1병 반",
      preferredPeople: "4명",
      preferredMood: "도란도란",
      contact: [{ id:0, title:"인스타@1234" },
        { id: 1, title: "카카오톡@1234" }
      ],
    },
    { date: "5월 15일" },
    { date: "5월 16일" },
  ];

  const ShowingResult = () => {
    switch (active) {
      case "5월 14일":
        return matchingData[0].nickname ? (
          <SignUpComplete matchingData={matchingData[0]} />
        ) : (
          <NoSignUp />
        );

      case "5월 15일":
        return matchingData[1].nickname ? (
          <SignUpComplete matchingData={matchingData[1]} />
        ) : (
          <NoSignUp />
        );

      case "5월 16일":
        return matchingData[2].nickname ? (
          <SignUpComplete matchingData={matchingData[2]} />
        ) : (
          <NoSignUp />
        );
    }
  };

  return (
    <div className="flex flex-col h-full z-0">
      <header className="flex flex-row font-bold text-lg justify-between items-center py-4">
        <div
          onClick={() => {
            navigate("/matching");
          }}
        >
          <BackArrow />
        </div>
        <span className="mx-auto">등록 내역</span>
      </header>

      <nav className="mt-6 flex flex-row gap-2">
        {matchingData.map((data, index) => {
          return (
            <button
              key={index}
              className={`border rounded-full px-4 py-[0.625rem] ${
                active === data.date
                  ? "border-yellow bg-[#FFF7E8] text-yellow"
                  : "border-lightgray bg-white text-[#969696]"
              } `}
              onClick={() => {
                setActive(data.date);
              }}
            >
              {data.date}
            </button>
          );
        })}
      </nav>
      <div className="flex flex-row">
        <header className="py-6 text-lg font-medium">
          <span className="font-bold ">닉네임님</span>팀의 등록 내역
        </header>
        <div className="py-6 absolute right-5"
          ref={outside}>
          {!isOpen? <MenuIcon onIconClick={() => setIsOpen(true)}/> : 
            <div className="flex flex-col w-[97px] h-[118px] rounded-2xl gap-8 bg-white border border-[#f3f3f3] justify-center items-center">
              <div className="">
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

      <div className="flex flex-col gap-4 h-full">
        <ShowingResult />
      </div>

      <div className="mt-8 pb-4">
        <Button state={true} title={"확인"} path={"/matching"} />
      </div>
    </div>
  );
}
