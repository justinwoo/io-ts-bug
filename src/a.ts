import * as t from 'io-ts'

export const a = t.interface({
  x: t.string
})

type A = t.TypeOf<typeof a>