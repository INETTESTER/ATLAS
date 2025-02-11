import http from 'k6/http';

export function cleardata(projectname) {
    const url = 'http://10.0.0.10:3333/ClearData';
    //const response = http.post(url, '');
    const payload={
        projectname: projectname
    }
    const params = {
        headers: {
          'Content-Type': 'application/json',
        },
    };
    const response = http.post(url, JSON.stringify(payload), params);
    // ตรวจสอบการส่งคำขอ HTTP และการตอบสนองที่ได้
    if (response.status === 201) {
        console.log('รีเซ็ตข้อมูลเรียบร้อยแล้ว');
    } else {
        console.error('เกิดข้อผิดพลาดในการรีเซ็ตข้อมูล');
    }
}
