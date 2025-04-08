body {
  font-family: 'Segoe UI', sans-serif;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  color: white;
}

.container {
  text-align: center;
}

.judul {
  font-size: 24px;
  margin-bottom: 20px;
  color: #fff;
}

.kalkulator {
  background: #1c1c1c;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 0 20px rgba(0,0,0,0.5);
  width: 280px;
}

.layar {
  width: 100%;
  height: 60px;
  font-size: 28px;
  background: #000;
  color: #fff;
  text-align: right;
  padding: 15px;
  border: none;
  border-radius: 10px;
  margin-bottom: 20px;
}

.tombol {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

button {
  padding: 20px;
  font-size: 18px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  background: #333;
  color: white;
  transition: 0.2s;
}

button:hover {
  background: #444;
}

button.operator {
  background-color: #f57c00;
  color: white;
}

button.operator:hover {
  background-color: #ef6c00;
}

button.clear {
  background-color: #d32f2f;
}

button.clear:hover {
  background-color: #c62828;
}

button.nol {
  grid-column: span 2;
}
