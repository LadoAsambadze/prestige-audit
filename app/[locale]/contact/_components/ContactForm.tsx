"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (value: string) => {
    setFormData({ ...formData, subject: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* HERO SECTION - ADJUSTED FOR ABSOLUTE HEADER */}
      <section className="relative w-full bg-[#0a1a3f] pt-40 pb-48 px-5 overflow-hidden text-center">
        {/* BACKGROUND IMAGE & EFFECTS */}
        <div
          className="absolute inset-0 z-0 opacity-40 mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: `url('/background.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cyan-400/20 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#0a1a3f_90%)] z-0" />

        <div className="mx-auto max-w-7xl relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Contact{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-200">
              Us
            </span>
          </h1>
          <p className="text-blue-100/60 text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
            Reach out to our experts and let's start planning your success.
          </p>
        </div>
      </section>

      {/* FORM CONTENT SECTION - MATCHING REVIEWS SECTION STYLE */}
      <section className="relative z-20 -mt-20 bg-[#f3f5f4] rounded-t-[60px] md:rounded-t-[80px] pt-20 pb-20 px-6 shadow-[0_-20px_50px_-20px_rgba(0,0,0,0.1)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Info Side */}
            <div className="lg:col-span-4">
              <Card className="rounded-[40px] p-10 border-none shadow-sm h-full flex flex-col bg-white">
                <CardHeader className="p-0 mb-8 text-left">
                  <CardTitle className="text-3xl font-bold leading-tight text-gray-900">
                    Our Offices
                  </CardTitle>
                  <p className="text-gray-500 mt-4 text-sm leading-relaxed">
                    Prefer a direct chat? Visit one of our offices or reach out
                    via phone.
                  </p>
                </CardHeader>

                <CardContent className="p-0 space-y-8">
                  {[
                    {
                      icon: Phone,
                      title: "Phone",
                      lines: ["+1 (555) 123-4567"],
                      color: "bg-blue-50 text-blue-600",
                    },
                    {
                      icon: Mail,
                      title: "Email",
                      lines: ["info@bullish.com"],
                      color: "bg-cyan-50 text-cyan-600",
                    },
                    {
                      icon: MapPin,
                      title: "Office",
                      lines: ["123 Financial District, NY"],
                      color: "bg-blue-50 text-blue-600",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-center">
                      <div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${item.color}`}
                      >
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div className="text-left">
                        <h4 className="text-gray-400 font-bold text-[11px] uppercase tracking-widest">
                          {item.title}
                        </h4>
                        {item.lines.map((line, idx) => (
                          <p
                            key={idx}
                            className="text-gray-900 font-semibold text-sm"
                          >
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}

                  <div className="mt-auto pt-10">
                    <div className="bg-[#dbeafe] p-6 rounded-[32px] flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div className="text-left">
                        <p className="text-xs font-bold text-blue-800">
                          Available Now
                        </p>
                        <p className="text-[11px] text-blue-600">
                          Mon-Fri: 9AM - 6PM
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Form Side */}
            <div className="lg:col-span-8">
              <Card className="border-none shadow-sm rounded-[40px] bg-white overflow-hidden h-full">
                <CardContent className="p-10">
                  {submitStatus === "success" && (
                    <Alert className="mb-8 bg-green-50 border-green-100 rounded-2xl">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                      <AlertDescription className="text-green-800 font-medium ml-2">
                        Success! Your message has been sent to our consultants.
                      </AlertDescription>
                    </Alert>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6 text-left">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label
                          htmlFor="name"
                          className="text-sm font-bold text-gray-700 ml-1"
                        >
                          Full Name
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="John Doe"
                          className="h-14 rounded-2xl border-gray-100 bg-gray-50/50 focus:bg-white transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="email"
                          className="text-sm font-bold text-gray-700 ml-1"
                        >
                          Email Address
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="john@example.com"
                          className="h-14 rounded-2xl border-gray-100 bg-gray-50/50 focus:bg-white transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label
                          htmlFor="phone"
                          className="text-sm font-bold text-gray-700 ml-1"
                        >
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 000-0000"
                          className="h-14 rounded-2xl border-gray-100 bg-gray-50/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="subject"
                          className="text-sm font-bold text-gray-700 ml-1"
                        >
                          Service Required
                        </Label>
                        <Select
                          value={formData.subject}
                          onValueChange={handleSelectChange}
                          required
                        >
                          <SelectTrigger className="h-14 rounded-2xl border-gray-100 bg-gray-50/50">
                            <SelectValue placeholder="Choose a service" />
                          </SelectTrigger>
                          <SelectContent className="rounded-2xl">
                            <SelectItem value="financial">
                              Wealth Management
                            </SelectItem>
                            <SelectItem value="audit">Tax & Audit</SelectItem>
                            <SelectItem value="consulting">
                              Business Consulting
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="message"
                        className="text-sm font-bold text-gray-700 ml-1"
                      >
                        How can we help?
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Tell us about your goals..."
                        className="rounded-2xl border-gray-100 bg-gray-50/50 resize-none p-4"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white rounded-full py-7 px-10 w-full md:w-fit flex items-center gap-2 group transition-all font-bold"
                    >
                      {isSubmitting ? "Processing..." : "Send My Inquiry"}
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
