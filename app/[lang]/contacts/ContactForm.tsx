"use client";

import { useState, type FormEvent } from "react";
import type { Dictionary } from "@/data/i18n";

interface ContactFormProps {
  dict: Dictionary["contacts"];
}

export default function ContactForm({ dict }: ContactFormProps) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    );

    window.location.href = `mailto:info@smarts-books.com?subject=${subject}&body=${body}`;
  }

  const inputClasses =
    "w-full p-3 border border-zinc-200 focus:border-zinc-400 focus:ring-2 focus:ring-zinc-200 focus:outline-none rounded-lg transition-all duration-200";

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 border border-zinc-200 rounded-xl space-y-4"
    >
      <h2 className="font-semibold text-zinc-900 text-xl">{dict.formTitle}</h2>

      <div className="gap-4 grid grid-cols-1 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1 block text-zinc-500 text-sm">{dict.name}</span>
          <input
            type="text"
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder={dict.namePlaceholder}
            className={inputClasses}
          />
        </label>
        <label className="block">
          <span className="mb-1 block text-zinc-500 text-sm">{dict.emailLabel}</span>
          <input
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder={dict.emailPlaceholder}
            className={inputClasses}
          />
        </label>
      </div>

      <label className="block">
        <span className="mb-1 block text-zinc-500 text-sm">{dict.message}</span>
        <textarea
          required
          rows={6}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder={dict.messagePlaceholder}
          className={`${inputClasses} resize-y`}
        />
      </label>

      <button
        type="submit"
        className="w-full bg-zinc-900 hover:bg-zinc-700 active:scale-[0.98] p-3 rounded-lg font-medium text-white transition-all duration-200 hover:shadow-md"
      >
        {dict.send}
      </button>
    </form>
  );
}
