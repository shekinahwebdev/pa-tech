import { site, whatsappUrl } from "@/lib/site";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with PA Tech Services on WhatsApp"
      className="fixed right-4 bottom-[max(1.25rem,env(safe-area-inset-bottom))] z-40 inline-flex size-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg transition hover:scale-[1.03] hover:bg-[#1ebe5d] sm:right-6"
    >
      <svg viewBox="0 0 32 32" className="size-7" aria-hidden="true" fill="currentColor">
        <path d="M19.11 17.47c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.41.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.46h-.52c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29s.98 2.65 1.12 2.83c.14.18 1.93 2.95 4.68 4.14 1.74.75 2.22.82 3.01.69.46-.08 1.6-.65 1.82-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32z" />
        <path d="M16.02 3.2C9.4 3.2 4.04 8.55 4.04 15.16c0 2.1.55 4.15 1.6 5.96L4 28.8l6.86-1.6a12.9 12.9 0 0 0 5.16 1.07h.01c6.61 0 11.97-5.36 11.97-11.97 0-3.2-1.25-6.21-3.51-8.47A11.9 11.9 0 0 0 16.02 3.2zm0 21.86h-.01a10.73 10.73 0 0 1-5.47-1.5l-.39-.23-4.07.95.94-3.97-.25-.41a10.73 10.73 0 0 1-1.64-5.74c0-5.93 4.83-10.76 10.77-10.76 2.87 0 5.57 1.12 7.6 3.15a10.7 10.7 0 0 1 3.16 7.61c0 5.94-4.84 10.9-10.64 10.9z" />
      </svg>
      <span className="sr-only">WhatsApp {site.phone}</span>
    </a>
  );
}
