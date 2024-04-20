# FormFSM

Finite state machine implementation with zustand for multi-step react.js forms

## Installation

### Starting Development Server:
To start the development server, run:
```bash
npm run dev
```

### Building for Production:
To build for production, use:
```bash
npm run build
```

### Using Production Build:
To use the production build, run:
```bash
npm run start
```


## Technologies

| Technology  |
|-------------|
| React       |
| Tailwind    |
| Zustand     |
| Biome       |
| Vite        |
| TypeScript  |

## Contributing

Feel free to fork this project and submit a pull request if you have any ideas or improvements!


## Roadmap

- [ ] Create a `multiStepForm` store that can be dynamically initialized with states and transitions.
- [ ] Evaluate the need of the `useProgress` hook considering potential overlap or redundancy with the `multiStepForm` store. Decide whether to update `useProgress` to function as a React hook as an abstraction of the `multiStepForm` store or remove it entirely.
