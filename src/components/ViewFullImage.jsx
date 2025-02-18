import { useLocation } from "react-router-dom";
import { CloseIcon } from "../style/Icons";
import FullImageButtons from "../pages/afterMain/mypage/manage-polaroid/components/FullImageButtons";
import getLastPath from "../util/GetLastPath";
import DeletePolaroidsModal from "../pages/afterMain/mypage/manage-polaroid/components/DeletePolaroidsModal";

export default function ViewFullImage({ image, setFullimage }) {
  const location = useLocation();
  const lastPath = getLastPath(location.pathname);

  const closeFullImage = () => {
    setFullimage(null);
  };

  switch (lastPath) {
    case "delete-polaroid":
      return <DeletePolaroidsModal image={image} />;

    default:
      return (
        <div
          className="fixed top-0 left-0 bg-black bg-opacity-25 w-full h-full z-10 flex items-center justify-center"
          onClick={closeFullImage}
        >
          <div
            className="fixed  z-20 w-72 h-96 flex justify-center p-2 bg-white"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <button
              className="absolute -top-10 left-[95%]"
              onClick={closeFullImage}
            >
              <CloseIcon />
            </button>
            <div className="rounded-full bg-yellow size-6 absolute z-10 mt-1"></div>
            <img
              src={image}
              alt={image}
              className="w-56 h-72 object-fill mt-4"
            />
            {lastPath === "manage-polaroid" && (
              <FullImageButtons image={image} />
            )}
          </div>
        </div>
      );
  }
}
