import React from "react";
import { conceptData } from "./../../data/conceptData";

function Concept({ concept, setModel }) {

  const renderData = (data) => {
    if (data === null || data === undefined){
      return null;
    }

    if (typeof data === "string"){
      return <li>{data}</li>;
    }

    if (Array.isArray(data)) {
      return (
        <ul className="list-disc">
          {data.map((item, index) => (
            <React.Fragment key={index}>
              {renderData(item)}
            </React.Fragment>
          ))}
        </ul>
      );
    }

    if (typeof data === "object") {
      return (
        <ul className="list-none">
          {Object.entries(data).map(([key, value]) => (
            <li key={key} className={`mb-2`}>
              <strong>{key} :</strong>
              <div className="ml-4 shadow border-gray-200 p-2">
                {renderData(value)}
              </div>
            </li>
          ))}
        </ul>
      );
    }

    return null;
  };

  const conceptDetails = conceptData.find((item) => item.Name === concept);

  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 p-4">
      <div className="relative bg-white w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-2xl">

        <button
          onClick={() => setModel(null)}
          className="top-4 float-right mr-4 mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full text-xl font-bold"
        >
          ✕
        </button>

        <div className="p-6">
          <div className="bg-blue-900 text-white p-4 rounded-2xl mb-6">
            <h1 className="text-4xl font-bold capitalize">
              {conceptDetails.Name}
            </h1>
          </div>

          <div className="border rounded-lg p-2">
            {renderData(conceptDetails)}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Concept;

