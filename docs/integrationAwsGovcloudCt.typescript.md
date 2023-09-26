# `lacework_integration_aws_govcloud_ct`

Refer to the Terraform Registory for docs: [`lacework_integration_aws_govcloud_ct`](https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_govcloud_ct).

# `integrationAwsGovcloudCt` Submodule <a name="`integrationAwsGovcloudCt` Submodule" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationAwsGovcloudCt <a name="IntegrationAwsGovcloudCt" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt"></a>

Represents a {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_govcloud_ct lacework_integration_aws_govcloud_ct}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.Initializer"></a>

```typescript
import { integrationAwsGovcloudCt } from 'rhizo-co-terraform-provider-lacework'

new integrationAwsGovcloudCt.IntegrationAwsGovcloudCt(scope: Construct, id: string, config: IntegrationAwsGovcloudCtConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtConfig">IntegrationAwsGovcloudCtConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtConfig">IntegrationAwsGovcloudCtConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.putCredentials">putCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.resetRetries">resetRetries</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putCredentials` <a name="putCredentials" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.putCredentials"></a>

```typescript
public putCredentials(value: IntegrationAwsGovcloudCtCredentials): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.putCredentials.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentials">IntegrationAwsGovcloudCtCredentials</a>

---

##### `resetEnabled` <a name="resetEnabled" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRetries` <a name="resetRetries" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.resetRetries"></a>

```typescript
public resetRetries(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.isConstruct"></a>

```typescript
import { integrationAwsGovcloudCt } from 'rhizo-co-terraform-provider-lacework'

integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.isTerraformElement"></a>

```typescript
import { integrationAwsGovcloudCt } from 'rhizo-co-terraform-provider-lacework'

integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.isTerraformResource"></a>

```typescript
import { integrationAwsGovcloudCt } from 'rhizo-co-terraform-provider-lacework'

integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.createdOrUpdatedBy">createdOrUpdatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.createdOrUpdatedTime">createdOrUpdatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.credentials">credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference">IntegrationAwsGovcloudCtCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.intgGuid">intgGuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.orgLevel">orgLevel</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.typeName">typeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.credentialsInput">credentialsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentials">IntegrationAwsGovcloudCtCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.queueUrlInput">queueUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.retriesInput">retriesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.queueUrl">queueUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.retries">retries</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createdOrUpdatedBy`<sup>Required</sup> <a name="createdOrUpdatedBy" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.createdOrUpdatedBy"></a>

```typescript
public readonly createdOrUpdatedBy: string;
```

- *Type:* string

---

##### `createdOrUpdatedTime`<sup>Required</sup> <a name="createdOrUpdatedTime" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.createdOrUpdatedTime"></a>

```typescript
public readonly createdOrUpdatedTime: string;
```

- *Type:* string

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.credentials"></a>

```typescript
public readonly credentials: IntegrationAwsGovcloudCtCredentialsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference">IntegrationAwsGovcloudCtCredentialsOutputReference</a>

---

##### `intgGuid`<sup>Required</sup> <a name="intgGuid" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.intgGuid"></a>

```typescript
public readonly intgGuid: string;
```

- *Type:* string

---

##### `orgLevel`<sup>Required</sup> <a name="orgLevel" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.orgLevel"></a>

```typescript
public readonly orgLevel: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `typeName`<sup>Required</sup> <a name="typeName" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.typeName"></a>

```typescript
public readonly typeName: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `credentialsInput`<sup>Optional</sup> <a name="credentialsInput" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.credentialsInput"></a>

```typescript
public readonly credentialsInput: IntegrationAwsGovcloudCtCredentials;
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentials">IntegrationAwsGovcloudCtCredentials</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `queueUrlInput`<sup>Optional</sup> <a name="queueUrlInput" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.queueUrlInput"></a>

```typescript
public readonly queueUrlInput: string;
```

- *Type:* string

---

##### `retriesInput`<sup>Optional</sup> <a name="retriesInput" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.retriesInput"></a>

```typescript
public readonly retriesInput: number;
```

- *Type:* number

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `queueUrl`<sup>Required</sup> <a name="queueUrl" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.queueUrl"></a>

```typescript
public readonly queueUrl: string;
```

- *Type:* string

---

##### `retries`<sup>Required</sup> <a name="retries" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.retries"></a>

```typescript
public readonly retries: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCt.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationAwsGovcloudCtConfig <a name="IntegrationAwsGovcloudCtConfig" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtConfig.Initializer"></a>

```typescript
import { integrationAwsGovcloudCt } from 'rhizo-co-terraform-provider-lacework'

const integrationAwsGovcloudCtConfig: integrationAwsGovcloudCt.IntegrationAwsGovcloudCtConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtConfig.property.accountId">accountId</a></code> | <code>string</code> | The AWS Account ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtConfig.property.credentials">credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentials">IntegrationAwsGovcloudCtCredentials</a></code> | credentials block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_govcloud_ct#name IntegrationAwsGovcloudCt#name}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtConfig.property.queueUrl">queueUrl</a></code> | <code>string</code> | The SQS Queue URL. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_govcloud_ct#enabled IntegrationAwsGovcloudCt#enabled}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_govcloud_ct#id IntegrationAwsGovcloudCt#id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtConfig.property.retries">retries</a></code> | <code>number</code> | The number of attempts to create the external integration. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The AWS Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_govcloud_ct#account_id IntegrationAwsGovcloudCt#account_id}

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtConfig.property.credentials"></a>

```typescript
public readonly credentials: IntegrationAwsGovcloudCtCredentials;
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentials">IntegrationAwsGovcloudCtCredentials</a>

credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_govcloud_ct#credentials IntegrationAwsGovcloudCt#credentials}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_govcloud_ct#name IntegrationAwsGovcloudCt#name}.

---

##### `queueUrl`<sup>Required</sup> <a name="queueUrl" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtConfig.property.queueUrl"></a>

```typescript
public readonly queueUrl: string;
```

- *Type:* string

The SQS Queue URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_govcloud_ct#queue_url IntegrationAwsGovcloudCt#queue_url}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_govcloud_ct#enabled IntegrationAwsGovcloudCt#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_govcloud_ct#id IntegrationAwsGovcloudCt#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `retries`<sup>Optional</sup> <a name="retries" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtConfig.property.retries"></a>

```typescript
public readonly retries: number;
```

- *Type:* number

The number of attempts to create the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_govcloud_ct#retries IntegrationAwsGovcloudCt#retries}

---

### IntegrationAwsGovcloudCtCredentials <a name="IntegrationAwsGovcloudCtCredentials" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentials.Initializer"></a>

```typescript
import { integrationAwsGovcloudCt } from 'rhizo-co-terraform-provider-lacework'

const integrationAwsGovcloudCtCredentials: integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentials = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentials.property.accessKeyId">accessKeyId</a></code> | <code>string</code> | The AWS access key ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentials.property.secretAccessKey">secretAccessKey</a></code> | <code>string</code> | The AWS secret key for the specified AWS access key. |

---

##### `accessKeyId`<sup>Required</sup> <a name="accessKeyId" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentials.property.accessKeyId"></a>

```typescript
public readonly accessKeyId: string;
```

- *Type:* string

The AWS access key ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_govcloud_ct#access_key_id IntegrationAwsGovcloudCt#access_key_id}

---

##### `secretAccessKey`<sup>Required</sup> <a name="secretAccessKey" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentials.property.secretAccessKey"></a>

```typescript
public readonly secretAccessKey: string;
```

- *Type:* string

The AWS secret key for the specified AWS access key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_govcloud_ct#secret_access_key IntegrationAwsGovcloudCt#secret_access_key}

---

## Classes <a name="Classes" id="Classes"></a>

### IntegrationAwsGovcloudCtCredentialsOutputReference <a name="IntegrationAwsGovcloudCtCredentialsOutputReference" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.Initializer"></a>

```typescript
import { integrationAwsGovcloudCt } from 'rhizo-co-terraform-provider-lacework'

new integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.property.accessKeyIdInput">accessKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.property.secretAccessKeyInput">secretAccessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.property.accessKeyId">accessKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.property.secretAccessKey">secretAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentials">IntegrationAwsGovcloudCtCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessKeyIdInput`<sup>Optional</sup> <a name="accessKeyIdInput" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.property.accessKeyIdInput"></a>

```typescript
public readonly accessKeyIdInput: string;
```

- *Type:* string

---

##### `secretAccessKeyInput`<sup>Optional</sup> <a name="secretAccessKeyInput" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.property.secretAccessKeyInput"></a>

```typescript
public readonly secretAccessKeyInput: string;
```

- *Type:* string

---

##### `accessKeyId`<sup>Required</sup> <a name="accessKeyId" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.property.accessKeyId"></a>

```typescript
public readonly accessKeyId: string;
```

- *Type:* string

---

##### `secretAccessKey`<sup>Required</sup> <a name="secretAccessKey" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.property.secretAccessKey"></a>

```typescript
public readonly secretAccessKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentialsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IntegrationAwsGovcloudCtCredentials;
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsGovcloudCt.IntegrationAwsGovcloudCtCredentials">IntegrationAwsGovcloudCtCredentials</a>

---



