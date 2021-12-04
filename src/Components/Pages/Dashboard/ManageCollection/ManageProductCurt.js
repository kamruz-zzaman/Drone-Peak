import React from 'react';

const ManageProductCurt = ({ products, deletStatus }) => {
    const { _id, Img, Name, Price } = products;
    return (
        <tr key="{person.email}">
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                        <img className="h-10 w-10 rounded-full" src={Img} alt="" />
                    </div>
                    <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{Name}</div>
                    </div>
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{Price}/-</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button onClick={() => deletStatus(_id)} className='border bg-red-400 hover:bg-red-500 rounded-lg py-1 px-1'>Delete</button>
            </td>
        </tr>
    );
};

export default ManageProductCurt;