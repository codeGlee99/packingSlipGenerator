const mongoose = require("mongoose");

const PackingData = mongoose.Schema(
  {
     dataValue : {
      type : Object
     }
  },
  {
    collections: "PackingList",
  }
);

mongoose.model("PackingList", PackingData);
