import http from 'k6/http';

// โหลดไฟล์ JSON ทั้งหมดใน init stage
const files = [
  JSON.parse(open('../file/file1.json')),
  JSON.parse(open('../file/file2.json')),
  JSON.parse(open('../file/file3.json')),
  JSON.parse(open('../file/file4.json')),
  JSON.parse(open('../file/file5.json')),
  JSON.parse(open('../file/file6.json')),
  JSON.parse(open('../file/file7.json')),
  JSON.parse(open('../file/file8.json')),
  JSON.parse(open('../file/file9.json')),
  JSON.parse(open('../file/file10.json')),
  JSON.parse(open('../file/file11.json')),
  JSON.parse(open('../file/file12.json')),
  JSON.parse(open('../file/file13.json')),
  JSON.parse(open('../file/file14.json')),
  JSON.parse(open('../file/file15.json')),
  JSON.parse(open('../file/file16.json')),
  JSON.parse(open('../file/file17.json')),
  JSON.parse(open('../file/file18.json')),
  JSON.parse(open('../file/file19.json')),
  JSON.parse(open('../file/file20.json'))
];


export function databridge_patientDH() {
  // เลือกไฟล์ตาม iteration เพื่อไม่ให้ซ้ำกัน
  const jsonData = files[__VU-1 % files.length];
  //console.log(__VU-1 % files.length);
  const url = 'https://dev-thailandhealthatlas.buddy-care.org/backend/api/databridge/v1/databridge/patientDH';
  const params = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer NGE4NZNLMJETY2Q1YI0ZZGY1LTLLOWUTNGMWNWEZMDBKNTFL',
    },
    timeout: 300000, // 5 นาที
  };

  const payload = JSON.stringify(jsonData);
  const res = http.post(url, payload, params);

  //console.log(res.body);
  return res;
}
