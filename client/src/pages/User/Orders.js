import React, { useEffect, useState } from 'react'
import Dashboard from './Dashboard'
import axios from 'axios'
import { useAuth } from '../../context/auth'
import moment from 'moment';

const Orders = () => {
    const [orders, setOrders] = useState([])
    const [auth, setAuth] = useAuth();

    const getOrders = async() => {
        try {
            const {data} = await axios.get(`${process.env.REACT_APP_API}/api/v1/auth/orders`)
            setOrders(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if(auth?.token) getOrders();
    }, [auth?.token])

  return (
    <Dashboard>
        <div className='col-md-9'>
            <h1 className='text-center'>Orders</h1>
            {
                orders?.map((o,i) => {
                    return(
                        <div className='border shadow'>
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th scope='col'>#</th>
                                        <th scope='col'>Status</th>
                                        <th scope='col'>Buyer</th>
                                        <th scope='col'>Date</th>
                                        <th scope='col'>Payment</th>
                                        <th scope='col'>Quantity</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{i+1}</td>
                                        <td>{o?.status}</td>
                                        <td>{o?.buyer?.name}</td>
                                        <td>{moment(o?.createdAt).fromNow()}</td>
                                        <td>{o?.payment.success ? "Success" : "Failed"}</td>
                                        <td>{o?.products?.length}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className='container'>
                            {o?.products?.map((p,i) => (
              <div className="row mb-2 card flex-row">
                <div className="col-md-4 mt-2" key={p._id}>
                  <img
                    src={`${process.env.REACT_APP_API}/api/v1/product/getPhoto/${p._id}`}
                    className="card-img-top img-responsive"
                    alt={p.name}
                    width={"70%"}
                  />
                </div>
                <div className="col-md-8 mt-2">
                  <h4>
                    <strong>{p.name}</strong>
                  </h4>
                  <h4>₹ {p.price}/kg</h4>
                </div>
              </div>
            ))}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </Dashboard>
       
  )
}

export default Orders