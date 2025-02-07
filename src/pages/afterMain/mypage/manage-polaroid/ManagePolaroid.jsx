import { Link, Outlet, useLocation, useParams, useSearchParams } from "react-router-dom";
import Button from "../../../../components/Button";

export default function ManagePolaroid() {
  const params = useLocation()
  console.log(params.key  )
  return (
    <div>
      <Outlet />
      <Link to={"modify-polaroid"}>
        <Button title={"폴라로이드 수정하기"} />
      </Link>
      <Link to={"delete-polaroid"}>
        <Button title={"폴라로이드 삭제하기"} />
      </Link>
    </div>
  );
}
