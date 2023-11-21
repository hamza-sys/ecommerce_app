import React, { useRef, useState } from 'react'


// if authenticated && admin

const AddProduct = () => {
    const [newProduct, setNewProduct] = useState({
        name: '',
        desc: '',
        price: '',
        quantity: '',
    })
    const [image, setImage] = useState()
    const [imagePreview, setImagePreview] = useState()

    const imageRef = useRef()

    const {name, desc, price, quantity} = newProduct

    
    const handleChange = (evt) => {
        setNewProduct({
            ...newProduct,
            [evt.target.name]: evt.target.value
        })
    }

    const handleFileChange = (evt) => {
        setImage(evt.target.files[0])
        setImagePreview(URL.createObjectURL(evt.target.files[0]))
    }

    const handleImagePress = () => {
        imageRef.current.click()
    }

      const handleSubmit = (evt) => {
        evt.preventDefault()

        const formData = new FormData()

        formData.append('name', name)
        formData.append('desc', desc)
        formData.append('price', price)
        formData.append('quantity', quantity)
        formData.append('image', image)
    }
  
  return (
     <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <h1 className='text-xl sm:text-3xl font-bold mb-5'>Add Product</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
               Name
            </label>
            <div className="mt-2">
              <input
              type='text'
                id='name'
                name='name'
                value={name}
                onChange={handleChange}
                required
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

             <div>
            <label
              htmlFor="desc"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
               Description
            </label>
            <div className="mt-2">
              <input
              type='text'
                id='desc'
                name='desc'
                value={desc}
                onChange={handleChange}
                required
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

         <div>
            <label
              htmlFor="price"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
               Price
            </label>
            <div className="mt-2">
              <input
              type='number'
                id='price'
                name='price'
                value={price}
                onChange={handleChange}
                required
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

           <div>
            <label
              htmlFor="quantity"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
               Quantity
            </label>
            <div className="mt-2">
              <input
              type='number'
                id='quantity'
                name='quantity'
                value={quantity}
                onChange={handleChange}
                required
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <input className='hidden' ref={imageRef} type='file' onChange={handleFileChange} accept="image/*" required />
            {imagePreview && <img src={imagePreview} className='w-[100px] h-[100px] mb-3' />}
            <span onClick={handleImagePress} className='bg-indigo-500 p-2 rounded cursor-pointer text-white'>upload image</span>
          </div>

           <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Add Product
            </button>
          </div>

          </form>
          </div>
  )
}

export default AddProduct