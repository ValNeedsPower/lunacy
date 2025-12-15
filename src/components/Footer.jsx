import { NavLink } from 'react-router-dom'

const Footer = () => {
  const navItems = [
    { to: '/', label: 'Главная' },
    { to: '/players', label: 'Kanagawa' },
    { to: '/heroes', label: 'Longwei' },
    { to: '/items', label: 'Louder' },
    { to: '/drafts', label: 'In Space' },
    { to: '/catalogue', label: 'Все Товары' },
    { to: '/drivers', label: 'Драйверы' },
  ]
  const navBarLinks = [
    { id: 1, title: 'Главная', href: '/' },
    { id: 2, title: 'Kanagawa', href: '/' },
    { id: 3, title: 'Longwei', href: '/' },
    { id: 4, title: 'Louder', href: '/' },
    { id: 5, title: 'In Space', href: '/' },
    { id: 6, title: 'Все Товары', href: '/' },
    { id: 7, title: 'Драйверы', href: '/' },
  ]

  return (
    <nav className="flex relative z-20  border-t-[0.5px] mt-[112px] border-white-100/10 items-center mx-auto justify-center px-[112px] py-[30px] bg-[#010E13]">
      {/* LOGOTYPE */}
      <div className="flex w-full justify-between mx-auto px-auto items-center">
        <div className="flex">
          <NavLink
            to="/"
            end
            className="hover:opacity-50 duration-300"
          >
            <img
              src="./lunacy_logo.svg"
              alt="lunacy_logotype"
            />
          </NavLink>
        </div>
        {/* NAVBAR_ITEMS */}
        <div className="flex space-x-[42px] w-full items-center justify-center">
          {navItems.map(({ to, label }) => (
            <div key={to}>
              <NavLink
                to={to}
                end
                className={({ isActive }) =>
                  ` text-sm hidden duration-300 transition text-white-100 ${isActive ? 'opacity-100' : 'opacity-50 hover:opacity-100'}`
                }
              >
                {label}
              </NavLink>
            </div>
          ))}
        </div>
        <NavLink
          className="text-sm items-center flex space-x-1 duration-300 transition text-white-100 opacity-50 hover:opacity-100"
          to="/"
          end
        >
          <img src="./icons/support.svg" />
          <p>Поддержка</p>
        </NavLink>
        <div></div>
      </div>
    </nav>
  )
}

export default Footer
