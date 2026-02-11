import { ArrowRight, Star } from "lucide-react";
import { Button } from "../../components/ui/Button";

export function TestimonialPreview() {
  return (
    <div className="bg-white rounded-[3rem] p-12 shadow-xl border border-brand-sageLight">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <div className="flex gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-5 h-5 fill-brand-sageDark text-brand-sageDark"
              />
            ))}
          </div>
          <h4 className="text-2xl font-bold text-brand-charcoal mb-4">
            &ldquo;Transformative experience from day one&rdquo;
          </h4>
          <p className="text-brand-muted mb-6">
            Join hundreds of satisfied clients who have transformed their health
            and fitness through our private training programs.
          </p>
          <Button
            href="/testimonials"
            variant="outline"
            className="border-brand-sage text-brand-sageDark hover:bg-brand-sageLight"
          >
            Read More Success Stories
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="bg-brand-cream rounded-2xl p-4 text-center"
            >
              <div className="text-3xl font-bold text-brand-sageDark mb-2">
                98%
              </div>
              <div className="text-sm text-brand-muted">
                Client Satisfaction
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
