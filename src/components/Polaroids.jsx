import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PlusIcon from "../style/Icons";
import ViewFullImage from "./ViewFullImage";
import { GetEntirePolaroids } from "../util/GetEntirePolaroids";
import getLastPath from "../util/GetLastPath";
import { GetIndividualPolaroids } from "../util/GetIndividualPolaroids";

export default function Polaroids({ columns }) {
  const navigate = useNavigate();
  const location = useLocation();

  const [fullImage, setFullimage] = useState(null);
  const [images, setImages] = useState([]);

  const pattern = ["a", "b", "b", "a", "a"];

  useEffect(() => {
    if (getLastPath(location.pathname) === "manage-polaroid") {
      GetIndividualPolaroids(setImages);
    } else GetEntirePolaroids(setImages);
  }, []);

  return (
    <div className="grid mt-16 w-full justify-around">
      {fullImage != null ? (
        <ViewFullImage image={fullImage} setFullimage={setFullimage} />
      ) : null}

      {images.map((data, index) => {
        console.log(data);
        const random_boolean = Math.random() < 0.5;
        return (
          <>
            <div
              key={index}
              className={`w-28 h-36 relative flex justify-center pt-2 shadow-lg 
                ${
                  pattern[index % pattern.length] === "a"
                    ? "rotate-12"
                    : "-rotate-12"
                }`}
              style={{
                gridColumn: (index % 2) + 1,
                gridRow: Math.floor(index) + 1,
              }}
              onClick={() => {
                setFullimage(data);
              }}
            >
              <div
                className={`rounded-full ${
                  random_boolean ? "bg-yellow" : "bg-navy"
                } size-3 absolute z-10`}
              ></div>
              <img
                src={data.imgLink}
                alt={data.imgLink}
                className="w-24 h-28 object-fill relative top-1"
              />
            </div>
          </>
        );
      })}
      <div
        className={`w-28 h-36 relative flex justify-center pt-2 shadow-lg bg-gray-200 
           ${images.length % 2 === 1 ? "rotate-12" : "-rotate-12"}`}
        style={{
          gridColumn: (images.length % 2) + 1,
          gridRow: Math.floor(images.length) + 1,
        }}
      >
        <div
          className="w-24 h-28 object-fill relative top-1 bg-gray flex items-center justify-center"
          onClick={() => {
            navigate("/signup-polaroid");
          }}
        >
          <div
            className={
              images.length % 2 === 1 ? "-rotate-[8deg]" : "rotate-[8deg]"
            }
          >
            <PlusIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
