import { Footer } from "@/components/Footer"
import Link from "next/link"

export default function AboutPage() {
  return (
    <>
      <section className="interior">
        <div className="eyebrow">About Raunak</div>
        <h1 className="interior-heading">A designer who likes <em>making sense</em> of things.</h1>
        <div className="interior-grid">
          <aside className="interior-aside">BA Visual Communication (Minor)<br />B.Tech Computer Science<br />Amity University Rajasthan</aside>
          <div>
            <p>I&apos;m a UI/UX designer and developer with a soft spot for interfaces that make people feel capable. I work at the intersection of visual clarity, human behaviour, and front-end craft.</p>
            <p style={{ marginTop: "1.35rem" }}>From early user flows to high-fidelity systems and the details of implementation, I like carrying an idea all the way through — with equal parts curiosity and care.</p>
          </div>
        </div>
        <div className="contact-panel">
          <p>A few tools in my orbit</p>
          <Link href="/#capabilities">Figma · Framer · React · Node ↗</Link>
        </div>
      </section>
      <Footer />
    </>
  )
}
