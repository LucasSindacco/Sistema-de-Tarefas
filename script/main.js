const assignment_arr = [];

function addAssignment() {
    const btnAdd = document.querySelector('.btn-add');
    btnAdd.addEventListener('click', () => {
        addElements();
    })
}

function removeAssignment() {
    const btnRemove = document.querySelector('.btn-remove');
    btnRemove.addEventListener('click', () => {
        removeElements();
    });
}

function addElements() {
    if (validateInput() == "") {
        modalError();
    } else {
        viewTextElement();
        modalAccept();
    }
}

function validateInput() {
    const inputValue = document.querySelectorAll('.add-assignment');
    return inputValue[0].value;
}

function nodeTextAssignment() {
    return document.createTextNode(validateInput());
}

function viewTextElement() {
    const assignment = document.createElement("p");
    assignment.appendChild(nodeTextAssignment());
    const element = document.querySelector(".assignment");
    const inputsObj = document.querySelectorAll('.add-assignment');
    const obj = {
        name: inputsObj[0].value,
        type: inputsObj[1].value,
        date: inputsObj[2].value,
        details: inputsObj[3].value,
    }
    assignment_arr.push(obj);
    assignment.addEventListener('click', function() {
        for (let i = 0; i < assignment_arr.length; i++) {
            if (assignment) {
                document.querySelector('#assignment-name').textContent = `Nome da tarefa: ${obj.name}`;
                document.querySelector('#assignment-type').textContent = `Tipo da tarefa: ${obj.type}`;
                document.querySelector('#assignment-date').textContent = `Término da tarefa: ${obj.date}`;
                document.querySelector('#assignment-details').textContent = `Detalhes da tarefa: ${obj.details}`;
            }
        }
    })
    return element.appendChild(assignment);
}

function removeElements() {
    var inputRemove = document.querySelector('.remove-assignment').value;
    inputRemove = inputRemove.toLowerCase();
    const element = document.querySelector(".assignment");
    for (let i = 0; i < element.childNodes.length; i++) {
        const assignments = element.childNodes[i];
        if (!assignments) {
            continue;
        }
        if (inputRemove == assignments.textContent.toLowerCase()) {
            assignments.remove();
            break;
        }
    }
}

function modalAccept() {
    const boxModal = document.querySelector('.modal-add');
    boxModal.classList.add('active');
    setTimeout(function() {
        boxModal.classList.remove('active');
    }, 2000)
}

function modalError() {
    const boxModal = document.querySelector('.modal-add');
    const textModal = document.querySelector('.modal-add h1');
    boxModal.classList.add('error');
    textModal.textContent = 'Insira alguma atividade';
    setTimeout(function() {
        boxModal.classList.remove('error');
    }, 2000)
}

addAssignment();
removeAssignment();