$(document).ready(function () {
    function isNumeric(value) {
      return !isNaN(value) && value.trim() !== "";
    }
  
    $("#input1, #input2").on("input", function () {
      const input1 = $("#input1").val();
      const input2 = $("#input2").val();
  
      // Limpiar el resultado anterior
      $("#resultado").text("");
  
      if (isNumeric(input1) && isNumeric(input2)) {
        const suma = parseFloat(input1) + parseFloat(input2);
        $("#resultado").text(`La suma de los números es: ${suma}`);
      }
    });
  });
  