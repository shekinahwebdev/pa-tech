import { Suspense } from "react";
import { ContactForm } from "@/components/shared/ContactForm";

type QuoteFormProps = {
  compact?: boolean;
};

export function QuoteForm({ compact = false }: QuoteFormProps) {
  return (
    <Suspense
      fallback={
        <div
          className="h-[32rem] animate-pulse border-t border-line bg-near"
          aria-hidden="true"
        />
      }
    >
      <ContactForm compact={compact} />
    </Suspense>
  );
}
