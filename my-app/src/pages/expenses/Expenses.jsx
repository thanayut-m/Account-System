import { useState } from "react";

function Expenses() {
  const [isOpen ,setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }
  
  return (
    <>
      <div className="container mx-auto">
        <div>
          <h1 className="text-center text-3xl font-bold underline">
            Pages Expenses
          </h1>
        </div>
        <div className="grid grid-cols-12 gap-4 mt-3 p-2 bg-[#00ffe0]">
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
        <div className="flex justify-center mt-4">
          <div className="table border border-gray-400 rounded-lg w-full">
            <div className="table-header-group border-b border-gray-400">
              <div className="table-row ">
                <div className="table-cell py-4 text-center font-bold w-[80px] border-b border-r border-gray-400">
                  ลำดับ
                </div>
                <div className="table-cell py-4  text-center font-bold  w-[300px] border-b border-r border-gray-400">
                  ชื่อรายการ
                </div>
                <div className="table-cell py-4  text-center font-bold  w-[100px] border-b border-r border-gray-400">
                  รายรับ
                </div>
                <div className="table-cell py-4  text-center font-bold  w-[100px] border-b border-r border-gray-400">
                  รายจ่าย
                </div>
                <div className="table-cell py-4  text-center font-bold  w-[150px] border-b border-r border-gray-400">
                  ประเภท
                </div>
                <div className="table-cell py-4  text-center font-bold  w-[80px] border-b border-r border-gray-400">
                  งวดที่
                </div>
                <div className="table-cell py-4  text-center font-bold  w-[160px] border-b border-r border-gray-400">
                  ครบกำหนดจ่าย
                </div>
                <div className="table-cell py-4  text-center font-bold  w-[150px] border-b border-r border-gray-400">
                  สถานนะ
                </div>
                <div className="table-cell py-4  text-center font-bold  w-[200px] border-b border-gray-400">
                  หมายเหตุ
                </div>
              </div>
            </div>
            <div className="table-row-group">
              <div className="table-row border-b border-gray-400">
                <div className="table-cell text-center border-b border-r border-gray-400">
                  1
                </div>
                <div className="table-cell text-center border-b border-r border-gray-400">
                  ค่างวดรถ toyota Ativ 2022
                </div>
                <div className="table-cell text-center border-b border-r border-gray-400">
                  -
                </div>
                <div className="table-cell text-center border-b border-r border-gray-400">
                  {parseInt(10190).toLocaleString("th-TH")}
                </div>
                <div className="table-cell text-center border-b border-r border-gray-400">
                  ยานพาหนะ
                </div>
                <div className="table-cell text-center border-b border-r border-gray-400">
                  20 / 72
                </div>
                <div className="table-cell text-center border-b border-r border-gray-400">
                  28/08/2024
                </div>
                <div className="flex items-center justify-center border-b border-r border-gray-400">
                  <div className="text-center rounded-3xl bg-red-500 mt-1 mb-1 w-[90px]">
                    ยังไม่จ่าย
                  </div>
                </div>
                <div className="table-cell text-left border-b border-gray-400">
                  <div className="ml-1">ทดสอบ</div>
                </div>
              </div>
            </div>
            <div className="table-row-group">
              <div className="table-row border-b border-gray-400">
                <div className="table-cell text-center border-r border-gray-400">
                  2
                </div>
                <div className="table-cell text-center border-r border-gray-400">
                  ค่างวดรถ toyota Ativ 2022
                </div>
                <div className="table-cell text-center border-r border-gray-400">
                  -
                </div>
                <div className="table-cell text-center border-r border-gray-400">
                  {parseInt(10190).toLocaleString("th-TH")}
                </div>
                <div className="table-cell text-center border-r border-gray-400">
                  ยานพาหนะ
                </div>
                <div className="table-cell text-center border-r border-gray-400">
                  20 / 72
                </div>
                <div className="table-cell text-center border-r border-gray-400">
                  28/08/2024
                </div>
                <div className="flex items-center justify-center border-r border-gray-400">
                  <div className="text-center rounded-3xl bg-green-600 mt-1 mb-1 w-[90px]">
                    จ่ายแล้ว
                  </div>
                </div>
                <div className="table-cell text-left">
                  <div className="ml-1">ทดสอบ</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Expenses;
