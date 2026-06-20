import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function HomePage() {
  return (
    <>
      
      <section className="hero-landing-shell reveal reveal-delay-1">
        <div className="hero-landing">
          <div className="hero-copy reveal">
            <h1 className="hero-headline">Growth equity for benefits and healthcare</h1>
            <p className="lead">Archetype Growth partners with companies shaping the future of benefits and healthcare.</p>
            <div className="actions">
              <ButtonLink href="#contact" size="lg">Learn more</ButtonLink>
              <ButtonLink variant="outline" href="#contact" size="lg">Get in touch</ButtonLink>
            </div>
          </div>
          <div className="hero-offer-grid">
            <Card className="hero-offer-mini-card reveal">
                <CardContent className="hero-offer-mini-content">
                  <p className="hero-offer-title">Focused investing</p>
                  <div className="hero-offer-shimmer-lines" aria-hidden="true">
                    <span className="hero-offer-shimmer hero-offer-shimmer-a" />
                    <span className="hero-offer-shimmer hero-offer-shimmer-b" />
                  </div>
                  <p className="hero-offer-body">We focus on the benefits and healthcare sectors with a long-term ownership mindset.</p>
                </CardContent>
              </Card>
              <Card className="hero-offer-mini-card reveal reveal-delay-1">
                <CardContent className="hero-offer-mini-content">
                  <p className="hero-offer-title">Market perspective</p>
                  <div className="hero-offer-shimmer-lines" aria-hidden="true">
                    <span className="hero-offer-shimmer hero-offer-shimmer-a" />
                    <span className="hero-offer-shimmer hero-offer-shimmer-b" />
                  </div>
                  <p className="hero-offer-body">Our team follows the trends, companies, and opportunities shaping this space.</p>
                </CardContent>
              </Card>
              <Card className="hero-offer-mini-card reveal reveal-delay-2">
                <CardContent className="hero-offer-mini-content">
                  <p className="hero-offer-title">Accessible contact</p>
                  <div className="hero-offer-shimmer-lines" aria-hidden="true">
                    <span className="hero-offer-shimmer hero-offer-shimmer-a" />
                    <span className="hero-offer-shimmer hero-offer-shimmer-b" />
                  </div>
                  <p className="hero-offer-body">Visitors can quickly find the information they need and connect with the team.</p>
                </CardContent>
              </Card>
              <Card className="hero-offer-mini-card reveal reveal-delay-2">
                <CardContent className="hero-offer-mini-content">
                  <p className="hero-offer-title">Core capability</p>
                  <div className="hero-offer-shimmer-lines" aria-hidden="true">
                    <span className="hero-offer-shimmer hero-offer-shimmer-a" />
                    <span className="hero-offer-shimmer hero-offer-shimmer-b" />
                  </div>
                  <p className="hero-offer-body">Deliver value quickly with clear, focused workflows.</p>
                </CardContent>
              </Card>
          </div>
        </div>
      </section>
      <section className="section section-alt reveal">
        <h2 className="section-header">Who it&apos;s for</h2>
        <div className="audience-grid">
          <Card className="audience-segment-card reveal">
                <CardContent className="audience-segment-content">
                  <p className="audience-segment-title">Customers</p>
                  <div className="hero-offer-shimmer-lines" aria-hidden="true">
                    <span className="hero-offer-shimmer hero-offer-shimmer-a" />
                  </div>
                  <p className="audience-segment-body">Self-serve answers and faster resolutions at scale.</p>
                </CardContent>
              </Card>
          <Card className="audience-segment-card reveal reveal-delay-1">
                <CardContent className="audience-segment-content">
                  <p className="audience-segment-title">Support teams</p>
                  <div className="hero-offer-shimmer-lines" aria-hidden="true">
                    <span className="hero-offer-shimmer hero-offer-shimmer-a" />
                  </div>
                  <p className="audience-segment-body">Collaborate with shared context, policies, and audit trails.</p>
                </CardContent>
              </Card>
          <Card className="audience-segment-card reveal reveal-delay-2">
                <CardContent className="audience-segment-content">
                  <p className="audience-segment-title">Operations</p>
                  <div className="hero-offer-shimmer-lines" aria-hidden="true">
                    <span className="hero-offer-shimmer hero-offer-shimmer-a" />
                  </div>
                  <p className="audience-segment-body">Govern workflows with controls your organization can trust.</p>
                </CardContent>
              </Card>
          <Card className="audience-segment-card reveal reveal-delay-2">
                <CardContent className="audience-segment-content">
                  <p className="audience-segment-title">Leaders</p>
                  <div className="hero-offer-shimmer-lines" aria-hidden="true">
                    <span className="hero-offer-shimmer hero-offer-shimmer-a" />
                  </div>
                  <p className="audience-segment-body">Clear visibility into outcomes, performance, and accountability.</p>
                </CardContent>
              </Card>
        </div>
      </section>
      <section className="section reveal">
        <h2 className="section-header">Features</h2>
        <div className="feature-grid">
          <Card><CardHeader><CardTitle>Firm overview</CardTitle></CardHeader><CardContent><ul className="prose-list"><li>Clear summary of the firm's focus and approach.</li></ul></CardContent></Card>
          <Card><CardHeader><CardTitle>Recent activity</CardTitle></CardHeader><CardContent><ul className="prose-list"><li>Highlights from news, investments, and updates.</li></ul></CardContent></Card>
          <Card><CardHeader><CardTitle>Leadership</CardTitle></CardHeader><CardContent><ul className="prose-list"><li>Team and contact details for follow-up.</li></ul></CardContent></Card>
          <Card><CardHeader><CardTitle>Website details</CardTitle></CardHeader><CardContent><ul className="prose-list"><li>Easy navigation to the most important pages.</li></ul></CardContent></Card>
        </div>
      </section>
      <section className="section reveal">
        <h2 className="section-header">FAQ</h2>
        <Accordion>
        <AccordionItem key="What does Archetype Growth focus on?" value="What does Archetype Growth focus on?">
          <AccordionTrigger>What does Archetype Growth focus on?</AccordionTrigger>
          <AccordionContent>Growth equity investing in benefits and healthcare.</AccordionContent>
        </AccordionItem>
        <AccordionItem key="Who should contact the team?" value="Who should contact the team?">
          <AccordionTrigger>Who should contact the team?</AccordionTrigger>
          <AccordionContent>Founders, operators, and partners who want to learn more.</AccordionContent>
        </AccordionItem>
        </Accordion>
      </section>
    </>
  );
}
