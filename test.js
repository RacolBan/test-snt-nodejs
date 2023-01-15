
const fn = (delay = 0) => {
  return new Promise((resolve, reject) => {
    let time = new Date();
    setTimeout(() => {
      if (time.getMilliseconds() % 2 === 0) {
        resolve(true);
      } else {
        reject(false);
      }
    }, delay)
  });
}

const retry = async (cb, delay = 0, c = {max: 0}) => {
  if(c.max === 0 ) {
    let result;
    while(true) {
      try {
        result = await cb(delay);
        console.log(result);
        break;
      } catch(error) {
        console.log(error);
      }
    };
    return result;
  } else {
    let result;
    for(let i = 1; i <= c.max; i++ ) {
      try{
        result = await cb(delay);
        console.log(result);
        break;
      } catch (error) {
        console.log(error)
      }
    }
    return result;
  };
};
const c = retry(fn, 1000, {max: 4})
console.log(c);




