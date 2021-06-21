import './../style/counter.css'

class Counter {
    counter = 0

    render() {
        let counterElement = document.createElement('span')
        counterElement.innerText = this.counter
        counterElement.className = 'counter'

        setInterval(() => {
            this.counter++
            counterElement.innerText = this.counter
        }, 1000)

        document.querySelector('body').append(counterElement)
    }
}

export { Counter }
