document.querySelector("#data_belanja button").onclick = function () {
  var kode = document.querySelector("#kode").value;
  var qty = document.querySelector("#qty").value;
  var uang = document.querySelector("#duid").value;

  if (kode.length === 0 && qty.length === 0) {
    alert("wajib diiisi semua");
  } else {
    if (kode == "001") {
      var total = qty * 10000;
      alert(total);
      if (uang > total) {
        alert("uang kembalian");
        alert(uang - total);
      } else {
        alert("uang tidak cukup");
      }
    } else if (kode == "002") {
      var total = qty * 20000;
      alert(total);
      if (uang > total) {
        alert("uang kembalian");
        alert(uang - total);
      } else {
        alert("uang tidak cukup");
      }
    } else if (kode == "003") {
      var total = qty * 30000;
      alert(total);
      if (uang > total) {
        alert("uang kembalian");
        alert(uang - total);
      } else {
        alert("uang tidak cukup");
      }
    }
  }
};
