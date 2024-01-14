
import * as z from "zod"

export const productformSchema = z.object({
    name: z.string().min(3, "Tên sản phẩm cần tối thiểu 3 ký tự."),
    variantId: z.string().min(6, "Tham khảo tùy chọn trong sheet").max(400, 'Quá dài, tham khảo mã trong sheet.'),
    frontUrl: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    categoryId: z.string(),
    price: z.string(),
})