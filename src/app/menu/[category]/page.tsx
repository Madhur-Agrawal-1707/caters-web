import { redirect } from "next/navigation";

export default async function MenuCategoryRedirect({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  redirect(`/menu?category=${encodeURIComponent(category)}`);
}
