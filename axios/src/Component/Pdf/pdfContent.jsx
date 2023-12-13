import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";
import React from "react";
import stylem from "./pdfStyle";
import { useState } from "react";


// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    color: "black",
    display: "flex",
    flexDirection: "column",
  },
  section: {
    margin: 10,
    padding: 10,
  },
  viewer: {
    width: window.innerWidth, //the pdf viewer will take up all of the width and height
    height: window.innerHeight,
  },
});

// Create Document Component
function BasicDocument(props) {
  const { responseData } = props;

 
  return (
    <PDFViewer style={styles.viewer}>
   
      <Document>
       

        <Page
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            paddingTop: "5px",
            marginTop: "5px",
          }}
          size="A4"
        >
          <View style={stylem.section}>
            <View style={stylem.sectionA}>
              <View style={stylem.companyDetails}>
                <Text style={stylem.companyName}>
                  {responseData?.packingData?.company}
                </Text>
                <Text style={stylem.companyDetailsData}>
                  {responseData?.packingData?.urname}
                </Text>
                <Text style={stylem.companyDetailsData}>
                  {responseData?.packingData?.companyAddress}
                </Text>
                <Text style={stylem.companyDetailsData}>
                  {responseData?.packingData?.city}
                </Text>
                <Text style={stylem.companyDetailsData}>
                  {responseData?.packingData?.PostalCode}
                </Text>
                <Text style={stylem.companyDetailsData}>
                  {responseData?.packingData?.country}
                </Text>
              </View>

              <View style={stylem.headerText}>
                <Text style={stylem.headerTextData}>
                  {responseData?.packingData?.packingSlip !== ""
                    ? responseData?.packingData?.packingSlip
                    : responseData?.labelData?.packageslip}
                </Text>
              </View>
            </View>
            <View style={stylem.sectionB}>
              <View style={stylem.billerDetails}>
                <Text style={stylem.billDetails}>
                  {responseData?.packingData?.billTo !== ""
                    ? responseData?.packingData?.billTo
                    : responseData?.labelData?.billLabel}
                </Text>

                <Text style={stylem.billDetailsData}>
                  {responseData?.packingData?.cusname}
                </Text>
                <Text style={stylem.billDetailsData}>
                  {responseData?.packingData?.cusAddress}
                </Text>
                <Text style={stylem.billDetailsData}>
                  {responseData?.packingData?.cusCity}
                </Text>
                <Text style={stylem.billDetailsData}>
                  {responseData?.packingData?.cusCountry}
                </Text>
                <Text style={stylem.billDetailsData}>
                  {responseData?.packingData?.cusPostalCode}
                </Text>
              </View>
              <View style={stylem.packageTrackDetails}>
                <View style={stylem.packageTD}>
                  <Text>
                    {responseData?.packingData?.package !== ""
                      ? responseData?.packingData?.package
                      : responseData?.labelData?.packageNumLabel}
                  </Text>
                  <Text>
                    {responseData?.packingData?.orderDate !== ""
                      ? responseData?.packingData?.orderDate
                      : responseData?.labelData?.ordDate}
                  </Text>
                  <Text>
                    {responseData?.packingData?.packageDate !== ""
                      ? responseData?.packingData?.packageDate
                      : responseData?.labelData?.packgDate}
                  </Text>
                  <Text>
                    {responseData?.packingData?.salesOrder !== ""
                      ? responseData?.packingData?.salesOrder
                      : responseData?.labelData?.salOrder}
                  </Text>
                </View>
                <View style={stylem.packageTrackValue}>
                  <Text style={stylem.billDetailsData}>
                    {responseData?.packingData?.packageVal}
                  </Text>
                  <Text style={stylem.billDetailsData}>
                    {responseData?.packingData?.orderDateVal}
                  </Text>
                  <Text style={stylem.billDetailsData}>
                    {responseData?.packingData?.packageDateVal}
                  </Text>
                  <Text style={stylem.billDetailsData}>
                    {responseData?.packingData?.salesOrderVal}
                  </Text>
                </View>
              </View>
            </View>

            <View style={stylem.sectionC}>
              <View style={stylem.tableHead}>
                <Text>
                  {responseData?.rowData?.itemHeader?.labelitem !== ""
                    ? responseData?.rowData?.itemHeader?.labelitem
                    : responseData?.labelData?.itemDescLabel}
                </Text>
                <Text>
                  {responseData?.rowData?.itemHeader?.labelorderQty !== ""
                    ? responseData?.rowData?.itemHeader?.labelorderQty
                    : responseData?.labelData?.orderQtyLabel}
                </Text>
                <Text>
                  {responseData?.rowData?.itemHeader?.labelshipQty !== ""
                    ? responseData?.rowData?.itemHeader?.labelshipQty
                    : responseData?.labelData?.shipQtyLabel}
                </Text>
              </View>
              {responseData?.rowData?.rowsData.map((row, index) => (
                <View key={index} style={stylem.tableData}>
                  <View style={stylem.itemB}>
                    <Text>{`${row.item}`}</Text>
                  </View>
                  <View style={stylem.itemQty}>
                    <Text>{`${row.orderQty}`}</Text>
                    <Text>{`${row.shipQty}`}</Text>
                  </View>
                </View>
              ))}

              <View style={stylem.tableFooter}>
                <View style={stylem.tableFooterContent}>
                  <Text>{responseData?.rowData?.totalOrderQty}</Text>
                  <Text>{responseData?.rowData?.totalShipQty}</Text>
                </View>
              </View>
            </View>

            <View style={stylem.sectionD}>
              <Text>
                {responseData?.packingData?.notes !== ""
                  ? responseData?.packingData?.notes
                  : responseData?.labelData?.notesLabel}
              </Text>
              <Text>{responseData?.packingData?.notesTxt}</Text>
            </View>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}
export default BasicDocument;
