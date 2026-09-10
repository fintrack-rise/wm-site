import { RetailLanding } from "@/components/retail/retail-landing";
import { JsonLd } from "@/components/seo/json-ld";
import { homeMetadata } from "@/lib/seo-metadata";

export const metadata = homeMetadata();

export default function Home() {
  return (
    <>
      <JsonLd />
      <RetailLanding />
    </>
  );
}
