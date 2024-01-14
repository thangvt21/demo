
import * as z from "zod"

export const productformSchema = z.object({
    name: z.string().min(3, "Tên sản phẩm cần tối thiểu 3 ký tự."),
    material: z.string().min(6, "Chất liệu(loại vải) không đúng, ý bạn là Cotton, Polyeste, ...").max(400, "Tên chất liệu quá dài.(>400 ký tự)"),
    variant: z.string().min(6, "Tham khảo tùy chọn trong sheet").max(400, 'Quá dài, tham khảo mã trong sheet.'),
    frontUrl: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    categoryId: z.string(),
    price: z.string(),
    url: z.string().url()
})