import React from "react";

export default function TablePositions() {
  return (
<div className="px-10">
    <table className="text-left rounded-md">
        <tbody className="py-2 text-sm">
            <tr className=" border border-gray-500 ">
                <th scope="row" className="px-6  font-medium   border border-gray-500   ">
                Primer puesto
                </th>
                <td className="border border-gray-500 px-4 py-4">
                    
                </td>
            </tr>
            <tr className="border border-gray-500">
                <th scope="row" className="px-6  font-medium   ">
                    Segundo puesto
                </th>
                <td className="border border-gray-500 px-6 py-4">
                    
                </td>
            </tr>
            <tr className="border border-gray-500">
                <th scope="row" className="px-6 font-medium   ">
                    Tercer puesto
                </th>
                <td className="border border-gray-500 px-6 py-4">
                    
                </td>
            </tr>
            <tr className="border border-gray-500">
                 <th scope="row" className="px-6  font-medium    ">
                    Cuarto Puesto
                </th>
                <td className="border border-gray-500 px-40 py-4">
                    
                </td>
            </tr>
        </tbody>
    </table>
</div>
  );
}
