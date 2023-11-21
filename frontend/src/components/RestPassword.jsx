import React, { useState } from 'react'
import { toast } from 'react-toastify'

const RestPassword = () => {
    const [resetPassword, setResetPassword] = useState({
        oldPassword: '',
        newPassword: ''
    })


     const handleInputChange = (evt) => {
        setResetPassword({
            ...resetPassword,
            [evt.target.name]: evt.target.value
        })
    }

    const {oldPassword, newPassword} = resetPassword;

    const handleSubmit = (evt) => {
        evt.preventDefault()

        if (!resetPassword.oldPassword || !resetPassword.newPassword){
            alert('data missing...')
        }

        toast('Password updated successfully')
    }


  return (
       <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Reset Password
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="current-password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Current Password
            </label>
            <div className="mt-2">
              <input
                id="current-password"
                name="oldPassword"
                type="password"
                value={oldPassword}
                onChange={handleInputChange}
                required
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

           <div>
            <label
              htmlFor="new-password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              New Password
            </label>
            <div className="mt-2">
              <input
                id="new-password"
                name="newPassword"
                type="password"
                value={newPassword}
                onChange={handleInputChange}
                required
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

             <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                change Password
              </button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default RestPassword