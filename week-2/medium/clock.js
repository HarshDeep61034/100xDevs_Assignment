let hh;
let mm;
let ss;
let time;
setInterval(() => {
  let dt = new Date();
  hh = dt.getHours();
  mm = dt.getMinutes();
  ss = dt.getSeconds();
  if (hh >= 12) {
    time = "PM";
    hh = hh - 12;
  } else {
    time = "AM";
  }
  console.log(`${hh}:${mm}::${ss} ${time}`);
}, 1000);
