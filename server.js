
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log(`Microservices rock! and ${process.env.DOCKER_USERNAME} is loving it`);
    await sleep(5000);
  }
}

main();
