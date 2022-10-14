/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'

const callouts = [
    {
      name: "",
      description: "Men's",
      imageSrc: "/categories/mens.jpg",
      imageAlt:
        "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
      href: "/shop/mens",
    },
    {
      name: "",
      description: "Women's",
      imageSrc: "/categories/womens.jpg",
      imageAlt:
        "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
      href: "/shop/womens",
    },
    {
      name: "",
      description: "Kids' & Baby",
      imageSrc: "/categories/kids.jpg",
      imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
      href: "/shop/kids",
    },
  ]

const Collections = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-0">
        <div className="mx-auto max-w-2xl py-10  lg:max-w-none">
          <div className=" space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <Link key={callout.name} href={callout.href}>
                <div key={callout.name} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 transition-opacity duration-100 cursor-pointer sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1 after:absolute after:inset-0 after:bg-black after:opacity-10">
                    <img
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                  <p className="text-3xl font-bold text-white absolute top-3 left-5">
                    {callout.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
  )
}

export default Collections