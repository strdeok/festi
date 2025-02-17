import Button from "../../../components/Button";
import { CompleteIcon } from "../../../style/Icons";

export default function UploadComplete() {
    return(
        <>
            <div className="flex flex-col h-full pt-4">
                <div className="mt-[12.5rem] flex flex-col items-center">
                    <CompleteIcon />
                    <p className="text-lg font-semibold mb-4 mt-6">
                        업로드 완료!
                    </p>
                    <p className="text-sm text-[#686868]">
                        폴라로이드 수정이나 삭제는
                    </p>
                    <p className="text-sm text-[#686868]">
                        마이페이지에서 할 수 있습니다
                    </p>
                </div>
                <div className="flex-grow"></div>
                <div className="w-full mb-4">
                    <Button title={"확인"} state={true} path={"/main"}/>
                </div>
            </div>
        </>
    );
}