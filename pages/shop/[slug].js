/* eslint-disable @next/next/no-img-element */
import { client, urlFor } from "../../lib/client"
import Link from "next/link"
import Layout from "../../components/Layout"

const ShopPage = ({ products, slug, image }) => {
  return (
    <Layout>
      <div className="">
        <div className="max-h-[500px]   overflow-hidden  relative after:absolute after:inset-0 after:bg-black after:opacity-10">
          <img
            src={urlFor(image[0].image.asset._ref)}
            alt=""
            className="object-cover"
          />
        </div>
        <div className="mx-auto max-w-2xl py-8 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-100">
            {slug.toUpperCase()}
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <Link key={product._id} href={`/product/${product.slug.current}`}>
                <div
                  key={product._id}
                  className="group relative cursor-pointer"
                >
                  <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                    <img
                      src={urlFor(product.image.asset._ref)}
                      alt={product.imageAlt}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-100">
                        <a href={product.href}>
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          {product.name}
                        </a>
                      </h3>
                    </div>
                    <p className="text-sm font-medium text-gray-200">
                      ${product.price}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const getStaticPaths = async () => {
  const query = `*[_type == 'category']{
        title,
      }
      `

  const products = await client.fetch(query)

  const paths = products.map((product) => ({
    params: {
      slug: product.title,
    },
  }))

  return {
    paths,
    fallback: "blocking",
  }
}

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*["${slug}" in category[]->title]{_id, image, name, price, slug}`
  const products = await client.fetch(query)
  const imageQuery = `*[_type == 'category' && title == '${slug}']{image}`
  const image = await client.fetch(imageQuery)

  return {
    props: { products, slug, image },
  }
}

export default ShopPage
