import Link from "next/link"
import React, { useState, useRef, useEffect } from "react"
import { HiShoppingBag, HiMenuAlt4 } from "react-icons/hi"
import { FiSearch } from "react-icons/fi"
import Cart from "./Cart"
import { useStateContext } from "../context/StateContext"

const Header = () => {
  const [cartOpen, setCartOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const { totalQuantities } = useStateContext()
  const ref = useRef()
  useOnClickOutside(ref, () => setSearchOpen(false))
  return (
    <header className="relative z-50">
      <nav className="max-w-7xl mx-auto h-16   flex items-center justify-between px-5">
        <HiMenuAlt4 size={22} className={`text-white`} />
        <Link href={`/`}>
          <a
            className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
            id="logo"
          >
            alaska range
          </a>
        </Link>
        <div className="flex gap-4">
          <div className="relative">
            <FiSearch
              onClick={() => setSearchOpen(true)}
              size={22}
              className={`text-white cursor-pointer`}
            />
            <div
              ref={ref}
              className={`absolute pointer-events-none -right-3 w-[5px] top-1/2 -translate-y-1/2 opacity-0 ${
                searchOpen && "opacity-100 pointer-events-auto w-[270px]"
              } transition-all duration-200`}
            >
              <input
                type="search"
                placeholder="Search"
                className="py-2 bg-neutral-800 text-white rounded-xl px-3 w-full focus:outline-none"
              />
              <FiSearch
                onClick={() => setSearchOpen(false)}
                size={22}
                className={`text-white cursor-pointer absolute right-3 top-1/2 -translate-y-1/2`}
              />
            </div>
          </div>
          <div className="relative">
            <HiShoppingBag
              onClick={() => setCartOpen(true)}
              size={22}
              className={`text-white cursor-pointer`}
            />
            <div className="absolute text-xs bg-sky-500 text-white font-bold h-4 w-4 grid place-items-center rounded-full right-[-1px] bottom-[-12px]">
              {totalQuantities}
            </div>
          </div>
        </div>
      </nav>
      <Cart open={cartOpen} setOpen={setCartOpen} />
    </header>
  )
}

function useOnClickOutside(ref, handler) {
  useEffect(
    () => {
      const listener = (event) => {
        // Do nothing if clicking ref's element or descendent elements
        if (!ref.current || ref.current.contains(event.target)) {
          return
        }

        handler(event)
      }

      document.addEventListener("mousedown", listener)
      document.addEventListener("touchstart", listener)

      return () => {
        document.removeEventListener("mousedown", listener)
        document.removeEventListener("touchstart", listener)
      }
    },
    // Add ref and handler to effect dependencies
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [ref, handler]
  )
}

export default Header
