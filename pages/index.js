/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import React from "react"
import { client, urlFor } from "../lib/client"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Collections from "../components/Collections"

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
    href: "#",
  },
]
const Home = ({ products }) => {
  return (
    <Layout>
      <Hero />
      <Collections />
    </Layout>
  )
}

export const getStaticProps = async () => {
  const products = await client.fetch(
    `*[_type == 'product']{_id, image, name, price, slug}`
  )

  return {
    props: { products },
  }
}

export default Home
