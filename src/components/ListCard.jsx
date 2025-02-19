import { useState } from "react";
import ClientForm from "./ClientForm";

/* eslint-disable react/prop-types */
const ListCard = ({ title = "" }) => {

    const [clientForm, setClientForm] = useState(false);

  const lists = [
    { name: "FedX", status: "active", price: 121300 },
    { name: "Google", status: "inactive", price: 113200 },
    { name: "Zoho", status: "active", price: 169000 },
    { name: "Kaka", status: "active", price: 120087 },
  ];
  return (
    <div className="w-full h-full bg-white p-4">
      <div className="w-full flex justify-between items-center">
        <h1 className="text-[18px] font-semibold">{title}</h1>
        <button onClick={() => setClientForm(prev => !prev)} className="shadow-sm border-[0.5px] rounded-md bg-purple-500 cursor-pointer text-white px-4 py-2 text-center">
          Add Client
        </button>
      </div>
      <div>
        {lists.map((item, i) => {
          return (
            <div
              className="w-full flex justify-between items-center border-b-2 border-gray-300 px-2 py-4"
              key={`${item.name + i}`}
            >
              <div className="flex justify-center items-center gap-2">
                <div className="w-[50px] aspect-square">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFFUTi1RsVDFSupmzDUJ5I3ZHBtwz043rbHQ&s"
                    alt="logo"
                    className="bg-gray-200"
                  />
                </div>
                <div className="text-[14px] lg:text-[18px]">
                  <p>Name: {item.name}</p>
                  <p>
                    Client Status:{" "}
                    <span
                      className={
                        (item.status === 'active') ? "text-green-500" : "text-red-500"
                      }
                    >
                      {item.status ? "Active" : "Inactive"}
                    </span>
                  </p>
                </div>
              </div>
              <div className="text-[14px] lg:text-[18px]">
                <p className="font-bold text-end">${item.price}</p>
                <p className="text-[12px] text-end">Outstanding Balance</p>
              </div>
            </div>
          );
        })}
      </div>

      {
        clientForm && <ClientForm setClientForm={setClientForm}/>
      }
    </div>
  );
};

export default ListCard;
