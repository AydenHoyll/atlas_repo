import { Input, Table, Typography } from "antd";
import React, { useMemo, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";

const UITable = ({ title = "Table", columns, data, searchByKey = "name" }) => {
  const [inputValue, setInputValue] = useState("");

  const currentData = useMemo(
    () =>
      data.filter((entity) => {
        return String(entity[searchByKey].props["data-value"])
          .toLowerCase()
          .includes(inputValue.toLowerCase());
      }),
    [data, searchByKey, inputValue]
  );

  return (
    <>
      <Table
        title={() => (
          <>
            <Typography.Title level={3}>{title}</Typography.Title>
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={`Search by ${searchByKey}...`}
              suffix={<SearchOutlined />}
            />
          </>
        )}
        bordered
        pagination={{
          position: ["bottomLeft"],
          defaultPageSize: 7,
          pageSize: 7,
          hideOnSinglePage: true,
          responsive: true,
          showSizeChanger: false,
        }}
        columns={columns}
        dataSource={currentData}
      />
    </>
  );
};

export default React.memo(UITable);
