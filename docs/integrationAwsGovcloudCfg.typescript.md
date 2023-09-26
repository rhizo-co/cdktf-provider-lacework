# `lacework_integration_aws_govcloud_cfg`

Refer to the Terraform Registory for docs: [`lacework_integration_aws_govcloud_cfg`](https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_govcloud_cfg).

# `integrationAwsGovcloudCfg` Submodule <a name="`integrationAwsGovcloudCfg` Submodule" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationAwsGovcloudCfg <a name="IntegrationAwsGovcloudCfg" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg"></a>

Represents a {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_govcloud_cfg lacework_integration_aws_govcloud_cfg}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.Initializer"></a>

```typescript
import { integrationAwsGovcloudCfg } from 'rhizo-co-terraform-provider-lacework'

new integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg(scope: Construct, id: string, config: IntegrationAwsGovcloudCfgConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgConfig">IntegrationAwsGovcloudCfgConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgConfig">IntegrationAwsGovcloudCfgConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.putCredentials">putCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.resetRetries">resetRetries</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putCredentials` <a name="putCredentials" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.putCredentials"></a>

```typescript
public putCredentials(value: IntegrationAwsGovcloudCfgCredentials): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.putCredentials.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentials">IntegrationAwsGovcloudCfgCredentials</a>

---

##### `resetEnabled` <a name="resetEnabled" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRetries` <a name="resetRetries" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.resetRetries"></a>

```typescript
public resetRetries(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.isConstruct"></a>

```typescript
import { integrationAwsGovcloudCfg } from 'rhizo-co-terraform-provider-lacework'

integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.isTerraformElement"></a>

```typescript
import { integrationAwsGovcloudCfg } from 'rhizo-co-terraform-provider-lacework'

integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.isTerraformResource"></a>

```typescript
import { integrationAwsGovcloudCfg } from 'rhizo-co-terraform-provider-lacework'

integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.createdOrUpdatedBy">createdOrUpdatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.createdOrUpdatedTime">createdOrUpdatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.credentials">credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference">IntegrationAwsGovcloudCfgCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.intgGuid">intgGuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.orgLevel">orgLevel</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.typeName">typeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.credentialsInput">credentialsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentials">IntegrationAwsGovcloudCfgCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.retriesInput">retriesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.retries">retries</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createdOrUpdatedBy`<sup>Required</sup> <a name="createdOrUpdatedBy" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.createdOrUpdatedBy"></a>

```typescript
public readonly createdOrUpdatedBy: string;
```

- *Type:* string

---

##### `createdOrUpdatedTime`<sup>Required</sup> <a name="createdOrUpdatedTime" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.createdOrUpdatedTime"></a>

```typescript
public readonly createdOrUpdatedTime: string;
```

- *Type:* string

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.credentials"></a>

```typescript
public readonly credentials: IntegrationAwsGovcloudCfgCredentialsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference">IntegrationAwsGovcloudCfgCredentialsOutputReference</a>

---

##### `intgGuid`<sup>Required</sup> <a name="intgGuid" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.intgGuid"></a>

```typescript
public readonly intgGuid: string;
```

- *Type:* string

---

##### `orgLevel`<sup>Required</sup> <a name="orgLevel" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.orgLevel"></a>

```typescript
public readonly orgLevel: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `typeName`<sup>Required</sup> <a name="typeName" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.typeName"></a>

```typescript
public readonly typeName: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `credentialsInput`<sup>Optional</sup> <a name="credentialsInput" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.credentialsInput"></a>

```typescript
public readonly credentialsInput: IntegrationAwsGovcloudCfgCredentials;
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentials">IntegrationAwsGovcloudCfgCredentials</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `retriesInput`<sup>Optional</sup> <a name="retriesInput" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.retriesInput"></a>

```typescript
public readonly retriesInput: number;
```

- *Type:* number

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `retries`<sup>Required</sup> <a name="retries" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.retries"></a>

```typescript
public readonly retries: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfg.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationAwsGovcloudCfgConfig <a name="IntegrationAwsGovcloudCfgConfig" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgConfig.Initializer"></a>

```typescript
import { integrationAwsGovcloudCfg } from 'rhizo-co-terraform-provider-lacework'

const integrationAwsGovcloudCfgConfig: integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgConfig.property.accountId">accountId</a></code> | <code>string</code> | The AWS Account ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgConfig.property.credentials">credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentials">IntegrationAwsGovcloudCfgCredentials</a></code> | credentials block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_govcloud_cfg#name IntegrationAwsGovcloudCfg#name}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_govcloud_cfg#enabled IntegrationAwsGovcloudCfg#enabled}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_govcloud_cfg#id IntegrationAwsGovcloudCfg#id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgConfig.property.retries">retries</a></code> | <code>number</code> | The number of attempts to create the external integration. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The AWS Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_govcloud_cfg#account_id IntegrationAwsGovcloudCfg#account_id}

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgConfig.property.credentials"></a>

```typescript
public readonly credentials: IntegrationAwsGovcloudCfgCredentials;
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentials">IntegrationAwsGovcloudCfgCredentials</a>

credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_govcloud_cfg#credentials IntegrationAwsGovcloudCfg#credentials}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_govcloud_cfg#name IntegrationAwsGovcloudCfg#name}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_govcloud_cfg#enabled IntegrationAwsGovcloudCfg#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_govcloud_cfg#id IntegrationAwsGovcloudCfg#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `retries`<sup>Optional</sup> <a name="retries" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgConfig.property.retries"></a>

```typescript
public readonly retries: number;
```

- *Type:* number

The number of attempts to create the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_govcloud_cfg#retries IntegrationAwsGovcloudCfg#retries}

---

### IntegrationAwsGovcloudCfgCredentials <a name="IntegrationAwsGovcloudCfgCredentials" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentials.Initializer"></a>

```typescript
import { integrationAwsGovcloudCfg } from 'rhizo-co-terraform-provider-lacework'

const integrationAwsGovcloudCfgCredentials: integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentials = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentials.property.accessKeyId">accessKeyId</a></code> | <code>string</code> | The AWS access key ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentials.property.secretAccessKey">secretAccessKey</a></code> | <code>string</code> | The AWS secret key for the specified AWS access key. |

---

##### `accessKeyId`<sup>Required</sup> <a name="accessKeyId" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentials.property.accessKeyId"></a>

```typescript
public readonly accessKeyId: string;
```

- *Type:* string

The AWS access key ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_govcloud_cfg#access_key_id IntegrationAwsGovcloudCfg#access_key_id}

---

##### `secretAccessKey`<sup>Required</sup> <a name="secretAccessKey" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentials.property.secretAccessKey"></a>

```typescript
public readonly secretAccessKey: string;
```

- *Type:* string

The AWS secret key for the specified AWS access key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_govcloud_cfg#secret_access_key IntegrationAwsGovcloudCfg#secret_access_key}

---

## Classes <a name="Classes" id="Classes"></a>

### IntegrationAwsGovcloudCfgCredentialsOutputReference <a name="IntegrationAwsGovcloudCfgCredentialsOutputReference" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.Initializer"></a>

```typescript
import { integrationAwsGovcloudCfg } from 'rhizo-co-terraform-provider-lacework'

new integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.property.accessKeyIdInput">accessKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.property.secretAccessKeyInput">secretAccessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.property.accessKeyId">accessKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.property.secretAccessKey">secretAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentials">IntegrationAwsGovcloudCfgCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessKeyIdInput`<sup>Optional</sup> <a name="accessKeyIdInput" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.property.accessKeyIdInput"></a>

```typescript
public readonly accessKeyIdInput: string;
```

- *Type:* string

---

##### `secretAccessKeyInput`<sup>Optional</sup> <a name="secretAccessKeyInput" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.property.secretAccessKeyInput"></a>

```typescript
public readonly secretAccessKeyInput: string;
```

- *Type:* string

---

##### `accessKeyId`<sup>Required</sup> <a name="accessKeyId" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.property.accessKeyId"></a>

```typescript
public readonly accessKeyId: string;
```

- *Type:* string

---

##### `secretAccessKey`<sup>Required</sup> <a name="secretAccessKey" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.property.secretAccessKey"></a>

```typescript
public readonly secretAccessKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentialsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IntegrationAwsGovcloudCfgCredentials;
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCfg.IntegrationAwsGovcloudCfgCredentials">IntegrationAwsGovcloudCfgCredentials</a>

---



