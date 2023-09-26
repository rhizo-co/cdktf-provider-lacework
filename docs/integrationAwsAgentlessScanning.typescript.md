# `lacework_integration_aws_agentless_scanning`

Refer to the Terraform Registory for docs: [`lacework_integration_aws_agentless_scanning`](https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_agentless_scanning).

# `integrationAwsAgentlessScanning` Submodule <a name="`integrationAwsAgentlessScanning` Submodule" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationAwsAgentlessScanning <a name="IntegrationAwsAgentlessScanning" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning"></a>

Represents a {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_agentless_scanning lacework_integration_aws_agentless_scanning}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer"></a>

```typescript
import { integrationAwsAgentlessScanning } from 'rhizo-co-terraform-provider-lacework'

new integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning(scope: Construct, id: string, config: IntegrationAwsAgentlessScanningConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig">IntegrationAwsAgentlessScanningConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig">IntegrationAwsAgentlessScanningConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.putCredentials">putCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.resetBucketArn">resetBucketArn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.resetCredentials">resetCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.resetQueryText">resetQueryText</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.resetRetries">resetRetries</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.resetScanContainers">resetScanContainers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.resetScanHostVulnerabilities">resetScanHostVulnerabilities</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.resetScanMultiVolume">resetScanMultiVolume</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.resetScanStoppedInstances">resetScanStoppedInstances</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putCredentials` <a name="putCredentials" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.putCredentials"></a>

```typescript
public putCredentials(value: IntegrationAwsAgentlessScanningCredentials): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.putCredentials.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentials">IntegrationAwsAgentlessScanningCredentials</a>

---

##### `resetAccountId` <a name="resetAccountId" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetBucketArn` <a name="resetBucketArn" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.resetBucketArn"></a>

```typescript
public resetBucketArn(): void
```

##### `resetCredentials` <a name="resetCredentials" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.resetCredentials"></a>

```typescript
public resetCredentials(): void
```

##### `resetEnabled` <a name="resetEnabled" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.resetId"></a>

```typescript
public resetId(): void
```

##### `resetQueryText` <a name="resetQueryText" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.resetQueryText"></a>

```typescript
public resetQueryText(): void
```

##### `resetRetries` <a name="resetRetries" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.resetRetries"></a>

```typescript
public resetRetries(): void
```

##### `resetScanContainers` <a name="resetScanContainers" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.resetScanContainers"></a>

```typescript
public resetScanContainers(): void
```

##### `resetScanHostVulnerabilities` <a name="resetScanHostVulnerabilities" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.resetScanHostVulnerabilities"></a>

```typescript
public resetScanHostVulnerabilities(): void
```

##### `resetScanMultiVolume` <a name="resetScanMultiVolume" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.resetScanMultiVolume"></a>

```typescript
public resetScanMultiVolume(): void
```

##### `resetScanStoppedInstances` <a name="resetScanStoppedInstances" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.resetScanStoppedInstances"></a>

```typescript
public resetScanStoppedInstances(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.isConstruct"></a>

```typescript
import { integrationAwsAgentlessScanning } from 'rhizo-co-terraform-provider-lacework'

integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.isTerraformElement"></a>

```typescript
import { integrationAwsAgentlessScanning } from 'rhizo-co-terraform-provider-lacework'

integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.isTerraformResource"></a>

```typescript
import { integrationAwsAgentlessScanning } from 'rhizo-co-terraform-provider-lacework'

integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.createdOrUpdatedBy">createdOrUpdatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.createdOrUpdatedTime">createdOrUpdatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.credentials">credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference">IntegrationAwsAgentlessScanningCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.intgGuid">intgGuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.orgLevel">orgLevel</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.serverToken">serverToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.typeName">typeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.bucketArnInput">bucketArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.credentialsInput">credentialsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentials">IntegrationAwsAgentlessScanningCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.queryTextInput">queryTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.retriesInput">retriesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.scanContainersInput">scanContainersInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.scanFrequencyInput">scanFrequencyInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.scanHostVulnerabilitiesInput">scanHostVulnerabilitiesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.scanMultiVolumeInput">scanMultiVolumeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.scanStoppedInstancesInput">scanStoppedInstancesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.bucketArn">bucketArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.queryText">queryText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.retries">retries</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.scanContainers">scanContainers</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.scanFrequency">scanFrequency</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.scanHostVulnerabilities">scanHostVulnerabilities</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.scanMultiVolume">scanMultiVolume</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.scanStoppedInstances">scanStoppedInstances</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createdOrUpdatedBy`<sup>Required</sup> <a name="createdOrUpdatedBy" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.createdOrUpdatedBy"></a>

```typescript
public readonly createdOrUpdatedBy: string;
```

- *Type:* string

---

##### `createdOrUpdatedTime`<sup>Required</sup> <a name="createdOrUpdatedTime" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.createdOrUpdatedTime"></a>

```typescript
public readonly createdOrUpdatedTime: string;
```

- *Type:* string

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.credentials"></a>

```typescript
public readonly credentials: IntegrationAwsAgentlessScanningCredentialsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference">IntegrationAwsAgentlessScanningCredentialsOutputReference</a>

---

##### `intgGuid`<sup>Required</sup> <a name="intgGuid" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.intgGuid"></a>

```typescript
public readonly intgGuid: string;
```

- *Type:* string

---

##### `orgLevel`<sup>Required</sup> <a name="orgLevel" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.orgLevel"></a>

```typescript
public readonly orgLevel: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `serverToken`<sup>Required</sup> <a name="serverToken" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.serverToken"></a>

```typescript
public readonly serverToken: string;
```

- *Type:* string

---

##### `typeName`<sup>Required</sup> <a name="typeName" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.typeName"></a>

```typescript
public readonly typeName: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `bucketArnInput`<sup>Optional</sup> <a name="bucketArnInput" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.bucketArnInput"></a>

```typescript
public readonly bucketArnInput: string;
```

- *Type:* string

---

##### `credentialsInput`<sup>Optional</sup> <a name="credentialsInput" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.credentialsInput"></a>

```typescript
public readonly credentialsInput: IntegrationAwsAgentlessScanningCredentials;
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentials">IntegrationAwsAgentlessScanningCredentials</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `queryTextInput`<sup>Optional</sup> <a name="queryTextInput" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.queryTextInput"></a>

```typescript
public readonly queryTextInput: string;
```

- *Type:* string

---

##### `retriesInput`<sup>Optional</sup> <a name="retriesInput" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.retriesInput"></a>

```typescript
public readonly retriesInput: number;
```

- *Type:* number

---

##### `scanContainersInput`<sup>Optional</sup> <a name="scanContainersInput" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.scanContainersInput"></a>

```typescript
public readonly scanContainersInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `scanFrequencyInput`<sup>Optional</sup> <a name="scanFrequencyInput" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.scanFrequencyInput"></a>

```typescript
public readonly scanFrequencyInput: number;
```

- *Type:* number

---

##### `scanHostVulnerabilitiesInput`<sup>Optional</sup> <a name="scanHostVulnerabilitiesInput" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.scanHostVulnerabilitiesInput"></a>

```typescript
public readonly scanHostVulnerabilitiesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `scanMultiVolumeInput`<sup>Optional</sup> <a name="scanMultiVolumeInput" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.scanMultiVolumeInput"></a>

```typescript
public readonly scanMultiVolumeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `scanStoppedInstancesInput`<sup>Optional</sup> <a name="scanStoppedInstancesInput" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.scanStoppedInstancesInput"></a>

```typescript
public readonly scanStoppedInstancesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `bucketArn`<sup>Required</sup> <a name="bucketArn" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.bucketArn"></a>

```typescript
public readonly bucketArn: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `queryText`<sup>Required</sup> <a name="queryText" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.queryText"></a>

```typescript
public readonly queryText: string;
```

- *Type:* string

---

##### `retries`<sup>Required</sup> <a name="retries" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.retries"></a>

```typescript
public readonly retries: number;
```

- *Type:* number

---

##### `scanContainers`<sup>Required</sup> <a name="scanContainers" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.scanContainers"></a>

```typescript
public readonly scanContainers: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `scanFrequency`<sup>Required</sup> <a name="scanFrequency" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.scanFrequency"></a>

```typescript
public readonly scanFrequency: number;
```

- *Type:* number

---

##### `scanHostVulnerabilities`<sup>Required</sup> <a name="scanHostVulnerabilities" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.scanHostVulnerabilities"></a>

```typescript
public readonly scanHostVulnerabilities: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `scanMultiVolume`<sup>Required</sup> <a name="scanMultiVolume" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.scanMultiVolume"></a>

```typescript
public readonly scanMultiVolume: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `scanStoppedInstances`<sup>Required</sup> <a name="scanStoppedInstances" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.scanStoppedInstances"></a>

```typescript
public readonly scanStoppedInstances: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanning.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationAwsAgentlessScanningConfig <a name="IntegrationAwsAgentlessScanningConfig" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.Initializer"></a>

```typescript
import { integrationAwsAgentlessScanning } from 'rhizo-co-terraform-provider-lacework'

const integrationAwsAgentlessScanningConfig: integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.name">name</a></code> | <code>string</code> | The integration name. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.scanFrequency">scanFrequency</a></code> | <code>number</code> | How often in hours the scan will run in hours. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.accountId">accountId</a></code> | <code>string</code> | The aws account id. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.bucketArn">bucketArn</a></code> | <code>string</code> | The bucket arn. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.credentials">credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentials">IntegrationAwsAgentlessScanningCredentials</a></code> | credentials block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | The state of the external integration. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_agentless_scanning#id IntegrationAwsAgentlessScanning#id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.queryText">queryText</a></code> | <code>string</code> | The LQL query text. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.retries">retries</a></code> | <code>number</code> | The number of attempts to create the external integration. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.scanContainers">scanContainers</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to includes scanning for containers. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.scanHostVulnerabilities">scanHostVulnerabilities</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to includes scanning for host vulnerabilities. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.scanMultiVolume">scanMultiVolume</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to scan secondary volumes (true) or only root volumes (false). |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.scanStoppedInstances">scanStoppedInstances</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to scan stopped instances (true). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The integration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_agentless_scanning#name IntegrationAwsAgentlessScanning#name}

---

##### `scanFrequency`<sup>Required</sup> <a name="scanFrequency" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.scanFrequency"></a>

```typescript
public readonly scanFrequency: number;
```

- *Type:* number

How often in hours the scan will run in hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_agentless_scanning#scan_frequency IntegrationAwsAgentlessScanning#scan_frequency}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The aws account id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_agentless_scanning#account_id IntegrationAwsAgentlessScanning#account_id}

---

##### `bucketArn`<sup>Optional</sup> <a name="bucketArn" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.bucketArn"></a>

```typescript
public readonly bucketArn: string;
```

- *Type:* string

The bucket arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_agentless_scanning#bucket_arn IntegrationAwsAgentlessScanning#bucket_arn}

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.credentials"></a>

```typescript
public readonly credentials: IntegrationAwsAgentlessScanningCredentials;
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentials">IntegrationAwsAgentlessScanningCredentials</a>

credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_agentless_scanning#credentials IntegrationAwsAgentlessScanning#credentials}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

The state of the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_agentless_scanning#enabled IntegrationAwsAgentlessScanning#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_agentless_scanning#id IntegrationAwsAgentlessScanning#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `queryText`<sup>Optional</sup> <a name="queryText" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.queryText"></a>

```typescript
public readonly queryText: string;
```

- *Type:* string

The LQL query text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_agentless_scanning#query_text IntegrationAwsAgentlessScanning#query_text}

---

##### `retries`<sup>Optional</sup> <a name="retries" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.retries"></a>

```typescript
public readonly retries: number;
```

- *Type:* number

The number of attempts to create the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_agentless_scanning#retries IntegrationAwsAgentlessScanning#retries}

---

##### `scanContainers`<sup>Optional</sup> <a name="scanContainers" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.scanContainers"></a>

```typescript
public readonly scanContainers: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to includes scanning for containers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_agentless_scanning#scan_containers IntegrationAwsAgentlessScanning#scan_containers}

---

##### `scanHostVulnerabilities`<sup>Optional</sup> <a name="scanHostVulnerabilities" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.scanHostVulnerabilities"></a>

```typescript
public readonly scanHostVulnerabilities: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to includes scanning for host vulnerabilities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_agentless_scanning#scan_host_vulnerabilities IntegrationAwsAgentlessScanning#scan_host_vulnerabilities}

---

##### `scanMultiVolume`<sup>Optional</sup> <a name="scanMultiVolume" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.scanMultiVolume"></a>

```typescript
public readonly scanMultiVolume: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to scan secondary volumes (true) or only root volumes (false).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_agentless_scanning#scan_multi_volume IntegrationAwsAgentlessScanning#scan_multi_volume}

---

##### `scanStoppedInstances`<sup>Optional</sup> <a name="scanStoppedInstances" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningConfig.property.scanStoppedInstances"></a>

```typescript
public readonly scanStoppedInstances: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to scan stopped instances (true).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_agentless_scanning#scan_stopped_instances IntegrationAwsAgentlessScanning#scan_stopped_instances}

---

### IntegrationAwsAgentlessScanningCredentials <a name="IntegrationAwsAgentlessScanningCredentials" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentials.Initializer"></a>

```typescript
import { integrationAwsAgentlessScanning } from 'rhizo-co-terraform-provider-lacework'

const integrationAwsAgentlessScanningCredentials: integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentials = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentials.property.externalId">externalId</a></code> | <code>string</code> | The external id. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentials.property.roleArn">roleArn</a></code> | <code>string</code> | The role arn. |

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentials.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

The external id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_agentless_scanning#external_id IntegrationAwsAgentlessScanning#external_id}

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentials.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

The role arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_agentless_scanning#role_arn IntegrationAwsAgentlessScanning#role_arn}

---

## Classes <a name="Classes" id="Classes"></a>

### IntegrationAwsAgentlessScanningCredentialsOutputReference <a name="IntegrationAwsAgentlessScanningCredentialsOutputReference" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.Initializer"></a>

```typescript
import { integrationAwsAgentlessScanning } from 'rhizo-co-terraform-provider-lacework'

new integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.property.externalIdInput">externalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.property.externalId">externalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentials">IntegrationAwsAgentlessScanningCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `externalIdInput`<sup>Optional</sup> <a name="externalIdInput" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.property.externalIdInput"></a>

```typescript
public readonly externalIdInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentialsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IntegrationAwsAgentlessScanningCredentials;
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsAgentlessScanning.IntegrationAwsAgentlessScanningCredentials">IntegrationAwsAgentlessScanningCredentials</a>

---



