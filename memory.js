const { totalmem, freemem, EOL } = require("os");
const totalMemory = totalmem();

function bytesToMb(bytes) {
  if (!bytes) {
    throw new Error(`Invalid value for bytes ${bytes}`);
  }

  const kb = bytes / 1024;
  const mb = kb / 1024;

  return mb.toFixed(0);
}

function getMemoryUsage() {
  const freeMemory = bytesToMb(freemem());
  return {
    total: totalMemory,
    used: totalMemory - freeMemory,
    free: freeMemory,
  };
}

setInterval(function () {
  const memoryUsage = getMemoryUsage();
  console.log(
    `Total: ${memoryUsage.total}Mb ${EOL}Used: ${memoryUsage.used}Mb ${EOL}Free: ${memoryUsage.free}Mb`
  );
}, 10000);
