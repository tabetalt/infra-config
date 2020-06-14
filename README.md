# Tabetalt DevOps Config

This is an repository for internal configuration classes used with [@tabetalt/pulumix](https://github.com/tabetalt/pulumix).

## For Tabetalt-developers

Changes here are deployed to all microservices. It should be generic and will be public.
Secrets are only stored in Vault.

## For others

This holds an example of Config class that can be used with resources at [@tabetalt/pulumix](https://github.com/tabetalt/pulumix).

One of the use-cases are simple getting configuration.

```typescript
import { Config } from '@tabetalt/devops-config';
const config = new Config;
export const service = new Service('hello', {
  domain: config.get('domain'),
});
```

or you can utilize it as base configuration class. Every function that requires something configurable,
will use this class instead.

```typescript
import { Config } from '@tabetalt/devops-config';
const config = new Config;
export const service = new Service('hello', {
  name: 'hello',
}, { config });
```

If service needs, ex. primaryDomain, it will get that from our Config class.
