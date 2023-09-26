# `lacework_policy`

Refer to the Terraform Registory for docs: [`lacework_policy`](https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/policy).

# `policy` Submodule <a name="`policy` Submodule" id="rhizo-co-terraform-provider-lacework.policy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Policy <a name="Policy" id="rhizo-co-terraform-provider-lacework.policy.Policy"></a>

Represents a {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/policy lacework_policy}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.policy.Policy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_lacework import policy

policy.Policy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  description: str,
  query_id: str,
  severity: str,
  title: str,
  type: str,
  alerting: PolicyAlerting = None,
  enabled: typing.Union[bool, IResolvable] = None,
  evaluation: str = None,
  limit: typing.Union[int, float] = None,
  policy_id_suffix: str = None,
  remediation: str = None,
  tags: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.Policy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.Policy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.Policy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.Policy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.Policy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.Policy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.Policy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.Policy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.Policy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.Policy.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the query. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.Policy.Initializer.parameter.queryId">query_id</a></code> | <code>str</code> | The id of the query. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.Policy.Initializer.parameter.severity">severity</a></code> | <code>str</code> | The severity for the policy. Valid severities are: Critical, High, Medium, Low, Info. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.Policy.Initializer.parameter.title">title</a></code> | <code>str</code> | The title of the policy. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.Policy.Initializer.parameter.type">type</a></code> | <code>str</code> | The policy type must be 'Violation'. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.Policy.Initializer.parameter.alerting">alerting</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.policy.PolicyAlerting">PolicyAlerting</a></code> | alerting block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.Policy.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | The state of the policy. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.Policy.Initializer.parameter.evaluation">evaluation</a></code> | <code>str</code> | The evaluation frequency must be either 'Hourly' or 'Daily'. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.Policy.Initializer.parameter.limit">limit</a></code> | <code>typing.Union[int, float]</code> | Set the number of records returned by the policy. Maximum value is 5000. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.Policy.Initializer.parameter.policyIdSuffix">policy_id_suffix</a></code> | <code>str</code> | The string appended to the end of the policy id. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.Policy.Initializer.parameter.remediation">remediation</a></code> | <code>str</code> | The remediation message to display. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.Policy.Initializer.parameter.tags">tags</a></code> | <code>typing.List[str]</code> | A list of user specified policy tags. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-lacework.policy.Policy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.policy.Policy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.policy.Policy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.policy.Policy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-lacework.policy.Policy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-lacework.policy.Policy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.policy.Policy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.policy.Policy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.policy.Policy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-lacework.policy.Policy.Initializer.parameter.description"></a>

- *Type:* str

The description of the query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/policy#description Policy#description}

---

##### `query_id`<sup>Required</sup> <a name="query_id" id="rhizo-co-terraform-provider-lacework.policy.Policy.Initializer.parameter.queryId"></a>

- *Type:* str

The id of the query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/policy#query_id Policy#query_id}

---

##### `severity`<sup>Required</sup> <a name="severity" id="rhizo-co-terraform-provider-lacework.policy.Policy.Initializer.parameter.severity"></a>

- *Type:* str

The severity for the policy. Valid severities are: Critical, High, Medium, Low, Info.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/policy#severity Policy#severity}

---

##### `title`<sup>Required</sup> <a name="title" id="rhizo-co-terraform-provider-lacework.policy.Policy.Initializer.parameter.title"></a>

- *Type:* str

The title of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/policy#title Policy#title}

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-lacework.policy.Policy.Initializer.parameter.type"></a>

- *Type:* str

The policy type must be 'Violation'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/policy#type Policy#type}

---

##### `alerting`<sup>Optional</sup> <a name="alerting" id="rhizo-co-terraform-provider-lacework.policy.Policy.Initializer.parameter.alerting"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.policy.PolicyAlerting">PolicyAlerting</a>

alerting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/policy#alerting Policy#alerting}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.policy.Policy.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

The state of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/policy#enabled Policy#enabled}

---

##### `evaluation`<sup>Optional</sup> <a name="evaluation" id="rhizo-co-terraform-provider-lacework.policy.Policy.Initializer.parameter.evaluation"></a>

- *Type:* str

The evaluation frequency must be either 'Hourly' or 'Daily'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/policy#evaluation Policy#evaluation}

---

##### `limit`<sup>Optional</sup> <a name="limit" id="rhizo-co-terraform-provider-lacework.policy.Policy.Initializer.parameter.limit"></a>

- *Type:* typing.Union[int, float]

Set the number of records returned by the policy. Maximum value is 5000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/policy#limit Policy#limit}

---

##### `policy_id_suffix`<sup>Optional</sup> <a name="policy_id_suffix" id="rhizo-co-terraform-provider-lacework.policy.Policy.Initializer.parameter.policyIdSuffix"></a>

- *Type:* str

The string appended to the end of the policy id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/policy#policy_id_suffix Policy#policy_id_suffix}

---

##### `remediation`<sup>Optional</sup> <a name="remediation" id="rhizo-co-terraform-provider-lacework.policy.Policy.Initializer.parameter.remediation"></a>

- *Type:* str

The remediation message to display.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/policy#remediation Policy#remediation}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="rhizo-co-terraform-provider-lacework.policy.Policy.Initializer.parameter.tags"></a>

- *Type:* typing.List[str]

A list of user specified policy tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/policy#tags Policy#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.Policy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.Policy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.Policy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.Policy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.Policy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.Policy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.Policy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.Policy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.Policy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.Policy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.Policy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.Policy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.Policy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.Policy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.Policy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.Policy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.Policy.putAlerting">put_alerting</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.Policy.resetAlerting">reset_alerting</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.Policy.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.Policy.resetEvaluation">reset_evaluation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.Policy.resetLimit">reset_limit</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.Policy.resetPolicyIdSuffix">reset_policy_id_suffix</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.Policy.resetRemediation">reset_remediation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.Policy.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-lacework.policy.Policy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-lacework.policy.Policy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-lacework.policy.Policy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.policy.Policy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-lacework.policy.Policy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-lacework.policy.Policy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-lacework.policy.Policy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-lacework.policy.Policy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-lacework.policy.Policy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-lacework.policy.Policy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.policy.Policy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-lacework.policy.Policy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.policy.Policy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-lacework.policy.Policy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.policy.Policy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-lacework.policy.Policy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.policy.Policy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-lacework.policy.Policy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.policy.Policy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-lacework.policy.Policy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.policy.Policy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-lacework.policy.Policy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.policy.Policy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-lacework.policy.Policy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.policy.Policy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-lacework.policy.Policy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.policy.Policy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-lacework.policy.Policy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.policy.Policy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_alerting` <a name="put_alerting" id="rhizo-co-terraform-provider-lacework.policy.Policy.putAlerting"></a>

```python
def put_alerting(
  profile: str,
  enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `profile`<sup>Required</sup> <a name="profile" id="rhizo-co-terraform-provider-lacework.policy.Policy.putAlerting.parameter.profile"></a>

- *Type:* str

The alerting profile id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/policy#profile Policy#profile}

---

###### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.policy.Policy.putAlerting.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether alerting is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/policy#enabled Policy#enabled}

---

##### `reset_alerting` <a name="reset_alerting" id="rhizo-co-terraform-provider-lacework.policy.Policy.resetAlerting"></a>

```python
def reset_alerting() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="rhizo-co-terraform-provider-lacework.policy.Policy.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_evaluation` <a name="reset_evaluation" id="rhizo-co-terraform-provider-lacework.policy.Policy.resetEvaluation"></a>

```python
def reset_evaluation() -> None
```

##### `reset_limit` <a name="reset_limit" id="rhizo-co-terraform-provider-lacework.policy.Policy.resetLimit"></a>

```python
def reset_limit() -> None
```

##### `reset_policy_id_suffix` <a name="reset_policy_id_suffix" id="rhizo-co-terraform-provider-lacework.policy.Policy.resetPolicyIdSuffix"></a>

```python
def reset_policy_id_suffix() -> None
```

##### `reset_remediation` <a name="reset_remediation" id="rhizo-co-terraform-provider-lacework.policy.Policy.resetRemediation"></a>

```python
def reset_remediation() -> None
```

##### `reset_tags` <a name="reset_tags" id="rhizo-co-terraform-provider-lacework.policy.Policy.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.Policy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.Policy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.Policy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-lacework.policy.Policy.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_lacework import policy

policy.Policy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.policy.Policy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-lacework.policy.Policy.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_lacework import policy

policy.Policy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.policy.Policy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-lacework.policy.Policy.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_lacework import policy

policy.Policy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.policy.Policy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.Policy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.Policy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.Policy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.Policy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.Policy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.Policy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.Policy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.Policy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.Policy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.Policy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.Policy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.Policy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.Policy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.Policy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.Policy.property.alerting">alerting</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.policy.PolicyAlertingOutputReference">PolicyAlertingOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.Policy.property.computedTags">computed_tags</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.Policy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.Policy.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.Policy.property.updatedBy">updated_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.Policy.property.updatedTime">updated_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.Policy.property.alertingInput">alerting_input</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.policy.PolicyAlerting">PolicyAlerting</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.Policy.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.Policy.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.Policy.property.evaluationInput">evaluation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.Policy.property.limitInput">limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.Policy.property.policyIdSuffixInput">policy_id_suffix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.Policy.property.queryIdInput">query_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.Policy.property.remediationInput">remediation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.Policy.property.severityInput">severity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.Policy.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.Policy.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.Policy.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.Policy.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.Policy.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.Policy.property.evaluation">evaluation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.Policy.property.limit">limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.Policy.property.policyIdSuffix">policy_id_suffix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.Policy.property.queryId">query_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.Policy.property.remediation">remediation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.Policy.property.severity">severity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.Policy.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.Policy.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.Policy.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-lacework.policy.Policy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-lacework.policy.Policy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.policy.Policy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-lacework.policy.Policy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-lacework.policy.Policy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-lacework.policy.Policy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-lacework.policy.Policy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.policy.Policy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.policy.Policy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-lacework.policy.Policy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-lacework.policy.Policy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.policy.Policy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.policy.Policy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.policy.Policy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `alerting`<sup>Required</sup> <a name="alerting" id="rhizo-co-terraform-provider-lacework.policy.Policy.property.alerting"></a>

```python
alerting: PolicyAlertingOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.policy.PolicyAlertingOutputReference">PolicyAlertingOutputReference</a>

---

##### `computed_tags`<sup>Required</sup> <a name="computed_tags" id="rhizo-co-terraform-provider-lacework.policy.Policy.property.computedTags"></a>

```python
computed_tags: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.policy.Policy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="rhizo-co-terraform-provider-lacework.policy.Policy.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `updated_by`<sup>Required</sup> <a name="updated_by" id="rhizo-co-terraform-provider-lacework.policy.Policy.property.updatedBy"></a>

```python
updated_by: str
```

- *Type:* str

---

##### `updated_time`<sup>Required</sup> <a name="updated_time" id="rhizo-co-terraform-provider-lacework.policy.Policy.property.updatedTime"></a>

```python
updated_time: str
```

- *Type:* str

---

##### `alerting_input`<sup>Optional</sup> <a name="alerting_input" id="rhizo-co-terraform-provider-lacework.policy.Policy.property.alertingInput"></a>

```python
alerting_input: PolicyAlerting
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.policy.PolicyAlerting">PolicyAlerting</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-lacework.policy.Policy.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="rhizo-co-terraform-provider-lacework.policy.Policy.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `evaluation_input`<sup>Optional</sup> <a name="evaluation_input" id="rhizo-co-terraform-provider-lacework.policy.Policy.property.evaluationInput"></a>

```python
evaluation_input: str
```

- *Type:* str

---

##### `limit_input`<sup>Optional</sup> <a name="limit_input" id="rhizo-co-terraform-provider-lacework.policy.Policy.property.limitInput"></a>

```python
limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `policy_id_suffix_input`<sup>Optional</sup> <a name="policy_id_suffix_input" id="rhizo-co-terraform-provider-lacework.policy.Policy.property.policyIdSuffixInput"></a>

```python
policy_id_suffix_input: str
```

- *Type:* str

---

##### `query_id_input`<sup>Optional</sup> <a name="query_id_input" id="rhizo-co-terraform-provider-lacework.policy.Policy.property.queryIdInput"></a>

```python
query_id_input: str
```

- *Type:* str

---

##### `remediation_input`<sup>Optional</sup> <a name="remediation_input" id="rhizo-co-terraform-provider-lacework.policy.Policy.property.remediationInput"></a>

```python
remediation_input: str
```

- *Type:* str

---

##### `severity_input`<sup>Optional</sup> <a name="severity_input" id="rhizo-co-terraform-provider-lacework.policy.Policy.property.severityInput"></a>

```python
severity_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="rhizo-co-terraform-provider-lacework.policy.Policy.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="rhizo-co-terraform-provider-lacework.policy.Policy.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-lacework.policy.Policy.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-lacework.policy.Policy.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.policy.Policy.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `evaluation`<sup>Required</sup> <a name="evaluation" id="rhizo-co-terraform-provider-lacework.policy.Policy.property.evaluation"></a>

```python
evaluation: str
```

- *Type:* str

---

##### `limit`<sup>Required</sup> <a name="limit" id="rhizo-co-terraform-provider-lacework.policy.Policy.property.limit"></a>

```python
limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `policy_id_suffix`<sup>Required</sup> <a name="policy_id_suffix" id="rhizo-co-terraform-provider-lacework.policy.Policy.property.policyIdSuffix"></a>

```python
policy_id_suffix: str
```

- *Type:* str

---

##### `query_id`<sup>Required</sup> <a name="query_id" id="rhizo-co-terraform-provider-lacework.policy.Policy.property.queryId"></a>

```python
query_id: str
```

- *Type:* str

---

##### `remediation`<sup>Required</sup> <a name="remediation" id="rhizo-co-terraform-provider-lacework.policy.Policy.property.remediation"></a>

```python
remediation: str
```

- *Type:* str

---

##### `severity`<sup>Required</sup> <a name="severity" id="rhizo-co-terraform-provider-lacework.policy.Policy.property.severity"></a>

```python
severity: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-lacework.policy.Policy.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `title`<sup>Required</sup> <a name="title" id="rhizo-co-terraform-provider-lacework.policy.Policy.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-lacework.policy.Policy.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.Policy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-lacework.policy.Policy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PolicyAlerting <a name="PolicyAlerting" id="rhizo-co-terraform-provider-lacework.policy.PolicyAlerting"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.policy.PolicyAlerting.Initializer"></a>

```python
from rhizo-co_cdktf_provider_lacework import policy

policy.PolicyAlerting(
  profile: str,
  enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.PolicyAlerting.property.profile">profile</a></code> | <code>str</code> | The alerting profile id. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.PolicyAlerting.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether alerting is enabled or disabled. |

---

##### `profile`<sup>Required</sup> <a name="profile" id="rhizo-co-terraform-provider-lacework.policy.PolicyAlerting.property.profile"></a>

```python
profile: str
```

- *Type:* str

The alerting profile id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/policy#profile Policy#profile}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.policy.PolicyAlerting.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether alerting is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/policy#enabled Policy#enabled}

---

### PolicyConfig <a name="PolicyConfig" id="rhizo-co-terraform-provider-lacework.policy.PolicyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.policy.PolicyConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_lacework import policy

policy.PolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  description: str,
  query_id: str,
  severity: str,
  title: str,
  type: str,
  alerting: PolicyAlerting = None,
  enabled: typing.Union[bool, IResolvable] = None,
  evaluation: str = None,
  limit: typing.Union[int, float] = None,
  policy_id_suffix: str = None,
  remediation: str = None,
  tags: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.PolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.PolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.PolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.PolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.PolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.PolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.PolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.PolicyConfig.property.description">description</a></code> | <code>str</code> | The description of the query. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.PolicyConfig.property.queryId">query_id</a></code> | <code>str</code> | The id of the query. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.PolicyConfig.property.severity">severity</a></code> | <code>str</code> | The severity for the policy. Valid severities are: Critical, High, Medium, Low, Info. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.PolicyConfig.property.title">title</a></code> | <code>str</code> | The title of the policy. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.PolicyConfig.property.type">type</a></code> | <code>str</code> | The policy type must be 'Violation'. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.PolicyConfig.property.alerting">alerting</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.policy.PolicyAlerting">PolicyAlerting</a></code> | alerting block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.PolicyConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | The state of the policy. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.PolicyConfig.property.evaluation">evaluation</a></code> | <code>str</code> | The evaluation frequency must be either 'Hourly' or 'Daily'. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.PolicyConfig.property.limit">limit</a></code> | <code>typing.Union[int, float]</code> | Set the number of records returned by the policy. Maximum value is 5000. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.PolicyConfig.property.policyIdSuffix">policy_id_suffix</a></code> | <code>str</code> | The string appended to the end of the policy id. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.PolicyConfig.property.remediation">remediation</a></code> | <code>str</code> | The remediation message to display. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.PolicyConfig.property.tags">tags</a></code> | <code>typing.List[str]</code> | A list of user specified policy tags. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.policy.PolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.policy.PolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-lacework.policy.PolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-lacework.policy.PolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.policy.PolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.policy.PolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.policy.PolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-lacework.policy.PolicyConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/policy#description Policy#description}

---

##### `query_id`<sup>Required</sup> <a name="query_id" id="rhizo-co-terraform-provider-lacework.policy.PolicyConfig.property.queryId"></a>

```python
query_id: str
```

- *Type:* str

The id of the query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/policy#query_id Policy#query_id}

---

##### `severity`<sup>Required</sup> <a name="severity" id="rhizo-co-terraform-provider-lacework.policy.PolicyConfig.property.severity"></a>

```python
severity: str
```

- *Type:* str

The severity for the policy. Valid severities are: Critical, High, Medium, Low, Info.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/policy#severity Policy#severity}

---

##### `title`<sup>Required</sup> <a name="title" id="rhizo-co-terraform-provider-lacework.policy.PolicyConfig.property.title"></a>

```python
title: str
```

- *Type:* str

The title of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/policy#title Policy#title}

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-lacework.policy.PolicyConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The policy type must be 'Violation'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/policy#type Policy#type}

---

##### `alerting`<sup>Optional</sup> <a name="alerting" id="rhizo-co-terraform-provider-lacework.policy.PolicyConfig.property.alerting"></a>

```python
alerting: PolicyAlerting
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.policy.PolicyAlerting">PolicyAlerting</a>

alerting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/policy#alerting Policy#alerting}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.policy.PolicyConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

The state of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/policy#enabled Policy#enabled}

---

##### `evaluation`<sup>Optional</sup> <a name="evaluation" id="rhizo-co-terraform-provider-lacework.policy.PolicyConfig.property.evaluation"></a>

```python
evaluation: str
```

- *Type:* str

The evaluation frequency must be either 'Hourly' or 'Daily'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/policy#evaluation Policy#evaluation}

---

##### `limit`<sup>Optional</sup> <a name="limit" id="rhizo-co-terraform-provider-lacework.policy.PolicyConfig.property.limit"></a>

```python
limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Set the number of records returned by the policy. Maximum value is 5000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/policy#limit Policy#limit}

---

##### `policy_id_suffix`<sup>Optional</sup> <a name="policy_id_suffix" id="rhizo-co-terraform-provider-lacework.policy.PolicyConfig.property.policyIdSuffix"></a>

```python
policy_id_suffix: str
```

- *Type:* str

The string appended to the end of the policy id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/policy#policy_id_suffix Policy#policy_id_suffix}

---

##### `remediation`<sup>Optional</sup> <a name="remediation" id="rhizo-co-terraform-provider-lacework.policy.PolicyConfig.property.remediation"></a>

```python
remediation: str
```

- *Type:* str

The remediation message to display.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/policy#remediation Policy#remediation}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="rhizo-co-terraform-provider-lacework.policy.PolicyConfig.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

A list of user specified policy tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/policy#tags Policy#tags}

---

## Classes <a name="Classes" id="Classes"></a>

### PolicyAlertingOutputReference <a name="PolicyAlertingOutputReference" id="rhizo-co-terraform-provider-lacework.policy.PolicyAlertingOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.policy.PolicyAlertingOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_lacework import policy

policy.PolicyAlertingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.PolicyAlertingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.PolicyAlertingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-lacework.policy.PolicyAlertingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.policy.PolicyAlertingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.PolicyAlertingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.PolicyAlertingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.PolicyAlertingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.PolicyAlertingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.PolicyAlertingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.PolicyAlertingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.PolicyAlertingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.PolicyAlertingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.PolicyAlertingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.PolicyAlertingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.PolicyAlertingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.PolicyAlertingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.PolicyAlertingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.PolicyAlertingOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-lacework.policy.PolicyAlertingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-lacework.policy.PolicyAlertingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.policy.PolicyAlertingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-lacework.policy.PolicyAlertingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.policy.PolicyAlertingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-lacework.policy.PolicyAlertingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.policy.PolicyAlertingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-lacework.policy.PolicyAlertingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.policy.PolicyAlertingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-lacework.policy.PolicyAlertingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.policy.PolicyAlertingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-lacework.policy.PolicyAlertingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.policy.PolicyAlertingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-lacework.policy.PolicyAlertingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.policy.PolicyAlertingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-lacework.policy.PolicyAlertingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.policy.PolicyAlertingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-lacework.policy.PolicyAlertingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.policy.PolicyAlertingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-lacework.policy.PolicyAlertingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-lacework.policy.PolicyAlertingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-lacework.policy.PolicyAlertingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-lacework.policy.PolicyAlertingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-lacework.policy.PolicyAlertingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="rhizo-co-terraform-provider-lacework.policy.PolicyAlertingOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.PolicyAlertingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.PolicyAlertingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.PolicyAlertingOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.PolicyAlertingOutputReference.property.profileInput">profile_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.PolicyAlertingOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.PolicyAlertingOutputReference.property.profile">profile</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policy.PolicyAlertingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.policy.PolicyAlerting">PolicyAlerting</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-lacework.policy.PolicyAlertingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.policy.PolicyAlertingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="rhizo-co-terraform-provider-lacework.policy.PolicyAlertingOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `profile_input`<sup>Optional</sup> <a name="profile_input" id="rhizo-co-terraform-provider-lacework.policy.PolicyAlertingOutputReference.property.profileInput"></a>

```python
profile_input: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.policy.PolicyAlertingOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `profile`<sup>Required</sup> <a name="profile" id="rhizo-co-terraform-provider-lacework.policy.PolicyAlertingOutputReference.property.profile"></a>

```python
profile: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-lacework.policy.PolicyAlertingOutputReference.property.internalValue"></a>

```python
internal_value: PolicyAlerting
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.policy.PolicyAlerting">PolicyAlerting</a>

---



