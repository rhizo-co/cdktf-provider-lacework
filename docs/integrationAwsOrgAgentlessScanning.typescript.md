# `lacework_integration_aws_org_agentless_scanning`

Refer to the Terraform Registory for docs: [`lacework_integration_aws_org_agentless_scanning`](https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning).

# `integrationAwsOrgAgentlessScanning` Submodule <a name="`integrationAwsOrgAgentlessScanning` Submodule" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationAwsOrgAgentlessScanning <a name="IntegrationAwsOrgAgentlessScanning" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning"></a>

Represents a {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning lacework_integration_aws_org_agentless_scanning}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer"></a>

```typescript
import { integrationAwsOrgAgentlessScanning } from 'rhizo-co-terraform-provider-lacework'

new integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning(scope: Construct, id: string, config: IntegrationAwsOrgAgentlessScanningConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig">IntegrationAwsOrgAgentlessScanningConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig">IntegrationAwsOrgAgentlessScanningConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.putCredentials">putCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.putOrgAccountMappings">putOrgAccountMappings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetBucketArn">resetBucketArn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetCredentials">resetCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetManagementAccount">resetManagementAccount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetOrgAccountMappings">resetOrgAccountMappings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetQueryText">resetQueryText</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetRetries">resetRetries</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetScanContainers">resetScanContainers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetScanHostVulnerabilities">resetScanHostVulnerabilities</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetScanMultiVolume">resetScanMultiVolume</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetScanStoppedInstances">resetScanStoppedInstances</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putCredentials` <a name="putCredentials" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.putCredentials"></a>

```typescript
public putCredentials(value: IntegrationAwsOrgAgentlessScanningCredentials): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.putCredentials.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentials">IntegrationAwsOrgAgentlessScanningCredentials</a>

---

##### `putOrgAccountMappings` <a name="putOrgAccountMappings" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.putOrgAccountMappings"></a>

```typescript
public putOrgAccountMappings(value: IResolvable | IntegrationAwsOrgAgentlessScanningOrgAccountMappings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.putOrgAccountMappings.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappings">IntegrationAwsOrgAgentlessScanningOrgAccountMappings</a>[]

---

##### `resetAccountId` <a name="resetAccountId" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetBucketArn` <a name="resetBucketArn" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetBucketArn"></a>

```typescript
public resetBucketArn(): void
```

##### `resetCredentials` <a name="resetCredentials" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetCredentials"></a>

```typescript
public resetCredentials(): void
```

##### `resetEnabled` <a name="resetEnabled" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetId"></a>

```typescript
public resetId(): void
```

##### `resetManagementAccount` <a name="resetManagementAccount" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetManagementAccount"></a>

```typescript
public resetManagementAccount(): void
```

##### `resetOrgAccountMappings` <a name="resetOrgAccountMappings" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetOrgAccountMappings"></a>

```typescript
public resetOrgAccountMappings(): void
```

##### `resetQueryText` <a name="resetQueryText" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetQueryText"></a>

```typescript
public resetQueryText(): void
```

##### `resetRetries` <a name="resetRetries" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetRetries"></a>

```typescript
public resetRetries(): void
```

##### `resetScanContainers` <a name="resetScanContainers" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetScanContainers"></a>

```typescript
public resetScanContainers(): void
```

##### `resetScanHostVulnerabilities` <a name="resetScanHostVulnerabilities" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetScanHostVulnerabilities"></a>

```typescript
public resetScanHostVulnerabilities(): void
```

##### `resetScanMultiVolume` <a name="resetScanMultiVolume" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetScanMultiVolume"></a>

```typescript
public resetScanMultiVolume(): void
```

##### `resetScanStoppedInstances` <a name="resetScanStoppedInstances" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.resetScanStoppedInstances"></a>

```typescript
public resetScanStoppedInstances(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.isConstruct"></a>

```typescript
import { integrationAwsOrgAgentlessScanning } from 'rhizo-co-terraform-provider-lacework'

integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.isTerraformElement"></a>

```typescript
import { integrationAwsOrgAgentlessScanning } from 'rhizo-co-terraform-provider-lacework'

integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.isTerraformResource"></a>

```typescript
import { integrationAwsOrgAgentlessScanning } from 'rhizo-co-terraform-provider-lacework'

integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.createdOrUpdatedBy">createdOrUpdatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.createdOrUpdatedTime">createdOrUpdatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.credentials">credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference">IntegrationAwsOrgAgentlessScanningCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.intgGuid">intgGuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.orgAccountMappings">orgAccountMappings</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList">IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.orgLevel">orgLevel</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.serverToken">serverToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.typeName">typeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.bucketArnInput">bucketArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.credentialsInput">credentialsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentials">IntegrationAwsOrgAgentlessScanningCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.managementAccountInput">managementAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.monitoredAccountsInput">monitoredAccountsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.orgAccountMappingsInput">orgAccountMappingsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappings">IntegrationAwsOrgAgentlessScanningOrgAccountMappings</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.queryTextInput">queryTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.retriesInput">retriesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanContainersInput">scanContainersInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanFrequencyInput">scanFrequencyInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanHostVulnerabilitiesInput">scanHostVulnerabilitiesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanMultiVolumeInput">scanMultiVolumeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanningAccountInput">scanningAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanStoppedInstancesInput">scanStoppedInstancesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.bucketArn">bucketArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.managementAccount">managementAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.monitoredAccounts">monitoredAccounts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.queryText">queryText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.retries">retries</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanContainers">scanContainers</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanFrequency">scanFrequency</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanHostVulnerabilities">scanHostVulnerabilities</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanMultiVolume">scanMultiVolume</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanningAccount">scanningAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanStoppedInstances">scanStoppedInstances</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createdOrUpdatedBy`<sup>Required</sup> <a name="createdOrUpdatedBy" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.createdOrUpdatedBy"></a>

```typescript
public readonly createdOrUpdatedBy: string;
```

- *Type:* string

---

##### `createdOrUpdatedTime`<sup>Required</sup> <a name="createdOrUpdatedTime" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.createdOrUpdatedTime"></a>

```typescript
public readonly createdOrUpdatedTime: string;
```

- *Type:* string

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.credentials"></a>

```typescript
public readonly credentials: IntegrationAwsOrgAgentlessScanningCredentialsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference">IntegrationAwsOrgAgentlessScanningCredentialsOutputReference</a>

---

##### `intgGuid`<sup>Required</sup> <a name="intgGuid" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.intgGuid"></a>

```typescript
public readonly intgGuid: string;
```

- *Type:* string

---

##### `orgAccountMappings`<sup>Required</sup> <a name="orgAccountMappings" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.orgAccountMappings"></a>

```typescript
public readonly orgAccountMappings: IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList">IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList</a>

---

##### `orgLevel`<sup>Required</sup> <a name="orgLevel" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.orgLevel"></a>

```typescript
public readonly orgLevel: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `serverToken`<sup>Required</sup> <a name="serverToken" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.serverToken"></a>

```typescript
public readonly serverToken: string;
```

- *Type:* string

---

##### `typeName`<sup>Required</sup> <a name="typeName" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.typeName"></a>

```typescript
public readonly typeName: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `bucketArnInput`<sup>Optional</sup> <a name="bucketArnInput" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.bucketArnInput"></a>

```typescript
public readonly bucketArnInput: string;
```

- *Type:* string

---

##### `credentialsInput`<sup>Optional</sup> <a name="credentialsInput" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.credentialsInput"></a>

```typescript
public readonly credentialsInput: IntegrationAwsOrgAgentlessScanningCredentials;
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentials">IntegrationAwsOrgAgentlessScanningCredentials</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `managementAccountInput`<sup>Optional</sup> <a name="managementAccountInput" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.managementAccountInput"></a>

```typescript
public readonly managementAccountInput: string;
```

- *Type:* string

---

##### `monitoredAccountsInput`<sup>Optional</sup> <a name="monitoredAccountsInput" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.monitoredAccountsInput"></a>

```typescript
public readonly monitoredAccountsInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `orgAccountMappingsInput`<sup>Optional</sup> <a name="orgAccountMappingsInput" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.orgAccountMappingsInput"></a>

```typescript
public readonly orgAccountMappingsInput: IResolvable | IntegrationAwsOrgAgentlessScanningOrgAccountMappings[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappings">IntegrationAwsOrgAgentlessScanningOrgAccountMappings</a>[]

---

##### `queryTextInput`<sup>Optional</sup> <a name="queryTextInput" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.queryTextInput"></a>

```typescript
public readonly queryTextInput: string;
```

- *Type:* string

---

##### `retriesInput`<sup>Optional</sup> <a name="retriesInput" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.retriesInput"></a>

```typescript
public readonly retriesInput: number;
```

- *Type:* number

---

##### `scanContainersInput`<sup>Optional</sup> <a name="scanContainersInput" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanContainersInput"></a>

```typescript
public readonly scanContainersInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `scanFrequencyInput`<sup>Optional</sup> <a name="scanFrequencyInput" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanFrequencyInput"></a>

```typescript
public readonly scanFrequencyInput: number;
```

- *Type:* number

---

##### `scanHostVulnerabilitiesInput`<sup>Optional</sup> <a name="scanHostVulnerabilitiesInput" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanHostVulnerabilitiesInput"></a>

```typescript
public readonly scanHostVulnerabilitiesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `scanMultiVolumeInput`<sup>Optional</sup> <a name="scanMultiVolumeInput" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanMultiVolumeInput"></a>

```typescript
public readonly scanMultiVolumeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `scanningAccountInput`<sup>Optional</sup> <a name="scanningAccountInput" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanningAccountInput"></a>

```typescript
public readonly scanningAccountInput: string;
```

- *Type:* string

---

##### `scanStoppedInstancesInput`<sup>Optional</sup> <a name="scanStoppedInstancesInput" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanStoppedInstancesInput"></a>

```typescript
public readonly scanStoppedInstancesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `bucketArn`<sup>Required</sup> <a name="bucketArn" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.bucketArn"></a>

```typescript
public readonly bucketArn: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `managementAccount`<sup>Required</sup> <a name="managementAccount" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.managementAccount"></a>

```typescript
public readonly managementAccount: string;
```

- *Type:* string

---

##### `monitoredAccounts`<sup>Required</sup> <a name="monitoredAccounts" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.monitoredAccounts"></a>

```typescript
public readonly monitoredAccounts: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `queryText`<sup>Required</sup> <a name="queryText" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.queryText"></a>

```typescript
public readonly queryText: string;
```

- *Type:* string

---

##### `retries`<sup>Required</sup> <a name="retries" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.retries"></a>

```typescript
public readonly retries: number;
```

- *Type:* number

---

##### `scanContainers`<sup>Required</sup> <a name="scanContainers" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanContainers"></a>

```typescript
public readonly scanContainers: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `scanFrequency`<sup>Required</sup> <a name="scanFrequency" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanFrequency"></a>

```typescript
public readonly scanFrequency: number;
```

- *Type:* number

---

##### `scanHostVulnerabilities`<sup>Required</sup> <a name="scanHostVulnerabilities" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanHostVulnerabilities"></a>

```typescript
public readonly scanHostVulnerabilities: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `scanMultiVolume`<sup>Required</sup> <a name="scanMultiVolume" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanMultiVolume"></a>

```typescript
public readonly scanMultiVolume: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `scanningAccount`<sup>Required</sup> <a name="scanningAccount" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanningAccount"></a>

```typescript
public readonly scanningAccount: string;
```

- *Type:* string

---

##### `scanStoppedInstances`<sup>Required</sup> <a name="scanStoppedInstances" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.scanStoppedInstances"></a>

```typescript
public readonly scanStoppedInstances: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanning.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationAwsOrgAgentlessScanningConfig <a name="IntegrationAwsOrgAgentlessScanningConfig" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.Initializer"></a>

```typescript
import { integrationAwsOrgAgentlessScanning } from 'rhizo-co-terraform-provider-lacework'

const integrationAwsOrgAgentlessScanningConfig: integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.monitoredAccounts">monitoredAccounts</a></code> | <code>string[]</code> | The list of monitored aws accounts ids or OUs. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.name">name</a></code> | <code>string</code> | The integration name. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.scanFrequency">scanFrequency</a></code> | <code>number</code> | How often in hours the scan will run in hours. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.scanningAccount">scanningAccount</a></code> | <code>string</code> | The scanning aws account id. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.accountId">accountId</a></code> | <code>string</code> | The aws account id. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.bucketArn">bucketArn</a></code> | <code>string</code> | The bucket arn. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.credentials">credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentials">IntegrationAwsOrgAgentlessScanningCredentials</a></code> | credentials block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | The state of the external integration. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#id IntegrationAwsOrgAgentlessScanning#id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.managementAccount">managementAccount</a></code> | <code>string</code> | The scanning aws account id. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.orgAccountMappings">orgAccountMappings</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappings">IntegrationAwsOrgAgentlessScanningOrgAccountMappings</a>[]</code> | org_account_mappings block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.queryText">queryText</a></code> | <code>string</code> | The LQL query text. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.retries">retries</a></code> | <code>number</code> | The number of attempts to create the external integration. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.scanContainers">scanContainers</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to includes scanning for containers. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.scanHostVulnerabilities">scanHostVulnerabilities</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to includes scanning for host vulnerabilities. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.scanMultiVolume">scanMultiVolume</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to scan secondary volumes (true) or only root volumes (false). |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.scanStoppedInstances">scanStoppedInstances</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to scan stopped instances (true). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `monitoredAccounts`<sup>Required</sup> <a name="monitoredAccounts" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.monitoredAccounts"></a>

```typescript
public readonly monitoredAccounts: string[];
```

- *Type:* string[]

The list of monitored aws accounts ids or OUs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#monitored_accounts IntegrationAwsOrgAgentlessScanning#monitored_accounts}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The integration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#name IntegrationAwsOrgAgentlessScanning#name}

---

##### `scanFrequency`<sup>Required</sup> <a name="scanFrequency" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.scanFrequency"></a>

```typescript
public readonly scanFrequency: number;
```

- *Type:* number

How often in hours the scan will run in hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#scan_frequency IntegrationAwsOrgAgentlessScanning#scan_frequency}

---

##### `scanningAccount`<sup>Required</sup> <a name="scanningAccount" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.scanningAccount"></a>

```typescript
public readonly scanningAccount: string;
```

- *Type:* string

The scanning aws account id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#scanning_account IntegrationAwsOrgAgentlessScanning#scanning_account}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The aws account id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#account_id IntegrationAwsOrgAgentlessScanning#account_id}

---

##### `bucketArn`<sup>Optional</sup> <a name="bucketArn" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.bucketArn"></a>

```typescript
public readonly bucketArn: string;
```

- *Type:* string

The bucket arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#bucket_arn IntegrationAwsOrgAgentlessScanning#bucket_arn}

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.credentials"></a>

```typescript
public readonly credentials: IntegrationAwsOrgAgentlessScanningCredentials;
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentials">IntegrationAwsOrgAgentlessScanningCredentials</a>

credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#credentials IntegrationAwsOrgAgentlessScanning#credentials}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

The state of the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#enabled IntegrationAwsOrgAgentlessScanning#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#id IntegrationAwsOrgAgentlessScanning#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `managementAccount`<sup>Optional</sup> <a name="managementAccount" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.managementAccount"></a>

```typescript
public readonly managementAccount: string;
```

- *Type:* string

The scanning aws account id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#management_account IntegrationAwsOrgAgentlessScanning#management_account}

---

##### `orgAccountMappings`<sup>Optional</sup> <a name="orgAccountMappings" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.orgAccountMappings"></a>

```typescript
public readonly orgAccountMappings: IResolvable | IntegrationAwsOrgAgentlessScanningOrgAccountMappings[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappings">IntegrationAwsOrgAgentlessScanningOrgAccountMappings</a>[]

org_account_mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#org_account_mappings IntegrationAwsOrgAgentlessScanning#org_account_mappings}

---

##### `queryText`<sup>Optional</sup> <a name="queryText" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.queryText"></a>

```typescript
public readonly queryText: string;
```

- *Type:* string

The LQL query text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#query_text IntegrationAwsOrgAgentlessScanning#query_text}

---

##### `retries`<sup>Optional</sup> <a name="retries" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.retries"></a>

```typescript
public readonly retries: number;
```

- *Type:* number

The number of attempts to create the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#retries IntegrationAwsOrgAgentlessScanning#retries}

---

##### `scanContainers`<sup>Optional</sup> <a name="scanContainers" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.scanContainers"></a>

```typescript
public readonly scanContainers: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to includes scanning for containers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#scan_containers IntegrationAwsOrgAgentlessScanning#scan_containers}

---

##### `scanHostVulnerabilities`<sup>Optional</sup> <a name="scanHostVulnerabilities" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.scanHostVulnerabilities"></a>

```typescript
public readonly scanHostVulnerabilities: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to includes scanning for host vulnerabilities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#scan_host_vulnerabilities IntegrationAwsOrgAgentlessScanning#scan_host_vulnerabilities}

---

##### `scanMultiVolume`<sup>Optional</sup> <a name="scanMultiVolume" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.scanMultiVolume"></a>

```typescript
public readonly scanMultiVolume: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to scan secondary volumes (true) or only root volumes (false).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#scan_multi_volume IntegrationAwsOrgAgentlessScanning#scan_multi_volume}

---

##### `scanStoppedInstances`<sup>Optional</sup> <a name="scanStoppedInstances" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningConfig.property.scanStoppedInstances"></a>

```typescript
public readonly scanStoppedInstances: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to scan stopped instances (true).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#scan_stopped_instances IntegrationAwsOrgAgentlessScanning#scan_stopped_instances}

---

### IntegrationAwsOrgAgentlessScanningCredentials <a name="IntegrationAwsOrgAgentlessScanningCredentials" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentials.Initializer"></a>

```typescript
import { integrationAwsOrgAgentlessScanning } from 'rhizo-co-terraform-provider-lacework'

const integrationAwsOrgAgentlessScanningCredentials: integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentials = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentials.property.externalId">externalId</a></code> | <code>string</code> | The external id. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentials.property.roleArn">roleArn</a></code> | <code>string</code> | The role arn. |

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentials.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

The external id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#external_id IntegrationAwsOrgAgentlessScanning#external_id}

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentials.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

The role arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#role_arn IntegrationAwsOrgAgentlessScanning#role_arn}

---

### IntegrationAwsOrgAgentlessScanningOrgAccountMappings <a name="IntegrationAwsOrgAgentlessScanningOrgAccountMappings" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappings.Initializer"></a>

```typescript
import { integrationAwsOrgAgentlessScanning } from 'rhizo-co-terraform-provider-lacework'

const integrationAwsOrgAgentlessScanningOrgAccountMappings: integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappings.property.defaultLaceworkAccount">defaultLaceworkAccount</a></code> | <code>string</code> | The default Lacework account name where any non-mapped AWS account will appear. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappings.property.mapping">mapping</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping">IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping</a>[]</code> | mapping block. |

---

##### `defaultLaceworkAccount`<sup>Required</sup> <a name="defaultLaceworkAccount" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappings.property.defaultLaceworkAccount"></a>

```typescript
public readonly defaultLaceworkAccount: string;
```

- *Type:* string

The default Lacework account name where any non-mapped AWS account will appear.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#default_lacework_account IntegrationAwsOrgAgentlessScanning#default_lacework_account}

---

##### `mapping`<sup>Required</sup> <a name="mapping" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappings.property.mapping"></a>

```typescript
public readonly mapping: IResolvable | IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping">IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping</a>[]

mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#mapping IntegrationAwsOrgAgentlessScanning#mapping}

---

### IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping <a name="IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping.Initializer"></a>

```typescript
import { integrationAwsOrgAgentlessScanning } from 'rhizo-co-terraform-provider-lacework'

const integrationAwsOrgAgentlessScanningOrgAccountMappingsMapping: integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping.property.awsAccounts">awsAccounts</a></code> | <code>string[]</code> | The list of AWS account IDs to map. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping.property.laceworkAccount">laceworkAccount</a></code> | <code>string</code> | The Lacework account name where the CloudTrail activity from the selected AWS accounts will appear. |

---

##### `awsAccounts`<sup>Required</sup> <a name="awsAccounts" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping.property.awsAccounts"></a>

```typescript
public readonly awsAccounts: string[];
```

- *Type:* string[]

The list of AWS account IDs to map.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#aws_accounts IntegrationAwsOrgAgentlessScanning#aws_accounts}

---

##### `laceworkAccount`<sup>Required</sup> <a name="laceworkAccount" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping.property.laceworkAccount"></a>

```typescript
public readonly laceworkAccount: string;
```

- *Type:* string

The Lacework account name where the CloudTrail activity from the selected AWS accounts will appear.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_org_agentless_scanning#lacework_account IntegrationAwsOrgAgentlessScanning#lacework_account}

---

## Classes <a name="Classes" id="Classes"></a>

### IntegrationAwsOrgAgentlessScanningCredentialsOutputReference <a name="IntegrationAwsOrgAgentlessScanningCredentialsOutputReference" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.Initializer"></a>

```typescript
import { integrationAwsOrgAgentlessScanning } from 'rhizo-co-terraform-provider-lacework'

new integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.property.externalIdInput">externalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.property.externalId">externalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentials">IntegrationAwsOrgAgentlessScanningCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `externalIdInput`<sup>Optional</sup> <a name="externalIdInput" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.property.externalIdInput"></a>

```typescript
public readonly externalIdInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentialsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IntegrationAwsOrgAgentlessScanningCredentials;
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningCredentials">IntegrationAwsOrgAgentlessScanningCredentials</a>

---


### IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList <a name="IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.Initializer"></a>

```typescript
import { integrationAwsOrgAgentlessScanning } from 'rhizo-co-terraform-provider-lacework'

new integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.get"></a>

```typescript
public get(index: number): IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappings">IntegrationAwsOrgAgentlessScanningOrgAccountMappings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IntegrationAwsOrgAgentlessScanningOrgAccountMappings[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappings">IntegrationAwsOrgAgentlessScanningOrgAccountMappings</a>[]

---


### IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList <a name="IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.Initializer"></a>

```typescript
import { integrationAwsOrgAgentlessScanning } from 'rhizo-co-terraform-provider-lacework'

new integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.get"></a>

```typescript
public get(index: number): IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping">IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping">IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping</a>[]

---


### IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference <a name="IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.Initializer"></a>

```typescript
import { integrationAwsOrgAgentlessScanning } from 'rhizo-co-terraform-provider-lacework'

new integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.property.awsAccountsInput">awsAccountsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.property.laceworkAccountInput">laceworkAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.property.awsAccounts">awsAccounts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.property.laceworkAccount">laceworkAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping">IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awsAccountsInput`<sup>Optional</sup> <a name="awsAccountsInput" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.property.awsAccountsInput"></a>

```typescript
public readonly awsAccountsInput: string[];
```

- *Type:* string[]

---

##### `laceworkAccountInput`<sup>Optional</sup> <a name="laceworkAccountInput" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.property.laceworkAccountInput"></a>

```typescript
public readonly laceworkAccountInput: string;
```

- *Type:* string

---

##### `awsAccounts`<sup>Required</sup> <a name="awsAccounts" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.property.awsAccounts"></a>

```typescript
public readonly awsAccounts: string[];
```

- *Type:* string[]

---

##### `laceworkAccount`<sup>Required</sup> <a name="laceworkAccount" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.property.laceworkAccount"></a>

```typescript
public readonly laceworkAccount: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping">IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping</a>

---


### IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference <a name="IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.Initializer"></a>

```typescript
import { integrationAwsOrgAgentlessScanning } from 'rhizo-co-terraform-provider-lacework'

new integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.putMapping">putMapping</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMapping` <a name="putMapping" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.putMapping"></a>

```typescript
public putMapping(value: IResolvable | IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.putMapping.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping">IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.property.mapping">mapping</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList">IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.property.defaultLaceworkAccountInput">defaultLaceworkAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.property.mappingInput">mappingInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping">IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.property.defaultLaceworkAccount">defaultLaceworkAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappings">IntegrationAwsOrgAgentlessScanningOrgAccountMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mapping`<sup>Required</sup> <a name="mapping" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.property.mapping"></a>

```typescript
public readonly mapping: IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList">IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMappingList</a>

---

##### `defaultLaceworkAccountInput`<sup>Optional</sup> <a name="defaultLaceworkAccountInput" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.property.defaultLaceworkAccountInput"></a>

```typescript
public readonly defaultLaceworkAccountInput: string;
```

- *Type:* string

---

##### `mappingInput`<sup>Optional</sup> <a name="mappingInput" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.property.mappingInput"></a>

```typescript
public readonly mappingInput: IResolvable | IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping">IntegrationAwsOrgAgentlessScanningOrgAccountMappingsMapping</a>[]

---

##### `defaultLaceworkAccount`<sup>Required</sup> <a name="defaultLaceworkAccount" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.property.defaultLaceworkAccount"></a>

```typescript
public readonly defaultLaceworkAccount: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IntegrationAwsOrgAgentlessScanningOrgAccountMappings;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-lacework.integrationAwsOrgAgentlessScanning.IntegrationAwsOrgAgentlessScanningOrgAccountMappings">IntegrationAwsOrgAgentlessScanningOrgAccountMappings</a>

---



