"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Loader2, MapPin, Clock, Phone, Mail } from "lucide-react"

import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { useToast } from "../hooks/use-toast" // Updated import
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"

const formSchema = z.object({
  nombre: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Por favor ingrese un email válido.",
  }),
  telefono: z.string().min(10, {
    message: "Por favor ingrese un número de teléfono válido.",
  }),
  mensaje: z.string().min(10, {
    message: "El mensaje debe tener al menos 10 caracteres.",
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
      // Simulated API call
      await new Promise((resolve) => setTimeout(resolve, 1500))
      toast({
        title: "Mensaje enviado",
        description: "Nos pondremos en contacto contigo pronto.",
      })
      reset()
    } catch (error) {
      toast({
        title: "Error",
        description: "Hubo un problema al enviar el mensaje. Por favor intente nuevamente.",
        variant: "destructive",
      })
    }
    setIsSubmitting(false)
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Ubicación Principal",
      description: "Hospital ABC Santa Fe, Consultorio 524",
    },
    {
      icon: Clock,
      title: "Horario de Atención",
      description: "Lunes a Viernes: 9:00 AM - 6:00 PM",
    },
    {
      icon: Phone,
      title: "Teléfono",
      description: "55 1555 0994",
    },
    {
      icon: Mail,
      title: "Email",
      description: "info@obesidadmx.com",
    },
  ]

  return (
    <div className="w-full bg-gray-50 py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-light text-gray-900 mb-4">Contacto</h2>
          <p className="text-lg text-gray-600">
            El Dr. Carlos Zerrweck actualmente atiende en el Hospital ABC Santa Fe en la Ciudad de México, si usted está
            en busca de tratamiento para la obesidad o quiere explorar sus opciones agende una cita aquí para recibir un
            tratamiento adecuado por parte de un profesional.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Envíanos un mensaje</CardTitle>
                <CardDescription>
                  Complete el formulario y nos pondremos en contacto con usted lo antes posible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="space-y-2">
                    <Input
                      placeholder="Nombre completo"
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
                      placeholder="Teléfono"
                      {...register("telefono")}
                      className={errors.telefono ? "border-red-500" : ""}
                    />
                    {errors.telefono && <p className="text-sm text-red-500">{errors.telefono.message as string}</p>}
                  </div>

                  <div className="space-y-2">
                    <Textarea
                      placeholder="Mensaje"
                      {...register("mensaje")}
                      className={`min-h-[120px] ${errors.mensaje ? "border-red-500" : ""}`}
                    />
                    {errors.mensaje && <p className="text-sm text-red-500">{errors.mensaje.message as string}</p>}
                  </div>

                  <Button type="submit" className="w-full bg-[#FFB800] hover:bg-[#e5a600]" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      "ENVIAR"
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