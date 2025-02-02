import { useNavigate } from "react-router-dom";
import PlusIcon from "../../../../style/Icons";

export default function Polaroids() {
  const images = [
    "/images/sample image (1).jpg",
    "/images/sample image (2).jpg",
    "/images/sample image (3).jpg",
    "/images/sample image (4).jpg",
    "/images/sample image (5).jpg",
    "/images/sample image (6).jpg",
    "/images/sample image (7).jpg",
    "/images/sample image (8).jpg",
    "/images/sample image (9).jpg",
  ];

  const navigate = useNavigate()

  return (
    <div
      className="grid mt-16"
      style={{
        gridTemplateColumns: "150px 150px",
      }}
    >
      {images.map((img, index) => {
        const random_boolean = Math.random() < 0.5;
        return (
          <div
            key={index}
            className={`w-28 h-36 relative flex justify-center pt-2 shadow-lg  
              ${index % 2 === 1 ? "rotate-12" : "-rotate-12"}`}
            style={{
              gridColumn: (index % 2) + 1,
              gridRow: Math.floor(index) + 1,
            }}
          >
            <div
              className={`rounded-full ${
                random_boolean ? "bg-yellow" : "bg-navy"
              } size-3 absolute z-10`}
            ></div>
            <img
              src={img}
              alt={img}
              className="w-24 h-28 object-fill relative top-1"
            />
          </div>
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
        <div className="w-24 h-28 object-fill relative top-1 bg-gray flex items-center justify-center"
          onClick={()=>{
            navigate("/폴라로이드만들기")
          }}
        >
          <div className={images.length % 2 === 1 ? "rotate-12" : "-rotate-12"}>
            <PlusIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
