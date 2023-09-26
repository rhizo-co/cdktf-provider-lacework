# `lacework_policy_compliance`

Refer to the Terraform Registory for docs: [`lacework_policy_compliance`](https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/policy_compliance).

# `policyCompliance` Submodule <a name="`policyCompliance` Submodule" id="rhizo-co-terraform-provider-lacework.policyCompliance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PolicyCompliance <a name="PolicyCompliance" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance"></a>

Represents a {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/policy_compliance lacework_policy_compliance}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-lacework-go/lacework/policycompliance"

policycompliance.NewPolicyCompliance(scope Construct, id *string, config PolicyComplianceConfig) PolicyCompliance
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig">PolicyComplianceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig">PolicyComplianceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.resetAlertingEnabled">ResetAlertingEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.resetPolicyIdSuffix">ResetPolicyIdSuffix</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.resetRemediation">ResetRemediation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAlertingEnabled` <a name="ResetAlertingEnabled" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.resetAlertingEnabled"></a>

```go
func ResetAlertingEnabled()
```

##### `ResetEnabled` <a name="ResetEnabled" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetPolicyIdSuffix` <a name="ResetPolicyIdSuffix" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.resetPolicyIdSuffix"></a>

```go
func ResetPolicyIdSuffix()
```

##### `ResetRemediation` <a name="ResetRemediation" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.resetRemediation"></a>

```go
func ResetRemediation()
```

##### `ResetTags` <a name="ResetTags" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-lacework-go/lacework/policycompliance"

policycompliance.PolicyCompliance_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-lacework-go/lacework/policycompliance"

policycompliance.PolicyCompliance_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-lacework-go/lacework/policycompliance"

policycompliance.PolicyCompliance_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.computedTags">ComputedTags</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.updatedBy">UpdatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.updatedTime">UpdatedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.alertingEnabledInput">AlertingEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.policyIdSuffixInput">PolicyIdSuffixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.queryIdInput">QueryIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.remediationInput">RemediationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.severityInput">SeverityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.tagsInput">TagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.alertingEnabled">AlertingEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.policyIdSuffix">PolicyIdSuffix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.queryId">QueryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.remediation">Remediation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.severity">Severity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.tags">Tags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.title">Title</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ComputedTags`<sup>Required</sup> <a name="ComputedTags" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.computedTags"></a>

```go
func ComputedTags() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `UpdatedBy`<sup>Required</sup> <a name="UpdatedBy" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.updatedBy"></a>

```go
func UpdatedBy() *string
```

- *Type:* *string

---

##### `UpdatedTime`<sup>Required</sup> <a name="UpdatedTime" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.updatedTime"></a>

```go
func UpdatedTime() *string
```

- *Type:* *string

---

##### `AlertingEnabledInput`<sup>Optional</sup> <a name="AlertingEnabledInput" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.alertingEnabledInput"></a>

```go
func AlertingEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `PolicyIdSuffixInput`<sup>Optional</sup> <a name="PolicyIdSuffixInput" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.policyIdSuffixInput"></a>

```go
func PolicyIdSuffixInput() *string
```

- *Type:* *string

---

##### `QueryIdInput`<sup>Optional</sup> <a name="QueryIdInput" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.queryIdInput"></a>

```go
func QueryIdInput() *string
```

- *Type:* *string

---

##### `RemediationInput`<sup>Optional</sup> <a name="RemediationInput" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.remediationInput"></a>

```go
func RemediationInput() *string
```

- *Type:* *string

---

##### `SeverityInput`<sup>Optional</sup> <a name="SeverityInput" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.severityInput"></a>

```go
func SeverityInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.tagsInput"></a>

```go
func TagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `AlertingEnabled`<sup>Required</sup> <a name="AlertingEnabled" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.alertingEnabled"></a>

```go
func AlertingEnabled() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `PolicyIdSuffix`<sup>Required</sup> <a name="PolicyIdSuffix" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.policyIdSuffix"></a>

```go
func PolicyIdSuffix() *string
```

- *Type:* *string

---

##### `QueryId`<sup>Required</sup> <a name="QueryId" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.queryId"></a>

```go
func QueryId() *string
```

- *Type:* *string

---

##### `Remediation`<sup>Required</sup> <a name="Remediation" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.remediation"></a>

```go
func Remediation() *string
```

- *Type:* *string

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.severity"></a>

```go
func Severity() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.tags"></a>

```go
func Tags() *[]*string
```

- *Type:* *[]*string

---

##### `Title`<sup>Required</sup> <a name="Title" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### PolicyComplianceConfig <a name="PolicyComplianceConfig" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-lacework-go/lacework/policycompliance"

&policycompliance.PolicyComplianceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Description: *string,
	QueryId: *string,
	Severity: *string,
	Title: *string,
	AlertingEnabled: interface{},
	Enabled: interface{},
	PolicyIdSuffix: *string,
	Remediation: *string,
	Tags: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.description">Description</a></code> | <code>*string</code> | The description of the query. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.queryId">QueryId</a></code> | <code>*string</code> | The id of the query. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.severity">Severity</a></code> | <code>*string</code> | The severity for the policy. Valid severities are: Critical, High, Medium, Low, Info. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.title">Title</a></code> | <code>*string</code> | The title of the policy. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.alertingEnabled">AlertingEnabled</a></code> | <code>interface{}</code> | Whether alerting is enabled or disabled. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | The state of the policy. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.policyIdSuffix">PolicyIdSuffix</a></code> | <code>*string</code> | The string appended to the end of the policy id. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.remediation">Remediation</a></code> | <code>*string</code> | The remediation message to display. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.tags">Tags</a></code> | <code>*[]*string</code> | A list of user specified policy tags. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description of the query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/policy_compliance#description PolicyCompliance#description}

---

##### `QueryId`<sup>Required</sup> <a name="QueryId" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.queryId"></a>

```go
QueryId *string
```

- *Type:* *string

The id of the query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/policy_compliance#query_id PolicyCompliance#query_id}

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.severity"></a>

```go
Severity *string
```

- *Type:* *string

The severity for the policy. Valid severities are: Critical, High, Medium, Low, Info.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/policy_compliance#severity PolicyCompliance#severity}

---

##### `Title`<sup>Required</sup> <a name="Title" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.title"></a>

```go
Title *string
```

- *Type:* *string

The title of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/policy_compliance#title PolicyCompliance#title}

---

##### `AlertingEnabled`<sup>Optional</sup> <a name="AlertingEnabled" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.alertingEnabled"></a>

```go
AlertingEnabled interface{}
```

- *Type:* interface{}

Whether alerting is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/policy_compliance#alerting_enabled PolicyCompliance#alerting_enabled}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

The state of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/policy_compliance#enabled PolicyCompliance#enabled}

---

##### `PolicyIdSuffix`<sup>Optional</sup> <a name="PolicyIdSuffix" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.policyIdSuffix"></a>

```go
PolicyIdSuffix *string
```

- *Type:* *string

The string appended to the end of the policy id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/policy_compliance#policy_id_suffix PolicyCompliance#policy_id_suffix}

---

##### `Remediation`<sup>Optional</sup> <a name="Remediation" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.remediation"></a>

```go
Remediation *string
```

- *Type:* *string

The remediation message to display.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/policy_compliance#remediation PolicyCompliance#remediation}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.tags"></a>

```go
Tags *[]*string
```

- *Type:* *[]*string

A list of user specified policy tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/policy_compliance#tags PolicyCompliance#tags}

---



