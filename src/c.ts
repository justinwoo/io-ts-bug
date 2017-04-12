import * as t from 'io-ts'
import { b } from './b'

export const c = t.interface({
  b: b
})

type C = t.TypeOf<typeof c>