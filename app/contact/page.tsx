import { Badge } from "@/components/ui/badge";
import { Button, ButtonLink } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  return (
    <div className="landing-container">
      <section className="inner-page-hero">
        <Card className="reveal">
          <CardHeader>
            <Badge className="mb-3">Archetype</Badge>
            <CardTitle style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}>Contact</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="lead">Tell us about your goals — the Archetype team will follow up shortly.</p>
            <div className="actions">
              <ButtonLink href="#contact" size="lg">Learn more</ButtonLink>
            </div>
          </CardContent>
        </Card>
        <div className="inner-page-accent reveal reveal-delay-2" aria-hidden />
      </section>
      <section className="section reveal">
        <div className="content-two-column content-two-column-divider">
          <Card>
            <CardHeader>
              <CardTitle>Send a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="site-form" action="#contact" method="get">
                <div className="site-field">
                  <Label htmlFor="contact-name">Name</Label>
                  <Input id="contact-name" name="name" placeholder="Your name" required />
                </div>
                <div className="site-field">
                  <Label htmlFor="contact-email">Email</Label>
                  <Input id="contact-email" name="email" type="email" placeholder="you@company.com" required />
                </div>
                <div className="site-field">
                  <Label htmlFor="contact-message">Message</Label>
                  <Textarea id="contact-message" name="message" placeholder="How can we help?" rows={4} required />
                </div>
                <Button type="submit" size="lg">Learn more</Button>
              </form>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Why Archetype</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="prose-list">
                <li><strong>Focused investing</strong> — We focus on the benefits and healthcare sectors with a long-term ownership mindset.</li>
                <li><strong>Market perspective</strong> — Our team follows the trends, companies, and opportunities shaping this space.</li>
                <li><strong>Accessible contact</strong> — Visitors can quickly find the information they need and connect with the team.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
