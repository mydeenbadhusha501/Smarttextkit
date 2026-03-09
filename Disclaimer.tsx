import React from 'react';
import { Link } from 'react-router-dom';

export default function Disclaimer() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Disclaimer</h1>
        
        <div className="prose prose-indigo max-w-none text-gray-700 space-y-6">
          <p>Last updated: {new Date().toLocaleDateString()}</p>

          <p>
            The information provided by SmartTextKit ("we," "us," or "our") on {window.location.origin} (the "Site") is for general informational purposes only. 
            All information on the Site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Under No Circumstance Shall We Have Any Liability To You</h2>
          <p>
            Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided on the site. 
            Your use of the site and your reliance on any information on the site is solely at your own risk.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">External Links Disclaimer</h2>
          <p>
            The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising. 
            Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.
          </p>
          <p>
            We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or reliability of any information offered by third-party websites linked through the site or any website or feature linked in any banner or other advertising. 
            We will not be a party to or in any way be responsible for monitoring any transaction between you and third-party providers of products or services.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Professional Disclaimer</h2>
          <p>
            The Site cannot and does not contain professional advice. The information is provided for general informational and educational purposes only and is not a substitute for professional advice. 
            Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals. We do not provide any kind of professional advice. 
            The use or reliance of any information contained on the site is solely at your own risk.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Affiliates Disclaimer</h2>
          <p>
            The Site may contain links to affiliate websites, and we receive an affiliate commission for any purchases made by you on the affiliate website using such links. 
            Our affiliates include the following:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Google AdSense</li>
            <li>Amazon Associates</li>
          </ul>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Testimonials Disclaimer</h2>
          <p>
            The Site may contain testimonials by users of our products and/or services. These testimonials reflect the real-life experiences and opinions of such users. 
            However, the experiences are personal to those particular users, and may not necessarily be representative of all users of our products and/or services. 
            We do not claim, and you should not assume, that all users will have the same experiences. Your individual results may vary.
          </p>
          <p>
            The views and opinions contained in the testimonials belong solely to the individual user and do not reflect our views and opinions. 
            We are not affiliated with users who provide testimonials, and users are not paid or otherwise compensated for their testimonials.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Errors and Omissions Disclaimer</h2>
          <p>
            While we have made every attempt to ensure that the information contained in this site has been obtained from reliable sources, SmartTextKit is not responsible for any errors or omissions, or for the results obtained from the use of this information. 
            All information in this site is provided "as is", with no guarantee of completeness, accuracy, timeliness or of the results obtained from the use of this information, and without warranty of any kind, express or implied, including, but not limited to warranties of performance, merchantability and fitness for a particular purpose.
          </p>
          <p>
            In no event will SmartTextKit, its related partnerships or corporations, or the partners, agents or employees thereof be liable to you or anyone else for any decision made or action taken in reliance on the information in this Site or for any consequential, special or similar damages, even if advised of the possibility of such damages.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Logos and Trademarks Disclaimer</h2>
          <p>
            All logos and trademarks of third parties referenced on {window.location.origin} are the trademarks and logos of their respective owners. 
            Any inclusion of such trademarks or logos does not imply or constitute any approval, endorsement or sponsorship of SmartTextKit by such owners.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Contact Us</h2>
          <p>
            If you have any questions about this Disclaimer, You can contact us:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>By email: CleanPixelWallpaper@Gmail.com</li>
            <li>By visiting this page on our website: {window.location.origin}/contact-us</li>
          </ul>
        </div>
      </div>

      {/* Internal Links */}
      <div className="border-t border-gray-200 pt-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Main Pages</h2>
        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
          <Link to="/" className="hover:text-indigo-600 hover:underline">Home</Link>
          <span className="text-gray-300">|</span>
          <Link to="/about-us" className="hover:text-indigo-600 hover:underline">About Us</Link>
          <span className="text-gray-300">|</span>
          <Link to="/contact-us" className="hover:text-indigo-600 hover:underline">Contact Us</Link>
          <span className="text-gray-300">|</span>
          <Link to="/privacy" className="hover:text-indigo-600 hover:underline">Privacy Policy</Link>
          <span className="text-gray-300">|</span>
          <Link to="/terms-of-service" className="hover:text-indigo-600 hover:underline">Terms of Service</Link>
          <span className="text-gray-300">|</span>
          <Link to="/cookies" className="hover:text-indigo-600 hover:underline">Cookie Policy</Link>
          <span className="text-gray-300">|</span>
          <Link to="/sitemap" className="hover:text-indigo-600 hover:underline">Sitemap</Link>
        </div>
      </div>
    </div>
  );
}
