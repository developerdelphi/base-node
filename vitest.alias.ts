import { resolve } from 'path'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const r = (p: string) => resolve(__dirname, p)

export const alias: Record<string, string> = {
  '@': r('./src/')
}
