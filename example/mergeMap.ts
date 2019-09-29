import { interval } from 'rxjs'
import { map, mergeMap } from 'rxjs/Operators'

interval(1000).pipe(
  mergeMap(() => interval(1500))
).subscribe(x => console.log(x))