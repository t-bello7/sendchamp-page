import { atom } from "recoil"
import priceData from "../assets/data/prices.json"

export const priceState = atom({
    key: 'priceState',
    default: priceData
})

export const priceFilterState = atom({
    key: 'priceFilterState',
    default: {
        base:'NGN',
        convert: ''
    }
})