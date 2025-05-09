"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Loader2, MapPin, Clock, Phone, Mail } from "lucide-react"

import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { useToast } from "../../hooks/use-toast"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"

const formSchema = z.object({
  nombre: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email.",
  }),
  telefono: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  mensaje: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: any) => {
    setIsSubmitting(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      toast({
        title: "Message sent",
        description: "We will contact you soon.",
      })
      reset()
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      })
    }
    setIsSubmitting(false)
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Main Location",
      description: "Hospital Puebla. Priv. de las Ramblas 4",
    },
    {
      icon: Clock,
      title: "Office Hours",
      description: "Tuesday to Thursday - With Appointment",
    },
    {
      icon: Phone,
      title: "Phone",
      description: "Clinic: 222 124 1865 - Emergency: 222 184 3622",
    },
    {
      icon: Mail,
      title: "Email",
      description: "drespinosa.cirugia@gmail.com",
    },
  ]

  return (
    <div className="w-full bg-gray-50 py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-light text-gray-900 mb-4">Contact</h2>
          <p className="text-lg text-gray-600">
            Dr. Omar Espinosa currently practices at Hospital Puebla in Puebla City. If you're seeking treatment or want to explore your options, schedule an appointment here to receive proper care from a professional.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
                <CardDescription>
                  Fill out the form and we'll contact you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="space-y-2">
                    <Input
                      placeholder="Full name"
                      {...register("nombre")}
                      className={errors.nombre ? "border-red-500" : ""}
                    />
                    {errors.nombre && <p className="text-sm text-red-500">{errors.nombre.message as string}</p>}
                  </div>

                  <div className="space-y-2">
                    <Input
                      type="email"
                      placeholder="Email"
                      {...register("email")}
                      className={errors.email ? "border-red-500" : ""}
                    />
                    {errors.email && <p className="text-sm text-red-500">{errors.email.message as string}</p>}
                  </div>

                  <div className="space-y-2">
                    <Input
                      type="tel"
                      placeholder="Phone"
                      {...register("telefono")}
                      className={errors.telefono ? "border-red-500" : ""}
                    />
                    {errors.telefono && <p className="text-sm text-red-500">{errors.telefono.message as string}</p>}
                  </div>

                  <div className="space-y-2">
                    <Textarea
                      placeholder="Message"
                      {...register("mensaje")}
                      className={`min-h-[120px] ${errors.mensaje ? "border-red-500" : ""}`}
                    />
                    {errors.mensaje && <p className="text-sm text-red-500">{errors.mensaje.message as string}</p>}
                  </div>

                  <Button type="submit" className="w-full bg-[#FFB800] hover:bg-[#e5a600]" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "SEND"
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            {contactInfo.map((item) => (
              <Card key={item.title}>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-50 p-3 rounded-full">
                      <item.icon className="h-6 w-6 text-[#0066B3]" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
