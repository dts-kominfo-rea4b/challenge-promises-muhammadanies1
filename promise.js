const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  try {
    const theater1 = await promiseTheaterIXX();
    const theater2 = await promiseTheaterVGC();
    const allTheater = [...theater1, ...theater2];

    const arrEmosi = allTheater.filter((el) => el.hasil === emosi);
    let jmlEmosi = `${emosi} : ${arrEmosi.length}`;

    return jmlEmosi;
  } catch(err){
    console.log(err);
  }

}

module.exports = {
  promiseOutput,
};
