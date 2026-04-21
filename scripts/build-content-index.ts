import fs from 'node:fs'
import path from 'node:path'
import { ROUTE_INDEX } from '../lib/content-index'

const outputDir = path.join(process.cwd(), 'data', 'system')
const outputFile = path.join(outputDir, 'routes.json')

fs.mkdirSync(outputDir, { recursive: true })
fs.writeFileSync(outputFile, JSON.stringify(ROUTE_INDEX, null, 2) + '\n', 'utf8')

console.log(`Wrote ${outputFile}`)
