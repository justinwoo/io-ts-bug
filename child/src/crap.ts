import * as t from 'io-ts'
import { c } from 'io-ts-bug/lib/c'

console.log('c', c)

const d = t.interface({
  c: c // this line causes tsc to hang
})

type D = t.TypeOf<typeof d>