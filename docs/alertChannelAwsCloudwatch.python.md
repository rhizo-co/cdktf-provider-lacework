# `lacework_alert_channel_aws_cloudwatch`

Refer to the Terraform Registory for docs: [`lacework_alert_channel_aws_cloudwatch`](https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_aws_cloudwatch).

# `alertChannelAwsCloudwatch` Submodule <a name="`alertChannelAwsCloudwatch` Submodule" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AlertChannelAwsCloudwatch <a name="AlertChannelAwsCloudwatch" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch"></a>

Represents a {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_aws_cloudwatch lacework_alert_channel_aws_cloudwatch}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.Initializer"></a>

```python
from rhizo-co_cdktf_provider_lacework import alert_channel_aws_cloudwatch

alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  event_bus_arn: str,
  name: str,
  enabled: typing.Union[bool, IResolvable] = None,
  group_issues_by: str = None,
  id: str = None,
  test_integration: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.Initializer.parameter.eventBusArn">event_bus_arn</a></code> | <code>str</code> | The ARN of your AWS CloudWatch event bus. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.Initializer.parameter.name">name</a></code> | <code>str</code> | The integration name. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | The state of the external integration. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.Initializer.parameter.groupIssuesBy">group_issues_by</a></code> | <code>str</code> | Defines how Lacework compliance events get grouped. Must be one of Events or Resources. Defaults to Events. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_aws_cloudwatch#id AlertChannelAwsCloudwatch#id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.Initializer.parameter.testIntegration">test_integration</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to test the integration of an alert channel upon creation and modification. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `event_bus_arn`<sup>Required</sup> <a name="event_bus_arn" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.Initializer.parameter.eventBusArn"></a>

- *Type:* str

The ARN of your AWS CloudWatch event bus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_aws_cloudwatch#event_bus_arn AlertChannelAwsCloudwatch#event_bus_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.Initializer.parameter.name"></a>

- *Type:* str

The integration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_aws_cloudwatch#name AlertChannelAwsCloudwatch#name}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

The state of the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_aws_cloudwatch#enabled AlertChannelAwsCloudwatch#enabled}

---

##### `group_issues_by`<sup>Optional</sup> <a name="group_issues_by" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.Initializer.parameter.groupIssuesBy"></a>

- *Type:* str

Defines how Lacework compliance events get grouped. Must be one of Events or Resources. Defaults to Events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_aws_cloudwatch#group_issues_by AlertChannelAwsCloudwatch#group_issues_by}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_aws_cloudwatch#id AlertChannelAwsCloudwatch#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `test_integration`<sup>Optional</sup> <a name="test_integration" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.Initializer.parameter.testIntegration"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to test the integration of an alert channel upon creation and modification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_aws_cloudwatch#test_integration AlertChannelAwsCloudwatch#test_integration}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.resetGroupIssuesBy">reset_group_issues_by</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.resetTestIntegration">reset_test_integration</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_enabled` <a name="reset_enabled" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_group_issues_by` <a name="reset_group_issues_by" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.resetGroupIssuesBy"></a>

```python
def reset_group_issues_by() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_test_integration` <a name="reset_test_integration" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.resetTestIntegration"></a>

```python
def reset_test_integration() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_lacework import alert_channel_aws_cloudwatch

alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_lacework import alert_channel_aws_cloudwatch

alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_lacework import alert_channel_aws_cloudwatch

alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.createdOrUpdatedBy">created_or_updated_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.createdOrUpdatedTime">created_or_updated_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.intgGuid">intg_guid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.orgLevel">org_level</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.typeName">type_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.eventBusArnInput">event_bus_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.groupIssuesByInput">group_issues_by_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.testIntegrationInput">test_integration_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.eventBusArn">event_bus_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.groupIssuesBy">group_issues_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.testIntegration">test_integration</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `created_or_updated_by`<sup>Required</sup> <a name="created_or_updated_by" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.createdOrUpdatedBy"></a>

```python
created_or_updated_by: str
```

- *Type:* str

---

##### `created_or_updated_time`<sup>Required</sup> <a name="created_or_updated_time" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.createdOrUpdatedTime"></a>

```python
created_or_updated_time: str
```

- *Type:* str

---

##### `intg_guid`<sup>Required</sup> <a name="intg_guid" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.intgGuid"></a>

```python
intg_guid: str
```

- *Type:* str

---

##### `org_level`<sup>Required</sup> <a name="org_level" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.orgLevel"></a>

```python
org_level: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `type_name`<sup>Required</sup> <a name="type_name" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.typeName"></a>

```python
type_name: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `event_bus_arn_input`<sup>Optional</sup> <a name="event_bus_arn_input" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.eventBusArnInput"></a>

```python
event_bus_arn_input: str
```

- *Type:* str

---

##### `group_issues_by_input`<sup>Optional</sup> <a name="group_issues_by_input" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.groupIssuesByInput"></a>

```python
group_issues_by_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `test_integration_input`<sup>Optional</sup> <a name="test_integration_input" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.testIntegrationInput"></a>

```python
test_integration_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `event_bus_arn`<sup>Required</sup> <a name="event_bus_arn" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.eventBusArn"></a>

```python
event_bus_arn: str
```

- *Type:* str

---

##### `group_issues_by`<sup>Required</sup> <a name="group_issues_by" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.groupIssuesBy"></a>

```python
group_issues_by: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `test_integration`<sup>Required</sup> <a name="test_integration" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.testIntegration"></a>

```python
test_integration: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AlertChannelAwsCloudwatchConfig <a name="AlertChannelAwsCloudwatchConfig" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatchConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatchConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_lacework import alert_channel_aws_cloudwatch

alertChannelAwsCloudwatch.AlertChannelAwsCloudwatchConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  event_bus_arn: str,
  name: str,
  enabled: typing.Union[bool, IResolvable] = None,
  group_issues_by: str = None,
  id: str = None,
  test_integration: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatchConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatchConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatchConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatchConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatchConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatchConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatchConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatchConfig.property.eventBusArn">event_bus_arn</a></code> | <code>str</code> | The ARN of your AWS CloudWatch event bus. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatchConfig.property.name">name</a></code> | <code>str</code> | The integration name. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatchConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | The state of the external integration. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatchConfig.property.groupIssuesBy">group_issues_by</a></code> | <code>str</code> | Defines how Lacework compliance events get grouped. Must be one of Events or Resources. Defaults to Events. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatchConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_aws_cloudwatch#id AlertChannelAwsCloudwatch#id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatchConfig.property.testIntegration">test_integration</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to test the integration of an alert channel upon creation and modification. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatchConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatchConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatchConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatchConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatchConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatchConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatchConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `event_bus_arn`<sup>Required</sup> <a name="event_bus_arn" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatchConfig.property.eventBusArn"></a>

```python
event_bus_arn: str
```

- *Type:* str

The ARN of your AWS CloudWatch event bus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_aws_cloudwatch#event_bus_arn AlertChannelAwsCloudwatch#event_bus_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatchConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The integration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_aws_cloudwatch#name AlertChannelAwsCloudwatch#name}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatchConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

The state of the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_aws_cloudwatch#enabled AlertChannelAwsCloudwatch#enabled}

---

##### `group_issues_by`<sup>Optional</sup> <a name="group_issues_by" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatchConfig.property.groupIssuesBy"></a>

```python
group_issues_by: str
```

- *Type:* str

Defines how Lacework compliance events get grouped. Must be one of Events or Resources. Defaults to Events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_aws_cloudwatch#group_issues_by AlertChannelAwsCloudwatch#group_issues_by}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatchConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_aws_cloudwatch#id AlertChannelAwsCloudwatch#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `test_integration`<sup>Optional</sup> <a name="test_integration" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatchConfig.property.testIntegration"></a>

```python
test_integration: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to test the integration of an alert channel upon creation and modification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_aws_cloudwatch#test_integration AlertChannelAwsCloudwatch#test_integration}

---



