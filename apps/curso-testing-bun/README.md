# 📚 Curso Testing com Bun

Bem-vindo ao curso **Testing com Bun** — um projecto prático para aprender a escrever testes modernos em TypeScript utilizando o runtime Bun e o seu test runner nativo.

## 🗂️ Estrutura do Projecto

```
curso-testing-bun/
└── src/
    ├── modulo-01/   ← Preparação e boas-vindas
    ├── modulo-02/   ← Fundamentos do testing
    ├── modulo-03/   ← Mocking
    ├── modulo-04/   ← Testes assíncronos
    ├── index.ts
    ├── package.json
    ├── tsconfig.json
    └── README.md
```

## 📦 Módulos

| Módulo    | Tema                          |
|-----------|-------------------------------|
| modulo-01 | Preparação e boas-vindas      |
| modulo-02 | Fundamentos do testing        |
| modulo-03 | Mocking                       |
| modulo-04 | Testes assíncronos            |

## 🚀 Comandos

```bash
# Executar todos os testes
bun test

# Modo watch
bun test --watch

# Com cobertura de código
bun test --coverage

# Executar o projecto
bun run dev
```

## 🔧 Pré-requisitos

- [Bun](https://bun.sh) >= 1.0
- TypeScript >= 5.0

## 📝 Convenções

- Ficheiros de teste: `*.test.ts`
- Imports utilizam path aliases: `@modulo-01/*`, `@modulo-02/*`, etc.
- Cada módulo contém a sua lógica de negócio **e** os respectivos testes.
