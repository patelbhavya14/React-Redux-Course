import React from "react";
import useResources from "./useResources";

const ResourceList = ({ resource }) => {
  const resources = useResources(resource);

  const renderList = () => {
    const list = resources.map((record) => {
      return (
        <li value="*" key={record.id}>
          {record.title}
        </li>
      );
    });
    return list;
  };

  return <ol className="ui list">{renderList()}</ol>;
};

export default ResourceList;
