# `lacework_alert_channel_splunk`

Refer to the Terraform Registory for docs: [`lacework_alert_channel_splunk`](https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_splunk).

# `alertChannelSplunk` Submodule <a name="`alertChannelSplunk` Submodule" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AlertChannelSplunk <a name="AlertChannelSplunk" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk"></a>

Represents a {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_splunk lacework_alert_channel_splunk}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.Initializer"></a>

```typescript
import { alertChannelSplunk } from 'rhizo-co-terraform-provider-lacework'

new alertChannelSplunk.AlertChannelSplunk(scope: Construct, id: string, config: AlertChannelSplunkConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkConfig">AlertChannelSplunkConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkConfig">AlertChannelSplunkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.putEventData">putEventData</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.resetChannel">resetChannel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.resetSsl">resetSsl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.resetTestIntegration">resetTestIntegration</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putEventData` <a name="putEventData" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.putEventData"></a>

```typescript
public putEventData(value: AlertChannelSplunkEventData): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.putEventData.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventData">AlertChannelSplunkEventData</a>

---

##### `resetChannel` <a name="resetChannel" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.resetChannel"></a>

```typescript
public resetChannel(): void
```

##### `resetEnabled` <a name="resetEnabled" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSsl` <a name="resetSsl" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.resetSsl"></a>

```typescript
public resetSsl(): void
```

##### `resetTestIntegration` <a name="resetTestIntegration" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.resetTestIntegration"></a>

```typescript
public resetTestIntegration(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.isConstruct"></a>

```typescript
import { alertChannelSplunk } from 'rhizo-co-terraform-provider-lacework'

alertChannelSplunk.AlertChannelSplunk.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.isTerraformElement"></a>

```typescript
import { alertChannelSplunk } from 'rhizo-co-terraform-provider-lacework'

alertChannelSplunk.AlertChannelSplunk.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.isTerraformResource"></a>

```typescript
import { alertChannelSplunk } from 'rhizo-co-terraform-provider-lacework'

alertChannelSplunk.AlertChannelSplunk.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.createdOrUpdatedBy">createdOrUpdatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.createdOrUpdatedTime">createdOrUpdatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.eventData">eventData</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference">AlertChannelSplunkEventDataOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.intgGuid">intgGuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.orgLevel">orgLevel</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.typeName">typeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.channelInput">channelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.eventDataInput">eventDataInput</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventData">AlertChannelSplunkEventData</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.hecTokenInput">hecTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.hostInput">hostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.sslInput">sslInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.testIntegrationInput">testIntegrationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.channel">channel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.hecToken">hecToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.ssl">ssl</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.testIntegration">testIntegration</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createdOrUpdatedBy`<sup>Required</sup> <a name="createdOrUpdatedBy" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.createdOrUpdatedBy"></a>

```typescript
public readonly createdOrUpdatedBy: string;
```

- *Type:* string

---

##### `createdOrUpdatedTime`<sup>Required</sup> <a name="createdOrUpdatedTime" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.createdOrUpdatedTime"></a>

```typescript
public readonly createdOrUpdatedTime: string;
```

- *Type:* string

---

##### `eventData`<sup>Required</sup> <a name="eventData" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.eventData"></a>

```typescript
public readonly eventData: AlertChannelSplunkEventDataOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference">AlertChannelSplunkEventDataOutputReference</a>

---

##### `intgGuid`<sup>Required</sup> <a name="intgGuid" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.intgGuid"></a>

```typescript
public readonly intgGuid: string;
```

- *Type:* string

---

##### `orgLevel`<sup>Required</sup> <a name="orgLevel" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.orgLevel"></a>

```typescript
public readonly orgLevel: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `typeName`<sup>Required</sup> <a name="typeName" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.typeName"></a>

```typescript
public readonly typeName: string;
```

- *Type:* string

---

##### `channelInput`<sup>Optional</sup> <a name="channelInput" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.channelInput"></a>

```typescript
public readonly channelInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `eventDataInput`<sup>Optional</sup> <a name="eventDataInput" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.eventDataInput"></a>

```typescript
public readonly eventDataInput: AlertChannelSplunkEventData;
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventData">AlertChannelSplunkEventData</a>

---

##### `hecTokenInput`<sup>Optional</sup> <a name="hecTokenInput" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.hecTokenInput"></a>

```typescript
public readonly hecTokenInput: string;
```

- *Type:* string

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.hostInput"></a>

```typescript
public readonly hostInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `sslInput`<sup>Optional</sup> <a name="sslInput" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.sslInput"></a>

```typescript
public readonly sslInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `testIntegrationInput`<sup>Optional</sup> <a name="testIntegrationInput" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.testIntegrationInput"></a>

```typescript
public readonly testIntegrationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `channel`<sup>Required</sup> <a name="channel" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.channel"></a>

```typescript
public readonly channel: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hecToken`<sup>Required</sup> <a name="hecToken" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.hecToken"></a>

```typescript
public readonly hecToken: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `ssl`<sup>Required</sup> <a name="ssl" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.ssl"></a>

```typescript
public readonly ssl: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `testIntegration`<sup>Required</sup> <a name="testIntegration" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.testIntegration"></a>

```typescript
public readonly testIntegration: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AlertChannelSplunkConfig <a name="AlertChannelSplunkConfig" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkConfig.Initializer"></a>

```typescript
import { alertChannelSplunk } from 'rhizo-co-terraform-provider-lacework'

const alertChannelSplunkConfig: alertChannelSplunk.AlertChannelSplunkConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkConfig.property.eventData">eventData</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventData">AlertChannelSplunkEventData</a></code> | event_data block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkConfig.property.hecToken">hecToken</a></code> | <code>string</code> | The token you generate when you create a new HEC input. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkConfig.property.host">host</a></code> | <code>string</code> | The hostname of the client from which you're sending data. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkConfig.property.name">name</a></code> | <code>string</code> | The integration name. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkConfig.property.port">port</a></code> | <code>number</code> | The destination port for forwarding events. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkConfig.property.channel">channel</a></code> | <code>string</code> | The Splunk channel name. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | The state of the external integration. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_splunk#id AlertChannelSplunk#id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkConfig.property.ssl">ssl</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable or Disable SSL. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkConfig.property.testIntegration">testIntegration</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to test the integration of an alert channel upon creation and modification. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `eventData`<sup>Required</sup> <a name="eventData" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkConfig.property.eventData"></a>

```typescript
public readonly eventData: AlertChannelSplunkEventData;
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventData">AlertChannelSplunkEventData</a>

event_data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_splunk#event_data AlertChannelSplunk#event_data}

---

##### `hecToken`<sup>Required</sup> <a name="hecToken" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkConfig.property.hecToken"></a>

```typescript
public readonly hecToken: string;
```

- *Type:* string

The token you generate when you create a new HEC input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_splunk#hec_token AlertChannelSplunk#hec_token}

---

##### `host`<sup>Required</sup> <a name="host" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkConfig.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

The hostname of the client from which you're sending data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_splunk#host AlertChannelSplunk#host}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The integration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_splunk#name AlertChannelSplunk#name}

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkConfig.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

The destination port for forwarding events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_splunk#port AlertChannelSplunk#port}

---

##### `channel`<sup>Optional</sup> <a name="channel" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkConfig.property.channel"></a>

```typescript
public readonly channel: string;
```

- *Type:* string

The Splunk channel name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_splunk#channel AlertChannelSplunk#channel}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

The state of the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_splunk#enabled AlertChannelSplunk#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_splunk#id AlertChannelSplunk#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ssl`<sup>Optional</sup> <a name="ssl" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkConfig.property.ssl"></a>

```typescript
public readonly ssl: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable or Disable SSL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_splunk#ssl AlertChannelSplunk#ssl}

---

##### `testIntegration`<sup>Optional</sup> <a name="testIntegration" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkConfig.property.testIntegration"></a>

```typescript
public readonly testIntegration: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to test the integration of an alert channel upon creation and modification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_splunk#test_integration AlertChannelSplunk#test_integration}

---

### AlertChannelSplunkEventData <a name="AlertChannelSplunkEventData" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventData"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventData.Initializer"></a>

```typescript
import { alertChannelSplunk } from 'rhizo-co-terraform-provider-lacework'

const alertChannelSplunkEventData: alertChannelSplunk.AlertChannelSplunkEventData = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventData.property.index">index</a></code> | <code>string</code> | Index to store generated events. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventData.property.source">source</a></code> | <code>string</code> | The Splunk source. |

---

##### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventData.property.index"></a>

```typescript
public readonly index: string;
```

- *Type:* string

Index to store generated events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_splunk#index AlertChannelSplunk#index}

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventData.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

The Splunk source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_splunk#source AlertChannelSplunk#source}

---

## Classes <a name="Classes" id="Classes"></a>

### AlertChannelSplunkEventDataOutputReference <a name="AlertChannelSplunkEventDataOutputReference" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.Initializer"></a>

```typescript
import { alertChannelSplunk } from 'rhizo-co-terraform-provider-lacework'

new alertChannelSplunk.AlertChannelSplunkEventDataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.property.indexInput">indexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.property.sourceInput">sourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.property.index">index</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventData">AlertChannelSplunkEventData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `indexInput`<sup>Optional</sup> <a name="indexInput" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.property.indexInput"></a>

```typescript
public readonly indexInput: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.property.sourceInput"></a>

```typescript
public readonly sourceInput: string;
```

- *Type:* string

---

##### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.property.index"></a>

```typescript
public readonly index: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AlertChannelSplunkEventData;
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventData">AlertChannelSplunkEventData</a>

---



