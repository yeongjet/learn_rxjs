import { interval } from 'rxjs'

console.log('start')
interval(2000).subscribe(x => console.log(x)) // start之后不会立刻输出，而是过了2s之后才开始输出0