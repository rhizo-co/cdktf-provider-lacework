# `lacework_alert_channel_service_now`

Refer to the Terraform Registory for docs: [`lacework_alert_channel_service_now`](https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_service_now).

# `alertChannelServiceNow` Submodule <a name="`alertChannelServiceNow` Submodule" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AlertChannelServiceNow <a name="AlertChannelServiceNow" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow"></a>

Represents a {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_service_now lacework_alert_channel_service_now}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.Initializer"></a>

```python
from rhizo-co_cdktf_provider_lacework import alert_channel_service_now

alertChannelServiceNow.AlertChannelServiceNow(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  instance_url: str,
  name: str,
  password: str,
  username: str,
  custom_template_file: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  issue_grouping: str = None,
  test_integration: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.Initializer.parameter.instanceUrl">instance_url</a></code> | <code>str</code> | The ServiceNow instance URL. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.Initializer.parameter.name">name</a></code> | <code>str</code> | The integration name. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.Initializer.parameter.password">password</a></code> | <code>str</code> | The ServiceNow password. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.Initializer.parameter.username">username</a></code> | <code>str</code> | The ServiceNow username. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.Initializer.parameter.customTemplateFile">custom_template_file</a></code> | <code>str</code> | Populate fields in the ServiceNow incident with values from a custom template JSON file. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | The state of the external integration. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_service_now#id AlertChannelServiceNow#id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.Initializer.parameter.issueGrouping">issue_grouping</a></code> | <code>str</code> | Defines how Lacework compliance events get grouped. Must be one of Events or Resources. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.Initializer.parameter.testIntegration">test_integration</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to test the integration of an alert channel upon creation and modification. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `instance_url`<sup>Required</sup> <a name="instance_url" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.Initializer.parameter.instanceUrl"></a>

- *Type:* str

The ServiceNow instance URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_service_now#instance_url AlertChannelServiceNow#instance_url}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.Initializer.parameter.name"></a>

- *Type:* str

The integration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_service_now#name AlertChannelServiceNow#name}

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.Initializer.parameter.password"></a>

- *Type:* str

The ServiceNow password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_service_now#password AlertChannelServiceNow#password}

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.Initializer.parameter.username"></a>

- *Type:* str

The ServiceNow username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_service_now#username AlertChannelServiceNow#username}

---

##### `custom_template_file`<sup>Optional</sup> <a name="custom_template_file" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.Initializer.parameter.customTemplateFile"></a>

- *Type:* str

Populate fields in the ServiceNow incident with values from a custom template JSON file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_service_now#custom_template_file AlertChannelServiceNow#custom_template_file}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

The state of the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_service_now#enabled AlertChannelServiceNow#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_service_now#id AlertChannelServiceNow#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `issue_grouping`<sup>Optional</sup> <a name="issue_grouping" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.Initializer.parameter.issueGrouping"></a>

- *Type:* str

Defines how Lacework compliance events get grouped. Must be one of Events or Resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_service_now#issue_grouping AlertChannelServiceNow#issue_grouping}

---

##### `test_integration`<sup>Optional</sup> <a name="test_integration" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.Initializer.parameter.testIntegration"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to test the integration of an alert channel upon creation and modification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_service_now#test_integration AlertChannelServiceNow#test_integration}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.resetCustomTemplateFile">reset_custom_template_file</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.resetIssueGrouping">reset_issue_grouping</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.resetTestIntegration">reset_test_integration</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_custom_template_file` <a name="reset_custom_template_file" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.resetCustomTemplateFile"></a>

```python
def reset_custom_template_file() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_issue_grouping` <a name="reset_issue_grouping" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.resetIssueGrouping"></a>

```python
def reset_issue_grouping() -> None
```

##### `reset_test_integration` <a name="reset_test_integration" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.resetTestIntegration"></a>

```python
def reset_test_integration() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_lacework import alert_channel_service_now

alertChannelServiceNow.AlertChannelServiceNow.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_lacework import alert_channel_service_now

alertChannelServiceNow.AlertChannelServiceNow.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_lacework import alert_channel_service_now

alertChannelServiceNow.AlertChannelServiceNow.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.property.createdOrUpdatedBy">created_or_updated_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.property.createdOrUpdatedTime">created_or_updated_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.property.intgGuid">intg_guid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.property.orgLevel">org_level</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.property.typeName">type_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.property.customTemplateFileInput">custom_template_file_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.property.instanceUrlInput">instance_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.property.issueGroupingInput">issue_grouping_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.property.testIntegrationInput">test_integration_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.property.customTemplateFile">custom_template_file</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.property.instanceUrl">instance_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.property.issueGrouping">issue_grouping</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.property.testIntegration">test_integration</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.property.username">username</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `created_or_updated_by`<sup>Required</sup> <a name="created_or_updated_by" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.property.createdOrUpdatedBy"></a>

```python
created_or_updated_by: str
```

- *Type:* str

---

##### `created_or_updated_time`<sup>Required</sup> <a name="created_or_updated_time" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.property.createdOrUpdatedTime"></a>

```python
created_or_updated_time: str
```

- *Type:* str

---

##### `intg_guid`<sup>Required</sup> <a name="intg_guid" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.property.intgGuid"></a>

```python
intg_guid: str
```

- *Type:* str

---

##### `org_level`<sup>Required</sup> <a name="org_level" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.property.orgLevel"></a>

```python
org_level: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `type_name`<sup>Required</sup> <a name="type_name" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.property.typeName"></a>

```python
type_name: str
```

- *Type:* str

---

##### `custom_template_file_input`<sup>Optional</sup> <a name="custom_template_file_input" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.property.customTemplateFileInput"></a>

```python
custom_template_file_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_url_input`<sup>Optional</sup> <a name="instance_url_input" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.property.instanceUrlInput"></a>

```python
instance_url_input: str
```

- *Type:* str

---

##### `issue_grouping_input`<sup>Optional</sup> <a name="issue_grouping_input" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.property.issueGroupingInput"></a>

```python
issue_grouping_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `test_integration_input`<sup>Optional</sup> <a name="test_integration_input" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.property.testIntegrationInput"></a>

```python
test_integration_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `custom_template_file`<sup>Required</sup> <a name="custom_template_file" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.property.customTemplateFile"></a>

```python
custom_template_file: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_url`<sup>Required</sup> <a name="instance_url" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.property.instanceUrl"></a>

```python
instance_url: str
```

- *Type:* str

---

##### `issue_grouping`<sup>Required</sup> <a name="issue_grouping" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.property.issueGrouping"></a>

```python
issue_grouping: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `test_integration`<sup>Required</sup> <a name="test_integration" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.property.testIntegration"></a>

```python
test_integration: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.property.username"></a>

```python
username: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNow.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AlertChannelServiceNowConfig <a name="AlertChannelServiceNowConfig" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNowConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNowConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_lacework import alert_channel_service_now

alertChannelServiceNow.AlertChannelServiceNowConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  instance_url: str,
  name: str,
  password: str,
  username: str,
  custom_template_file: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  issue_grouping: str = None,
  test_integration: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNowConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNowConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNowConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNowConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNowConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNowConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNowConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNowConfig.property.instanceUrl">instance_url</a></code> | <code>str</code> | The ServiceNow instance URL. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNowConfig.property.name">name</a></code> | <code>str</code> | The integration name. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNowConfig.property.password">password</a></code> | <code>str</code> | The ServiceNow password. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNowConfig.property.username">username</a></code> | <code>str</code> | The ServiceNow username. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNowConfig.property.customTemplateFile">custom_template_file</a></code> | <code>str</code> | Populate fields in the ServiceNow incident with values from a custom template JSON file. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNowConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | The state of the external integration. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNowConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_service_now#id AlertChannelServiceNow#id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNowConfig.property.issueGrouping">issue_grouping</a></code> | <code>str</code> | Defines how Lacework compliance events get grouped. Must be one of Events or Resources. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNowConfig.property.testIntegration">test_integration</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to test the integration of an alert channel upon creation and modification. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNowConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNowConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNowConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNowConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNowConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNowConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNowConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `instance_url`<sup>Required</sup> <a name="instance_url" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNowConfig.property.instanceUrl"></a>

```python
instance_url: str
```

- *Type:* str

The ServiceNow instance URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_service_now#instance_url AlertChannelServiceNow#instance_url}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNowConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The integration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_service_now#name AlertChannelServiceNow#name}

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNowConfig.property.password"></a>

```python
password: str
```

- *Type:* str

The ServiceNow password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_service_now#password AlertChannelServiceNow#password}

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNowConfig.property.username"></a>

```python
username: str
```

- *Type:* str

The ServiceNow username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_service_now#username AlertChannelServiceNow#username}

---

##### `custom_template_file`<sup>Optional</sup> <a name="custom_template_file" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNowConfig.property.customTemplateFile"></a>

```python
custom_template_file: str
```

- *Type:* str

Populate fields in the ServiceNow incident with values from a custom template JSON file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_service_now#custom_template_file AlertChannelServiceNow#custom_template_file}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNowConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

The state of the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_service_now#enabled AlertChannelServiceNow#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNowConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_service_now#id AlertChannelServiceNow#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `issue_grouping`<sup>Optional</sup> <a name="issue_grouping" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNowConfig.property.issueGrouping"></a>

```python
issue_grouping: str
```

- *Type:* str

Defines how Lacework compliance events get grouped. Must be one of Events or Resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_service_now#issue_grouping AlertChannelServiceNow#issue_grouping}

---

##### `test_integration`<sup>Optional</sup> <a name="test_integration" id="rhizo-co-terraform-provider-lacework.alertChannelServiceNow.AlertChannelServiceNowConfig.property.testIntegration"></a>

```python
test_integration: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to test the integration of an alert channel upon creation and modification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_service_now#test_integration AlertChannelServiceNow#test_integration}

---



