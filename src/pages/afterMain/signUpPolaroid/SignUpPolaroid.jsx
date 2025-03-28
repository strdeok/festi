import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { VscChromeClose } from "react-icons/vsc";
import { CameraButton } from "../../../components/Button";
import { CameraIcon, ImageIcon, SelectedCameraIcon, SelectedImageIcon } from "../../../style/Icons";

export default function SignUpPolaroid(props){
    const navigate = useNavigate();
    const [source, setSource] = useState("");
    const [imageUrl, setImageUrl] = useState("")
    const [camera, setCamera] = useState(false);
    const [image, setImage] = useState(false);
    const [state, setState] = useState(false);

    const fileInputRef = useRef(null);

    const handleCapture = (target) => {
        if (target.files) {
            if (target.files.length !== 0) {
                const file = target.files[0];
                setImageUrl(file);
                const newUrl = URL.createObjectURL(file);
                setSource(newUrl);
            }
        }
    };

    const openCamera = () => {
        if (fileInputRef.current) {
        fileInputRef.current.click();
        }
    };

    const selectedCamera = () => {
        setCamera(!camera);
        setImage(false);
    }

    const selectedImage = () => {
        setImage(!image);
        setCamera(false);
    }

    useEffect(() => {
        if (camera || image) {
            setState(true);
        } else {
            setState(false);
        }
    },[image, camera])

    useEffect(() => {
        if (source !== ""){
            const data = {
                source: source,
                imageUrl: imageUrl,
            };
            navigate('filter-polaroid', { state: data })
        }
    }, [source])

    return(
        <>
            <div className="flex flex-col h-full pt-4 items-center">
                <div className="w-full flex flex-row">
                    <button
                        className="
                        w-5
                        text-2xl
                        relative
                        mb-10
                        "
                        onClick={() => {
                            navigate(-1);
                        }}
                    >
                        <VscChromeClose />
                    </button>
                    <div />
                </div>
                <div className="flex flex-col items-center mb-14 my-[7.75rem]">
                    <p className="text-xl mb-3 font-bold">폴라로이드 등록</p>
                    <p className="text-[#969696]">사진을 등록할 방식을 선택해주세요!</p>
                </div>
                <div className="flex flex-row items-center mb-20">
                    <div className="mr-4"
                        onClick={() => selectedCamera()}>
                        {camera ? <SelectedCameraIcon/> : <CameraIcon/>}
                    </div>
                    <div onClick={()=>selectedImage()}>
                        {image ? <SelectedImageIcon/> : <ImageIcon/>}
                    </div>
                </div>
                <div className="flex-grow"></div>
                <div className="w-full mb-4">
                    <CameraButton onCameraOpen={openCamera} title={"다음"} state={state}/>
                    {camera
                        ?
                        <input
                            type="file"
                            accept=".png, .jpg"
                            capture="camera" // 후면 카메라 사용 (없으면 기본 카메라)
                            style={{ display: "none" }}
                            ref={fileInputRef}
                            onChange={(e) => {
                                handleCapture(e.target);
                            }}
                        />
                        :
                        <input
                            type="file"
                            accept=".jpg, .png"
                            style={{ display: "none" }}
                            ref={fileInputRef}
                            onChange={(e) => {
                                handleCapture(e.target);
                            }}
                        />
                    }       
                </div>
            </div>
        </>
    );
}