import { CloseIcon } from "../../../../style/Icons";
import FullImageButtons from "../../mypage/manage-polaroid/components/FullImageButtons";

export default function ViewFullImage({ image, setFullimage }) {
  const closeFullImage = () => {
    setFullimage(null);
  };

  return (
    <>
      <div className="fixed top-0 left-0 bg-black bg-opacity-25 w-full h-full z-10 flex items-center justify-center">
        <div className="fixed  z-20 w-72 h-96 flex justify-center p-2 bg-white">
          <button
            className="absolute -top-10 -right-6"
            onClick={closeFullImage}
          >
            <CloseIcon />
          </button>
          <div className="rounded-full bg-yellow size-6 absolute z-10 mt-1"></div>
          <img src={image} alt={image} className="w-56 h-72 object-fill mt-4" />
          <FullImageButtons image={image} />
        </div>
      </div>
    </>
  );
}
