# `lacework_team_member`

Refer to the Terraform Registory for docs: [`lacework_team_member`](https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/team_member).

# `teamMember` Submodule <a name="`teamMember` Submodule" id="rhizo-co-terraform-provider-lacework.teamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TeamMember <a name="TeamMember" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember"></a>

Represents a {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/team_member lacework_team_member}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.Initializer"></a>

```python
from rhizo-co_cdktf_provider_lacework import team_member

teamMember.TeamMember(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  company: str,
  email: str,
  first_name: str,
  last_name: str,
  administrator: typing.Union[bool, IResolvable] = None,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  organization: TeamMemberOrganization = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.Initializer.parameter.company">company</a></code> | <code>str</code> | The company name. |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.Initializer.parameter.email">email</a></code> | <code>str</code> | The email for the team member which will also be used as the username. |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.Initializer.parameter.firstName">first_name</a></code> | <code>str</code> | The first name of the team member. |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.Initializer.parameter.lastName">last_name</a></code> | <code>str</code> | The last name of the team member. |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.Initializer.parameter.administrator">administrator</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set to true to make the team member an administrator, otherwise the member will be a regular user. |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | The state of the team member, whether they are enabled or not. |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/team_member#id TeamMember#id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.Initializer.parameter.organization">organization</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganization">TeamMemberOrganization</a></code> | organization block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `company`<sup>Required</sup> <a name="company" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.Initializer.parameter.company"></a>

- *Type:* str

The company name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/team_member#company TeamMember#company}

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.Initializer.parameter.email"></a>

- *Type:* str

The email for the team member which will also be used as the username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/team_member#email TeamMember#email}

---

##### `first_name`<sup>Required</sup> <a name="first_name" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.Initializer.parameter.firstName"></a>

- *Type:* str

The first name of the team member.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/team_member#first_name TeamMember#first_name}

---

##### `last_name`<sup>Required</sup> <a name="last_name" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.Initializer.parameter.lastName"></a>

- *Type:* str

The last name of the team member.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/team_member#last_name TeamMember#last_name}

---

##### `administrator`<sup>Optional</sup> <a name="administrator" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.Initializer.parameter.administrator"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set to true to make the team member an administrator, otherwise the member will be a regular user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/team_member#administrator TeamMember#administrator}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

The state of the team member, whether they are enabled or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/team_member#enabled TeamMember#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/team_member#id TeamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `organization`<sup>Optional</sup> <a name="organization" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.Initializer.parameter.organization"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganization">TeamMemberOrganization</a>

organization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/team_member#organization TeamMember#organization}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.putOrganization">put_organization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.resetAdministrator">reset_administrator</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.resetOrganization">reset_organization</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_organization` <a name="put_organization" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.putOrganization"></a>

```python
def put_organization(
  admin_accounts: typing.List[str] = None,
  administrator: typing.Union[bool, IResolvable] = None,
  user: typing.Union[bool, IResolvable] = None,
  user_accounts: typing.List[str] = None
) -> None
```

###### `admin_accounts`<sup>Optional</sup> <a name="admin_accounts" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.putOrganization.parameter.adminAccounts"></a>

- *Type:* typing.List[str]

List of accounts the team member is an admin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/team_member#admin_accounts TeamMember#admin_accounts}

---

###### `administrator`<sup>Optional</sup> <a name="administrator" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.putOrganization.parameter.administrator"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the team member is an org level administrator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/team_member#administrator TeamMember#administrator}

---

###### `user`<sup>Optional</sup> <a name="user" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.putOrganization.parameter.user"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the team member is an org level user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/team_member#user TeamMember#user}

---

###### `user_accounts`<sup>Optional</sup> <a name="user_accounts" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.putOrganization.parameter.userAccounts"></a>

- *Type:* typing.List[str]

List of accounts the team member is a user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/team_member#user_accounts TeamMember#user_accounts}

---

##### `reset_administrator` <a name="reset_administrator" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.resetAdministrator"></a>

```python
def reset_administrator() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_organization` <a name="reset_organization" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.resetOrganization"></a>

```python
def reset_organization() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_lacework import team_member

teamMember.TeamMember.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_lacework import team_member

teamMember.TeamMember.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_lacework import team_member

teamMember.TeamMember.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.createdTime">created_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.guid">guid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.organization">organization</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference">TeamMemberOrganizationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.updatedBy">updated_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.updatedTime">updated_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.administratorInput">administrator_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.companyInput">company_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.firstNameInput">first_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.lastNameInput">last_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.organizationInput">organization_input</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganization">TeamMemberOrganization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.administrator">administrator</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.company">company</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.firstName">first_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.lastName">last_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `created_time`<sup>Required</sup> <a name="created_time" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.createdTime"></a>

```python
created_time: str
```

- *Type:* str

---

##### `guid`<sup>Required</sup> <a name="guid" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.guid"></a>

```python
guid: str
```

- *Type:* str

---

##### `organization`<sup>Required</sup> <a name="organization" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.organization"></a>

```python
organization: TeamMemberOrganizationOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference">TeamMemberOrganizationOutputReference</a>

---

##### `updated_by`<sup>Required</sup> <a name="updated_by" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.updatedBy"></a>

```python
updated_by: str
```

- *Type:* str

---

##### `updated_time`<sup>Required</sup> <a name="updated_time" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.updatedTime"></a>

```python
updated_time: str
```

- *Type:* str

---

##### `administrator_input`<sup>Optional</sup> <a name="administrator_input" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.administratorInput"></a>

```python
administrator_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `company_input`<sup>Optional</sup> <a name="company_input" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.companyInput"></a>

```python
company_input: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `first_name_input`<sup>Optional</sup> <a name="first_name_input" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.firstNameInput"></a>

```python
first_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `last_name_input`<sup>Optional</sup> <a name="last_name_input" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.lastNameInput"></a>

```python
last_name_input: str
```

- *Type:* str

---

##### `organization_input`<sup>Optional</sup> <a name="organization_input" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.organizationInput"></a>

```python
organization_input: TeamMemberOrganization
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganization">TeamMemberOrganization</a>

---

##### `administrator`<sup>Required</sup> <a name="administrator" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.administrator"></a>

```python
administrator: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `company`<sup>Required</sup> <a name="company" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.company"></a>

```python
company: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `first_name`<sup>Required</sup> <a name="first_name" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.firstName"></a>

```python
first_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_name`<sup>Required</sup> <a name="last_name" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.lastName"></a>

```python
last_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### TeamMemberConfig <a name="TeamMemberConfig" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_lacework import team_member

teamMember.TeamMemberConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  company: str,
  email: str,
  first_name: str,
  last_name: str,
  administrator: typing.Union[bool, IResolvable] = None,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  organization: TeamMemberOrganization = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberConfig.property.company">company</a></code> | <code>str</code> | The company name. |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberConfig.property.email">email</a></code> | <code>str</code> | The email for the team member which will also be used as the username. |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberConfig.property.firstName">first_name</a></code> | <code>str</code> | The first name of the team member. |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberConfig.property.lastName">last_name</a></code> | <code>str</code> | The last name of the team member. |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberConfig.property.administrator">administrator</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set to true to make the team member an administrator, otherwise the member will be a regular user. |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | The state of the team member, whether they are enabled or not. |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/team_member#id TeamMember#id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberConfig.property.organization">organization</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganization">TeamMemberOrganization</a></code> | organization block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `company`<sup>Required</sup> <a name="company" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberConfig.property.company"></a>

```python
company: str
```

- *Type:* str

The company name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/team_member#company TeamMember#company}

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberConfig.property.email"></a>

```python
email: str
```

- *Type:* str

The email for the team member which will also be used as the username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/team_member#email TeamMember#email}

---

##### `first_name`<sup>Required</sup> <a name="first_name" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberConfig.property.firstName"></a>

```python
first_name: str
```

- *Type:* str

The first name of the team member.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/team_member#first_name TeamMember#first_name}

---

##### `last_name`<sup>Required</sup> <a name="last_name" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberConfig.property.lastName"></a>

```python
last_name: str
```

- *Type:* str

The last name of the team member.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/team_member#last_name TeamMember#last_name}

---

##### `administrator`<sup>Optional</sup> <a name="administrator" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberConfig.property.administrator"></a>

```python
administrator: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set to true to make the team member an administrator, otherwise the member will be a regular user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/team_member#administrator TeamMember#administrator}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

The state of the team member, whether they are enabled or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/team_member#enabled TeamMember#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/team_member#id TeamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `organization`<sup>Optional</sup> <a name="organization" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberConfig.property.organization"></a>

```python
organization: TeamMemberOrganization
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganization">TeamMemberOrganization</a>

organization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/team_member#organization TeamMember#organization}

---

### TeamMemberOrganization <a name="TeamMemberOrganization" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganization"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganization.Initializer"></a>

```python
from rhizo-co_cdktf_provider_lacework import team_member

teamMember.TeamMemberOrganization(
  admin_accounts: typing.List[str] = None,
  administrator: typing.Union[bool, IResolvable] = None,
  user: typing.Union[bool, IResolvable] = None,
  user_accounts: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganization.property.adminAccounts">admin_accounts</a></code> | <code>typing.List[str]</code> | List of accounts the team member is an admin. |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganization.property.administrator">administrator</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the team member is an org level administrator. |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganization.property.user">user</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the team member is an org level user. |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganization.property.userAccounts">user_accounts</a></code> | <code>typing.List[str]</code> | List of accounts the team member is a user. |

---

##### `admin_accounts`<sup>Optional</sup> <a name="admin_accounts" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganization.property.adminAccounts"></a>

```python
admin_accounts: typing.List[str]
```

- *Type:* typing.List[str]

List of accounts the team member is an admin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/team_member#admin_accounts TeamMember#admin_accounts}

---

##### `administrator`<sup>Optional</sup> <a name="administrator" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganization.property.administrator"></a>

```python
administrator: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the team member is an org level administrator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/team_member#administrator TeamMember#administrator}

---

##### `user`<sup>Optional</sup> <a name="user" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganization.property.user"></a>

```python
user: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the team member is an org level user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/team_member#user TeamMember#user}

---

##### `user_accounts`<sup>Optional</sup> <a name="user_accounts" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganization.property.userAccounts"></a>

```python
user_accounts: typing.List[str]
```

- *Type:* typing.List[str]

List of accounts the team member is a user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/team_member#user_accounts TeamMember#user_accounts}

---

## Classes <a name="Classes" id="Classes"></a>

### TeamMemberOrganizationOutputReference <a name="TeamMemberOrganizationOutputReference" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_lacework import team_member

teamMember.TeamMemberOrganizationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.resetAdminAccounts">reset_admin_accounts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.resetAdministrator">reset_administrator</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.resetUser">reset_user</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.resetUserAccounts">reset_user_accounts</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_admin_accounts` <a name="reset_admin_accounts" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.resetAdminAccounts"></a>

```python
def reset_admin_accounts() -> None
```

##### `reset_administrator` <a name="reset_administrator" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.resetAdministrator"></a>

```python
def reset_administrator() -> None
```

##### `reset_user` <a name="reset_user" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.resetUser"></a>

```python
def reset_user() -> None
```

##### `reset_user_accounts` <a name="reset_user_accounts" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.resetUserAccounts"></a>

```python
def reset_user_accounts() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.property.adminAccountsInput">admin_accounts_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.property.administratorInput">administrator_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.property.userAccountsInput">user_accounts_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.property.userInput">user_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.property.adminAccounts">admin_accounts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.property.administrator">administrator</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.property.user">user</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.property.userAccounts">user_accounts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganization">TeamMemberOrganization</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `admin_accounts_input`<sup>Optional</sup> <a name="admin_accounts_input" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.property.adminAccountsInput"></a>

```python
admin_accounts_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `administrator_input`<sup>Optional</sup> <a name="administrator_input" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.property.administratorInput"></a>

```python
administrator_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `user_accounts_input`<sup>Optional</sup> <a name="user_accounts_input" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.property.userAccountsInput"></a>

```python
user_accounts_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `user_input`<sup>Optional</sup> <a name="user_input" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.property.userInput"></a>

```python
user_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `admin_accounts`<sup>Required</sup> <a name="admin_accounts" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.property.adminAccounts"></a>

```python
admin_accounts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `administrator`<sup>Required</sup> <a name="administrator" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.property.administrator"></a>

```python
administrator: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `user`<sup>Required</sup> <a name="user" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.property.user"></a>

```python
user: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `user_accounts`<sup>Required</sup> <a name="user_accounts" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.property.userAccounts"></a>

```python
user_accounts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.property.internalValue"></a>

```python
internal_value: TeamMemberOrganization
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganization">TeamMemberOrganization</a>

---



