import { useState, useEffect, useMemo } from "react";
import useFetch from "./useFetch";
import { getTodos } from "./requests";

const useTodos = () => {
    const request = useMemo(() => getTodos(), []);
    return useFetch(request);
};

export default useTodos;