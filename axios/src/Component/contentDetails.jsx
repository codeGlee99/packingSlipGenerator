import React, { useEffect, useState } from "react";
import ADDIcon from "../Assets/Icons/plus.256x256.png";
import axios from "axios";
import { DataTableRows } from "./tableRow";

export const ContentDetails = (props) => {
  const { content, pdfContent, pdfViewContent, labelData } = props;

  const [packingSlipData, setPackingSlipData] = useState({
    company: "",
    urname: "",
    companyAddress: "",
    city: "",
    PostalCode: "",
    country: "",

    packingSlip: "",

    billTo: "",
    cusname: "",
    cusAddress: "",
    cusCity: "",
    cusPostalCode: "",
    cusCountry: "",

    package: "",
    orderDate: "",
    packageDate: "",
    salesOrder: "",

    packageVal: "",
    orderDateVal: "",
    packageDateVal: "",
    salesOrderVal: "",

    notes: "",
    notesTxt: "",
  });
  const [rowValue, setRowValue] = useState();
  const [disable, setDisable] = useState(content);
  const [label, setLabel] = useState({
    packageslip: "PACKAGE SLIP",
    packageNumLabel: "Package #",
    ordDate: "Order Date",
    packgDate: "Package Date",
    salOrder: "Sales Order #",
    billLabel: "Bill To",
    itemDescLabel: "Item Description",
    orderQtyLabel: "Order Qty",
    shipQtyLabel: "Ship Qty",
    notesLabel: "Notes",
  });

  const dataVal = {
    packingData: packingSlipData,
    rowData: rowValue,
    labelData: label,
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPackingSlipData({
      ...packingSlipData,
      [name]: value,
    });
  };

  const rowVal = (val) => {
    setRowValue(val);
  };

  useEffect(() => {
    setDisable(content);
    if (disable == true && content == true) {
      handleAdd();
    }
  }, [content, disable]);

  const handleAdd = async () => {
    // setDisable(false)
    axios({
      method: "POST",
      url: "http://localhost:5000/api/create",
      data: { dataValue: dataVal },
    }).then((response) =>
      response.data
        ? pdfViewContent({ pdfState: true, pdfdata: response })
        : console.log(response.data, "POST")
    );
    pdfContent(false);
  };

  return (
    <div className="container bg-white w-[99%] flex flex-col justify-center items-center h-auto">
      <div className="section1 w-[95%] h-auto ">
        <div className="company h-[38vh]  lg:h-[23vh] lg:flex-row gap-1  flex flex-col-reverse  mb-10 lg:mb-0">
          <div className="w-[100%] h-[38vh] lg:h-[23vh] lg:w-[40%] flex flex-col gap-2 lg:gap-0 justify-end  ">
            {/* <Uncontrolled type={"text"} placeholder={"CompanyName"} name={"CompanyName"}/> */}
            <div className=" w-full ">
              <input
                type="text"
                name="company"
                placeholder="Your Company"
                value={packingSlipData.company}
                className=" w-full  h-[5vh] text-xl font-semibold placeholder-slate-500"
                onChange={handleChange}
              />
            </div>
            <div className=" w-full ">
              <input
                type="text"
                name="urname"
                value={packingSlipData.urname}
                placeholder="Your Name"
                className=" w-full lg:text-sm text-lg"
                onChange={handleChange}
              />
            </div>
            <div className=" w-full  ">
              <input
                type="text"
                name="companyAddress"
                value={packingSlipData.companyAddress}
                placeholder="Company's Address"
                className=" w-full lg:text-sm text-lg"
                onChange={handleChange}
              />
            </div>
            <div className=" w-full  ">
              <input
                type="text"
                name="city"
                value={packingSlipData.city}
                placeholder="City,"
                className=" w-full lg:text-sm text-lg"
                onChange={handleChange}
              />
            </div>
            <div className=" w-full">
              <input
                type="text"
                name="PostalCode"
                value={packingSlipData.PostalCode}
                placeholder="State/Province,Zip/PostalCode"
                className=" w-full lg:text-sm text-lg"
                onChange={handleChange}
              />
            </div>
            <div className=" w-full ">
              <input
                type="text"
                name="country"
                value={packingSlipData.country}
                placeholder="Country"
                className=" w-full lg:text-sm text-lg"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="w-[100%] lg:w-[60%]">
            <div className="w-[100%] h-[10vh]  flex justify-end items-center pt-5 ">
              <input
                type="text"
                name="packingSlip"
                value={packingSlipData.packingSlip}
                placeholder="PACKING SLIP"
                className="w-full text-3xl lg:text-4xl h-[8vh] text-center lg:text-right text-slate-950 placeholder-slate-950"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="customer h-[47vh] lg:h-[27vh]  flex lg:justify-between lg:flex-row  flex-col  ">
          <div className="lg:w-[55%] w-[full] flex flex-col justify-end  gap-2 lg:gap-0 mb-10 lg:mb-0">
            <div className=" w-full h-[4vh]">
              <input
                type="text"
                placeholder={label.billLabel}
                name="billTo"
                value={packingSlipData.billTo}
                className="  w-full lg:text-sm text-lg font-semibold placeholder-slate-950"
                onChange={handleChange}
              />
            </div>
            <div className=" w-full ">
              <input
                type="text"
                name="cusname"
                value={packingSlipData.cusname}
                placeholder="Customer Name"
                className=" w-full lg:text-sm text-lg"
                onChange={handleChange}
              />
            </div>
            <div className=" w-full  ">
              <input
                type="text"
                name="cusAddress"
                value={packingSlipData.cusAddress}
                placeholder="Customer Address"
                className="  w-full lg:text-sm text-lg"
                onChange={handleChange}
              />
            </div>
            <div className=" w-full  ">
              <input
                type="text"
                name="cusCity"
                value={packingSlipData.cusCity}
                placeholder="City,"
                className="  w-full lg:text-sm text-lg"
                onChange={handleChange}
              />
            </div>
            <div className=" w-full">
              <input
                type="text"
                name="cusPostalCode"
                value={packingSlipData.cusPostalCode}
                placeholder="State/Province,Zip/PostalCode"
                className="  w-full lg:text-sm text-lg"
                onChange={handleChange}
              />
            </div>
            <div className=" w-full ">
              <input
                type="text"
                name="cusCountry"
                value={packingSlipData.cusCountry}
                placeholder="Country"
                className="  w-full lg:text-sm text-lg"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="lg:h-[20vh]  lg:w-[40%] w-[full] mb-10 lg:mb-0 flex justify-between ">
            <div className=" w-[49%] flex flex-col justify-end gap-2 lg:gap-0">
              <div className="w-full">
                <input
                  type="text"
                  name="package"
                  value={packingSlipData.package}
                  placeholder={label.packageNumLabel}
                  className="placeholder-slate-950  w-full lg:text-sm text-lg font-semibold "
                  onChange={handleChange}
                />
              </div>
              <div className="w-full">
                <input
                  type="text"
                  name="orderDate"
                  value={packingSlipData.orderDate}
                  placeholder={label.ordDate}
                  className="placeholder-slate-950  w-full lg:text-sm text-lg font-semibold  "
                  onChange={handleChange}
                />
              </div>
              <div className="w-full">
                <input
                  type="text"
                  name="packageDate"
                  value={packingSlipData.packageDate}
                  placeholder={label.packgDate}
                  className="placeholder-slate-950  w-full lg:text-sm text-lg font-semibold  "
                  onChange={handleChange}
                />
              </div>
              <div className="w-full">
                <input
                  type="text"
                  name="salesOrder"
                  value={packingSlipData.salesOrder}
                  placeholder={label.ordDate}
                  className="placeholder-slate-950  w-full lg:text-sm text-lg font-semibold  "
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className=" w-[50%] flex flex-col justify-end gap-2 lg:gap-0">
              <div className="w-full">
                <input
                  type="text"
                  name="packageVal"
                  value={packingSlipData.packageVal}
                  placeholder="PS-12"
                  className="placeholder-slate-600  w-full lg:text-sm text-lg "
                  onChange={handleChange}
                />
              </div>
              <div className="w-full">
                <input
                  type="date"
                  name="orderDateVal"
                  value={packingSlipData.salOrder}
                  placeholder="Order Date"
                  className="placeholder-slate-600  w-full lg:text-sm text-lg "
                  onChange={handleChange}
                />
              </div>
              <div className="w-full">
                <input
                  type="date"
                  name="packageDateVal"
                  value={packingSlipData.packageDateVal}
                  placeholder="Package Date"
                  className="placeholder-slate-600  w-full lg:text-sm text-lg"
                  onChange={handleChange}
                />
              </div>
              <div className="w-full">
                <input
                  type="text"
                  name="salesOrderVal"
                  value={packingSlipData.salesOrderVal}
                  placeholder="SO-12"
                  className="placeholder-slate-600  w-full lg:text-sm text-lg "
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section2  w-[98%] h-auto  lg:mt-5">
        <div className="w-full ">
          <DataTableRows rowValu={rowVal} />
        </div>
      </div>
      <div className="section3  w-[95%] h-auto flex flex-col gap-1 mb-20 mt-10">
        <div>
          <input
            type="text"
            name="notes"
            value={packingSlipData.notes}
            placeholder={label.notesLabel}
            className="placeholder-slate-700 lg:text-sm text-lg font-semibold"
            onChange={handleChange}
          />
        </div>
        <div className=" w-full ">
          <textarea
            name="notesTxt"
            value={packingSlipData.notesTxt}
            placeholder="It was great doing business with you."
            className="placeholder-slate-700 lg:text-sm text-lg  w-full"
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};
