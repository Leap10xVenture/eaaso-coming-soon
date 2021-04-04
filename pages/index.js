import { Layout } from "@/components"
import Hero from "@/blocks/hero"
import Cards from "@/blocks/cards"
import { Icon } from "reflexjs"

export default function IndexPage() {
  return (
    <Layout>
      <Hero
        heading="EaaSo."
        text="Digital Marketplace - Made Easy."
        image={{
          src: "/images/crayon-982.png",
          alt: "Hero image",
        }}
        buttons={
          <a variant="button.secondary.lg" mt="4">
            Coming Soon
          </a>
        }
      />
      <Cards
        subheading="EaaSo"
        heading="Context based Digital Marketplace"
        text="Conversations tools for a digital Marketplaces"
        cards={[
          {
            heading: "Digital Marketing Tools.",
            text:
              "No need to install 100's of digital tools.",
            image: {
              src: "/images/crayon-welcome.png",
              alt: "Image",
            },
          },
          {
            heading: "Digital Sales and Support Tools",
            text:
              "Reach the customer using email, phone or messenger",
            image: {
              src: "/images/crayon-list-is-empty.png",
              alt: "Image",
            }
            ,
          },
          {
            heading: "Multiple Channels",
            text:
              "EaaSo provide multi channel solution to reach your customers.",
            image: {
              src: "/images/crayon-come-back-later.png",
              alt: "Image",
            },
          },
        ]}
      />
    </Layout>
  )
}
