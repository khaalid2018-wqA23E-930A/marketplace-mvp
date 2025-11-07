import React from 'react'

export default function Profile() {
    return (
        <div className="min-h-screen flex items-center justify-center p-6">
            <div className="w-full max-w-md bg-white shadow rounded-lg p-6 text-center">
                <h2 className="text-3xl font-bold mb-2">Your Profile</h2>
                <p className="text-gray-600">This is a placeholder for the user profile page.</p>
                <div className="mt-6">
                    <button className="px-4 py-2 bg-blue-600 text-white rounded">Edit Profile</button>
                </div>
            </div>
        </div>
    )
}
