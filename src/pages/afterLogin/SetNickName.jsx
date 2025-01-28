import { Link } from "react-router-dom";
import Button from "../../components/Button";

export default function SetNickName(){
    return(
        <div className="flex flex-col items-center">
            <h1>닉네임 설정</h1>
            <div>
                <input type="text" placeholder="닉네임을 입력해주세요" />
                <Button title={"중복확인"} />
            </div>
            <Link to={"/main"}>
                <Button title={"닉네임 제출하기"} />
            </Link>
        </div>
    )
}