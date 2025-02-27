import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from"react-router-dom";
import { BackArrow, SmallCloseIcon, MatchingCamera, ImageCloseIcon } from "../../../style/Icons";
import { MatchingButton } from "../../../components/Button";
import { PlusInput } from "../../../components/Input";
import Button from "../../../components/Button";


export default function SignUpMatching() {
    const navigate = useNavigate();
    const nextId = useRef(1);
    const imageRef = useRef(null);
    const gender = ["남자", "여자", "혼성"];
    const date = ["5월 14일 (월)", "5월 15일 (화)", "5월 16일 (수)"];
    const startTime = ["17:00", "17:30", "18:00", "18:30", "19:00", "20:00", "20:30", "21:00"];
    const drinkAmount = ["1병", "2병", "3병"];
    const mood = ["도란도란", "시끌벅적", "짧고굵게", "밤새도록"];

    const location = useLocation();
    const matchingData = location.state;

    const [buttonState, setButtonState] = useState(false);

    const [source, setSource] = useState("");
    const handleCapture = (target) => {
        if (target.files) {
            if (target.files.length !== 0) {
                const file = target.files[0];
                const newUrl = URL.createObjectURL(file);
                setSource(newUrl);
                target.value = "";
            }
        }
    };

    const openCamera = () => {
        if (imageRef.current) {
            imageRef.current.click();
        }
    };

    const deleteImage = () => {
        if (source !== "") {
            setSource("");
        }
    }

    // 성별 선택 정보를 저장하는 state
    const [selectedGender, setSelectedGender] = useState({
        "남자": false,
        "여자": false,
        "혼성": false
    });

    const [isSelectedGender, setIsSelectedGender] = useState("")

    const handleGender = (gender) => {
        if (selectedGender[gender]) {
            setSelectedGender({
                "남자": false,
                "여자": false,
                "혼성": false    
            });
            setIsSelectedGender("");
        } else if(gender === "남자") {
            setSelectedGender({
                "남자": true,
                "여자": false,
                "혼성": false    
            });
            setIsSelectedGender(gender);

        } else if(gender === "여자") {
            setSelectedGender({
                "남자": false,
                "여자": true,
                "혼성": false    
            });
            setIsSelectedGender(gender);

        } else if(gender === "혼성") {
            setSelectedGender({
                "남자": false,
                "여자": false,
                "혼성": true    
            });
            setIsSelectedGender(gender);
        }
    };

    // 원하는 이성의 성별 정보를 저장하는 State
    const [wantedGender, setWantedGender] = useState(
        {
            "남자": false,
            "여자": false,
            "혼성": false
        }
    );

    const [isSelectedWantedGender, setIsSelectedWantedGender] = useState("");

    const handleWantedGender = (gender) => {
        if (wantedGender[gender]) {
            setWantedGender({
                "남자": false,
                "여자": false,
                "혼성": false    
            });
            setIsSelectedWantedGender("");
        } else{
            const copyGender = {
                "남자": false,
                "여자": false,
                "혼성": false,
            };
            setWantedGender({
                ...copyGender,
                [gender]: true,
            });
            setIsSelectedWantedGender(gender);
        }
        
    };

    // 원하는 날짜 정보를 저장하는 State
    const [selectedDate, setSelectedDate] = useState({
        "5월 14일 (월)" : false,
        "5월 15일 (화)" : false,
        "5월 16일 (수)" : false,
    });

    const [isSelectedDate, setIsSelectedDate] = useState("");

    const handleDate = (date) => {
        if (selectedDate[date]) {
            setSelectedDate({
                "5월 14일 (월)" : false,
                "5월 15일 (화)" : false,
                "5월 16일 (수)" : false,
            });
            setIsSelectedDate("");
        } else if(date === "5월 14일 (월)") {
            setSelectedDate({
                "5월 14일 (월)" : true,
                "5월 15일 (화)" : false,
                "5월 16일 (수)" : false, 
            });
            setIsSelectedDate(date);
        } else if(date === "5월 15일 (화)") {
            setSelectedDate({
                "5월 14일 (월)" : false,
                "5월 15일 (화)" : true,
                "5월 16일 (수)" : false, 
            });
            setIsSelectedDate(date);
        } else if(date === "5월 16일 (수)") {
            setSelectedDate({
                "5월 14일 (월)" : false,
                "5월 15일 (화)" : false,
                "5월 16일 (수)" : true, 
            });
            setIsSelectedDate(date);
        }
    };

    // 원하는 시간 정보를 저장하는 State
    const [selectedTime, setSelectedTime] = useState({
        "17:00": false, 
        "17:30": false, 
        "18:00": false, 
        "18:30": false, 
        "19:00": false, 
        "20:00": false, 
        "20:30": false, 
        "21:00": false
    });

    const [isSelectedTime, setIsSelectedTime] = useState("");

    const handleTime = (time) => {
        if (selectedTime[time]) {
            setSelectedTime({
                "17:00": false, 
                "17:30": false, 
                "18:00": false, 
                "18:30": false, 
                "19:00": false, 
                "20:00": false, 
                "20:30": false, 
                "21:00": false
            });
            setIsSelectedTime("");
        } else{
            const copyTime = {
                "17:00": false, 
                "17:30": false, 
                "18:00": false, 
                "18:30": false, 
                "19:00": false, 
                "20:00": false, 
                "20:30": false, 
                "21:00": false,
            };

            setSelectedTime({
                ...copyTime,
                [time]: true
            });
            setIsSelectedTime(time);
        } 
    };

    // 평균 주량 정보를 저장하는 State
    const [selectedDrink, setSelectedDrink] = useState({
        "1병": false, 
        "2병": false, 
        "3병": false
    });

    const [isSelectedDrink, setIsSelectedDrink] = useState("");

    const handleDrink = (drink) => {
        if (selectedDrink[drink]) {
            setSelectedDrink({
                "1병": false, 
                "2병": false, 
                "3병": false
            });
            setIsSelectedDrink(false);
        } else{
            const copyDrink = {
                "1병": false, 
                "2병": false, 
                "3병": false
            };

            setSelectedDrink({
                ...copyDrink,
                [drink]: true
            });
            setIsSelectedDrink(drink);
        }
    }

    // 평균 주량 선택 중 반병에 대한 정보를 저장하는 State
    const [selectedDrinkHalf, setSelectedDrinkHalf] = useState("");

    const handleDrinkHalf = () => {
        if (selectedDrinkHalf.length > 0){
            setSelectedDrinkHalf("");
        } else{
            setSelectedDrinkHalf(" 반");
        }
    };

    const [selectedMood, setSelectedMood] = useState({
        "도란도란": false, 
        "시끌벅적": false, 
        "짧고굵게": false, 
        "밤새도록": false
    });

    const [isSelectedMood, setIsSelectedMood] = useState("");

    const handleMood = (mood) => {
        if (selectedMood[mood]) {
            setSelectedMood({
                "도란도란": false, 
                "시끌벅적": false, 
                "짧고굵게": false, 
                "밤새도록": false
            });
            setIsSelectedMood("");
        } else{
            const copyMood = {
                "도란도란": false, 
                "시끌벅적": false, 
                "짧고굵게": false, 
                "밤새도록": false
            };

            setSelectedMood({
                ...copyMood,
                [mood]: true
            });
            setIsSelectedMood(mood);
        }
    };





    // +버튼 클릭 시 새로운 연락처 추가를 위함
    const [inputItems, setInputItems] = useState([{ id:0, title:"" }]);

    const addInput = () => {
        if (inputItems.length < memberCount ){
            const input = {
                id:nextId.current,
                title:""
            };
    
            setInputItems([...inputItems, input]);
            nextId.current += 1;
        }
    };
    
    const deleteInput = (index) => {
        setInputItems(inputItems.filter((item, itemIndex) => itemIndex !== index));
    }

    const handleChange = (e, index) => {
        if (index > inputItems.length)
            return;

        const inputCopy = JSON.parse(JSON.stringify(inputItems));
        inputCopy[index].title = e.target.value;
        setInputItems(inputCopy);
    };

    // 인원 추가 관련 State와 메서드
    const [memberCount, setMemberCount] = useState(1);

    const plusCount = () => {
        if (memberCount < 4)
            setMemberCount(memberCount+1);
    };

    const minusCount = () => {
        if (memberCount > 1) {
            setMemberCount(memberCount - 1);
        }
    }

    useEffect(() => {
        if (memberCount > 0 && memberCount < inputItems.length) {
            const sliceCopy = inputItems.slice(0, memberCount);
            setInputItems(sliceCopy);
            nextId.currentId = memberCount;
        } else if (memberCount === 0){
            nextId.currentId = 1;
        } else if (memberCount > 0) {
            nextId.currentId = memberCount;
        }
    }, [memberCount]);

    useEffect(() => {
        if (isSelectedGender.length && isSelectedWantedGender.length && 
            isSelectedDate.length && isSelectedTime.length && (isSelectedDrink.length
            || selectedDrinkHalf.length) && isSelectedMood.length && source.length) 
        {
            let isFull = true;
            inputItems.forEach((item) => {
                if (isFull && item.title.length > 0) {
                    isFull = true;
                } else if (item.title.length === 0) {
                    isFull = false;
                }
            })

            if (isFull) {
                setButtonState(true);
            } else {
                setButtonState(false);
            }
        } else{
            setButtonState(false);
        }

    }, [isSelectedGender, isSelectedWantedGender, 
        isSelectedDate, isSelectedTime, isSelectedDrink, 
        selectedDrinkHalf, isSelectedMood, inputItems, source]);

    return(
        <>
            <div className="flex flex-col w-full h-full pt-4 items-start overscroll-contain">
                <div className="w-full flex flex-row items-start mb-4">
                    <button
                        className="
                        w-5
                        text-2xl
                        relative
                        mr-[118px]
                        "
                        onClick={() => {
                            navigate(-1);
                        }}
                    >
                        <BackArrow />
                    </button>
                    <p className="text-lg font-bold">매칭 등록</p>
                </div>

                <div className = "flex flex-row mb-8 justify-start items-center mt-5 relative">
                    <MatchingCamera onIconClick={openCamera}/>
                    <input
                        type="file"
                        accept=".jpg, .png"
                        style={{ display: "none" }}
                        ref={imageRef}
                        onChange={(e) => {
                            handleCapture(e.target);
                        }}
                    />
                    {source ? 
                    <div className="w-[80px] h-[80px] rounded-xl">
                        <img src={source} className="w-[80px] h-[80px] object-fill rounded-xl" />
                        <ImageCloseIcon onIconClick={deleteImage}/>
                    </div>
                    :null}
                </div>

                <div className="flex flex-col items-start">
                    <p className="font-bold mb-3">본인 성별</p>
                    <div className="flex flex-row items-center overflow-x-scroll gap-x-2 mb-8">
                        {gender.map((gender) => {
                            return(
                                <MatchingButton title={gender} selected={selectedGender[gender]} category="성별" onAddButton={() => handleGender(gender)}/>
                            );
                        })}
                    </div>
                </div>

                <div className="flex flex-col items-start">
                    <p className="font-bold mb-3">원하는 성별</p>
                    <div className="flex flex-row items-center overflow-x-scroll gap-x-2 mb-8">
                        {gender.map((gender) => {
                            return(
                                <MatchingButton title={gender} selected={wantedGender[gender]} category="성별" onAddButton={() => handleWantedGender(gender)}/>
                            );
                        })}
                    </div>
                </div>
                <div className="flex flex-col items-start ">
                    <p className="font-bold mb-3">날짜</p>
                    <div className="flex flex-row items-center overflow-x-scroll gap-x-2 mb-8 ">
                        {date.map((date) => {
                            return(
                                <MatchingButton title={date} selected={selectedDate[date]} category="날짜" onAddButton={() => handleDate(date)}/>
                            );
                        })}
                    </div>
                </div>

                <div className="flex flex-col items-start">
                    <p className="font-bold mb-3">시작 시간</p>
                    <div className="flex flex-row items-center overflow-x-scroll gap-x-2 mb-8 max-w-[350px]">
                        {startTime.map((time) => {
                            return(
                                <MatchingButton title={time} selected={selectedTime[time]} category="시간" onAddButton={() => handleTime(time)}/>
                            );
                        })}
                    </div>
                </div>

                <div className="flex flex-col items-start">
                    <p className="font-bold mb-3">평균 주량</p>
                    <div className="flex flex-row items-center overflow-x-scroll gap-x-2 mb-8 ">
                        {drinkAmount.map((drink) => {
                            return(
                                <MatchingButton title={drink} selected={selectedDrink[drink]} category="주량" onAddButton={() => handleDrink(drink)}/>
                            );
                        })}
                        <MatchingButton title={"반"} selected={selectedDrinkHalf} category="주량" onAddButton={() => handleDrinkHalf()}/>
                    </div>
                </div>

                <div className="flex w-full flex-row items-center justify-between mb-5">
                    <p className="font-bold mb-3">원하는 인원</p>
                    <div className="flex flex-row p-2 m-3 w-[145px] h-[40px] bg-white rounded-xl items-center border border-[#f3f3f3] gap-8">
                        <div className={`flex items-center justify-center w-6 h-6 rounded-full border border-[#f3f3f3] text-[#969696] 
                        ${memberCount > 1 ? "bg-white" : "bg-[#f3f3f3]"}`}
                            onClick={minusCount}>
                            <p className="text-center">-</p>
                        </div>
                        <p className="font-bold text-2xl">{memberCount}</p>
                        <div className={`flex items-center justify-center w-6 h-6 rounded-full border border-[#f3f3f3] text-[#969696]
                        ${memberCount < 4 ? "bg-white" : "bg-[#f3f3f3]"}`}
                        onClick={plusCount}>
                            <p className="text-center">+</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-start ">
                    <p className="font-bold mb-3">원하는 분위기</p>
                    <div className="flex flex-row items-center overflow-x-scroll gap-x-2 mb-8 ">
                        {mood.map((mood) => {
                            return(
                                <MatchingButton title={mood} selected={selectedMood[mood]} category="주량" onAddButton={() => handleMood(mood)}/>
                            );
                        })}
                    </div>
                </div>

                <div className="w-full flex flex-col items-start gap-3">
                    <p className="font-bold">연락처</p>
                    {/* <PlusInput onInputChange={handleChange} index = {0} item={inputItems[0]} /> */}
                    {inputItems.map((item, index) => {
                        return (
                            <div className="w-full flex flex-row items-center relative">
                                <PlusInput onInputChange={handleChange} index={index} item={item}/>
                                {index > 0 && index+1 === inputItems.length ? <SmallCloseIcon onClickChange = {deleteInput} index = {index} />: null}
                            </div>
                        );
                    })}
                    <MatchingButton title={"+"} selected={false} category="플러스" text={"text-3xl"} onAddButton={addInput}/>
                    <div className="flex-grow mb-12"></div>
                    <div className="w-full mb-4">
                        <Button title={"등록하기"} state={buttonState} path={"signup-complete"} 
                        data={{
                            title: "등록 완료!",
                            date: isSelectedDate.split(' (', 1).join(""),
                            nickname: "닉네임",
                            img: source,
                            gender: isSelectedGender,
                            preferredGender: isSelectedWantedGender,
                            time: isSelectedDate + " " + isSelectedTime,
                            averageAlcohol: isSelectedDrink +selectedDrinkHalf,
                            preferredPeople: memberCount+"명",
                            preferredMood: isSelectedMood,
                            contact: inputItems
                        }}/>
                    </div>
                </div>
            </div>
        </>
    );
}