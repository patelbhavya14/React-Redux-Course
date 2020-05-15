import { useState, useEffect } from "react";
import axios from "axios";

const useResources = (resource) => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    fetchResource(resource);
  }, [resource]);

  const fetchResource = async (resource) => {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/${resource}`
    );
    setResources(res.data);
  };

  return resources;
};

export default useResources;
