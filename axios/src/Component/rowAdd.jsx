import React, { useEffect, useState } from "react";
import CloseIcon from "../Assets/Icons/close.png";

export const AddTableRow = ({
  rowsData,
  deleteTableRows,
  handleChange,
  rowindx,
}) => {
  const [isHovering, setIsHovering] = useState(
    Array(rowsData.length).fill(false)
  );
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleMouseOver = (index) => {
    setIsHovering(true);
    setSelectedIndex(index);
  };

  const handleMouseOut = (index) => {
    setIsHovering(false);
    setSelectedIndex(index);
  };

  return rowsData.map((data, index) => {
    const { item, orderQty, shipQty } = data;
    const isIndxConditionMet = rowindx > 1;
    return (
      <>
        <div className="w-auto  lg:w-[100%]  m-1" key={index}>
          <div
            className="flex gap-1 border-b-2 "
            onMouseOver={() => handleMouseOver(index)}
            onMouseOut={() => handleMouseOut(index)}
          >
            <div className=" w-[50%]">
              <textarea
                value={item}
                onChange={(evnt) => handleChange(index, evnt)}
                name="item"
                className="  w-[95%] lg:ml-3 ml-1 h-[6vh]  "
                placeholder="Enter item name/ description"
              />
            </div>
            <div className=" w-[25%] ">
              <input
                type="text"
                value={orderQty}
                onChange={(evnt) => handleChange(index, evnt)}
                name="orderQty"
                className="lg:text-right text-center w-full mr-1"
                placeholder="0"
              />
            </div>
            <div className=" w-[25%] flex  gap-2">
              <div className="w-[85%] ">
                <input
                  type="text"
                  value={shipQty}
                  onChange={(evnt) => handleChange(index, evnt)}
                  name="shipQty"
                  placeholder="0"
                  className="text-right   h-6 w-full"
                />
              </div>
              {index == selectedIndex && isHovering && (
                <span className=" flex justify-end items-start ">
                  <img
                    src={CloseIcon}
                    onClick={
                      isIndxConditionMet ? () => deleteTableRows(index) : null
                    }
                    width={15}
                  />
                </span>
              )}
            </div>
          </div>
        </div>
      </>
    );
  });
};
