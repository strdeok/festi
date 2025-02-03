import { useEffect, useState } from "react";
import Button from "./Button";
import Input from "./Input";

export default function Login() {
  const [state, setState] = useState(false);
  const [loginInput, setLoginInput] = useState({
    id: "",
    password: "",
  });

  useEffect(() => {
    if (loginInput.id.length > 0 && loginInput.password.length > 0) {
      setState(true);
    } else setState(false);
  }, [loginInput]);

  return (
    <>
      <div className="grid w-full gap-4 my-20">
        <Input
          setInput={setLoginInput}
          info={"id"}
          type={"text"}
          placeholder={"아이디를 입력"}
          input={loginInput}
        />
        <Input
          setInput={setLoginInput}
          info={"password"}
          type={"password"}
          placeholder={"비밀번호를 입력"}
          input={loginInput}
        />
      </div>
      <Button title={"로그인"} path={"/check-policy"} state={state} />
    </>
  );
}
