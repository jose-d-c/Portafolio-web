---
name: agent-workflow-optimizer
description: Optimiza el flujo de trabajo del agente dentro de este repositorio. Usar cuando convenga añadir scripts de validacion, checklists, automatizaciones ligeras o configuraciones operativas que reduzcan errores repetitivos al editar contenido, assets, rutas y documentacion.
---

# Agent Workflow Optimizer

Usa esta skill para mejoras de mantenimiento interno del proyecto.

## Mejores candidatos
- scripts Node para validar rutas o integridad de contenido
- nuevos comandos en `package.json`
- mejoras en `AGENTS.md`
- skills adicionales que ataquen cuellos de botella repetidos

## Flujo
1. Identificar una friccion repetitiva del agente.
2. Convertirla en automatizacion ligera o en una regla operativa clara.
3. Dejar el comando o skill documentado.
4. Preferir herramientas que funcionen aun cuando falten dependencias del frontend.

## Regla clave
En este repo tienen mucho valor los chequeos basados en Node puro, porque `astro build` puede no estar disponible si falta `node_modules`.
