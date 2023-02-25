import { useState, useEffect, useMemo } from "react";
import useFetch from "./useFetch";
import { getTodos } from "../utils/api";

const useTodos = () => {
    const request = useMemo(() => getTodos(), []);
    return useFetch(request);
};

export default useTodos;