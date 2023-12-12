let count = 0;

const fun = () => {
  setTimeout(() => {
    console.log(count);
    count++;
    fun();
  }, 1000);
};

fun();
