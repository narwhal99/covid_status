import Charts from "./components/charts";
import React, { useState } from "react";
import Filter from "./components/filter";

function App() {
  const [data, setData] = React.useState("infected");
  return (
    <div>
      <Filter dataType={setData} />
      <Charts filterData={data} />
    </div>
  );
}

export default App;
