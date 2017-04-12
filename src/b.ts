import * as t from 'io-ts'
import { a } from './a'

export const b = t.interface({
  a: a
})

type B = t.TypeOf<typeof b>