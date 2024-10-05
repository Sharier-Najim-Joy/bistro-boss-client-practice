import { useQuery } from "@tanstack/react-query";
import SectionTittle from "../../../components/SectionTittle/SectionTittle";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: payments = [] } = useQuery({
    queryKey: ["payment", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payment/${user?.email}`);
      return res.data;
    },
  });

  return (
    <>
      <Helmet>
        <title>BISTRO | Payment History</title>
      </Helmet>
      <SectionTittle
        heading={"PAYMENT HISTORY"}
        subHeading={"At a Glance!"}
      ></SectionTittle>
      <div className="shadow-2xl mx-32 p-11">
        <div className="flex justify-between">
          <h2 className="text-4xl">Total Orders: {payments.length}</h2>
        </div>
        <div className="overflow-x-auto my-4">
          <div className="overflow-x-auto">
            <table className="table table-zebra">
              {/* head */}
              <thead>
                <tr>
                  <th>#</th>
                  <th>Email</th>
                  <th>Price</th>
                  <th>Date</th>
                  <th>Transaction Id</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {payments.map((payment, index) => (
                  <tr key={payment._id}>
                    <th>{index + 1}</th>
                    <td>{payment.email}</td>
                    <td>${payment.price}</td>
                    <td>{payment.date}</td>
                    <td>{payment.transactionId}</td>
                    <td>{payment.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentHistory;
