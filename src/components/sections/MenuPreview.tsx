import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { Button } from "@/components/ui/Button";
import { getFeaturedMenuItems } from "@/data/menu";

export default function MenuPreview() {
  const items = getFeaturedMenuItems(10);

  return (
    <section className="border-t border-[var(--color-line)] py-20 sm:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Signature Menu"
            heading="A Taste of What We Serve"
            body="A curated selection from our full menu — every dish shown here comes directly from our kitchen's repertoire."
            className="mb-0"
          />
          <Button href="/menu" variant="secondary" showArrow className="hidden sm:inline-flex">
            Explore Full Menu
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
          {items.map((item, i) => (
            <Reveal key={item.id} delay={(i % 5) * 60}>
              <ImagePlaceholder
                src={item.image}
                alt={item.name}
                label={item.name}
                className="aspect-[3/4]"
              />
              <div className="mt-3 flex items-start gap-2">
                {item.vegetarian && (
                  <span
                    aria-hidden
                    className="mt-1.5 size-2 shrink-0 rounded-full bg-emerald-700"
                    title="Vegetarian"
                  />
                )}
                <p className="text-sm font-medium">{item.name}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Button href="/menu" variant="secondary" showArrow className="mt-10 sm:hidden">
          Explore Full Menu
        </Button>
      </Container>
    </section>
  );
}
