//=============================== import API =================================
import { sleep } from 'k6';

import { error_check } from '../check/check.js';
import { cleardata } from '../gafana/cleardata.js';
import { scenario } from 'k6/execution';

//import { update_patientDH } from '../api/update_patientDH.js';
import { update_patientDH_batch } from '../api/update_patientDH_batch.js';
import { databridge_patientDH } from '../api/databridge_patientDH.js';


//============================================================================

export default function () {    //เรียกใช้ API ใน export default function
  //response = update_patientDH(cid);
  //response = update_patientDH_batch();
  response = databridge_patientDH()
  error_check(response);
  sleep(1)
}











































































const cid = __ENV.cid || "1";
const id = __ENV.id || "1";
const projectname = __ENV.projectname || "1";
const user = __ENV.user || "1";
const durationx = __ENV.durationx || "1";
let response ;
const scenariox= __ENV.scenariox || "1";
let options;
const vusx = Math.ceil(user / durationx);
if(scenariox==1){
  options = {
    http: {
      timeout: '2s' 
    },
    insecureSkipTLSVerify: true,
      discardResponseBodies: true,
      scenarios: {
        contacts: {
          executor: 'per-vu-iterations',
          vus: vusx,
          iterations: durationx,
          maxDuration: '10m',
          gracefulStop: '120s',
        },
      },
    };
}
else if(scenariox==2){
  options = {
    http: {
      timeout: '300s' 
    },
    insecureSkipTLSVerify: true,
    vus: user, 
    duration: durationx+'s',
    gracefulStop: '120s',
  };
}
else if(scenariox==3){
  options = {
    http: {
      timeout: '300s' 
    },
    insecureSkipTLSVerify: true,
    scenarios: {
      example_scenario: {
        executor: 'constant-arrival-rate',
        // rate: user,
        // timeUnit: durationx+'s',
        rate: vusx,
        timeUnit: '1s',
        preAllocatedVUs: user,
        duration: durationx+'s', // ระบุระยะเวลาที่ต้องการให้ทดสอบ
        gracefulStop: '120s',
      },
    },
  };
}
else{
  options = {
    insecureSkipTLSVerify: true,
    discardResponseBodies: true,
    scenarios: {
      contacts: {
        executor: 'per-vu-iterations',
        vus: vusx,
        iterations: durationx,
        maxDuration: '10m',
      },
    },
  };
}
export { options };