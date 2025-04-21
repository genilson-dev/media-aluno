const MediaAluno = (n1, n2) => {
    const media = (n1 + n2) / 2;
    if (media >= 7) {
        return "Aprovado";
    } else if (media >= 5) {
        return "Recuperação";
    } else {
        return "Reprovado";
    }   

}

const resul = MediaAluno(2, 8);
console.log(resul); // Aprovado
