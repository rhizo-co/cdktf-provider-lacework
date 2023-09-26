# `lacework_integration_aws_ct`

Refer to the Terraform Registory for docs: [`lacework_integration_aws_ct`](https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_ct).

# `integrationAwsCt` Submodule <a name="`integrationAwsCt` Submodule" id="rhizo-co-terraform-provider-lacework.integrationAwsCt"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationAwsCt <a name="IntegrationAwsCt" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt"></a>

Represents a {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_ct lacework_integration_aws_ct}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.Initializer"></a>

```typescript
import { integrationAwsCt } from 'rhizo-co-terraform-provider-lacework'

new integrationAwsCt.IntegrationAwsCt(scope: Construct, id: string, config: IntegrationAwsCtConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtConfig">IntegrationAwsCtConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtConfig">IntegrationAwsCtConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.putCredentials">putCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.putOrgAccountMappings">putOrgAccountMappings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.resetOrgAccountMappings">resetOrgAccountMappings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.resetRetries">resetRetries</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putCredentials` <a name="putCredentials" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.putCredentials"></a>

```typescript
public putCredentials(value: IntegrationAwsCtCredentials): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.putCredentials.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtCredentials">IntegrationAwsCtCredentials</a>

---

##### `putOrgAccountMappings` <a name="putOrgAccountMappings" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.putOrgAccountMappings"></a>

```typescript
public putOrgAccountMappings(value: IntegrationAwsCtOrgAccountMappings): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.putOrgAccountMappings.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappings">IntegrationAwsCtOrgAccountMappings</a>

---

##### `resetEnabled` <a name="resetEnabled" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.resetId"></a>

```typescript
public resetId(): void
```

##### `resetOrgAccountMappings` <a name="resetOrgAccountMappings" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.resetOrgAccountMappings"></a>

```typescript
public resetOrgAccountMappings(): void
```

##### `resetRetries` <a name="resetRetries" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.resetRetries"></a>

```typescript
public resetRetries(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.isConstruct"></a>

```typescript
import { integrationAwsCt } from 'rhizo-co-terraform-provider-lacework'

integrationAwsCt.IntegrationAwsCt.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.isTerraformElement"></a>

```typescript
import { integrationAwsCt } from 'rhizo-co-terraform-provider-lacework'

integrationAwsCt.IntegrationAwsCt.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.isTerraformResource"></a>

```typescript
import { integrationAwsCt } from 'rhizo-co-terraform-provider-lacework'

integrationAwsCt.IntegrationAwsCt.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.property.createdOrUpdatedBy">createdOrUpdatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.property.createdOrUpdatedTime">createdOrUpdatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.property.credentials">credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtCredentialsOutputReference">IntegrationAwsCtCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.property.intgGuid">intgGuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.property.orgAccountMappings">orgAccountMappings</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsOutputReference">IntegrationAwsCtOrgAccountMappingsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.property.orgLevel">orgLevel</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.property.typeName">typeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.property.credentialsInput">credentialsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtCredentials">IntegrationAwsCtCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.property.orgAccountMappingsInput">orgAccountMappingsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappings">IntegrationAwsCtOrgAccountMappings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.property.queueUrlInput">queueUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.property.retriesInput">retriesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.property.queueUrl">queueUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.property.retries">retries</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createdOrUpdatedBy`<sup>Required</sup> <a name="createdOrUpdatedBy" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.property.createdOrUpdatedBy"></a>

```typescript
public readonly createdOrUpdatedBy: string;
```

- *Type:* string

---

##### `createdOrUpdatedTime`<sup>Required</sup> <a name="createdOrUpdatedTime" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.property.createdOrUpdatedTime"></a>

```typescript
public readonly createdOrUpdatedTime: string;
```

- *Type:* string

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.property.credentials"></a>

```typescript
public readonly credentials: IntegrationAwsCtCredentialsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtCredentialsOutputReference">IntegrationAwsCtCredentialsOutputReference</a>

---

##### `intgGuid`<sup>Required</sup> <a name="intgGuid" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.property.intgGuid"></a>

```typescript
public readonly intgGuid: string;
```

- *Type:* string

---

##### `orgAccountMappings`<sup>Required</sup> <a name="orgAccountMappings" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.property.orgAccountMappings"></a>

```typescript
public readonly orgAccountMappings: IntegrationAwsCtOrgAccountMappingsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsOutputReference">IntegrationAwsCtOrgAccountMappingsOutputReference</a>

---

##### `orgLevel`<sup>Required</sup> <a name="orgLevel" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.property.orgLevel"></a>

```typescript
public readonly orgLevel: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `typeName`<sup>Required</sup> <a name="typeName" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.property.typeName"></a>

```typescript
public readonly typeName: string;
```

- *Type:* string

---

##### `credentialsInput`<sup>Optional</sup> <a name="credentialsInput" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.property.credentialsInput"></a>

```typescript
public readonly credentialsInput: IntegrationAwsCtCredentials;
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtCredentials">IntegrationAwsCtCredentials</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `orgAccountMappingsInput`<sup>Optional</sup> <a name="orgAccountMappingsInput" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.property.orgAccountMappingsInput"></a>

```typescript
public readonly orgAccountMappingsInput: IntegrationAwsCtOrgAccountMappings;
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappings">IntegrationAwsCtOrgAccountMappings</a>

---

##### `queueUrlInput`<sup>Optional</sup> <a name="queueUrlInput" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.property.queueUrlInput"></a>

```typescript
public readonly queueUrlInput: string;
```

- *Type:* string

---

##### `retriesInput`<sup>Optional</sup> <a name="retriesInput" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.property.retriesInput"></a>

```typescript
public readonly retriesInput: number;
```

- *Type:* number

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `queueUrl`<sup>Required</sup> <a name="queueUrl" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.property.queueUrl"></a>

```typescript
public readonly queueUrl: string;
```

- *Type:* string

---

##### `retries`<sup>Required</sup> <a name="retries" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.property.retries"></a>

```typescript
public readonly retries: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCt.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationAwsCtConfig <a name="IntegrationAwsCtConfig" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtConfig.Initializer"></a>

```typescript
import { integrationAwsCt } from 'rhizo-co-terraform-provider-lacework'

const integrationAwsCtConfig: integrationAwsCt.IntegrationAwsCtConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtConfig.property.credentials">credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtCredentials">IntegrationAwsCtCredentials</a></code> | credentials block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtConfig.property.name">name</a></code> | <code>string</code> | The integration name. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtConfig.property.queueUrl">queueUrl</a></code> | <code>string</code> | The SQS Queue URL. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | The state of the external integration. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_ct#id IntegrationAwsCt#id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtConfig.property.orgAccountMappings">orgAccountMappings</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappings">IntegrationAwsCtOrgAccountMappings</a></code> | org_account_mappings block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtConfig.property.retries">retries</a></code> | <code>number</code> | The number of attempts to create the external integration. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtConfig.property.credentials"></a>

```typescript
public readonly credentials: IntegrationAwsCtCredentials;
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtCredentials">IntegrationAwsCtCredentials</a>

credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_ct#credentials IntegrationAwsCt#credentials}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The integration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_ct#name IntegrationAwsCt#name}

---

##### `queueUrl`<sup>Required</sup> <a name="queueUrl" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtConfig.property.queueUrl"></a>

```typescript
public readonly queueUrl: string;
```

- *Type:* string

The SQS Queue URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_ct#queue_url IntegrationAwsCt#queue_url}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

The state of the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_ct#enabled IntegrationAwsCt#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_ct#id IntegrationAwsCt#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `orgAccountMappings`<sup>Optional</sup> <a name="orgAccountMappings" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtConfig.property.orgAccountMappings"></a>

```typescript
public readonly orgAccountMappings: IntegrationAwsCtOrgAccountMappings;
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappings">IntegrationAwsCtOrgAccountMappings</a>

org_account_mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_ct#org_account_mappings IntegrationAwsCt#org_account_mappings}

---

##### `retries`<sup>Optional</sup> <a name="retries" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtConfig.property.retries"></a>

```typescript
public readonly retries: number;
```

- *Type:* number

The number of attempts to create the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_ct#retries IntegrationAwsCt#retries}

---

### IntegrationAwsCtCredentials <a name="IntegrationAwsCtCredentials" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtCredentials.Initializer"></a>

```typescript
import { integrationAwsCt } from 'rhizo-co-terraform-provider-lacework'

const integrationAwsCtCredentials: integrationAwsCt.IntegrationAwsCtCredentials = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtCredentials.property.externalId">externalId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_ct#external_id IntegrationAwsCt#external_id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtCredentials.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_ct#role_arn IntegrationAwsCt#role_arn}. |

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtCredentials.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_ct#external_id IntegrationAwsCt#external_id}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtCredentials.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_ct#role_arn IntegrationAwsCt#role_arn}.

---

### IntegrationAwsCtOrgAccountMappings <a name="IntegrationAwsCtOrgAccountMappings" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappings.Initializer"></a>

```typescript
import { integrationAwsCt } from 'rhizo-co-terraform-provider-lacework'

const integrationAwsCtOrgAccountMappings: integrationAwsCt.IntegrationAwsCtOrgAccountMappings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappings.property.defaultLaceworkAccount">defaultLaceworkAccount</a></code> | <code>string</code> | The default Lacework account name where any non-mapped AWS account will appear. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappings.property.mapping">mapping</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMapping">IntegrationAwsCtOrgAccountMappingsMapping</a>[]</code> | mapping block. |

---

##### `defaultLaceworkAccount`<sup>Required</sup> <a name="defaultLaceworkAccount" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappings.property.defaultLaceworkAccount"></a>

```typescript
public readonly defaultLaceworkAccount: string;
```

- *Type:* string

The default Lacework account name where any non-mapped AWS account will appear.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_ct#default_lacework_account IntegrationAwsCt#default_lacework_account}

---

##### `mapping`<sup>Required</sup> <a name="mapping" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappings.property.mapping"></a>

```typescript
public readonly mapping: IResolvable | IntegrationAwsCtOrgAccountMappingsMapping[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMapping">IntegrationAwsCtOrgAccountMappingsMapping</a>[]

mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_ct#mapping IntegrationAwsCt#mapping}

---

### IntegrationAwsCtOrgAccountMappingsMapping <a name="IntegrationAwsCtOrgAccountMappingsMapping" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMapping"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMapping.Initializer"></a>

```typescript
import { integrationAwsCt } from 'rhizo-co-terraform-provider-lacework'

const integrationAwsCtOrgAccountMappingsMapping: integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMapping = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMapping.property.awsAccounts">awsAccounts</a></code> | <code>string[]</code> | The list of AWS account IDs to map. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMapping.property.laceworkAccount">laceworkAccount</a></code> | <code>string</code> | The Lacework account name where the CloudTrail activity from the selected AWS accounts will appear. |

---

##### `awsAccounts`<sup>Required</sup> <a name="awsAccounts" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMapping.property.awsAccounts"></a>

```typescript
public readonly awsAccounts: string[];
```

- *Type:* string[]

The list of AWS account IDs to map.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_ct#aws_accounts IntegrationAwsCt#aws_accounts}

---

##### `laceworkAccount`<sup>Required</sup> <a name="laceworkAccount" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMapping.property.laceworkAccount"></a>

```typescript
public readonly laceworkAccount: string;
```

- *Type:* string

The Lacework account name where the CloudTrail activity from the selected AWS accounts will appear.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_ct#lacework_account IntegrationAwsCt#lacework_account}

---

## Classes <a name="Classes" id="Classes"></a>

### IntegrationAwsCtCredentialsOutputReference <a name="IntegrationAwsCtCredentialsOutputReference" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtCredentialsOutputReference.Initializer"></a>

```typescript
import { integrationAwsCt } from 'rhizo-co-terraform-provider-lacework'

new integrationAwsCt.IntegrationAwsCtCredentialsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtCredentialsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtCredentialsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtCredentialsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtCredentialsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtCredentialsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtCredentialsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtCredentialsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtCredentialsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtCredentialsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtCredentialsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtCredentialsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtCredentialsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtCredentialsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtCredentialsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtCredentialsOutputReference.property.externalIdInput">externalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtCredentialsOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtCredentialsOutputReference.property.externalId">externalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtCredentialsOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtCredentials">IntegrationAwsCtCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtCredentialsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtCredentialsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `externalIdInput`<sup>Optional</sup> <a name="externalIdInput" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtCredentialsOutputReference.property.externalIdInput"></a>

```typescript
public readonly externalIdInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtCredentialsOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtCredentialsOutputReference.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtCredentialsOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtCredentialsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IntegrationAwsCtCredentials;
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtCredentials">IntegrationAwsCtCredentials</a>

---


### IntegrationAwsCtOrgAccountMappingsMappingList <a name="IntegrationAwsCtOrgAccountMappingsMappingList" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMappingList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMappingList.Initializer"></a>

```typescript
import { integrationAwsCt } from 'rhizo-co-terraform-provider-lacework'

new integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMappingList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMappingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMappingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMappingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMappingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMappingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMappingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMappingList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMappingList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMappingList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMappingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMappingList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMappingList.get"></a>

```typescript
public get(index: number): IntegrationAwsCtOrgAccountMappingsMappingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMappingList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMappingList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMappingList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMappingList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMapping">IntegrationAwsCtOrgAccountMappingsMapping</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMappingList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMappingList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMappingList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IntegrationAwsCtOrgAccountMappingsMapping[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMapping">IntegrationAwsCtOrgAccountMappingsMapping</a>[]

---


### IntegrationAwsCtOrgAccountMappingsMappingOutputReference <a name="IntegrationAwsCtOrgAccountMappingsMappingOutputReference" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMappingOutputReference.Initializer"></a>

```typescript
import { integrationAwsCt } from 'rhizo-co-terraform-provider-lacework'

new integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMappingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMappingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMappingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMappingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMappingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMappingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMappingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMappingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMappingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMappingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMappingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMappingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMappingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMappingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMappingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMappingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMappingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMappingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMappingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMappingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMappingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMappingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMappingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMappingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMappingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMappingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMappingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMappingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMappingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMappingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMappingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMappingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMappingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMappingOutputReference.property.awsAccountsInput">awsAccountsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMappingOutputReference.property.laceworkAccountInput">laceworkAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMappingOutputReference.property.awsAccounts">awsAccounts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMappingOutputReference.property.laceworkAccount">laceworkAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMappingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMapping">IntegrationAwsCtOrgAccountMappingsMapping</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMappingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMappingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awsAccountsInput`<sup>Optional</sup> <a name="awsAccountsInput" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMappingOutputReference.property.awsAccountsInput"></a>

```typescript
public readonly awsAccountsInput: string[];
```

- *Type:* string[]

---

##### `laceworkAccountInput`<sup>Optional</sup> <a name="laceworkAccountInput" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMappingOutputReference.property.laceworkAccountInput"></a>

```typescript
public readonly laceworkAccountInput: string;
```

- *Type:* string

---

##### `awsAccounts`<sup>Required</sup> <a name="awsAccounts" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMappingOutputReference.property.awsAccounts"></a>

```typescript
public readonly awsAccounts: string[];
```

- *Type:* string[]

---

##### `laceworkAccount`<sup>Required</sup> <a name="laceworkAccount" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMappingOutputReference.property.laceworkAccount"></a>

```typescript
public readonly laceworkAccount: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMappingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IntegrationAwsCtOrgAccountMappingsMapping;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMapping">IntegrationAwsCtOrgAccountMappingsMapping</a>

---


### IntegrationAwsCtOrgAccountMappingsOutputReference <a name="IntegrationAwsCtOrgAccountMappingsOutputReference" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsOutputReference.Initializer"></a>

```typescript
import { integrationAwsCt } from 'rhizo-co-terraform-provider-lacework'

new integrationAwsCt.IntegrationAwsCtOrgAccountMappingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsOutputReference.putMapping">putMapping</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMapping` <a name="putMapping" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsOutputReference.putMapping"></a>

```typescript
public putMapping(value: IResolvable | IntegrationAwsCtOrgAccountMappingsMapping[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsOutputReference.putMapping.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMapping">IntegrationAwsCtOrgAccountMappingsMapping</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsOutputReference.property.mapping">mapping</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMappingList">IntegrationAwsCtOrgAccountMappingsMappingList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsOutputReference.property.defaultLaceworkAccountInput">defaultLaceworkAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsOutputReference.property.mappingInput">mappingInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMapping">IntegrationAwsCtOrgAccountMappingsMapping</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsOutputReference.property.defaultLaceworkAccount">defaultLaceworkAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappings">IntegrationAwsCtOrgAccountMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mapping`<sup>Required</sup> <a name="mapping" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsOutputReference.property.mapping"></a>

```typescript
public readonly mapping: IntegrationAwsCtOrgAccountMappingsMappingList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMappingList">IntegrationAwsCtOrgAccountMappingsMappingList</a>

---

##### `defaultLaceworkAccountInput`<sup>Optional</sup> <a name="defaultLaceworkAccountInput" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsOutputReference.property.defaultLaceworkAccountInput"></a>

```typescript
public readonly defaultLaceworkAccountInput: string;
```

- *Type:* string

---

##### `mappingInput`<sup>Optional</sup> <a name="mappingInput" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsOutputReference.property.mappingInput"></a>

```typescript
public readonly mappingInput: IResolvable | IntegrationAwsCtOrgAccountMappingsMapping[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsMapping">IntegrationAwsCtOrgAccountMappingsMapping</a>[]

---

##### `defaultLaceworkAccount`<sup>Required</sup> <a name="defaultLaceworkAccount" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsOutputReference.property.defaultLaceworkAccount"></a>

```typescript
public readonly defaultLaceworkAccount: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IntegrationAwsCtOrgAccountMappings;
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationAwsCt.IntegrationAwsCtOrgAccountMappings">IntegrationAwsCtOrgAccountMappings</a>

---



