#!/usr/bin/env node
import inquirer from 'inquirer'
import fs from 'fs-extra'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const run = async () => {
  const { projectName, language, template } = await inquirer.prompt([
    {
      name: 'projectName',
      type: 'input',
      message: 'Enter your project name:',
      validate: input => !!input || 'Project name is required.',
    },
    {
      name: 'language',
      type: 'list',
      message: 'Choose your language:',
      choices: [
        { name: 'TypeScript', value: 'ts' },
        { name: 'JavaScript', value: 'js' }
      ],
      default: 'ts',
    },
    {
      name: 'template',
      type: 'list',
      message: 'Choose your template:',
      choices: [
        { name: 'Basics', value: 'basic' },
        { name: 'Physics (Rapier)', value: 'physics' }
      ],
      default: 'basic',
    },
  ])

  const templatePath = path.resolve(__dirname, `../templates/${language}/${template}`)
  const targetPath = path.resolve(process.cwd(), projectName)

  await fs.copy(templatePath, targetPath)

  console.log(`✅ Project created in ./${projectName}`)
  console.log(`👉 Run 'cd ${projectName}'`)
  console.log(`👉 Run 'npm install'`)
  console.log(`👉 Run 'npm run dev'`)
}

run()
