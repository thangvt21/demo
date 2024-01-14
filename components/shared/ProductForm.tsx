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
import FileUploader from "./FileUploader"
import { useState } from "react"

type ProductFormProps = {
    userId: string,
    type: "Create" | "Update"
}

const ProductForm = ({userId, type}: ProductFormProps) => {
    const [files, setFiles] = useState<File[]>([])

    const initialValues = productDefaultValues;

    const form = useForm<z.infer<typeof productformSchema>>({
        resolver: zodResolver(productformSchema),
        defaultValues: initialValues
    })
     
      // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof productformSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
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
                <FormLabel>Username</FormLabel>
                <FormControl>
                    <Input placeholder="Product name" {...field} className="input-field"/>
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="material"
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
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

export default ProductForm