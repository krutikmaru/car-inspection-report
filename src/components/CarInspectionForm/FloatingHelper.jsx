import { faPlus, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const FloatingHelper = ({ bookmarks }) => {
  const [isMinimized, setIsMinimized] = useState(true);
  const parentTailwind = `fixed left-10 bottom-10 bg-carzilla-purple-primary rounded-md text-white p-${
    isMinimized ? 3 : 10
  }`;
  return (
    <div className={parentTailwind}>
      {isMinimized ? (
        <div
          className="w-full h-full cursor-pointer"
          onClick={() => setIsMinimized(false)}
        >
          <FontAwesomeIcon icon={faPlus} />
        </div>
      ) : (
        <>
          <FontAwesomeIcon
            icon={faX}
            onClick={() => setIsMinimized(true)}
            className="cursor-pointer absolute left-3 bottom-4"
          />
          <ul className="pb-4">
            {bookmarks.map((obj) => {
              return (
                <li className="cursor-pointer underline mb-4">
                  <a
                    href={`#${obj.bookmark}`}
                    onClick={() => setIsMinimized(true)}
                  >
                    {obj.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
};

export default FloatingHelper;
