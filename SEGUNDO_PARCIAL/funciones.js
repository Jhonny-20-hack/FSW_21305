function mostrarEjercicio(id) {
    const secciones = document.querySelectorAll('.ejercicio');
    secciones.forEach(seccion => seccion.classList.add('oculto'));

    const ejercicio = document.getElementById(id);

    let enunciado = '';
    let contenido = '';

    ejercicio.classList.remove('oculto');
    ejercicio.innerHTML = '<h2>Cargando...</h2>';

    // Cargar el contenido específico del ejercicio
    cargarContenido(id);
}

function cargarContenido(id) {
    switch (id) {
        case 'ej1':
            document.getElementById(id).innerHTML = `
            <h2>Ejercicio 1: Salario del profesor</h2>
            <p>Un profesor tiene un salario inicial de $1500, y recibe un incremento de 10 % anual durante 6 años. ¿Cuál es su salario al cabo de 6 años? ¿Qué salario ha recibido en cada uno de los 6 años?</p>
            <button onclick="calcularSalario()">Calcular Salario</button>
            <div id="resultado1"></div>
            `;
            break;

        case 'ej2':
            document.getElementById(id).innerHTML = `
            <h2>Ejercicio 2: Hamburguesas</h2>
            <p>“El náufrago satisfecho” ofrece hamburguesas sencillas (S), dobles (D) y triples (T), las cuales tienen un costo de $20, $25 y $28 respectivamente. La empresa acepta tarjetas de crédito con un cargo de 5 % sobre la compra. Suponiendo que los clientes adquieren N hamburguesas, las cuales pueden ser de diferente tipo, realice un algoritmo para determinar cuánto deben pagar.</p>
            <p>Ingrese cantidades:</p>
            <label>Sencillas: <input type="number" id="s" value="0"></label><br>
            <label>Dobles: <input type="number" id="d" value="0"></label><br>
            <label>Triples: <input type="number" id="t" value="0"></label><br>
            <label>¿Paga con tarjeta? <input type="checkbox" id="tc"></label><br>
            <button onclick="calcularHamburguesas()">Calcular total</button>
            <div id="resultado2"></div>
            `;
            break;

        case 'ej3':
            document.getElementById(id).innerHTML = `
            <h2>Ejercicio 3: Contador de números</h2>
            <p>Se requiere un algoritmo para determinar, de N cantidades, cuántas son cero, cuántas son menores a cero, y cuántas son mayores a cero.</p>
            <textarea id="numeros" placeholder="Escribe los números separados por coma"></textarea><br>
            <button onclick="contarNumeros()">Contar</button>
            <div id="resultado3"></div>
            `;
            break;

        case 'ej4':
            document.getElementById(id).innerHTML = `
            <h2>Ejercicio 4: Contador de focos</h2>
            <p>Una compañía fabrica focos de colores (verdes, blancos y rojos). Se desea contabilizar, de un lote de N focos, el número de focos de cada color que hay en existencia.</p>
            <textarea id="focos" placeholder="Ingrese colores: verde, blanco o rojo separados por coma"></textarea><br>
            <button onclick="contarFocos()">Contar Focos</button>
            <div id="resultado4"></div>
          `;
            break;

        case 'ej5':
            document.getElementById(id).innerHTML = `
            <h2>Ejercicio 5: Ahorro diario</h2>
            <p>Se requiere un algoritmo para determinar cuánto ahorrará en pesos una persona diariamente, y en un año, si ahorra 3¢ el primero de enero, 9¢ el dos de enero, 27¢ el 3 de enero y así sucesivamente todo el año.</p>
            <button onclick="calcularAhorro()">Calcular Ahorro</button>
            <div id="resultado5"></div>
          `;
            break;
    }
}

function calcularSalario() {
    let salario = 1500;
    let totalAcumulado = 0;
    let resultado = "<ul>";
    for (let año = 1; año <= 6; año++) {
        salario *= 1.10;
        resultado += `<li>Año ${año}: $${salario.toFixed(2)}</li>`;
    }
    resultado += `</ul><p><strong>Total acumulado en 6 años:</strong> $${totalAcumulado.toFixed(2)}</p>`;;
    document.getElementById("resultado1").innerHTML = resultado;
}

function calcularHamburguesas() {
    const s = parseInt(document.getElementById('s').value);
    const d = parseInt(document.getElementById('d').value);
    const t = parseInt(document.getElementById('t').value);
    const tc = document.getElementById('tc').checked;
    const resultado = document.getElementById('resultado2');

    if (isNaN(s) || isNaN(d) || isNaN(t) || s < 0 || d < 0 || t < 0) {
        resultado.innerHTML = "<span style='color:red;'>Ingrese cantidades válidas de hamburguesas.</span>";
        return;
    }

    let total = s * 20 + d * 25 + t * 28;
    if (tc) total *= 1.05;

    resultado.innerText = `Total a pagar: $${total.toFixed(2)}`;
}

function contarNumeros() {
    const entrada = document.getElementById('numeros').value.trim();
    const resultado = document.getElementById('resultado3');

    if (entrada === '') {
        resultado.innerText = `Ceros: 0, Positivos: 0, Negativos: 0`;
        return;
    }

    const valores = entrada.split(',');
    let cero = 0, positivos = 0, negativos = 0;
    let hayError = false;

    valores.forEach(n => {
        const num = parseFloat(n.trim());
        if (isNaN(num)) {
            hayError = true;
        } else if (num === 0) {
            cero++;
        } else if (num < 0) {
            negativos++;
        } else {
            positivos++;
        }
    });

    if (hayError) {
        resultado.innerHTML = "<span style='color:red;'>Por favor, ingrese solo números válidos separados por coma.</span>";
    } else {
        resultado.innerText = `Ceros: ${cero}, Positivos: ${positivos}, Negativos: ${negativos}`;
    }
}

function contarFocos() {
    const entrada = document.getElementById('focos').value.trim();
    const resultado = document.getElementById('resultado4');

    if (entrada === '') {
        resultado.innerText = `Verdes: 0, Blancos: 0, Rojos: 0`;
        return;
    }

    const colores = entrada.toLowerCase().split(',');
    let verde = 0, blanco = 0, rojo = 0;
    let hayError = false;

    colores.forEach(color => {
        const c = color.trim();
        if (c === 'verde') verde++;
        else if (c === 'blanco') blanco++;
        else if (c === 'rojo') rojo++;
        else hayError = true;
    });

    if (hayError) {
        resultado.innerHTML = "<span style='color:red;'>Solo se permiten los colores: verde, blanco y rojo (separados por coma).</span>";
    } else {
        resultado.innerText = `Verdes: ${verde}, Blancos: ${blanco}, Rojos: ${rojo}`;
    }
}

function calcularAhorro() {
    let ahorro = 0;
    let monto = 0.03;
    let resultado = "<ul>";
    let ultimoMonto = 0;

    for (let dia = 1; dia <= 365; dia++) {
        ahorro += monto;
        if (dia <= 30) {
            resultado += `<li>Día ${dia}: $${monto.toFixed(2)}</li>`;
        }
        ultimoMonto = monto;
        monto *= 3;
        if (!Number.isFinite(monto)) {
            resultado += `<li>Día ${dia + 1}: valor demasiado alto para calcular</li>`;
            break;
        }
    }

    resultado += `</ul>
        <p><strong>Último monto ahorrado (día ${monto === Infinity ? 364 : 365}):</strong> $${ultimoMonto.toFixed(2)}</p>
        <p><strong>Total ahorrado (estimado):</strong> ${Number.isFinite(ahorro) ? `$${ahorro.toFixed(2)}` : "Demasiado grande para representar con precisión"}</p>`;

    document.getElementById("resultado5").innerHTML = resultado;
}

