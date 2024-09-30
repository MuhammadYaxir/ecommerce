import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { TbTrash } from "react-icons/tb";

const List = () => {
  const url = "http://localhost:5000";
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/product/list`);
      setList(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      toast.error(error);
    }
  };
  const removeProduct = async (productId) => {
    try {
      const response = await axios.post(`${url}/api/product/remove`,{id:productId});
      toast.success(response.data.message);
      await fetchList();
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);
  return (
    <section className="p-4 sm:p-10 box-border w-full">
      <h4 className="bold-22 uppercase">Product List</h4>
      <div className="overflow-auto mt-5">
        <table className="w-full">
          <thead>
            <tr className="border-b border-s-slate-900/20 text-gray-30 regular-14 xs:regular-16 text-start py-12">
              <th className="p-1 text-left">Products</th>
              <th className="p-1 text-left">Title</th>
              <th className="p-1 text-left">Price</th>
              <th className="p-1 text-left">Remove</th>
            </tr>
          </thead>
          <tbody>
            {list.map((product, index) => {
              return (
                <tr key={index} className="border-b border-r-slate-900/20 text-gray-50 p-6 medium-4 text-left">
                  <td className="p-1">
                    <img
                      src={`${url}/images/` + product.image}
                      alt="productImage"
                      height={38}
                      width={38}
                      className="rounded-lg ring-1 ring-slate-900/5 m-1 "
                    />
                  </td>
                  <td className="p-1">
                    <div className="line-clamp-3">{product.name}</div>
                  </td>
                  <td className="p-1">${product.price}</td>
                  <td className="p-1">
                    <div className="bold-22">
                        <TbTrash onClick={()=> removeProduct(product._id)}/>
                    </div>
                  </td>

                    
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default List;
