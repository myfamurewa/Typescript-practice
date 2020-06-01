console.log('hello world')

interface Person {
    first: string;
    last: string;
    [key: string]: any
}
//strong typing an object
const person = {
    first: "jeff",
    last: 'Delaney'
}

const person2 = {
    first: 'Usain',
    last: 'Bolt',
    fat: true
}
//strong typing a function
function pow(x: number , y: number ): string {
    return Math.pow(x, y).toString();
}
// use void for a function that doesn't return anything
//strong typing an array

const arr: number = []

arr.push(1)
arr.push(34)

//Multi typed array

type MyList = [number, string?, boolean?]