import { Link } from "react-router-dom";
import Button from "../../components/Button";

export default function PrivacyPolicy() {
  return (
    <div>
      <div
        className="
        flex
        flex-col
        items-center
        mx-5"
      >
        <h1>개인정보동의</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet sint
          distinctio qui et molestias labore deserunt quaerat, laudantium,
          nostrum culpa, assumenda eos iste. Neque asperiores rem atque ipsum
          dicta soluta.
        </p>
        <div className="">
          <Link to={"/set-nickname"}>
            <Button title={"동의"} />
          </Link>
          <Link to={"/"}>
            <Button title={"거절"} />
          </Link>
        </div>
      </div>
    </div>
  );
}
