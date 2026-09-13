import React from 'react'
import { Container, Logo, LogoutBtn } from '../index'
import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)

  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    },
    {
      name: 'Login',
      slug: "/login",
      active: !authStatus
    },
    {
      name: 'Signup',
      slug: "/signup",
      active: !authStatus
    },
    {
      name: 'All posts',
      slug: "/all-posts",
      active: authStatus
    },
    {
      name: 'Add Posts',
      slug: "/add-post",
      active: authStatus
    },

  ]
  return (
    <header className='sticky top-0 z-50 border-b border-white/10 bg-gray-950/90 backdrop-blur-md'>
      <Container>
        <nav className='flex items-center justify-between py-3'>

          <Link to='/' className='shrink-0'>
            <Logo width='140px' />
          </Link>

          <ul className='flex items-center gap-2'>
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <NavLink
                    to={item.slug}
                    end={item.slug === '/'}
                    className={({ isActive }) =>
                      `px-4 py-2 text-sm font-medium rounded-lg transition duration-200 ${isActive
                        ? 'bg-white/10 text-white shadow-sm'
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ) : null
            )}

            {authStatus && (
              <li className='ml-1'>
                <LogoutBtn />
              </li>
            )}
          </ul>

        </nav>
      </Container>
    </header>
  )
}

export default Header