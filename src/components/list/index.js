import React, { useEffect, useMemo, useState } from "react";
import { Checkbox, Input } from "antd";

const ListComponent = ({ data, name, passData }) => {
  const [input, setInput] = useState("");
  const [items, setItems] = useState(
    data.map((key) => ({ key, checked: false }))
  );

  const filteredData = useMemo(
    () =>
      items.filter((el) => el.key.toLowerCase().includes(input.toLowerCase())),
    [items, input]
  );

  const checkedValues = useMemo(
    () => items.filter((item) => item.checked).map((item) => item.key),
    [items]
  );
  // 123
  useEffect(() => {
    passData({ [name]: checkedValues });
  }, [checkedValues, passData, name]);

  const handleCheckboxChange = (itemKey) => {
    setItems((prevItems) =>
      prevItems.map((el) =>
        el.key === itemKey ? { ...el, checked: !el.checked } : el
      )
    );
  };

  const handleClear = () => {
    setItems((prevItems) =>
      prevItems.map((item) => ({
        ...item,
        checked: false,
      }))
    );
  };

  return (
    <div className="w-1/2 mr-2 flex flex-col">
      <Input
        allowClear
        placeHolder={`Search for ${name}`}
        size="large"
        bordered={false}
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <button onClick={handleClear}>Clear All</button>
      <div>
        Checked {name}: {checkedValues.join(" ")}
      </div>
      <ul style={{ columnCount: 2 }}>
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
