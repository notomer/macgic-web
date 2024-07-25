"use client"

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-6 border-t border-gray-300 dark:border-gray-700 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">Company</h3>
            <ul>
              <li><a href="#" className="text-gray-800 dark:text-gray-100">Careers</a></li>
              <li><a href="#" className="text-gray-800 dark:text-gray-100">Blog</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">Contact</h3>
            <ul>
              <li><a href="#" className="text-gray-800 dark:text-gray-100">Email Now</a></li>
              <li><a href="#" className="text-gray-800 dark:text-gray-100">GitHub</a></li>
              <li><a href="#" className="text-gray-800 dark:text-gray-100">LinkedIn</a></li>
              <li><a href="#" className="text-gray-800 dark:text-gray-100">Website</a></li>

            </ul>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2"></h3>
            <ul>
              <li><a href="#" className="px-4 py-2 border border-gray-800 dark:border-gray-100 text-gray-800 dark:text-gray-100 rounded-full inline-block mt-2">Download</a></li>
            </ul>
          </div>
          <div className="w-full text-center mt-6">
          </div>
        </div>
          <div className="flex justify-between items-center">
            <img src="/logo.png" alt="Logo" className="h-8" />
            <p className="text-gray-800 dark:text-gray-100">&copy; MacGic 2024. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer