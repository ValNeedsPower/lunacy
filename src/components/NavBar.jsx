import { NavLink } from 'react-router-dom'

const NavBar = () => {
  const navItems = [
    { to: '/', label: 'Главная' },
    { label: 'Kanagawa', disabled: true },
    { to: '/longwei', label: 'Longwei' },
    { label: 'Louder', disabled: true },
    { label: 'In Space', disabled: true },
    { to: '/catalogue', label: 'Все Товары' },
    { label: 'Драйверы', disabled: true },
  ]

  return (
    <nav className="flex sticky top-0 z-50 shadow-lg items-center mx-auto justify-center px-[112px] py-[30px] bg-[#010E13]">
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
          {navItems.map(({ to, label, disabled }) => (
            <div key={label}>
              {disabled ? (
                <span className="text-sm text-white-100 opacity-30 cursor-not-allowed">{label}</span>
              ) : (
                <NavLink
                  to={to}
                  end
                  className={({ isActive }) =>
                    `
          text-sm duration-300 transition text-white-100
          ${isActive ? 'opacity-100' : 'opacity-50 hover:opacity-100'}
          `
                  }
                >
                  {label}
                </NavLink>
              )}
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

export default NavBar
