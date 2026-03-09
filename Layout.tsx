import React, { useState, useLayoutEffect } from 'react';
import { NavLink, Outlet, useLocation, Link } from 'react-router-dom';
import { 
  Menu,
  X,
  ChevronRight,
  Type,
  Home,
  Search,
  Users,
  Mail,
  Shield,
  FileText,
  AlertCircle,
  Cookie,
  Map
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'motion/react';
import { toolCategories } from '../config/tools';
import CookieBanner from './CookieBanner';
import ShareWidget from './ShareWidget';
import PageLoader from './PageLoader';

export default function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useLayoutEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  const filteredCategories = toolCategories.map(category => ({
    ...category,
    tools: category.tools.filter(tool => 
      tool.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.tools.length > 0);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {isLoading && <PageLoader />}
      <CookieBanner />
      <ShareWidget />
      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 bg-black/20 z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        className={cn(
          "fixed lg:sticky top-0 left-0 z-50 h-screen w-72 bg-white border-r border-gray-200 flex flex-col transition-transform duration-300 ease-in-out lg:translate-x-0",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="p-6 border-b border-gray-100 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-indigo-600 hover:opacity-80 transition-opacity" onClick={() => setIsSidebarOpen(false)}>
            <div className="w-8 h-8 bg-indigo-600 text-white rounded-lg flex items-center justify-center">
              <Type size={20} />
            </div>
            SmartTextKit
          </Link>
          <div className="flex items-center gap-2 lg:hidden">
            <button 
              onClick={() => setIsSidebarOpen(false)}
              className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        <div className="px-4 pt-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <input
              type="text"
              placeholder="Search tools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all placeholder-gray-400"
            />
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto p-4 space-y-6">
          {!searchQuery && (
            <>
              <NavLink
                to="/"
                onClick={() => setIsSidebarOpen(false)}
                className={({ isActive }) => cn(
                  "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                  isActive 
                    ? "bg-indigo-50 text-indigo-700" 
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                )}
              >
                <Home size={18} className={location.pathname === "/" ? "text-indigo-600" : "text-gray-400"} />
                Home
                {location.pathname === "/" && <ChevronRight size={16} className="ml-auto text-indigo-400" />}
              </NavLink>

              <NavLink
                to="/about-us"
                onClick={() => setIsSidebarOpen(false)}
                className={({ isActive }) => cn(
                  "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                  isActive 
                    ? "bg-indigo-50 text-indigo-700" 
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                )}
              >
                <Users size={18} className={location.pathname === "/about-us" ? "text-indigo-600" : "text-gray-400"} />
                About Us
                {location.pathname === "/about-us" && <ChevronRight size={16} className="ml-auto text-indigo-400" />}
              </NavLink>

              <NavLink
                to="/contact-us"
                onClick={() => setIsSidebarOpen(false)}
                className={({ isActive }) => cn(
                  "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                  isActive 
                    ? "bg-indigo-50 text-indigo-700" 
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                )}
              >
                <Mail size={18} className={location.pathname === "/contact-us" ? "text-indigo-600" : "text-gray-400"} />
                Contact
                {location.pathname === "/contact-us" && <ChevronRight size={16} className="ml-auto text-indigo-400" />}
              </NavLink>

              <NavLink
                to="/privacy"
                onClick={() => setIsSidebarOpen(false)}
                className={({ isActive }) => cn(
                  "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                  isActive 
                    ? "bg-indigo-50 text-indigo-700" 
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                )}
              >
                <Shield size={18} className={location.pathname === "/privacy" ? "text-indigo-600" : "text-gray-400"} />
                Privacy Policy
                {location.pathname === "/privacy" && <ChevronRight size={16} className="ml-auto text-indigo-400" />}
              </NavLink>

              <NavLink
                to="/terms-of-service"
                onClick={() => setIsSidebarOpen(false)}
                className={({ isActive }) => cn(
                  "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                  isActive 
                    ? "bg-indigo-50 text-indigo-700" 
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                )}
              >
                <FileText size={18} className={location.pathname === "/terms-of-service" ? "text-indigo-600" : "text-gray-400"} />
                Terms of Service
                {location.pathname === "/terms-of-service" && <ChevronRight size={16} className="ml-auto text-indigo-400" />}
              </NavLink>

              <NavLink
                to="/disclaimer"
                onClick={() => setIsSidebarOpen(false)}
                className={({ isActive }) => cn(
                  "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                  isActive 
                    ? "bg-indigo-50 text-indigo-700" 
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                )}
              >
                <AlertCircle size={18} className={location.pathname === "/disclaimer" ? "text-indigo-600" : "text-gray-400"} />
                Disclaimer
                {location.pathname === "/disclaimer" && <ChevronRight size={16} className="ml-auto text-indigo-400" />}
              </NavLink>

              <NavLink
                to="/cookies"
                onClick={() => setIsSidebarOpen(false)}
                className={({ isActive }) => cn(
                  "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                  isActive 
                    ? "bg-indigo-50 text-indigo-700" 
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                )}
              >
                <Cookie size={18} className={location.pathname === "/cookies" ? "text-indigo-600" : "text-gray-400"} />
                Cookie Policy
                {location.pathname === "/cookies" && <ChevronRight size={16} className="ml-auto text-indigo-400" />}
              </NavLink>

              <NavLink
                to="/sitemap"
                onClick={() => setIsSidebarOpen(false)}
                className={({ isActive }) => cn(
                  "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                  isActive 
                    ? "bg-indigo-50 text-indigo-700" 
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                )}
              >
                <Map size={18} className={location.pathname === "/sitemap" ? "text-indigo-600" : "text-gray-400"} />
                Sitemap
                {location.pathname === "/sitemap" && <ChevronRight size={16} className="ml-auto text-indigo-400" />}
              </NavLink>
            </>
          )}

          {filteredCategories.length > 0 ? (
            filteredCategories.map((category) => (
              <div key={category.name}>
                <h3 className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  {category.name}
                </h3>
                <div className="space-y-1">
                  {category.tools.map((tool) => {
                    const isActive = location.pathname === tool.href;
                    return (
                      <NavLink
                        key={tool.name}
                        to={tool.href}
                        onClick={() => setIsSidebarOpen(false)}
                        className={({ isActive }) => cn(
                          "flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors",
                          isActive 
                            ? "bg-indigo-50 text-indigo-700" 
                            : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                        )}
                      >
                        <tool.icon size={18} className={isActive ? "text-indigo-600" : "text-gray-400"} />
                        {tool.name}
                        {isActive && <ChevronRight size={16} className="ml-auto text-indigo-400" />}
                      </NavLink>
                    );
                  })}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-8 text-gray-500 text-sm">
              No tools found matching "{searchQuery}"
            </div>
          )}
        </nav>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 min-w-0 flex flex-col">
        <header className="bg-white border-b border-gray-200 sticky top-0 z-30 px-4 py-3 lg:hidden flex items-center justify-between">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 -ml-2 text-gray-600 hover:bg-gray-100 rounded-lg"
          >
            <Menu size={24} />
          </button>
        </header>
        
        <div className="p-4 sm:p-6 lg:p-10 max-w-7xl mx-auto w-full flex-1">
          <Outlet />
        </div>

        <footer className="border-t border-gray-200 bg-white py-8 mt-auto">
          <div className="max-w-7xl mx-auto px-4 text-center text-sm text-gray-500">
            <p>Copyright &copy; {new Date().getFullYear()} SmartTextKit</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
