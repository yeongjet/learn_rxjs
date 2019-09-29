import { interval, from } from 'rxjs'
import { mergeMap } from 'rxjs/Operators'

const timeout = (ms: number) => 
    new Promise((resolve, reject) => 
        setTimeout(() => {
            resolve()
        }, ms)
    )
    console.log('start')
console.time('')

from(timeout(3000)).pipe(
  mergeMap(() => {
      console.timeEnd('')
      return interval(10000)})
    
).subscribe(x => console.log(x))