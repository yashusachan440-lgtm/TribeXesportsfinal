
import { Mail, Phone } from 'lucide-react';
import { DiscordIcon } from '@/components/icons/discord-icon';
import { WhatsAppIcon } from '@/components/icons/whatsapp-icon';

const Footer = () => (
  <footer id="contact" className="border-t border-border/50 py-4 w-full bg-transparent">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left text-foreground/50 text-xs sm:text-sm">
          &copy; {new Date().getFullYear()} Tribex Esports. All rights reserved.
        </div>
        <div className="flex justify-center md:justify-end space-x-4 sm:space-x-6 text-foreground/50">
          <a
            href="https://discord.gg/h52CbbBXFk"
            className="hover:text-white transition"
          >
            <DiscordIcon className="h-5 w-5 sm:h-6 sm:w-6" />
          </a>
          <a
            href="https://chat.whatsapp.com/ESlMzHWHRKpKMsijRUS934?mode=ems_copy_t"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <WhatsAppIcon className="h-5 w-5 sm:h-6 sm:w-6" />
          </a>
          <a
            href="mailto:contact@tribexesports.com"
            className="hover:text-white transition"
          >
            <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
          </a>
          <a href="tel:+919140934524" className="hover:text-white transition">
            <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
