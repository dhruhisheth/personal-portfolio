import {
  Mail,
  MapPin,
  Phone,
  Send
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus(null);
    const formData = new FormData(e.target);
    try {
      const response = await fetch('https://formspree.io/f/myzpyddw', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: formData,
      });
      if (response.ok) {
        setFormStatus('success');
        alert("Message sent! Thank you for your message. I'll get back to you soon.");
        e.target.reset();
      } else {
        setFormStatus('error');
        alert("There was a problem sending your message. Please try again later.");
      }
    } catch (error) {
      setFormStatus('error');
      alert("There was a problem sending your message. Please try again later.");
    }
    setIsSubmitting(false);
  };
  
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center pop-heading group hover:scale-105">
          GET IN <span className="text-primary"> TOUCH</span>
        </h2>
        <p className="text-center text-muted-foreground mb-10 text-lg font-medium">
          Have a project in mind or want to collaborate? Feel free to reach out.
        </p>
        <div className="flex flex-col md:flex-row gap-12">
          {/* Send a Message (left) */}
          <div className="bg-card p-8 rounded-lg shadow-xs flex-1 order-1 md:order-none">
            <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-base font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="Your name..."
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-base font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="your.email@gmail.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-base font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
              {formStatus === 'success' && (
                <p className="text-green-600 text-sm mt-2">Your message was sent successfully!</p>
              )}
              {formStatus === 'error' && (
                <p className="text-red-600 text-sm mt-2">There was an error sending your message. Please try again later.</p>
              )}
            </form>
          </div>
          {/* Contact Info (right) */}
          <div className="bg-card p-8 rounded-lg shadow-xs flex-1 order-2 md:order-none space-y-8 text-left">
            <h3 className="text-2xl font-semibold mb-6">
              Contact Information
            </h3>
            <div className="space-y-6">
              <div className="bg-background rounded-md border border-input p-4 flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-base font-medium"> Email</h4>
                  <a
                    href="mailto:shethdhruhi05@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    shethdhruhi05@gmail.com
                  </a>
                </div>
              </div>
              <div className="bg-background rounded-md border border-input p-4 flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-base font-medium"> Phone</h4>
                  <a
                    href="tel:+14088198122"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +1 (408) 819-8122
                  </a>
                </div>
              </div>
              <div className="bg-background rounded-md border border-input p-4 flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-medium"> Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    San Jose, CA, USA
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
