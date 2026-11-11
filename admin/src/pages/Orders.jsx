import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { backendUrl, currency } from '../App'
import { toast } from 'react-toastify'
import { assets } from '../assets/assets'

const Orders = ({ token }) => {

    const [orders, setOrders] = useState([])

    const fetchAllOrders = async () => {

        try {

            const response = await axios.post(
                backendUrl + '/api/order/list',
                {},
                { headers: { token } }
            )

            if (response.data.success) {
                setOrders(response.data.orders)
            } else {
                toast.error(response.data.message)
            }

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    useEffect(() => {
        fetchAllOrders()
    }, [])


    return (
  <div className="min-h-screen bg-gray-50 p-6">
    <div className="max-w-7xl mx-auto">

      <h2 className="text-3xl font-bold text-gray-800 mb-8">
        Orders
      </h2>

      <div className="space-y-6">

        {orders.map((order, index) => (

          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 grid grid-cols-1 lg:grid-cols-[80px_2fr_1fr_180px] gap-6 items-start"
          >

            {/* Parcel Icon */}

            <div className="flex justify-center">
              <img
                src={assets.parcel_icon}
                alt="Parcel"
                className="w-16 h-16 object-contain"
              />
            </div>

            {/* Customer Details */}

            <div>

              <div className="space-y-1 mb-4">

                {order.items.map((item, i) => (

                  <p key={i} className="text-gray-700">

                    {item.name} × {item.quantity}

                    {item.size && (
                      <span className="ml-2 px-2 py-1 rounded bg-gray-100 text-xs">
                        {item.size}
                      </span>
                    )}

                  </p>

                ))}

              </div>

              <h3 className="text-lg font-bold text-gray-800">
                {order.address.firstName} {order.address.lastName}
              </h3>

              <p className="text-gray-600">
                {order.address.street}
              </p>

              <p className="text-gray-600">
                {order.address.city}, {order.address.state},{" "}
                {order.address.country} {order.address.zipcode}
              </p>

              <p className="text-gray-700 mt-2 font-medium">
                {order.address.phone}
              </p>

            </div>

            {/* Order Info */}

            <div className="space-y-3 text-sm">

              <p>
                <span className="font-semibold">
                  Items:
                </span>{" "}
                {order.items.length}
              </p>

              <p>
                <span className="font-semibold">
                  Method:
                </span>{" "}
                {order.paymentMethod}
              </p>

              <p>
                <span className="font-semibold">
                  Payment:
                </span>{" "}

                <span
                  className={`font-semibold ${
                    order.payment
                      ? "text-green-600"
                      : "text-orange-500"
                  }`}
                >
                  {order.payment ? "Done" : "Pending"}
                </span>

              </p>

              <p>
                <span className="font-semibold">
                  Date:
                </span>{" "}
                {new Date(order.date).toLocaleDateString()}
              </p>

              <p className="text-xl font-bold text-blue-600 pt-2">
                {order.currency}
                {order.amount}
              </p>

            </div>

            {/* Status */}

            <div className="flex justify-center lg:justify-end">

              <select
                Value={order.status}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium bg-white outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Order Placed">
                  Order Placed
                </option>

                <option value="Packing">
                  Packing
                </option>

                <option value="Shipped">
                  Shipped
                </option>

                <option value="Out for delivery">
                  Out for delivery
                </option>

                <option value="Delivered">
                  Delivered
                </option>

              </select>

            </div>

          </div>

        ))}

      </div>

    </div>
  </div>
)

    
}

export default Orders
