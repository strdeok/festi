import { StarIcon } from "../../../style/Icons";
import { FreeTitle } from "../../../components/Title";
import { ForwardArrow } from "../../../style/Icons";
import { useNavigate } from"react-router-dom";


export default function Matching() {
    const navigate = useNavigate();
    return(
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
                                    navigate("/main/matching/signup-list");
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
                                    navigate('/matching-result');
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
        </div>
    );
}