'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { productformSchema } from "@/lib/validator"
import { productDefaultValues } from "@/constants"
import Dropdown from "./Dropdown"
import { useState } from "react"
import { FileUploader } from "./FileUploader"
import VariantDropdown from "./VariantDropdown"
import Image from "next/image"
import { useUploadThing } from "@/lib/uploadthing" 
import { Console } from "console"
import Product, { IProduct } from "@/lib/database/models/product.model"
import { useRouter } from "next/navigation"
import { CreateProduct, updateProduct } from "@/lib/actions/product.action"

type ProductFormProps = {
    userId: string
    type: "Create" | "Update"
    product?: IProduct,
    productId?: string
}

const ProductForm = ({userId, type, product, productId}: ProductFormProps) => {
    const [files, setFiles] = useState<File[]>([])

    const initialValues = product && type === 'Update' ? {
      ...product,
      createdAt: new Date(product.createdAt),
      updatedAt: new Date(product.updatedAt),
    } : productDefaultValues;
    const router = useRouter();
    const { startUpload } = useUploadThing('imageUploader')

    const form = useForm<z.infer<typeof productformSchema>>({
        resolver: zodResolver(productformSchema),
        defaultValues: initialValues
    })
     
      // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof productformSchema>) {
        let uploadedImageUrl = values.frontUrl;

        if(files.length > 0) {
            const uploadedImages = await startUpload(files)

            if(!uploadedImages) {
                return
            }

            uploadedImageUrl = uploadedImages[0].url
        }

        if(type === 'Create') {
            try {
                const newProduct = await CreateProduct({
                    product: { ...values, frontUrl: uploadedImageUrl },
                    userId,
                    path: '/profile'
                })
                if(newProduct) {
                    form.reset();
                    router.push(`/products/${newProduct._id}`)
                }
            } catch (error) {
                console.log(error);
            }
        }

        if(type === 'Update') {
          if(!productId) {
            router.back()
            return;
          }

          try {
              const updatedProduct = await updateProduct({
                userId,
                product: { ...values, frontUrl: uploadedImageUrl, _id: productId },
                path: `/products/${productId}`
              })
              if(updatedProduct) {
                  form.reset();
                  router.push(`/products/${updatedProduct._id}`)
              }
          } catch (error) {
              console.log(error);
          }
      }
    }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <div className="flex flex-col gap-5 md:flex-row">
            <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
                <FormItem className="w-full">
                <FormLabel>Product name</FormLabel>
                <FormControl>
                    <Input placeholder="Product name" {...field} className="input-field"/>
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="categoryId"
            render={({ field }) => (
                <FormItem className="w-full">
                <FormLabel>Brand</FormLabel>
                <FormControl>
                    <Dropdown onChangeHandler={field.onChange} value={field.value}/>
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="variantId"
            render={({ field }) => (
                <FormItem className="w-full">
                <FormLabel>Variant</FormLabel>
                <FormControl>
                    <VariantDropdown onChangeHandler={field.onChange} value={field.value}/>
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="frontUrl"
            render={({ field }) => (
                <FormItem className="w-full">
                <FormLabel>Design</FormLabel>
                <FormControl>
                    <FileUploader onFieldChange={field.onChange} frontUrl={field.value} setFiles={setFiles}/>
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
        </div>
        <div className="flex flex-col gap-5 md:flex-row">
            <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                    <FormItem className="w-full">
                    <FormLabel>Price</FormLabel>
                    <FormControl>
                        <div className="flex-center h-[54px] w-full overflow-hidden bg-gray-50 rounded-full px-4 py-2">
                            <Image src="/assets/icons/dollar.svg" alt="price" width={24} height={24}/>
                            <Input placeholder="Price" {...field} className="input-field"/>
                        </div>
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
            />  
        </div>
        <Button 
          type="submit"
          size="lg"
          disabled={form.formState.isSubmitting}
          className="button col-span-2 w-full"
        >
          {form.formState.isSubmitting ? (
            'Submitting...'
          ): `${type} Product `}</Button>
      </form>
    </Form>
  )
}

export default ProductForm