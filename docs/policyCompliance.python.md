# `lacework_policy_compliance`

Refer to the Terraform Registory for docs: [`lacework_policy_compliance`](https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/policy_compliance).

# `policyCompliance` Submodule <a name="`policyCompliance` Submodule" id="rhizo-co-terraform-provider-lacework.policyCompliance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PolicyCompliance <a name="PolicyCompliance" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance"></a>

Represents a {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/policy_compliance lacework_policy_compliance}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.Initializer"></a>

```python
from rhizo-co_cdktf_provider_lacework import policy_compliance

policyCompliance.PolicyCompliance(
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
  alerting_enabled: typing.Union[bool, IResolvable] = None,
  enabled: typing.Union[bool, IResolvable] = None,
  policy_id_suffix: str = None,
  remediation: str = None,
  tags: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the query. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.Initializer.parameter.queryId">query_id</a></code> | <code>str</code> | The id of the query. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.Initializer.parameter.severity">severity</a></code> | <code>str</code> | The severity for the policy. Valid severities are: Critical, High, Medium, Low, Info. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.Initializer.parameter.title">title</a></code> | <code>str</code> | The title of the policy. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.Initializer.parameter.alertingEnabled">alerting_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether alerting is enabled or disabled. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | The state of the policy. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.Initializer.parameter.policyIdSuffix">policy_id_suffix</a></code> | <code>str</code> | The string appended to the end of the policy id. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.Initializer.parameter.remediation">remediation</a></code> | <code>str</code> | The remediation message to display. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.Initializer.parameter.tags">tags</a></code> | <code>typing.List[str]</code> | A list of user specified policy tags. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.Initializer.parameter.description"></a>

- *Type:* str

The description of the query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/policy_compliance#description PolicyCompliance#description}

---

##### `query_id`<sup>Required</sup> <a name="query_id" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.Initializer.parameter.queryId"></a>

- *Type:* str

The id of the query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/policy_compliance#query_id PolicyCompliance#query_id}

---

##### `severity`<sup>Required</sup> <a name="severity" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.Initializer.parameter.severity"></a>

- *Type:* str

The severity for the policy. Valid severities are: Critical, High, Medium, Low, Info.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/policy_compliance#severity PolicyCompliance#severity}

---

##### `title`<sup>Required</sup> <a name="title" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.Initializer.parameter.title"></a>

- *Type:* str

The title of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/policy_compliance#title PolicyCompliance#title}

---

##### `alerting_enabled`<sup>Optional</sup> <a name="alerting_enabled" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.Initializer.parameter.alertingEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether alerting is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/policy_compliance#alerting_enabled PolicyCompliance#alerting_enabled}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

The state of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/policy_compliance#enabled PolicyCompliance#enabled}

---

##### `policy_id_suffix`<sup>Optional</sup> <a name="policy_id_suffix" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.Initializer.parameter.policyIdSuffix"></a>

- *Type:* str

The string appended to the end of the policy id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/policy_compliance#policy_id_suffix PolicyCompliance#policy_id_suffix}

---

##### `remediation`<sup>Optional</sup> <a name="remediation" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.Initializer.parameter.remediation"></a>

- *Type:* str

The remediation message to display.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/policy_compliance#remediation PolicyCompliance#remediation}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.Initializer.parameter.tags"></a>

- *Type:* typing.List[str]

A list of user specified policy tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/policy_compliance#tags PolicyCompliance#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.resetAlertingEnabled">reset_alerting_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.resetPolicyIdSuffix">reset_policy_id_suffix</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.resetRemediation">reset_remediation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_alerting_enabled` <a name="reset_alerting_enabled" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.resetAlertingEnabled"></a>

```python
def reset_alerting_enabled() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_policy_id_suffix` <a name="reset_policy_id_suffix" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.resetPolicyIdSuffix"></a>

```python
def reset_policy_id_suffix() -> None
```

##### `reset_remediation` <a name="reset_remediation" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.resetRemediation"></a>

```python
def reset_remediation() -> None
```

##### `reset_tags` <a name="reset_tags" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_lacework import policy_compliance

policyCompliance.PolicyCompliance.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_lacework import policy_compliance

policyCompliance.PolicyCompliance.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_lacework import policy_compliance

policyCompliance.PolicyCompliance.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.computedTags">computed_tags</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.updatedBy">updated_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.updatedTime">updated_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.alertingEnabledInput">alerting_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.policyIdSuffixInput">policy_id_suffix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.queryIdInput">query_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.remediationInput">remediation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.severityInput">severity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.alertingEnabled">alerting_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.policyIdSuffix">policy_id_suffix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.queryId">query_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.remediation">remediation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.severity">severity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.title">title</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `computed_tags`<sup>Required</sup> <a name="computed_tags" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.computedTags"></a>

```python
computed_tags: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `updated_by`<sup>Required</sup> <a name="updated_by" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.updatedBy"></a>

```python
updated_by: str
```

- *Type:* str

---

##### `updated_time`<sup>Required</sup> <a name="updated_time" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.updatedTime"></a>

```python
updated_time: str
```

- *Type:* str

---

##### `alerting_enabled_input`<sup>Optional</sup> <a name="alerting_enabled_input" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.alertingEnabledInput"></a>

```python
alerting_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `policy_id_suffix_input`<sup>Optional</sup> <a name="policy_id_suffix_input" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.policyIdSuffixInput"></a>

```python
policy_id_suffix_input: str
```

- *Type:* str

---

##### `query_id_input`<sup>Optional</sup> <a name="query_id_input" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.queryIdInput"></a>

```python
query_id_input: str
```

- *Type:* str

---

##### `remediation_input`<sup>Optional</sup> <a name="remediation_input" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.remediationInput"></a>

```python
remediation_input: str
```

- *Type:* str

---

##### `severity_input`<sup>Optional</sup> <a name="severity_input" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.severityInput"></a>

```python
severity_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `alerting_enabled`<sup>Required</sup> <a name="alerting_enabled" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.alertingEnabled"></a>

```python
alerting_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `policy_id_suffix`<sup>Required</sup> <a name="policy_id_suffix" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.policyIdSuffix"></a>

```python
policy_id_suffix: str
```

- *Type:* str

---

##### `query_id`<sup>Required</sup> <a name="query_id" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.queryId"></a>

```python
query_id: str
```

- *Type:* str

---

##### `remediation`<sup>Required</sup> <a name="remediation" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.remediation"></a>

```python
remediation: str
```

- *Type:* str

---

##### `severity`<sup>Required</sup> <a name="severity" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.severity"></a>

```python
severity: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `title`<sup>Required</sup> <a name="title" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.title"></a>

```python
title: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyCompliance.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PolicyComplianceConfig <a name="PolicyComplianceConfig" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_lacework import policy_compliance

policyCompliance.PolicyComplianceConfig(
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
  alerting_enabled: typing.Union[bool, IResolvable] = None,
  enabled: typing.Union[bool, IResolvable] = None,
  policy_id_suffix: str = None,
  remediation: str = None,
  tags: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.description">description</a></code> | <code>str</code> | The description of the query. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.queryId">query_id</a></code> | <code>str</code> | The id of the query. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.severity">severity</a></code> | <code>str</code> | The severity for the policy. Valid severities are: Critical, High, Medium, Low, Info. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.title">title</a></code> | <code>str</code> | The title of the policy. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.alertingEnabled">alerting_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether alerting is enabled or disabled. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | The state of the policy. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.policyIdSuffix">policy_id_suffix</a></code> | <code>str</code> | The string appended to the end of the policy id. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.remediation">remediation</a></code> | <code>str</code> | The remediation message to display. |
| <code><a href="#rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.tags">tags</a></code> | <code>typing.List[str]</code> | A list of user specified policy tags. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/policy_compliance#description PolicyCompliance#description}

---

##### `query_id`<sup>Required</sup> <a name="query_id" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.queryId"></a>

```python
query_id: str
```

- *Type:* str

The id of the query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/policy_compliance#query_id PolicyCompliance#query_id}

---

##### `severity`<sup>Required</sup> <a name="severity" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.severity"></a>

```python
severity: str
```

- *Type:* str

The severity for the policy. Valid severities are: Critical, High, Medium, Low, Info.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/policy_compliance#severity PolicyCompliance#severity}

---

##### `title`<sup>Required</sup> <a name="title" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.title"></a>

```python
title: str
```

- *Type:* str

The title of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/policy_compliance#title PolicyCompliance#title}

---

##### `alerting_enabled`<sup>Optional</sup> <a name="alerting_enabled" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.alertingEnabled"></a>

```python
alerting_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether alerting is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/policy_compliance#alerting_enabled PolicyCompliance#alerting_enabled}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

The state of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/policy_compliance#enabled PolicyCompliance#enabled}

---

##### `policy_id_suffix`<sup>Optional</sup> <a name="policy_id_suffix" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.policyIdSuffix"></a>

```python
policy_id_suffix: str
```

- *Type:* str

The string appended to the end of the policy id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/policy_compliance#policy_id_suffix PolicyCompliance#policy_id_suffix}

---

##### `remediation`<sup>Optional</sup> <a name="remediation" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.remediation"></a>

```python
remediation: str
```

- *Type:* str

The remediation message to display.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/policy_compliance#remediation PolicyCompliance#remediation}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="rhizo-co-terraform-provider-lacework.policyCompliance.PolicyComplianceConfig.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

A list of user specified policy tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/policy_compliance#tags PolicyCompliance#tags}

---



