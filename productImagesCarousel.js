let index = 0;
const minIndex = 0;
const maxIndex = 3;

let Main = document.getElementById("Main");
Main.children[index].classList.toggle("hide");
Active(index);

function next() {
    if (index === maxIndex) {
        return;
    }
    Main.children[index].classList.toggle("hide");
    Inactive(index);
    index++;
    Active(index);
    Main.children[index].classList.toggle("hide");
}

function prev() {
    if (index === minIndex) {
        return;
    }
    Main.children[index].classList.toggle("hide");
    Inactive(index);
    index--;
    Active(index);
    Main.children[index].classList.toggle("hide");
}

function Active(i) {
    let list = document.getElementById("Others").children[i].classList;
    list.remove("inactive");
    list.add("active");
}

function Inactive(i) {
    let list = document.getElementById("Others").children[i].classList;
    list.remove("active");
    list.add("inactive");
}

function OpenImage(i) {
    Main.children[index].classList.toggle("hide");
    Inactive(index);
    index = i;
    Active(index);
    Main.children[index].classList.toggle("hide");
}
