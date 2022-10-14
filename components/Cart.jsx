/* eslint-disable @next/next/no-img-element */
import { useState, Fragment } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { XMarkIcon } from "@heroicons/react/24/outline"
import { useStateContext } from "../context/StateContext"
import { urlFor } from "../lib/client"
import toast from "react-hot-toast"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import getStripe from "../lib/getStripe"



function Cart({ open, setOpen }) {
  const { totalPrice, cartItems, onRemove, toggleCartItemQuanitity } =
    useStateContext()

    const handleCheckout = async () => {
      const stripe = await getStripe()
  
      const response = await fetch("/api/stripe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cartItems),
      })
  
      if (response.statusCode === 500) return
  
      const data = await response.json()
      console.log(data)
      toast.loading("Redirecting...")
  
      stripe.redirectToCheckout({ sessionId: data.id })
    }
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-800/75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden ">
          <div className="absolute inset-0 overflow-hidden ">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto  w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-neutral-800 shadow-xl">
                    <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-xl font-medium text-gray-100">
                          Your Bag {cartItems.length < 1 && "is empty."}
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="-m-2 p-2 text-gray-300 hover:text-gray-500 focus:outline-none"
                            onClick={() => setOpen(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul
                            role="list"
                            className="-my-6 divide-y divide-gray-200"
                          >
                            {cartItems.map((product) => (
                              <li key={product.id} className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md ">
                                  <img
                                    src={urlFor(product.image.asset._ref)}
                                    alt={product.imageAlt}
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-100">
                                      <h3>
                                        <a href={product.href}>
                                          {product.name}
                                        </a>
                                      </h3>
                                      <p className="ml-4">${product.price}</p>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">
                                      {product.color}
                                    </p>
                                  </div>
                                  
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                  <div className="flex items-center text-sm text-white gap-4">
                                    <span
                                      className="minus text-white"
                                      onClick={() =>
                                        toggleCartItemQuanitity(
                                          product._id,
                                          "dec"
                                        )
                                      }
                                    >
                                      <AiOutlineMinus />
                                    </span>
                                    <span className="opacity-80" onClick="">
                                      Qty {product.quantity}
                                    </span>
                                    <span
                                      className="plus"
                                      onClick={() =>
                                        toggleCartItemQuanitity(
                                          product._id,
                                          "inc"
                                        )
                                      }
                                    >
                                      <AiOutlinePlus />
                                    </span>
                                  </div>

                                    <div className="flex">
                                      <button
                                        onClick={() => onRemove(product)}
                                        type="button"
                                        className="font-medium text-sky-500"
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-100">
                        <p>Subtotal</p>
                        <p>${totalPrice}</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">
                        Shipping and taxes calculated at checkout.
                      </p>
                      <div className="mt-6">
                        <a
                        onClick={handleCheckout}
                          href="#"
                          className="flex items-center justify-center rounded-md border border-transparent bg-sky-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-sky-500"
                        >
                          Checkout with Stripe
                        </a>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or
                          <button
                            type="button"
                            className="font-medium text-sky-600 hover:text-sky-500 ml-1"
                            onClick={() => setOpen(false)}
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default Cart
