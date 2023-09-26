# `lacework_alert_channel_datadog`

Refer to the Terraform Registory for docs: [`lacework_alert_channel_datadog`](https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_datadog).

# `alertChannelDatadog` Submodule <a name="`alertChannelDatadog` Submodule" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AlertChannelDatadog <a name="AlertChannelDatadog" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog"></a>

Represents a {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_datadog lacework_alert_channel_datadog}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.Initializer"></a>

```python
from rhizo-co_cdktf_provider_lacework import alert_channel_datadog

alertChannelDatadog.AlertChannelDatadog(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  api_key: str,
  name: str,
  datadog_service: str = None,
  datadog_site: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  test_integration: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.Initializer.parameter.apiKey">api_key</a></code> | <code>str</code> | The Datadog api key required to submit metrics and events to Datadog. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.Initializer.parameter.name">name</a></code> | <code>str</code> | The integration name. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.Initializer.parameter.datadogService">datadog_service</a></code> | <code>str</code> | The level of detail of logs or event stream. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.Initializer.parameter.datadogSite">datadog_site</a></code> | <code>str</code> | Where to store your logs, either the US or Europe. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | The state of the external integration. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_datadog#id AlertChannelDatadog#id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.Initializer.parameter.testIntegration">test_integration</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to test the integration of an alert channel upon creation and modifications. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `api_key`<sup>Required</sup> <a name="api_key" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.Initializer.parameter.apiKey"></a>

- *Type:* str

The Datadog api key required to submit metrics and events to Datadog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_datadog#api_key AlertChannelDatadog#api_key}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.Initializer.parameter.name"></a>

- *Type:* str

The integration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_datadog#name AlertChannelDatadog#name}

---

##### `datadog_service`<sup>Optional</sup> <a name="datadog_service" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.Initializer.parameter.datadogService"></a>

- *Type:* str

The level of detail of logs or event stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_datadog#datadog_service AlertChannelDatadog#datadog_service}

---

##### `datadog_site`<sup>Optional</sup> <a name="datadog_site" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.Initializer.parameter.datadogSite"></a>

- *Type:* str

Where to store your logs, either the US or Europe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_datadog#datadog_site AlertChannelDatadog#datadog_site}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

The state of the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_datadog#enabled AlertChannelDatadog#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_datadog#id AlertChannelDatadog#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `test_integration`<sup>Optional</sup> <a name="test_integration" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.Initializer.parameter.testIntegration"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to test the integration of an alert channel upon creation and modifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_datadog#test_integration AlertChannelDatadog#test_integration}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.resetDatadogService">reset_datadog_service</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.resetDatadogSite">reset_datadog_site</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.resetTestIntegration">reset_test_integration</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_datadog_service` <a name="reset_datadog_service" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.resetDatadogService"></a>

```python
def reset_datadog_service() -> None
```

##### `reset_datadog_site` <a name="reset_datadog_site" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.resetDatadogSite"></a>

```python
def reset_datadog_site() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_test_integration` <a name="reset_test_integration" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.resetTestIntegration"></a>

```python
def reset_test_integration() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_lacework import alert_channel_datadog

alertChannelDatadog.AlertChannelDatadog.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_lacework import alert_channel_datadog

alertChannelDatadog.AlertChannelDatadog.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_lacework import alert_channel_datadog

alertChannelDatadog.AlertChannelDatadog.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.createdOrUpdatedBy">created_or_updated_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.createdOrUpdatedTime">created_or_updated_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.intgGuid">intg_guid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.orgLevel">org_level</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.typeName">type_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.apiKeyInput">api_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.datadogServiceInput">datadog_service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.datadogSiteInput">datadog_site_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.testIntegrationInput">test_integration_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.apiKey">api_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.datadogService">datadog_service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.datadogSite">datadog_site</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.testIntegration">test_integration</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `created_or_updated_by`<sup>Required</sup> <a name="created_or_updated_by" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.createdOrUpdatedBy"></a>

```python
created_or_updated_by: str
```

- *Type:* str

---

##### `created_or_updated_time`<sup>Required</sup> <a name="created_or_updated_time" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.createdOrUpdatedTime"></a>

```python
created_or_updated_time: str
```

- *Type:* str

---

##### `intg_guid`<sup>Required</sup> <a name="intg_guid" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.intgGuid"></a>

```python
intg_guid: str
```

- *Type:* str

---

##### `org_level`<sup>Required</sup> <a name="org_level" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.orgLevel"></a>

```python
org_level: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `type_name`<sup>Required</sup> <a name="type_name" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.typeName"></a>

```python
type_name: str
```

- *Type:* str

---

##### `api_key_input`<sup>Optional</sup> <a name="api_key_input" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.apiKeyInput"></a>

```python
api_key_input: str
```

- *Type:* str

---

##### `datadog_service_input`<sup>Optional</sup> <a name="datadog_service_input" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.datadogServiceInput"></a>

```python
datadog_service_input: str
```

- *Type:* str

---

##### `datadog_site_input`<sup>Optional</sup> <a name="datadog_site_input" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.datadogSiteInput"></a>

```python
datadog_site_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `test_integration_input`<sup>Optional</sup> <a name="test_integration_input" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.testIntegrationInput"></a>

```python
test_integration_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `api_key`<sup>Required</sup> <a name="api_key" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.apiKey"></a>

```python
api_key: str
```

- *Type:* str

---

##### `datadog_service`<sup>Required</sup> <a name="datadog_service" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.datadogService"></a>

```python
datadog_service: str
```

- *Type:* str

---

##### `datadog_site`<sup>Required</sup> <a name="datadog_site" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.datadogSite"></a>

```python
datadog_site: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `test_integration`<sup>Required</sup> <a name="test_integration" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.testIntegration"></a>

```python
test_integration: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadog.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AlertChannelDatadogConfig <a name="AlertChannelDatadogConfig" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadogConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadogConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_lacework import alert_channel_datadog

alertChannelDatadog.AlertChannelDatadogConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  api_key: str,
  name: str,
  datadog_service: str = None,
  datadog_site: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  test_integration: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadogConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadogConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadogConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadogConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadogConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadogConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadogConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadogConfig.property.apiKey">api_key</a></code> | <code>str</code> | The Datadog api key required to submit metrics and events to Datadog. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadogConfig.property.name">name</a></code> | <code>str</code> | The integration name. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadogConfig.property.datadogService">datadog_service</a></code> | <code>str</code> | The level of detail of logs or event stream. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadogConfig.property.datadogSite">datadog_site</a></code> | <code>str</code> | Where to store your logs, either the US or Europe. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadogConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | The state of the external integration. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadogConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_datadog#id AlertChannelDatadog#id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadogConfig.property.testIntegration">test_integration</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to test the integration of an alert channel upon creation and modifications. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadogConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadogConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadogConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadogConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadogConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadogConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadogConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `api_key`<sup>Required</sup> <a name="api_key" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadogConfig.property.apiKey"></a>

```python
api_key: str
```

- *Type:* str

The Datadog api key required to submit metrics and events to Datadog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_datadog#api_key AlertChannelDatadog#api_key}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadogConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The integration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_datadog#name AlertChannelDatadog#name}

---

##### `datadog_service`<sup>Optional</sup> <a name="datadog_service" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadogConfig.property.datadogService"></a>

```python
datadog_service: str
```

- *Type:* str

The level of detail of logs or event stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_datadog#datadog_service AlertChannelDatadog#datadog_service}

---

##### `datadog_site`<sup>Optional</sup> <a name="datadog_site" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadogConfig.property.datadogSite"></a>

```python
datadog_site: str
```

- *Type:* str

Where to store your logs, either the US or Europe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_datadog#datadog_site AlertChannelDatadog#datadog_site}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadogConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

The state of the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_datadog#enabled AlertChannelDatadog#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadogConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_datadog#id AlertChannelDatadog#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `test_integration`<sup>Optional</sup> <a name="test_integration" id="rhizo-co-terraform-provider-lacework.alertChannelDatadog.AlertChannelDatadogConfig.property.testIntegration"></a>

```python
test_integration: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to test the integration of an alert channel upon creation and modifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_datadog#test_integration AlertChannelDatadog#test_integration}

---



