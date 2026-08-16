import Link from "next/link";
import { footerCompanyLinks, legalLinks } from "@/data/navigation";
import { services } from "@/data/services";
import { site } from "@/lib/site";
import { Logo } from "@/components/shared/Logo";
import { Divider } from "@/components/ui/Divider";
import { Container } from "@/components/shared/Container";

export function Footer() {
  return (
    <footer className="border-t border-line bg-black text-offwhite">
      <Container className="py-16 md:py-20">
        <Logo size="footer" />
        <Divider className="mt-10" />
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted">
              Services
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-offwhite/70">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link href={service.href} className="inline-flex min-h-10 items-center hover:text-offwhite">
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted">
              Company
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-offwhite/70">
              {footerCompanyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="inline-flex min-h-10 items-center hover:text-offwhite">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted">
              Contact
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-offwhite/70">
              <li>
                <a href={site.phoneHref} className="inline-flex min-h-10 items-center hover:text-offwhite">
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={site.emailHref} className="inline-flex min-h-10 items-center break-all hover:text-offwhite">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted">
              Location
            </h2>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-offwhite/70">
              {site.location.full}
            </p>
          </div>
        </div>
      </Container>
      <div className="border-t border-line">
        <Container className="flex flex-col gap-3 py-5 pr-20 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:pr-6">
          <p>© 2026 PA Tech Services</p>
          <div className="flex gap-5">
            {legalLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-offwhite">
                {link.label}
              </Link>
            ))}
          </div>
        </Container>
      </div>
    </footer>
  );
}
