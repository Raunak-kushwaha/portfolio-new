import { Footer } from "@/components/Footer"

export default function ContactPage() {
  return (
    <>
      <section className="interior">
        <div className="eyebrow">Say hello</div>
        <h1 className="interior-heading">Good work starts with a <em>good conversation.</em></h1>
        <div className="interior-grid">
          <aside className="interior-aside">For product design,<br />creative development,<br />and thoughtful collaborations.</aside>
          <p>Whether you&apos;re shaping a fresh product, untangling an existing one, or simply want to compare notes, I&apos;d love to hear what&apos;s on your mind.</p>
        </div>
        <div className="contact-panel">
          <p>Best way to reach me</p>
          <a href="mailto:raunakkush2005@gmail.com">raunakkush2005@gmail.com ↗</a>
          <p style={{ marginTop: "2rem", marginBottom: 0 }}>+91 93524 91146 · Greater Bengaluru Area, IN</p>
        </div>
      </section>
      <Footer />
    </>
  )
}
