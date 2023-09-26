# `lacework_alert_channel_gcp_pub_sub`

Refer to the Terraform Registory for docs: [`lacework_alert_channel_gcp_pub_sub`](https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_gcp_pub_sub).

# `alertChannelGcpPubSub` Submodule <a name="`alertChannelGcpPubSub` Submodule" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AlertChannelGcpPubSub <a name="AlertChannelGcpPubSub" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub"></a>

Represents a {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_gcp_pub_sub lacework_alert_channel_gcp_pub_sub}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.Initializer"></a>

```python
from rhizo-co_cdktf_provider_lacework import alert_channel_gcp_pub_sub

alertChannelGcpPubSub.AlertChannelGcpPubSub(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  credentials: AlertChannelGcpPubSubCredentials,
  name: str,
  project_id: str,
  topic_id: str,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  issue_grouping: str = None,
  test_integration: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.Initializer.parameter.credentials">credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentials">AlertChannelGcpPubSubCredentials</a></code> | credentials block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.Initializer.parameter.name">name</a></code> | <code>str</code> | The integration name. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | The name of the Google Cloud Project. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.Initializer.parameter.topicId">topic_id</a></code> | <code>str</code> | The ID of the Google Cloud Pub/Sub topic. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | The state of the external integration. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_gcp_pub_sub#id AlertChannelGcpPubSub#id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.Initializer.parameter.issueGrouping">issue_grouping</a></code> | <code>str</code> | Defines how Lacework compliance events get grouped. Must be one of Events or Resources. Defaults to Events. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.Initializer.parameter.testIntegration">test_integration</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to test the integration of an alert channel upon creation and modification. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.Initializer.parameter.credentials"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentials">AlertChannelGcpPubSubCredentials</a>

credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_gcp_pub_sub#credentials AlertChannelGcpPubSub#credentials}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.Initializer.parameter.name"></a>

- *Type:* str

The integration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_gcp_pub_sub#name AlertChannelGcpPubSub#name}

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.Initializer.parameter.projectId"></a>

- *Type:* str

The name of the Google Cloud Project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_gcp_pub_sub#project_id AlertChannelGcpPubSub#project_id}

---

##### `topic_id`<sup>Required</sup> <a name="topic_id" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.Initializer.parameter.topicId"></a>

- *Type:* str

The ID of the Google Cloud Pub/Sub topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_gcp_pub_sub#topic_id AlertChannelGcpPubSub#topic_id}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

The state of the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_gcp_pub_sub#enabled AlertChannelGcpPubSub#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_gcp_pub_sub#id AlertChannelGcpPubSub#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `issue_grouping`<sup>Optional</sup> <a name="issue_grouping" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.Initializer.parameter.issueGrouping"></a>

- *Type:* str

Defines how Lacework compliance events get grouped. Must be one of Events or Resources. Defaults to Events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_gcp_pub_sub#issue_grouping AlertChannelGcpPubSub#issue_grouping}

---

##### `test_integration`<sup>Optional</sup> <a name="test_integration" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.Initializer.parameter.testIntegration"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to test the integration of an alert channel upon creation and modification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_gcp_pub_sub#test_integration AlertChannelGcpPubSub#test_integration}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.putCredentials">put_credentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.resetIssueGrouping">reset_issue_grouping</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.resetTestIntegration">reset_test_integration</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_credentials` <a name="put_credentials" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.putCredentials"></a>

```python
def put_credentials(
  client_email: str,
  client_id: str,
  private_key: str,
  private_key_id: str
) -> None
```

###### `client_email`<sup>Required</sup> <a name="client_email" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.putCredentials.parameter.clientEmail"></a>

- *Type:* str

The service account client email.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_gcp_pub_sub#client_email AlertChannelGcpPubSub#client_email}

---

###### `client_id`<sup>Required</sup> <a name="client_id" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.putCredentials.parameter.clientId"></a>

- *Type:* str

The service account client ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_gcp_pub_sub#client_id AlertChannelGcpPubSub#client_id}

---

###### `private_key`<sup>Required</sup> <a name="private_key" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.putCredentials.parameter.privateKey"></a>

- *Type:* str

The service account private key ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_gcp_pub_sub#private_key AlertChannelGcpPubSub#private_key}

---

###### `private_key_id`<sup>Required</sup> <a name="private_key_id" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.putCredentials.parameter.privateKeyId"></a>

- *Type:* str

The service account private key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_gcp_pub_sub#private_key_id AlertChannelGcpPubSub#private_key_id}

---

##### `reset_enabled` <a name="reset_enabled" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_issue_grouping` <a name="reset_issue_grouping" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.resetIssueGrouping"></a>

```python
def reset_issue_grouping() -> None
```

##### `reset_test_integration` <a name="reset_test_integration" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.resetTestIntegration"></a>

```python
def reset_test_integration() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_lacework import alert_channel_gcp_pub_sub

alertChannelGcpPubSub.AlertChannelGcpPubSub.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_lacework import alert_channel_gcp_pub_sub

alertChannelGcpPubSub.AlertChannelGcpPubSub.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_lacework import alert_channel_gcp_pub_sub

alertChannelGcpPubSub.AlertChannelGcpPubSub.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.createdOrUpdatedBy">created_or_updated_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.createdOrUpdatedTime">created_or_updated_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.credentials">credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference">AlertChannelGcpPubSubCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.intgGuid">intg_guid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.orgLevel">org_level</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.typeName">type_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.credentialsInput">credentials_input</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentials">AlertChannelGcpPubSubCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.issueGroupingInput">issue_grouping_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.testIntegrationInput">test_integration_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.topicIdInput">topic_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.issueGrouping">issue_grouping</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.testIntegration">test_integration</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.topicId">topic_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `created_or_updated_by`<sup>Required</sup> <a name="created_or_updated_by" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.createdOrUpdatedBy"></a>

```python
created_or_updated_by: str
```

- *Type:* str

---

##### `created_or_updated_time`<sup>Required</sup> <a name="created_or_updated_time" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.createdOrUpdatedTime"></a>

```python
created_or_updated_time: str
```

- *Type:* str

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.credentials"></a>

```python
credentials: AlertChannelGcpPubSubCredentialsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference">AlertChannelGcpPubSubCredentialsOutputReference</a>

---

##### `intg_guid`<sup>Required</sup> <a name="intg_guid" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.intgGuid"></a>

```python
intg_guid: str
```

- *Type:* str

---

##### `org_level`<sup>Required</sup> <a name="org_level" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.orgLevel"></a>

```python
org_level: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `type_name`<sup>Required</sup> <a name="type_name" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.typeName"></a>

```python
type_name: str
```

- *Type:* str

---

##### `credentials_input`<sup>Optional</sup> <a name="credentials_input" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.credentialsInput"></a>

```python
credentials_input: AlertChannelGcpPubSubCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentials">AlertChannelGcpPubSubCredentials</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `issue_grouping_input`<sup>Optional</sup> <a name="issue_grouping_input" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.issueGroupingInput"></a>

```python
issue_grouping_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `test_integration_input`<sup>Optional</sup> <a name="test_integration_input" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.testIntegrationInput"></a>

```python
test_integration_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `topic_id_input`<sup>Optional</sup> <a name="topic_id_input" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.topicIdInput"></a>

```python
topic_id_input: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `issue_grouping`<sup>Required</sup> <a name="issue_grouping" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.issueGrouping"></a>

```python
issue_grouping: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `test_integration`<sup>Required</sup> <a name="test_integration" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.testIntegration"></a>

```python
test_integration: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `topic_id`<sup>Required</sup> <a name="topic_id" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.topicId"></a>

```python
topic_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSub.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AlertChannelGcpPubSubConfig <a name="AlertChannelGcpPubSubConfig" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_lacework import alert_channel_gcp_pub_sub

alertChannelGcpPubSub.AlertChannelGcpPubSubConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  credentials: AlertChannelGcpPubSubCredentials,
  name: str,
  project_id: str,
  topic_id: str,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  issue_grouping: str = None,
  test_integration: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubConfig.property.credentials">credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentials">AlertChannelGcpPubSubCredentials</a></code> | credentials block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubConfig.property.name">name</a></code> | <code>str</code> | The integration name. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubConfig.property.projectId">project_id</a></code> | <code>str</code> | The name of the Google Cloud Project. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubConfig.property.topicId">topic_id</a></code> | <code>str</code> | The ID of the Google Cloud Pub/Sub topic. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | The state of the external integration. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_gcp_pub_sub#id AlertChannelGcpPubSub#id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubConfig.property.issueGrouping">issue_grouping</a></code> | <code>str</code> | Defines how Lacework compliance events get grouped. Must be one of Events or Resources. Defaults to Events. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubConfig.property.testIntegration">test_integration</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to test the integration of an alert channel upon creation and modification. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubConfig.property.credentials"></a>

```python
credentials: AlertChannelGcpPubSubCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentials">AlertChannelGcpPubSubCredentials</a>

credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_gcp_pub_sub#credentials AlertChannelGcpPubSub#credentials}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The integration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_gcp_pub_sub#name AlertChannelGcpPubSub#name}

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

The name of the Google Cloud Project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_gcp_pub_sub#project_id AlertChannelGcpPubSub#project_id}

---

##### `topic_id`<sup>Required</sup> <a name="topic_id" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubConfig.property.topicId"></a>

```python
topic_id: str
```

- *Type:* str

The ID of the Google Cloud Pub/Sub topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_gcp_pub_sub#topic_id AlertChannelGcpPubSub#topic_id}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

The state of the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_gcp_pub_sub#enabled AlertChannelGcpPubSub#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_gcp_pub_sub#id AlertChannelGcpPubSub#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `issue_grouping`<sup>Optional</sup> <a name="issue_grouping" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubConfig.property.issueGrouping"></a>

```python
issue_grouping: str
```

- *Type:* str

Defines how Lacework compliance events get grouped. Must be one of Events or Resources. Defaults to Events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_gcp_pub_sub#issue_grouping AlertChannelGcpPubSub#issue_grouping}

---

##### `test_integration`<sup>Optional</sup> <a name="test_integration" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubConfig.property.testIntegration"></a>

```python
test_integration: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to test the integration of an alert channel upon creation and modification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_gcp_pub_sub#test_integration AlertChannelGcpPubSub#test_integration}

---

### AlertChannelGcpPubSubCredentials <a name="AlertChannelGcpPubSubCredentials" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentials.Initializer"></a>

```python
from rhizo-co_cdktf_provider_lacework import alert_channel_gcp_pub_sub

alertChannelGcpPubSub.AlertChannelGcpPubSubCredentials(
  client_email: str,
  client_id: str,
  private_key: str,
  private_key_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentials.property.clientEmail">client_email</a></code> | <code>str</code> | The service account client email. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentials.property.clientId">client_id</a></code> | <code>str</code> | The service account client ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentials.property.privateKey">private_key</a></code> | <code>str</code> | The service account private key ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentials.property.privateKeyId">private_key_id</a></code> | <code>str</code> | The service account private key. |

---

##### `client_email`<sup>Required</sup> <a name="client_email" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentials.property.clientEmail"></a>

```python
client_email: str
```

- *Type:* str

The service account client email.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_gcp_pub_sub#client_email AlertChannelGcpPubSub#client_email}

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentials.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

The service account client ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_gcp_pub_sub#client_id AlertChannelGcpPubSub#client_id}

---

##### `private_key`<sup>Required</sup> <a name="private_key" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentials.property.privateKey"></a>

```python
private_key: str
```

- *Type:* str

The service account private key ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_gcp_pub_sub#private_key AlertChannelGcpPubSub#private_key}

---

##### `private_key_id`<sup>Required</sup> <a name="private_key_id" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentials.property.privateKeyId"></a>

```python
private_key_id: str
```

- *Type:* str

The service account private key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_gcp_pub_sub#private_key_id AlertChannelGcpPubSub#private_key_id}

---

## Classes <a name="Classes" id="Classes"></a>

### AlertChannelGcpPubSubCredentialsOutputReference <a name="AlertChannelGcpPubSubCredentialsOutputReference" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_lacework import alert_channel_gcp_pub_sub

alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.property.clientEmailInput">client_email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.property.privateKeyIdInput">private_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.property.privateKeyInput">private_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.property.clientEmail">client_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.property.privateKey">private_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.property.privateKeyId">private_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentials">AlertChannelGcpPubSubCredentials</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_email_input`<sup>Optional</sup> <a name="client_email_input" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.property.clientEmailInput"></a>

```python
client_email_input: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `private_key_id_input`<sup>Optional</sup> <a name="private_key_id_input" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.property.privateKeyIdInput"></a>

```python
private_key_id_input: str
```

- *Type:* str

---

##### `private_key_input`<sup>Optional</sup> <a name="private_key_input" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.property.privateKeyInput"></a>

```python
private_key_input: str
```

- *Type:* str

---

##### `client_email`<sup>Required</sup> <a name="client_email" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.property.clientEmail"></a>

```python
client_email: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `private_key`<sup>Required</sup> <a name="private_key" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.property.privateKey"></a>

```python
private_key: str
```

- *Type:* str

---

##### `private_key_id`<sup>Required</sup> <a name="private_key_id" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.property.privateKeyId"></a>

```python
private_key_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentialsOutputReference.property.internalValue"></a>

```python
internal_value: AlertChannelGcpPubSubCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.alertChannelGcpPubSub.AlertChannelGcpPubSubCredentials">AlertChannelGcpPubSubCredentials</a>

---



