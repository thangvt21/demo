import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import { IVariant } from "@/lib/database/models/variant.model"
import { startTransition, useEffect, useState } from "react"
import { Input } from "../ui/input"
import { CreateVariant, getAllVariants } from "@/lib/actions/variant.action"
  
type VariantDropdownProps = {
    value?: string,
    onChangeHandler?: ()=>void
}

const VariantDropdown = ({value, onChangeHandler}: VariantDropdownProps) => {
    const [variants, setVariants] = useState<IVariant[]>([])

    const [newVariant, setNewVariant] = useState('');

    const handleAddVariant = () => {
        CreateVariant({
            variantName: newVariant.trim()
        })
        .then((variant) => {
            setVariants((prevState) => [...prevState, variant])
        })
    }
    
    useEffect(() => {
        const getVariants = async () => {
            const variantList = await getAllVariants();

            variantList && setVariants(variantList as IVariant[])
        }
        getVariants();
    }, [])

  return (
    <Select onValueChange={onChangeHandler} defaultValue={value}>
        <SelectTrigger className="select-field">
            <SelectValue placeholder="Size - Color" />
        </SelectTrigger>
        <SelectContent>
            {variants.length > 0 && variants.map((variant) => (
                <SelectItem key={variant._id} value={variant._id} className="select-item p-regular-14">
                    {variant.name}
                </SelectItem>
            ))}
            <AlertDialog>
                <AlertDialogTrigger className="p-medium-14 flex w-full rounded-sm py-3 pl-8 text-primary-500 hover:bg-primary-50 focus:text-primary-500">Add new size and new color</AlertDialogTrigger>
                <AlertDialogContent className="bg-white">
                    <AlertDialogHeader>
                    <AlertDialogTitle>New Size - Color</AlertDialogTitle>
                    <AlertDialogDescription>
                        <Input type="text" placeholder="Size - Color" className="input-field mt-3" onChange={(e) => setNewVariant(e.target.value)}/>
                    </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={() => startTransition(handleAddVariant)}>Add</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>

        </SelectContent>
    </Select>

  )
}

export default VariantDropdown