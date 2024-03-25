import { TAX } from "@/data/database"
export const calculateTax = (price)=> {
    return price * TAX/100
}