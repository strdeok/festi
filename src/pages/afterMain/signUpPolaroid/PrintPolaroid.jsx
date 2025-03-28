import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { VscChromeClose } from "react-icons/vsc";

import { BackArrow } from "../../../style/Icons";
import PolaroidFrame from "../main/components/PolaroidFrame";
import Button, { DownloadButton } from "../../../components/Button";

import download from "downloadjs";
import * as htmlToImage from "html-to-image";
import axios from "axios";


export default function PrintPolaroid() {
    const state = true;
    const navigate = useNavigate();
    const location = useLocation();
    const { source, imageUrl } = location.state || {};
    console.log(imageUrl);


    const uploadPolaroid = async (imageUrl) => {
        const JWT_TOKEN = localStorage.getItem("jwtToken");
        const formData = new FormData();
        formData.append("file", imageUrl); // 파일을 FormData에 추가 (첫 번째 인자는 서버에서 사용할 필드 이름)

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
                navigate("upload-polaroid");
            })
            .catch((err) => {
            console.log(err);
        });
    };


    const downImg = () => {
        const node = document.getElementById("Img");

        htmlToImage.toPng(node).then(function (dataUrl) {
        download(dataUrl, `테스트.png`);
        });
    };



    return (
        <>
            <div className="flex flex-col h-full items-center pt-4">
                <div className="w-full flex flex-row justify-between mb-6">
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
                <p className="text-lg font-semibold mb-6">
                    출력 완료!
                </p>
                <div>
                    <PolaroidFrame source={source} />
                </div>
                
                <div className="flex-grow"></div>
                <div className="w-full mb-3"
                onClick={() => {
                    // downloadImage(source);
                    downImg();
                }}>
                    <DownloadButton title={"다운로드"}/>
                </div>
                <div className="w-full mb-4"
                onClick={() => {
                    uploadPolaroid(imageUrl);
                }}>
                    <Button title={"업로드"} state={state}/>
                </div>
            </div>
        </>
    );
}