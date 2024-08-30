import { useState } from "react";

function Expenses() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

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
              {/* <button
                type="button"
                class="inline-flex justify-start w-full rounded-lg border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
              >
                ประเภท
                <svg
                  class="-mr-1 ml-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06 0l2.72 2.72 2.72-2.72a.75.75 0 111.06 1.06l-3.25 3.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 010-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button> */}
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
            <button className="p-2 rounded-lg w-[300px] bg-blue-500 bg-blue-500">
              <i class="fa fa-plus mr-2"/>
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
                  <div className="text-start">ค่างวดรถ toyota Ativ 2022</div>
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
                  <div className="text-start">ค่างวดรถ toyota Ativ 2022</div>
                </td>
                <td className="border-r-2 border-Gray-600 px-4">-</td>
                <td className="border-r-2 border-Gray-600 px-4">
                  {parseInt(10190).toLocaleString("th-TH")}
                </td>

                <td className="border-r-2 border-Gray-600 px-4">ยานพาหนะ</td>
                <td className="border-r-2 border-Gray-600 px-4">KTC</td>
                <td className="border-r-2 border-Gray-600 px-4">28/08/2024</td>
                <td className="border-r-2 border-Gray-600 px-4">
                  <div className="text-center rounded-3xl bg-red-500 mt-1 mb-1 w-[90px]">
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
    </div>
  );
}

export default Expenses;
