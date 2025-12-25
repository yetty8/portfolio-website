"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiMapPin,
  FiSend,
  FiCheckCircle,
  FiXCircle,
} from "react-icons/fi";

type Status = "idle" | "sending" | "success" | "error";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    company: "", // honeypot
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("idle");

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim())
      newErrors.message = "Message is required";

    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check
    if (formData.company) return;

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("sending");

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Portfolio Contact — ${formData.name}`,
        }),
      });

      if (!res.ok) throw new Error();

      setStatus("success");
      setFormData({ name: "", email: "", message: "", company: "" });
      setTimeout(() => setStatus("idle"), 6000);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="text-center">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Let’s Work Together
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Have a project, role, or idea in mind?  
              <br className="hidden sm:block" />
              I’m open to freelance work, full-time roles, and collaborations.
            </p>
          </div>

          <div className="grid gap-14 mt-16 md:grid-cols-2">
            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Contact Details
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Recruiters and hiring managers are welcome to reach out directly.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400">
                    <FiMail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      Email
                    </p>
                    <a
                      href="mailto:yetbarek.tech@gmail.com"
                      className="text-blue-600 hover:underline dark:text-blue-400"
                    >
                      yetbarek.tech@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400">
                    <FiMapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      Location
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      Toronto, Canada
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="p-8 rounded-xl bg-white dark:bg-gray-800/60 shadow-xl border border-gray-100 dark:border-gray-700/50">
                {status === "success" ? (
                  <div className="text-center">
                    <FiCheckCircle className="w-14 h-14 mx-auto text-green-500 mb-4" />
                    <h3 className="text-2xl font-semibold mb-2">
                      Message Sent
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Thanks for reaching out — I’ll respond shortly.
                    </p>
                  </div>
                ) : status === "error" ? (
                  <div className="text-center">
                    <FiXCircle className="w-14 h-14 mx-auto text-red-500 mb-4" />
                    <h3 className="text-2xl font-semibold mb-2">
                      Something went wrong
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      Please try again or contact me directly via email.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                      Try Again
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Honeypot */}
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="hidden"
                      tabIndex={-1}
                      autoComplete="off"
                    />

                    {["name", "email"].map((field) => (
                      <div key={field}>
                        <label className="block text-sm font-medium mb-1">
                          {field === "name" ? "Name" : "Email"}
                        </label>
                        <input
                          type={field === "email" ? "email" : "text"}
                          name={field}
                          value={(formData as any)[field]}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700/60 focus:ring-2 focus:ring-blue-500 ${
                            errors[field] ? "ring-2 ring-red-500" : ""
                          }`}
                        />
                        {errors[field] && (
                          <p className="text-sm text-red-600 mt-1">
                            {errors[field]}
                          </p>
                        )}
                      </div>
                    ))}

                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Message
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700/60 focus:ring-2 focus:ring-blue-500 ${
                          errors.message ? "ring-2 ring-red-500" : ""
                        }`}
                      />
                      {errors.message && (
                        <p className="text-sm text-red-600 mt-1">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-70"
                    >
                      <FiSend />
                      {status === "sending"
                        ? "Sending..."
                        : "Send Inquiry"}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
