// Mengubah teks heading <h1> setelah halaman dimuat
window.onload = function() {
    document.querySelector('h1').innerText = "Latihan JavaScript Selesai";
}

// Deklarasi variabel
let name = "John";
const age = 30;

    // Menampilkan nama dan umur di dalam div dengan ID "output"
    let outputDiv = document.getElementById('output');
    outputDiv.innerHTML ;

    // Membuat array fruits dan menampilkannya dengan perulangan for
    let fruits = ["Apple", "Banana", "Mango"];
    console.log("Daftar buah-buahan:");
    for (let i = 0; i < fruits.length; i++) {
        console.log((i + 1) + ". " + fruits[i]);
    }

    // Membuat objek person dan menampilkan properti firstName dan lastName
    let person = {
        firstName: "John",
        lastName: "Doe",
        age: 30
    };
    outputDiv.innerHTML += `Nama: ${person.firstName} ${person.lastName}<br><br>`;

    // Membaca nilai dari input dan melakukan pemeriksaan
    let userInput = document.getElementById('userInput').value;
    let inputValue = parseInt(userInput);

    if (inputValue > 10) {
        outputDiv.innerHTML += "Nilai lebih besar dari 10<br>";
    } else if (inputValue === 10) {
        outputDiv.innerHTML += "Nilai sama dengan 10<br>";
    } else {
        outputDiv.innerHTML += "Nilai kurang dari 10<br>";
    }

    // Menampilkan angka 1 hingga nilai yang dimasukkan pengguna
    outputDiv.innerHTML += "Angka dari 1 hingga " + inputValue + ":<br>";
    for (let i = 1; i <= inputValue; i++) {
        outputDiv.innerHTML += i + " ";
    }
    // Fungsi greet
    function greet(name) {
        return `Hello, ${name}`;
    }

    // Fungsi calculateSquare
    function calculateSquare(number) {
        return number * number;
    }

    // Arrow function untuk menjumlahkan dua angka
    const sum = (a, b) => a + b;

    // Menampilkan hasil fungsi-fungsi di div "output"
    outputDiv.innerHTML += `<br>Hasil fungsi greet: ${greet("Alice")}, ${greet("Bob")}<br>`;
    outputDiv.innerHTML += `Hasil fungsi calculateSquare: ${calculateSquare(4)}, ${calculateSquare(7)}<br>`;
    outputDiv.innerHTML += `Hasil fungsi sum: ${sum(3, 5)}<br>`;

    // Menambahkan array students
    let students = ["Alice", "Bob", "Charlie"];
    students.push("David");

    outputDiv.innerHTML += "<br>Daftar Siswa:<br>";
    students.forEach((student, index) => {
        outputDiv.innerHTML += `${index + 1}. ${student}<br>`;
    });

    // Membuat objek car
    let car = {brand: "Toyota", model: "Corolla", year: 2020};

    outputDiv.innerHTML += "<br>Properti Mobil:<br>";
    for (let prop in car) {
        outputDiv.innerHTML += `${prop}: ${car[prop]}<br>`;
    }

    // Membuat array objek cars
    let cars = [
        {brand: "Honda", model: "Civic", year: 2019},
        {brand: "Ford", model: "Mustang", year: 2021},
        {brand: "Nissan", model: "Altima", year: 2018}
    ];

    outputDiv.innerHTML += "<br>Daftar Mobil:<br>";
    cars.forEach((car, index) => {
        outputDiv.innerHTML += `${index + 1}. ${car.brand} ${car.model} (${car.year})<br>`;
    });