import React from 'react'

const Input = ({label, type, value, onChange, className, children, placeholder, ...props}) => {

    if(type === "select") return (
        <div className={`w-full ${className}`}>
            <label htmlFor={label} className="block text-sm font-medium text-gray-900">{label}</label>
            <select name={label} onChange={onChange} className="mt-1 w-full rounded-md border border-gray-300 p-2 bg-white text-sm text-gray-700 h-10 shadow-sm">{children}</select>
        </div>
    ) 
    else if (type === "textarea") return (
        <div className={`w-full ${className}`}>
            <label className={`block text-sm font-medium text-gray-700`}>{label}</label>
            <textarea type={type} placeholder={placeholder} name={label} value={value} onChange={onChange} className="mt-1 w-full rounded-md border border-gray-300 p-3 bg-white text-sm text-gray-700 h-24 shadow-sm" />
        </div>    
    )
    else return (
        <div className={`w-full ${className}`}>
            <label className={`block text-sm font-medium text-gray-700 ${className}`}>{label}</label>
            <input type={type} name={label} value={value} onChange={onChange} placeholder={placeholder} {...props} className="mt-1 w-full rounded-md border border-gray-300 p-3 bg-white text-sm text-gray-700 h-10 shadow-sm" />
        </div>    
    )
}

export default Input