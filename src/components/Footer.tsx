import { TbRocket } from "react-icons/tb";

export const Footer = () => {
  return (
    <footer className="bg-slate-900 bg-opacity-90 text-white py-12 mt-20 z-10 font-crimson">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold font-crimson">
              Hero Image Essence
            </h3>
            <p className="text-slate-400">Helping realizing your dreams.</p>
            <div className="flex items-start gap-2 mt-8 flex-col">
              <div>Brought to you by</div>
              <div className="flex items-center gap-2 border border-slate-700 px-4 py-1 rounded-full bg-coral">
                <a
                  href="https://shipped.club"
                  className="flex items-center gap-2 font-serif text-sm"
                  target="_blank"
                >
                  <TbRocket size="16px" /> Shipped.club
                </a>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 font-crimson">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 font-crimson">
              Resources
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Tutorials
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 font-crimson">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Cookie Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  GDPR
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 text-center text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} Hero Image Essence. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
