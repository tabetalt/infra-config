import * as pulumi from '@pulumi/pulumi';
import * as pulumix from '@tabetalt/pulumix';
import * as constants from './constants';

type ConstantKeyType = keyof typeof constants;

export class Config extends pulumix.helpers.Config {
  environment = 'dev';

  stackRef: pulumi.StackReference;

  constructor(environment?: string, withCoreStack = true) {
    super();
    
    this.environment = environment || pulumi.getStack();

    if (withCoreStack) {
      this.stackRef = new pulumi.StackReference(
        `${constants.coreStackRef}/${this.environment}`
      );
    }
  }

  parseConstant(value: string) {
    const replace = {
      '{env}': this.environment,
      '{version}': constants.version,
    };
    Object.keys(replace).forEach((key) => {
      const data = replace[key as keyof typeof replace];
      value = value.replace(key, data);
    });
    return value;
  }

  get<K extends string = string>(key: string) {
    return pulumi.output(
      (async () => {
        if (constants.hasOwnProperty(key)) {
          const value = constants[key as ConstantKeyType];
          if (typeof value === 'string') {
            return this.parseConstant(value);
          } else {
            return value;
          }
        }
        if(this.stackRef) {
          return this.stackRef.getOutput(key);
        }
        return false;
      })()
    );
  }
}
