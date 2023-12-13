import React, { useState, useEffect } from "react";
import ADDIcon from "../Assets/Icons/plus.256x256.png";
import { AddTableRow } from "./rowAdd";

export const DataTableRows = (props) => {
  const [rowsData, setRowsData] = useState([]);
  const [totalOrderQty, setTotalOrderQty] = useState(0);
  const [totalShipQty, setTotalShipQty] = useState(0);
  const [itemHeader, setItemHeader] = useState({
    labelitem: "",
    labelorderQty: "",
    labelshipQty: "",
  });
  const [tableVal, setTableVal] = useState({
    rowsData: [],
    totalOrderQty: 0,
    totalShipQty: 0,
    itemHeader: {
      labelitem: "",
      labelorderQty: "",
      labelshipQty: "",
    },
  });
  const rowLength = rowsData.length;

  const { rowValu } = props;

  const addTableRows = () => {
    const rowsInput = {
      item: "",
      orderQty: "",
      shipQty: "",
    };
    setRowsData([...rowsData, rowsInput]);
  };

  const deleteTableRows = (index) => {
    const rows = [...rowsData];
    rows.splice(index, 1);
    setRowsData(rows);
  };

  const handleChange = (index, evnt) => {
    if (evnt && evnt.target) {
      const { name, value } = evnt.target;

      if (
        name === "labelitem" ||
        name === "labelorderQty" ||
        name === "labelshipQty"
      ) {
        setItemHeader((prevItemHeader) => ({
          ...prevItemHeader,
          [name]: value,
        }));
      } else {
        const rowsInput = [...rowsData];
        rowsInput[index][name] = value;
        setRowsData(rowsInput);
      }
    }
  };

  // Calculate total quantities whenever rowsData changes
  useEffect(() => {
    let totalOrder = 0;
    let totalShip = 0;

    rowsData.forEach((row) => {
      totalOrder += Number(row.orderQty) || 0;
      totalShip += Number(row.shipQty) || 0;
    });

    setTotalOrderQty(totalOrder);
    setTotalShipQty(totalShip);

    setTableVal({
      rowsData,
      totalOrderQty,
      totalShipQty,
      itemHeader,
    });
  }, [rowsData, totalOrderQty, totalShipQty, itemHeader]);

  useEffect(() => {
    rowValu(tableVal);
  }, [tableVal, rowValu]);

  return (
    <>
      <div className=" h-auto ">
        <div className="lg:w-[97%] h-[5vh] bg-neutral-500 flex items-center mb-2">
          <div className="lg:w-[50%] w-[45%] pl-2">
            <input
              type="text"
              placeholder="Item Description"
              className="w-full lg:text-sm text-xl placeholder-white bg-neutral-500 text-white "
              name="labelitem"
              value={itemHeader.labelitem}
              onChange={(evnt) => handleChange(null, evnt)}
            />
          </div>
          <div className="lg:w-[25%] w-[30%] lg:pl-2 pr-1 ">
            <input
              type="text"
              placeholder="Order Qty"
              className="w-full text-right lg:text-sm text-xl bg-neutral-500  placeholder-white text-white"
              name="labelorderQty"
              value={itemHeader.labelorderQty}
              onChange={(evnt) => handleChange(null, evnt)}
            />
          </div>
          <div className="lg:w-[25%] w-[20%] lg:pr-2 lg:pl-4 ">
            <input
              type="text"
              placeholder="Ship Qty"
              className="w-full text-right lg:text-sm text-xl bg-neutral-500 placeholder-white text-white"
              name="labelshipQty"
              value={itemHeader.labelshipQty}
              onChange={(evnt) => handleChange(null, evnt)}
            />
          </div>
        </div>
        <div className="w-auto lg:w-[100%]  h-auto ">
          <AddTableRow
            rowsData={rowsData}
            deleteTableRows={deleteTableRows}
            handleChange={handleChange}
            rowindx={rowLength}
          />
        </div>
        <div className="w-[97%] flex h-[6vh] ">
          <div className="w-[40%] lg:w-[50%] flex p-1 ">
            <div className="w-[10%] lg:w-[5%]">
              <img src={ADDIcon} />
            </div>
            <div className="flex items-start w-[60%] pl-1.5">
              <button
                type="button"
                className="text-xs text-blue-600 font-medium"
                onClick={() => addTableRows()}
              >
                Add Line Item
              </button>
            </div>
          </div>
          <div className="bg-neutral-200 lg:w-[50%] w-[60%] flex items-center">
            <div className="w-[30%]  pl-2">
              <input
                type="text"
                placeholder="TOTAL"
                className="w-full bg-neutral-200 placeholder-neutral-700 text-neutral-700"
              />
            </div>
            <div className="w-[20%] text-right">{totalOrderQty}</div>
            <div className="w-[50%]  text-right pr-3">{totalShipQty}</div>
          </div>
        </div>
      </div>
    </>
  );
};
