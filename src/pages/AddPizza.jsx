import useFirestore from "../hooks/useFirestore";
import { useState } from "react";
import AuthContainer from "../components/AuthContainer";
function AddPizza() {
  const { addPizza } = useFirestore();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [star, setStar] = useState(5);
  function addNewPizza(e) {
    e.preventDefault();
    addPizza(name, star, price, image);
  }
  return (
    <AuthContainer>
      <form
        onSubmit={addNewPizza}
        className="space-y-4 md:space-y-6"
        action="#"
      >
        <h2 className="text-2xl text-center">New Pizza</h2>
        <div>
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Name :
          </label>
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            id="name"
            placeholder="Pepperoni"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-amber-600 focus:border-amber-600 block w-full p-2.5 "
            required
          />
        </div>

        <div>
          <label
            htmlFor="price"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Price :
          </label>
          <input
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            type="text"
            id="price"
            placeholder="20"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-amber-600 focus:border-amber-600 block w-full p-2.5 "
            required
          />
        </div>
        <div>
          <label
            htmlFor="image"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Image :
          </label>
          <input
            onChange={(e) => {
              setImage(e.target.value);
            }}
            type="text"
            id="image"
            placeholder="https://..."
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-amber-600 focus:border-amber-600 block w-full p-2.5 "
            required
          />
        </div>
        <div>
          <label
            htmlFor="star"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Star :
          </label>
          <div className="flex gap-3 items-center">
            <input
              onChange={(e) => {
                setStar(e.target.value);
              }}
              type="range"
              min="1"
              max="5"
              id="star"
              placeholder="4"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-amber-600 focus:border-amber-600 block w-full p-2.5 "
              required
            />
            <span className="text-xl">{star}</span>
          </div>
        </div>
        <button
          type="submit"
          className="w-full text-white bg-amber-600 hover:bg-amber-500 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
        >
          Add New Pizza
        </button>
      </form>
    </AuthContainer>
  );
}

export default AddPizza;
