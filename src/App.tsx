import { useState } from "react";
import { motion } from "motion/react";
import { 
  FolderOpen, 
  Save, 
  Clock, 
  Shield, 
  Zap, 
  Mail, 
  Github,
  Chrome,
  CheckCircle2,
  Menu,
  X
} from "lucide-react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import { toast } from "sonner@2.0.3";

export default function App() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const mailtoLink = `mailto:tabsaver.help@outlook.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${email}\n\n${message}`)}`;
    
    toast.success("Opening your email client...", {
      description: "Your feedback form is ready to send!"
    });
    
    window.location.href = mailtoLink;
    
    setEmail("");
    setSubject("");
    setMessage("");
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center">
                <FolderOpen className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl text-gray-900">Tab Saver</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection("features")} className="text-gray-600 hover:text-gray-900 transition-colors">
                Features
              </button>
              <button onClick={() => scrollToSection("how-it-works")} className="text-gray-600 hover:text-gray-900 transition-colors">
                How It Works
              </button>
              <button onClick={() => scrollToSection("contact")} className="text-gray-600 hover:text-gray-900 transition-colors">
                Contact
              </button>
              <Button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 hover:from-yellow-500 hover:to-yellow-600">
                <Chrome className="w-4 h-4 mr-2" />
                Add to Chrome
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <motion.div 
              className="md:hidden mt-4 pb-4 flex flex-col gap-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <button onClick={() => scrollToSection("features")} className="text-left text-gray-600 hover:text-gray-900 transition-colors">
                Features
              </button>
              <button onClick={() => scrollToSection("how-it-works")} className="text-left text-gray-600 hover:text-gray-900 transition-colors">
                How It Works
              </button>
              <button onClick={() => scrollToSection("contact")} className="text-left text-gray-600 hover:text-gray-900 transition-colors">
                Contact
              </button>
              <Button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 hover:from-yellow-500 hover:to-yellow-600 w-full">
                <Chrome className="w-4 h-4 mr-2" />
                Add to Chrome
              </Button>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6">
              <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center shadow-xl shadow-yellow-500/30">
                <FolderOpen className="w-12 h-12 text-white" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl mb-6 bg-gradient-to-r from-gray-900 via-black to-gray-800 bg-clip-text text-transparent">
              Never Lose Your Tabs Again
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Save all your open tabs in one click. Organize your browsing sessions and restore them anytime, anywhere.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 hover:from-yellow-500 hover:to-yellow-600 text-lg px-8 py-6">
                <Chrome className="w-5 h-5 mr-2" />
                Add to Chrome - It's Free
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection("how-it-works")} className="text-lg px-8 py-6">
                See How It Works
              </Button>
            </div>

            <p className="mt-6 text-sm text-gray-500">
              ⚡ Lightweight • 🔒 Private • 🎯 Simple to Use
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl mb-4 text-center bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Why Tab Saver?
            </h2>
            <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
              The fastest and easiest way to manage your browser tabs
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                className="p-8 bg-white rounded-2xl border border-gray-200 hover:border-yellow-400 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center mb-6">
                  <Save className="w-7 h-7 text-yellow-600" />
                </div>
                <h3 className="text-xl text-gray-900 mb-3">One-Click Save</h3>
                <p className="text-gray-600">
                  Save all your open tabs instantly with a single click. No complicated setup or configuration needed.
                </p>
              </motion.div>

              <motion.div
                className="p-8 bg-white rounded-2xl border border-gray-200 hover:border-yellow-400 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                  <FolderOpen className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="text-xl text-gray-900 mb-3">Organize Sessions</h3>
                <p className="text-gray-600">
                  Group your tabs into named sessions. Perfect for different projects, research topics, or workflows.
                </p>
              </motion.div>

              <motion.div
                className="p-8 bg-white rounded-2xl border border-gray-200 hover:border-yellow-400 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <Clock className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl text-gray-900 mb-3">Quick Restore</h3>
                <p className="text-gray-600">
                  Restore your saved sessions instantly. Pick up right where you left off, even after closing your browser.
                </p>
              </motion.div>

              <motion.div
                className="p-8 bg-white rounded-2xl border border-gray-200 hover:border-yellow-400 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                  <Shield className="w-7 h-7 text-purple-600" />
                </div>
                <h3 className="text-xl text-gray-900 mb-3">100% Private</h3>
                <p className="text-gray-600">
                  All your data stays on your device. We don't collect, store, or share any of your browsing information.
                </p>
              </motion.div>

              <motion.div
                className="p-8 bg-white rounded-2xl border border-gray-200 hover:border-yellow-400 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                  <Zap className="w-7 h-7 text-red-600" />
                </div>
                <h3 className="text-xl text-gray-900 mb-3">Lightning Fast</h3>
                <p className="text-gray-600">
                  Optimized for speed and performance. Doesn't slow down your browser or consume excessive resources.
                </p>
              </motion.div>

              <motion.div
                className="p-8 bg-white rounded-2xl border border-gray-200 hover:border-yellow-400 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-7 h-7 text-orange-600" />
                </div>
                <h3 className="text-xl text-gray-900 mb-3">Always Free</h3>
                <p className="text-gray-600">
                  No premium features, no subscriptions, no paywalls. Everything you need is completely free forever.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl mb-4 text-center bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              How It Works
            </h2>
            <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
              Get started in seconds with these simple steps
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center text-white text-2xl mx-auto mb-6 shadow-lg shadow-yellow-500/30">
                  1
                </div>
                <h3 className="text-xl text-gray-900 mb-3">Install Extension</h3>
                <p className="text-gray-600">
                  Add Tab Saver to Chrome from the Web Store. It installs in seconds and appears in your toolbar.
                </p>
              </motion.div>

              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-500 rounded-2xl flex items-center justify-center text-white text-2xl mx-auto mb-6 shadow-lg shadow-green-500/30">
                  2
                </div>
                <h3 className="text-xl text-gray-900 mb-3">Save Your Tabs</h3>
                <p className="text-gray-600">
                  Click the extension icon and save all your current tabs. Give your session a name for easy reference.
                </p>
              </motion.div>

              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl flex items-center justify-center text-white text-2xl mx-auto mb-6 shadow-lg shadow-blue-500/30">
                  3
                </div>
                <h3 className="text-xl text-gray-900 mb-3">Restore Anytime</h3>
                <p className="text-gray-600">
                  Open the extension to view all saved sessions. Click any session to restore all those tabs instantly.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl mb-4 text-center bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Get in Touch
            </h2>
            <p className="text-center text-gray-600 mb-12">
              Found a bug? Have a feature request? We'd love to hear from you!
            </p>

            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm text-gray-700 mb-2">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm text-gray-700 mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="Bug Report / Feature Request / General Feedback"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us what's on your mind..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={6}
                    className="w-full"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 hover:from-yellow-500 hover:to-yellow-600"
                  size="lg"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>

              <div className="mt-8 pt-8 border-t border-gray-200 text-center">
                <p className="text-sm text-gray-600 mb-4">You can also reach us at:</p>
                <a 
                  href="mailto:tabsaver.help@outlook.com" 
                  className="text-gray-900 hover:text-yellow-600 transition-colors inline-flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  tabsaver.help@outlook.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center">
                  <FolderOpen className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl">Tab Saver</span>
              </div>
              <p className="text-gray-400 text-sm">
                The simplest way to save and restore your browser tabs.
              </p>
            </div>

            <div>
              <h4 className="mb-4">Quick Links</h4>
              <div className="space-y-2 text-sm">
                <button onClick={() => scrollToSection("features")} className="block text-gray-400 hover:text-white transition-colors">
                  Features
                </button>
                <button onClick={() => scrollToSection("how-it-works")} className="block text-gray-400 hover:text-white transition-colors">
                  How It Works
                </button>
                <button onClick={() => scrollToSection("contact")} className="block text-gray-400 hover:text-white transition-colors">
                  Contact
                </button>
              </div>
            </div>

            <div>
              <h4 className="mb-4">Connect</h4>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/omarayman23" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="mailto:tabsaver.help@outlook.com"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
            <p>© 2025 Tab Saver. Built with ❤️ by Omar Hamdan. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
