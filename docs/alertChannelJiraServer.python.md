# `lacework_alert_channel_jira_server`

Refer to the Terraform Registory for docs: [`lacework_alert_channel_jira_server`](https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_jira_server).

# `alertChannelJiraServer` Submodule <a name="`alertChannelJiraServer` Submodule" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AlertChannelJiraServer <a name="AlertChannelJiraServer" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer"></a>

Represents a {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_jira_server lacework_alert_channel_jira_server}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.Initializer"></a>

```python
from rhizo-co_cdktf_provider_lacework import alert_channel_jira_server

alertChannelJiraServer.AlertChannelJiraServer(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  issue_type: str,
  jira_url: str,
  name: str,
  password: str,
  project_key: str,
  username: str,
  configuration: str = None,
  custom_template_file: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  group_issues_by: str = None,
  id: str = None,
  test_integration: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.Initializer.parameter.issueType">issue_type</a></code> | <code>str</code> | The Jira issue type (such as a Bug) to create when a new Jira issue is created. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.Initializer.parameter.jiraUrl">jira_url</a></code> | <code>str</code> | The URL of your Jira implementation without https protocol. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.Initializer.parameter.name">name</a></code> | <code>str</code> | The alert channel integration name. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.Initializer.parameter.password">password</a></code> | <code>str</code> | The password to the Jira user. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.Initializer.parameter.projectKey">project_key</a></code> | <code>str</code> | The project key for the Jira project where the new Jira issues should be created. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.Initializer.parameter.username">username</a></code> | <code>str</code> | The Jira user name. Lacework recommends a dedicated Jira user. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.Initializer.parameter.configuration">configuration</a></code> | <code>str</code> | Whether the integration is Unidirectional or Bidirectional. Defaults to Unidirectional. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.Initializer.parameter.customTemplateFile">custom_template_file</a></code> | <code>str</code> | A Custom Template JSON file to populate fields in the new Jira issues. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | The state of the external integration. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.Initializer.parameter.groupIssuesBy">group_issues_by</a></code> | <code>str</code> | Defines how Lacework compliance events get grouped. Must be one of Events or Resources. Defaults to Events. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_jira_server#id AlertChannelJiraServer#id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.Initializer.parameter.testIntegration">test_integration</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to test the integration of an alert channel upon creation and modification. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `issue_type`<sup>Required</sup> <a name="issue_type" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.Initializer.parameter.issueType"></a>

- *Type:* str

The Jira issue type (such as a Bug) to create when a new Jira issue is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_jira_server#issue_type AlertChannelJiraServer#issue_type}

---

##### `jira_url`<sup>Required</sup> <a name="jira_url" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.Initializer.parameter.jiraUrl"></a>

- *Type:* str

The URL of your Jira implementation without https protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_jira_server#jira_url AlertChannelJiraServer#jira_url}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.Initializer.parameter.name"></a>

- *Type:* str

The alert channel integration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_jira_server#name AlertChannelJiraServer#name}

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.Initializer.parameter.password"></a>

- *Type:* str

The password to the Jira user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_jira_server#password AlertChannelJiraServer#password}

---

##### `project_key`<sup>Required</sup> <a name="project_key" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.Initializer.parameter.projectKey"></a>

- *Type:* str

The project key for the Jira project where the new Jira issues should be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_jira_server#project_key AlertChannelJiraServer#project_key}

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.Initializer.parameter.username"></a>

- *Type:* str

The Jira user name. Lacework recommends a dedicated Jira user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_jira_server#username AlertChannelJiraServer#username}

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.Initializer.parameter.configuration"></a>

- *Type:* str

Whether the integration is Unidirectional or Bidirectional. Defaults to Unidirectional.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_jira_server#configuration AlertChannelJiraServer#configuration}

---

##### `custom_template_file`<sup>Optional</sup> <a name="custom_template_file" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.Initializer.parameter.customTemplateFile"></a>

- *Type:* str

A Custom Template JSON file to populate fields in the new Jira issues.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_jira_server#custom_template_file AlertChannelJiraServer#custom_template_file}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

The state of the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_jira_server#enabled AlertChannelJiraServer#enabled}

---

##### `group_issues_by`<sup>Optional</sup> <a name="group_issues_by" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.Initializer.parameter.groupIssuesBy"></a>

- *Type:* str

Defines how Lacework compliance events get grouped. Must be one of Events or Resources. Defaults to Events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_jira_server#group_issues_by AlertChannelJiraServer#group_issues_by}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_jira_server#id AlertChannelJiraServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `test_integration`<sup>Optional</sup> <a name="test_integration" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.Initializer.parameter.testIntegration"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to test the integration of an alert channel upon creation and modification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_jira_server#test_integration AlertChannelJiraServer#test_integration}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.resetConfiguration">reset_configuration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.resetCustomTemplateFile">reset_custom_template_file</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.resetGroupIssuesBy">reset_group_issues_by</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.resetTestIntegration">reset_test_integration</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_configuration` <a name="reset_configuration" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.resetConfiguration"></a>

```python
def reset_configuration() -> None
```

##### `reset_custom_template_file` <a name="reset_custom_template_file" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.resetCustomTemplateFile"></a>

```python
def reset_custom_template_file() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_group_issues_by` <a name="reset_group_issues_by" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.resetGroupIssuesBy"></a>

```python
def reset_group_issues_by() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_test_integration` <a name="reset_test_integration" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.resetTestIntegration"></a>

```python
def reset_test_integration() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_lacework import alert_channel_jira_server

alertChannelJiraServer.AlertChannelJiraServer.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_lacework import alert_channel_jira_server

alertChannelJiraServer.AlertChannelJiraServer.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_lacework import alert_channel_jira_server

alertChannelJiraServer.AlertChannelJiraServer.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.createdOrUpdatedBy">created_or_updated_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.createdOrUpdatedTime">created_or_updated_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.intgGuid">intg_guid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.orgLevel">org_level</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.typeName">type_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.configurationInput">configuration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.customTemplateFileInput">custom_template_file_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.groupIssuesByInput">group_issues_by_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.issueTypeInput">issue_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.jiraUrlInput">jira_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.projectKeyInput">project_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.testIntegrationInput">test_integration_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.configuration">configuration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.customTemplateFile">custom_template_file</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.groupIssuesBy">group_issues_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.issueType">issue_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.jiraUrl">jira_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.projectKey">project_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.testIntegration">test_integration</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.username">username</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `created_or_updated_by`<sup>Required</sup> <a name="created_or_updated_by" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.createdOrUpdatedBy"></a>

```python
created_or_updated_by: str
```

- *Type:* str

---

##### `created_or_updated_time`<sup>Required</sup> <a name="created_or_updated_time" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.createdOrUpdatedTime"></a>

```python
created_or_updated_time: str
```

- *Type:* str

---

##### `intg_guid`<sup>Required</sup> <a name="intg_guid" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.intgGuid"></a>

```python
intg_guid: str
```

- *Type:* str

---

##### `org_level`<sup>Required</sup> <a name="org_level" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.orgLevel"></a>

```python
org_level: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `type_name`<sup>Required</sup> <a name="type_name" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.typeName"></a>

```python
type_name: str
```

- *Type:* str

---

##### `configuration_input`<sup>Optional</sup> <a name="configuration_input" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.configurationInput"></a>

```python
configuration_input: str
```

- *Type:* str

---

##### `custom_template_file_input`<sup>Optional</sup> <a name="custom_template_file_input" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.customTemplateFileInput"></a>

```python
custom_template_file_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `group_issues_by_input`<sup>Optional</sup> <a name="group_issues_by_input" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.groupIssuesByInput"></a>

```python
group_issues_by_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `issue_type_input`<sup>Optional</sup> <a name="issue_type_input" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.issueTypeInput"></a>

```python
issue_type_input: str
```

- *Type:* str

---

##### `jira_url_input`<sup>Optional</sup> <a name="jira_url_input" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.jiraUrlInput"></a>

```python
jira_url_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `project_key_input`<sup>Optional</sup> <a name="project_key_input" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.projectKeyInput"></a>

```python
project_key_input: str
```

- *Type:* str

---

##### `test_integration_input`<sup>Optional</sup> <a name="test_integration_input" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.testIntegrationInput"></a>

```python
test_integration_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.configuration"></a>

```python
configuration: str
```

- *Type:* str

---

##### `custom_template_file`<sup>Required</sup> <a name="custom_template_file" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.customTemplateFile"></a>

```python
custom_template_file: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `group_issues_by`<sup>Required</sup> <a name="group_issues_by" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.groupIssuesBy"></a>

```python
group_issues_by: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `issue_type`<sup>Required</sup> <a name="issue_type" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.issueType"></a>

```python
issue_type: str
```

- *Type:* str

---

##### `jira_url`<sup>Required</sup> <a name="jira_url" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.jiraUrl"></a>

```python
jira_url: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `project_key`<sup>Required</sup> <a name="project_key" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.projectKey"></a>

```python
project_key: str
```

- *Type:* str

---

##### `test_integration`<sup>Required</sup> <a name="test_integration" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.testIntegration"></a>

```python
test_integration: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.username"></a>

```python
username: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AlertChannelJiraServerConfig <a name="AlertChannelJiraServerConfig" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_lacework import alert_channel_jira_server

alertChannelJiraServer.AlertChannelJiraServerConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  issue_type: str,
  jira_url: str,
  name: str,
  password: str,
  project_key: str,
  username: str,
  configuration: str = None,
  custom_template_file: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  group_issues_by: str = None,
  id: str = None,
  test_integration: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.issueType">issue_type</a></code> | <code>str</code> | The Jira issue type (such as a Bug) to create when a new Jira issue is created. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.jiraUrl">jira_url</a></code> | <code>str</code> | The URL of your Jira implementation without https protocol. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.name">name</a></code> | <code>str</code> | The alert channel integration name. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.password">password</a></code> | <code>str</code> | The password to the Jira user. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.projectKey">project_key</a></code> | <code>str</code> | The project key for the Jira project where the new Jira issues should be created. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.username">username</a></code> | <code>str</code> | The Jira user name. Lacework recommends a dedicated Jira user. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.configuration">configuration</a></code> | <code>str</code> | Whether the integration is Unidirectional or Bidirectional. Defaults to Unidirectional. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.customTemplateFile">custom_template_file</a></code> | <code>str</code> | A Custom Template JSON file to populate fields in the new Jira issues. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | The state of the external integration. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.groupIssuesBy">group_issues_by</a></code> | <code>str</code> | Defines how Lacework compliance events get grouped. Must be one of Events or Resources. Defaults to Events. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_jira_server#id AlertChannelJiraServer#id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.testIntegration">test_integration</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to test the integration of an alert channel upon creation and modification. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `issue_type`<sup>Required</sup> <a name="issue_type" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.issueType"></a>

```python
issue_type: str
```

- *Type:* str

The Jira issue type (such as a Bug) to create when a new Jira issue is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_jira_server#issue_type AlertChannelJiraServer#issue_type}

---

##### `jira_url`<sup>Required</sup> <a name="jira_url" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.jiraUrl"></a>

```python
jira_url: str
```

- *Type:* str

The URL of your Jira implementation without https protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_jira_server#jira_url AlertChannelJiraServer#jira_url}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The alert channel integration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_jira_server#name AlertChannelJiraServer#name}

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.password"></a>

```python
password: str
```

- *Type:* str

The password to the Jira user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_jira_server#password AlertChannelJiraServer#password}

---

##### `project_key`<sup>Required</sup> <a name="project_key" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.projectKey"></a>

```python
project_key: str
```

- *Type:* str

The project key for the Jira project where the new Jira issues should be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_jira_server#project_key AlertChannelJiraServer#project_key}

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.username"></a>

```python
username: str
```

- *Type:* str

The Jira user name. Lacework recommends a dedicated Jira user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_jira_server#username AlertChannelJiraServer#username}

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.configuration"></a>

```python
configuration: str
```

- *Type:* str

Whether the integration is Unidirectional or Bidirectional. Defaults to Unidirectional.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_jira_server#configuration AlertChannelJiraServer#configuration}

---

##### `custom_template_file`<sup>Optional</sup> <a name="custom_template_file" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.customTemplateFile"></a>

```python
custom_template_file: str
```

- *Type:* str

A Custom Template JSON file to populate fields in the new Jira issues.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_jira_server#custom_template_file AlertChannelJiraServer#custom_template_file}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

The state of the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_jira_server#enabled AlertChannelJiraServer#enabled}

---

##### `group_issues_by`<sup>Optional</sup> <a name="group_issues_by" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.groupIssuesBy"></a>

```python
group_issues_by: str
```

- *Type:* str

Defines how Lacework compliance events get grouped. Must be one of Events or Resources. Defaults to Events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_jira_server#group_issues_by AlertChannelJiraServer#group_issues_by}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_jira_server#id AlertChannelJiraServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `test_integration`<sup>Optional</sup> <a name="test_integration" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.testIntegration"></a>

```python
test_integration: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to test the integration of an alert channel upon creation and modification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_jira_server#test_integration AlertChannelJiraServer#test_integration}

---



