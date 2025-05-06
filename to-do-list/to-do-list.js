/*FONCTION DE CLICK POUR CREER UNE TACHE*/
document.getElementById("newTask").addEventListener("click", function(){ //au clic du bouton "newTask"
    //on récupère la valeur de la saisie
    const taskInput = document.getElementById("taskValue").value;

    //on vérifie si la saisie est vide au clic sur le bouton
    if (taskInput === ""){
        alert("Enter a task"); //on affiche une alerte si le champ est vide
        return;
    }

    //on récupère la div ou sera afficher la liste de tâches
    const taskLi = document.getElementById("taskList");

    //on crée un nouvel élément div pour mettre la tâche
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task"); //on affecte une classe à l'élément div
    taskDiv.innerHTML = `<input type="checkbox" class="checkTask">`+ taskInput; //on créer une case à cocher et on ajoute la valeur de la saisie
    taskLi.appendChild(taskDiv); //on rajoute la nouvelle tâche à la div qui affiche la liste

    /*une fois la tâche récupérée, on vide le champ de saisie*/
    document.getElementById("taskValue").value = "";

    /*on ajoute un évènement à la validation d'une checkbox*/
    const checkTaskOk = taskDiv.querySelector(".checkTask"); //on récupère la classe des checkbox
    checkTaskOk.addEventListener("change", function(){ //on ajoute une écoute d'évènement au changement de l'état d'une checkbox
        if (checkTaskOk.checked){
            taskDiv.style.display = "none"; //on fais disparaitre la div qui contient la tâche coché
        }
    });
});

