type TestimonialsSectionProps = {
  testimonials?: never[];
};

export function TestimonialsSection({ testimonials = [] }: TestimonialsSectionProps) {
  if (testimonials.length === 0) {
    return null;
  }

  return null;
}
