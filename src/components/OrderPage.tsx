import React, { useEffect } from "react";
import { listOrdersAsync } from "../actions/OrdersActions";
import { Orders } from "../models/Orders";
import { selectOrders } from "../slices/OrdersSlice";
import { useAppDispatch, UseAppSelector } from "../store/hook";

const OrderPage: React.FC = () => {

    // const adminAccount: Users = JSON.parse(UseAppSelector(selectUser));

    const ordersListStr: string[] = UseAppSelector(selectOrders);

    let ordersList: Orders[] = new Array(ordersListStr.length);
  
    let index = 0;
  
    for (let Orderstr of ordersListStr) {
      ordersList[index++] = JSON.parse(Orderstr);
    }
  
    const dispatch = useAppDispatch();
  
    useEffect(() => {
      dispatch(listOrdersAsync())
    }, [dispatch]);

    // const OrdersTable = () => {
    //     console.log(ordersList);
    //     return (<div></div>)
    // }

    const OrdersTable = () => (ordersList.map(OrdersTableItem))

    const OrdersTableItem = (order:Orders) => (
        <tr>
            <td>{order.orderUserId.userFirstName + ' ' + order.orderUserId.userLastName}</td>
            <td>{order.orderNumber}</td>
            <td>{order.productNumber.productName}</td>
            <td>{order.orderAmount}</td>
            <td>{order.orderDescription}</td>
            <td>{order.orderTime}</td>
            <td>Button</td>
        </tr>
    )

    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">User Name</th>
                    <th scope="col">Order Number</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Order Amount</th>
                    <th scope="col">User Memo</th>
                    <th scope="col">Order Time</th>
                    <th scope="col">Edit Order</th>
                </tr>
            </thead>
            <tbody>
                {OrdersTable()}
            </tbody>
        </table>
    )
}

export default OrderPage;