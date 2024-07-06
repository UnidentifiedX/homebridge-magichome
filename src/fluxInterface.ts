import { exec } from 'child_process';

export function getMACAddress(ip: string) {
  let mac: string;

  exec(`flux_led ${ip} -i`, (error, stdout, stderr) => {
    if (error) {
      (`exec error: ${error}`);
      return;
    }
    if (stderr) {
      (`stderr: ${stderr}`);
      return;
    }

    mac = stdout.split('MAC: ')[1].split(' ')[0];
    return mac;
  });
}