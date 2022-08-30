import axios from "axios";
import { HelloResponse } from "./types";

const BASE_URL = 'http://localhost:4000';

export function getHello() {
    return axios.get<HelloResponse>(BASE_URL)
}