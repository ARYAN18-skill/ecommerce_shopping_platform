import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useSearchParams } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

const Verify = () => {

    const { navigate, token, setCartItems, backendUrl } = useContext(ShopContext)

    const [searchParams, setSearchParams] = useSearchParams()

    const success = searchParams.get('success')
    const orderId = searchParams.get('orderId')

    const verifyPayment = async () => {

        try {

            if (!token) {
                return null
            }

            const response = await axios.post(
                backendUrl + '/api/order/verifyStripe',
                {
                    success,
                    orderId
                },
                {
                    headers: { token }
                }
            )

            if (response.data.success) {
                setCartItems({})
                navigate('/orders')
            } else {
                navigate('/cart')
            }

        } catch (error) {
            console.log(error)
            toast.error(error.message)
            navigate('/cart')
        }
    }

    useEffect(() => {
        verifyPayment()
    }, [token])

    return (
        <div className='min-h-[60vh] flex justify-center items-center'>
            <div className='w-16 h-16 border-4 border-gray-300 border-t-black rounded-full animate-spin'></div>
        </div>
    )
}

export default Verify