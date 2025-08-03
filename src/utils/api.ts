import axios from "axios"
import type { Article } from "../types/article"
import { errorResponse } from "./helper"

const API_KEY = import.meta.env.VITE_API_KEY || ""
const BASE_URL = import.meta.env.VITE_BASE_URL || ""

export const fetchNews = async (
    query = ""
): Promise<{
    success: boolean
    results: Article[]
    message: string
}> => {
    const url = `${BASE_URL}/svc/search/v2/articlesearch.json`
    try {
        const response = await axios.get(url, {
            params: {
                "api-key": API_KEY,
                q: query,
            },
        })
        return {
            success: true,
            results: response.data.response.docs,
            message: "OK",
        }
    } catch (error) {
        console.error("Error fetching news:", error)
        return {
            success: false,
            results: [],
            message: errorResponse(error),
        }
    }
}
