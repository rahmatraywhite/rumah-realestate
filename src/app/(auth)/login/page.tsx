"use client"

import Link from 'next/link'
import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"

const formSchema = z.object({
    username: z.string().min(1, { message: "Username atau Nomor handphone harus diisi." }),
    password: z.string().min(6, { message: "Password harus terdiri dari minimal 6 karakter." })
})

export function LoginPage() {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            password: "",
        },
    })

    const onSubmit = (data: any) => {
        console.log(data)
    }

    return (
        <div className='shadow-md w-[450px] p-8 flex flex-col gap-5 rounded-md'>
            <h1 className='text-center text-[22px] font-bold text-accent leading-[30px]'>Masuk Sekarang</h1>
            <div className='flex items-center justify-center text-sm leading-[19px] gap-2'>
                <p>Belum punya akun?</p>
                <Link href="/register" className='text-[#EE4336] font-bold'>Daftar disini</Link>
            </div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='text-accent text-sm'>Username / Nomor handphone</FormLabel>
                                <FormControl>
                                    <Input type="text" placeholder="Masukkan username/ Nomor handphone" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='text-accent text-sm'>Password</FormLabel>
                                <FormControl>
                                    <Input type="password" placeholder="Masukkan password" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="bg-[#FFE512] w-full text-[#3A3A3A] px-7 text-sm hover:bg-[#FFE512]">Masuk</Button>
                </form>
            </Form>
            <Link className='text-center text-[#EE4336] font-bold text-sm leading-5' href="/forgot-password">Lupa password?</Link>
        </div>
    )
}

export default LoginPage
