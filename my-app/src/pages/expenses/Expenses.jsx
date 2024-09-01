import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import Modal from "../components/Modal";

function Expenses() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handelConfirmItem = () => {
    Swal.fire({
      title: "ยืนยัน",
      text: 'ยืนยันการจ่ายเงิน',
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
      <div className="container mx-auto ">
        <div>
          <h1 className="text-center text-3xl font-bold underline">
            Pages Expenses
          </h1>
        </div>
        <div className="bg-[#ffffff] rounded-2xl shadow-2xl  mt-3 p-2 ">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-4 mr-1">
              <input
                className="p-2 rounded-lg w-full"
                placeholder="ค้าหา"
                type="text"
              />
            </div>

            <div className="col-span-2 mr-1">
              <button className="p-2 rounded-lg w-full bg-[#ffffff]">
                ประเภท
              </button>
            </div>
            <div className="col-span-6 mr-1">
              <input
                className="p-2 rounded-lg w-full"
                placeholder="ค้าหา"
                type="text"
              />
            </div>
          </div>
          <div className="flex justify-end">
            <button onClick={() => setIsModalOpen(true)} className="p-2 rounded-lg w-[300px] bg-blue-500 text-white">
              <i className="fa fa-plus mr-2" />
              เพิ่มข้อมูล
            </button>
          </div>
        </div>
        <div className="flex justify-center mt-6 ">
          <table className="bg-[#ffffff] table-fixed  text-center rounded-2xl w-full shadow-2xl">
            <thead>
              <tr>
                <td className="px-4 py-3 border-r-2 border-Gray-600">ลำดับ</td>
                <td className="px-4 py-3 border-r-2 border-Gray-600">งวดที่</td>
                <td className="px-4 py-3 border-r-2 border-Gray-600 w-[350px]">
                  ชื่อรายการ
                </td>
                <td className="px-4 py-3 border-r-2 border-Gray-600">รายรับ</td>
                <td className="px-4 py-3 border-r-2 border-Gray-600">
                  รายจ่าย
                </td>
                <td className="px-4 py-3 border-r-2 border-Gray-600">ประเภท</td>
                <td className="px-4 py-3 border-r-2 border-Gray-600">เครดิต</td>
                <td className="px-4 py-3 border-r-2 border-Gray-600">
                  ครบกำหนดจ่าย
                </td>
                <td className="px-4 py-3 border-r-2 border-Gray-600">สถานะ</td>
                <td className="px-4 py-3 w-[300px] border-l-2 border-Gray-600">
                  หมายเหตุ
                </td>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t-2 border-Gray-600 px-4">
                <td className="border-r-2 border-Gray-600 px-4">1</td>
                <td className="border-r-2 border-Gray-600 px-4">20 / 72</td>
                <td className="border-r-2 border-Gray-600 px-4 ">
                  <Link to={'/expenseslist'}><div className="text-start">ค่างวดรถ toyota Ativ 2022</div></Link>
                </td>
                <td className="border-r-2 border-Gray-600 px-4">-</td>
                <td className="border-r-2 border-Gray-600 px-4">
                  {parseInt(10190).toLocaleString("th-TH")}
                </td>

                <td className="border-r-2 border-Gray-600 px-4">ยานพาหนะ</td>
                <td className="border-r-2 border-Gray-600 px-4">KTC</td>
                <td className="border-r-2 border-Gray-600 px-4">28/08/2024</td>
                <td className="border-r-2 border-Gray-600 px-4">
                  <div className="text-center rounded-3xl bg-green-600 mt-1 mb-1 w-[90px]">
                    จ่ายแล้ว
                  </div>
                </td>
                <td className="border-l-2 border-Gray-600 px-4">
                  <div className="ml-1 text-start">ทดสอบ</div>
                </td>
              </tr>
              <tr className="border-t-2 border-Gray-600 px-4">
                <td className="border-r-2 border-Gray-600 px-4">2</td>
                <td className="border-r-2 border-Gray-600 px-4">20 / 72</td>
                <td className="border-r-2 border-Gray-600 px-4 ">
                  <Link to={'/expenseslist'}><div className="text-start">ค่างวดรถ toyota Ativ 2022</div></Link>
                </td>
                <td className="border-r-2 border-Gray-600 px-4">-</td>
                <td className="border-r-2 border-Gray-600 px-4">
                  {parseInt(10190).toLocaleString("th-TH")}
                </td>

                <td className="border-r-2 border-Gray-600 px-4">ยานพาหนะ</td>
                <td className="border-r-2 border-Gray-600 px-4">KTC</td>
                <td className="border-r-2 border-Gray-600 px-4">28/08/2024</td>
                <td className="border-r-2 border-Gray-600 px-4">
                  <div onClick={handelConfirmItem} className="text-center rounded-3xl bg-red-500 mt-1 mb-1 w-[90px]">
                    ยังไม่จ่าย
                  </div>
                </td>
                <td className="border-l-2 border-Gray-600 px-4">
                  <div className="ml-1 text-start">ทดสอบ</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <Modal isOpen={isModalOpen} title="เพิ่มข้อมูล" onClose={() => setIsModalOpen(false)}>
        <div className='border-2 p-2'>
          <div className="flex flex-row space-x-2">
            <div className="flex flex-col w-full">
              <label className="mb-1 text-gray-700">ชื่อรายการ</label>
              <input
                type="text"
                className="border border-gray-600 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="flex flex-row space-x-2">
            <div className="flex flex-col">
              <label className="mb-1 text-gray-700">จำนวนผ่อน</label>
              <input
                type="number"
                className="border border-gray-600 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1 text-gray-700">รายรับ</label>
              <input
                type="number"
                className="border border-gray-600 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1 text-gray-700">รายจ่าย</label>
              <input
                type="number"
                className="border border-gray-600 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="flex flex-row space-x-2">
            <div className="flex flex-col">
              <label className="mb-1 text-gray-700">ประเภท</label>
              <input
                type="text"
                className="border border-gray-600 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1 text-gray-700">เครดิต</label>
              <input
                type="text"
                className="border border-gray-600 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="flex flex-row space-x-2">
            <div className="flex flex-col">
              <label className="mb-1 text-gray-700">ครบกำหนดจ่าย</label>
              <input
                type="text"
                className="border border-gray-600 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="flex flex-col w-full">
            <label className="mb-1 text-gray-700">หมายเหตุ</label>
            <input
              type="text"
              className="border border-gray-600 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className='flex justify-end mt-5'>
            <button className="p-2 rounded-lg w-auto bg-blue-500 text-white">บันทึกข้อมูล</button>
          </div>
        </div>
      </Modal>

    </div>
  );
}

export default Expenses;
