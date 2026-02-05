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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (value: string) => {
    setFormData({
      ...formData,
      subject: value,
    });
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
      <div className="relative h-[240px] sm:h-[280px] lg:h-[320px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1600&h=400&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-primary/40"></div>
        </div>

        <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-accent/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 bg-secondary/15 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <div className="flex items-center space-x-2 mb-2 sm:mb-3">
            <div className="w-8 sm:w-10 h-0.5 bg-accent"></div>
            <span className="text-primary-foreground/90 font-semibold tracking-wider uppercase text-xs">
              Contact Us
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-primary-foreground">
            Financial <span className="text-accent">Consulting</span> Services
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-primary-foreground/80 max-w-2xl leading-relaxed">
            Expert guidance in auditing, accounting, and financial planning.
            Let's discuss how we can help your business grow.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-12 sm:h-16 lg:h-20"
          >
            <path
              d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
              fill="hsl(var(--background))"
            />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 -mt-10 sm:-mt-12 lg:-mt-16 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          <div className="lg:col-span-1 h-full">
            <Card className="bg-card border-2 border-accent/30 shadow-xl h-full">
              <CardHeader className="pb-3 sm:pb-4">
                <CardTitle className="text-lg sm:text-xl font-bold flex items-center">
                  <div className="w-0.5 h-6 bg-gradient-to-b from-primary to-accent mr-2 rounded-full"></div>
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4">
                <div className="flex items-start space-x-3 group cursor-pointer">
                  <div className="bg-gradient-to-br from-primary to-secondary p-2 rounded-lg shadow-md group-hover:scale-110 transition-transform flex-shrink-0">
                    <Phone className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-sm mb-0.5">Phone</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground hover:text-accent transition-colors truncate">
                      +1 (555) 123-4567
                    </p>
                    <p className="text-xs sm:text-sm text-muted-foreground hover:text-accent transition-colors truncate">
                      +1 (555) 987-6543
                    </p>
                  </div>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

                <div className="flex items-start space-x-3 group cursor-pointer">
                  <div className="bg-gradient-to-br from-secondary to-accent p-2 rounded-lg shadow-md group-hover:scale-110 transition-transform flex-shrink-0">
                    <Mail className="w-4 h-4 text-secondary-foreground" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-sm mb-0.5">Email</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground hover:text-accent transition-colors break-all">
                      info@financeconsult.com
                    </p>
                    <p className="text-xs sm:text-sm text-muted-foreground hover:text-accent transition-colors break-all">
                      audit@financeconsult.com
                    </p>
                  </div>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

                <div className="flex items-start space-x-3 group cursor-pointer">
                  <div className="bg-gradient-to-br from-accent to-secondary p-2 rounded-lg shadow-md group-hover:scale-110 transition-transform flex-shrink-0">
                    <MapPin className="w-4 h-4 text-accent-foreground" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-sm mb-0.5">
                      Office Address
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      123 Financial District
                      <br />
                      Suite 450
                      <br />
                      New York, NY 10004
                    </p>
                  </div>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

                <div className="flex items-start space-x-3 group cursor-pointer">
                  <div className="bg-gradient-to-br from-primary to-accent p-2 rounded-lg shadow-md group-hover:scale-110 transition-transform flex-shrink-0">
                    <Clock className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-sm mb-0.5">
                      Business Hours
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Monday - Friday: 9:00 AM - 6:00 PM
                    </p>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Saturday: 10:00 AM - 2:00 PM
                    </p>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2 h-full">
            <Card className="border-2 border-accent/30 shadow-2xl h-full">
              <CardHeader className="pb-3 sm:pb-4">
                <div className="flex items-center">
                  <div className="w-0.5 h-8 bg-gradient-to-b from-primary to-accent mr-3 rounded-full"></div>
                  <CardTitle className="text-xl sm:text-2xl font-bold">
                    Send us a Message
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                {submitStatus === "success" && (
                  <Alert className="mb-4 bg-accent/10 border-2 border-accent">
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                      <AlertDescription className="text-xs sm:text-sm font-semibold text-accent-foreground">
                        Thank you for contacting us! We'll get back to you
                        shortly.
                      </AlertDescription>
                    </div>
                  </Alert>
                )}

                <form
                  onSubmit={handleSubmit}
                  className="space-y-3 sm:space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="name"
                        className="text-xs sm:text-sm font-semibold"
                      >
                        Full Name *
                      </Label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="h-9 sm:h-10 text-sm"
                        placeholder="John Doe"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label
                        htmlFor="email"
                        className="text-xs sm:text-sm font-semibold"
                      >
                        Email Address *
                      </Label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="h-9 sm:h-10 text-sm"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="phone"
                        className="text-xs sm:text-sm font-semibold"
                      >
                        Phone Number
                      </Label>
                      <Input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="h-9 sm:h-10 text-sm"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label
                        htmlFor="subject"
                        className="text-xs sm:text-sm font-semibold"
                      >
                        Service Interest *
                      </Label>
                      <Select
                        value={formData.subject}
                        onValueChange={handleSelectChange}
                        required
                      >
                        <SelectTrigger className="h-9 sm:h-10 text-sm w-full">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem
                            value="financial-consulting"
                            className="text-sm"
                          >
                            💼 Financial Consulting
                          </SelectItem>
                          <SelectItem
                            value="audit-services"
                            className="text-sm"
                          >
                            📋 Audit Services
                          </SelectItem>
                          <SelectItem value="tax-planning" className="text-sm">
                            💰 Tax Planning
                          </SelectItem>
                          <SelectItem value="accounting" className="text-sm">
                            📊 Accounting Services
                          </SelectItem>
                          <SelectItem value="other" className="text-sm">
                            💬 Other Inquiry
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label
                      htmlFor="message"
                      className="text-xs sm:text-sm font-semibold"
                    >
                      Your Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="resize-none text-sm"
                      placeholder="Please provide details about your inquiry..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-10 sm:h-11 text-sm sm:text-base font-bold shadow-lg"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        <span>Send Message</span>
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
