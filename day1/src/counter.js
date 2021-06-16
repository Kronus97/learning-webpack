function addCounter() {
    let counter = 0;
    let counterElement = document.createElement("span");
    counterElement.innerText = counter;
    counterElement.className = "counter";

    setInterval(function() {
        counter++;
        counterElement.innerText = counter;
    }, 1000)

    document.getElementsByTagName("body")[0].append(counterElement);
}