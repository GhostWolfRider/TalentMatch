import React from 'react';
import { Menu, X, Briefcase } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { navigateTo } from '../utils/navigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigateTo(navigate, '/login');
  };

  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center cursor-pointer" onClick={() => navigateTo(navigate, '/')}>
            <Briefcase className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">TalentMatch</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-900 px-3 py-2">How it Works</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 px-3 py-2">For Employers</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 px-3 py-2">For Candidates</a>
            <button 
              onClick={handleSignIn}
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
            >
              Sign In
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 text-gray-600 hover:text-gray-900">How it Works</a>
              <a href="#" className="block px-3 py-2 text-gray-600 hover:text-gray-900">For Employers</a>
              <a href="#" className="block px-3 py-2 text-gray-600 hover:text-gray-900">For Candidates</a>
              <button 
                onClick={handleSignIn}
                className="w-full text-left bg-indigo-600 text-white px-3 py-2 rounded-md hover:bg-indigo-700"
              >
                Sign In
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;