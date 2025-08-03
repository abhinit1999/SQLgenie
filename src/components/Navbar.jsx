import DarkModeToggle from './DarkModeToggle';

export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md fixed w-full top-0 z-50 bg-white bg-white">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
          Prompt2SQL
        </div>
        <div className="flex items-center space-x-4">
          <a href="#pricing" className="text-gray-700 dark:text-white hover:text-indigo-600">Pricing</a>
          <a href="#faq" className="text-gray-700 dark:text-white hover:text-indigo-600">FAQ</a>
          <a href="/app" className="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700">Try App</a>
          {/* <DarkModeToggle /> */}
        </div>
      </div>
    </nav>
  );
}
