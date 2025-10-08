let container = document.querySelector(".container");
container.style.display = "flex";
container.style.flexDirection = "column";

editSquare(16);


function deleteOldContainer() {

    container.innerHTML = "";
}

function editSquare(num) {

    for (let i = 0; i < num; i++) {
        const row = document.createElement("div");
        row.style.display = "flex";
        const squareSize = 400 / num;

        for (let j = 0; j < num; j++) {
            const square = document.createElement("div");
            square.style.boxSizing = "border-box";
            square.style.width = `${squareSize}px`;
            square.style.height = `${squareSize}px`;
            square.style.border = "2px solid black";
            row.appendChild(square);
            square.addEventListener('mouseenter', () => {
                console.log("Hover")

                if (square.style.backgroundColor === "") {
                    let rand = Math.floor(Math.random() * 3) + 1;
                    if (rand == 1) {
                        square.style.backgroundColor = "blue";
                    }
                    else if (rand == 2) {
                        square.style.backgroundColor = "red";
                    }
                    else {
                        square.style.backgroundColor = "green";
                    }

                }



            });

        }
        container.appendChild(row);
    }
}

const changeButton = document.querySelector("#changeButton");
changeButton.addEventListener('click', () => {

    const numSqaures = document.getElementById("numSquares").value;
    console.log(numSqaures);
    if (numSqaures > 50 || numSqaures < 10) alert("Number must be between 10 and 100, re-enter number");

    if (numSqaures <= 50 && numSqaures >= 10) {
        deleteOldContainer();
        editSquare(numSqaures);
    }
});


