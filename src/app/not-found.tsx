import Link from "next/link";
import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center pt-16 sm:pt-20">
      <Container narrow className="text-center">
        <p className="text-xs font-medium tracking-[0.14em] text-[var(--color-maroon)]">
          404
        </p>
        <h1 className="font-display mt-4 text-3xl font-medium sm:text-4xl">
          Looks like this table is empty.
        </h1>
        <p className="mt-4 text-[var(--color-ink)]/60">
          The page you&apos;re looking for isn&apos;t here.
        </p>
        <div className="mt-8">
          <Button href="/">Return Home</Button>
        </div>
        <p className="mt-6 text-sm">
          <Link href="/menu" className="link-underline text-[var(--color-ink)]/60">
            Browse the menu instead →
          </Link>
        </p>
      </Container>
    </div>
  );
}
