document.getElementById("btnPrev").onclick = () => {
  if (idx > 0) {
    idx--;
    save();
    render();
  } else {
    showMsg("Udah di soal pertama", false, true);
  }
};
