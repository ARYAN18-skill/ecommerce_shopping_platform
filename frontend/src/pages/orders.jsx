import React, { useContext, useState, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import axios from 'axios'

const Orders = () => {

  const { backendUrl, token, currency } = useContext(ShopContext)
  const [orderData, setOrderData] = useState([])

  const loadOrderData = async () => {

    try {

      if (!token) return

      const response = await axios.post(
        backendUrl + '/api/order/userorders',
        {},
        {
          headers: { token }
        }
      )

      if (response.data.success) {

        let allOrdersItem = []

        response.data.orders.forEach((order) => {

          order.items.forEach((item) => {

            item.status = order.status
            item.payment = order.payment
            item.paymentMethod = order.paymentMethod
            item.date = order.date

            allOrdersItem.push(item)

          })

        })

        setOrderData(allOrdersItem.reverse())

      }

    } catch (error) {
      console.log(error)
    }

  }

  useEffect(() => {
    loadOrderData()
  }, [token])

  return (
    <div className="border-t pt-16">

      <div className="text-2xl mb-6">
        <Title text1={'MY'} text2={'ORDERS'} />
      </div>

      <div>

        {orderData.map((item, index) => (

          <div
            key={index}
            className="py-5 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
          >

            {/* Product */}

            <div className="flex items-start gap-6 text-sm">

              <img
                className="w-16 sm:w-20"
                src={item.image?.[0]}
                alt=""
              />

              <div>

                <p className="sm:text-lg font-medium">
                  {item.name}
                </p>

                <div className="flex flex-wrap items-center gap-4 mt-2">

                  <p className="text-lg">
                    {currency}{item.price}
                  </p>

                  <p>
                    Quantity:
                    <span className="font-medium"> {item.quantity}</span>
                  </p>

                  <p>
                    Size:
                    <span className="font-medium"> {item.size}</span>
                  </p>

                </div>

                <p className="mt-2 text-gray-500">

                  Date:

                  <span className="ml-1">

                    {new Date(item.date).toLocaleDateString()}

                  </span>

                </p>

              </div>

            </div>

            {/* Status */}

            <div className="md:w-1/2 flex justify-between items-center">

              <div className="flex items-center gap-3">

                <span
                  className={`w-3 h-3 rounded-full ${
                    item.status === "Delivered"
                      ? "bg-green-500"
                      : item.status === "Shipped"
                      ? "bg-blue-500"
                      : item.status === "Packing"
                      ? "bg-yellow-500"
                      : "bg-gray-500"
                  }`}
                ></span>

                <p
                  className={`font-medium ${
                    item.status === "Delivered"
                      ? "text-green-600"
                      : item.status === "Shipped"
                      ? "text-blue-600"
                      : item.status === "Packing"
                      ? "text-yellow-600"
                      : "text-gray-700"
                  }`}
                >
                  {item.status}
                </p>

              </div>

              <button
                onClick={loadOrderData}
                className="border border-gray-400 px-5 py-2 rounded hover:bg-black hover:text-white transition duration-300"
              >
                Track Order
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  )
}

export default Orders