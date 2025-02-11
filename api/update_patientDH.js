import http from 'k6/http';

export  function update_patientDH(cid) {
  const id = cid + "" + __VU+""+__ITER;
  //console.log(id);
  const url = 'https://dev-thailandhealthatlas.buddy-care.org/backend/api/v1/health/update/patientDH';
  const params = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer YZJHNDYYMTUTMZM5ZI0ZZTRLLTG1NZGTN2QWZJAXYTDLMTFK',
    },
    timeout: 120000, // 10 minutes in milliseconds
  };

  const payload = JSON.stringify({
    batch: 1,
    transaction: [
      {
        category_groups: '08',
        category_groups_name: 'ผู้ป่วยเรื้อรัง',
        diseases: 'ความดันโลหิตสูง',
        hcode: '03838',
        pid: '007381',
        transaction_uid: ''+id,
        method_type: 'insert',
        onset_date: '2024-01-02',
        home: {
          a_control: '',
          ampur: '21',
          b_control: '',
          changwat: '10',
          chemical: '',
          cleanliness: '',
          condo: '',
          d_update: '20120907033523',
          durability: '',
          garbage: '',
          head_id: '',
          hid: '141',
          hosp_code: '03838',
          house: '',
          house_id: '12345',
          house_type: '',
          housing: '',
          latitude: '18.847719',
          light: '',
          loca_type: '',
          longitude: '13.845555',
          m_food: '',
          n_family: '',
          out_date: '00010101',
          road: '',
          room_no: '',
          soi_main: '',
          soi_sub: '',
          tambon: '05',
          telephone: '0634545654',
          toilet: '',
          updatelocation: '1',
          ventilation: '',
          vhv_id: '',
          villa_name: 'TestVil',
          village: '12',
          villcode: '01010100',
          water: '',
          water_tm: '',
          water_type: ''
        },
        person: {
          abogroup: '9',
          birth: '20050126',
          cid: '1209601456267',
          couple: '',
          d_update: '20230608085003',
          ddischarge: '00010101',
          discharge: '9',
          education: '02',
          father: '',
          fstatus: '2',
          hid: '141',
          hn: '0007381',
          labor: '',
          lname: 'ขันเงิน',
          mobile: '',
          moccupation_new: '900',
          moccupation_old: '900',
          mother: '',
          movein: '20050307',
          mstatus: '1',
          name: 'พีรพัฒน์',
          nation: '099',
          passport: '',
          prename: 'นาย',
          race: '099',
          religion: '01',
          rhgroup: '',
          sex: '1',
          telephone: '09345554245',
          typearea: '',
          vstatus: '5'
        }
      }
    ]
  });

  const res = http.post(url, payload, params);

  console.log('Response:', res.body);
  return res
}