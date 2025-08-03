/* eslint-disable @typescript-eslint/no-explicit-any */
import dayjs from "dayjs"
import type { ObjectLiteral } from "../types/object-literal.interface"

export const formatDateTime = (input: string | Date): string => {
    return dayjs(input).format("DD MMM YYYY HH:mm")
}

export function safeObject<T = ObjectLiteral>(obj: any, defaultValue = {}) {
    if (!!obj && typeof obj === "object") {
        return obj as T
    }
    return defaultValue as T
}

export function safeString(str: any, defaultValue = "") {
    if (!!str && typeof str === "string") {
        return str
    } else if (typeof str === "number") {
        return String(str)
    }
    return defaultValue
}

export function getValObject(obj: any, key: string, defaultValue: any = "") {
    if (!!obj && typeof obj === "object") {
        const splitKey = key.split(".")
        let value: any = obj
        for (let i = 0; i < splitKey.length; i++) {
            value = safeObject(value)[splitKey[i]]
        }
        return value || defaultValue
    }
    return defaultValue
}

export const errorResponse = (err: any): string => {
    let msg = ""

    if (err.response) {
        msg = err.response.status + " " + err.response.statusText
        const eMessage =
            err.response.data?.message || err.response.data?.messages
        if (eMessage) {
            if (Array.isArray(eMessage)) {
                msg = eMessage.join(", ")
            } else if (typeof eMessage === "object") {
                msg = JSON.stringify(eMessage)
            } else {
                msg = eMessage
            }
        }
    } else if (err.message) {
        msg = err.message
    } else {
        msg = safeString(err)
    }
    return msg
}
