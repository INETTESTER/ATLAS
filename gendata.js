const fs = require('fs');
const crypto = require('crypto');

// ตัวแปรสำหรับกำหนดจำนวนไฟล์และจำนวนธุรกรรมต่อไฟล์
const numberOfFiles = 15; // จำนวนไฟล์ที่ต้องการสร้าง
const transactionsPerFile = 1; // จำนวนธุรกรรมต่อไฟล์

function generateUniqueTransactionUID() {
    return crypto.randomUUID(); // สร้าง UID ที่ไม่ซ้ำกัน
}

function createTransactionData(batch, transactionsCount) {
    const data = {
        batch: batch,
        transaction: []
    };

    for (let i = 0; i < transactionsCount; i++) {
        const transaction = {
            category_groups: "08",
            category_groups_name: "ผู้ป่วยเรื้อรัง",
            diseases: "ความดันโลหิตสูง",
            hcode: "03838",
            pid: `00738${i + 1}`,
            transaction_uid: generateUniqueTransactionUID(),
            method_type: "insert",
            onset_date: "2024-01-02",
            home: {
                ampur: "21",
                changwat: "10",
                d_update: "20120907033523",
                hid: "141",
                hosp_code: "03838",
                house_id: "12345",
                latitude: "18.847719",
                longitude: "13.845555",
                out_date: "00010101",
                tambon: "05",
                telephone: "0634545654",
                updatelocation: "1",
                villa_name: "TestVil",
                village: "12",
                villcode: "01010100"
            },
            person: {
                abogroup: "9",
                birth: "20050126",
                cid: `12096014562${67 + i}`,
                d_update: "20230608085003",
                discharge: "9",
                education: "02",
                hid: "141",
                hn: `000738${i + 1}`,
                lname: "ขันเงิน",
                moccupation_new: "900",
                moccupation_old: "900",
                movein: "20050307",
                mstatus: "1",
                name: `พีรพัฒน์${i + 1}`,
                nation: "099",
                prename: "นาย",
                race: "099",
                religion: "01",
                sex: "1",
                telephone: "09345554245",
                vstatus: "5"
            }
        };

        data.transaction.push(transaction);
    }

    return data;
}

const outputDir = 'C:/Users/Administrator/Desktop/2025/atlas/Atlas/file/';

for (let fileIndex = 1; fileIndex <= numberOfFiles; fileIndex++) {
    const batch = fileIndex;
    const fileName = `file${batch}.json`; // ใช้เลขลำดับเพื่อป้องกันชื่อซ้ำ
    const outputPath = outputDir + fileName;

    const jsonData = createTransactionData(batch, transactionsPerFile);

    fs.writeFileSync(outputPath, JSON.stringify(jsonData, null, 2));
    console.log(`ไฟล์ ${fileName} ถูกสร้างเรียบร้อยแล้วที่ ${outputPath}!`);
}
