import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
    name: z.string().min(1, {
        message: "Name darf nicht leer sein"
    }),
    phone: z.string(),
    email: z.email().min(1, {
        message: "E-Mail darf nicht leer sein"
    }),
    content: z.string()
})

export function ContactForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            content: ""
        }
    })

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem className="mb-5">
                            <FormControl>
                                <Input type="text" placeholder="Name*" {...field} className="contact-input" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                        <FormItem className="mb-5">
                            <FormControl>
                                <Input type="number" placeholder="Telefon*" {...field} className="contact-input" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem className="mb-5">
                            <FormControl>
                                <Input type="email" placeholder="E-Mail*" {...field} className="contact-input" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="content"
                    render={({ field }) => (
                        <FormItem className="mb-5">
                            <FormControl>
                                <Textarea {...field} placeholder="Nachricht*" className="contact-textarea"/>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button variant={"main"} size={"lg"} type="submit" className="font-semibold w-full h-12">Senden</Button>
            </form>
        </Form>
    )
}