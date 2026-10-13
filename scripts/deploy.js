import { execSync } from 'node:child_process'
import { rmSync, existsSync } from 'node:fs'
import { join } from 'node:path'

const distDir = join(process.cwd(), 'dist')

if (!existsSync(distDir)) {
  console.error('Error: dist directory does not exist. Run "npm run build" first.')
  process.exit(1)
}

try {
  console.log('Deploying dist to main branch on GitHub Pages...')

  // Clean up any leftover .git inside dist if previous run was interrupted
  const distGit = join(distDir, '.git')
  if (existsSync(distGit)) {
    rmSync(distGit, { recursive: true, force: true })
  }

  execSync('git init', { cwd: distDir, stdio: 'inherit' })
  execSync('git checkout -B main', { cwd: distDir, stdio: 'inherit' })
  execSync('git add -A', { cwd: distDir, stdio: 'inherit' })
  execSync('git commit -m "deploy: production build for GitHub Pages"', { cwd: distDir, stdio: 'inherit' })
  execSync('git remote add origin https://github.com/sohamnandwal/sohamnandwal.github.io.git', { cwd: distDir, stdio: 'inherit' })
  execSync('git push -f origin main', { cwd: distDir, stdio: 'inherit' })

  // Clean up temporary .git directory in dist
  rmSync(distGit, { recursive: true, force: true })

  // Keep root repo's tracking of origin/main in sync
  try {
    execSync('git fetch origin main', { stdio: 'ignore' })
    execSync('git branch -f main origin/main', { stdio: 'ignore' })
  } catch {
    // Ignore if fetch in root has any harmless warning
  }

  console.log('Deployment complete! GitHub Pages will update on https://sohamnandwal.github.io/')
} catch (error) {
  console.error('Deployment failed:', error)
  process.exit(1)
}
