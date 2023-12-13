import{ StyleSheet } from '@react-pdf/renderer'

export default StyleSheet.create({
    section:{
         margin:"25px",
         gap:"10px"
    },
    sectionA :{
       
        width:"100%",
        height:"auto",
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        marginBottom:"10px",
    },
    headerText:{
        width:"55%",
        display:"flex",
        marginRight:"15px"
    },
    headerTextData:{
        fontSize:"30px",
        marginTop:"10px",
        alignSelf:"flex-end"
    },
    companyDetails:{
        display:"flex",
        flexDirection:"column",
        width:"45%",
        rowGap:"5px"

    },
    companyName:{
        fontSize:"15px",
        marginTop:"3px"
    },
    companyDetailsData:{
        fontSize:"11px",      
    },

    sectionB:{
        
        height:"auto",
        marginTop:"20px",
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        
    },
    billerDetails:{
        
        gap:"5px",
        width:"60%",
    },

    billDetails:{
        display:"flex",
        flexDirection:"column",
        width:"55%",
        gap:"5px",
        fontSize:"11px",
        fontWeight:"bold"
    },
    
    billDetailsData:{
        fontSize:"11px",
        
    },
    packageTrackDetails:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        gap:"5px",
        width:"40%",
    },
    packageTD:{
        width:"50%",
        fontSize:"11px",
        gap:"5px",
        fontWeight:"bold"
    },
    
    packageTrackValue:{
         
        gap:"5px",
        width:"50%",
    },
    sectionC:{
        
        height:"auto",
        marginTop:"20px",
        display:"flex",
         flexDirection:"column",
        justifyContent:"space-between",
        
        
    },

    tableHead:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between"
    },
    sectionD:{
        
        height:"auto",
        marginTop:"20px",
        fontSize:"11px"
        
    },
    
    tableData:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        width:"100%",
        fontSize:"12px"
    },
    itemB:{
        width:"50%" ,
    },
    itemQty:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        width:"50%" ,

    },
    tableFooter:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"flex-end",
         width:"100%" ,
         fontSize:"12px"  
    },
    tableFooterContent:{
        display:"flex",  
        flexDirection:"row",
        width:"50%",
        justifyContent:"space-between"
    }
})