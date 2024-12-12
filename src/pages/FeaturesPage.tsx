import React from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import {
  Radio,
  LayoutGrid,
  BarChart3,
  MessageSquare,
  Layers,
  Share2,
  ArrowRight,
} from 'lucide-react';
import { FeatureCard } from '@/components/features/FeatureCard';
import { FeatureShowcase } from '@/components/features/FeatureShowcase';

export function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?auto=format&fit=crop&q=80"
            alt="Streaming setup"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <Container className="relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-poppins mb-6">
              Powerful Features for Modern Streaming
            </h1>
            <p className="text-xl text-gray-300">
              Everything you need to create, manage, and grow your streaming presence
            </p>
          </div>
        </Container>
      </section>

      {/* Main Features Grid */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Radio />}
              title="Multi-Platform Streaming"
              description="Stream simultaneously to multiple platforms including Twitch, YouTube, and Facebook Live."
            />
            <FeatureCard
              icon={<LayoutGrid />}
              title="Custom Overlays"
              description="Create professional streams with customizable overlays, alerts, and themes."
            />
            <FeatureCard
              icon={<BarChart3 />}
              title="Advanced Analytics"
              description="Track your performance with detailed analytics and insights."
            />
            <FeatureCard
              icon={<MessageSquare />}
              title="Unified Chat"
              description="Manage all your platform chats in one place with smart moderation tools."
            />
            <FeatureCard
              icon={<Layers />}
              title="Scene Management"
              description="Switch between scenes seamlessly with hotkeys and transitions."
            />
            <FeatureCard
              icon={<Share2 />}
              title="Easy Integration"
              description="Connect with your favorite tools and services effortlessly."
            />
          </div>
        </Container>
      </section>

      {/* Detailed Feature Showcase */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="space-y-24">
            <FeatureShowcase
              title="Professional Streaming Tools"
              description="Take your streams to the next level with our professional-grade tools and features."
              image="https://images.unsplash.com/photo-1633269540827-728aabbb7646?auto=format&fit=crop&q=80"
              features={[
                "4K streaming support",
                "Low-latency streaming",
                "Custom RTMP servers",
                "Hardware encoding",
              ]}
              imagePosition="right"
            />

            <FeatureShowcase
              title="Smart Stream Management"
              description="Manage your entire streaming workflow from a single dashboard."
              image="https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80"
              features={[
                "Schedule streams",
                "Automated alerts",
                "Chat moderation",
                "Analytics dashboard",
              ]}
              imagePosition="left"
            />

            <FeatureShowcase
              title="Grow Your Audience"
              description="Built-in tools to help you grow and engage with your community."
              image="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80"
              features={[
                "Cross-platform promotion",
                "Viewer analytics",
                "Engagement tools",
                "Community features",
              ]}
              imagePosition="right"
            />
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Streaming?</h2>
            <p className="text-lg mb-8 text-white/90">
              Join thousands of content creators who trust StreamHub for their streaming needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="lg"
                className="group"
              >
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="bg-white/10 hover:bg-white/20 text-white"
              >
                View Pricing
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}