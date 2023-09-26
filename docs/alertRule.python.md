# `lacework_alert_rule`

Refer to the Terraform Registory for docs: [`lacework_alert_rule`](https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_rule).

# `alertRule` Submodule <a name="`alertRule` Submodule" id="rhizo-co-terraform-provider-lacework.alertRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AlertRule <a name="AlertRule" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule"></a>

Represents a {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_rule lacework_alert_rule}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.Initializer"></a>

```python
from rhizo-co_cdktf_provider_lacework import alert_rule

alertRule.AlertRule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  severities: typing.List[str],
  alert_categories: typing.List[str] = None,
  alert_channels: typing.List[str] = None,
  alert_sources: typing.List[str] = None,
  alert_subcategories: typing.List[str] = None,
  description: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  event_categories: typing.List[str] = None,
  id: str = None,
  resource_groups: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the alert rule. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.Initializer.parameter.severities">severities</a></code> | <code>typing.List[str]</code> | List of severities for the alert rule. Valid severities are: Critical, High, Medium, Low, Info. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.Initializer.parameter.alertCategories">alert_categories</a></code> | <code>typing.List[str]</code> | List of alert categories for the alert rule. Valid categories are: Anomaly, Policy, Composite. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.Initializer.parameter.alertChannels">alert_channels</a></code> | <code>typing.List[str]</code> | List of alert channels for the alert rule. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.Initializer.parameter.alertSources">alert_sources</a></code> | <code>typing.List[str]</code> | List of alert sources for the alert rule. Valid sources are: Agent, Aws, Azure, Gcp, K8s. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.Initializer.parameter.alertSubcategories">alert_subcategories</a></code> | <code>typing.List[str]</code> | List of alert subcategories for the alert rule. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the alert rule. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | The state of the alert rule. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.Initializer.parameter.eventCategories">event_categories</a></code> | <code>typing.List[str]</code> | List of event categories for the alert rule. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_rule#id AlertRule#id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.Initializer.parameter.resourceGroups">resource_groups</a></code> | <code>typing.List[str]</code> | List of resource groups for the alert rule. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.Initializer.parameter.name"></a>

- *Type:* str

The name of the alert rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_rule#name AlertRule#name}

---

##### `severities`<sup>Required</sup> <a name="severities" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.Initializer.parameter.severities"></a>

- *Type:* typing.List[str]

List of severities for the alert rule. Valid severities are: Critical, High, Medium, Low, Info.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_rule#severities AlertRule#severities}

---

##### `alert_categories`<sup>Optional</sup> <a name="alert_categories" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.Initializer.parameter.alertCategories"></a>

- *Type:* typing.List[str]

List of alert categories for the alert rule. Valid categories are: Anomaly, Policy, Composite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_rule#alert_categories AlertRule#alert_categories}

---

##### `alert_channels`<sup>Optional</sup> <a name="alert_channels" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.Initializer.parameter.alertChannels"></a>

- *Type:* typing.List[str]

List of alert channels for the alert rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_rule#alert_channels AlertRule#alert_channels}

---

##### `alert_sources`<sup>Optional</sup> <a name="alert_sources" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.Initializer.parameter.alertSources"></a>

- *Type:* typing.List[str]

List of alert sources for the alert rule. Valid sources are: Agent, Aws, Azure, Gcp, K8s.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_rule#alert_sources AlertRule#alert_sources}

---

##### `alert_subcategories`<sup>Optional</sup> <a name="alert_subcategories" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.Initializer.parameter.alertSubcategories"></a>

- *Type:* typing.List[str]

List of alert subcategories for the alert rule.

Valid categories are: Compliance, App, Cloud, File, Machine, User, Platform, K8sActivity, Registry, SystemCall

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_rule#alert_subcategories AlertRule#alert_subcategories}

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.Initializer.parameter.description"></a>

- *Type:* str

The description of the alert rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_rule#description AlertRule#description}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

The state of the alert rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_rule#enabled AlertRule#enabled}

---

##### `event_categories`<sup>Optional</sup> <a name="event_categories" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.Initializer.parameter.eventCategories"></a>

- *Type:* typing.List[str]

List of event categories for the alert rule.

Valid categories are: Compliance, App, Cloud, File, Machine, User, Platform, K8sActivity, Registry, SystemCall

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_rule#event_categories AlertRule#event_categories}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_rule#id AlertRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resource_groups`<sup>Optional</sup> <a name="resource_groups" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.Initializer.parameter.resourceGroups"></a>

- *Type:* typing.List[str]

List of resource groups for the alert rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_rule#resource_groups AlertRule#resource_groups}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.resetAlertCategories">reset_alert_categories</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.resetAlertChannels">reset_alert_channels</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.resetAlertSources">reset_alert_sources</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.resetAlertSubcategories">reset_alert_subcategories</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.resetEventCategories">reset_event_categories</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.resetResourceGroups">reset_resource_groups</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_alert_categories` <a name="reset_alert_categories" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.resetAlertCategories"></a>

```python
def reset_alert_categories() -> None
```

##### `reset_alert_channels` <a name="reset_alert_channels" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.resetAlertChannels"></a>

```python
def reset_alert_channels() -> None
```

##### `reset_alert_sources` <a name="reset_alert_sources" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.resetAlertSources"></a>

```python
def reset_alert_sources() -> None
```

##### `reset_alert_subcategories` <a name="reset_alert_subcategories" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.resetAlertSubcategories"></a>

```python
def reset_alert_subcategories() -> None
```

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_event_categories` <a name="reset_event_categories" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.resetEventCategories"></a>

```python
def reset_event_categories() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_resource_groups` <a name="reset_resource_groups" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.resetResourceGroups"></a>

```python
def reset_resource_groups() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_lacework import alert_rule

alertRule.AlertRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_lacework import alert_rule

alertRule.AlertRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_lacework import alert_rule

alertRule.AlertRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.createdOrUpdatedBy">created_or_updated_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.createdOrUpdatedTime">created_or_updated_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.guid">guid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.alertCategoriesInput">alert_categories_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.alertChannelsInput">alert_channels_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.alertSourcesInput">alert_sources_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.alertSubcategoriesInput">alert_subcategories_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.eventCategoriesInput">event_categories_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.resourceGroupsInput">resource_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.severitiesInput">severities_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.alertCategories">alert_categories</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.alertChannels">alert_channels</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.alertSources">alert_sources</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.alertSubcategories">alert_subcategories</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.eventCategories">event_categories</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.resourceGroups">resource_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.severities">severities</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `created_or_updated_by`<sup>Required</sup> <a name="created_or_updated_by" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.createdOrUpdatedBy"></a>

```python
created_or_updated_by: str
```

- *Type:* str

---

##### `created_or_updated_time`<sup>Required</sup> <a name="created_or_updated_time" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.createdOrUpdatedTime"></a>

```python
created_or_updated_time: str
```

- *Type:* str

---

##### `guid`<sup>Required</sup> <a name="guid" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.guid"></a>

```python
guid: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `alert_categories_input`<sup>Optional</sup> <a name="alert_categories_input" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.alertCategoriesInput"></a>

```python
alert_categories_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `alert_channels_input`<sup>Optional</sup> <a name="alert_channels_input" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.alertChannelsInput"></a>

```python
alert_channels_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `alert_sources_input`<sup>Optional</sup> <a name="alert_sources_input" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.alertSourcesInput"></a>

```python
alert_sources_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `alert_subcategories_input`<sup>Optional</sup> <a name="alert_subcategories_input" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.alertSubcategoriesInput"></a>

```python
alert_subcategories_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `event_categories_input`<sup>Optional</sup> <a name="event_categories_input" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.eventCategoriesInput"></a>

```python
event_categories_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_groups_input`<sup>Optional</sup> <a name="resource_groups_input" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.resourceGroupsInput"></a>

```python
resource_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `severities_input`<sup>Optional</sup> <a name="severities_input" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.severitiesInput"></a>

```python
severities_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `alert_categories`<sup>Required</sup> <a name="alert_categories" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.alertCategories"></a>

```python
alert_categories: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `alert_channels`<sup>Required</sup> <a name="alert_channels" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.alertChannels"></a>

```python
alert_channels: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `alert_sources`<sup>Required</sup> <a name="alert_sources" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.alertSources"></a>

```python
alert_sources: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `alert_subcategories`<sup>Required</sup> <a name="alert_subcategories" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.alertSubcategories"></a>

```python
alert_subcategories: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `event_categories`<sup>Required</sup> <a name="event_categories" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.eventCategories"></a>

```python
event_categories: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_groups`<sup>Required</sup> <a name="resource_groups" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.resourceGroups"></a>

```python
resource_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `severities`<sup>Required</sup> <a name="severities" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.severities"></a>

```python
severities: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AlertRuleConfig <a name="AlertRuleConfig" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRuleConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRuleConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_lacework import alert_rule

alertRule.AlertRuleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  severities: typing.List[str],
  alert_categories: typing.List[str] = None,
  alert_channels: typing.List[str] = None,
  alert_sources: typing.List[str] = None,
  alert_subcategories: typing.List[str] = None,
  description: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  event_categories: typing.List[str] = None,
  id: str = None,
  resource_groups: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRuleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRuleConfig.property.name">name</a></code> | <code>str</code> | The name of the alert rule. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRuleConfig.property.severities">severities</a></code> | <code>typing.List[str]</code> | List of severities for the alert rule. Valid severities are: Critical, High, Medium, Low, Info. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRuleConfig.property.alertCategories">alert_categories</a></code> | <code>typing.List[str]</code> | List of alert categories for the alert rule. Valid categories are: Anomaly, Policy, Composite. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRuleConfig.property.alertChannels">alert_channels</a></code> | <code>typing.List[str]</code> | List of alert channels for the alert rule. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRuleConfig.property.alertSources">alert_sources</a></code> | <code>typing.List[str]</code> | List of alert sources for the alert rule. Valid sources are: Agent, Aws, Azure, Gcp, K8s. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRuleConfig.property.alertSubcategories">alert_subcategories</a></code> | <code>typing.List[str]</code> | List of alert subcategories for the alert rule. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRuleConfig.property.description">description</a></code> | <code>str</code> | The description of the alert rule. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRuleConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | The state of the alert rule. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRuleConfig.property.eventCategories">event_categories</a></code> | <code>typing.List[str]</code> | List of event categories for the alert rule. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_rule#id AlertRule#id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRuleConfig.property.resourceGroups">resource_groups</a></code> | <code>typing.List[str]</code> | List of resource groups for the alert rule. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRuleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRuleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the alert rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_rule#name AlertRule#name}

---

##### `severities`<sup>Required</sup> <a name="severities" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRuleConfig.property.severities"></a>

```python
severities: typing.List[str]
```

- *Type:* typing.List[str]

List of severities for the alert rule. Valid severities are: Critical, High, Medium, Low, Info.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_rule#severities AlertRule#severities}

---

##### `alert_categories`<sup>Optional</sup> <a name="alert_categories" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRuleConfig.property.alertCategories"></a>

```python
alert_categories: typing.List[str]
```

- *Type:* typing.List[str]

List of alert categories for the alert rule. Valid categories are: Anomaly, Policy, Composite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_rule#alert_categories AlertRule#alert_categories}

---

##### `alert_channels`<sup>Optional</sup> <a name="alert_channels" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRuleConfig.property.alertChannels"></a>

```python
alert_channels: typing.List[str]
```

- *Type:* typing.List[str]

List of alert channels for the alert rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_rule#alert_channels AlertRule#alert_channels}

---

##### `alert_sources`<sup>Optional</sup> <a name="alert_sources" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRuleConfig.property.alertSources"></a>

```python
alert_sources: typing.List[str]
```

- *Type:* typing.List[str]

List of alert sources for the alert rule. Valid sources are: Agent, Aws, Azure, Gcp, K8s.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_rule#alert_sources AlertRule#alert_sources}

---

##### `alert_subcategories`<sup>Optional</sup> <a name="alert_subcategories" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRuleConfig.property.alertSubcategories"></a>

```python
alert_subcategories: typing.List[str]
```

- *Type:* typing.List[str]

List of alert subcategories for the alert rule.

Valid categories are: Compliance, App, Cloud, File, Machine, User, Platform, K8sActivity, Registry, SystemCall

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_rule#alert_subcategories AlertRule#alert_subcategories}

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRuleConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the alert rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_rule#description AlertRule#description}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRuleConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

The state of the alert rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_rule#enabled AlertRule#enabled}

---

##### `event_categories`<sup>Optional</sup> <a name="event_categories" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRuleConfig.property.eventCategories"></a>

```python
event_categories: typing.List[str]
```

- *Type:* typing.List[str]

List of event categories for the alert rule.

Valid categories are: Compliance, App, Cloud, File, Machine, User, Platform, K8sActivity, Registry, SystemCall

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_rule#event_categories AlertRule#event_categories}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_rule#id AlertRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resource_groups`<sup>Optional</sup> <a name="resource_groups" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRuleConfig.property.resourceGroups"></a>

```python
resource_groups: typing.List[str]
```

- *Type:* typing.List[str]

List of resource groups for the alert rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_rule#resource_groups AlertRule#resource_groups}

---



