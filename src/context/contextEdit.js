import React from "react";
import { Select, Col } from "antd";

const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

class ContextEdit extends React.Component {
  render() {
    return (
      <>
        <Col span={2}> 集群选择 </Col>
        <Col span={10}>
          <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
            <Option value="jack">dev</Option>
            <Option value="lucy">product</Option>
          </Select>
        </Col>
        <Col span={2}> 命名空间 </Col>
        <Col span={10}>
          <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
            <Option value="jack">default</Option>
            <Option value="lucy">kube-system</Option>
          </Select>
        </Col>
      </>
    );
  }
}

export default ContextEdit;
