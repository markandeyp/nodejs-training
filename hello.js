const os = require("os");

console.log("Hello from NodeJS");

const hostName = os.hostname();
const user = os.userInfo();

console.log(`HostName: ${hostName}`);
if (os.platform() === "win32") {
  console.log(
    `Welcome ${user.username}. Your homedir is ${user.homedir} and you are on windows`
  );
} else {
  console.log(
    `Welcome ${user.username}. Your homedir is ${user.homedir} and you are using ${user.shell}`
  );
}

if (process.env.NODE_ENV === "development") {
  console.log("You are in development mode");
} else {
  console.log("You are running in production mode");
}
