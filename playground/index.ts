import * as helper from "../src";

(async () => {
  console.log("** started **\n\n");
  console.time("s");
  new helper.Timeline("20210308T110000.000Z", "20210308T220000.000Z")
    .onStart(() => {
      console.log("started", helper.Dates.dime());
    })
    .onUpdate((p) => console.log(p))
    .start();
  // console.log(helper.Dates.timealterBy("20210301T00000.000Z", 7));
  // console.log(helper.Dates.beautify("20210301T190400.000Z", "ISO"));
  console.timeEnd("s");
  console.log("\n\n** ended **");
})();
