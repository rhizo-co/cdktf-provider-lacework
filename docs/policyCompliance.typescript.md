# `lacework_policy_compliance`

Refer to the Terraform Registory for docs: [`lacework_policy_compliance`](https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/policy_compliance).

# `policyCompliance` Submodule <a name="`policyCompliance` Submodule" id="rhizo-co-terraform-provider-lacework.policyCompliance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PolicyCompliance <a name="PolicyCompliance" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance"></a>

Represents a {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/policy_compliance lacework_policy_compliance}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.Initializer"></a>

```typescript
import { policyCompliance } from 'rhizo-co-terraform-provider-lacework'

new policyCompliance.PolicyCompliance(scope: Construct, id: string, config: PolicyComplianceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig">PolicyComplianceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig">PolicyComplianceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.resetAlertingEnabled">resetAlertingEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.resetPolicyIdSuffix">resetPolicyIdSuffix</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.resetRemediation">resetRemediation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAlertingEnabled` <a name="resetAlertingEnabled" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.resetAlertingEnabled"></a>

```typescript
public resetAlertingEnabled(): void
```

##### `resetEnabled` <a name="resetEnabled" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetPolicyIdSuffix` <a name="resetPolicyIdSuffix" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.resetPolicyIdSuffix"></a>

```typescript
public resetPolicyIdSuffix(): void
```

##### `resetRemediation` <a name="resetRemediation" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.resetRemediation"></a>

```typescript
public resetRemediation(): void
```

##### `resetTags` <a name="resetTags" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.isConstruct"></a>

```typescript
import { policyCompliance } from 'rhizo-co-terraform-provider-lacework'

policyCompliance.PolicyCompliance.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.isTerraformElement"></a>

```typescript
import { policyCompliance } from 'rhizo-co-terraform-provider-lacework'

policyCompliance.PolicyCompliance.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.isTerraformResource"></a>

```typescript
import { policyCompliance } from 'rhizo-co-terraform-provider-lacework'

policyCompliance.PolicyCompliance.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.computedTags">computedTags</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.updatedBy">updatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.updatedTime">updatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.alertingEnabledInput">alertingEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.policyIdSuffixInput">policyIdSuffixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.queryIdInput">queryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.remediationInput">remediationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.severityInput">severityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.alertingEnabled">alertingEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.policyIdSuffix">policyIdSuffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.queryId">queryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.remediation">remediation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.severity">severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.title">title</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `computedTags`<sup>Required</sup> <a name="computedTags" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.computedTags"></a>

```typescript
public readonly computedTags: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `updatedBy`<sup>Required</sup> <a name="updatedBy" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.updatedBy"></a>

```typescript
public readonly updatedBy: string;
```

- *Type:* string

---

##### `updatedTime`<sup>Required</sup> <a name="updatedTime" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.updatedTime"></a>

```typescript
public readonly updatedTime: string;
```

- *Type:* string

---

##### `alertingEnabledInput`<sup>Optional</sup> <a name="alertingEnabledInput" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.alertingEnabledInput"></a>

```typescript
public readonly alertingEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `policyIdSuffixInput`<sup>Optional</sup> <a name="policyIdSuffixInput" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.policyIdSuffixInput"></a>

```typescript
public readonly policyIdSuffixInput: string;
```

- *Type:* string

---

##### `queryIdInput`<sup>Optional</sup> <a name="queryIdInput" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.queryIdInput"></a>

```typescript
public readonly queryIdInput: string;
```

- *Type:* string

---

##### `remediationInput`<sup>Optional</sup> <a name="remediationInput" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.remediationInput"></a>

```typescript
public readonly remediationInput: string;
```

- *Type:* string

---

##### `severityInput`<sup>Optional</sup> <a name="severityInput" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.severityInput"></a>

```typescript
public readonly severityInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `alertingEnabled`<sup>Required</sup> <a name="alertingEnabled" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.alertingEnabled"></a>

```typescript
public readonly alertingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `policyIdSuffix`<sup>Required</sup> <a name="policyIdSuffix" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.policyIdSuffix"></a>

```typescript
public readonly policyIdSuffix: string;
```

- *Type:* string

---

##### `queryId`<sup>Required</sup> <a name="queryId" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.queryId"></a>

```typescript
public readonly queryId: string;
```

- *Type:* string

---

##### `remediation`<sup>Required</sup> <a name="remediation" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.remediation"></a>

```typescript
public readonly remediation: string;
```

- *Type:* string

---

##### `severity`<sup>Required</sup> <a name="severity" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.severity"></a>

```typescript
public readonly severity: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `title`<sup>Required</sup> <a name="title" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PolicyComplianceConfig <a name="PolicyComplianceConfig" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.Initializer"></a>

```typescript
import { policyCompliance } from 'rhizo-co-terraform-provider-lacework'

const policyComplianceConfig: policyCompliance.PolicyComplianceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.description">description</a></code> | <code>string</code> | The description of the query. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.queryId">queryId</a></code> | <code>string</code> | The id of the query. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.severity">severity</a></code> | <code>string</code> | The severity for the policy. Valid severities are: Critical, High, Medium, Low, Info. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.title">title</a></code> | <code>string</code> | The title of the policy. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.alertingEnabled">alertingEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether alerting is enabled or disabled. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | The state of the policy. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.policyIdSuffix">policyIdSuffix</a></code> | <code>string</code> | The string appended to the end of the policy id. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.remediation">remediation</a></code> | <code>string</code> | The remediation message to display. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.tags">tags</a></code> | <code>string[]</code> | A list of user specified policy tags. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/policy_compliance#description PolicyCompliance#description}

---

##### `queryId`<sup>Required</sup> <a name="queryId" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.queryId"></a>

```typescript
public readonly queryId: string;
```

- *Type:* string

The id of the query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/policy_compliance#query_id PolicyCompliance#query_id}

---

##### `severity`<sup>Required</sup> <a name="severity" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.severity"></a>

```typescript
public readonly severity: string;
```

- *Type:* string

The severity for the policy. Valid severities are: Critical, High, Medium, Low, Info.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/policy_compliance#severity PolicyCompliance#severity}

---

##### `title`<sup>Required</sup> <a name="title" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

The title of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/policy_compliance#title PolicyCompliance#title}

---

##### `alertingEnabled`<sup>Optional</sup> <a name="alertingEnabled" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.alertingEnabled"></a>

```typescript
public readonly alertingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether alerting is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/policy_compliance#alerting_enabled PolicyCompliance#alerting_enabled}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

The state of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/policy_compliance#enabled PolicyCompliance#enabled}

---

##### `policyIdSuffix`<sup>Optional</sup> <a name="policyIdSuffix" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.policyIdSuffix"></a>

```typescript
public readonly policyIdSuffix: string;
```

- *Type:* string

The string appended to the end of the policy id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/policy_compliance#policy_id_suffix PolicyCompliance#policy_id_suffix}

---

##### `remediation`<sup>Optional</sup> <a name="remediation" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.remediation"></a>

```typescript
public readonly remediation: string;
```

- *Type:* string

The remediation message to display.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/policy_compliance#remediation PolicyCompliance#remediation}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

A list of user specified policy tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/policy_compliance#tags PolicyCompliance#tags}

---



