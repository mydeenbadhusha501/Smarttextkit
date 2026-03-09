import React from 'react';
import { Link } from 'react-router-dom';

export default function CookiePolicy() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Cookie Policy</h1>
        
        <div className="prose prose-indigo max-w-none text-gray-700 space-y-6">
          <p>Last updated: {new Date().toLocaleDateString()}</p>

          <p>
            This Cookie Policy explains how SmartTextKit ("we", "us", or "our") uses cookies and similar technologies to recognize you when you visit our website at {window.location.origin}. 
            It explains what these technologies are and why we use them, as well as your rights to control our use of them.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">What are cookies?</h2>
          <p>
            Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
          </p>
          <p>
            Cookies set by the website owner (in this case, SmartTextKit) are called "first party cookies". Cookies set by parties other than the website owner are called "third party cookies". 
            Third party cookies enable third party features or functionality to be provided on or through the website (e.g. advertising, interactive content and analytics). 
            The parties that set these third party cookies can recognize your computer both when it visits the website in question and also when it visits certain other websites.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Why do we use cookies?</h2>
          <p>
            We use first and third party cookies for several reasons. Some cookies are required for technical reasons in order for our Website to operate, and we refer to these as "essential" or "strictly necessary" cookies. 
            Other cookies also enable us to track and target the interests of our users to enhance the experience on our Online Properties. Third parties serve cookies through our Website for advertising, analytics and other purposes.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Google DoubleClick DART Cookie</h2>
          <p>
            Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to our site and other sites on the internet. 
            However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL – <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">https://policies.google.com/technologies/ads</a>
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">How can I control cookies?</h2>
          <p>
            You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in the Cookie Consent Manager. 
            The Cookie Consent Manager allows you to select which categories of cookies you accept or reject. Essential cookies cannot be rejected as they are strictly necessary to provide you with services.
          </p>
          <p>
            The Cookie Consent Manager can be found in the notification banner and on our website. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted. 
            You may also set or amend your web browser controls to accept or refuse cookies. As the means by which you can refuse cookies through your web browser controls vary from browser-to-browser, you should visit your browser's help menu for more information.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Where can I get further information?</h2>
          <p>
            If you have any questions about our use of cookies or other technologies, please contact us via our contact page.
          </p>
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
          <Link to="/disclaimer" className="hover:text-indigo-600 hover:underline">Disclaimer</Link>
          <span className="text-gray-300">|</span>
          <Link to="/sitemap" className="hover:text-indigo-600 hover:underline">Sitemap</Link>
        </div>
      </div>
    </div>
  );
}
