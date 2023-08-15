import React, { useEffect, useMemo, useState } from "react";
import { Button, Checkbox, Input, Typography } from "antd";

const ListComponent = ({ data, name, passData }) => {
  const [searchInput, setSearchInput] = useState("");
  const [listItems, setListItems] = useState(
    data.map((key) => ({ key, checked: false }))
  );

  const filteredData = useMemo(
    () =>
      listItems.filter((el) =>
        el.key.toLowerCase().includes(searchInput.toLowerCase())
      ),
    [listItems, searchInput]
  );

  const checkedListValues = useMemo(
    () => listItems.filter((item) => item.checked).map((item) => item.key),
    [listItems]
  );

  useEffect(() => {
    passData({ [name]: checkedListValues });
  }, [checkedListValues, passData, name]);

  const handleCheckboxChange = (itemKey) => {
    setListItems((prevItems) =>
      prevItems.map((el) =>
        el.key === itemKey ? { ...el, checked: !el.checked } : el
      )
    );
  };

  const handleClear = () => {
    setListItems((prevItems) =>
      prevItems.map((item) => ({
        ...item,
        checked: false,
      }))
    );
  };

  const handleSelectAll = () => {
    setListItems((prevItems) =>
      prevItems.map((item) => ({
        ...item,
        checked: true,
      }))
    );
  };

  return (
    <div className="w-1/2 mr-2 flex flex-col m-0 lg:text-xl md:text-sm md:min-w-fit ">
      <Input
        allowClear
        style={{
          width: "25vw",
          minWidth: 200,
          alignSelf: "start",
          marginBottom: 5,
        }}
        placeHolder={`Search for ${name}`}
        size="middle"
        bordered={true}
        value={searchInput}
        onChange={(event) => setSearchInput(event.target.value)}
      />
      <div className="self-start">
        <Button className="mr-2" onClick={handleClear}>
          Clear All
        </Button>
        <Button onClick={handleSelectAll}>Select all</Button>
      </div>
      <Typography.Text strong={true} className="lg: text-xl md: text-sm">
        Select {name} for custom table
      </Typography.Text>
      <div>
        Checked {name}: {checkedListValues.join(", ")}
      </div>
      <ul style={{ columnCount: 2, overflow: "auto" }}>
        {filteredData.map((item) => (
          <li className="" key={item.key}>
            <Checkbox
              className="mr-2"
              checked={item.checked}
              onClick={() => handleCheckboxChange(item.key)}
            />
            {item.key}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(ListComponent);
