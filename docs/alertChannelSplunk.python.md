# `lacework_alert_channel_splunk`

Refer to the Terraform Registory for docs: [`lacework_alert_channel_splunk`](https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_splunk).

# `alertChannelSplunk` Submodule <a name="`alertChannelSplunk` Submodule" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AlertChannelSplunk <a name="AlertChannelSplunk" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk"></a>

Represents a {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_splunk lacework_alert_channel_splunk}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.Initializer"></a>

```python
from rhizo-co_cdktf_provider_lacework import alert_channel_splunk

alertChannelSplunk.AlertChannelSplunk(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  event_data: AlertChannelSplunkEventData,
  hec_token: str,
  host: str,
  name: str,
  port: typing.Union[int, float],
  channel: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  ssl: typing.Union[bool, IResolvable] = None,
  test_integration: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.Initializer.parameter.eventData">event_data</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventData">AlertChannelSplunkEventData</a></code> | event_data block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.Initializer.parameter.hecToken">hec_token</a></code> | <code>str</code> | The token you generate when you create a new HEC input. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.Initializer.parameter.host">host</a></code> | <code>str</code> | The hostname of the client from which you're sending data. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.Initializer.parameter.name">name</a></code> | <code>str</code> | The integration name. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.Initializer.parameter.port">port</a></code> | <code>typing.Union[int, float]</code> | The destination port for forwarding events. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.Initializer.parameter.channel">channel</a></code> | <code>str</code> | The Splunk channel name. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | The state of the external integration. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_splunk#id AlertChannelSplunk#id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.Initializer.parameter.ssl">ssl</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable or Disable SSL. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.Initializer.parameter.testIntegration">test_integration</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to test the integration of an alert channel upon creation and modification. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `event_data`<sup>Required</sup> <a name="event_data" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.Initializer.parameter.eventData"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventData">AlertChannelSplunkEventData</a>

event_data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_splunk#event_data AlertChannelSplunk#event_data}

---

##### `hec_token`<sup>Required</sup> <a name="hec_token" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.Initializer.parameter.hecToken"></a>

- *Type:* str

The token you generate when you create a new HEC input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_splunk#hec_token AlertChannelSplunk#hec_token}

---

##### `host`<sup>Required</sup> <a name="host" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.Initializer.parameter.host"></a>

- *Type:* str

The hostname of the client from which you're sending data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_splunk#host AlertChannelSplunk#host}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.Initializer.parameter.name"></a>

- *Type:* str

The integration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_splunk#name AlertChannelSplunk#name}

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.Initializer.parameter.port"></a>

- *Type:* typing.Union[int, float]

The destination port for forwarding events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_splunk#port AlertChannelSplunk#port}

---

##### `channel`<sup>Optional</sup> <a name="channel" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.Initializer.parameter.channel"></a>

- *Type:* str

The Splunk channel name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_splunk#channel AlertChannelSplunk#channel}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

The state of the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_splunk#enabled AlertChannelSplunk#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_splunk#id AlertChannelSplunk#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ssl`<sup>Optional</sup> <a name="ssl" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.Initializer.parameter.ssl"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable or Disable SSL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_splunk#ssl AlertChannelSplunk#ssl}

---

##### `test_integration`<sup>Optional</sup> <a name="test_integration" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.Initializer.parameter.testIntegration"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to test the integration of an alert channel upon creation and modification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_splunk#test_integration AlertChannelSplunk#test_integration}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.putEventData">put_event_data</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.resetChannel">reset_channel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.resetSsl">reset_ssl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.resetTestIntegration">reset_test_integration</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_event_data` <a name="put_event_data" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.putEventData"></a>

```python
def put_event_data(
  index: str,
  source: str
) -> None
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.putEventData.parameter.index"></a>

- *Type:* str

Index to store generated events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_splunk#index AlertChannelSplunk#index}

---

###### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.putEventData.parameter.source"></a>

- *Type:* str

The Splunk source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_splunk#source AlertChannelSplunk#source}

---

##### `reset_channel` <a name="reset_channel" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.resetChannel"></a>

```python
def reset_channel() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ssl` <a name="reset_ssl" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.resetSsl"></a>

```python
def reset_ssl() -> None
```

##### `reset_test_integration` <a name="reset_test_integration" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.resetTestIntegration"></a>

```python
def reset_test_integration() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_lacework import alert_channel_splunk

alertChannelSplunk.AlertChannelSplunk.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_lacework import alert_channel_splunk

alertChannelSplunk.AlertChannelSplunk.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_lacework import alert_channel_splunk

alertChannelSplunk.AlertChannelSplunk.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.createdOrUpdatedBy">created_or_updated_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.createdOrUpdatedTime">created_or_updated_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.eventData">event_data</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference">AlertChannelSplunkEventDataOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.intgGuid">intg_guid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.orgLevel">org_level</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.typeName">type_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.channelInput">channel_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.eventDataInput">event_data_input</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventData">AlertChannelSplunkEventData</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.hecTokenInput">hec_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.hostInput">host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.sslInput">ssl_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.testIntegrationInput">test_integration_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.channel">channel</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.hecToken">hec_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.ssl">ssl</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.testIntegration">test_integration</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `created_or_updated_by`<sup>Required</sup> <a name="created_or_updated_by" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.createdOrUpdatedBy"></a>

```python
created_or_updated_by: str
```

- *Type:* str

---

##### `created_or_updated_time`<sup>Required</sup> <a name="created_or_updated_time" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.createdOrUpdatedTime"></a>

```python
created_or_updated_time: str
```

- *Type:* str

---

##### `event_data`<sup>Required</sup> <a name="event_data" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.eventData"></a>

```python
event_data: AlertChannelSplunkEventDataOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference">AlertChannelSplunkEventDataOutputReference</a>

---

##### `intg_guid`<sup>Required</sup> <a name="intg_guid" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.intgGuid"></a>

```python
intg_guid: str
```

- *Type:* str

---

##### `org_level`<sup>Required</sup> <a name="org_level" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.orgLevel"></a>

```python
org_level: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `type_name`<sup>Required</sup> <a name="type_name" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.typeName"></a>

```python
type_name: str
```

- *Type:* str

---

##### `channel_input`<sup>Optional</sup> <a name="channel_input" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.channelInput"></a>

```python
channel_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `event_data_input`<sup>Optional</sup> <a name="event_data_input" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.eventDataInput"></a>

```python
event_data_input: AlertChannelSplunkEventData
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventData">AlertChannelSplunkEventData</a>

---

##### `hec_token_input`<sup>Optional</sup> <a name="hec_token_input" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.hecTokenInput"></a>

```python
hec_token_input: str
```

- *Type:* str

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.hostInput"></a>

```python
host_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ssl_input`<sup>Optional</sup> <a name="ssl_input" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.sslInput"></a>

```python
ssl_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `test_integration_input`<sup>Optional</sup> <a name="test_integration_input" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.testIntegrationInput"></a>

```python
test_integration_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `channel`<sup>Required</sup> <a name="channel" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.channel"></a>

```python
channel: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `hec_token`<sup>Required</sup> <a name="hec_token" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.hecToken"></a>

```python
hec_token: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ssl`<sup>Required</sup> <a name="ssl" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.ssl"></a>

```python
ssl: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `test_integration`<sup>Required</sup> <a name="test_integration" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.testIntegration"></a>

```python
test_integration: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunk.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AlertChannelSplunkConfig <a name="AlertChannelSplunkConfig" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_lacework import alert_channel_splunk

alertChannelSplunk.AlertChannelSplunkConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  event_data: AlertChannelSplunkEventData,
  hec_token: str,
  host: str,
  name: str,
  port: typing.Union[int, float],
  channel: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  ssl: typing.Union[bool, IResolvable] = None,
  test_integration: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkConfig.property.eventData">event_data</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventData">AlertChannelSplunkEventData</a></code> | event_data block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkConfig.property.hecToken">hec_token</a></code> | <code>str</code> | The token you generate when you create a new HEC input. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkConfig.property.host">host</a></code> | <code>str</code> | The hostname of the client from which you're sending data. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkConfig.property.name">name</a></code> | <code>str</code> | The integration name. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkConfig.property.port">port</a></code> | <code>typing.Union[int, float]</code> | The destination port for forwarding events. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkConfig.property.channel">channel</a></code> | <code>str</code> | The Splunk channel name. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | The state of the external integration. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_splunk#id AlertChannelSplunk#id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkConfig.property.ssl">ssl</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable or Disable SSL. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkConfig.property.testIntegration">test_integration</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to test the integration of an alert channel upon creation and modification. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `event_data`<sup>Required</sup> <a name="event_data" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkConfig.property.eventData"></a>

```python
event_data: AlertChannelSplunkEventData
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventData">AlertChannelSplunkEventData</a>

event_data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_splunk#event_data AlertChannelSplunk#event_data}

---

##### `hec_token`<sup>Required</sup> <a name="hec_token" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkConfig.property.hecToken"></a>

```python
hec_token: str
```

- *Type:* str

The token you generate when you create a new HEC input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_splunk#hec_token AlertChannelSplunk#hec_token}

---

##### `host`<sup>Required</sup> <a name="host" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkConfig.property.host"></a>

```python
host: str
```

- *Type:* str

The hostname of the client from which you're sending data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_splunk#host AlertChannelSplunk#host}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The integration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_splunk#name AlertChannelSplunk#name}

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkConfig.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The destination port for forwarding events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_splunk#port AlertChannelSplunk#port}

---

##### `channel`<sup>Optional</sup> <a name="channel" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkConfig.property.channel"></a>

```python
channel: str
```

- *Type:* str

The Splunk channel name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_splunk#channel AlertChannelSplunk#channel}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

The state of the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_splunk#enabled AlertChannelSplunk#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_splunk#id AlertChannelSplunk#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ssl`<sup>Optional</sup> <a name="ssl" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkConfig.property.ssl"></a>

```python
ssl: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable or Disable SSL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_splunk#ssl AlertChannelSplunk#ssl}

---

##### `test_integration`<sup>Optional</sup> <a name="test_integration" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkConfig.property.testIntegration"></a>

```python
test_integration: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to test the integration of an alert channel upon creation and modification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_splunk#test_integration AlertChannelSplunk#test_integration}

---

### AlertChannelSplunkEventData <a name="AlertChannelSplunkEventData" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventData"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventData.Initializer"></a>

```python
from rhizo-co_cdktf_provider_lacework import alert_channel_splunk

alertChannelSplunk.AlertChannelSplunkEventData(
  index: str,
  source: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventData.property.index">index</a></code> | <code>str</code> | Index to store generated events. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventData.property.source">source</a></code> | <code>str</code> | The Splunk source. |

---

##### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventData.property.index"></a>

```python
index: str
```

- *Type:* str

Index to store generated events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_splunk#index AlertChannelSplunk#index}

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventData.property.source"></a>

```python
source: str
```

- *Type:* str

The Splunk source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_splunk#source AlertChannelSplunk#source}

---

## Classes <a name="Classes" id="Classes"></a>

### AlertChannelSplunkEventDataOutputReference <a name="AlertChannelSplunkEventDataOutputReference" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_lacework import alert_channel_splunk

alertChannelSplunk.AlertChannelSplunkEventDataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.property.indexInput">index_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.property.sourceInput">source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.property.index">index</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventData">AlertChannelSplunkEventData</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `index_input`<sup>Optional</sup> <a name="index_input" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.property.indexInput"></a>

```python
index_input: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.property.sourceInput"></a>

```python
source_input: str
```

- *Type:* str

---

##### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.property.index"></a>

```python
index: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventDataOutputReference.property.internalValue"></a>

```python
internal_value: AlertChannelSplunkEventData
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.alertChannelSplunk.AlertChannelSplunkEventData">AlertChannelSplunkEventData</a>

---



