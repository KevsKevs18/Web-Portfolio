import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const RedirectOnRefresh = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const navType = performance.getEntriesByType("navigation");
    if (navType.length > 0 && navType[0].type === "reload") {
      navigate("/");
    }
  }, []);

  return null;
};

export default RedirectOnRefresh;
