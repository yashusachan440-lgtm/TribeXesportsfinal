
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ArrowRight, Play, Trophy, Users, Star, Calendar, CheckCircle, Mail, Phone, MapPin, Paperclip, Facebook, Instagram, Twitter } from 'lucide-react';
import CountdownTimer from '@/components/countdown-timer';
import AITipsGenerator from '@/components/ai-tips-generator';
import { DiscordIcon } from '@/components/icons/discord-icon';
import { YoutubeIcon } from '@/components/icons/youtube-icon';
import { Header } from '@/components/header';
import { LogoIcon } from '@/components/icons/logo-icon';


export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <CountdownSection />
        <AboutSection />
        <TournamentsSection />
        <CommunitySection />
        <NewsletterSection />
        <PartnersSection />
      </main>
      <Footer />
    </div>
  );
}

const HeroSection = () => (
  <section id="home" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
    <div className="absolute inset-0 hero-gradient opacity-80"></div>
    <div className="container mx-auto relative">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 glow-text font-headline">
            <span className="block">The Ultimate</span>
            <span className="block text-primary">Free Fire</span>
            <span className="block">Experience</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-lg mx-auto md:mx-0 text-foreground/80">
            FFX Esports is launching with the biggest Free Fire tournaments, exclusive content, and a thriving community for competitive players.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold transition transform hover:scale-105">
              Join Waitlist <ArrowRight className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white/80 bg-transparent hover:bg-white hover:text-black transition transform hover:scale-105">
              Watch Trailer <Play className="ml-2" />
            </Button>
          </div>
        </div>
        <div className="relative aspect-video max-w-[600px] w-full">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-2xl transform rotate-3"
              src="https://www.youtube.com/embed/JDY8XkebaeA?autoplay=1&loop=1&playlist=JDY8XkebaeA&controls=0&showinfo=0&autohide=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          <div className="absolute -bottom-5 -left-5 bg-black/70 backdrop-blur-sm p-4 rounded-lg shadow-lg">
            <div className="flex items-center">
              <div className="bg-red-500 rounded-full w-3 h-3 mr-2 animate-ping"></div>
              <span className="text-sm font-bold uppercase tracking-widest">Launching Soon</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const CountdownSection = () => (
  <section className="py-16 bg-background/50">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl font-bold mb-8 font-headline">Launching In</h2>
      <CountdownTimer targetDate="2025-09-01T00:00:00" />
    </div>
  </section>
);

const AboutSection = () => (
  <section id="about" className="py-20 bg-primary/5">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-headline">Why FFX Esports?</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-accent to-primary mx-auto"></div>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        <Card className="bg-card/50 p-8 text-center border-border/50 hover:border-accent hover:scale-105 transition-all duration-300">
          <Trophy className="text-accent mx-auto h-12 w-12 mb-4" />
          <h3 className="text-xl font-bold mb-3 font-headline">Premium Tournaments</h3>
          <p className="text-foreground/70">Weekly and monthly tournaments with massive prize pools, professional casting, and fair competition.</p>
        </Card>
        <Card className="bg-card/50 p-8 text-center border-border/50 hover:border-accent hover:scale-105 transition-all duration-300">
          <Users className="text-primary mx-auto h-12 w-12 mb-4" />
          <h3 className="text-xl font-bold mb-3 font-headline">Vibrant Community</h3>
          <p className="text-foreground/70">Connect with thousands of Free Fire enthusiasts, form squads, and grow together in our exclusive community.</p>
        </Card>
        <Card className="bg-card/50 p-8 text-center border-border/50 hover:border-accent hover:scale-105 transition-all duration-300">
          <Star className="text-primary mx-auto h-12 w-12 mb-4" />
          <h3 className="text-xl font-bold mb-3 font-headline">Exclusive Content</h3>
          <p className="text-foreground/70">Get access to pro player tutorials, meta breakdowns, and behind-the-scenes content from top Free Fire teams.</p>
        </Card>
      </div>
    </div>
  </section>
);

const TournamentCard = ({ title, prize, date, image, imageHint }: { title: string, prize: string, date: string, image: string, imageHint: string }) => (
  <Card className="bg-gradient-to-br from-card/60 to-background/80 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/20">
    <div className="relative">
      <Image src={image} alt={title} width={600} height={300} className="w-full object-cover" data-ai-hint={imageHint} />
      <div className="absolute top-4 right-4 bg-black/70 px-3 py-1 rounded-full text-sm font-semibold">
        <span className="text-primary">${prize}</span> Prize Pool
      </div>
    </div>
    <CardContent className="p-6">
      <h3 className="text-xl font-bold mb-2 font-headline">{title}</h3>
      <p className="text-foreground/70 mb-4 h-12">The path to pro starts here. Top teams advance to our championship series.</p>
      <div className="flex justify-between items-center">
        <span className="text-sm text-accent flex items-center gap-2"><Calendar className="h-4 w-4" />{date}</span>
        <Button variant="secondary" size="sm" className="bg-accent/80 hover:bg-accent text-accent-foreground">Notify Me</Button>
      </div>
    </CardContent>
  </Card>
);

const TournamentsSection = () => (
  <section id="tournaments" className="py-20 bg-background">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-headline">Upcoming Tournaments</h2>
        <p className="text-foreground/70 max-w-2xl mx-auto">Our launch will feature these incredible tournaments with massive prize pools.</p>
        <div className="w-20 h-1 bg-gradient-to-r from-accent to-primary mx-auto mt-4"></div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-2">
            <AITipsGenerator />
        </div>
        <TournamentCard title="FFX Grand Opening" prize="10,000" date="Sep 5-7" image="https://placehold.co/600x300.png" imageHint="esports tournament" />
        <TournamentCard title="Pro Series Qualifiers" prize="25,000" date="Sep 15-20" image="https://placehold.co/600x300.png" imageHint="gaming championship" />
      </div>
    </div>
  </section>
);

const SocialIcon = ({ href, children, className }: { href: string; children: React.ReactNode; className: string }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className={`social-icon inline-block text-white p-3 rounded-full transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${className}`}>
    {children}
  </a>
);

const CommunitySection = () => (
  <section id="community" className="py-20 bg-primary/5">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6 font-headline">Join Our Growing Community</h2>
          <p className="text-foreground/70 mb-6">Connect with thousands of Free Fire players, share strategies, find squad mates, and stay updated on all FFX Esports news.</p>
          <div className="flex space-x-4">
            <SocialIcon href="#" className="bg-[#5865F2]"><DiscordIcon className="h-6 w-6" /></SocialIcon>
            <SocialIcon href="#" className="bg-[#FF0000]"><YoutubeIcon className="h-6 w-6" /></SocialIcon>
            <SocialIcon href="#" className="bg-[#1DA1F2]"><Twitter className="h-6 w-6" /></SocialIcon>
            <SocialIcon href="#" className="bg-[#E4405F]"><Instagram className="h-6 w-6" /></SocialIcon>
          </div>
        </div>
        <Card className="bg-card/50 p-6 rounded-lg border-primary/20">
          <h3 className="text-xl font-bold mb-4 font-headline">Community Features</h3>
          <ul className="space-y-4">
            {[
              "Exclusive Discord server with verified players",
              "Daily giveaways and special events",
              "Squad finder and team management tools",
              "Direct access to tournament organizers",
              "Player ranking and progression system"
            ].map((feature, i) => (
              <li key={i} className="flex items-start">
                <CheckCircle className="text-green-400 mt-1 mr-3 h-5 w-5 shrink-0" />
                <span className="text-foreground/80">{feature}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  </section>
);

const NewsletterSection = () => (
  <section className="py-20 bg-gradient-to-r from-primary to-accent">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl font-bold mb-2 text-primary-foreground font-headline">Get Early Access</h2>
      <p className="text-primary-foreground/80 mb-8">Sign up now for exclusive launch perks and tournament registration priority.</p>
      <form className="max-w-md mx-auto">
        <div className="flex">
          <Input type="email" placeholder="Your email address" className="bg-background/20 border-0 text-white placeholder:text-white/60 flex-grow rounded-r-none focus:ring-2 focus:ring-white" />
          <Button type="submit" className="bg-white hover:bg-gray-200 text-black font-bold rounded-l-none transition">
            Subscribe <Paperclip className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <p className="text-xs text-primary-foreground/60 mt-2">We respect your privacy. Unsubscribe at any time.</p>
      </form>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-primary-foreground">
        <div className="flex items-center justify-center gap-2">
          <div className="text-4xl font-bold">5,000+</div>
          <div className="text-sm text-left"><div>Pre-Registered</div><div>Players</div></div>
        </div>
        <div className="flex items-center justify-center gap-2">
          <div className="text-4xl font-bold">50+</div>
          <div className="text-sm text-left"><div>Pro</div><div>Teams</div></div>
        </div>
        <div className="flex items-center justify-center gap-2">
          <div className="text-4xl font-bold">$100K+</div>
          <div className="text-sm text-left"><div>In Prize</div><div>Pools</div></div>
        </div>
      </div>
    </div>
  </section>
);

const PartnersSection = () => (
  <section className="py-16 bg-background">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold mb-4 font-headline">Our Partners</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-accent to-primary mx-auto"></div>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-8">
        {[1, 2, 3, 4].map((p) => (
          <div key={p} className="flex justify-center">
            <LogoIcon className="h-16 w-auto text-foreground/80 hover:text-white transition-colors" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer id="contact" className="bg-primary/5 pt-16 pb-8">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <div>
          <LogoIcon className="h-10 w-auto" />
          <p className="text-foreground/60 mt-4">The premier Free Fire tournament platform and community.</p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4 font-headline">Quick Links</h3>
          <ul className="space-y-2">
            {['Home', 'About Us', 'Tournaments', 'Community', 'Contact'].map(link => (
              <li key={link}><a href="#" className="text-foreground/60 hover:text-white transition">{link}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4 font-headline">Legal</h3>
          <ul className="space-y-2">
            {['Terms of Service', 'Privacy Policy', 'Cookie Policy', 'Refund Policy'].map(link => (
              <li key={link}><a href="#" className="text-foreground/60 hover:text-white transition">{link}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4 font-headline">Contact Us</h3>
          <ul className="space-y-3 text-foreground/60">
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-accent" /><span>contact@ffxesports.com</span></li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-accent" /><span>+1 (555) 123-4567</span></li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-accent" /><span>Esports Avenue, Singapore</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/20 pt-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left text-foreground/50 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} FFX Esports. All rights reserved.
          </div>
          <div className="flex justify-center md:justify-end space-x-6 text-foreground/50">
            <a href="#" className="hover:text-white transition"><Facebook className="h-5 w-5" /></a>
            <a href="#" className="hover:text-white transition"><Twitter className="h-5 w-5" /></a>
            <a href="#" className="hover:text-white transition"><Instagram className="h-5 w-5" /></a>
            <a href="#" className="hover:text-white transition"><DiscordIcon className="h-5 w-5" /></a>
            <a href="#" className="hover:text-white transition"><YoutubeIcon className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

const heroGradient = {
  background: 'linear-gradient(135deg, hsl(var(--accent)) 0%, hsl(var(--primary)) 100%)',
};
const glowText = {
  textShadow: '0 0 10px hsl(var(--accent) / 0.7), 0 0 20px hsl(var(--primary) / 0.5)',
};

    