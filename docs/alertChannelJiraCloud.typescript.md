# `lacework_alert_channel_jira_cloud`

Refer to the Terraform Registory for docs: [`lacework_alert_channel_jira_cloud`](https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_jira_cloud).

# `alertChannelJiraCloud` Submodule <a name="`alertChannelJiraCloud` Submodule" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AlertChannelJiraCloud <a name="AlertChannelJiraCloud" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud"></a>

Represents a {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_jira_cloud lacework_alert_channel_jira_cloud}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.Initializer"></a>

```typescript
import { alertChannelJiraCloud } from 'rhizo-co-terraform-provider-lacework'

new alertChannelJiraCloud.AlertChannelJiraCloud(scope: Construct, id: string, config: AlertChannelJiraCloudConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloudConfig">AlertChannelJiraCloudConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloudConfig">AlertChannelJiraCloudConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.resetConfiguration">resetConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.resetCustomTemplateFile">resetCustomTemplateFile</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.resetGroupIssuesBy">resetGroupIssuesBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.resetTestIntegration">resetTestIntegration</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetConfiguration` <a name="resetConfiguration" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.resetConfiguration"></a>

```typescript
public resetConfiguration(): void
```

##### `resetCustomTemplateFile` <a name="resetCustomTemplateFile" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.resetCustomTemplateFile"></a>

```typescript
public resetCustomTemplateFile(): void
```

##### `resetEnabled` <a name="resetEnabled" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetGroupIssuesBy` <a name="resetGroupIssuesBy" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.resetGroupIssuesBy"></a>

```typescript
public resetGroupIssuesBy(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTestIntegration` <a name="resetTestIntegration" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.resetTestIntegration"></a>

```typescript
public resetTestIntegration(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.isConstruct"></a>

```typescript
import { alertChannelJiraCloud } from 'rhizo-co-terraform-provider-lacework'

alertChannelJiraCloud.AlertChannelJiraCloud.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.isTerraformElement"></a>

```typescript
import { alertChannelJiraCloud } from 'rhizo-co-terraform-provider-lacework'

alertChannelJiraCloud.AlertChannelJiraCloud.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.isTerraformResource"></a>

```typescript
import { alertChannelJiraCloud } from 'rhizo-co-terraform-provider-lacework'

alertChannelJiraCloud.AlertChannelJiraCloud.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.property.createdOrUpdatedBy">createdOrUpdatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.property.createdOrUpdatedTime">createdOrUpdatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.property.intgGuid">intgGuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.property.orgLevel">orgLevel</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.property.typeName">typeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.property.apiTokenInput">apiTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.property.configurationInput">configurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.property.customTemplateFileInput">customTemplateFileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.property.groupIssuesByInput">groupIssuesByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.property.issueTypeInput">issueTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.property.jiraUrlInput">jiraUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.property.projectKeyInput">projectKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.property.testIntegrationInput">testIntegrationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.property.apiToken">apiToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.property.configuration">configuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.property.customTemplateFile">customTemplateFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.property.groupIssuesBy">groupIssuesBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.property.issueType">issueType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.property.jiraUrl">jiraUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.property.projectKey">projectKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.property.testIntegration">testIntegration</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.property.username">username</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createdOrUpdatedBy`<sup>Required</sup> <a name="createdOrUpdatedBy" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.property.createdOrUpdatedBy"></a>

```typescript
public readonly createdOrUpdatedBy: string;
```

- *Type:* string

---

##### `createdOrUpdatedTime`<sup>Required</sup> <a name="createdOrUpdatedTime" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.property.createdOrUpdatedTime"></a>

```typescript
public readonly createdOrUpdatedTime: string;
```

- *Type:* string

---

##### `intgGuid`<sup>Required</sup> <a name="intgGuid" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.property.intgGuid"></a>

```typescript
public readonly intgGuid: string;
```

- *Type:* string

---

##### `orgLevel`<sup>Required</sup> <a name="orgLevel" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.property.orgLevel"></a>

```typescript
public readonly orgLevel: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `typeName`<sup>Required</sup> <a name="typeName" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.property.typeName"></a>

```typescript
public readonly typeName: string;
```

- *Type:* string

---

##### `apiTokenInput`<sup>Optional</sup> <a name="apiTokenInput" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.property.apiTokenInput"></a>

```typescript
public readonly apiTokenInput: string;
```

- *Type:* string

---

##### `configurationInput`<sup>Optional</sup> <a name="configurationInput" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.property.configurationInput"></a>

```typescript
public readonly configurationInput: string;
```

- *Type:* string

---

##### `customTemplateFileInput`<sup>Optional</sup> <a name="customTemplateFileInput" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.property.customTemplateFileInput"></a>

```typescript
public readonly customTemplateFileInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `groupIssuesByInput`<sup>Optional</sup> <a name="groupIssuesByInput" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.property.groupIssuesByInput"></a>

```typescript
public readonly groupIssuesByInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `issueTypeInput`<sup>Optional</sup> <a name="issueTypeInput" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.property.issueTypeInput"></a>

```typescript
public readonly issueTypeInput: string;
```

- *Type:* string

---

##### `jiraUrlInput`<sup>Optional</sup> <a name="jiraUrlInput" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.property.jiraUrlInput"></a>

```typescript
public readonly jiraUrlInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectKeyInput`<sup>Optional</sup> <a name="projectKeyInput" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.property.projectKeyInput"></a>

```typescript
public readonly projectKeyInput: string;
```

- *Type:* string

---

##### `testIntegrationInput`<sup>Optional</sup> <a name="testIntegrationInput" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.property.testIntegrationInput"></a>

```typescript
public readonly testIntegrationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `apiToken`<sup>Required</sup> <a name="apiToken" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.property.apiToken"></a>

```typescript
public readonly apiToken: string;
```

- *Type:* string

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.property.configuration"></a>

```typescript
public readonly configuration: string;
```

- *Type:* string

---

##### `customTemplateFile`<sup>Required</sup> <a name="customTemplateFile" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.property.customTemplateFile"></a>

```typescript
public readonly customTemplateFile: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `groupIssuesBy`<sup>Required</sup> <a name="groupIssuesBy" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.property.groupIssuesBy"></a>

```typescript
public readonly groupIssuesBy: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `issueType`<sup>Required</sup> <a name="issueType" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.property.issueType"></a>

```typescript
public readonly issueType: string;
```

- *Type:* string

---

##### `jiraUrl`<sup>Required</sup> <a name="jiraUrl" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.property.jiraUrl"></a>

```typescript
public readonly jiraUrl: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `projectKey`<sup>Required</sup> <a name="projectKey" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.property.projectKey"></a>

```typescript
public readonly projectKey: string;
```

- *Type:* string

---

##### `testIntegration`<sup>Required</sup> <a name="testIntegration" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.property.testIntegration"></a>

```typescript
public readonly testIntegration: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloud.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AlertChannelJiraCloudConfig <a name="AlertChannelJiraCloudConfig" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloudConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloudConfig.Initializer"></a>

```typescript
import { alertChannelJiraCloud } from 'rhizo-co-terraform-provider-lacework'

const alertChannelJiraCloudConfig: alertChannelJiraCloud.AlertChannelJiraCloudConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloudConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloudConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloudConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloudConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloudConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloudConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloudConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloudConfig.property.apiToken">apiToken</a></code> | <code>string</code> | The Jira API Token. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloudConfig.property.issueType">issueType</a></code> | <code>string</code> | The Jira issue type (such as a Bug) to create when a new Jira issue is created. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloudConfig.property.jiraUrl">jiraUrl</a></code> | <code>string</code> | The URL of your Jira implementation without https protocol. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloudConfig.property.name">name</a></code> | <code>string</code> | The alert channel integration name. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloudConfig.property.projectKey">projectKey</a></code> | <code>string</code> | The project key for the Jira project where the new Jira issues should be created. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloudConfig.property.username">username</a></code> | <code>string</code> | The Jira user name. Lacework recommends a dedicated Jira user. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloudConfig.property.configuration">configuration</a></code> | <code>string</code> | Whether the integration is Unidirectional or Bidirectional. Defaults to Unidirectional. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloudConfig.property.customTemplateFile">customTemplateFile</a></code> | <code>string</code> | A Custom Template JSON file to populate fields in the new Jira issues. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloudConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | The state of the external integration. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloudConfig.property.groupIssuesBy">groupIssuesBy</a></code> | <code>string</code> | Defines how Lacework compliance events get grouped. Must be one of Events or Resources. Defaults to Events. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloudConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_jira_cloud#id AlertChannelJiraCloud#id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloudConfig.property.testIntegration">testIntegration</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to test the integration of an alert channel upon creation and modification. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloudConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloudConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloudConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloudConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloudConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloudConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloudConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `apiToken`<sup>Required</sup> <a name="apiToken" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloudConfig.property.apiToken"></a>

```typescript
public readonly apiToken: string;
```

- *Type:* string

The Jira API Token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_jira_cloud#api_token AlertChannelJiraCloud#api_token}

---

##### `issueType`<sup>Required</sup> <a name="issueType" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloudConfig.property.issueType"></a>

```typescript
public readonly issueType: string;
```

- *Type:* string

The Jira issue type (such as a Bug) to create when a new Jira issue is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_jira_cloud#issue_type AlertChannelJiraCloud#issue_type}

---

##### `jiraUrl`<sup>Required</sup> <a name="jiraUrl" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloudConfig.property.jiraUrl"></a>

```typescript
public readonly jiraUrl: string;
```

- *Type:* string

The URL of your Jira implementation without https protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_jira_cloud#jira_url AlertChannelJiraCloud#jira_url}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloudConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The alert channel integration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_jira_cloud#name AlertChannelJiraCloud#name}

---

##### `projectKey`<sup>Required</sup> <a name="projectKey" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloudConfig.property.projectKey"></a>

```typescript
public readonly projectKey: string;
```

- *Type:* string

The project key for the Jira project where the new Jira issues should be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_jira_cloud#project_key AlertChannelJiraCloud#project_key}

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloudConfig.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

The Jira user name. Lacework recommends a dedicated Jira user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_jira_cloud#username AlertChannelJiraCloud#username}

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloudConfig.property.configuration"></a>

```typescript
public readonly configuration: string;
```

- *Type:* string

Whether the integration is Unidirectional or Bidirectional. Defaults to Unidirectional.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_jira_cloud#configuration AlertChannelJiraCloud#configuration}

---

##### `customTemplateFile`<sup>Optional</sup> <a name="customTemplateFile" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloudConfig.property.customTemplateFile"></a>

```typescript
public readonly customTemplateFile: string;
```

- *Type:* string

A Custom Template JSON file to populate fields in the new Jira issues.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_jira_cloud#custom_template_file AlertChannelJiraCloud#custom_template_file}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloudConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

The state of the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_jira_cloud#enabled AlertChannelJiraCloud#enabled}

---

##### `groupIssuesBy`<sup>Optional</sup> <a name="groupIssuesBy" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloudConfig.property.groupIssuesBy"></a>

```typescript
public readonly groupIssuesBy: string;
```

- *Type:* string

Defines how Lacework compliance events get grouped. Must be one of Events or Resources. Defaults to Events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_jira_cloud#group_issues_by AlertChannelJiraCloud#group_issues_by}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloudConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_jira_cloud#id AlertChannelJiraCloud#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `testIntegration`<sup>Optional</sup> <a name="testIntegration" id="rhizo-co-terraform-provider-lacework.alertChannelJiraCloud.AlertChannelJiraCloudConfig.property.testIntegration"></a>

```typescript
public readonly testIntegration: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to test the integration of an alert channel upon creation and modification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_jira_cloud#test_integration AlertChannelJiraCloud#test_integration}

---



