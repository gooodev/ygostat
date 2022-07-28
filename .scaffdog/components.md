---
name: 'components'
description: 'Generate components'
root: 'src/components'
output: '.'
ignore: []
questions:
  targetDir:
    message: 'Please enter target directory.'
    choices: ['elements', 'features', 'layouts', 'models']
  componentName:
    message: 'Please enter component name.'
---

# `{{ inputs.targetDir }}/{{ inputs.componentName | pascal }}/index.ts`

```javascript
export { {{ inputs.componentName | pascal }} } from './{{ inputs.componentName | pascal }}';
```

# `{{ inputs.targetDir }}/{{ inputs.componentName | pascal }}/{{ inputs.componentName | pascal }}.tsx`

```javascript
/** @pakcage */
export type {{ inputs.componentName | pascal }}Props = {};

/** @pakcage */
export const {{ inputs.componentName | pascal }} = (props: {{ inputs.componentName | pascal }}Props) => {
  console.log("Generated component in {{ inputs.targetDir }}/{{ inputs.componentName | pascal }}/{{ inputs.componentName | pascal }}.tsx");
  return <div>{{ inputs.componentName | pascal }}</div>;
};
```

# `{{ inputs.targetDir }}/{{ inputs.componentName | pascal }}/{{ inputs.componentName | pascal }}.stories.tsx`

```javascript
import { Meta, Story } from '@storybook/react';

import { {{ inputs.componentName | pascal }}, type {{ inputs.componentName | pascal }}Props } from './{{ inputs.componentName | pascal }}';

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

# `{{ inputs.targetDir }}/index.ts`

```javascript
{{ read output.abs }}
export { {{ inputs.componentName | pascal }} } from './{{ inputs.componentName | pascal }}';
```
