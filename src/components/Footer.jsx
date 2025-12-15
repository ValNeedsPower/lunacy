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
    <nav className="flex max-w-[1440px] relative z-20  border-t-[0.5px] mt-[112px] border-white-100/10 items-center mx-auto justify-center px-[112px] py-[30px] bg-[#010E13]">
      {/* LOGOTYPE */}
      <div className="flex w-full justify-between mx-auto px-auto items-center">
        <div className="flex flex-col">
          <NavLink
            to="/"
            end
            className="hover:opacity-50 opacity-30 duration-300"
          >
            <img
              src="./lunacy_logo.svg"
              alt="lunacy_logotype"
            />
          </NavLink>

          <p className="text-white-100/50 mt-10 whitespace-nowrap  uppercase font-mono font-semibold text-sm">Реклама и сотрудничество</p>
          <p className="text-white-100/50 mt-1 whitespace-nowrap  font-mono  text-sm"> pr@lunacy.ru</p>

          <p className="text-white-100/50 mt-4 whitespace-nowrap  uppercase font-mono font-semibold text-sm">Обратная связь и предложения</p>
          <p className="text-white-100/50 mt-1 whitespace-nowrap  font-mono  text-sm"> info@lunacy.ru</p>
        </div>
        {/* NAVBAR_ITEMS */}
        <div className="flex  w-full items-center justify-center">
          <NavLink
            className=" text-white-100/30 hover:text-white-100/80 duration-300 tracking-tight text-3xl"
            to="/"
          >
            {' '}
            HELP@LUNACY.RU{' '}
          </NavLink>
        </div>

        <div className="flex  space-x-10">
          <div className="text-right space-y-2">
            <p className="text-white-100 opacity-50 hover:opacity-80 cursor-pointer duration-300 whitespace-nowrap  uppercase font-mono font-semibold text-sm">
              политика конфиденциальности
            </p>
            <p className="text-white-100 opacity-50 hover:opacity-80 cursor-pointer duration-300 whitespace-nowrap  uppercase font-mono font-semibold text-sm">
              каталог
            </p>
            <p className="text-white-100 opacity-50 hover:opacity-80 cursor-pointe duration-300 whitespace-nowrap  uppercase font-mono font-semibold text-sm">
              драйвера
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-white-100/50  whitespace-nowrap  uppercase font-mono font-semibold text-sm">продукт</p>
            <NavLink
              to="/longwei"
              end
            >
              {' '}
              <p className="text-white-100/50 mt-1 whitespace-nowrap  font-mono  text-sm"> Longwei</p>
            </NavLink>
            <NavLink
              to="/longwei"
              end
            >
              {' '}
              <p className="text-white-100/50 mt-1 whitespace-nowrap  font-mono  text-sm"> Kanagawa</p>
            </NavLink>
            <NavLink
              to="/longwei"
              end
            >
              {' '}
              <p className="text-white-100/50 mt-1 whitespace-nowrap  font-mono  text-sm"> Lunacy One</p>
            </NavLink>
            <NavLink
              to="/longwei"
              end
            >
              {' '}
              <p className="text-white-100/50 mt-1 whitespace-nowrap  font-mono  text-sm"> Another One</p>
            </NavLink>
            <NavLink
              to="/longwei"
              end
            >
              {' '}
              <p className="text-white-100/50 mt-1 whitespace-nowrap  font-mono  text-sm"> Lunacy in Space</p>
            </NavLink>
            <NavLink
              to="/longwei"
              end
            >
              {' '}
              <p className="text-white-100/50 mt-1 whitespace-nowrap  font-mono  text-sm"> Moonlight XL</p>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Footer
