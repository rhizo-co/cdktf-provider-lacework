# `lacework_report_rule`

Refer to the Terraform Registory for docs: [`lacework_report_rule`](https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule).

# `reportRule` Submodule <a name="`reportRule` Submodule" id="rhizo-co-terraform-provider-lacework.reportRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ReportRule <a name="ReportRule" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule"></a>

Represents a {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule lacework_report_rule}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer"></a>

```typescript
import { reportRule } from 'rhizo-co-terraform-provider-lacework'

new reportRule.ReportRule(scope: Construct, id: string, config: ReportRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig">ReportRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig">ReportRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.putAwsComplianceReports">putAwsComplianceReports</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.putAzureComplianceReports">putAzureComplianceReports</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.putDailyComplianceReports">putDailyComplianceReports</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.putGcpComplianceReports">putGcpComplianceReports</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.resetAwsComplianceReports">resetAwsComplianceReports</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.resetAzureComplianceReports">resetAzureComplianceReports</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.resetDailyComplianceReports">resetDailyComplianceReports</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.resetGcpComplianceReports">resetGcpComplianceReports</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.resetResourceGroups">resetResourceGroups</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.resetWeeklySnapshot">resetWeeklySnapshot</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putAwsComplianceReports` <a name="putAwsComplianceReports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.putAwsComplianceReports"></a>

```typescript
public putAwsComplianceReports(value: ReportRuleAwsComplianceReports): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.putAwsComplianceReports.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports">ReportRuleAwsComplianceReports</a>

---

##### `putAzureComplianceReports` <a name="putAzureComplianceReports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.putAzureComplianceReports"></a>

```typescript
public putAzureComplianceReports(value: ReportRuleAzureComplianceReports): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.putAzureComplianceReports.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReports">ReportRuleAzureComplianceReports</a>

---

##### `putDailyComplianceReports` <a name="putDailyComplianceReports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.putDailyComplianceReports"></a>

```typescript
public putDailyComplianceReports(value: ReportRuleDailyComplianceReports): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.putDailyComplianceReports.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports">ReportRuleDailyComplianceReports</a>

---

##### `putGcpComplianceReports` <a name="putGcpComplianceReports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.putGcpComplianceReports"></a>

```typescript
public putGcpComplianceReports(value: ReportRuleGcpComplianceReports): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.putGcpComplianceReports.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports">ReportRuleGcpComplianceReports</a>

---

##### `resetAwsComplianceReports` <a name="resetAwsComplianceReports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.resetAwsComplianceReports"></a>

```typescript
public resetAwsComplianceReports(): void
```

##### `resetAzureComplianceReports` <a name="resetAzureComplianceReports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.resetAzureComplianceReports"></a>

```typescript
public resetAzureComplianceReports(): void
```

##### `resetDailyComplianceReports` <a name="resetDailyComplianceReports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.resetDailyComplianceReports"></a>

```typescript
public resetDailyComplianceReports(): void
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEnabled` <a name="resetEnabled" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetGcpComplianceReports` <a name="resetGcpComplianceReports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.resetGcpComplianceReports"></a>

```typescript
public resetGcpComplianceReports(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetResourceGroups` <a name="resetResourceGroups" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.resetResourceGroups"></a>

```typescript
public resetResourceGroups(): void
```

##### `resetWeeklySnapshot` <a name="resetWeeklySnapshot" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.resetWeeklySnapshot"></a>

```typescript
public resetWeeklySnapshot(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.isConstruct"></a>

```typescript
import { reportRule } from 'rhizo-co-terraform-provider-lacework'

reportRule.ReportRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.isTerraformElement"></a>

```typescript
import { reportRule } from 'rhizo-co-terraform-provider-lacework'

reportRule.ReportRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.isTerraformResource"></a>

```typescript
import { reportRule } from 'rhizo-co-terraform-provider-lacework'

reportRule.ReportRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.awsComplianceReports">awsComplianceReports</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference">ReportRuleAwsComplianceReportsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.azureComplianceReports">azureComplianceReports</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference">ReportRuleAzureComplianceReportsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.createdOrUpdatedBy">createdOrUpdatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.createdOrUpdatedTime">createdOrUpdatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.dailyComplianceReports">dailyComplianceReports</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference">ReportRuleDailyComplianceReportsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.gcpComplianceReports">gcpComplianceReports</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference">ReportRuleGcpComplianceReportsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.guid">guid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.awsComplianceReportsInput">awsComplianceReportsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports">ReportRuleAwsComplianceReports</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.azureComplianceReportsInput">azureComplianceReportsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReports">ReportRuleAzureComplianceReports</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.dailyComplianceReportsInput">dailyComplianceReportsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports">ReportRuleDailyComplianceReports</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.emailAlertChannelsInput">emailAlertChannelsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.gcpComplianceReportsInput">gcpComplianceReportsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports">ReportRuleGcpComplianceReports</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.resourceGroupsInput">resourceGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.severitiesInput">severitiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.weeklySnapshotInput">weeklySnapshotInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.emailAlertChannels">emailAlertChannels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.resourceGroups">resourceGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.severities">severities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.weeklySnapshot">weeklySnapshot</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `awsComplianceReports`<sup>Required</sup> <a name="awsComplianceReports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.awsComplianceReports"></a>

```typescript
public readonly awsComplianceReports: ReportRuleAwsComplianceReportsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference">ReportRuleAwsComplianceReportsOutputReference</a>

---

##### `azureComplianceReports`<sup>Required</sup> <a name="azureComplianceReports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.azureComplianceReports"></a>

```typescript
public readonly azureComplianceReports: ReportRuleAzureComplianceReportsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference">ReportRuleAzureComplianceReportsOutputReference</a>

---

##### `createdOrUpdatedBy`<sup>Required</sup> <a name="createdOrUpdatedBy" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.createdOrUpdatedBy"></a>

```typescript
public readonly createdOrUpdatedBy: string;
```

- *Type:* string

---

##### `createdOrUpdatedTime`<sup>Required</sup> <a name="createdOrUpdatedTime" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.createdOrUpdatedTime"></a>

```typescript
public readonly createdOrUpdatedTime: string;
```

- *Type:* string

---

##### `dailyComplianceReports`<sup>Required</sup> <a name="dailyComplianceReports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.dailyComplianceReports"></a>

```typescript
public readonly dailyComplianceReports: ReportRuleDailyComplianceReportsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference">ReportRuleDailyComplianceReportsOutputReference</a>

---

##### `gcpComplianceReports`<sup>Required</sup> <a name="gcpComplianceReports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.gcpComplianceReports"></a>

```typescript
public readonly gcpComplianceReports: ReportRuleGcpComplianceReportsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference">ReportRuleGcpComplianceReportsOutputReference</a>

---

##### `guid`<sup>Required</sup> <a name="guid" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.guid"></a>

```typescript
public readonly guid: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `awsComplianceReportsInput`<sup>Optional</sup> <a name="awsComplianceReportsInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.awsComplianceReportsInput"></a>

```typescript
public readonly awsComplianceReportsInput: ReportRuleAwsComplianceReports;
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports">ReportRuleAwsComplianceReports</a>

---

##### `azureComplianceReportsInput`<sup>Optional</sup> <a name="azureComplianceReportsInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.azureComplianceReportsInput"></a>

```typescript
public readonly azureComplianceReportsInput: ReportRuleAzureComplianceReports;
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReports">ReportRuleAzureComplianceReports</a>

---

##### `dailyComplianceReportsInput`<sup>Optional</sup> <a name="dailyComplianceReportsInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.dailyComplianceReportsInput"></a>

```typescript
public readonly dailyComplianceReportsInput: ReportRuleDailyComplianceReports;
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports">ReportRuleDailyComplianceReports</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `emailAlertChannelsInput`<sup>Optional</sup> <a name="emailAlertChannelsInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.emailAlertChannelsInput"></a>

```typescript
public readonly emailAlertChannelsInput: string[];
```

- *Type:* string[]

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `gcpComplianceReportsInput`<sup>Optional</sup> <a name="gcpComplianceReportsInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.gcpComplianceReportsInput"></a>

```typescript
public readonly gcpComplianceReportsInput: ReportRuleGcpComplianceReports;
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports">ReportRuleGcpComplianceReports</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupsInput`<sup>Optional</sup> <a name="resourceGroupsInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.resourceGroupsInput"></a>

```typescript
public readonly resourceGroupsInput: string[];
```

- *Type:* string[]

---

##### `severitiesInput`<sup>Optional</sup> <a name="severitiesInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.severitiesInput"></a>

```typescript
public readonly severitiesInput: string[];
```

- *Type:* string[]

---

##### `weeklySnapshotInput`<sup>Optional</sup> <a name="weeklySnapshotInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.weeklySnapshotInput"></a>

```typescript
public readonly weeklySnapshotInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `emailAlertChannels`<sup>Required</sup> <a name="emailAlertChannels" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.emailAlertChannels"></a>

```typescript
public readonly emailAlertChannels: string[];
```

- *Type:* string[]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroups`<sup>Required</sup> <a name="resourceGroups" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.resourceGroups"></a>

```typescript
public readonly resourceGroups: string[];
```

- *Type:* string[]

---

##### `severities`<sup>Required</sup> <a name="severities" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.severities"></a>

```typescript
public readonly severities: string[];
```

- *Type:* string[]

---

##### `weeklySnapshot`<sup>Required</sup> <a name="weeklySnapshot" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.weeklySnapshot"></a>

```typescript
public readonly weeklySnapshot: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ReportRuleAwsComplianceReports <a name="ReportRuleAwsComplianceReports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports.Initializer"></a>

```typescript
import { reportRule } from 'rhizo-co-terraform-provider-lacework'

const reportRuleAwsComplianceReports: reportRule.ReportRuleAwsComplianceReports = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports.property.cisS3">cisS3</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#cis_s3 ReportRule#cis_s3}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports.property.hipaa">hipaa</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#hipaa ReportRule#hipaa}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports.property.iso2700">iso2700</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#iso_2700 ReportRule#iso_2700}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports.property.nist800171Rev2">nist800171Rev2</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#nist_800_171_rev2 ReportRule#nist_800_171_rev2}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports.property.nist80053Rev4">nist80053Rev4</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#nist_800_53_rev4 ReportRule#nist_800_53_rev4}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports.property.pci">pci</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#pci ReportRule#pci}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports.property.soc">soc</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#soc ReportRule#soc}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports.property.socRev2">socRev2</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#soc_rev2 ReportRule#soc_rev2}. |

---

##### `cisS3`<sup>Optional</sup> <a name="cisS3" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports.property.cisS3"></a>

```typescript
public readonly cisS3: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#cis_s3 ReportRule#cis_s3}.

---

##### `hipaa`<sup>Optional</sup> <a name="hipaa" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports.property.hipaa"></a>

```typescript
public readonly hipaa: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#hipaa ReportRule#hipaa}.

---

##### `iso2700`<sup>Optional</sup> <a name="iso2700" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports.property.iso2700"></a>

```typescript
public readonly iso2700: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#iso_2700 ReportRule#iso_2700}.

---

##### `nist800171Rev2`<sup>Optional</sup> <a name="nist800171Rev2" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports.property.nist800171Rev2"></a>

```typescript
public readonly nist800171Rev2: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#nist_800_171_rev2 ReportRule#nist_800_171_rev2}.

---

##### `nist80053Rev4`<sup>Optional</sup> <a name="nist80053Rev4" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports.property.nist80053Rev4"></a>

```typescript
public readonly nist80053Rev4: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#nist_800_53_rev4 ReportRule#nist_800_53_rev4}.

---

##### `pci`<sup>Optional</sup> <a name="pci" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports.property.pci"></a>

```typescript
public readonly pci: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#pci ReportRule#pci}.

---

##### `soc`<sup>Optional</sup> <a name="soc" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports.property.soc"></a>

```typescript
public readonly soc: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#soc ReportRule#soc}.

---

##### `socRev2`<sup>Optional</sup> <a name="socRev2" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports.property.socRev2"></a>

```typescript
public readonly socRev2: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#soc_rev2 ReportRule#soc_rev2}.

---

### ReportRuleAzureComplianceReports <a name="ReportRuleAzureComplianceReports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReports"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReports.Initializer"></a>

```typescript
import { reportRule } from 'rhizo-co-terraform-provider-lacework'

const reportRuleAzureComplianceReports: reportRule.ReportRuleAzureComplianceReports = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReports.property.cis">cis</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#cis ReportRule#cis}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReports.property.cis131">cis131</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#cis_131 ReportRule#cis_131}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReports.property.pci">pci</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#pci ReportRule#pci}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReports.property.soc">soc</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#soc ReportRule#soc}. |

---

##### `cis`<sup>Optional</sup> <a name="cis" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReports.property.cis"></a>

```typescript
public readonly cis: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#cis ReportRule#cis}.

---

##### `cis131`<sup>Optional</sup> <a name="cis131" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReports.property.cis131"></a>

```typescript
public readonly cis131: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#cis_131 ReportRule#cis_131}.

---

##### `pci`<sup>Optional</sup> <a name="pci" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReports.property.pci"></a>

```typescript
public readonly pci: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#pci ReportRule#pci}.

---

##### `soc`<sup>Optional</sup> <a name="soc" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReports.property.soc"></a>

```typescript
public readonly soc: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#soc ReportRule#soc}.

---

### ReportRuleConfig <a name="ReportRuleConfig" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.Initializer"></a>

```typescript
import { reportRule } from 'rhizo-co-terraform-provider-lacework'

const reportRuleConfig: reportRule.ReportRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.emailAlertChannels">emailAlertChannels</a></code> | <code>string[]</code> | List of email alert channels for the report rule. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.name">name</a></code> | <code>string</code> | The name of the report rule. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.severities">severities</a></code> | <code>string[]</code> | List of severities for the report rule. Valid severities are: Critical, High, Medium, Low, Info. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.awsComplianceReports">awsComplianceReports</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports">ReportRuleAwsComplianceReports</a></code> | aws_compliance_reports block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.azureComplianceReports">azureComplianceReports</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReports">ReportRuleAzureComplianceReports</a></code> | azure_compliance_reports block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.dailyComplianceReports">dailyComplianceReports</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports">ReportRuleDailyComplianceReports</a></code> | daily_compliance_reports block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.description">description</a></code> | <code>string</code> | The description of the report rule. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | The state of the report rule. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.gcpComplianceReports">gcpComplianceReports</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports">ReportRuleGcpComplianceReports</a></code> | gcp_compliance_reports block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#id ReportRule#id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.resourceGroups">resourceGroups</a></code> | <code>string[]</code> | List of resource groups for the report rule. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.weeklySnapshot">weeklySnapshot</a></code> | <code>boolean \| cdktf.IResolvable</code> | Weekly Snapshot Compliance Report type. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `emailAlertChannels`<sup>Required</sup> <a name="emailAlertChannels" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.emailAlertChannels"></a>

```typescript
public readonly emailAlertChannels: string[];
```

- *Type:* string[]

List of email alert channels for the report rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#email_alert_channels ReportRule#email_alert_channels}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the report rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#name ReportRule#name}

---

##### `severities`<sup>Required</sup> <a name="severities" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.severities"></a>

```typescript
public readonly severities: string[];
```

- *Type:* string[]

List of severities for the report rule. Valid severities are: Critical, High, Medium, Low, Info.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#severities ReportRule#severities}

---

##### `awsComplianceReports`<sup>Optional</sup> <a name="awsComplianceReports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.awsComplianceReports"></a>

```typescript
public readonly awsComplianceReports: ReportRuleAwsComplianceReports;
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports">ReportRuleAwsComplianceReports</a>

aws_compliance_reports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#aws_compliance_reports ReportRule#aws_compliance_reports}

---

##### `azureComplianceReports`<sup>Optional</sup> <a name="azureComplianceReports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.azureComplianceReports"></a>

```typescript
public readonly azureComplianceReports: ReportRuleAzureComplianceReports;
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReports">ReportRuleAzureComplianceReports</a>

azure_compliance_reports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#azure_compliance_reports ReportRule#azure_compliance_reports}

---

##### `dailyComplianceReports`<sup>Optional</sup> <a name="dailyComplianceReports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.dailyComplianceReports"></a>

```typescript
public readonly dailyComplianceReports: ReportRuleDailyComplianceReports;
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports">ReportRuleDailyComplianceReports</a>

daily_compliance_reports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#daily_compliance_reports ReportRule#daily_compliance_reports}

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the report rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#description ReportRule#description}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

The state of the report rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#enabled ReportRule#enabled}

---

##### `gcpComplianceReports`<sup>Optional</sup> <a name="gcpComplianceReports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.gcpComplianceReports"></a>

```typescript
public readonly gcpComplianceReports: ReportRuleGcpComplianceReports;
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports">ReportRuleGcpComplianceReports</a>

gcp_compliance_reports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#gcp_compliance_reports ReportRule#gcp_compliance_reports}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#id ReportRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resourceGroups`<sup>Optional</sup> <a name="resourceGroups" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.resourceGroups"></a>

```typescript
public readonly resourceGroups: string[];
```

- *Type:* string[]

List of resource groups for the report rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#resource_groups ReportRule#resource_groups}

---

##### `weeklySnapshot`<sup>Optional</sup> <a name="weeklySnapshot" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.weeklySnapshot"></a>

```typescript
public readonly weeklySnapshot: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Weekly Snapshot Compliance Report type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#weekly_snapshot ReportRule#weekly_snapshot}

---

### ReportRuleDailyComplianceReports <a name="ReportRuleDailyComplianceReports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.Initializer"></a>

```typescript
import { reportRule } from 'rhizo-co-terraform-provider-lacework'

const reportRuleDailyComplianceReports: reportRule.ReportRuleDailyComplianceReports = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.property.awsCloudtrail">awsCloudtrail</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#aws_cloudtrail ReportRule#aws_cloudtrail}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.property.awsCompliance">awsCompliance</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#aws_compliance ReportRule#aws_compliance}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.property.azureActivityLog">azureActivityLog</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#azure_activity_log ReportRule#azure_activity_log}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.property.azureCompliance">azureCompliance</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#azure_compliance ReportRule#azure_compliance}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.property.gcpAuditTrail">gcpAuditTrail</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#gcp_audit_trail ReportRule#gcp_audit_trail}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.property.gcpCompliance">gcpCompliance</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#gcp_compliance ReportRule#gcp_compliance}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.property.hostSecurity">hostSecurity</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#host_security ReportRule#host_security}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.property.openshiftCompliance">openshiftCompliance</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#openshift_compliance ReportRule#openshift_compliance}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.property.openshiftComplianceEvents">openshiftComplianceEvents</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#openshift_compliance_events ReportRule#openshift_compliance_events}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.property.platform">platform</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#platform ReportRule#platform}. |

---

##### `awsCloudtrail`<sup>Optional</sup> <a name="awsCloudtrail" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.property.awsCloudtrail"></a>

```typescript
public readonly awsCloudtrail: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#aws_cloudtrail ReportRule#aws_cloudtrail}.

---

##### `awsCompliance`<sup>Optional</sup> <a name="awsCompliance" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.property.awsCompliance"></a>

```typescript
public readonly awsCompliance: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#aws_compliance ReportRule#aws_compliance}.

---

##### `azureActivityLog`<sup>Optional</sup> <a name="azureActivityLog" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.property.azureActivityLog"></a>

```typescript
public readonly azureActivityLog: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#azure_activity_log ReportRule#azure_activity_log}.

---

##### `azureCompliance`<sup>Optional</sup> <a name="azureCompliance" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.property.azureCompliance"></a>

```typescript
public readonly azureCompliance: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#azure_compliance ReportRule#azure_compliance}.

---

##### `gcpAuditTrail`<sup>Optional</sup> <a name="gcpAuditTrail" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.property.gcpAuditTrail"></a>

```typescript
public readonly gcpAuditTrail: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#gcp_audit_trail ReportRule#gcp_audit_trail}.

---

##### `gcpCompliance`<sup>Optional</sup> <a name="gcpCompliance" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.property.gcpCompliance"></a>

```typescript
public readonly gcpCompliance: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#gcp_compliance ReportRule#gcp_compliance}.

---

##### `hostSecurity`<sup>Optional</sup> <a name="hostSecurity" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.property.hostSecurity"></a>

```typescript
public readonly hostSecurity: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#host_security ReportRule#host_security}.

---

##### `openshiftCompliance`<sup>Optional</sup> <a name="openshiftCompliance" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.property.openshiftCompliance"></a>

```typescript
public readonly openshiftCompliance: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#openshift_compliance ReportRule#openshift_compliance}.

---

##### `openshiftComplianceEvents`<sup>Optional</sup> <a name="openshiftComplianceEvents" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.property.openshiftComplianceEvents"></a>

```typescript
public readonly openshiftComplianceEvents: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#openshift_compliance_events ReportRule#openshift_compliance_events}.

---

##### `platform`<sup>Optional</sup> <a name="platform" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.property.platform"></a>

```typescript
public readonly platform: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#platform ReportRule#platform}.

---

### ReportRuleGcpComplianceReports <a name="ReportRuleGcpComplianceReports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.Initializer"></a>

```typescript
import { reportRule } from 'rhizo-co-terraform-provider-lacework'

const reportRuleGcpComplianceReports: reportRule.ReportRuleGcpComplianceReports = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.property.cis">cis</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#cis ReportRule#cis}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.property.cis12">cis12</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#cis_12 ReportRule#cis_12}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.property.hipaa">hipaa</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#hipaa ReportRule#hipaa}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.property.hipaaRev2">hipaaRev2</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#hipaa_rev2 ReportRule#hipaa_rev2}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.property.iso27001">iso27001</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#iso_27001 ReportRule#iso_27001}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.property.k8S">k8S</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#k8s ReportRule#k8s}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.property.pci">pci</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#pci ReportRule#pci}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.property.pciRev2">pciRev2</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#pci_rev2 ReportRule#pci_rev2}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.property.soc">soc</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#soc ReportRule#soc}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.property.socRev2">socRev2</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#soc_rev2 ReportRule#soc_rev2}. |

---

##### `cis`<sup>Optional</sup> <a name="cis" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.property.cis"></a>

```typescript
public readonly cis: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#cis ReportRule#cis}.

---

##### `cis12`<sup>Optional</sup> <a name="cis12" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.property.cis12"></a>

```typescript
public readonly cis12: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#cis_12 ReportRule#cis_12}.

---

##### `hipaa`<sup>Optional</sup> <a name="hipaa" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.property.hipaa"></a>

```typescript
public readonly hipaa: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#hipaa ReportRule#hipaa}.

---

##### `hipaaRev2`<sup>Optional</sup> <a name="hipaaRev2" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.property.hipaaRev2"></a>

```typescript
public readonly hipaaRev2: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#hipaa_rev2 ReportRule#hipaa_rev2}.

---

##### `iso27001`<sup>Optional</sup> <a name="iso27001" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.property.iso27001"></a>

```typescript
public readonly iso27001: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#iso_27001 ReportRule#iso_27001}.

---

##### `k8S`<sup>Optional</sup> <a name="k8S" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.property.k8S"></a>

```typescript
public readonly k8S: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#k8s ReportRule#k8s}.

---

##### `pci`<sup>Optional</sup> <a name="pci" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.property.pci"></a>

```typescript
public readonly pci: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#pci ReportRule#pci}.

---

##### `pciRev2`<sup>Optional</sup> <a name="pciRev2" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.property.pciRev2"></a>

```typescript
public readonly pciRev2: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#pci_rev2 ReportRule#pci_rev2}.

---

##### `soc`<sup>Optional</sup> <a name="soc" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.property.soc"></a>

```typescript
public readonly soc: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#soc ReportRule#soc}.

---

##### `socRev2`<sup>Optional</sup> <a name="socRev2" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.property.socRev2"></a>

```typescript
public readonly socRev2: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#soc_rev2 ReportRule#soc_rev2}.

---

## Classes <a name="Classes" id="Classes"></a>

### ReportRuleAwsComplianceReportsOutputReference <a name="ReportRuleAwsComplianceReportsOutputReference" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.Initializer"></a>

```typescript
import { reportRule } from 'rhizo-co-terraform-provider-lacework'

new reportRule.ReportRuleAwsComplianceReportsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.resetCisS3">resetCisS3</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.resetHipaa">resetHipaa</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.resetIso2700">resetIso2700</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.resetNist800171Rev2">resetNist800171Rev2</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.resetNist80053Rev4">resetNist80053Rev4</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.resetPci">resetPci</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.resetSoc">resetSoc</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.resetSocRev2">resetSocRev2</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCisS3` <a name="resetCisS3" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.resetCisS3"></a>

```typescript
public resetCisS3(): void
```

##### `resetHipaa` <a name="resetHipaa" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.resetHipaa"></a>

```typescript
public resetHipaa(): void
```

##### `resetIso2700` <a name="resetIso2700" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.resetIso2700"></a>

```typescript
public resetIso2700(): void
```

##### `resetNist800171Rev2` <a name="resetNist800171Rev2" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.resetNist800171Rev2"></a>

```typescript
public resetNist800171Rev2(): void
```

##### `resetNist80053Rev4` <a name="resetNist80053Rev4" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.resetNist80053Rev4"></a>

```typescript
public resetNist80053Rev4(): void
```

##### `resetPci` <a name="resetPci" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.resetPci"></a>

```typescript
public resetPci(): void
```

##### `resetSoc` <a name="resetSoc" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.resetSoc"></a>

```typescript
public resetSoc(): void
```

##### `resetSocRev2` <a name="resetSocRev2" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.resetSocRev2"></a>

```typescript
public resetSocRev2(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.cisS3Input">cisS3Input</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.hipaaInput">hipaaInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.iso2700Input">iso2700Input</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.nist800171Rev2Input">nist800171Rev2Input</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.nist80053Rev4Input">nist80053Rev4Input</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.pciInput">pciInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.socInput">socInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.socRev2Input">socRev2Input</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.cisS3">cisS3</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.hipaa">hipaa</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.iso2700">iso2700</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.nist800171Rev2">nist800171Rev2</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.nist80053Rev4">nist80053Rev4</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.pci">pci</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.soc">soc</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.socRev2">socRev2</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports">ReportRuleAwsComplianceReports</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cisS3Input`<sup>Optional</sup> <a name="cisS3Input" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.cisS3Input"></a>

```typescript
public readonly cisS3Input: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hipaaInput`<sup>Optional</sup> <a name="hipaaInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.hipaaInput"></a>

```typescript
public readonly hipaaInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `iso2700Input`<sup>Optional</sup> <a name="iso2700Input" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.iso2700Input"></a>

```typescript
public readonly iso2700Input: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nist800171Rev2Input`<sup>Optional</sup> <a name="nist800171Rev2Input" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.nist800171Rev2Input"></a>

```typescript
public readonly nist800171Rev2Input: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nist80053Rev4Input`<sup>Optional</sup> <a name="nist80053Rev4Input" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.nist80053Rev4Input"></a>

```typescript
public readonly nist80053Rev4Input: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `pciInput`<sup>Optional</sup> <a name="pciInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.pciInput"></a>

```typescript
public readonly pciInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `socInput`<sup>Optional</sup> <a name="socInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.socInput"></a>

```typescript
public readonly socInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `socRev2Input`<sup>Optional</sup> <a name="socRev2Input" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.socRev2Input"></a>

```typescript
public readonly socRev2Input: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cisS3`<sup>Required</sup> <a name="cisS3" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.cisS3"></a>

```typescript
public readonly cisS3: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hipaa`<sup>Required</sup> <a name="hipaa" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.hipaa"></a>

```typescript
public readonly hipaa: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `iso2700`<sup>Required</sup> <a name="iso2700" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.iso2700"></a>

```typescript
public readonly iso2700: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nist800171Rev2`<sup>Required</sup> <a name="nist800171Rev2" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.nist800171Rev2"></a>

```typescript
public readonly nist800171Rev2: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nist80053Rev4`<sup>Required</sup> <a name="nist80053Rev4" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.nist80053Rev4"></a>

```typescript
public readonly nist80053Rev4: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `pci`<sup>Required</sup> <a name="pci" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.pci"></a>

```typescript
public readonly pci: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `soc`<sup>Required</sup> <a name="soc" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.soc"></a>

```typescript
public readonly soc: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `socRev2`<sup>Required</sup> <a name="socRev2" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.socRev2"></a>

```typescript
public readonly socRev2: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ReportRuleAwsComplianceReports;
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports">ReportRuleAwsComplianceReports</a>

---


### ReportRuleAzureComplianceReportsOutputReference <a name="ReportRuleAzureComplianceReportsOutputReference" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.Initializer"></a>

```typescript
import { reportRule } from 'rhizo-co-terraform-provider-lacework'

new reportRule.ReportRuleAzureComplianceReportsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.resetCis">resetCis</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.resetCis131">resetCis131</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.resetPci">resetPci</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.resetSoc">resetSoc</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCis` <a name="resetCis" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.resetCis"></a>

```typescript
public resetCis(): void
```

##### `resetCis131` <a name="resetCis131" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.resetCis131"></a>

```typescript
public resetCis131(): void
```

##### `resetPci` <a name="resetPci" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.resetPci"></a>

```typescript
public resetPci(): void
```

##### `resetSoc` <a name="resetSoc" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.resetSoc"></a>

```typescript
public resetSoc(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.cis131Input">cis131Input</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.cisInput">cisInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.pciInput">pciInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.socInput">socInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.cis">cis</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.cis131">cis131</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.pci">pci</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.soc">soc</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReports">ReportRuleAzureComplianceReports</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cis131Input`<sup>Optional</sup> <a name="cis131Input" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.cis131Input"></a>

```typescript
public readonly cis131Input: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cisInput`<sup>Optional</sup> <a name="cisInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.cisInput"></a>

```typescript
public readonly cisInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `pciInput`<sup>Optional</sup> <a name="pciInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.pciInput"></a>

```typescript
public readonly pciInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `socInput`<sup>Optional</sup> <a name="socInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.socInput"></a>

```typescript
public readonly socInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cis`<sup>Required</sup> <a name="cis" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.cis"></a>

```typescript
public readonly cis: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cis131`<sup>Required</sup> <a name="cis131" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.cis131"></a>

```typescript
public readonly cis131: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `pci`<sup>Required</sup> <a name="pci" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.pci"></a>

```typescript
public readonly pci: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `soc`<sup>Required</sup> <a name="soc" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.soc"></a>

```typescript
public readonly soc: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ReportRuleAzureComplianceReports;
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReports">ReportRuleAzureComplianceReports</a>

---


### ReportRuleDailyComplianceReportsOutputReference <a name="ReportRuleDailyComplianceReportsOutputReference" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.Initializer"></a>

```typescript
import { reportRule } from 'rhizo-co-terraform-provider-lacework'

new reportRule.ReportRuleDailyComplianceReportsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resetAwsCloudtrail">resetAwsCloudtrail</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resetAwsCompliance">resetAwsCompliance</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resetAzureActivityLog">resetAzureActivityLog</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resetAzureCompliance">resetAzureCompliance</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resetGcpAuditTrail">resetGcpAuditTrail</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resetGcpCompliance">resetGcpCompliance</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resetHostSecurity">resetHostSecurity</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resetOpenshiftCompliance">resetOpenshiftCompliance</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resetOpenshiftComplianceEvents">resetOpenshiftComplianceEvents</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resetPlatform">resetPlatform</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAwsCloudtrail` <a name="resetAwsCloudtrail" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resetAwsCloudtrail"></a>

```typescript
public resetAwsCloudtrail(): void
```

##### `resetAwsCompliance` <a name="resetAwsCompliance" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resetAwsCompliance"></a>

```typescript
public resetAwsCompliance(): void
```

##### `resetAzureActivityLog` <a name="resetAzureActivityLog" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resetAzureActivityLog"></a>

```typescript
public resetAzureActivityLog(): void
```

##### `resetAzureCompliance` <a name="resetAzureCompliance" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resetAzureCompliance"></a>

```typescript
public resetAzureCompliance(): void
```

##### `resetGcpAuditTrail` <a name="resetGcpAuditTrail" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resetGcpAuditTrail"></a>

```typescript
public resetGcpAuditTrail(): void
```

##### `resetGcpCompliance` <a name="resetGcpCompliance" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resetGcpCompliance"></a>

```typescript
public resetGcpCompliance(): void
```

##### `resetHostSecurity` <a name="resetHostSecurity" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resetHostSecurity"></a>

```typescript
public resetHostSecurity(): void
```

##### `resetOpenshiftCompliance` <a name="resetOpenshiftCompliance" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resetOpenshiftCompliance"></a>

```typescript
public resetOpenshiftCompliance(): void
```

##### `resetOpenshiftComplianceEvents` <a name="resetOpenshiftComplianceEvents" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resetOpenshiftComplianceEvents"></a>

```typescript
public resetOpenshiftComplianceEvents(): void
```

##### `resetPlatform` <a name="resetPlatform" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resetPlatform"></a>

```typescript
public resetPlatform(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.awsCloudtrailInput">awsCloudtrailInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.awsComplianceInput">awsComplianceInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.azureActivityLogInput">azureActivityLogInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.azureComplianceInput">azureComplianceInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.gcpAuditTrailInput">gcpAuditTrailInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.gcpComplianceInput">gcpComplianceInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.hostSecurityInput">hostSecurityInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.openshiftComplianceEventsInput">openshiftComplianceEventsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.openshiftComplianceInput">openshiftComplianceInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.platformInput">platformInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.awsCloudtrail">awsCloudtrail</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.awsCompliance">awsCompliance</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.azureActivityLog">azureActivityLog</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.azureCompliance">azureCompliance</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.gcpAuditTrail">gcpAuditTrail</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.gcpCompliance">gcpCompliance</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.hostSecurity">hostSecurity</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.openshiftCompliance">openshiftCompliance</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.openshiftComplianceEvents">openshiftComplianceEvents</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.platform">platform</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports">ReportRuleDailyComplianceReports</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awsCloudtrailInput`<sup>Optional</sup> <a name="awsCloudtrailInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.awsCloudtrailInput"></a>

```typescript
public readonly awsCloudtrailInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `awsComplianceInput`<sup>Optional</sup> <a name="awsComplianceInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.awsComplianceInput"></a>

```typescript
public readonly awsComplianceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `azureActivityLogInput`<sup>Optional</sup> <a name="azureActivityLogInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.azureActivityLogInput"></a>

```typescript
public readonly azureActivityLogInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `azureComplianceInput`<sup>Optional</sup> <a name="azureComplianceInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.azureComplianceInput"></a>

```typescript
public readonly azureComplianceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `gcpAuditTrailInput`<sup>Optional</sup> <a name="gcpAuditTrailInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.gcpAuditTrailInput"></a>

```typescript
public readonly gcpAuditTrailInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `gcpComplianceInput`<sup>Optional</sup> <a name="gcpComplianceInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.gcpComplianceInput"></a>

```typescript
public readonly gcpComplianceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hostSecurityInput`<sup>Optional</sup> <a name="hostSecurityInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.hostSecurityInput"></a>

```typescript
public readonly hostSecurityInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `openshiftComplianceEventsInput`<sup>Optional</sup> <a name="openshiftComplianceEventsInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.openshiftComplianceEventsInput"></a>

```typescript
public readonly openshiftComplianceEventsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `openshiftComplianceInput`<sup>Optional</sup> <a name="openshiftComplianceInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.openshiftComplianceInput"></a>

```typescript
public readonly openshiftComplianceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `platformInput`<sup>Optional</sup> <a name="platformInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.platformInput"></a>

```typescript
public readonly platformInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `awsCloudtrail`<sup>Required</sup> <a name="awsCloudtrail" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.awsCloudtrail"></a>

```typescript
public readonly awsCloudtrail: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `awsCompliance`<sup>Required</sup> <a name="awsCompliance" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.awsCompliance"></a>

```typescript
public readonly awsCompliance: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `azureActivityLog`<sup>Required</sup> <a name="azureActivityLog" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.azureActivityLog"></a>

```typescript
public readonly azureActivityLog: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `azureCompliance`<sup>Required</sup> <a name="azureCompliance" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.azureCompliance"></a>

```typescript
public readonly azureCompliance: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `gcpAuditTrail`<sup>Required</sup> <a name="gcpAuditTrail" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.gcpAuditTrail"></a>

```typescript
public readonly gcpAuditTrail: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `gcpCompliance`<sup>Required</sup> <a name="gcpCompliance" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.gcpCompliance"></a>

```typescript
public readonly gcpCompliance: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hostSecurity`<sup>Required</sup> <a name="hostSecurity" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.hostSecurity"></a>

```typescript
public readonly hostSecurity: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `openshiftCompliance`<sup>Required</sup> <a name="openshiftCompliance" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.openshiftCompliance"></a>

```typescript
public readonly openshiftCompliance: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `openshiftComplianceEvents`<sup>Required</sup> <a name="openshiftComplianceEvents" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.openshiftComplianceEvents"></a>

```typescript
public readonly openshiftComplianceEvents: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `platform`<sup>Required</sup> <a name="platform" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.platform"></a>

```typescript
public readonly platform: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ReportRuleDailyComplianceReports;
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports">ReportRuleDailyComplianceReports</a>

---


### ReportRuleGcpComplianceReportsOutputReference <a name="ReportRuleGcpComplianceReportsOutputReference" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.Initializer"></a>

```typescript
import { reportRule } from 'rhizo-co-terraform-provider-lacework'

new reportRule.ReportRuleGcpComplianceReportsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resetCis">resetCis</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resetCis12">resetCis12</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resetHipaa">resetHipaa</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resetHipaaRev2">resetHipaaRev2</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resetIso27001">resetIso27001</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resetK8S">resetK8S</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resetPci">resetPci</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resetPciRev2">resetPciRev2</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resetSoc">resetSoc</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resetSocRev2">resetSocRev2</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCis` <a name="resetCis" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resetCis"></a>

```typescript
public resetCis(): void
```

##### `resetCis12` <a name="resetCis12" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resetCis12"></a>

```typescript
public resetCis12(): void
```

##### `resetHipaa` <a name="resetHipaa" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resetHipaa"></a>

```typescript
public resetHipaa(): void
```

##### `resetHipaaRev2` <a name="resetHipaaRev2" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resetHipaaRev2"></a>

```typescript
public resetHipaaRev2(): void
```

##### `resetIso27001` <a name="resetIso27001" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resetIso27001"></a>

```typescript
public resetIso27001(): void
```

##### `resetK8S` <a name="resetK8S" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resetK8S"></a>

```typescript
public resetK8S(): void
```

##### `resetPci` <a name="resetPci" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resetPci"></a>

```typescript
public resetPci(): void
```

##### `resetPciRev2` <a name="resetPciRev2" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resetPciRev2"></a>

```typescript
public resetPciRev2(): void
```

##### `resetSoc` <a name="resetSoc" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resetSoc"></a>

```typescript
public resetSoc(): void
```

##### `resetSocRev2` <a name="resetSocRev2" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resetSocRev2"></a>

```typescript
public resetSocRev2(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.cis12Input">cis12Input</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.cisInput">cisInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.hipaaInput">hipaaInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.hipaaRev2Input">hipaaRev2Input</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.iso27001Input">iso27001Input</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.k8SInput">k8SInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.pciInput">pciInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.pciRev2Input">pciRev2Input</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.socInput">socInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.socRev2Input">socRev2Input</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.cis">cis</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.cis12">cis12</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.hipaa">hipaa</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.hipaaRev2">hipaaRev2</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.iso27001">iso27001</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.k8S">k8S</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.pci">pci</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.pciRev2">pciRev2</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.soc">soc</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.socRev2">socRev2</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports">ReportRuleGcpComplianceReports</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cis12Input`<sup>Optional</sup> <a name="cis12Input" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.cis12Input"></a>

```typescript
public readonly cis12Input: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cisInput`<sup>Optional</sup> <a name="cisInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.cisInput"></a>

```typescript
public readonly cisInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hipaaInput`<sup>Optional</sup> <a name="hipaaInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.hipaaInput"></a>

```typescript
public readonly hipaaInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hipaaRev2Input`<sup>Optional</sup> <a name="hipaaRev2Input" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.hipaaRev2Input"></a>

```typescript
public readonly hipaaRev2Input: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `iso27001Input`<sup>Optional</sup> <a name="iso27001Input" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.iso27001Input"></a>

```typescript
public readonly iso27001Input: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `k8SInput`<sup>Optional</sup> <a name="k8SInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.k8SInput"></a>

```typescript
public readonly k8SInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `pciInput`<sup>Optional</sup> <a name="pciInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.pciInput"></a>

```typescript
public readonly pciInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `pciRev2Input`<sup>Optional</sup> <a name="pciRev2Input" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.pciRev2Input"></a>

```typescript
public readonly pciRev2Input: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `socInput`<sup>Optional</sup> <a name="socInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.socInput"></a>

```typescript
public readonly socInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `socRev2Input`<sup>Optional</sup> <a name="socRev2Input" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.socRev2Input"></a>

```typescript
public readonly socRev2Input: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cis`<sup>Required</sup> <a name="cis" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.cis"></a>

```typescript
public readonly cis: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cis12`<sup>Required</sup> <a name="cis12" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.cis12"></a>

```typescript
public readonly cis12: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hipaa`<sup>Required</sup> <a name="hipaa" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.hipaa"></a>

```typescript
public readonly hipaa: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hipaaRev2`<sup>Required</sup> <a name="hipaaRev2" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.hipaaRev2"></a>

```typescript
public readonly hipaaRev2: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `iso27001`<sup>Required</sup> <a name="iso27001" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.iso27001"></a>

```typescript
public readonly iso27001: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `k8S`<sup>Required</sup> <a name="k8S" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.k8S"></a>

```typescript
public readonly k8S: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `pci`<sup>Required</sup> <a name="pci" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.pci"></a>

```typescript
public readonly pci: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `pciRev2`<sup>Required</sup> <a name="pciRev2" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.pciRev2"></a>

```typescript
public readonly pciRev2: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `soc`<sup>Required</sup> <a name="soc" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.soc"></a>

```typescript
public readonly soc: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `socRev2`<sup>Required</sup> <a name="socRev2" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.socRev2"></a>

```typescript
public readonly socRev2: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ReportRuleGcpComplianceReports;
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports">ReportRuleGcpComplianceReports</a>

---



