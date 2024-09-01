import Swal from 'sweetalert2'

function ExpensesList() {

    const handelConfirmAllItem = () => {
        Swal.fire({
            title: "ยืนยัน",
            text: 'ยืนยันปิดยอดทั้งหมด',
            icon: 'question',
            showConfirmButton: true,
            showCancelButton: true
        }).then(res => {
            if (res.isConfirmed) {
                console.log('ConfirmItem')
            }
        })
    }

    return (
        <div className="bg-[#D4EEF1] min-h-screen">
            <div className="container mx-auto">
                <div className="text-center">
                    <h1>รายละเอียดข้อมูล</h1>
                </div>
                <div className="p-4 mt-6 bg-[#ffffff] rounded-2xl w-full shadow-2xl">
                    <div className="flex flex-row ">
                        <div className="flex flex-col justify-end mr-2">
                            <label className="font-bold">ชื่อรายการ</label>
                            <input type="text" className="border border-gray-600 p-1 px-3 rounded-lg" value='ค่างวดรถ toyota Ativ 2022' disabled />
                        </div>
                        <div className="flex flex-col  justify-end mr-2 ">
                            <label className="font-bold">จำนวนงวด</label>
                            <input type="text" className="border border-gray-600 p-1 px-3 rounded-lg" value='72 งวด' disabled />
                        </div>
                        <div className="flex flex-col justify-end mr-2">
                            <label className="font-bold">ประเภท</label>
                            <input type="text" className="border border-gray-600 p-1 px-3 rounded-lg" value='ยานพาหนะ' disabled />
                        </div>
                        <div className="flex flex-col justify-end mr-2">
                            <label className="font-bold">Cloud make by KBank</label>
                            <input type="text" className="border border-gray-600 p-1 px-3 rounded-lg" value='Shopee' disabled />
                        </div>
                        <div className="flex flex-col justify-end mr-2">
                            <label className="font-bold">ครบกำหนดจ่าย</label>
                            <input type="text" className="border border-gray-600 p-1 px-3 rounded-lg" value='28/08/2024' disabled />
                        </div>
                        <div className="flex flex-col justify-end mr-2">
                            <button onClick={handelConfirmAllItem} className="mt-3 p-1 rounded-lg w-[180px] bg-blue-500 text-white">ปิดยอดทั้งหมด</button>
                        </div>
                    </div>

                </div>

                <div className="mt-6">repayment schedule</div>
                <div className="flex justify-center ">
                    <table className="bg-[#ffffff] table-fixed  text-center rounded-2xl w-full shadow-2xl">
                        <thead>
                            <tr>
                                <td className="px-4 py-3 font-bold border-r-2 border-Gray-600">งวดที่</td>
                                <td className="px-4 py-3 font-bold border-r-2 border-Gray-600">
                                    รายจ่าย
                                </td>
                                <td className="px-4 py-3 font-bold border-l-2 border-Gray-600">สถานะ</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-t-2 border-Gray-600 px-4">
                                <td className="border-r-2 border-Gray-600 px-4">21 / 72</td>
                                <td className="border-r-2 border-Gray-600 px-4">
                                    {parseInt(10190).toLocaleString("th-TH")}
                                </td>

                                <td className="flex justify-center px-4">
                                    <div className="text-center rounded-3xl bg-green-600 mt-1 mb-1 w-[90px]">
                                        จ่ายแล้ว
                                    </div>
                                </td>
                            </tr>
                            <tr className="border-t-2 border-Gray-600 px-4">
                                <td className="border-r-2 border-Gray-600 px-4">21 / 72</td>
                                <td className="border-r-2 border-Gray-600 px-4">
                                    {parseInt(10190).toLocaleString("th-TH")}
                                </td>

                                <td className="flex justify-center px-4">
                                    <div className="text-center rounded-3xl bg-red-500 mt-1 mb-1 w-[90px]">
                                        ยังไม่จ่าย
                                    </div>
                                </td>
                            </tr>
                            <tr className="border-t-2 border-Gray-600 px-4">
                                <td className="border-r-2 border-Gray-600 px-4">21 / 72</td>
                                <td className="border-r-2 border-Gray-600 px-4">
                                    {parseInt(10190).toLocaleString("th-TH")}
                                </td>

                                <td className="flex justify-center px-4">
                                    <div className="text-center rounded-3xl bg-red-500 mt-1 mb-1 w-[90px]">
                                        ยังไม่จ่าย
                                    </div>
                                </td>
                            </tr>
                            <tr className="border-t-2 border-Gray-600 px-4">
                                <td className="border-r-2 border-Gray-600 px-4">21 / 72</td>
                                <td className="border-r-2 border-Gray-600 px-4">
                                    {parseInt(10190).toLocaleString("th-TH")}
                                </td>

                                <td className="flex justify-center px-4">
                                    <div className="text-center rounded-3xl bg-red-500 mt-1 mb-1 w-[90px]">
                                        ยังไม่จ่าย
                                    </div>
                                </td>
                            </tr>
                            <tr className="border-t-2 border-Gray-600 px-4">
                                <td className="border-r-2 border-Gray-600 px-4">21 / 72</td>
                                <td className="border-r-2 border-Gray-600 px-4">
                                    {parseInt(10190).toLocaleString("th-TH")}
                                </td>

                                <td className="flex justify-center px-4">
                                    <div className="text-center rounded-3xl bg-red-500 mt-1 mb-1 w-[90px]">
                                        ยังไม่จ่าย
                                    </div>
                                </td>
                            </tr>
                            <tr className="border-t-2 border-Gray-600 px-4">
                                <td className="border-r-2 border-Gray-600 px-4">21 / 72</td>
                                <td className="border-r-2 border-Gray-600 px-4">
                                    {parseInt(10190).toLocaleString("th-TH")}
                                </td>

                                <td className="flex justify-center px-4">
                                    <div className="text-center rounded-3xl bg-red-500 mt-1 mb-1 w-[90px]">
                                        ยังไม่จ่าย
                                    </div>
                                </td>
                            </tr>
                            <tr className="border-t-2 border-Gray-600 px-4">
                                <td className="border-r-2 border-Gray-600 px-4">21 / 72</td>
                                <td className="border-r-2 border-Gray-600 px-4">
                                    {parseInt(10190).toLocaleString("th-TH")}
                                </td>

                                <td className="flex justify-center px-4">
                                    <div className="text-center rounded-3xl bg-red-500 mt-1 mb-1 w-[90px]">
                                        ยังไม่จ่าย
                                    </div>
                                </td>
                            </tr>
                            <tr className="border-t-2 border-Gray-600 px-4">
                                <td className="border-r-2 border-Gray-600 px-4">21 / 72</td>
                                <td className="border-r-2 border-Gray-600 px-4">
                                    {parseInt(10190).toLocaleString("th-TH")}
                                </td>

                                <td className="flex justify-center px-4">
                                    <div className="text-center rounded-3xl bg-red-500 mt-1 mb-1 w-[90px]">
                                        ยังไม่จ่าย
                                    </div>
                                </td>
                            </tr>
                            <tr className="border-t-2 border-Gray-600 px-4">
                                <td className="border-r-2 border-Gray-600 px-4">21 / 72</td>
                                <td className="border-r-2 border-Gray-600 px-4">
                                    {parseInt(10190).toLocaleString("th-TH")}
                                </td>

                                <td className="flex justify-center px-4">
                                    <div className="text-center rounded-3xl bg-red-500 mt-1 mb-1 w-[90px]">
                                        ยังไม่จ่าย
                                    </div>
                                </td>
                            </tr>
                            <tr className="border-t-2 border-Gray-600 px-4">
                                <td className="border-r-2 border-Gray-600 px-4">21 / 72</td>
                                <td className="border-r-2 border-Gray-600 px-4">
                                    {parseInt(10190).toLocaleString("th-TH")}
                                </td>

                                <td className="flex justify-center px-4">
                                    <div className="text-center rounded-3xl bg-red-500 mt-1 mb-1 w-[90px]">
                                        ยังไม่จ่าย
                                    </div>
                                </td>
                            </tr>
                            <tr className="border-t-2 border-Gray-600 px-4">
                                <td className="border-r-2 border-Gray-600 px-4">21 / 72</td>
                                <td className="border-r-2 border-Gray-600 px-4">
                                    {parseInt(10190).toLocaleString("th-TH")}
                                </td>

                                <td className="flex justify-center px-4">
                                    <div className="text-center rounded-3xl bg-red-500 mt-1 mb-1 w-[90px]">
                                        ยังไม่จ่าย
                                    </div>
                                </td>
                            </tr>
                            <tr className="border-t-2 border-Gray-600 px-4">
                                <td className="border-r-2 border-Gray-600 px-4">21 / 72</td>
                                <td className="border-r-2 border-Gray-600 px-4">
                                    {parseInt(10190).toLocaleString("th-TH")}
                                </td>

                                <td className="flex justify-center px-4">
                                    <div className="text-center rounded-3xl bg-red-500 mt-1 mb-1 w-[90px]">
                                        ยังไม่จ่าย
                                    </div>
                                </td>
                            </tr>
                            <tr className="border-t-2 border-Gray-600 px-4">
                                <td className="border-r-2 border-Gray-600 px-4">21 / 72</td>
                                <td className="border-r-2 border-Gray-600 px-4">
                                    {parseInt(10190).toLocaleString("th-TH")}
                                </td>

                                <td className="flex justify-center px-4">
                                    <div className="text-center rounded-3xl bg-red-500 mt-1 mb-1 w-[90px]">
                                        ยังไม่จ่าย
                                    </div>
                                </td>
                            </tr>
                            <tr className="border-t-2 border-Gray-600 px-4">
                                <td className="border-r-2 border-Gray-600 px-4">21 / 72</td>
                                <td className="border-r-2 border-Gray-600 px-4">
                                    {parseInt(10190).toLocaleString("th-TH")}
                                </td>

                                <td className="flex justify-center px-4">
                                    <div className="text-center rounded-3xl bg-red-500 mt-1 mb-1 w-[90px]">
                                        ยังไม่จ่าย
                                    </div>
                                </td>
                            </tr>
                            <tr className="border-t-2 border-Gray-600 px-4">
                                <td className="border-r-2 border-Gray-600 px-4">21 / 72</td>
                                <td className="border-r-2 border-Gray-600 px-4">
                                    {parseInt(10190).toLocaleString("th-TH")}
                                </td>

                                <td className="flex justify-center px-4">
                                    <div className="text-center rounded-3xl bg-red-500 mt-1 mb-1 w-[90px]">
                                        ยังไม่จ่าย
                                    </div>
                                </td>
                            </tr>
                            <tr className="border-t-2 border-Gray-600 px-4">
                                <td className="border-r-2 border-Gray-600 px-4">21 / 72</td>
                                <td className="border-r-2 border-Gray-600 px-4">
                                    {parseInt(10190).toLocaleString("th-TH")}
                                </td>

                                <td className="flex justify-center px-4">
                                    <div className="text-center rounded-3xl bg-red-500 mt-1 mb-1 w-[90px]">
                                        ยังไม่จ่าย
                                    </div>
                                </td>
                            </tr>
                            <tr className="border-t-2 border-Gray-600 px-4">
                                <td className="border-r-2 border-Gray-600 px-4">21 / 72</td>
                                <td className="border-r-2 border-Gray-600 px-4">
                                    {parseInt(10190).toLocaleString("th-TH")}
                                </td>

                                <td className="flex justify-center px-4">
                                    <div className="text-center rounded-3xl bg-red-500 mt-1 mb-1 w-[90px]">
                                        ยังไม่จ่าย
                                    </div>
                                </td>
                            </tr>
                            <tr className="border-t-2 border-Gray-600 px-4">
                                <td className="border-r-2 border-Gray-600 px-4">21 / 72</td>
                                <td className="border-r-2 border-Gray-600 px-4">
                                    {parseInt(10190).toLocaleString("th-TH")}
                                </td>

                                <td className="flex justify-center px-4">
                                    <div className="text-center rounded-3xl bg-red-500 mt-1 mb-1 w-[90px]">
                                        ยังไม่จ่าย
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ExpensesList;