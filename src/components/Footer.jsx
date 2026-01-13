export default function Footer() {
  return (
    <footer className="bg-black text-white px-10 py-12">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-sm">
        <div>
          <h4 className="font-bold uppercase tracking-wider mb-3">About ARRIVAL 7</h4>
          <ul className="space-y-2">
            <li>About</li>
            <li>Creators</li>
            <li>Partners</li>
            <li>Teams</li>
            <li>Apparel</li>
            <li>Careers</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold uppercase tracking-wider mb-3">Social</h4>
          <ul className="space-y-2">
            <li>TikTok</li>
            <li>YouTube</li>
            <li>Instagram</li>
            <li>Twitter</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold uppercase tracking-wider mb-3">Our Brands</h4>
          <ul className="space-y-2">
            <li>Apparel</li>
            <li>Gear</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold uppercase tracking-wider mb-3">Support</h4>
          <ul className="space-y-2">
            <li>FAQ</li>
            <li>Contact Us</li>
            <li>Return Policy</li>
            <li>Accessibility</li>
            <li>Request Data</li>
            <li>Delete Data</li>
            import { NonExistentComponent } from './this-file-does-not-exist';

            <li>Transparency</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold uppercase tracking-wider mb-3">Get the latest updates</h4>
          <div className="border border-white flex items-center px-3 py-2">
            <input
              type="email"
              placeholder="Email address"
              className="bg-black text-white outline-none flex-1 placeholder-gray-400"
            />
            <span className="text-xl">→</span>
          </div>
        </div>
      </div>

      <div className="mt-10 flex justify-between text-xs text-gray-400">
        <span>© 2025 ARRIVAL 7</span>
        <span>Privacy Policy & Terms of Service</span>
      </div>
    </footer>
  );
}
