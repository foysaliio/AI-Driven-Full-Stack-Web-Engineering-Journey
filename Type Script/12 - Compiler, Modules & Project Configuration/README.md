# 12 - Compiler, Modules & Project Configuration

This module focuses on how TypeScript projects are configured, compiled, and organized.

## 01. TypeScript Compiler

The TypeScript compiler converts TypeScript code into JavaScript.

TypeScript provides static type checking during development while JavaScript is executed by the browser or runtime.

The `tsc` command runs the TypeScript compiler.

## 02. Creating tsconfig

`tsconfig.json` is the main configuration file for a TypeScript project.

It can be created using:

`tsc --init`

The configuration controls how TypeScript checks and compiles project files.

## 03. Target Lib and Module

The `target` option controls the JavaScript version TypeScript generates.

The `lib` option defines which built-in APIs and environments TypeScript understands.

The `module` option controls the module system used by the project.

## 04. Strict Mode

The `strict` option enables stronger type checking.

Strict mode helps detect unsafe code, implicit any values, null-related problems, and other possible type errors.

Modern TypeScript projects should generally use strict mode.

## 05. RootDir OutDir Include and Exclude

`rootDir` defines the location of the TypeScript source files.

`outDir` defines where compiled JavaScript files should be generated.

`include` specifies which files TypeScript should process.

`exclude` specifies which files should be ignored.

## 06. No Emit

The `noEmit` option tells TypeScript to perform type checking without generating JavaScript files.

This is useful when another tool or framework handles the build process.

Modern frontend projects often use TypeScript mainly for type checking while a bundler handles compilation.

## 07. Named Export and Import

Named exports allow multiple values or types to be exported from the same module.

Named imports use curly braces and must reference the exported name.

For example:

`import { createUser } from "./user"`

## 08. Default Export and Import

A module can have a default export.

Default imports do not use curly braces.

For example:

`import UserService from "./user"`

Named and default exports are both commonly used in JavaScript and TypeScript projects.

## 09. Type Only Import and Export

`import type` imports declarations specifically for TypeScript type checking.

Type-only imports do not represent runtime JavaScript values.

They make the purpose of imports clearer and help separate runtime code from type information.

## 10. Declaration Files

Declaration files use the `.d.ts` extension.

They describe the types of JavaScript values, libraries, modules, or global variables.

Declaration files provide type information without implementing runtime functionality.

Many JavaScript libraries use declaration files to provide TypeScript support.

## 11. TypeScript Project Structure

TypeScript projects should separate different responsibilities into organized files and folders.

Types, services, utilities, and application logic can be kept in separate modules.

A clean project structure improves readability, maintainability, and scalability.
