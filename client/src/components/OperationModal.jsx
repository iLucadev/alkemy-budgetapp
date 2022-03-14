import React, { Fragment, useState, useContext, useEffect } from "react";
import axios from "axios";
import { Dialog, Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import GlobalContext from "../store/GlobalContext";

const OperationModal = ({ isOpen, setIsOpen, openModal }) => {
  const categories = [{ name: "incomes" }, { name: "expenses" }];
  const [selected, setSelected] = useState(categories[0]);
  const [register, setRegister] = useState({
    category: "",
    concept: "",
    amount: "",
  });

  const { user, getUserOperations } = useContext(GlobalContext);

  useEffect(() => {
    setRegister({ ...register, category: selected.name });
  }, [selected]);

  function closeModal() {
    setIsOpen(false);
    setSelected(categories[0]);
    setRegister({ category: selected.name, concept: "", amount: "" });
  }

  const handleChange = (e) => {
    const { target } = e;

    const { name, value } = target;

    const newRegister = {
      ...register,
      [name]: value,
    };

    setRegister(newRegister);
  };

  const handleSubmit = async () => {
    const data = {
      user_id: user.id,
      category: register.category,
      concept: register.concept,
      amount: register.amount,
    };

    await axios
      .post("http://localhost:4000/operations", data)
      .then((response) => {
        if (response.data.error) alert(response.data.error);
        window.location.reload();
      });

    closeModal();
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={closeModal}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
              <Dialog.Title
                as="h3"
                className="flex justify-center text-lg font-medium leading-6 text-slate-900"
              >
                Añade un nuevo registro
              </Dialog.Title>
              <form action="" className="space-y-3">
                <div className="">
                  <label
                    htmlFor="category"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Category
                  </label>
                  <Listbox value={selected} onChange={setSelected}>
                    <div className="relative mt-1">
                      <Listbox.Button className="relative w-full p-2 text-left bg-gray-50 border border-gray-300 rounded-lg cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
                        <span className="block truncate">{selected.name}</span>
                        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                          <SelectorIcon
                            className="w-5 h-5 text-gray-400"
                            aria-hidden="true"
                          />
                        </span>
                      </Listbox.Button>
                      <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                          {categories.map((category, idx) => (
                            <Listbox.Option
                              key={idx}
                              className={({ active }) =>
                                `cursor-default select-none relative py-2 pl-10 pr-4 ${
                                  active
                                    ? "text-amber-900 bg-amber-100"
                                    : "text-gray-900"
                                }`
                              }
                              value={category}
                            >
                              {({ selected }) => (
                                <>
                                  <span
                                    className={`block truncate ${
                                      selected ? "font-medium" : "font-normal"
                                    }`}
                                  >
                                    {category.name}
                                  </span>
                                  {selected ? (
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                      <CheckIcon
                                        className="w-5 h-5"
                                        aria-hidden="true"
                                      />
                                    </span>
                                  ) : null}
                                </>
                              )}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </Listbox>
                </div>
                <div className="">
                  <label
                    htmlFor="concept"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Concept
                  </label>
                  <input
                    type="concept"
                    id="concept"
                    name="concept"
                    value={register.concept}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                    required
                  />
                </div>
                <label
                  htmlFor="amount"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Amount
                </label>
                <input
                  type="amount"
                  id="amount"
                  name="amount"
                  value={register.amount}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                  required
                />
              </form>
              <div className="mt-4 flex justify-end space-x-4">
                <button
                  type="submit"
                  className="inline-flex w-24 justify-center px-4 py-2 text-sm font-medium text-slate-50 bg-blue-500 border border-transparent rounded-md hover:bg-blue-200 hover:text-blue-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  onClick={handleSubmit}
                >
                  Confirm
                </button>
                <button
                  type="button"
                  className="inline-flex w-24 justify-center px-4 py-2 text-sm font-medium text-red-900 bg-red-200 border border-transparent rounded-md hover:bg-red-600 hover:text-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  onClick={closeModal}
                >
                  Cancel
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default OperationModal;
