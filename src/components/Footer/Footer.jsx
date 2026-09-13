import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-gray-950">
      <div className="mx-auto max-w-7xl px-6 py-12">

        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">

          {/* Brand */}
          <div className="max-w-sm">
            <Link to="/" className="inline-block mb-4">
              <Logo width="140px" />
            </Link>

            <p className="text-sm leading-6 text-gray-400">
              A place to write, share your ideas, and discover something new.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
              Explore
            </h3>

            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-sm text-gray-400 transition hover:text-white"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/all-posts"
                  className="text-sm text-gray-400 transition hover:text-white"
                >
                  All Posts
                </Link>
              </li>

              <li>
                <Link
                  to="/login"
                  className="text-sm text-gray-400 transition hover:text-white"
                >
                  Sign In
                </Link>
              </li>

              <li>
                <Link
                  to="/signup"
                  className="text-sm text-gray-400 transition hover:text-white"
                >
                  Create Account
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
              WriteHub
            </h3>

            <p className="max-w-xs text-sm leading-6 text-gray-400">
              Write. Share. Explore.
            </p>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 WriteHub. All rights reserved.
          </p>

          <p>
            Built with React & Appwrite
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer