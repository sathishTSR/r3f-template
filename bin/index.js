#!/usr/bin/env node
import inquirer from 'inquirer'
import fs from 'fs-extra'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const run = async () => {
  const { projectName, withPhysics } = await inquirer.prompt([
    {
      name: 'projectName',
      type: 'input',
      message: 'Enter your project name:',
      validate: input => !!input || 'Project name is required.',
    },
    {
      name: 'withPhysics',
      type: 'confirm',
      message: 'Include physics (rapier)?',
      default: false,
    },
  ])

  const templatePath = path.resolve(__dirname, `../templates/${withPhysics ? 'physics' : 'basic'}`)
  const targetPath = path.resolve(process.cwd(), projectName)

  await fs.copy(templatePath, targetPath)

  console.log(`✅ Project created in ./${projectName}`)
  console.log(`👉 Run 'cd ${projectName} && npm install && npm run dev'`)
}

run()
