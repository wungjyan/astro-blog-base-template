---
title: 'Markdown Formatting Test'
description: 'A comprehensive test of various markdown formatting including code blocks, blockquotes, math formulas, and more.'
date: 2026-03-17
tags: ['markdown', 'test A', 'formatting']
---

This post tests various markdown formatting options to ensure everything renders correctly.

## Text Formatting

Here we have **bold text**, _italic text_, and **_bold and italic combined_**. You can also use ~~strikethrough~~ for deleted content.

Inline `code` looks like this, and you can emphasize `**code with bold**` too.

## Blockquotes

> This is a simple blockquote.
>
> It can span multiple paragraphs.

> [!NOTE]
> This is a GitHub-style note callout.

> [!WARNING]
> This is a warning callout.

## Lists

### Unordered List

- First item
- Second item
  - Nested item A
  - Nested item B
- Third item

### Ordered List

1. First step
2. Second step
   1. Sub-step A
   2. Sub-step B
3. Third step

### Task List

- [x] Complete task
- [ ] Incomplete task
- [ ] Another pending item

## Code Blocks

### JavaScript

```javascript
function greet(name) {
  console.log(`Hello, ${name}!`)
  return {
    message: `Welcome, ${name}`,
    timestamp: Date.now()
  }
}

// Arrow function example
const sum = (a, b) => a + b
```

### Python

```python
def fibonacci(n):
    """Generate Fibonacci sequence up to n terms."""
    a, b = 0, 1
    result = []
    for _ in range(n):
        result.append(a)
        a, b = b, a + b
    return result

# List comprehension
squares = [x**2 for x in range(10)]
```

### TypeScript

```typescript
interface User {
  id: number
  name: string
  email: string
}

async function fetchUser(id: number): Promise<User> {
  const response = await fetch(`/api/users/${id}`)
  return response.json()
}
```

### CSS

```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #fafafa;
  }
}
```

## Tables

| Feature   | Status      | Priority |
| --------- | ----------- | -------- |
| Dark Mode | Done        | High     |
| Search    | In Progress | Medium   |
| Comments  | Planned     | Low      |
| RSS Feed  | Done        | Medium   |

## Links and Images

This is an [inline link](https://example.com) and this is a [reference link][ref].

[ref]: https://astro.build

## Horizontal Rule

Above the line.

---

Below the line.

## Math Formulas

### Inline Math

The famous equation $E = mc^2$ changed physics forever. The quadratic formula is $x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$.

### Block Math

$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$

$$
\sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6}
$$

The Maxwell's equations in differential form:

$$
\nabla \cdot \mathbf{E} = \frac{\rho}{\varepsilon_0}
$$

$$
\nabla \cdot \mathbf{B} = 0
$$

## Footnotes

Here is a sentence with a footnote[^1]. You can also have multiple references[^2].

[^1]: This is the first footnote content.

[^2]: This is the second footnote with more details.

## Conclusion

If all the above renders correctly, the markdown processing is working as expected!
