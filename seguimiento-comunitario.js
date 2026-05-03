let semana = 1
const semanasDeSeguimiento = 9
let propuestasAtendidas = 0

console.log("Seguimiento comunitario semanal")

while (semana <= semanasDeSeguimiento) {
    console.log("Semana de seguimiento número:", semana)
    propuestasAtendidas = propuestasAtendidas + 2
    console.log("Porpuestas atendidas hasta ahora:", propuestasAtendidas)
    semana = semana + 1
}
console.log("Seguimiento comunitario finalizado.")
console.log("Total de propuestas atendidas:", propuestasAtendidas)
