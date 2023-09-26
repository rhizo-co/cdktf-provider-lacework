# `lacework_integration_gcp_agentless_scanning`

Refer to the Terraform Registory for docs: [`lacework_integration_gcp_agentless_scanning`](https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning).

# `integrationGcpAgentlessScanning` Submodule <a name="`integrationGcpAgentlessScanning` Submodule" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationGcpAgentlessScanning <a name="IntegrationGcpAgentlessScanning" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning"></a>

Represents a {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning lacework_integration_gcp_agentless_scanning}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer"></a>

```typescript
import { integrationGcpAgentlessScanning } from 'rhizo-co-terraform-provider-lacework'

new integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning(scope: Construct, id: string, config: IntegrationGcpAgentlessScanningConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig">IntegrationGcpAgentlessScanningConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig">IntegrationGcpAgentlessScanningConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.putCredentials">putCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetFilterList">resetFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetQueryText">resetQueryText</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetResourceLevel">resetResourceLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetRetries">resetRetries</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetScanContainers">resetScanContainers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetScanFrequency">resetScanFrequency</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetScanHostVulnerabilities">resetScanHostVulnerabilities</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetScanMultiVolume">resetScanMultiVolume</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetScanStoppedInstances">resetScanStoppedInstances</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putCredentials` <a name="putCredentials" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.putCredentials"></a>

```typescript
public putCredentials(value: IntegrationGcpAgentlessScanningCredentials): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.putCredentials.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentials">IntegrationGcpAgentlessScanningCredentials</a>

---

##### `resetEnabled` <a name="resetEnabled" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetFilterList` <a name="resetFilterList" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetFilterList"></a>

```typescript
public resetFilterList(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetId"></a>

```typescript
public resetId(): void
```

##### `resetQueryText` <a name="resetQueryText" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetQueryText"></a>

```typescript
public resetQueryText(): void
```

##### `resetResourceLevel` <a name="resetResourceLevel" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetResourceLevel"></a>

```typescript
public resetResourceLevel(): void
```

##### `resetRetries` <a name="resetRetries" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetRetries"></a>

```typescript
public resetRetries(): void
```

##### `resetScanContainers` <a name="resetScanContainers" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetScanContainers"></a>

```typescript
public resetScanContainers(): void
```

##### `resetScanFrequency` <a name="resetScanFrequency" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetScanFrequency"></a>

```typescript
public resetScanFrequency(): void
```

##### `resetScanHostVulnerabilities` <a name="resetScanHostVulnerabilities" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetScanHostVulnerabilities"></a>

```typescript
public resetScanHostVulnerabilities(): void
```

##### `resetScanMultiVolume` <a name="resetScanMultiVolume" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetScanMultiVolume"></a>

```typescript
public resetScanMultiVolume(): void
```

##### `resetScanStoppedInstances` <a name="resetScanStoppedInstances" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.resetScanStoppedInstances"></a>

```typescript
public resetScanStoppedInstances(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.isConstruct"></a>

```typescript
import { integrationGcpAgentlessScanning } from 'rhizo-co-terraform-provider-lacework'

integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.isTerraformElement"></a>

```typescript
import { integrationGcpAgentlessScanning } from 'rhizo-co-terraform-provider-lacework'

integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.isTerraformResource"></a>

```typescript
import { integrationGcpAgentlessScanning } from 'rhizo-co-terraform-provider-lacework'

integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.createdOrUpdatedBy">createdOrUpdatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.createdOrUpdatedTime">createdOrUpdatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.credentials">credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference">IntegrationGcpAgentlessScanningCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.intgGuid">intgGuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.orgLevel">orgLevel</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.serverToken">serverToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.typeName">typeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.bucketNameInput">bucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.credentialsInput">credentialsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentials">IntegrationGcpAgentlessScanningCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.filterListInput">filterListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.queryTextInput">queryTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.resourceIdInput">resourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.resourceLevelInput">resourceLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.retriesInput">retriesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanContainersInput">scanContainersInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanFrequencyInput">scanFrequencyInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanHostVulnerabilitiesInput">scanHostVulnerabilitiesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanMultiVolumeInput">scanMultiVolumeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanningProjectIdInput">scanningProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanStoppedInstancesInput">scanStoppedInstancesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.filterList">filterList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.queryText">queryText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.resourceLevel">resourceLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.retries">retries</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanContainers">scanContainers</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanFrequency">scanFrequency</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanHostVulnerabilities">scanHostVulnerabilities</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanMultiVolume">scanMultiVolume</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanningProjectId">scanningProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanStoppedInstances">scanStoppedInstances</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createdOrUpdatedBy`<sup>Required</sup> <a name="createdOrUpdatedBy" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.createdOrUpdatedBy"></a>

```typescript
public readonly createdOrUpdatedBy: string;
```

- *Type:* string

---

##### `createdOrUpdatedTime`<sup>Required</sup> <a name="createdOrUpdatedTime" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.createdOrUpdatedTime"></a>

```typescript
public readonly createdOrUpdatedTime: string;
```

- *Type:* string

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.credentials"></a>

```typescript
public readonly credentials: IntegrationGcpAgentlessScanningCredentialsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference">IntegrationGcpAgentlessScanningCredentialsOutputReference</a>

---

##### `intgGuid`<sup>Required</sup> <a name="intgGuid" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.intgGuid"></a>

```typescript
public readonly intgGuid: string;
```

- *Type:* string

---

##### `orgLevel`<sup>Required</sup> <a name="orgLevel" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.orgLevel"></a>

```typescript
public readonly orgLevel: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `serverToken`<sup>Required</sup> <a name="serverToken" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.serverToken"></a>

```typescript
public readonly serverToken: string;
```

- *Type:* string

---

##### `typeName`<sup>Required</sup> <a name="typeName" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.typeName"></a>

```typescript
public readonly typeName: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.bucketNameInput"></a>

```typescript
public readonly bucketNameInput: string;
```

- *Type:* string

---

##### `credentialsInput`<sup>Optional</sup> <a name="credentialsInput" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.credentialsInput"></a>

```typescript
public readonly credentialsInput: IntegrationGcpAgentlessScanningCredentials;
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentials">IntegrationGcpAgentlessScanningCredentials</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `filterListInput`<sup>Optional</sup> <a name="filterListInput" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.filterListInput"></a>

```typescript
public readonly filterListInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `queryTextInput`<sup>Optional</sup> <a name="queryTextInput" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.queryTextInput"></a>

```typescript
public readonly queryTextInput: string;
```

- *Type:* string

---

##### `resourceIdInput`<sup>Optional</sup> <a name="resourceIdInput" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.resourceIdInput"></a>

```typescript
public readonly resourceIdInput: string;
```

- *Type:* string

---

##### `resourceLevelInput`<sup>Optional</sup> <a name="resourceLevelInput" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.resourceLevelInput"></a>

```typescript
public readonly resourceLevelInput: string;
```

- *Type:* string

---

##### `retriesInput`<sup>Optional</sup> <a name="retriesInput" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.retriesInput"></a>

```typescript
public readonly retriesInput: number;
```

- *Type:* number

---

##### `scanContainersInput`<sup>Optional</sup> <a name="scanContainersInput" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanContainersInput"></a>

```typescript
public readonly scanContainersInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `scanFrequencyInput`<sup>Optional</sup> <a name="scanFrequencyInput" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanFrequencyInput"></a>

```typescript
public readonly scanFrequencyInput: number;
```

- *Type:* number

---

##### `scanHostVulnerabilitiesInput`<sup>Optional</sup> <a name="scanHostVulnerabilitiesInput" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanHostVulnerabilitiesInput"></a>

```typescript
public readonly scanHostVulnerabilitiesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `scanMultiVolumeInput`<sup>Optional</sup> <a name="scanMultiVolumeInput" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanMultiVolumeInput"></a>

```typescript
public readonly scanMultiVolumeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `scanningProjectIdInput`<sup>Optional</sup> <a name="scanningProjectIdInput" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanningProjectIdInput"></a>

```typescript
public readonly scanningProjectIdInput: string;
```

- *Type:* string

---

##### `scanStoppedInstancesInput`<sup>Optional</sup> <a name="scanStoppedInstancesInput" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanStoppedInstancesInput"></a>

```typescript
public readonly scanStoppedInstancesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `filterList`<sup>Required</sup> <a name="filterList" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.filterList"></a>

```typescript
public readonly filterList: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `queryText`<sup>Required</sup> <a name="queryText" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.queryText"></a>

```typescript
public readonly queryText: string;
```

- *Type:* string

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `resourceLevel`<sup>Required</sup> <a name="resourceLevel" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.resourceLevel"></a>

```typescript
public readonly resourceLevel: string;
```

- *Type:* string

---

##### `retries`<sup>Required</sup> <a name="retries" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.retries"></a>

```typescript
public readonly retries: number;
```

- *Type:* number

---

##### `scanContainers`<sup>Required</sup> <a name="scanContainers" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanContainers"></a>

```typescript
public readonly scanContainers: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `scanFrequency`<sup>Required</sup> <a name="scanFrequency" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanFrequency"></a>

```typescript
public readonly scanFrequency: number;
```

- *Type:* number

---

##### `scanHostVulnerabilities`<sup>Required</sup> <a name="scanHostVulnerabilities" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanHostVulnerabilities"></a>

```typescript
public readonly scanHostVulnerabilities: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `scanMultiVolume`<sup>Required</sup> <a name="scanMultiVolume" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanMultiVolume"></a>

```typescript
public readonly scanMultiVolume: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `scanningProjectId`<sup>Required</sup> <a name="scanningProjectId" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanningProjectId"></a>

```typescript
public readonly scanningProjectId: string;
```

- *Type:* string

---

##### `scanStoppedInstances`<sup>Required</sup> <a name="scanStoppedInstances" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.scanStoppedInstances"></a>

```typescript
public readonly scanStoppedInstances: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanning.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationGcpAgentlessScanningConfig <a name="IntegrationGcpAgentlessScanningConfig" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.Initializer"></a>

```typescript
import { integrationGcpAgentlessScanning } from 'rhizo-co-terraform-provider-lacework'

const integrationGcpAgentlessScanningConfig: integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.bucketName">bucketName</a></code> | <code>string</code> | Bucket containing analysis results shared with Lacework platform. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.credentials">credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentials">IntegrationGcpAgentlessScanningCredentials</a></code> | credentials block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.name">name</a></code> | <code>string</code> | The integration name. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.resourceId">resourceId</a></code> | <code>string</code> | Organization Id or Project Id. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.scanningProjectId">scanningProjectId</a></code> | <code>string</code> | Project ID where scanner is deployed. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | The state of the external integration. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.filterList">filterList</a></code> | <code>string[]</code> | List of Projects to specifically include/exclude. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#id IntegrationGcpAgentlessScanning#id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.queryText">queryText</a></code> | <code>string</code> | The LQL query text. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.resourceLevel">resourceLevel</a></code> | <code>string</code> | Integration level - ORGANIZATION / PROJECT. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.retries">retries</a></code> | <code>number</code> | The number of attempts to create the external integration. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.scanContainers">scanContainers</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to includes scanning for containers. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.scanFrequency">scanFrequency</a></code> | <code>number</code> | How often in hours the scan will run in hours. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.scanHostVulnerabilities">scanHostVulnerabilities</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to includes scanning for host vulnerabilities. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.scanMultiVolume">scanMultiVolume</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to scan secondary volumes (true) or only root volumes (false). |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.scanStoppedInstances">scanStoppedInstances</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to scan stopped instances (true). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

Bucket containing analysis results shared with Lacework platform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#bucket_name IntegrationGcpAgentlessScanning#bucket_name}

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.credentials"></a>

```typescript
public readonly credentials: IntegrationGcpAgentlessScanningCredentials;
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentials">IntegrationGcpAgentlessScanningCredentials</a>

credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#credentials IntegrationGcpAgentlessScanning#credentials}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The integration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#name IntegrationGcpAgentlessScanning#name}

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

Organization Id or Project Id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#resource_id IntegrationGcpAgentlessScanning#resource_id}

---

##### `scanningProjectId`<sup>Required</sup> <a name="scanningProjectId" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.scanningProjectId"></a>

```typescript
public readonly scanningProjectId: string;
```

- *Type:* string

Project ID where scanner is deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#scanning_project_id IntegrationGcpAgentlessScanning#scanning_project_id}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

The state of the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#enabled IntegrationGcpAgentlessScanning#enabled}

---

##### `filterList`<sup>Optional</sup> <a name="filterList" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.filterList"></a>

```typescript
public readonly filterList: string[];
```

- *Type:* string[]

List of Projects to specifically include/exclude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#filter_list IntegrationGcpAgentlessScanning#filter_list}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#id IntegrationGcpAgentlessScanning#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `queryText`<sup>Optional</sup> <a name="queryText" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.queryText"></a>

```typescript
public readonly queryText: string;
```

- *Type:* string

The LQL query text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#query_text IntegrationGcpAgentlessScanning#query_text}

---

##### `resourceLevel`<sup>Optional</sup> <a name="resourceLevel" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.resourceLevel"></a>

```typescript
public readonly resourceLevel: string;
```

- *Type:* string

Integration level - ORGANIZATION / PROJECT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#resource_level IntegrationGcpAgentlessScanning#resource_level}

---

##### `retries`<sup>Optional</sup> <a name="retries" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.retries"></a>

```typescript
public readonly retries: number;
```

- *Type:* number

The number of attempts to create the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#retries IntegrationGcpAgentlessScanning#retries}

---

##### `scanContainers`<sup>Optional</sup> <a name="scanContainers" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.scanContainers"></a>

```typescript
public readonly scanContainers: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to includes scanning for containers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#scan_containers IntegrationGcpAgentlessScanning#scan_containers}

---

##### `scanFrequency`<sup>Optional</sup> <a name="scanFrequency" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.scanFrequency"></a>

```typescript
public readonly scanFrequency: number;
```

- *Type:* number

How often in hours the scan will run in hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#scan_frequency IntegrationGcpAgentlessScanning#scan_frequency}

---

##### `scanHostVulnerabilities`<sup>Optional</sup> <a name="scanHostVulnerabilities" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.scanHostVulnerabilities"></a>

```typescript
public readonly scanHostVulnerabilities: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to includes scanning for host vulnerabilities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#scan_host_vulnerabilities IntegrationGcpAgentlessScanning#scan_host_vulnerabilities}

---

##### `scanMultiVolume`<sup>Optional</sup> <a name="scanMultiVolume" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.scanMultiVolume"></a>

```typescript
public readonly scanMultiVolume: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to scan secondary volumes (true) or only root volumes (false).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#scan_multi_volume IntegrationGcpAgentlessScanning#scan_multi_volume}

---

##### `scanStoppedInstances`<sup>Optional</sup> <a name="scanStoppedInstances" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningConfig.property.scanStoppedInstances"></a>

```typescript
public readonly scanStoppedInstances: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to scan stopped instances (true).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#scan_stopped_instances IntegrationGcpAgentlessScanning#scan_stopped_instances}

---

### IntegrationGcpAgentlessScanningCredentials <a name="IntegrationGcpAgentlessScanningCredentials" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentials.Initializer"></a>

```typescript
import { integrationGcpAgentlessScanning } from 'rhizo-co-terraform-provider-lacework'

const integrationGcpAgentlessScanningCredentials: integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentials = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentials.property.clientEmail">clientEmail</a></code> | <code>string</code> | Client email from credentials file. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentials.property.clientId">clientId</a></code> | <code>string</code> | Client Id from credentials file. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentials.property.privateKey">privateKey</a></code> | <code>string</code> | Private Key from credentials file. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentials.property.privateKeyId">privateKeyId</a></code> | <code>string</code> | Private Key Id from credentials file. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentials.property.tokenUri">tokenUri</a></code> | <code>string</code> | Token URI from credentials file. |

---

##### `clientEmail`<sup>Required</sup> <a name="clientEmail" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentials.property.clientEmail"></a>

```typescript
public readonly clientEmail: string;
```

- *Type:* string

Client email from credentials file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#client_email IntegrationGcpAgentlessScanning#client_email}

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentials.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

Client Id from credentials file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#client_id IntegrationGcpAgentlessScanning#client_id}

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentials.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

Private Key from credentials file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#private_key IntegrationGcpAgentlessScanning#private_key}

---

##### `privateKeyId`<sup>Required</sup> <a name="privateKeyId" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentials.property.privateKeyId"></a>

```typescript
public readonly privateKeyId: string;
```

- *Type:* string

Private Key Id from credentials file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#private_key_id IntegrationGcpAgentlessScanning#private_key_id}

---

##### `tokenUri`<sup>Optional</sup> <a name="tokenUri" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentials.property.tokenUri"></a>

```typescript
public readonly tokenUri: string;
```

- *Type:* string

Token URI from credentials file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_agentless_scanning#token_uri IntegrationGcpAgentlessScanning#token_uri}

---

## Classes <a name="Classes" id="Classes"></a>

### IntegrationGcpAgentlessScanningCredentialsOutputReference <a name="IntegrationGcpAgentlessScanningCredentialsOutputReference" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.Initializer"></a>

```typescript
import { integrationGcpAgentlessScanning } from 'rhizo-co-terraform-provider-lacework'

new integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.resetTokenUri">resetTokenUri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTokenUri` <a name="resetTokenUri" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.resetTokenUri"></a>

```typescript
public resetTokenUri(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.clientEmailInput">clientEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.privateKeyIdInput">privateKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.privateKeyInput">privateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.tokenUriInput">tokenUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.clientEmail">clientEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.privateKey">privateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.privateKeyId">privateKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.tokenUri">tokenUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentials">IntegrationGcpAgentlessScanningCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientEmailInput`<sup>Optional</sup> <a name="clientEmailInput" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.clientEmailInput"></a>

```typescript
public readonly clientEmailInput: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `privateKeyIdInput`<sup>Optional</sup> <a name="privateKeyIdInput" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.privateKeyIdInput"></a>

```typescript
public readonly privateKeyIdInput: string;
```

- *Type:* string

---

##### `privateKeyInput`<sup>Optional</sup> <a name="privateKeyInput" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.privateKeyInput"></a>

```typescript
public readonly privateKeyInput: string;
```

- *Type:* string

---

##### `tokenUriInput`<sup>Optional</sup> <a name="tokenUriInput" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.tokenUriInput"></a>

```typescript
public readonly tokenUriInput: string;
```

- *Type:* string

---

##### `clientEmail`<sup>Required</sup> <a name="clientEmail" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.clientEmail"></a>

```typescript
public readonly clientEmail: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

---

##### `privateKeyId`<sup>Required</sup> <a name="privateKeyId" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.privateKeyId"></a>

```typescript
public readonly privateKeyId: string;
```

- *Type:* string

---

##### `tokenUri`<sup>Required</sup> <a name="tokenUri" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.tokenUri"></a>

```typescript
public readonly tokenUri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentialsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IntegrationGcpAgentlessScanningCredentials;
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationGcpAgentlessScanning.IntegrationGcpAgentlessScanningCredentials">IntegrationGcpAgentlessScanningCredentials</a>

---



