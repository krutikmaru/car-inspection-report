import React, { useState } from "react";
import { useApplicationManager } from "../../contexts/ApplicationContext";

export const ExteriorCondition = () => {
  const { activatePopupCenter } = useApplicationManager();
  const [points, setPoints] = useState([
    {
      number: "1",
      title: "Front Bumper",
      pointDetails: [],
      images: [],
      top: 5,
      left: 47,
    },
    {
      number: "2",
      title: "Hood",
      pointDetails: [],
      images: [],
      top: 15,
      left: 47,
    },
    {
      number: "3",
      title: "Front Left Fender",
      pointDetails: [],
      images: [],
      top: 15,
      left: 10,
    },
    {
      number: "4",
      title: "Front Right Fender",
      pointDetails: [],
      images: [],
      top: 15,
      left: 90,
    },
    {
      number: "5",
      title: "Top",
      pointDetails: [],
      images: [],
      top: 45,
      left: 47,
    },
    {
      number: "6",
      title: "Left",
      pointDetails: [],
      images: [],
      top: 45,
      left: 10,
    },
    {
      number: "7",
      title: "Right",
      pointDetails: [],
      images: [],
      top: 45,
      left: 90,
    },
    {
      number: "8",
      title: "Rear Left Fender",
      pointDetails: [],
      images: [],
      top: 70,
      left: 10,
    },
    {
      number: "9",
      title: "Rear Right Fender",
      pointDetails: [],
      images: [],
      top: 70,
      left: 90,
    },
    {
      number: "10",
      title: "Back Bumper",
      pointDetails: [],
      images: [],
      top: 70,
      left: 47,
    },
  ]);

  return (
    <div className="mt-10" id="exterior_condition">
      {/* Title ⬇️ */}
      <div>
        <h1 className="text-4xl text-gray-800 font-semibold">Car Details</h1>
      </div>
      <div className="w-[100%] sm:w-[80%] lg:w-[60%]   mx-auto mt-10 p-5 rounded-md relative">
        <img
          src="/assets/car-skeleton.png"
          alt="Lamborghini Huracan"
          className="w-full h-auto object-fill rounded-md"
        ></img>
        {points.map((point) => {
          const tailwind = `absolute w-5 h-5 sm:w-8 sm:h-8 text-xs sm:text-sm flex justify-center items-center cursor-pointer opacity-70 text-white rounded-full `;
          return (
            <div
              className={tailwind}
              style={{
                top: `${point.top}%`,
                left: `${point.left}%`,
                background:
                  point.pointDetails.length === 0 ? "#00d200" : "#e9a200",
              }}
              onClick={() =>
                activatePopupCenter(
                  <PointDetailsPanel
                    point={point}
                    points={points}
                    setPoints={setPoints}
                  />
                )
              }
            >
              <div>{point.number}</div>
              <div className="absolute -top-5 w-32 flex justify-center items-center text-black  ">
                {point.pointDetails.map((t) => parseInt(t, 10)).join(", ")}
              </div>
            </div>
          );
        })}
      </div>
      <Legend />
    </div>
  );
};

const PointDetailsPanel = ({ point, setPoints }) => {
  const [localPoint, setLocalPoint] = useState(point);
  const tags = [
    "4: Repainted",
    "1: Scratch",
    "5: Faded",
    "3: Chip",
    "6: Repair",
    "2: Multiple Scratches",
  ];
  const { deactivatePopupCenter } = useApplicationManager();
  const selectTag = (tag) => {
    setLocalPoint((prevPoint) => ({
      ...prevPoint,
      pointDetails: [...prevPoint.pointDetails, tag],
    }));
    setPoints((prevPoints) =>
      prevPoints.map((pointCopy) =>
        pointCopy.number === localPoint.number
          ? { ...pointCopy, pointDetails: [...pointCopy.pointDetails, tag] }
          : pointCopy
      )
    );
  };

  const unselectTag = (tag) => {
    setLocalPoint((prevPoint) => ({
      ...prevPoint,
      pointDetails: prevPoint.pointDetails.filter((t) => t !== tag),
    }));
    setPoints((prevPoints) =>
      prevPoints.map((pointCopy) =>
        pointCopy.number === localPoint.number
          ? {
              ...pointCopy,
              pointDetails: pointCopy.pointDetails.filter((t) => t !== tag),
            }
          : pointCopy
      )
    );
  };

  const handleImageUpload = (imageObject) => {
    setLocalPoint((prevPoint) => ({
      ...prevPoint,
      images: [...prevPoint.images, imageObject],
    }));
    setPoints((prevPoints) =>
      prevPoints.map((pointCopy) =>
        pointCopy.number === localPoint.number
          ? { ...pointCopy, images: [...pointCopy.images, imageObject] }
          : pointCopy
      )
    );
  };

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="w-[80%] h-[80%] rounded-md overflow-hidden bg-white p-10 relative overflow-y-scroll"
    >
      <div
        className="absolute top-10 right-10 underline cursor-pointer"
        onClick={deactivatePopupCenter}
      >
        OK
      </div>
      <div className="flex space-x-5 items-center">
        <h1 className="text-xl">{localPoint.number}</h1>
        <h1 className="text-3xl">{localPoint.title}</h1>
      </div>
      <div className="mt-10 px-5 flex flex-wrap space-x-2 items-start justify-start">
        {tags.map((tag) => {
          let selected = localPoint.pointDetails.includes(tag);
          return (
            <Tag
              isSelected={selected}
              onClick={
                localPoint.pointDetails.includes(tag)
                  ? () => unselectTag(tag)
                  : () => selectTag(tag)
              }
              title={tag}
              key={tag}
            />
          );
        })}
      </div>
      <div className="w-full min-h-[200px]  mt-5 relative rounded-lg overflow-hidden px-20">
        <label
          class="block mb-2 text-sm font-medium text-gray-400"
          for="file_input"
        >
          Upload image
        </label>
        <input
          onChange={(e) => handleImageUpload(e.target.files[0])}
          class="block w-full text-sm mb-2 text-white border border-gray-300 rounded-lg cursor-pointer bg-carzilla-purple-primary dark:text-white focus:outline-none dark:bg-carzilla-purple-primary dark:border-gray-600 dark:placeholder-gray-400"
          id="file_input"
          type="file"
        />
        <span className="text-gray-600">Uploaded</span>
        <ul>
          {localPoint.images.map((image) => (
            <li>{image.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Tag = ({ isSelected, title, onClick }) => {
  return isSelected ? (
    <div
      onClick={onClick}
      className="bg-carzilla-purple-primary w-fit py-2 px-4 text-white border-[2px] cursor-pointer  border-carzilla-purple-primary rounded-lg mb-2"
    >
      {title}
    </div>
  ) : (
    <div
      onClick={onClick}
      className="bg-white w-fit py-2 px-4 text-carzilla-purple-primary border-[2px] cursor-pointer  border-carzilla-purple-primary rounded-lg mb-2"
    >
      {title}
    </div>
  );
};

const Legend = () => {
  return (
    <div className="border-[2px] border-gray-200 rounded-md p-4">
      <h1>Legend</h1>
      <div className="flex flex-wrap mt-2 justify-center">
        <div className=" text-gray-500 w-[30%] m-2">1: Scratch</div>
        <div className=" text-gray-500 w-[30%] m-2">2: Multiple Scratches</div>
        <div className=" text-gray-500 w-[30%] m-2">3: Chip</div>

        <div className=" text-gray-500 w-[30%] m-2">4: Repainted</div>
        <div className=" text-gray-500 w-[30%] m-2">5: Faded</div>
        <div className=" text-gray-500 w-[30%] m-2">6: Repair</div>
      </div>
    </div>
  );
};
