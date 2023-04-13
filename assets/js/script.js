const formulario = document.querySelector("#form");
const resultArea = document.querySelector("#result");

// Função geral
function sendForm(e) {
  e.preventDefault();

  const cpf = document.querySelector("#cpf").value;
  let cpfClean;
  let cpfArray = [];

  function cpfForArray() {
    cpfClean = cpf.replace(/\D+/g, "");

    cpfArray = Array.from(cpfClean);
    // console.log(separateCpf);
    // console.log(cpfArray);
  }

  function numbersCpfCalculator() {
    let separateCpf = cpfArray.slice(0, 9);
    let firstNumberCpf;
    let count = 10;
    let result = 0;
    let sumCpf = 0;
    // console.log(`como chega: ${separateCpf}`);

    for (i of separateCpf) {
      sumCpf = i * count;
      result += sumCpf;
      --count;
      // console.log(result);
    }

    comparateCpf = 11 - (result % 11);
    // console.log(`first Number: ${comparateCpf}`);

    // Comparações
    // console.log(
    //   typeof firstNumberCpf,
    //   typeof Number(cpfArray[cpfArray.length - 2])
    // );

    if (comparateCpf > 9) {
      comparateCpf = 0;

      if (comparateCpf === Number(cpfArray[cpfArray.length - 2])) {
        // console.log("cheguei");
        count = 11;
        result = 0;
        separateCpf = cpfArray.slice(0, 10);
        for (i of separateCpf) {
          sumCpf = i * count;
          result += sumCpf;
          --count;
          // console.log(result);
        }
        if (comparateCpf > 9) {
          comparateCpf = 11 - (result % 11);
          // console.log("cheguei no if");
          // console.log(
          //   `ComparateCpf = ${comparateCpf}, e o cpfArray = ${
          //     cpfArray[cpfArray.length - 1]
          //   }`
          // );
          if (comparateCpf === Number(cpfArray[cpfArray.length - 1])) {
            // console.log("Cheguei aqui2");

            resultArea.innerHTML = "Seu CPF é válido";
          }
        } else {
          comparateCpf = 11 - (result % 11);
          // console.log("cheguei no if");
          // console.log(
          //   `ComparateCpf = ${comparateCpf}, e o cpfArray = ${
          //     cpfArray[cpfArray.length - 1]
          //   }`
          // );
          if (comparateCpf === Number(cpfArray[cpfArray.length - 1])) {
            // console.log("Cheguei aqui2");

            resultArea.innerHTML = "Seu CPF é válido";
          }
        }
      } else resultArea.innerHTML = "Seu CPF é inválido";
      // console.log(cpfArray[cpfArray.length - 2]);
    } else {
      if (comparateCpf === Number(cpfArray[cpfArray.length - 2])) {
        // console.log("cheguei");
        count = 11;
        result = 0;
        separateCpf = cpfArray.slice(0, 10);
        for (i of separateCpf) {
          sumCpf = i * count;
          result += sumCpf;
          --count;
          console.log(result);
        }
        if (comparateCpf > 9) {
        } else {
          comparateCpf = 11 - (result % 11);
          // console.log("cheguei no if");
          // console.log(
          //   `ComparateCpf = ${comparateCpf}, e o cpfArray = ${
          //     cpfArray[cpfArray.length - 1]
          //   }`
          // );
          if (comparateCpf === Number(cpfArray[cpfArray.length - 1])) {
            // console.log("Cheguei aqui2");

            resultArea.innerHTML = "Seu CPF é válido";
          }
        }
      } else resultArea.innerHTML = "Seu CPF é inválido";
    }
  }

  cpfForArray();
  numbersCpfCalculator();
}

formulario.addEventListener("submit", sendForm);
