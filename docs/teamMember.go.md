# `lacework_team_member`

Refer to the Terraform Registory for docs: [`lacework_team_member`](https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/team_member).

# `teamMember` Submodule <a name="`teamMember` Submodule" id="rhizo-co-terraform-provider-lacework.teamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TeamMember <a name="TeamMember" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember"></a>

Represents a {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/team_member lacework_team_member}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-lacework-go/lacework/teammember"

teammember.NewTeamMember(scope Construct, id *string, config TeamMemberConfig) TeamMember
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberConfig">TeamMemberConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberConfig">TeamMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.putOrganization">PutOrganization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.resetAdministrator">ResetAdministrator</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.resetOrganization">ResetOrganization</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutOrganization` <a name="PutOrganization" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.putOrganization"></a>

```go
func PutOrganization(value TeamMemberOrganization)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.putOrganization.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganization">TeamMemberOrganization</a>

---

##### `ResetAdministrator` <a name="ResetAdministrator" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.resetAdministrator"></a>

```go
func ResetAdministrator()
```

##### `ResetEnabled` <a name="ResetEnabled" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.resetId"></a>

```go
func ResetId()
```

##### `ResetOrganization` <a name="ResetOrganization" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.resetOrganization"></a>

```go
func ResetOrganization()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-lacework-go/lacework/teammember"

teammember.TeamMember_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-lacework-go/lacework/teammember"

teammember.TeamMember_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-lacework-go/lacework/teammember"

teammember.TeamMember_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.createdTime">CreatedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.guid">Guid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.organization">Organization</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference">TeamMemberOrganizationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.updatedBy">UpdatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.updatedTime">UpdatedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.administratorInput">AdministratorInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.companyInput">CompanyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.emailInput">EmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.firstNameInput">FirstNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.lastNameInput">LastNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.organizationInput">OrganizationInput</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganization">TeamMemberOrganization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.administrator">Administrator</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.company">Company</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.firstName">FirstName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.lastName">LastName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedTime`<sup>Required</sup> <a name="CreatedTime" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.createdTime"></a>

```go
func CreatedTime() *string
```

- *Type:* *string

---

##### `Guid`<sup>Required</sup> <a name="Guid" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.guid"></a>

```go
func Guid() *string
```

- *Type:* *string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.organization"></a>

```go
func Organization() TeamMemberOrganizationOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference">TeamMemberOrganizationOutputReference</a>

---

##### `UpdatedBy`<sup>Required</sup> <a name="UpdatedBy" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.updatedBy"></a>

```go
func UpdatedBy() *string
```

- *Type:* *string

---

##### `UpdatedTime`<sup>Required</sup> <a name="UpdatedTime" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.updatedTime"></a>

```go
func UpdatedTime() *string
```

- *Type:* *string

---

##### `AdministratorInput`<sup>Optional</sup> <a name="AdministratorInput" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.administratorInput"></a>

```go
func AdministratorInput() interface{}
```

- *Type:* interface{}

---

##### `CompanyInput`<sup>Optional</sup> <a name="CompanyInput" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.companyInput"></a>

```go
func CompanyInput() *string
```

- *Type:* *string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.emailInput"></a>

```go
func EmailInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `FirstNameInput`<sup>Optional</sup> <a name="FirstNameInput" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.firstNameInput"></a>

```go
func FirstNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LastNameInput`<sup>Optional</sup> <a name="LastNameInput" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.lastNameInput"></a>

```go
func LastNameInput() *string
```

- *Type:* *string

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.organizationInput"></a>

```go
func OrganizationInput() TeamMemberOrganization
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganization">TeamMemberOrganization</a>

---

##### `Administrator`<sup>Required</sup> <a name="Administrator" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.administrator"></a>

```go
func Administrator() interface{}
```

- *Type:* interface{}

---

##### `Company`<sup>Required</sup> <a name="Company" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.company"></a>

```go
func Company() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.firstName"></a>

```go
func FirstName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.lastName"></a>

```go
func LastName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### TeamMemberConfig <a name="TeamMemberConfig" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-lacework-go/lacework/teammember"

&teammember.TeamMemberConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Company: *string,
	Email: *string,
	FirstName: *string,
	LastName: *string,
	Administrator: interface{},
	Enabled: interface{},
	Id: *string,
	Organization: github.com/rhizo-co/cdktf-provider-lacework-go/lacework.teamMember.TeamMemberOrganization,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberConfig.property.company">Company</a></code> | <code>*string</code> | The company name. |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberConfig.property.email">Email</a></code> | <code>*string</code> | The email for the team member which will also be used as the username. |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberConfig.property.firstName">FirstName</a></code> | <code>*string</code> | The first name of the team member. |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberConfig.property.lastName">LastName</a></code> | <code>*string</code> | The last name of the team member. |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberConfig.property.administrator">Administrator</a></code> | <code>interface{}</code> | Set to true to make the team member an administrator, otherwise the member will be a regular user. |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | The state of the team member, whether they are enabled or not. |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/team_member#id TeamMember#id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberConfig.property.organization">Organization</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganization">TeamMemberOrganization</a></code> | organization block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Company`<sup>Required</sup> <a name="Company" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberConfig.property.company"></a>

```go
Company *string
```

- *Type:* *string

The company name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/team_member#company TeamMember#company}

---

##### `Email`<sup>Required</sup> <a name="Email" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberConfig.property.email"></a>

```go
Email *string
```

- *Type:* *string

The email for the team member which will also be used as the username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/team_member#email TeamMember#email}

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberConfig.property.firstName"></a>

```go
FirstName *string
```

- *Type:* *string

The first name of the team member.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/team_member#first_name TeamMember#first_name}

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberConfig.property.lastName"></a>

```go
LastName *string
```

- *Type:* *string

The last name of the team member.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/team_member#last_name TeamMember#last_name}

---

##### `Administrator`<sup>Optional</sup> <a name="Administrator" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberConfig.property.administrator"></a>

```go
Administrator interface{}
```

- *Type:* interface{}

Set to true to make the team member an administrator, otherwise the member will be a regular user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/team_member#administrator TeamMember#administrator}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

The state of the team member, whether they are enabled or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/team_member#enabled TeamMember#enabled}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/team_member#id TeamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Organization`<sup>Optional</sup> <a name="Organization" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberConfig.property.organization"></a>

```go
Organization TeamMemberOrganization
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganization">TeamMemberOrganization</a>

organization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/team_member#organization TeamMember#organization}

---

### TeamMemberOrganization <a name="TeamMemberOrganization" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganization"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganization.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-lacework-go/lacework/teammember"

&teammember.TeamMemberOrganization {
	AdminAccounts: *[]*string,
	Administrator: interface{},
	User: interface{},
	UserAccounts: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganization.property.adminAccounts">AdminAccounts</a></code> | <code>*[]*string</code> | List of accounts the team member is an admin. |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganization.property.administrator">Administrator</a></code> | <code>interface{}</code> | Whether the team member is an org level administrator. |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganization.property.user">User</a></code> | <code>interface{}</code> | Whether the team member is an org level user. |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganization.property.userAccounts">UserAccounts</a></code> | <code>*[]*string</code> | List of accounts the team member is a user. |

---

##### `AdminAccounts`<sup>Optional</sup> <a name="AdminAccounts" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganization.property.adminAccounts"></a>

```go
AdminAccounts *[]*string
```

- *Type:* *[]*string

List of accounts the team member is an admin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/team_member#admin_accounts TeamMember#admin_accounts}

---

##### `Administrator`<sup>Optional</sup> <a name="Administrator" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganization.property.administrator"></a>

```go
Administrator interface{}
```

- *Type:* interface{}

Whether the team member is an org level administrator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/team_member#administrator TeamMember#administrator}

---

##### `User`<sup>Optional</sup> <a name="User" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganization.property.user"></a>

```go
User interface{}
```

- *Type:* interface{}

Whether the team member is an org level user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/team_member#user TeamMember#user}

---

##### `UserAccounts`<sup>Optional</sup> <a name="UserAccounts" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganization.property.userAccounts"></a>

```go
UserAccounts *[]*string
```

- *Type:* *[]*string

List of accounts the team member is a user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/team_member#user_accounts TeamMember#user_accounts}

---

## Classes <a name="Classes" id="Classes"></a>

### TeamMemberOrganizationOutputReference <a name="TeamMemberOrganizationOutputReference" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-lacework-go/lacework/teammember"

teammember.NewTeamMemberOrganizationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TeamMemberOrganizationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.resetAdminAccounts">ResetAdminAccounts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.resetAdministrator">ResetAdministrator</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.resetUser">ResetUser</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.resetUserAccounts">ResetUserAccounts</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdminAccounts` <a name="ResetAdminAccounts" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.resetAdminAccounts"></a>

```go
func ResetAdminAccounts()
```

##### `ResetAdministrator` <a name="ResetAdministrator" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.resetAdministrator"></a>

```go
func ResetAdministrator()
```

##### `ResetUser` <a name="ResetUser" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.resetUser"></a>

```go
func ResetUser()
```

##### `ResetUserAccounts` <a name="ResetUserAccounts" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.resetUserAccounts"></a>

```go
func ResetUserAccounts()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.property.adminAccountsInput">AdminAccountsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.property.administratorInput">AdministratorInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.property.userAccountsInput">UserAccountsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.property.userInput">UserInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.property.adminAccounts">AdminAccounts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.property.administrator">Administrator</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.property.user">User</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.property.userAccounts">UserAccounts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganization">TeamMemberOrganization</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdminAccountsInput`<sup>Optional</sup> <a name="AdminAccountsInput" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.property.adminAccountsInput"></a>

```go
func AdminAccountsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AdministratorInput`<sup>Optional</sup> <a name="AdministratorInput" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.property.administratorInput"></a>

```go
func AdministratorInput() interface{}
```

- *Type:* interface{}

---

##### `UserAccountsInput`<sup>Optional</sup> <a name="UserAccountsInput" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.property.userAccountsInput"></a>

```go
func UserAccountsInput() *[]*string
```

- *Type:* *[]*string

---

##### `UserInput`<sup>Optional</sup> <a name="UserInput" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.property.userInput"></a>

```go
func UserInput() interface{}
```

- *Type:* interface{}

---

##### `AdminAccounts`<sup>Required</sup> <a name="AdminAccounts" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.property.adminAccounts"></a>

```go
func AdminAccounts() *[]*string
```

- *Type:* *[]*string

---

##### `Administrator`<sup>Required</sup> <a name="Administrator" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.property.administrator"></a>

```go
func Administrator() interface{}
```

- *Type:* interface{}

---

##### `User`<sup>Required</sup> <a name="User" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.property.user"></a>

```go
func User() interface{}
```

- *Type:* interface{}

---

##### `UserAccounts`<sup>Required</sup> <a name="UserAccounts" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.property.userAccounts"></a>

```go
func UserAccounts() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.property.internalValue"></a>

```go
func InternalValue() TeamMemberOrganization
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganization">TeamMemberOrganization</a>

---



