# `lacework_report_rule`

Refer to the Terraform Registory for docs: [`lacework_report_rule`](https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule).

# `reportRule` Submodule <a name="`reportRule` Submodule" id="rhizo-co-terraform-provider-lacework.reportRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ReportRule <a name="ReportRule" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule"></a>

Represents a {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule lacework_report_rule}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-lacework-go/lacework/reportrule"

reportrule.NewReportRule(scope Construct, id *string, config ReportRuleConfig) ReportRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig">ReportRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig">ReportRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.putAwsComplianceReports">PutAwsComplianceReports</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.putAzureComplianceReports">PutAzureComplianceReports</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.putDailyComplianceReports">PutDailyComplianceReports</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.putGcpComplianceReports">PutGcpComplianceReports</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.resetAwsComplianceReports">ResetAwsComplianceReports</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.resetAzureComplianceReports">ResetAzureComplianceReports</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.resetDailyComplianceReports">ResetDailyComplianceReports</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.resetGcpComplianceReports">ResetGcpComplianceReports</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.resetResourceGroups">ResetResourceGroups</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.resetWeeklySnapshot">ResetWeeklySnapshot</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutAwsComplianceReports` <a name="PutAwsComplianceReports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.putAwsComplianceReports"></a>

```go
func PutAwsComplianceReports(value ReportRuleAwsComplianceReports)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.putAwsComplianceReports.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports">ReportRuleAwsComplianceReports</a>

---

##### `PutAzureComplianceReports` <a name="PutAzureComplianceReports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.putAzureComplianceReports"></a>

```go
func PutAzureComplianceReports(value ReportRuleAzureComplianceReports)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.putAzureComplianceReports.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReports">ReportRuleAzureComplianceReports</a>

---

##### `PutDailyComplianceReports` <a name="PutDailyComplianceReports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.putDailyComplianceReports"></a>

```go
func PutDailyComplianceReports(value ReportRuleDailyComplianceReports)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.putDailyComplianceReports.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports">ReportRuleDailyComplianceReports</a>

---

##### `PutGcpComplianceReports` <a name="PutGcpComplianceReports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.putGcpComplianceReports"></a>

```go
func PutGcpComplianceReports(value ReportRuleGcpComplianceReports)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.putGcpComplianceReports.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports">ReportRuleGcpComplianceReports</a>

---

##### `ResetAwsComplianceReports` <a name="ResetAwsComplianceReports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.resetAwsComplianceReports"></a>

```go
func ResetAwsComplianceReports()
```

##### `ResetAzureComplianceReports` <a name="ResetAzureComplianceReports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.resetAzureComplianceReports"></a>

```go
func ResetAzureComplianceReports()
```

##### `ResetDailyComplianceReports` <a name="ResetDailyComplianceReports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.resetDailyComplianceReports"></a>

```go
func ResetDailyComplianceReports()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEnabled` <a name="ResetEnabled" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetGcpComplianceReports` <a name="ResetGcpComplianceReports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.resetGcpComplianceReports"></a>

```go
func ResetGcpComplianceReports()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.resetId"></a>

```go
func ResetId()
```

##### `ResetResourceGroups` <a name="ResetResourceGroups" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.resetResourceGroups"></a>

```go
func ResetResourceGroups()
```

##### `ResetWeeklySnapshot` <a name="ResetWeeklySnapshot" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.resetWeeklySnapshot"></a>

```go
func ResetWeeklySnapshot()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-lacework-go/lacework/reportrule"

reportrule.ReportRule_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-lacework-go/lacework/reportrule"

reportrule.ReportRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-lacework-go/lacework/reportrule"

reportrule.ReportRule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.awsComplianceReports">AwsComplianceReports</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference">ReportRuleAwsComplianceReportsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.azureComplianceReports">AzureComplianceReports</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference">ReportRuleAzureComplianceReportsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.createdOrUpdatedBy">CreatedOrUpdatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.createdOrUpdatedTime">CreatedOrUpdatedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.dailyComplianceReports">DailyComplianceReports</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference">ReportRuleDailyComplianceReportsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.gcpComplianceReports">GcpComplianceReports</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference">ReportRuleGcpComplianceReportsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.guid">Guid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.awsComplianceReportsInput">AwsComplianceReportsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports">ReportRuleAwsComplianceReports</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.azureComplianceReportsInput">AzureComplianceReportsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReports">ReportRuleAzureComplianceReports</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.dailyComplianceReportsInput">DailyComplianceReportsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports">ReportRuleDailyComplianceReports</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.emailAlertChannelsInput">EmailAlertChannelsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.gcpComplianceReportsInput">GcpComplianceReportsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports">ReportRuleGcpComplianceReports</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.resourceGroupsInput">ResourceGroupsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.severitiesInput">SeveritiesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.weeklySnapshotInput">WeeklySnapshotInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.emailAlertChannels">EmailAlertChannels</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.resourceGroups">ResourceGroups</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.severities">Severities</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.weeklySnapshot">WeeklySnapshot</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AwsComplianceReports`<sup>Required</sup> <a name="AwsComplianceReports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.awsComplianceReports"></a>

```go
func AwsComplianceReports() ReportRuleAwsComplianceReportsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference">ReportRuleAwsComplianceReportsOutputReference</a>

---

##### `AzureComplianceReports`<sup>Required</sup> <a name="AzureComplianceReports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.azureComplianceReports"></a>

```go
func AzureComplianceReports() ReportRuleAzureComplianceReportsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference">ReportRuleAzureComplianceReportsOutputReference</a>

---

##### `CreatedOrUpdatedBy`<sup>Required</sup> <a name="CreatedOrUpdatedBy" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.createdOrUpdatedBy"></a>

```go
func CreatedOrUpdatedBy() *string
```

- *Type:* *string

---

##### `CreatedOrUpdatedTime`<sup>Required</sup> <a name="CreatedOrUpdatedTime" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.createdOrUpdatedTime"></a>

```go
func CreatedOrUpdatedTime() *string
```

- *Type:* *string

---

##### `DailyComplianceReports`<sup>Required</sup> <a name="DailyComplianceReports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.dailyComplianceReports"></a>

```go
func DailyComplianceReports() ReportRuleDailyComplianceReportsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference">ReportRuleDailyComplianceReportsOutputReference</a>

---

##### `GcpComplianceReports`<sup>Required</sup> <a name="GcpComplianceReports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.gcpComplianceReports"></a>

```go
func GcpComplianceReports() ReportRuleGcpComplianceReportsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference">ReportRuleGcpComplianceReportsOutputReference</a>

---

##### `Guid`<sup>Required</sup> <a name="Guid" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.guid"></a>

```go
func Guid() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `AwsComplianceReportsInput`<sup>Optional</sup> <a name="AwsComplianceReportsInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.awsComplianceReportsInput"></a>

```go
func AwsComplianceReportsInput() ReportRuleAwsComplianceReports
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports">ReportRuleAwsComplianceReports</a>

---

##### `AzureComplianceReportsInput`<sup>Optional</sup> <a name="AzureComplianceReportsInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.azureComplianceReportsInput"></a>

```go
func AzureComplianceReportsInput() ReportRuleAzureComplianceReports
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReports">ReportRuleAzureComplianceReports</a>

---

##### `DailyComplianceReportsInput`<sup>Optional</sup> <a name="DailyComplianceReportsInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.dailyComplianceReportsInput"></a>

```go
func DailyComplianceReportsInput() ReportRuleDailyComplianceReports
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports">ReportRuleDailyComplianceReports</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EmailAlertChannelsInput`<sup>Optional</sup> <a name="EmailAlertChannelsInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.emailAlertChannelsInput"></a>

```go
func EmailAlertChannelsInput() *[]*string
```

- *Type:* *[]*string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `GcpComplianceReportsInput`<sup>Optional</sup> <a name="GcpComplianceReportsInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.gcpComplianceReportsInput"></a>

```go
func GcpComplianceReportsInput() ReportRuleGcpComplianceReports
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports">ReportRuleGcpComplianceReports</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupsInput`<sup>Optional</sup> <a name="ResourceGroupsInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.resourceGroupsInput"></a>

```go
func ResourceGroupsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SeveritiesInput`<sup>Optional</sup> <a name="SeveritiesInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.severitiesInput"></a>

```go
func SeveritiesInput() *[]*string
```

- *Type:* *[]*string

---

##### `WeeklySnapshotInput`<sup>Optional</sup> <a name="WeeklySnapshotInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.weeklySnapshotInput"></a>

```go
func WeeklySnapshotInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EmailAlertChannels`<sup>Required</sup> <a name="EmailAlertChannels" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.emailAlertChannels"></a>

```go
func EmailAlertChannels() *[]*string
```

- *Type:* *[]*string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroups`<sup>Required</sup> <a name="ResourceGroups" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.resourceGroups"></a>

```go
func ResourceGroups() *[]*string
```

- *Type:* *[]*string

---

##### `Severities`<sup>Required</sup> <a name="Severities" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.severities"></a>

```go
func Severities() *[]*string
```

- *Type:* *[]*string

---

##### `WeeklySnapshot`<sup>Required</sup> <a name="WeeklySnapshot" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.weeklySnapshot"></a>

```go
func WeeklySnapshot() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ReportRuleAwsComplianceReports <a name="ReportRuleAwsComplianceReports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-lacework-go/lacework/reportrule"

&reportrule.ReportRuleAwsComplianceReports {
	CisS3: interface{},
	Hipaa: interface{},
	Iso2700: interface{},
	Nist800171Rev2: interface{},
	Nist80053Rev4: interface{},
	Pci: interface{},
	Soc: interface{},
	SocRev2: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports.property.cisS3">CisS3</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#cis_s3 ReportRule#cis_s3}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports.property.hipaa">Hipaa</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#hipaa ReportRule#hipaa}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports.property.iso2700">Iso2700</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#iso_2700 ReportRule#iso_2700}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports.property.nist800171Rev2">Nist800171Rev2</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#nist_800_171_rev2 ReportRule#nist_800_171_rev2}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports.property.nist80053Rev4">Nist80053Rev4</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#nist_800_53_rev4 ReportRule#nist_800_53_rev4}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports.property.pci">Pci</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#pci ReportRule#pci}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports.property.soc">Soc</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#soc ReportRule#soc}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports.property.socRev2">SocRev2</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#soc_rev2 ReportRule#soc_rev2}. |

---

##### `CisS3`<sup>Optional</sup> <a name="CisS3" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports.property.cisS3"></a>

```go
CisS3 interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#cis_s3 ReportRule#cis_s3}.

---

##### `Hipaa`<sup>Optional</sup> <a name="Hipaa" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports.property.hipaa"></a>

```go
Hipaa interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#hipaa ReportRule#hipaa}.

---

##### `Iso2700`<sup>Optional</sup> <a name="Iso2700" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports.property.iso2700"></a>

```go
Iso2700 interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#iso_2700 ReportRule#iso_2700}.

---

##### `Nist800171Rev2`<sup>Optional</sup> <a name="Nist800171Rev2" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports.property.nist800171Rev2"></a>

```go
Nist800171Rev2 interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#nist_800_171_rev2 ReportRule#nist_800_171_rev2}.

---

##### `Nist80053Rev4`<sup>Optional</sup> <a name="Nist80053Rev4" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports.property.nist80053Rev4"></a>

```go
Nist80053Rev4 interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#nist_800_53_rev4 ReportRule#nist_800_53_rev4}.

---

##### `Pci`<sup>Optional</sup> <a name="Pci" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports.property.pci"></a>

```go
Pci interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#pci ReportRule#pci}.

---

##### `Soc`<sup>Optional</sup> <a name="Soc" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports.property.soc"></a>

```go
Soc interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#soc ReportRule#soc}.

---

##### `SocRev2`<sup>Optional</sup> <a name="SocRev2" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports.property.socRev2"></a>

```go
SocRev2 interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#soc_rev2 ReportRule#soc_rev2}.

---

### ReportRuleAzureComplianceReports <a name="ReportRuleAzureComplianceReports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReports"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReports.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-lacework-go/lacework/reportrule"

&reportrule.ReportRuleAzureComplianceReports {
	Cis: interface{},
	Cis131: interface{},
	Pci: interface{},
	Soc: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReports.property.cis">Cis</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#cis ReportRule#cis}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReports.property.cis131">Cis131</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#cis_131 ReportRule#cis_131}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReports.property.pci">Pci</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#pci ReportRule#pci}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReports.property.soc">Soc</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#soc ReportRule#soc}. |

---

##### `Cis`<sup>Optional</sup> <a name="Cis" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReports.property.cis"></a>

```go
Cis interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#cis ReportRule#cis}.

---

##### `Cis131`<sup>Optional</sup> <a name="Cis131" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReports.property.cis131"></a>

```go
Cis131 interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#cis_131 ReportRule#cis_131}.

---

##### `Pci`<sup>Optional</sup> <a name="Pci" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReports.property.pci"></a>

```go
Pci interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#pci ReportRule#pci}.

---

##### `Soc`<sup>Optional</sup> <a name="Soc" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReports.property.soc"></a>

```go
Soc interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#soc ReportRule#soc}.

---

### ReportRuleConfig <a name="ReportRuleConfig" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-lacework-go/lacework/reportrule"

&reportrule.ReportRuleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	EmailAlertChannels: *[]*string,
	Name: *string,
	Severities: *[]*string,
	AwsComplianceReports: github.com/rhizo-co/cdktf-provider-lacework-go/lacework.reportRule.ReportRuleAwsComplianceReports,
	AzureComplianceReports: github.com/rhizo-co/cdktf-provider-lacework-go/lacework.reportRule.ReportRuleAzureComplianceReports,
	DailyComplianceReports: github.com/rhizo-co/cdktf-provider-lacework-go/lacework.reportRule.ReportRuleDailyComplianceReports,
	Description: *string,
	Enabled: interface{},
	GcpComplianceReports: github.com/rhizo-co/cdktf-provider-lacework-go/lacework.reportRule.ReportRuleGcpComplianceReports,
	Id: *string,
	ResourceGroups: *[]*string,
	WeeklySnapshot: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.emailAlertChannels">EmailAlertChannels</a></code> | <code>*[]*string</code> | List of email alert channels for the report rule. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.name">Name</a></code> | <code>*string</code> | The name of the report rule. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.severities">Severities</a></code> | <code>*[]*string</code> | List of severities for the report rule. Valid severities are: Critical, High, Medium, Low, Info. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.awsComplianceReports">AwsComplianceReports</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports">ReportRuleAwsComplianceReports</a></code> | aws_compliance_reports block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.azureComplianceReports">AzureComplianceReports</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReports">ReportRuleAzureComplianceReports</a></code> | azure_compliance_reports block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.dailyComplianceReports">DailyComplianceReports</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports">ReportRuleDailyComplianceReports</a></code> | daily_compliance_reports block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.description">Description</a></code> | <code>*string</code> | The description of the report rule. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | The state of the report rule. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.gcpComplianceReports">GcpComplianceReports</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports">ReportRuleGcpComplianceReports</a></code> | gcp_compliance_reports block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#id ReportRule#id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.resourceGroups">ResourceGroups</a></code> | <code>*[]*string</code> | List of resource groups for the report rule. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.weeklySnapshot">WeeklySnapshot</a></code> | <code>interface{}</code> | Weekly Snapshot Compliance Report type. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EmailAlertChannels`<sup>Required</sup> <a name="EmailAlertChannels" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.emailAlertChannels"></a>

```go
EmailAlertChannels *[]*string
```

- *Type:* *[]*string

List of email alert channels for the report rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#email_alert_channels ReportRule#email_alert_channels}

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the report rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#name ReportRule#name}

---

##### `Severities`<sup>Required</sup> <a name="Severities" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.severities"></a>

```go
Severities *[]*string
```

- *Type:* *[]*string

List of severities for the report rule. Valid severities are: Critical, High, Medium, Low, Info.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#severities ReportRule#severities}

---

##### `AwsComplianceReports`<sup>Optional</sup> <a name="AwsComplianceReports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.awsComplianceReports"></a>

```go
AwsComplianceReports ReportRuleAwsComplianceReports
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports">ReportRuleAwsComplianceReports</a>

aws_compliance_reports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#aws_compliance_reports ReportRule#aws_compliance_reports}

---

##### `AzureComplianceReports`<sup>Optional</sup> <a name="AzureComplianceReports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.azureComplianceReports"></a>

```go
AzureComplianceReports ReportRuleAzureComplianceReports
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReports">ReportRuleAzureComplianceReports</a>

azure_compliance_reports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#azure_compliance_reports ReportRule#azure_compliance_reports}

---

##### `DailyComplianceReports`<sup>Optional</sup> <a name="DailyComplianceReports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.dailyComplianceReports"></a>

```go
DailyComplianceReports ReportRuleDailyComplianceReports
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports">ReportRuleDailyComplianceReports</a>

daily_compliance_reports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#daily_compliance_reports ReportRule#daily_compliance_reports}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description of the report rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#description ReportRule#description}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

The state of the report rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#enabled ReportRule#enabled}

---

##### `GcpComplianceReports`<sup>Optional</sup> <a name="GcpComplianceReports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.gcpComplianceReports"></a>

```go
GcpComplianceReports ReportRuleGcpComplianceReports
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports">ReportRuleGcpComplianceReports</a>

gcp_compliance_reports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#gcp_compliance_reports ReportRule#gcp_compliance_reports}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#id ReportRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ResourceGroups`<sup>Optional</sup> <a name="ResourceGroups" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.resourceGroups"></a>

```go
ResourceGroups *[]*string
```

- *Type:* *[]*string

List of resource groups for the report rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#resource_groups ReportRule#resource_groups}

---

##### `WeeklySnapshot`<sup>Optional</sup> <a name="WeeklySnapshot" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.weeklySnapshot"></a>

```go
WeeklySnapshot interface{}
```

- *Type:* interface{}

Weekly Snapshot Compliance Report type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#weekly_snapshot ReportRule#weekly_snapshot}

---

### ReportRuleDailyComplianceReports <a name="ReportRuleDailyComplianceReports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-lacework-go/lacework/reportrule"

&reportrule.ReportRuleDailyComplianceReports {
	AwsCloudtrail: interface{},
	AwsCompliance: interface{},
	AzureActivityLog: interface{},
	AzureCompliance: interface{},
	GcpAuditTrail: interface{},
	GcpCompliance: interface{},
	HostSecurity: interface{},
	OpenshiftCompliance: interface{},
	OpenshiftComplianceEvents: interface{},
	Platform: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.property.awsCloudtrail">AwsCloudtrail</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#aws_cloudtrail ReportRule#aws_cloudtrail}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.property.awsCompliance">AwsCompliance</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#aws_compliance ReportRule#aws_compliance}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.property.azureActivityLog">AzureActivityLog</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#azure_activity_log ReportRule#azure_activity_log}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.property.azureCompliance">AzureCompliance</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#azure_compliance ReportRule#azure_compliance}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.property.gcpAuditTrail">GcpAuditTrail</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#gcp_audit_trail ReportRule#gcp_audit_trail}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.property.gcpCompliance">GcpCompliance</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#gcp_compliance ReportRule#gcp_compliance}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.property.hostSecurity">HostSecurity</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#host_security ReportRule#host_security}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.property.openshiftCompliance">OpenshiftCompliance</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#openshift_compliance ReportRule#openshift_compliance}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.property.openshiftComplianceEvents">OpenshiftComplianceEvents</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#openshift_compliance_events ReportRule#openshift_compliance_events}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.property.platform">Platform</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#platform ReportRule#platform}. |

---

##### `AwsCloudtrail`<sup>Optional</sup> <a name="AwsCloudtrail" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.property.awsCloudtrail"></a>

```go
AwsCloudtrail interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#aws_cloudtrail ReportRule#aws_cloudtrail}.

---

##### `AwsCompliance`<sup>Optional</sup> <a name="AwsCompliance" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.property.awsCompliance"></a>

```go
AwsCompliance interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#aws_compliance ReportRule#aws_compliance}.

---

##### `AzureActivityLog`<sup>Optional</sup> <a name="AzureActivityLog" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.property.azureActivityLog"></a>

```go
AzureActivityLog interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#azure_activity_log ReportRule#azure_activity_log}.

---

##### `AzureCompliance`<sup>Optional</sup> <a name="AzureCompliance" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.property.azureCompliance"></a>

```go
AzureCompliance interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#azure_compliance ReportRule#azure_compliance}.

---

##### `GcpAuditTrail`<sup>Optional</sup> <a name="GcpAuditTrail" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.property.gcpAuditTrail"></a>

```go
GcpAuditTrail interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#gcp_audit_trail ReportRule#gcp_audit_trail}.

---

##### `GcpCompliance`<sup>Optional</sup> <a name="GcpCompliance" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.property.gcpCompliance"></a>

```go
GcpCompliance interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#gcp_compliance ReportRule#gcp_compliance}.

---

##### `HostSecurity`<sup>Optional</sup> <a name="HostSecurity" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.property.hostSecurity"></a>

```go
HostSecurity interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#host_security ReportRule#host_security}.

---

##### `OpenshiftCompliance`<sup>Optional</sup> <a name="OpenshiftCompliance" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.property.openshiftCompliance"></a>

```go
OpenshiftCompliance interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#openshift_compliance ReportRule#openshift_compliance}.

---

##### `OpenshiftComplianceEvents`<sup>Optional</sup> <a name="OpenshiftComplianceEvents" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.property.openshiftComplianceEvents"></a>

```go
OpenshiftComplianceEvents interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#openshift_compliance_events ReportRule#openshift_compliance_events}.

---

##### `Platform`<sup>Optional</sup> <a name="Platform" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.property.platform"></a>

```go
Platform interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#platform ReportRule#platform}.

---

### ReportRuleGcpComplianceReports <a name="ReportRuleGcpComplianceReports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-lacework-go/lacework/reportrule"

&reportrule.ReportRuleGcpComplianceReports {
	Cis: interface{},
	Cis12: interface{},
	Hipaa: interface{},
	HipaaRev2: interface{},
	Iso27001: interface{},
	K8S: interface{},
	Pci: interface{},
	PciRev2: interface{},
	Soc: interface{},
	SocRev2: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.property.cis">Cis</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#cis ReportRule#cis}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.property.cis12">Cis12</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#cis_12 ReportRule#cis_12}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.property.hipaa">Hipaa</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#hipaa ReportRule#hipaa}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.property.hipaaRev2">HipaaRev2</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#hipaa_rev2 ReportRule#hipaa_rev2}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.property.iso27001">Iso27001</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#iso_27001 ReportRule#iso_27001}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.property.k8S">K8S</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#k8s ReportRule#k8s}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.property.pci">Pci</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#pci ReportRule#pci}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.property.pciRev2">PciRev2</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#pci_rev2 ReportRule#pci_rev2}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.property.soc">Soc</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#soc ReportRule#soc}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.property.socRev2">SocRev2</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#soc_rev2 ReportRule#soc_rev2}. |

---

##### `Cis`<sup>Optional</sup> <a name="Cis" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.property.cis"></a>

```go
Cis interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#cis ReportRule#cis}.

---

##### `Cis12`<sup>Optional</sup> <a name="Cis12" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.property.cis12"></a>

```go
Cis12 interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#cis_12 ReportRule#cis_12}.

---

##### `Hipaa`<sup>Optional</sup> <a name="Hipaa" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.property.hipaa"></a>

```go
Hipaa interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#hipaa ReportRule#hipaa}.

---

##### `HipaaRev2`<sup>Optional</sup> <a name="HipaaRev2" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.property.hipaaRev2"></a>

```go
HipaaRev2 interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#hipaa_rev2 ReportRule#hipaa_rev2}.

---

##### `Iso27001`<sup>Optional</sup> <a name="Iso27001" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.property.iso27001"></a>

```go
Iso27001 interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#iso_27001 ReportRule#iso_27001}.

---

##### `K8S`<sup>Optional</sup> <a name="K8S" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.property.k8S"></a>

```go
K8S interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#k8s ReportRule#k8s}.

---

##### `Pci`<sup>Optional</sup> <a name="Pci" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.property.pci"></a>

```go
Pci interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#pci ReportRule#pci}.

---

##### `PciRev2`<sup>Optional</sup> <a name="PciRev2" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.property.pciRev2"></a>

```go
PciRev2 interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#pci_rev2 ReportRule#pci_rev2}.

---

##### `Soc`<sup>Optional</sup> <a name="Soc" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.property.soc"></a>

```go
Soc interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#soc ReportRule#soc}.

---

##### `SocRev2`<sup>Optional</sup> <a name="SocRev2" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.property.socRev2"></a>

```go
SocRev2 interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#soc_rev2 ReportRule#soc_rev2}.

---

## Classes <a name="Classes" id="Classes"></a>

### ReportRuleAwsComplianceReportsOutputReference <a name="ReportRuleAwsComplianceReportsOutputReference" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-lacework-go/lacework/reportrule"

reportrule.NewReportRuleAwsComplianceReportsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ReportRuleAwsComplianceReportsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.resetCisS3">ResetCisS3</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.resetHipaa">ResetHipaa</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.resetIso2700">ResetIso2700</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.resetNist800171Rev2">ResetNist800171Rev2</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.resetNist80053Rev4">ResetNist80053Rev4</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.resetPci">ResetPci</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.resetSoc">ResetSoc</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.resetSocRev2">ResetSocRev2</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCisS3` <a name="ResetCisS3" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.resetCisS3"></a>

```go
func ResetCisS3()
```

##### `ResetHipaa` <a name="ResetHipaa" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.resetHipaa"></a>

```go
func ResetHipaa()
```

##### `ResetIso2700` <a name="ResetIso2700" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.resetIso2700"></a>

```go
func ResetIso2700()
```

##### `ResetNist800171Rev2` <a name="ResetNist800171Rev2" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.resetNist800171Rev2"></a>

```go
func ResetNist800171Rev2()
```

##### `ResetNist80053Rev4` <a name="ResetNist80053Rev4" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.resetNist80053Rev4"></a>

```go
func ResetNist80053Rev4()
```

##### `ResetPci` <a name="ResetPci" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.resetPci"></a>

```go
func ResetPci()
```

##### `ResetSoc` <a name="ResetSoc" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.resetSoc"></a>

```go
func ResetSoc()
```

##### `ResetSocRev2` <a name="ResetSocRev2" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.resetSocRev2"></a>

```go
func ResetSocRev2()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.cisS3Input">CisS3Input</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.hipaaInput">HipaaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.iso2700Input">Iso2700Input</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.nist800171Rev2Input">Nist800171Rev2Input</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.nist80053Rev4Input">Nist80053Rev4Input</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.pciInput">PciInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.socInput">SocInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.socRev2Input">SocRev2Input</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.cisS3">CisS3</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.hipaa">Hipaa</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.iso2700">Iso2700</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.nist800171Rev2">Nist800171Rev2</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.nist80053Rev4">Nist80053Rev4</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.pci">Pci</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.soc">Soc</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.socRev2">SocRev2</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports">ReportRuleAwsComplianceReports</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CisS3Input`<sup>Optional</sup> <a name="CisS3Input" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.cisS3Input"></a>

```go
func CisS3Input() interface{}
```

- *Type:* interface{}

---

##### `HipaaInput`<sup>Optional</sup> <a name="HipaaInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.hipaaInput"></a>

```go
func HipaaInput() interface{}
```

- *Type:* interface{}

---

##### `Iso2700Input`<sup>Optional</sup> <a name="Iso2700Input" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.iso2700Input"></a>

```go
func Iso2700Input() interface{}
```

- *Type:* interface{}

---

##### `Nist800171Rev2Input`<sup>Optional</sup> <a name="Nist800171Rev2Input" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.nist800171Rev2Input"></a>

```go
func Nist800171Rev2Input() interface{}
```

- *Type:* interface{}

---

##### `Nist80053Rev4Input`<sup>Optional</sup> <a name="Nist80053Rev4Input" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.nist80053Rev4Input"></a>

```go
func Nist80053Rev4Input() interface{}
```

- *Type:* interface{}

---

##### `PciInput`<sup>Optional</sup> <a name="PciInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.pciInput"></a>

```go
func PciInput() interface{}
```

- *Type:* interface{}

---

##### `SocInput`<sup>Optional</sup> <a name="SocInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.socInput"></a>

```go
func SocInput() interface{}
```

- *Type:* interface{}

---

##### `SocRev2Input`<sup>Optional</sup> <a name="SocRev2Input" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.socRev2Input"></a>

```go
func SocRev2Input() interface{}
```

- *Type:* interface{}

---

##### `CisS3`<sup>Required</sup> <a name="CisS3" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.cisS3"></a>

```go
func CisS3() interface{}
```

- *Type:* interface{}

---

##### `Hipaa`<sup>Required</sup> <a name="Hipaa" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.hipaa"></a>

```go
func Hipaa() interface{}
```

- *Type:* interface{}

---

##### `Iso2700`<sup>Required</sup> <a name="Iso2700" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.iso2700"></a>

```go
func Iso2700() interface{}
```

- *Type:* interface{}

---

##### `Nist800171Rev2`<sup>Required</sup> <a name="Nist800171Rev2" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.nist800171Rev2"></a>

```go
func Nist800171Rev2() interface{}
```

- *Type:* interface{}

---

##### `Nist80053Rev4`<sup>Required</sup> <a name="Nist80053Rev4" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.nist80053Rev4"></a>

```go
func Nist80053Rev4() interface{}
```

- *Type:* interface{}

---

##### `Pci`<sup>Required</sup> <a name="Pci" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.pci"></a>

```go
func Pci() interface{}
```

- *Type:* interface{}

---

##### `Soc`<sup>Required</sup> <a name="Soc" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.soc"></a>

```go
func Soc() interface{}
```

- *Type:* interface{}

---

##### `SocRev2`<sup>Required</sup> <a name="SocRev2" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.socRev2"></a>

```go
func SocRev2() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.internalValue"></a>

```go
func InternalValue() ReportRuleAwsComplianceReports
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports">ReportRuleAwsComplianceReports</a>

---


### ReportRuleAzureComplianceReportsOutputReference <a name="ReportRuleAzureComplianceReportsOutputReference" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-lacework-go/lacework/reportrule"

reportrule.NewReportRuleAzureComplianceReportsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ReportRuleAzureComplianceReportsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.resetCis">ResetCis</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.resetCis131">ResetCis131</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.resetPci">ResetPci</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.resetSoc">ResetSoc</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCis` <a name="ResetCis" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.resetCis"></a>

```go
func ResetCis()
```

##### `ResetCis131` <a name="ResetCis131" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.resetCis131"></a>

```go
func ResetCis131()
```

##### `ResetPci` <a name="ResetPci" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.resetPci"></a>

```go
func ResetPci()
```

##### `ResetSoc` <a name="ResetSoc" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.resetSoc"></a>

```go
func ResetSoc()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.cis131Input">Cis131Input</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.cisInput">CisInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.pciInput">PciInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.socInput">SocInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.cis">Cis</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.cis131">Cis131</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.pci">Pci</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.soc">Soc</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReports">ReportRuleAzureComplianceReports</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Cis131Input`<sup>Optional</sup> <a name="Cis131Input" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.cis131Input"></a>

```go
func Cis131Input() interface{}
```

- *Type:* interface{}

---

##### `CisInput`<sup>Optional</sup> <a name="CisInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.cisInput"></a>

```go
func CisInput() interface{}
```

- *Type:* interface{}

---

##### `PciInput`<sup>Optional</sup> <a name="PciInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.pciInput"></a>

```go
func PciInput() interface{}
```

- *Type:* interface{}

---

##### `SocInput`<sup>Optional</sup> <a name="SocInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.socInput"></a>

```go
func SocInput() interface{}
```

- *Type:* interface{}

---

##### `Cis`<sup>Required</sup> <a name="Cis" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.cis"></a>

```go
func Cis() interface{}
```

- *Type:* interface{}

---

##### `Cis131`<sup>Required</sup> <a name="Cis131" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.cis131"></a>

```go
func Cis131() interface{}
```

- *Type:* interface{}

---

##### `Pci`<sup>Required</sup> <a name="Pci" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.pci"></a>

```go
func Pci() interface{}
```

- *Type:* interface{}

---

##### `Soc`<sup>Required</sup> <a name="Soc" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.soc"></a>

```go
func Soc() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.internalValue"></a>

```go
func InternalValue() ReportRuleAzureComplianceReports
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReports">ReportRuleAzureComplianceReports</a>

---


### ReportRuleDailyComplianceReportsOutputReference <a name="ReportRuleDailyComplianceReportsOutputReference" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-lacework-go/lacework/reportrule"

reportrule.NewReportRuleDailyComplianceReportsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ReportRuleDailyComplianceReportsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resetAwsCloudtrail">ResetAwsCloudtrail</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resetAwsCompliance">ResetAwsCompliance</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resetAzureActivityLog">ResetAzureActivityLog</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resetAzureCompliance">ResetAzureCompliance</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resetGcpAuditTrail">ResetGcpAuditTrail</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resetGcpCompliance">ResetGcpCompliance</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resetHostSecurity">ResetHostSecurity</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resetOpenshiftCompliance">ResetOpenshiftCompliance</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resetOpenshiftComplianceEvents">ResetOpenshiftComplianceEvents</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resetPlatform">ResetPlatform</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAwsCloudtrail` <a name="ResetAwsCloudtrail" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resetAwsCloudtrail"></a>

```go
func ResetAwsCloudtrail()
```

##### `ResetAwsCompliance` <a name="ResetAwsCompliance" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resetAwsCompliance"></a>

```go
func ResetAwsCompliance()
```

##### `ResetAzureActivityLog` <a name="ResetAzureActivityLog" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resetAzureActivityLog"></a>

```go
func ResetAzureActivityLog()
```

##### `ResetAzureCompliance` <a name="ResetAzureCompliance" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resetAzureCompliance"></a>

```go
func ResetAzureCompliance()
```

##### `ResetGcpAuditTrail` <a name="ResetGcpAuditTrail" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resetGcpAuditTrail"></a>

```go
func ResetGcpAuditTrail()
```

##### `ResetGcpCompliance` <a name="ResetGcpCompliance" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resetGcpCompliance"></a>

```go
func ResetGcpCompliance()
```

##### `ResetHostSecurity` <a name="ResetHostSecurity" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resetHostSecurity"></a>

```go
func ResetHostSecurity()
```

##### `ResetOpenshiftCompliance` <a name="ResetOpenshiftCompliance" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resetOpenshiftCompliance"></a>

```go
func ResetOpenshiftCompliance()
```

##### `ResetOpenshiftComplianceEvents` <a name="ResetOpenshiftComplianceEvents" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resetOpenshiftComplianceEvents"></a>

```go
func ResetOpenshiftComplianceEvents()
```

##### `ResetPlatform` <a name="ResetPlatform" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resetPlatform"></a>

```go
func ResetPlatform()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.awsCloudtrailInput">AwsCloudtrailInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.awsComplianceInput">AwsComplianceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.azureActivityLogInput">AzureActivityLogInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.azureComplianceInput">AzureComplianceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.gcpAuditTrailInput">GcpAuditTrailInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.gcpComplianceInput">GcpComplianceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.hostSecurityInput">HostSecurityInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.openshiftComplianceEventsInput">OpenshiftComplianceEventsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.openshiftComplianceInput">OpenshiftComplianceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.platformInput">PlatformInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.awsCloudtrail">AwsCloudtrail</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.awsCompliance">AwsCompliance</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.azureActivityLog">AzureActivityLog</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.azureCompliance">AzureCompliance</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.gcpAuditTrail">GcpAuditTrail</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.gcpCompliance">GcpCompliance</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.hostSecurity">HostSecurity</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.openshiftCompliance">OpenshiftCompliance</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.openshiftComplianceEvents">OpenshiftComplianceEvents</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.platform">Platform</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports">ReportRuleDailyComplianceReports</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AwsCloudtrailInput`<sup>Optional</sup> <a name="AwsCloudtrailInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.awsCloudtrailInput"></a>

```go
func AwsCloudtrailInput() interface{}
```

- *Type:* interface{}

---

##### `AwsComplianceInput`<sup>Optional</sup> <a name="AwsComplianceInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.awsComplianceInput"></a>

```go
func AwsComplianceInput() interface{}
```

- *Type:* interface{}

---

##### `AzureActivityLogInput`<sup>Optional</sup> <a name="AzureActivityLogInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.azureActivityLogInput"></a>

```go
func AzureActivityLogInput() interface{}
```

- *Type:* interface{}

---

##### `AzureComplianceInput`<sup>Optional</sup> <a name="AzureComplianceInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.azureComplianceInput"></a>

```go
func AzureComplianceInput() interface{}
```

- *Type:* interface{}

---

##### `GcpAuditTrailInput`<sup>Optional</sup> <a name="GcpAuditTrailInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.gcpAuditTrailInput"></a>

```go
func GcpAuditTrailInput() interface{}
```

- *Type:* interface{}

---

##### `GcpComplianceInput`<sup>Optional</sup> <a name="GcpComplianceInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.gcpComplianceInput"></a>

```go
func GcpComplianceInput() interface{}
```

- *Type:* interface{}

---

##### `HostSecurityInput`<sup>Optional</sup> <a name="HostSecurityInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.hostSecurityInput"></a>

```go
func HostSecurityInput() interface{}
```

- *Type:* interface{}

---

##### `OpenshiftComplianceEventsInput`<sup>Optional</sup> <a name="OpenshiftComplianceEventsInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.openshiftComplianceEventsInput"></a>

```go
func OpenshiftComplianceEventsInput() interface{}
```

- *Type:* interface{}

---

##### `OpenshiftComplianceInput`<sup>Optional</sup> <a name="OpenshiftComplianceInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.openshiftComplianceInput"></a>

```go
func OpenshiftComplianceInput() interface{}
```

- *Type:* interface{}

---

##### `PlatformInput`<sup>Optional</sup> <a name="PlatformInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.platformInput"></a>

```go
func PlatformInput() interface{}
```

- *Type:* interface{}

---

##### `AwsCloudtrail`<sup>Required</sup> <a name="AwsCloudtrail" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.awsCloudtrail"></a>

```go
func AwsCloudtrail() interface{}
```

- *Type:* interface{}

---

##### `AwsCompliance`<sup>Required</sup> <a name="AwsCompliance" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.awsCompliance"></a>

```go
func AwsCompliance() interface{}
```

- *Type:* interface{}

---

##### `AzureActivityLog`<sup>Required</sup> <a name="AzureActivityLog" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.azureActivityLog"></a>

```go
func AzureActivityLog() interface{}
```

- *Type:* interface{}

---

##### `AzureCompliance`<sup>Required</sup> <a name="AzureCompliance" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.azureCompliance"></a>

```go
func AzureCompliance() interface{}
```

- *Type:* interface{}

---

##### `GcpAuditTrail`<sup>Required</sup> <a name="GcpAuditTrail" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.gcpAuditTrail"></a>

```go
func GcpAuditTrail() interface{}
```

- *Type:* interface{}

---

##### `GcpCompliance`<sup>Required</sup> <a name="GcpCompliance" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.gcpCompliance"></a>

```go
func GcpCompliance() interface{}
```

- *Type:* interface{}

---

##### `HostSecurity`<sup>Required</sup> <a name="HostSecurity" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.hostSecurity"></a>

```go
func HostSecurity() interface{}
```

- *Type:* interface{}

---

##### `OpenshiftCompliance`<sup>Required</sup> <a name="OpenshiftCompliance" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.openshiftCompliance"></a>

```go
func OpenshiftCompliance() interface{}
```

- *Type:* interface{}

---

##### `OpenshiftComplianceEvents`<sup>Required</sup> <a name="OpenshiftComplianceEvents" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.openshiftComplianceEvents"></a>

```go
func OpenshiftComplianceEvents() interface{}
```

- *Type:* interface{}

---

##### `Platform`<sup>Required</sup> <a name="Platform" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.platform"></a>

```go
func Platform() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.internalValue"></a>

```go
func InternalValue() ReportRuleDailyComplianceReports
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports">ReportRuleDailyComplianceReports</a>

---


### ReportRuleGcpComplianceReportsOutputReference <a name="ReportRuleGcpComplianceReportsOutputReference" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-lacework-go/lacework/reportrule"

reportrule.NewReportRuleGcpComplianceReportsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ReportRuleGcpComplianceReportsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resetCis">ResetCis</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resetCis12">ResetCis12</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resetHipaa">ResetHipaa</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resetHipaaRev2">ResetHipaaRev2</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resetIso27001">ResetIso27001</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resetK8S">ResetK8S</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resetPci">ResetPci</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resetPciRev2">ResetPciRev2</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resetSoc">ResetSoc</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resetSocRev2">ResetSocRev2</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCis` <a name="ResetCis" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resetCis"></a>

```go
func ResetCis()
```

##### `ResetCis12` <a name="ResetCis12" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resetCis12"></a>

```go
func ResetCis12()
```

##### `ResetHipaa` <a name="ResetHipaa" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resetHipaa"></a>

```go
func ResetHipaa()
```

##### `ResetHipaaRev2` <a name="ResetHipaaRev2" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resetHipaaRev2"></a>

```go
func ResetHipaaRev2()
```

##### `ResetIso27001` <a name="ResetIso27001" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resetIso27001"></a>

```go
func ResetIso27001()
```

##### `ResetK8S` <a name="ResetK8S" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resetK8S"></a>

```go
func ResetK8S()
```

##### `ResetPci` <a name="ResetPci" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resetPci"></a>

```go
func ResetPci()
```

##### `ResetPciRev2` <a name="ResetPciRev2" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resetPciRev2"></a>

```go
func ResetPciRev2()
```

##### `ResetSoc` <a name="ResetSoc" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resetSoc"></a>

```go
func ResetSoc()
```

##### `ResetSocRev2` <a name="ResetSocRev2" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resetSocRev2"></a>

```go
func ResetSocRev2()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.cis12Input">Cis12Input</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.cisInput">CisInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.hipaaInput">HipaaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.hipaaRev2Input">HipaaRev2Input</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.iso27001Input">Iso27001Input</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.k8SInput">K8SInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.pciInput">PciInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.pciRev2Input">PciRev2Input</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.socInput">SocInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.socRev2Input">SocRev2Input</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.cis">Cis</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.cis12">Cis12</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.hipaa">Hipaa</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.hipaaRev2">HipaaRev2</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.iso27001">Iso27001</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.k8S">K8S</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.pci">Pci</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.pciRev2">PciRev2</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.soc">Soc</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.socRev2">SocRev2</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports">ReportRuleGcpComplianceReports</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Cis12Input`<sup>Optional</sup> <a name="Cis12Input" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.cis12Input"></a>

```go
func Cis12Input() interface{}
```

- *Type:* interface{}

---

##### `CisInput`<sup>Optional</sup> <a name="CisInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.cisInput"></a>

```go
func CisInput() interface{}
```

- *Type:* interface{}

---

##### `HipaaInput`<sup>Optional</sup> <a name="HipaaInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.hipaaInput"></a>

```go
func HipaaInput() interface{}
```

- *Type:* interface{}

---

##### `HipaaRev2Input`<sup>Optional</sup> <a name="HipaaRev2Input" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.hipaaRev2Input"></a>

```go
func HipaaRev2Input() interface{}
```

- *Type:* interface{}

---

##### `Iso27001Input`<sup>Optional</sup> <a name="Iso27001Input" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.iso27001Input"></a>

```go
func Iso27001Input() interface{}
```

- *Type:* interface{}

---

##### `K8SInput`<sup>Optional</sup> <a name="K8SInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.k8SInput"></a>

```go
func K8SInput() interface{}
```

- *Type:* interface{}

---

##### `PciInput`<sup>Optional</sup> <a name="PciInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.pciInput"></a>

```go
func PciInput() interface{}
```

- *Type:* interface{}

---

##### `PciRev2Input`<sup>Optional</sup> <a name="PciRev2Input" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.pciRev2Input"></a>

```go
func PciRev2Input() interface{}
```

- *Type:* interface{}

---

##### `SocInput`<sup>Optional</sup> <a name="SocInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.socInput"></a>

```go
func SocInput() interface{}
```

- *Type:* interface{}

---

##### `SocRev2Input`<sup>Optional</sup> <a name="SocRev2Input" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.socRev2Input"></a>

```go
func SocRev2Input() interface{}
```

- *Type:* interface{}

---

##### `Cis`<sup>Required</sup> <a name="Cis" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.cis"></a>

```go
func Cis() interface{}
```

- *Type:* interface{}

---

##### `Cis12`<sup>Required</sup> <a name="Cis12" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.cis12"></a>

```go
func Cis12() interface{}
```

- *Type:* interface{}

---

##### `Hipaa`<sup>Required</sup> <a name="Hipaa" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.hipaa"></a>

```go
func Hipaa() interface{}
```

- *Type:* interface{}

---

##### `HipaaRev2`<sup>Required</sup> <a name="HipaaRev2" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.hipaaRev2"></a>

```go
func HipaaRev2() interface{}
```

- *Type:* interface{}

---

##### `Iso27001`<sup>Required</sup> <a name="Iso27001" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.iso27001"></a>

```go
func Iso27001() interface{}
```

- *Type:* interface{}

---

##### `K8S`<sup>Required</sup> <a name="K8S" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.k8S"></a>

```go
func K8S() interface{}
```

- *Type:* interface{}

---

##### `Pci`<sup>Required</sup> <a name="Pci" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.pci"></a>

```go
func Pci() interface{}
```

- *Type:* interface{}

---

##### `PciRev2`<sup>Required</sup> <a name="PciRev2" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.pciRev2"></a>

```go
func PciRev2() interface{}
```

- *Type:* interface{}

---

##### `Soc`<sup>Required</sup> <a name="Soc" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.soc"></a>

```go
func Soc() interface{}
```

- *Type:* interface{}

---

##### `SocRev2`<sup>Required</sup> <a name="SocRev2" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.socRev2"></a>

```go
func SocRev2() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.internalValue"></a>

```go
func InternalValue() ReportRuleGcpComplianceReports
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports">ReportRuleGcpComplianceReports</a>

---



