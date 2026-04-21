import fs from 'node:fs/promises'
import path from 'node:path'

const CONTENT_ROOT = path.join(process.cwd(), 'content')

export async function readTextContent(relativePath: string): Promise<string> {
  const fullPath = path.join(CONTENT_ROOT, relativePath)
  return fs.readFile(fullPath, 'utf8')
}
