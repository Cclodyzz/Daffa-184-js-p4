const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let expression = ""; // Variabel untuk menyimpan ekspresi matematika yang sedang diinput

const calculate = (btnValue) => {
    display.focus();
    if (btnValue === "=" && expression !== "") {
        let result;
        try {
            result = eval(expression.replace("%", "/100"));
            expression = result.toString(); // Simpan hasil evaluasi ke dalam ekspresi untuk digunakan kembali
        } catch (error) {
            result = "Error";
            expression = "";
        }
        display.value = result; // Tampilkan hasil evaluasi
    } else if (btnValue === "AC") {
        expression = "";
        display.value = ""; // Hapus tampilan pada display saat tombol AC ditekan
    } else if (btnValue === "DEL") {
        expression = expression.toString().slice(0, -1);
        display.value = expression; // Perbarui tampilan display setelah menghapus satu karakter
    } else {
        if (btnValue === "=") return; // Tidak lakukan apa-apa jika tombol "=" ditekan lebih dari satu kali
        expression += btnValue; // Tambahkan angka atau operator ke dalam ekspresi
        display.value = expression; // Perbarui tampilan display setelah menambahkan angka atau operator
    }
};

buttons.forEach((button) =>
    button.addEventListener("click", (e) => calculate(e.target.dataset.value))
);
