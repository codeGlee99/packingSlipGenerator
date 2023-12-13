import React, { useEffect, useState } from "react";
import { ContentDetails } from "./contentDetails";
import { DataTableRows } from "./tableRow";
import { PDFViewer } from "@react-pdf/renderer";
import BasicDocument from "./Pdf/pdfContent";
import ReactDOM from "react-dom";

export const PackingSlip = () => {
  const [pdfData, setPdfData] = useState(false);
  const [pdfContentData, setPdfContentData] = useState(false);
  const [resData, setResData] = useState();

  const handlePdfClick = () => {
    setPdfData(true);
  };

  const pdfDisable = (val) => {
    setPdfData(false);
  };

  const pdfShowData = (val) => {
    setPdfContentData(val.pdfState);
    setResData(val.pdfdata.data.dataValue);
  };

  const openPdfInNewTab = () => {
    const newWindow = window.open();
    newWindow.document.title = resData
      ? resData.packingData.company
      : "packingSlip";
    newWindow.document.body.innerHTML = "<div id='pdf-container'></div>";

    const container = newWindow.document.getElementById("pdf-container");

    ReactDOM.render(<BasicDocument responseData={resData} />, container);
  };

  useEffect(() => {
    if (pdfContentData) {
      openPdfInNewTab();
    }
  }, [pdfContentData]);

  return (
    <div className="packingSlipContainer bg-orange-100 w-[100%] flex justify-center  h-auto ">
      <div className="h-auto w-[95%]  lg:w-[50%] md:w-[85%] ">
        <div className=" w-full h-[10vh] flex justify-center  lg:items-end md:h-[8vh]  md:items-end lg:h-[20vh]  mb-5 ">
          <div className=" h-[10vh] w-full flex items-center flex-col-reverse lg:flex-row md:h-[5vh] justify-between   lg:h-[8vh] ">
            <div className="w-[65%]  lg:w-[30%] md:w-[30%]   ">
              <button
                onClick={handlePdfClick}
                className="bg-white w-[100%] lg:w-[50%] flex justify-center   text-xl outline outline-1 outline-slate-300 p-1"
              >
                Get PDF
              </button>
            </div>
            <div className="w-[65%] lg:w-[30%] md:w-[35%] ">
              <div className="bg-orange-500  justify-center  text-xl text-white p-1 lg:text-xl block lg:flex">
                Try Packing Slip for Free
              </div>
            </div>
          </div>
        </div>
        <div className=" bg-white w-full h-auto flex justify-center items-center mb-20">
          <div className="w-[95%]  h-auto">
            <ContentDetails
              content={pdfData}
              pdfContent={pdfDisable}
              pdfViewContent={pdfShowData}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
