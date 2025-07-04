[![npm version](https://img.shields.io/npm/v/r3f-template)](https://www.npmjs.com/package/r3f-template)

# r3f-template

A CLI tool to scaffold React Three Fiber projects with or without physics (Rapier). Quickly bootstrap your 3D web applications with modern tooling and best practices.

## 🚀 Features

- **Interactive CLI**: Choose your project name, language, and features
- **Language Support**: 
  - **TypeScript**: Full type safety with TypeScript configuration
  - **JavaScript**: Simple JavaScript setup for quick prototyping
- **Two Template Options**:
  - **Basic Template**: React Three Fiber with essential 3D features
  - **Physics Template**: Includes Rapier physics engine for realistic interactions
- **Modern Stack**: Built with Vite, ESLint, and modern tooling
- **Ready to Use**: Pre-configured with all necessary dependencies

## 📦 Installation

### Global Installation (Recommended)
```bash
npm install -g r3f-template
```

### Local Installation
```bash
npm install r3f-template
npx r3f-template
```

## 🎯 Usage

### Interactive Mode
```bash
r3f-template
```

The CLI will prompt you for:
- **Project Name**: The name of your new project
- **Language**: Choose between TypeScript or JavaScript
- **Template**: Choose between Basic or Physics (Rapier) template

### Example Session
```bash
$ r3f-template
? Enter your project name: my-3d-game
? Choose your language: TypeScript
? Choose your template: Physics (Rapier)
✅ Project created in ./my-3d-game
👉 Run 'cd my-3d-game'
👉 Run 'npm install'
👉 Run 'npm run dev'
```

## 📁 Template Structure

### Basic Template (TypeScript)
```
my-project/
├── src/
│   ├── Components/
│   │   ├── Lights.tsx
│   │   └── Suzanne.tsx
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── public/
│   └── suzanne.glb
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── eslint.config.js
```

### Basic Template (JavaScript)
```
my-project/
├── src/
│   ├── Components/
│   │   ├── Lights.jsx
│   │   └── Suzanne.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── public/
│   └── suzanne.glb
├── package.json
├── vite.config.js
└── eslint.config.js
```

### Physics Template (TypeScript)
```
my-project/
├── src/
│   ├── Components/
│   │   ├── Lights.tsx
│   │   ├── Player.tsx
│   │   ├── Ground.tsx
│   │   └── Suzanne.tsx
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── public/
│   └── suzanne.gltf
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── eslint.config.js
```

### Physics Template (JavaScript)
```
my-project/
├── src/
│   ├── Components/
│   │   ├── Lights.jsx
│   │   ├── Player.jsx
│   │   ├── Ground.jsx
│   │   └── Suzanne.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── public/
│   └── suzanne.gltf
├── package.json
├── vite.config.js
└── eslint.config.js
```

## 🛠️ Dependencies

### Basic Template
- `@react-three/drei` - Useful helpers for React Three Fiber
- `@react-three/fiber` - React renderer for Three.js
- `react` & `react-dom` - React core
- `three` - 3D library
- `vite` - Build tool
- `eslint` - Code linting
- `typescript` (TypeScript template only) - Type safety

### Physics Template (Additional)
- `@react-three/rapier` - Physics engine integration

## 🎮 Getting Started

After creating your project:

```bash
cd my-project
npm install
npm run dev
```

Your 3D application will be available at `http://localhost:5173`

## 🎨 What's Included

### Basic Template Features
- **3D Scene Setup**: Pre-configured Canvas with proper lighting
- **Suzanne Model**: Classic 3D model for testing
- **TypeScript Support**: Full type safety (TypeScript template)
- **Hot Reload**: Fast development with Vite
- **ESLint**: Code quality and consistency

### Physics Template Features
- **Rapier Physics**: Realistic physics simulation
- **Player Controller**: First-person movement with keyboard controls (WASD/Arrow keys for movement, Space for jumping)
- **Mouse Look**: Pointer lock controls for camera rotation
- **Collision Detection**: Proper physics bodies and colliders
- **Interactive Environment**: Physics-enabled ground plane
- **Camera Follow**: Camera automatically follows the player position

## 🎮 Controls (Physics Template)

The physics template includes a fully functional player controller with controls already implemented:

- **Movement**: Use WASD keys or Arrow keys to move
- **Jump**: Press Spacebar to jump
- **Mouse Look**: Click to lock mouse pointer and look around
- **Exit Mouse Lock**: Press Escape to unlock mouse

**Note**: All controls are pre-configured and ready to use - no additional setup required!

## 🎯 Use Cases

- **3D Web Applications**: Interactive 3D experiences
- **Games**: Browser-based 3D games
- **Visualizations**: Data and scientific visualizations
- **Prototypes**: Quick 3D concept validation
- **Educational Projects**: Learning Three.js and React Three Fiber

## 🔧 Customization

Both templates are fully customizable:

- **Add Models**: Replace or add 3D models in the `public/` directory
- **Modify Components**: Edit components in `src/Components/`
- **Extend Physics**: Add more physics bodies and interactions
- **Styling**: Customize CSS in `src/App.css` and `src/index.css`

## 📚 Resources

- [React Three Fiber Documentation](https://docs.pmnd.rs/react-three-fiber)
- [Three.js Documentation](https://threejs.org/docs/)
- [Rapier Physics](https://rapier.rs/)
- [Vite Documentation](https://vitejs.dev/)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Sathish** - [GitHub](https://github.com/sathishTSR)

---

Made with ❤️ for the React Three Fiber community