import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { VscChromeClose } from "react-icons/vsc";

import { BackArrow } from "../../../style/Icons";
import PolaroidFrame from "../main/components/PolaroidFrame";
import Button, { DownloadButton } from "../../../components/Button";

export default function PrintPolaroid() {
    const state = true;
    const navigate = useNavigate();
    const location = useLocation();
    const source = location.state.imageUrl;

    return (
        <>
            <div className="flex flex-col h-full items-center pt-4">
                <div className="w-full flex flex-row justify-between">
                    <button
                        className="
                        w-5
                        text-2xl
                        relative
                        "
                        onClick={() => {
                            navigate(-1);
                        }}
                    >
                        <BackArrow />
                    </button>
                    <button
                        className="
                        w-5
                        text-2xl
                        relative
                        "
                        onClick={() => {
                            navigate("/main");
                        }}
                    >
                        <VscChromeClose />
                    </button>
                </div>
                <p className="text-lg font-semibold mb-[24px]">
                    출력 완료!
                </p>
                <div>
                    <PolaroidFrame source={source} />
                </div>
                
                <div className="flex-grow"></div>
                <div className="w-full mb-3">
                    <DownloadButton title={"다운로드"}/>
                </div>
                <div className="w-full mb-4">
                    <Button title={"출력하기"} state={state} path={"upload-polaroid"}/>
                </div>
            </div>
        </>
    );
}