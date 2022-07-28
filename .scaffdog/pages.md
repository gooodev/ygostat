---
name: 'pages'
description: 'Generate page'
root: 'src/components'
output: '.'
ignore: []
questions:
  componentName:
    message: 'Please enter component name.'
---

# `pages/{{ inputs.componentName | pascal }}/index.ts`

```javascript
import { lazy } from 'react';

export const Lazy{{ inputs.componentName | pascal }} = lazy(() => import('./{{ inputs.componentName | pascal }}'));
```

# `pages/{{ inputs.componentName | pascal }}/{{ inputs.componentName | pascal }}.tsx`

```javascript
/** @pakcage */
export type {{ inputs.componentName | pascal }}Props = {};

/** @pakcage */
export default function {{ inputs.componentName | pascal }} (_props: {{ inputs.componentName | pascal }}Props) {
  console.log("Generated component in pages/{{ inputs.componentName | pascal }}/{{ inputs.componentName | pascal }}.tsx");
  return <div>{{ inputs.componentName | pascal }}</div>;
};
```

# `pages/{{ inputs.componentName | pascal }}/{{ inputs.componentName | pascal }}.stories.tsx`

```javascript
import { Meta, Story } from '@storybook/react';

import {{ inputs.componentName | pascal }}, { type {{ inputs.componentName | pascal }}Props } from './{{ inputs.componentName | pascal }}';

const meta: Meta = {
  title: 'Components/{{ inputs.componentName | pascal }}',
  component: {{ inputs.componentName | pascal }},
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<{{ inputs.componentName | pascal }}Props> = (props) => <{{ inputs.componentName | pascal }} {...props} />;

export const Default = Template.bind({});
Default.args = {};

```

# `pages/index.ts`

```javascript
{{ read output.abs }}
export { Lazy{{ inputs.componentName | pascal }} } from './{{ inputs.componentName | pascal }}';
```
