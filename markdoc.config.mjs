import { defineMarkdocConfig, component } from '@astrojs/markdoc/config';

export default defineMarkdocConfig({
  tags: {
    schemaComponent: {
      render: component('./src/components/SchemaComponent.astro'),
      attributes: {
        schema: {
            type: "Object",
            required: true
        }
      }
    },
  },
});