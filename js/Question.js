class Question {
    constructor(enonce,reponses, reponseCorrecte){
        this.enonce = enonce;
        this.reponses = reponses;
        this.reponseCorrecte = reponseCorrecte;
    }
    afficher() {
        const $enonce= document.getElementById("enonce");
        $enonce.innerText = `${this.enonce} `
        
        const $proposition = document.getElementById("proposition");
        $proposition.innerHTML = "";

        this.reponses.forEach((reponse, index) =>  {
        const radioPropostion = document.createElement('input');
        radioPropostion.type = "radio";
        radioPropostion.name = "proposition";
        radioPropostion.value = index;
        
        
        const label = document.createElement("label");
        label.innerText = reponse;

        $proposition.appendChild(radioPropostion);
        $proposition.appendChild(label);
    })
    }
}

export default Question