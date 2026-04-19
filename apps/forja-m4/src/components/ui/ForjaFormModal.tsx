"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { X } from "lucide-react";

const schema = z.object({
  nome: z.string().min(3, "Informe o nome completo."),
  cpf: z
    .string()
    .trim()
    .regex(/^(\d{11}|\d{3}\.\d{3}\.\d{3}-\d{2})$/, "CPF inválido."),
  rg: z.string().min(5, "RG inválido."),
  dataNascimento: z
    .string()
    .min(1, "Informe a data de nascimento.")
    .refine((value) => new Date(value).getTime() < Date.now(), "Data inválida."),
});

type FormValues = z.infer<typeof schema>;

const FORM_URL = "https://forms.gle/SEU_FORMULARIO_AQUI";

interface ForjaFormModalProps {
  open: boolean;
  onClose: () => void;
}

export function ForjaFormModal({ open, onClose }: ForjaFormModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      nome: "",
      cpf: "",
      rg: "",
      dataNascimento: "",
    },
  });

  useEffect(() => {
    if (!open) return;

    const onEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onEsc);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onEsc);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    reset();
  };

  if (!open || typeof window === "undefined") return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[90] flex items-end justify-center bg-black/75 p-3 sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="forja-m4-form-title"
      onClick={onClose}
    >
      <div
        id="formulario-forja-m4"
        className="pulse-border w-full max-w-xl rounded-2xl border bg-bg-secondary p-4 shadow-[0_20px_80px_rgba(0,0,0,0.5)] sm:p-6"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-text-muted">
              Pré-cadastro FORJA M4
            </p>
            <h3 id="forja-m4-form-title" className="font-display text-4xl leading-none text-text-primary">
              A HORA É AGORA
            </h3>
          </div>
          <button
            type="button"
            className="rounded-full border border-line-soft p-2 text-text-secondary transition-colors hover:text-text-primary"
            onClick={onClose}
            aria-label="Fechar formulário"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {isSubmitSuccessful ? (
          <div className="space-y-4 rounded-xl border border-accent-olive/40 bg-bg-primary/70 p-5 text-text-secondary">
            <p className="text-xl font-semibold text-text-primary">Cadastro recebido.</p>
            <p>
              Quando o formulário oficial estiver disponível, você poderá continuar por aqui.
            </p>
            <a
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-lg bg-accent-olive px-5 py-3 font-bold uppercase tracking-[0.15em] text-white transition-colors hover:bg-accent-olive-bright"
            >
              Abrir formulário oficial
            </a>
          </div>
        ) : (
          <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
            <Field
              label="Nome"
              error={errors.nome?.message}
            >
              <input
                {...register("nome")}
                autoComplete="name"
                placeholder="Seu nome completo"
                className="w-full rounded-xl border border-line-soft bg-bg-primary px-4 py-3 text-base text-text-primary outline-none transition-colors placeholder:text-text-muted focus:border-accent-olive-bright"
              />
            </Field>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <Field label="CPF" error={errors.cpf?.message}>
                <input
                  {...register("cpf")}
                  inputMode="numeric"
                  autoComplete="off"
                  placeholder="000.000.000-00"
                  className="w-full rounded-xl border border-line-soft bg-bg-primary px-4 py-3 text-base text-text-primary outline-none transition-colors placeholder:text-text-muted focus:border-accent-olive-bright"
                />
              </Field>

              <Field label="RG" error={errors.rg?.message}>
                <input
                  {...register("rg")}
                  autoComplete="off"
                  placeholder="00.000.000-0"
                  className="w-full rounded-xl border border-line-soft bg-bg-primary px-4 py-3 text-base text-text-primary outline-none transition-colors placeholder:text-text-muted focus:border-accent-olive-bright"
                />
              </Field>
            </div>

            <Field label="Data de nascimento" error={errors.dataNascimento?.message}>
              <input
                {...register("dataNascimento")}
                type="date"
                className="w-full rounded-xl border border-line-soft bg-bg-primary px-4 py-3 text-base text-text-primary outline-none transition-colors focus:border-accent-olive-bright"
              />
            </Field>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-2 w-full rounded-xl bg-accent-olive px-5 py-3 text-base font-bold uppercase tracking-[0.16em] text-white transition-colors hover:bg-accent-olive-bright disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? "Enviando..." : "Confirmar pré-cadastro"}
            </button>
          </form>
        )}
      </div>
    </div>,
    document.body,
  );
}

interface FieldProps {
  children: React.ReactNode;
  error?: string;
  label: string;
}

function Field({ children, error, label }: FieldProps) {
  return (
    <label className="block space-y-1.5">
      <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-text-muted">{label}</span>
      {children}
      {error ? <p className="text-xs text-red-300">{error}</p> : null}
    </label>
  );
}
