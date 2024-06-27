"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
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
import Link from "next/link"
import Facebook from "@/assets/icons/fb.svg"
import Google from "@/assets/icons/google.svg"
import Image from "next/image"

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Nama harus terdiri dari minimal 2 karakter.",
    }),
    phoneNumber: z.string().min(10, {
        message: "Nomor Handphone harus terdiri dari minimal 10 karakter.",
    }),
})

export function RegisterPage() {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            phoneNumber: "",
        },
    })

    const onSubmit = (data: any) => {
        console.log(data)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-[16px] shadow-md rounded-md p-8 w-[450px]">
                <h1 className="text-center text-[22px] font-bold text-accent leading-[30px]">Daftar Sekarang</h1>
                <div className='flex items-center justify-center text-sm leading-[19px] gap-2'>
                    <p>Belum punya akun?</p>
                    <Link href="/login" className='text-[#EE4336] font-bold'>Masuk</Link>
                </div>
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-accent text-sm">Nama</FormLabel>
                            <FormControl>
                                <Input placeholder="Masukkan Nama" {...field} />
                            </FormControl>
                            <FormDescription>
                                Contoh: John Doe
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nomor Handphone</FormLabel>
                            <FormControl>
                                <div className="flex">
                                    <span className="bg-[#E8E8E8] text-accent px-3 flex items-center rounded-l-md">
                                        +62
                                    </span>
                                    <Input
                                        placeholder="Masukan Nomor Handphone"
                                        {...field}
                                        className="rounded-l-none"
                                    />
                                </div>
                            </FormControl>
                            <FormDescription>
                                Contoh: 8772121323343
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="flex items-center justify-center gap-2">
                    <div className="h-[1px] bg-[#EBEBEB] w-full"></div>
                    <p className="text-[#828282] text-xs text-nowrap">Atau daftar dengan</p>
                    <div className="h-[1px] bg-[#EBEBEB] w-full"></div>
                </div>
                <div className="flex items-center justify-center gap-3">
                    <Button variant="ghost" className="w-full py-5 border border-[#EBEBEB] hover:bg-transparent">
                        <Image src={Facebook} alt="facebook" />
                    </Button>
                    <Button variant="ghost" className="w-full py-5 border border-[#EBEBEB] hover:bg-transparent">
                        <Image src={Google} alt="google" />
                    </Button>
                </div>
                <Button className="bg-[#FFE512] w-full text-[#3A3A3A] px-7 py-6 font-bold text-sm hover:bg-yellow-400" type="submit">Daftar</Button>
                <p className="text-xs text-[#828282] text-center px-10">Dengan mendaftar, saya menyetujui <span className="text-[#4F5B68] font-medium">Syarat dan Ketentuan serta Kebijakan Privasi</span></p>
            </form>
        </Form>
    )
}

export default RegisterPage;
