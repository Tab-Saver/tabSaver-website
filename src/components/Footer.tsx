import { Github, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3>Tab Saver</h3>
            <p className="opacity-80">
              The browser extension that saves your tabs and your time.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4>Resources</h4>
            <ul className="space-y-2 opacity-80">
              <li>
                <a href="#features" className="hover:opacity-100 transition-opacity">
                  Features
                </a>
              </li>
              <li>
                <a href="#stats" className="hover:opacity-100 transition-opacity">
                  Statistics
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:opacity-100 transition-opacity">
                  Contact
                </a>
              </li>
              <li>
                <a href="https://github.com/Tab-Saver/PRIVACY-POLICY" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4>Contact & Support</h4>
            <div className="space-y-3">
              <a 
                href="mailto:tabsaver.help@outlook.com" 
                className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity"
              >
                <Mail className="w-5 h-5" />
                tabsaver.help@outlook.com
              </a>
              <a 
                href="https://github.com/omarayman23" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity"
              >
                <Github className="w-5 h-5" />
                GitHub: omarayman23
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center opacity-60">
          <p>© {new Date().getFullYear()} Tab Saver. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
