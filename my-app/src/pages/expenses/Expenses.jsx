function Expenses() {
  return (
    <div>
      <div>
        <h1 className="text-center text-3xl font-bold underline">Pages Expenses</h1>
      </div>
      <div className="flex justify-center mt-4">
        <div className="table border border-gray-400 rounded-lg">
          <div className="table-header-group border-b border-gray-400">
            <div className="table-row">
              <div className="table-cell text-center font-bold  w-[80px] border-b border-r border-gray-400">ลำดับ</div>
              <div className="table-cell text-center font-bold  w-[300px] border-b border-r border-gray-400">ชื่อรายการ</div>
              <div className="table-cell text-center font-bold  w-[100px] border-b border-r border-gray-400">รายรับ</div>
              <div className="table-cell text-center font-bold  w-[100px] border-b border-r border-gray-400">รายจ่าย</div>
              <div className="table-cell text-center font-bold  w-[150px] border-b border-r border-gray-400">ประเภท</div>
              <div className="table-cell text-center font-bold  w-[80px] border-b border-r border-gray-400">งวดที่</div>
              <div className="table-cell text-center font-bold  w-[160px] border-b border-r border-gray-400">ครบกำหนดจ่าย</div>
              <div className="table-cell text-center font-bold  w-[150px] border-b border-r border-gray-400">สถานนะ</div>
              <div className="table-cell text-center font-bold  w-[200px] border-b border-gray-400">หมายเหตุ</div>
            </div>
          </div>
          <div className="table-row-group">
            <div className="table-row border-b border-gray-400">
              <div className="table-cell text-center border-b border-r border-gray-400">1</div>
              <div className="table-cell text-center border-b border-r border-gray-400">ค่างวดรถ toyota Ativ 2022</div>
              <div className="table-cell text-center border-b border-r border-gray-400">-</div>
              <div className="table-cell text-center border-b border-r border-gray-400">{parseInt(10190).toLocaleString("th-TH")}</div>
              <div className="table-cell text-center border-b border-r border-gray-400">ยานพาหนะ</div>
              <div className="table-cell text-center border-b border-r border-gray-400">20 / 72</div>
              <div className="table-cell text-center border-b border-r border-gray-400">28/08/2024</div>
              <div className="flex items-center justify-center border-b border-r border-gray-400">
                <div className="text-center rounded-3xl bg-red-500 mt-1 mb-1 w-[90px]">
                  ยังไม่จ่าย
                </div>
              </div>
              <div className="table-cell ml- text-left border-b border-gray-400">ทดสอบ</div>
            </div>
          </div>
          <div className="table-row-group">
            <div className="table-row border-b border-gray-400">
              <div className="table-cell text-center border-r border-gray-400">1</div>
              <div className="table-cell text-center border-r border-gray-400">ค่างวดรถ toyota Ativ 2022</div>
              <div className="table-cell text-center border-r border-gray-400">-</div>
              <div className="table-cell text-center border-r border-gray-400">{parseInt(10190).toLocaleString("th-TH")}</div>
              <div className="table-cell text-center border-r border-gray-400">ยานพาหนะ</div>
              <div className="table-cell text-center border-r border-gray-400">20 / 72</div>
              <div className="table-cell text-center border-r border-gray-400">28/08/2024</div>
              <div className="flex items-center justify-center border-r border-gray-400">
                <div className="text-center rounded-3xl bg-green-600 mt-1 mb-1 w-[90px]">
                  จ่ายแล้ว
                </div>
              </div>
              <div className="table-cell text-center">ทดสอบ</div>
            </div>
          </div>
        </div>

      </div>
      <div>

      </div>
    </div>
  );
}

export default Expenses;
