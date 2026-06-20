import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProductPage() {
  return (
    <div className="landing-container">
      <section className="inner-page-hero">
        <Card className="reveal">
          <CardHeader>
            <Badge className="mb-3">Archetype</Badge>
            <CardTitle style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}>Product</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="lead">Archetype — product overview.</p>
            <div className="actions">
              <ButtonLink href="#contact" size="lg">Learn more</ButtonLink>
              <ButtonLink variant="outline" href="#contact" size="lg">Get in touch</ButtonLink>
            </div>
          </CardContent>
        </Card>
        <div className="inner-page-accent reveal reveal-delay-2" aria-hidden />
      </section>
    </div>
  );
}
