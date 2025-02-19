import { useState } from "react";

const ClientForm = ({setClientForm}) => {

    const [formValues, setFormValues] = useState({
        name: "",
        clientId: "",
        contact: "",
        clientType: "company",
        email: "",
        phone: "",
        secondEmail: "",
        secondPhone: "",
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(e.target.value);
        console.log(e.target.name);
        setFormValues({ ...formValues, [name]: value});
      };
      
    const addClient = (e) => {
        e.preventDefault();
        console.log(formValues);
        console.log("Client Added Successfully");
        closeForm();
    }

    const closeForm = () => {
        setClientForm(false);
    }

  return (
    <div className="w-full lg:w-[50%] h-full bg-blue-50 fixed top-0 right-0 p-5 overflow-scroll">
      <div className="flex justify-between items-center border-b-2 border-gray-200 ">
        <h2 className="text-[18px] font-semibold">Add New Client</h2>
        <p className="text-[24px] font-semibold cursor-pointer" onClick={closeForm}>X</p>
      </div>
      <form action="#" className="w-full my-2 flex flex-col gap-2 text-[14px] lg:text-[18px]" onSubmit={addClient}>
        <h3 className="text-[18px] font-semibold">Client Information:</h3>
        <div className="w-full flex flex-col gap-1">
          <label htmlFor="name">Client Name*</label>
          <input
            type="text"
            name="name"
            id="name"
            className="border border-gray-300 rounded-md p-2 invalid:border-red-400 "
            placeholder="Enter name"
            required
            value={formValues.name}
            onChange={handleChange}
          />
        </div>
        <div className="w-full flex flex-col gap-1">
          <label htmlFor="clientId">Client Id*</label>
          <input
            type="text"
            name="clientId"
            id="clientId"
            className="border border-gray-300 rounded-md p-2 invalid:border-red-400"
            placeholder="Create Id"
            required
            value={formValues.clientId}
            onChange={handleChange}
          />
        </div>
        <div className="w-full flex flex-col gap-1">
          <label htmlFor="contact">Contact Person*</label>
          <input
            type="text"
            name="contact"
            id="contact"
            className="border border-gray-300 rounded-md p-2 invalid:border-red-400"
            placeholder="Enter Contact person"
            maxLength={14}
            required
            value={formValues.contact}
            onChange={handleChange}
          />
        </div>
        <div className="w-full flex flex-col gap-1">
          <label htmlFor="name">Client Type*</label>
          <select className="border-[0.5px] border-gray-400 shadow-sm px-4 py-2 rounded-lg " value={formValues.clientType} onChange={handleChange}>
            <option value={"company"}>Company</option>
            <option value={"individual"}>Individual</option>
          </select>
        </div>

        <h3 className="text-[18px] font-semibold">Contact Details:</h3>
        <div className="w-full grid grid-cols-2 gap-2">
          <div className="w-full flex flex-col gap-1">
            <label htmlFor="contact">Email Address*</label>
            <input
              type="email"
              name="email"
              id="email"
              className="border border-gray-300 rounded-md p-2 invalid:border-red-400"
              placeholder="Enter email"
              required
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <div className="w-full flex flex-col gap-1">
            <label htmlFor="phone">Phone Number*</label>
            <input
              type="text"
              name="phone"
              id="phone"
              className="border border-gray-300 rounded-md p-2 invalid:border-red-400"
              placeholder="Enter Phone number"
              required
              value={formValues.phone}
              onChange={handleChange}
            />
          </div>
          <div className="w-full flex flex-col gap-1">
            <label htmlFor="secondEmail">Secondary Email*</label>
            <input
              type="email"
              name="secondEmail"
              id="secondEmail"
              className="border border-gray-300 rounded-md p-2 invalid:border-red-400"
              placeholder="Enter secondary Email"
              required
              value={formValues.secondEmail}
              onChange={handleChange}
            />
          </div>
          <div className="w-full flex flex-col gap-1">
            <label htmlFor="secondPhone">Secondary Phone*</label>
            <input
              type="text"
              name="secondPhone"
              id="secondPhone"
              className="border border-gray-300 rounded-md p-2 invalid:border-red-400"
              placeholder="Enter secondary phone"
              maxLength={14}
              required
              value={formValues.secondPhone}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="w-full flex gap-2 mt-2">
            <button type="button" onClick={closeForm} className="w-full text-center p-2 border cursor-pointer border-purple-500 rounded-md text-purple-500">Close</button>
            <button type="submit" className="w-full text-white text-center cursor-pointer p-2 bg-purple-500 rounded-md ">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ClientForm;
