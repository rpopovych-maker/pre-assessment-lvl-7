// https://github.com/type-challenges/type-challenges/blob/main/questions/00043-easy-exclude/README.md

/* _____________ Your Code Here _____________ */

type MyExclude<T, U> = T extends U ? never : T

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a'>, 'b' | 'c'>>,
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a' | 'b'>, 'c'>>,
  Expect<Equal<MyExclude<string | number | (() => void), Function>, string | number>>
]
