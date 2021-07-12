import React, { useState } from "react";
import MultiSelect from "react-multi-select-component";
import "./index.css";

const Example = (props) => {
  const [selected, setSelected] = useState([]);

  return (
    <div>
      {/* <pre>{JSON.stringify(selected)}</pre> */}
      <MultiSelect
        disableSearch
        options={props.options}
        value={selected}
        onChange={setSelected}
        labelledBy="Filter"
        overrideStrings={{
          "allItemsAreSelected": props.allItemsSelectedString,
          "clearSearch": "Clear Search",
          "noOptions": "No options",
          "search": "Search",
          "selectAll": props.selectAllString,
          "selectSomeItems": props.filterType
        }}
      />
    </div>
  );
};

export default Example;