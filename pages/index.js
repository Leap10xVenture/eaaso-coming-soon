import { Layout } from "@/components"
import Hero from "@/blocks/hero"
import Cards from "@/blocks/cards"
import { Icon } from "reflexjs"

export default function IndexPage() {
  return (
    <Layout>
      <Hero
        heading="EaaSo Marketplace."
        text="1 Click, Video First, Marketplace for digital presence."
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
        heading="Marketplace for Creators"
        text="Focus on creating. EaaSo will take care of distributions."
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
            heading: "Payments",
            text:
              "Sell anywhere in the world, in any language, get paid in any currency.",
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
