# `lacework_integration_gcp_gke_audit_log`

Refer to the Terraform Registory for docs: [`lacework_integration_gcp_gke_audit_log`](https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log).

# `integrationGcpGkeAuditLog` Submodule <a name="`integrationGcpGkeAuditLog` Submodule" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationGcpGkeAuditLog <a name="IntegrationGcpGkeAuditLog" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog"></a>

Represents a {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log lacework_integration_gcp_gke_audit_log}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.Initializer"></a>

```typescript
import { integrationGcpGkeAuditLog } from 'rhizo-co-terraform-provider-lacework'

new integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog(scope: Construct, id: string, config: IntegrationGcpGkeAuditLogConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig">IntegrationGcpGkeAuditLogConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig">IntegrationGcpGkeAuditLogConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.putCredentials">putCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.resetOrganizationId">resetOrganizationId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.resetRetries">resetRetries</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putCredentials` <a name="putCredentials" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.putCredentials"></a>

```typescript
public putCredentials(value: IntegrationGcpGkeAuditLogCredentials): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.putCredentials.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentials">IntegrationGcpGkeAuditLogCredentials</a>

---

##### `resetEnabled` <a name="resetEnabled" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.resetId"></a>

```typescript
public resetId(): void
```

##### `resetOrganizationId` <a name="resetOrganizationId" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.resetOrganizationId"></a>

```typescript
public resetOrganizationId(): void
```

##### `resetRetries` <a name="resetRetries" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.resetRetries"></a>

```typescript
public resetRetries(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.isConstruct"></a>

```typescript
import { integrationGcpGkeAuditLog } from 'rhizo-co-terraform-provider-lacework'

integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.isTerraformElement"></a>

```typescript
import { integrationGcpGkeAuditLog } from 'rhizo-co-terraform-provider-lacework'

integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.isTerraformResource"></a>

```typescript
import { integrationGcpGkeAuditLog } from 'rhizo-co-terraform-provider-lacework'

integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.createdOrUpdatedBy">createdOrUpdatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.createdOrUpdatedTime">createdOrUpdatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.credentials">credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference">IntegrationGcpGkeAuditLogCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.intgGuid">intgGuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.isOrg">isOrg</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.credentialsInput">credentialsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentials">IntegrationGcpGkeAuditLogCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.integrationTypeInput">integrationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.organizationIdInput">organizationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.retriesInput">retriesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.subscriptionInput">subscriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.integrationType">integrationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.organizationId">organizationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.retries">retries</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.subscription">subscription</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createdOrUpdatedBy`<sup>Required</sup> <a name="createdOrUpdatedBy" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.createdOrUpdatedBy"></a>

```typescript
public readonly createdOrUpdatedBy: string;
```

- *Type:* string

---

##### `createdOrUpdatedTime`<sup>Required</sup> <a name="createdOrUpdatedTime" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.createdOrUpdatedTime"></a>

```typescript
public readonly createdOrUpdatedTime: string;
```

- *Type:* string

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.credentials"></a>

```typescript
public readonly credentials: IntegrationGcpGkeAuditLogCredentialsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference">IntegrationGcpGkeAuditLogCredentialsOutputReference</a>

---

##### `intgGuid`<sup>Required</sup> <a name="intgGuid" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.intgGuid"></a>

```typescript
public readonly intgGuid: string;
```

- *Type:* string

---

##### `isOrg`<sup>Required</sup> <a name="isOrg" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.isOrg"></a>

```typescript
public readonly isOrg: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `credentialsInput`<sup>Optional</sup> <a name="credentialsInput" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.credentialsInput"></a>

```typescript
public readonly credentialsInput: IntegrationGcpGkeAuditLogCredentials;
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentials">IntegrationGcpGkeAuditLogCredentials</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `integrationTypeInput`<sup>Optional</sup> <a name="integrationTypeInput" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.integrationTypeInput"></a>

```typescript
public readonly integrationTypeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `organizationIdInput`<sup>Optional</sup> <a name="organizationIdInput" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.organizationIdInput"></a>

```typescript
public readonly organizationIdInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `retriesInput`<sup>Optional</sup> <a name="retriesInput" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.retriesInput"></a>

```typescript
public readonly retriesInput: number;
```

- *Type:* number

---

##### `subscriptionInput`<sup>Optional</sup> <a name="subscriptionInput" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.subscriptionInput"></a>

```typescript
public readonly subscriptionInput: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `integrationType`<sup>Required</sup> <a name="integrationType" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.integrationType"></a>

```typescript
public readonly integrationType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.organizationId"></a>

```typescript
public readonly organizationId: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `retries`<sup>Required</sup> <a name="retries" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.retries"></a>

```typescript
public readonly retries: number;
```

- *Type:* number

---

##### `subscription`<sup>Required</sup> <a name="subscription" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.subscription"></a>

```typescript
public readonly subscription: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLog.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationGcpGkeAuditLogConfig <a name="IntegrationGcpGkeAuditLogConfig" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.Initializer"></a>

```typescript
import { integrationGcpGkeAuditLog } from 'rhizo-co-terraform-provider-lacework'

const integrationGcpGkeAuditLogConfig: integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.credentials">credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentials">IntegrationGcpGkeAuditLogCredentials</a></code> | credentials block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.integrationType">integrationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log#integration_type IntegrationGcpGkeAuditLog#integration_type}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.name">name</a></code> | <code>string</code> | The integration name. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.projectId">projectId</a></code> | <code>string</code> | The GCP Project ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.subscription">subscription</a></code> | <code>string</code> | The PubSub Subscription. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | The state of the external integration. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log#id IntegrationGcpGkeAuditLog#id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.organizationId">organizationId</a></code> | <code>string</code> | The GCP Organization ID (required when integration_type is organization). |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.retries">retries</a></code> | <code>number</code> | The number of attempts to create the external integration. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.credentials"></a>

```typescript
public readonly credentials: IntegrationGcpGkeAuditLogCredentials;
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentials">IntegrationGcpGkeAuditLogCredentials</a>

credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log#credentials IntegrationGcpGkeAuditLog#credentials}

---

##### `integrationType`<sup>Required</sup> <a name="integrationType" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.integrationType"></a>

```typescript
public readonly integrationType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log#integration_type IntegrationGcpGkeAuditLog#integration_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The integration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log#name IntegrationGcpGkeAuditLog#name}

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

The GCP Project ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log#project_id IntegrationGcpGkeAuditLog#project_id}

---

##### `subscription`<sup>Required</sup> <a name="subscription" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.subscription"></a>

```typescript
public readonly subscription: string;
```

- *Type:* string

The PubSub Subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log#subscription IntegrationGcpGkeAuditLog#subscription}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

The state of the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log#enabled IntegrationGcpGkeAuditLog#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log#id IntegrationGcpGkeAuditLog#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `organizationId`<sup>Optional</sup> <a name="organizationId" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.organizationId"></a>

```typescript
public readonly organizationId: string;
```

- *Type:* string

The GCP Organization ID (required when integration_type is organization).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log#organization_id IntegrationGcpGkeAuditLog#organization_id}

---

##### `retries`<sup>Optional</sup> <a name="retries" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogConfig.property.retries"></a>

```typescript
public readonly retries: number;
```

- *Type:* number

The number of attempts to create the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log#retries IntegrationGcpGkeAuditLog#retries}

---

### IntegrationGcpGkeAuditLogCredentials <a name="IntegrationGcpGkeAuditLogCredentials" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentials.Initializer"></a>

```typescript
import { integrationGcpGkeAuditLog } from 'rhizo-co-terraform-provider-lacework'

const integrationGcpGkeAuditLogCredentials: integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentials = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentials.property.clientEmail">clientEmail</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log#client_email IntegrationGcpGkeAuditLog#client_email}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentials.property.clientId">clientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log#client_id IntegrationGcpGkeAuditLog#client_id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentials.property.privateKey">privateKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log#private_key IntegrationGcpGkeAuditLog#private_key}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentials.property.privateKeyId">privateKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log#private_key_id IntegrationGcpGkeAuditLog#private_key_id}. |

---

##### `clientEmail`<sup>Required</sup> <a name="clientEmail" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentials.property.clientEmail"></a>

```typescript
public readonly clientEmail: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log#client_email IntegrationGcpGkeAuditLog#client_email}.

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentials.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log#client_id IntegrationGcpGkeAuditLog#client_id}.

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentials.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log#private_key IntegrationGcpGkeAuditLog#private_key}.

---

##### `privateKeyId`<sup>Required</sup> <a name="privateKeyId" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentials.property.privateKeyId"></a>

```typescript
public readonly privateKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_gcp_gke_audit_log#private_key_id IntegrationGcpGkeAuditLog#private_key_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### IntegrationGcpGkeAuditLogCredentialsOutputReference <a name="IntegrationGcpGkeAuditLogCredentialsOutputReference" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.Initializer"></a>

```typescript
import { integrationGcpGkeAuditLog } from 'rhizo-co-terraform-provider-lacework'

new integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.property.clientEmailInput">clientEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.property.privateKeyIdInput">privateKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.property.privateKeyInput">privateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.property.clientEmail">clientEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.property.privateKey">privateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.property.privateKeyId">privateKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentials">IntegrationGcpGkeAuditLogCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientEmailInput`<sup>Optional</sup> <a name="clientEmailInput" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.property.clientEmailInput"></a>

```typescript
public readonly clientEmailInput: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `privateKeyIdInput`<sup>Optional</sup> <a name="privateKeyIdInput" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.property.privateKeyIdInput"></a>

```typescript
public readonly privateKeyIdInput: string;
```

- *Type:* string

---

##### `privateKeyInput`<sup>Optional</sup> <a name="privateKeyInput" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.property.privateKeyInput"></a>

```typescript
public readonly privateKeyInput: string;
```

- *Type:* string

---

##### `clientEmail`<sup>Required</sup> <a name="clientEmail" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.property.clientEmail"></a>

```typescript
public readonly clientEmail: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

---

##### `privateKeyId`<sup>Required</sup> <a name="privateKeyId" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.property.privateKeyId"></a>

```typescript
public readonly privateKeyId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentialsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IntegrationGcpGkeAuditLogCredentials;
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.integrationGcpGkeAuditLog.IntegrationGcpGkeAuditLogCredentials">IntegrationGcpGkeAuditLogCredentials</a>

---



