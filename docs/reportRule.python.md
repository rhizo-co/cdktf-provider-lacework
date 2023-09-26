# `lacework_report_rule`

Refer to the Terraform Registory for docs: [`lacework_report_rule`](https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule).

# `reportRule` Submodule <a name="`reportRule` Submodule" id="rhizo-co-terraform-provider-lacework.reportRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ReportRule <a name="ReportRule" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule"></a>

Represents a {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule lacework_report_rule}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer"></a>

```python
from rhizo-co_cdktf_provider_lacework import report_rule

reportRule.ReportRule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  email_alert_channels: typing.List[str],
  name: str,
  severities: typing.List[str],
  aws_compliance_reports: ReportRuleAwsComplianceReports = None,
  azure_compliance_reports: ReportRuleAzureComplianceReports = None,
  daily_compliance_reports: ReportRuleDailyComplianceReports = None,
  description: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  gcp_compliance_reports: ReportRuleGcpComplianceReports = None,
  id: str = None,
  resource_groups: typing.List[str] = None,
  weekly_snapshot: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer.parameter.emailAlertChannels">email_alert_channels</a></code> | <code>typing.List[str]</code> | List of email alert channels for the report rule. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the report rule. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer.parameter.severities">severities</a></code> | <code>typing.List[str]</code> | List of severities for the report rule. Valid severities are: Critical, High, Medium, Low, Info. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer.parameter.awsComplianceReports">aws_compliance_reports</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports">ReportRuleAwsComplianceReports</a></code> | aws_compliance_reports block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer.parameter.azureComplianceReports">azure_compliance_reports</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReports">ReportRuleAzureComplianceReports</a></code> | azure_compliance_reports block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer.parameter.dailyComplianceReports">daily_compliance_reports</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports">ReportRuleDailyComplianceReports</a></code> | daily_compliance_reports block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the report rule. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | The state of the report rule. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer.parameter.gcpComplianceReports">gcp_compliance_reports</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports">ReportRuleGcpComplianceReports</a></code> | gcp_compliance_reports block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#id ReportRule#id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer.parameter.resourceGroups">resource_groups</a></code> | <code>typing.List[str]</code> | List of resource groups for the report rule. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer.parameter.weeklySnapshot">weekly_snapshot</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Weekly Snapshot Compliance Report type. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `email_alert_channels`<sup>Required</sup> <a name="email_alert_channels" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer.parameter.emailAlertChannels"></a>

- *Type:* typing.List[str]

List of email alert channels for the report rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#email_alert_channels ReportRule#email_alert_channels}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer.parameter.name"></a>

- *Type:* str

The name of the report rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#name ReportRule#name}

---

##### `severities`<sup>Required</sup> <a name="severities" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer.parameter.severities"></a>

- *Type:* typing.List[str]

List of severities for the report rule. Valid severities are: Critical, High, Medium, Low, Info.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#severities ReportRule#severities}

---

##### `aws_compliance_reports`<sup>Optional</sup> <a name="aws_compliance_reports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer.parameter.awsComplianceReports"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports">ReportRuleAwsComplianceReports</a>

aws_compliance_reports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#aws_compliance_reports ReportRule#aws_compliance_reports}

---

##### `azure_compliance_reports`<sup>Optional</sup> <a name="azure_compliance_reports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer.parameter.azureComplianceReports"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReports">ReportRuleAzureComplianceReports</a>

azure_compliance_reports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#azure_compliance_reports ReportRule#azure_compliance_reports}

---

##### `daily_compliance_reports`<sup>Optional</sup> <a name="daily_compliance_reports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer.parameter.dailyComplianceReports"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports">ReportRuleDailyComplianceReports</a>

daily_compliance_reports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#daily_compliance_reports ReportRule#daily_compliance_reports}

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer.parameter.description"></a>

- *Type:* str

The description of the report rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#description ReportRule#description}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

The state of the report rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#enabled ReportRule#enabled}

---

##### `gcp_compliance_reports`<sup>Optional</sup> <a name="gcp_compliance_reports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer.parameter.gcpComplianceReports"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports">ReportRuleGcpComplianceReports</a>

gcp_compliance_reports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#gcp_compliance_reports ReportRule#gcp_compliance_reports}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#id ReportRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resource_groups`<sup>Optional</sup> <a name="resource_groups" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer.parameter.resourceGroups"></a>

- *Type:* typing.List[str]

List of resource groups for the report rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#resource_groups ReportRule#resource_groups}

---

##### `weekly_snapshot`<sup>Optional</sup> <a name="weekly_snapshot" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer.parameter.weeklySnapshot"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Weekly Snapshot Compliance Report type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#weekly_snapshot ReportRule#weekly_snapshot}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.putAwsComplianceReports">put_aws_compliance_reports</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.putAzureComplianceReports">put_azure_compliance_reports</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.putDailyComplianceReports">put_daily_compliance_reports</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.putGcpComplianceReports">put_gcp_compliance_reports</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.resetAwsComplianceReports">reset_aws_compliance_reports</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.resetAzureComplianceReports">reset_azure_compliance_reports</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.resetDailyComplianceReports">reset_daily_compliance_reports</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.resetGcpComplianceReports">reset_gcp_compliance_reports</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.resetResourceGroups">reset_resource_groups</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.resetWeeklySnapshot">reset_weekly_snapshot</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_aws_compliance_reports` <a name="put_aws_compliance_reports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.putAwsComplianceReports"></a>

```python
def put_aws_compliance_reports(
  cis_s3: typing.Union[bool, IResolvable] = None,
  hipaa: typing.Union[bool, IResolvable] = None,
  iso2700: typing.Union[bool, IResolvable] = None,
  nist800171_rev2: typing.Union[bool, IResolvable] = None,
  nist80053_rev4: typing.Union[bool, IResolvable] = None,
  pci: typing.Union[bool, IResolvable] = None,
  soc: typing.Union[bool, IResolvable] = None,
  soc_rev2: typing.Union[bool, IResolvable] = None
) -> None
```

###### `cis_s3`<sup>Optional</sup> <a name="cis_s3" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.putAwsComplianceReports.parameter.cisS3"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#cis_s3 ReportRule#cis_s3}.

---

###### `hipaa`<sup>Optional</sup> <a name="hipaa" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.putAwsComplianceReports.parameter.hipaa"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#hipaa ReportRule#hipaa}.

---

###### `iso2700`<sup>Optional</sup> <a name="iso2700" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.putAwsComplianceReports.parameter.iso2700"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#iso_2700 ReportRule#iso_2700}.

---

###### `nist800171_rev2`<sup>Optional</sup> <a name="nist800171_rev2" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.putAwsComplianceReports.parameter.nist800171Rev2"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#nist_800_171_rev2 ReportRule#nist_800_171_rev2}.

---

###### `nist80053_rev4`<sup>Optional</sup> <a name="nist80053_rev4" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.putAwsComplianceReports.parameter.nist80053Rev4"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#nist_800_53_rev4 ReportRule#nist_800_53_rev4}.

---

###### `pci`<sup>Optional</sup> <a name="pci" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.putAwsComplianceReports.parameter.pci"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#pci ReportRule#pci}.

---

###### `soc`<sup>Optional</sup> <a name="soc" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.putAwsComplianceReports.parameter.soc"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#soc ReportRule#soc}.

---

###### `soc_rev2`<sup>Optional</sup> <a name="soc_rev2" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.putAwsComplianceReports.parameter.socRev2"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#soc_rev2 ReportRule#soc_rev2}.

---

##### `put_azure_compliance_reports` <a name="put_azure_compliance_reports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.putAzureComplianceReports"></a>

```python
def put_azure_compliance_reports(
  cis: typing.Union[bool, IResolvable] = None,
  cis131: typing.Union[bool, IResolvable] = None,
  pci: typing.Union[bool, IResolvable] = None,
  soc: typing.Union[bool, IResolvable] = None
) -> None
```

###### `cis`<sup>Optional</sup> <a name="cis" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.putAzureComplianceReports.parameter.cis"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#cis ReportRule#cis}.

---

###### `cis131`<sup>Optional</sup> <a name="cis131" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.putAzureComplianceReports.parameter.cis131"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#cis_131 ReportRule#cis_131}.

---

###### `pci`<sup>Optional</sup> <a name="pci" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.putAzureComplianceReports.parameter.pci"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#pci ReportRule#pci}.

---

###### `soc`<sup>Optional</sup> <a name="soc" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.putAzureComplianceReports.parameter.soc"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#soc ReportRule#soc}.

---

##### `put_daily_compliance_reports` <a name="put_daily_compliance_reports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.putDailyComplianceReports"></a>

```python
def put_daily_compliance_reports(
  aws_cloudtrail: typing.Union[bool, IResolvable] = None,
  aws_compliance: typing.Union[bool, IResolvable] = None,
  azure_activity_log: typing.Union[bool, IResolvable] = None,
  azure_compliance: typing.Union[bool, IResolvable] = None,
  gcp_audit_trail: typing.Union[bool, IResolvable] = None,
  gcp_compliance: typing.Union[bool, IResolvable] = None,
  host_security: typing.Union[bool, IResolvable] = None,
  openshift_compliance: typing.Union[bool, IResolvable] = None,
  openshift_compliance_events: typing.Union[bool, IResolvable] = None,
  platform: typing.Union[bool, IResolvable] = None
) -> None
```

###### `aws_cloudtrail`<sup>Optional</sup> <a name="aws_cloudtrail" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.putDailyComplianceReports.parameter.awsCloudtrail"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#aws_cloudtrail ReportRule#aws_cloudtrail}.

---

###### `aws_compliance`<sup>Optional</sup> <a name="aws_compliance" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.putDailyComplianceReports.parameter.awsCompliance"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#aws_compliance ReportRule#aws_compliance}.

---

###### `azure_activity_log`<sup>Optional</sup> <a name="azure_activity_log" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.putDailyComplianceReports.parameter.azureActivityLog"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#azure_activity_log ReportRule#azure_activity_log}.

---

###### `azure_compliance`<sup>Optional</sup> <a name="azure_compliance" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.putDailyComplianceReports.parameter.azureCompliance"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#azure_compliance ReportRule#azure_compliance}.

---

###### `gcp_audit_trail`<sup>Optional</sup> <a name="gcp_audit_trail" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.putDailyComplianceReports.parameter.gcpAuditTrail"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#gcp_audit_trail ReportRule#gcp_audit_trail}.

---

###### `gcp_compliance`<sup>Optional</sup> <a name="gcp_compliance" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.putDailyComplianceReports.parameter.gcpCompliance"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#gcp_compliance ReportRule#gcp_compliance}.

---

###### `host_security`<sup>Optional</sup> <a name="host_security" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.putDailyComplianceReports.parameter.hostSecurity"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#host_security ReportRule#host_security}.

---

###### `openshift_compliance`<sup>Optional</sup> <a name="openshift_compliance" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.putDailyComplianceReports.parameter.openshiftCompliance"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#openshift_compliance ReportRule#openshift_compliance}.

---

###### `openshift_compliance_events`<sup>Optional</sup> <a name="openshift_compliance_events" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.putDailyComplianceReports.parameter.openshiftComplianceEvents"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#openshift_compliance_events ReportRule#openshift_compliance_events}.

---

###### `platform`<sup>Optional</sup> <a name="platform" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.putDailyComplianceReports.parameter.platform"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#platform ReportRule#platform}.

---

##### `put_gcp_compliance_reports` <a name="put_gcp_compliance_reports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.putGcpComplianceReports"></a>

```python
def put_gcp_compliance_reports(
  cis: typing.Union[bool, IResolvable] = None,
  cis12: typing.Union[bool, IResolvable] = None,
  hipaa: typing.Union[bool, IResolvable] = None,
  hipaa_rev2: typing.Union[bool, IResolvable] = None,
  iso27001: typing.Union[bool, IResolvable] = None,
  k8_s: typing.Union[bool, IResolvable] = None,
  pci: typing.Union[bool, IResolvable] = None,
  pci_rev2: typing.Union[bool, IResolvable] = None,
  soc: typing.Union[bool, IResolvable] = None,
  soc_rev2: typing.Union[bool, IResolvable] = None
) -> None
```

###### `cis`<sup>Optional</sup> <a name="cis" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.putGcpComplianceReports.parameter.cis"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#cis ReportRule#cis}.

---

###### `cis12`<sup>Optional</sup> <a name="cis12" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.putGcpComplianceReports.parameter.cis12"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#cis_12 ReportRule#cis_12}.

---

###### `hipaa`<sup>Optional</sup> <a name="hipaa" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.putGcpComplianceReports.parameter.hipaa"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#hipaa ReportRule#hipaa}.

---

###### `hipaa_rev2`<sup>Optional</sup> <a name="hipaa_rev2" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.putGcpComplianceReports.parameter.hipaaRev2"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#hipaa_rev2 ReportRule#hipaa_rev2}.

---

###### `iso27001`<sup>Optional</sup> <a name="iso27001" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.putGcpComplianceReports.parameter.iso27001"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#iso_27001 ReportRule#iso_27001}.

---

###### `k8_s`<sup>Optional</sup> <a name="k8_s" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.putGcpComplianceReports.parameter.k8S"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#k8s ReportRule#k8s}.

---

###### `pci`<sup>Optional</sup> <a name="pci" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.putGcpComplianceReports.parameter.pci"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#pci ReportRule#pci}.

---

###### `pci_rev2`<sup>Optional</sup> <a name="pci_rev2" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.putGcpComplianceReports.parameter.pciRev2"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#pci_rev2 ReportRule#pci_rev2}.

---

###### `soc`<sup>Optional</sup> <a name="soc" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.putGcpComplianceReports.parameter.soc"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#soc ReportRule#soc}.

---

###### `soc_rev2`<sup>Optional</sup> <a name="soc_rev2" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.putGcpComplianceReports.parameter.socRev2"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#soc_rev2 ReportRule#soc_rev2}.

---

##### `reset_aws_compliance_reports` <a name="reset_aws_compliance_reports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.resetAwsComplianceReports"></a>

```python
def reset_aws_compliance_reports() -> None
```

##### `reset_azure_compliance_reports` <a name="reset_azure_compliance_reports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.resetAzureComplianceReports"></a>

```python
def reset_azure_compliance_reports() -> None
```

##### `reset_daily_compliance_reports` <a name="reset_daily_compliance_reports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.resetDailyComplianceReports"></a>

```python
def reset_daily_compliance_reports() -> None
```

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_gcp_compliance_reports` <a name="reset_gcp_compliance_reports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.resetGcpComplianceReports"></a>

```python
def reset_gcp_compliance_reports() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_resource_groups` <a name="reset_resource_groups" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.resetResourceGroups"></a>

```python
def reset_resource_groups() -> None
```

##### `reset_weekly_snapshot` <a name="reset_weekly_snapshot" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.resetWeeklySnapshot"></a>

```python
def reset_weekly_snapshot() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_lacework import report_rule

reportRule.ReportRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_lacework import report_rule

reportRule.ReportRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_lacework import report_rule

reportRule.ReportRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.awsComplianceReports">aws_compliance_reports</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference">ReportRuleAwsComplianceReportsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.azureComplianceReports">azure_compliance_reports</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference">ReportRuleAzureComplianceReportsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.createdOrUpdatedBy">created_or_updated_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.createdOrUpdatedTime">created_or_updated_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.dailyComplianceReports">daily_compliance_reports</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference">ReportRuleDailyComplianceReportsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.gcpComplianceReports">gcp_compliance_reports</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference">ReportRuleGcpComplianceReportsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.guid">guid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.awsComplianceReportsInput">aws_compliance_reports_input</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports">ReportRuleAwsComplianceReports</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.azureComplianceReportsInput">azure_compliance_reports_input</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReports">ReportRuleAzureComplianceReports</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.dailyComplianceReportsInput">daily_compliance_reports_input</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports">ReportRuleDailyComplianceReports</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.emailAlertChannelsInput">email_alert_channels_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.gcpComplianceReportsInput">gcp_compliance_reports_input</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports">ReportRuleGcpComplianceReports</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.resourceGroupsInput">resource_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.severitiesInput">severities_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.weeklySnapshotInput">weekly_snapshot_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.emailAlertChannels">email_alert_channels</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.resourceGroups">resource_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.severities">severities</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.weeklySnapshot">weekly_snapshot</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `aws_compliance_reports`<sup>Required</sup> <a name="aws_compliance_reports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.awsComplianceReports"></a>

```python
aws_compliance_reports: ReportRuleAwsComplianceReportsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference">ReportRuleAwsComplianceReportsOutputReference</a>

---

##### `azure_compliance_reports`<sup>Required</sup> <a name="azure_compliance_reports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.azureComplianceReports"></a>

```python
azure_compliance_reports: ReportRuleAzureComplianceReportsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference">ReportRuleAzureComplianceReportsOutputReference</a>

---

##### `created_or_updated_by`<sup>Required</sup> <a name="created_or_updated_by" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.createdOrUpdatedBy"></a>

```python
created_or_updated_by: str
```

- *Type:* str

---

##### `created_or_updated_time`<sup>Required</sup> <a name="created_or_updated_time" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.createdOrUpdatedTime"></a>

```python
created_or_updated_time: str
```

- *Type:* str

---

##### `daily_compliance_reports`<sup>Required</sup> <a name="daily_compliance_reports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.dailyComplianceReports"></a>

```python
daily_compliance_reports: ReportRuleDailyComplianceReportsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference">ReportRuleDailyComplianceReportsOutputReference</a>

---

##### `gcp_compliance_reports`<sup>Required</sup> <a name="gcp_compliance_reports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.gcpComplianceReports"></a>

```python
gcp_compliance_reports: ReportRuleGcpComplianceReportsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference">ReportRuleGcpComplianceReportsOutputReference</a>

---

##### `guid`<sup>Required</sup> <a name="guid" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.guid"></a>

```python
guid: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `aws_compliance_reports_input`<sup>Optional</sup> <a name="aws_compliance_reports_input" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.awsComplianceReportsInput"></a>

```python
aws_compliance_reports_input: ReportRuleAwsComplianceReports
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports">ReportRuleAwsComplianceReports</a>

---

##### `azure_compliance_reports_input`<sup>Optional</sup> <a name="azure_compliance_reports_input" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.azureComplianceReportsInput"></a>

```python
azure_compliance_reports_input: ReportRuleAzureComplianceReports
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReports">ReportRuleAzureComplianceReports</a>

---

##### `daily_compliance_reports_input`<sup>Optional</sup> <a name="daily_compliance_reports_input" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.dailyComplianceReportsInput"></a>

```python
daily_compliance_reports_input: ReportRuleDailyComplianceReports
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports">ReportRuleDailyComplianceReports</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `email_alert_channels_input`<sup>Optional</sup> <a name="email_alert_channels_input" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.emailAlertChannelsInput"></a>

```python
email_alert_channels_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `gcp_compliance_reports_input`<sup>Optional</sup> <a name="gcp_compliance_reports_input" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.gcpComplianceReportsInput"></a>

```python
gcp_compliance_reports_input: ReportRuleGcpComplianceReports
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports">ReportRuleGcpComplianceReports</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_groups_input`<sup>Optional</sup> <a name="resource_groups_input" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.resourceGroupsInput"></a>

```python
resource_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `severities_input`<sup>Optional</sup> <a name="severities_input" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.severitiesInput"></a>

```python
severities_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `weekly_snapshot_input`<sup>Optional</sup> <a name="weekly_snapshot_input" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.weeklySnapshotInput"></a>

```python
weekly_snapshot_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `email_alert_channels`<sup>Required</sup> <a name="email_alert_channels" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.emailAlertChannels"></a>

```python
email_alert_channels: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_groups`<sup>Required</sup> <a name="resource_groups" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.resourceGroups"></a>

```python
resource_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `severities`<sup>Required</sup> <a name="severities" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.severities"></a>

```python
severities: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `weekly_snapshot`<sup>Required</sup> <a name="weekly_snapshot" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.weeklySnapshot"></a>

```python
weekly_snapshot: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ReportRuleAwsComplianceReports <a name="ReportRuleAwsComplianceReports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports.Initializer"></a>

```python
from rhizo-co_cdktf_provider_lacework import report_rule

reportRule.ReportRuleAwsComplianceReports(
  cis_s3: typing.Union[bool, IResolvable] = None,
  hipaa: typing.Union[bool, IResolvable] = None,
  iso2700: typing.Union[bool, IResolvable] = None,
  nist800171_rev2: typing.Union[bool, IResolvable] = None,
  nist80053_rev4: typing.Union[bool, IResolvable] = None,
  pci: typing.Union[bool, IResolvable] = None,
  soc: typing.Union[bool, IResolvable] = None,
  soc_rev2: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports.property.cisS3">cis_s3</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#cis_s3 ReportRule#cis_s3}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports.property.hipaa">hipaa</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#hipaa ReportRule#hipaa}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports.property.iso2700">iso2700</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#iso_2700 ReportRule#iso_2700}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports.property.nist800171Rev2">nist800171_rev2</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#nist_800_171_rev2 ReportRule#nist_800_171_rev2}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports.property.nist80053Rev4">nist80053_rev4</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#nist_800_53_rev4 ReportRule#nist_800_53_rev4}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports.property.pci">pci</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#pci ReportRule#pci}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports.property.soc">soc</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#soc ReportRule#soc}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports.property.socRev2">soc_rev2</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#soc_rev2 ReportRule#soc_rev2}. |

---

##### `cis_s3`<sup>Optional</sup> <a name="cis_s3" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports.property.cisS3"></a>

```python
cis_s3: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#cis_s3 ReportRule#cis_s3}.

---

##### `hipaa`<sup>Optional</sup> <a name="hipaa" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports.property.hipaa"></a>

```python
hipaa: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#hipaa ReportRule#hipaa}.

---

##### `iso2700`<sup>Optional</sup> <a name="iso2700" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports.property.iso2700"></a>

```python
iso2700: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#iso_2700 ReportRule#iso_2700}.

---

##### `nist800171_rev2`<sup>Optional</sup> <a name="nist800171_rev2" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports.property.nist800171Rev2"></a>

```python
nist800171_rev2: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#nist_800_171_rev2 ReportRule#nist_800_171_rev2}.

---

##### `nist80053_rev4`<sup>Optional</sup> <a name="nist80053_rev4" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports.property.nist80053Rev4"></a>

```python
nist80053_rev4: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#nist_800_53_rev4 ReportRule#nist_800_53_rev4}.

---

##### `pci`<sup>Optional</sup> <a name="pci" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports.property.pci"></a>

```python
pci: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#pci ReportRule#pci}.

---

##### `soc`<sup>Optional</sup> <a name="soc" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports.property.soc"></a>

```python
soc: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#soc ReportRule#soc}.

---

##### `soc_rev2`<sup>Optional</sup> <a name="soc_rev2" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports.property.socRev2"></a>

```python
soc_rev2: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#soc_rev2 ReportRule#soc_rev2}.

---

### ReportRuleAzureComplianceReports <a name="ReportRuleAzureComplianceReports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReports"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReports.Initializer"></a>

```python
from rhizo-co_cdktf_provider_lacework import report_rule

reportRule.ReportRuleAzureComplianceReports(
  cis: typing.Union[bool, IResolvable] = None,
  cis131: typing.Union[bool, IResolvable] = None,
  pci: typing.Union[bool, IResolvable] = None,
  soc: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReports.property.cis">cis</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#cis ReportRule#cis}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReports.property.cis131">cis131</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#cis_131 ReportRule#cis_131}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReports.property.pci">pci</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#pci ReportRule#pci}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReports.property.soc">soc</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#soc ReportRule#soc}. |

---

##### `cis`<sup>Optional</sup> <a name="cis" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReports.property.cis"></a>

```python
cis: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#cis ReportRule#cis}.

---

##### `cis131`<sup>Optional</sup> <a name="cis131" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReports.property.cis131"></a>

```python
cis131: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#cis_131 ReportRule#cis_131}.

---

##### `pci`<sup>Optional</sup> <a name="pci" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReports.property.pci"></a>

```python
pci: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#pci ReportRule#pci}.

---

##### `soc`<sup>Optional</sup> <a name="soc" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReports.property.soc"></a>

```python
soc: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#soc ReportRule#soc}.

---

### ReportRuleConfig <a name="ReportRuleConfig" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_lacework import report_rule

reportRule.ReportRuleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  email_alert_channels: typing.List[str],
  name: str,
  severities: typing.List[str],
  aws_compliance_reports: ReportRuleAwsComplianceReports = None,
  azure_compliance_reports: ReportRuleAzureComplianceReports = None,
  daily_compliance_reports: ReportRuleDailyComplianceReports = None,
  description: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  gcp_compliance_reports: ReportRuleGcpComplianceReports = None,
  id: str = None,
  resource_groups: typing.List[str] = None,
  weekly_snapshot: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.emailAlertChannels">email_alert_channels</a></code> | <code>typing.List[str]</code> | List of email alert channels for the report rule. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.name">name</a></code> | <code>str</code> | The name of the report rule. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.severities">severities</a></code> | <code>typing.List[str]</code> | List of severities for the report rule. Valid severities are: Critical, High, Medium, Low, Info. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.awsComplianceReports">aws_compliance_reports</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports">ReportRuleAwsComplianceReports</a></code> | aws_compliance_reports block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.azureComplianceReports">azure_compliance_reports</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReports">ReportRuleAzureComplianceReports</a></code> | azure_compliance_reports block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.dailyComplianceReports">daily_compliance_reports</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports">ReportRuleDailyComplianceReports</a></code> | daily_compliance_reports block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.description">description</a></code> | <code>str</code> | The description of the report rule. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | The state of the report rule. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.gcpComplianceReports">gcp_compliance_reports</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports">ReportRuleGcpComplianceReports</a></code> | gcp_compliance_reports block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#id ReportRule#id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.resourceGroups">resource_groups</a></code> | <code>typing.List[str]</code> | List of resource groups for the report rule. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.weeklySnapshot">weekly_snapshot</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Weekly Snapshot Compliance Report type. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `email_alert_channels`<sup>Required</sup> <a name="email_alert_channels" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.emailAlertChannels"></a>

```python
email_alert_channels: typing.List[str]
```

- *Type:* typing.List[str]

List of email alert channels for the report rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#email_alert_channels ReportRule#email_alert_channels}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the report rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#name ReportRule#name}

---

##### `severities`<sup>Required</sup> <a name="severities" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.severities"></a>

```python
severities: typing.List[str]
```

- *Type:* typing.List[str]

List of severities for the report rule. Valid severities are: Critical, High, Medium, Low, Info.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#severities ReportRule#severities}

---

##### `aws_compliance_reports`<sup>Optional</sup> <a name="aws_compliance_reports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.awsComplianceReports"></a>

```python
aws_compliance_reports: ReportRuleAwsComplianceReports
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports">ReportRuleAwsComplianceReports</a>

aws_compliance_reports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#aws_compliance_reports ReportRule#aws_compliance_reports}

---

##### `azure_compliance_reports`<sup>Optional</sup> <a name="azure_compliance_reports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.azureComplianceReports"></a>

```python
azure_compliance_reports: ReportRuleAzureComplianceReports
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReports">ReportRuleAzureComplianceReports</a>

azure_compliance_reports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#azure_compliance_reports ReportRule#azure_compliance_reports}

---

##### `daily_compliance_reports`<sup>Optional</sup> <a name="daily_compliance_reports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.dailyComplianceReports"></a>

```python
daily_compliance_reports: ReportRuleDailyComplianceReports
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports">ReportRuleDailyComplianceReports</a>

daily_compliance_reports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#daily_compliance_reports ReportRule#daily_compliance_reports}

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the report rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#description ReportRule#description}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

The state of the report rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#enabled ReportRule#enabled}

---

##### `gcp_compliance_reports`<sup>Optional</sup> <a name="gcp_compliance_reports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.gcpComplianceReports"></a>

```python
gcp_compliance_reports: ReportRuleGcpComplianceReports
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports">ReportRuleGcpComplianceReports</a>

gcp_compliance_reports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#gcp_compliance_reports ReportRule#gcp_compliance_reports}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#id ReportRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resource_groups`<sup>Optional</sup> <a name="resource_groups" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.resourceGroups"></a>

```python
resource_groups: typing.List[str]
```

- *Type:* typing.List[str]

List of resource groups for the report rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#resource_groups ReportRule#resource_groups}

---

##### `weekly_snapshot`<sup>Optional</sup> <a name="weekly_snapshot" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.weeklySnapshot"></a>

```python
weekly_snapshot: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Weekly Snapshot Compliance Report type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#weekly_snapshot ReportRule#weekly_snapshot}

---

### ReportRuleDailyComplianceReports <a name="ReportRuleDailyComplianceReports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.Initializer"></a>

```python
from rhizo-co_cdktf_provider_lacework import report_rule

reportRule.ReportRuleDailyComplianceReports(
  aws_cloudtrail: typing.Union[bool, IResolvable] = None,
  aws_compliance: typing.Union[bool, IResolvable] = None,
  azure_activity_log: typing.Union[bool, IResolvable] = None,
  azure_compliance: typing.Union[bool, IResolvable] = None,
  gcp_audit_trail: typing.Union[bool, IResolvable] = None,
  gcp_compliance: typing.Union[bool, IResolvable] = None,
  host_security: typing.Union[bool, IResolvable] = None,
  openshift_compliance: typing.Union[bool, IResolvable] = None,
  openshift_compliance_events: typing.Union[bool, IResolvable] = None,
  platform: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.property.awsCloudtrail">aws_cloudtrail</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#aws_cloudtrail ReportRule#aws_cloudtrail}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.property.awsCompliance">aws_compliance</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#aws_compliance ReportRule#aws_compliance}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.property.azureActivityLog">azure_activity_log</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#azure_activity_log ReportRule#azure_activity_log}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.property.azureCompliance">azure_compliance</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#azure_compliance ReportRule#azure_compliance}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.property.gcpAuditTrail">gcp_audit_trail</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#gcp_audit_trail ReportRule#gcp_audit_trail}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.property.gcpCompliance">gcp_compliance</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#gcp_compliance ReportRule#gcp_compliance}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.property.hostSecurity">host_security</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#host_security ReportRule#host_security}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.property.openshiftCompliance">openshift_compliance</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#openshift_compliance ReportRule#openshift_compliance}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.property.openshiftComplianceEvents">openshift_compliance_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#openshift_compliance_events ReportRule#openshift_compliance_events}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.property.platform">platform</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#platform ReportRule#platform}. |

---

##### `aws_cloudtrail`<sup>Optional</sup> <a name="aws_cloudtrail" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.property.awsCloudtrail"></a>

```python
aws_cloudtrail: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#aws_cloudtrail ReportRule#aws_cloudtrail}.

---

##### `aws_compliance`<sup>Optional</sup> <a name="aws_compliance" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.property.awsCompliance"></a>

```python
aws_compliance: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#aws_compliance ReportRule#aws_compliance}.

---

##### `azure_activity_log`<sup>Optional</sup> <a name="azure_activity_log" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.property.azureActivityLog"></a>

```python
azure_activity_log: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#azure_activity_log ReportRule#azure_activity_log}.

---

##### `azure_compliance`<sup>Optional</sup> <a name="azure_compliance" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.property.azureCompliance"></a>

```python
azure_compliance: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#azure_compliance ReportRule#azure_compliance}.

---

##### `gcp_audit_trail`<sup>Optional</sup> <a name="gcp_audit_trail" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.property.gcpAuditTrail"></a>

```python
gcp_audit_trail: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#gcp_audit_trail ReportRule#gcp_audit_trail}.

---

##### `gcp_compliance`<sup>Optional</sup> <a name="gcp_compliance" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.property.gcpCompliance"></a>

```python
gcp_compliance: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#gcp_compliance ReportRule#gcp_compliance}.

---

##### `host_security`<sup>Optional</sup> <a name="host_security" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.property.hostSecurity"></a>

```python
host_security: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#host_security ReportRule#host_security}.

---

##### `openshift_compliance`<sup>Optional</sup> <a name="openshift_compliance" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.property.openshiftCompliance"></a>

```python
openshift_compliance: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#openshift_compliance ReportRule#openshift_compliance}.

---

##### `openshift_compliance_events`<sup>Optional</sup> <a name="openshift_compliance_events" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.property.openshiftComplianceEvents"></a>

```python
openshift_compliance_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#openshift_compliance_events ReportRule#openshift_compliance_events}.

---

##### `platform`<sup>Optional</sup> <a name="platform" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.property.platform"></a>

```python
platform: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#platform ReportRule#platform}.

---

### ReportRuleGcpComplianceReports <a name="ReportRuleGcpComplianceReports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.Initializer"></a>

```python
from rhizo-co_cdktf_provider_lacework import report_rule

reportRule.ReportRuleGcpComplianceReports(
  cis: typing.Union[bool, IResolvable] = None,
  cis12: typing.Union[bool, IResolvable] = None,
  hipaa: typing.Union[bool, IResolvable] = None,
  hipaa_rev2: typing.Union[bool, IResolvable] = None,
  iso27001: typing.Union[bool, IResolvable] = None,
  k8_s: typing.Union[bool, IResolvable] = None,
  pci: typing.Union[bool, IResolvable] = None,
  pci_rev2: typing.Union[bool, IResolvable] = None,
  soc: typing.Union[bool, IResolvable] = None,
  soc_rev2: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.property.cis">cis</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#cis ReportRule#cis}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.property.cis12">cis12</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#cis_12 ReportRule#cis_12}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.property.hipaa">hipaa</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#hipaa ReportRule#hipaa}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.property.hipaaRev2">hipaa_rev2</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#hipaa_rev2 ReportRule#hipaa_rev2}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.property.iso27001">iso27001</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#iso_27001 ReportRule#iso_27001}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.property.k8S">k8_s</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#k8s ReportRule#k8s}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.property.pci">pci</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#pci ReportRule#pci}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.property.pciRev2">pci_rev2</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#pci_rev2 ReportRule#pci_rev2}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.property.soc">soc</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#soc ReportRule#soc}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.property.socRev2">soc_rev2</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#soc_rev2 ReportRule#soc_rev2}. |

---

##### `cis`<sup>Optional</sup> <a name="cis" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.property.cis"></a>

```python
cis: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#cis ReportRule#cis}.

---

##### `cis12`<sup>Optional</sup> <a name="cis12" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.property.cis12"></a>

```python
cis12: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#cis_12 ReportRule#cis_12}.

---

##### `hipaa`<sup>Optional</sup> <a name="hipaa" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.property.hipaa"></a>

```python
hipaa: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#hipaa ReportRule#hipaa}.

---

##### `hipaa_rev2`<sup>Optional</sup> <a name="hipaa_rev2" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.property.hipaaRev2"></a>

```python
hipaa_rev2: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#hipaa_rev2 ReportRule#hipaa_rev2}.

---

##### `iso27001`<sup>Optional</sup> <a name="iso27001" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.property.iso27001"></a>

```python
iso27001: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#iso_27001 ReportRule#iso_27001}.

---

##### `k8_s`<sup>Optional</sup> <a name="k8_s" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.property.k8S"></a>

```python
k8_s: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#k8s ReportRule#k8s}.

---

##### `pci`<sup>Optional</sup> <a name="pci" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.property.pci"></a>

```python
pci: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#pci ReportRule#pci}.

---

##### `pci_rev2`<sup>Optional</sup> <a name="pci_rev2" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.property.pciRev2"></a>

```python
pci_rev2: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#pci_rev2 ReportRule#pci_rev2}.

---

##### `soc`<sup>Optional</sup> <a name="soc" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.property.soc"></a>

```python
soc: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#soc ReportRule#soc}.

---

##### `soc_rev2`<sup>Optional</sup> <a name="soc_rev2" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.property.socRev2"></a>

```python
soc_rev2: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#soc_rev2 ReportRule#soc_rev2}.

---

## Classes <a name="Classes" id="Classes"></a>

### ReportRuleAwsComplianceReportsOutputReference <a name="ReportRuleAwsComplianceReportsOutputReference" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_lacework import report_rule

reportRule.ReportRuleAwsComplianceReportsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.resetCisS3">reset_cis_s3</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.resetHipaa">reset_hipaa</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.resetIso2700">reset_iso2700</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.resetNist800171Rev2">reset_nist800171_rev2</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.resetNist80053Rev4">reset_nist80053_rev4</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.resetPci">reset_pci</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.resetSoc">reset_soc</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.resetSocRev2">reset_soc_rev2</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cis_s3` <a name="reset_cis_s3" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.resetCisS3"></a>

```python
def reset_cis_s3() -> None
```

##### `reset_hipaa` <a name="reset_hipaa" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.resetHipaa"></a>

```python
def reset_hipaa() -> None
```

##### `reset_iso2700` <a name="reset_iso2700" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.resetIso2700"></a>

```python
def reset_iso2700() -> None
```

##### `reset_nist800171_rev2` <a name="reset_nist800171_rev2" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.resetNist800171Rev2"></a>

```python
def reset_nist800171_rev2() -> None
```

##### `reset_nist80053_rev4` <a name="reset_nist80053_rev4" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.resetNist80053Rev4"></a>

```python
def reset_nist80053_rev4() -> None
```

##### `reset_pci` <a name="reset_pci" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.resetPci"></a>

```python
def reset_pci() -> None
```

##### `reset_soc` <a name="reset_soc" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.resetSoc"></a>

```python
def reset_soc() -> None
```

##### `reset_soc_rev2` <a name="reset_soc_rev2" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.resetSocRev2"></a>

```python
def reset_soc_rev2() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.cisS3Input">cis_s3_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.hipaaInput">hipaa_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.iso2700Input">iso2700_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.nist800171Rev2Input">nist800171_rev2_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.nist80053Rev4Input">nist80053_rev4_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.pciInput">pci_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.socInput">soc_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.socRev2Input">soc_rev2_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.cisS3">cis_s3</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.hipaa">hipaa</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.iso2700">iso2700</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.nist800171Rev2">nist800171_rev2</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.nist80053Rev4">nist80053_rev4</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.pci">pci</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.soc">soc</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.socRev2">soc_rev2</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports">ReportRuleAwsComplianceReports</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cis_s3_input`<sup>Optional</sup> <a name="cis_s3_input" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.cisS3Input"></a>

```python
cis_s3_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `hipaa_input`<sup>Optional</sup> <a name="hipaa_input" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.hipaaInput"></a>

```python
hipaa_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `iso2700_input`<sup>Optional</sup> <a name="iso2700_input" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.iso2700Input"></a>

```python
iso2700_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `nist800171_rev2_input`<sup>Optional</sup> <a name="nist800171_rev2_input" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.nist800171Rev2Input"></a>

```python
nist800171_rev2_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `nist80053_rev4_input`<sup>Optional</sup> <a name="nist80053_rev4_input" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.nist80053Rev4Input"></a>

```python
nist80053_rev4_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `pci_input`<sup>Optional</sup> <a name="pci_input" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.pciInput"></a>

```python
pci_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `soc_input`<sup>Optional</sup> <a name="soc_input" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.socInput"></a>

```python
soc_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `soc_rev2_input`<sup>Optional</sup> <a name="soc_rev2_input" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.socRev2Input"></a>

```python
soc_rev2_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cis_s3`<sup>Required</sup> <a name="cis_s3" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.cisS3"></a>

```python
cis_s3: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `hipaa`<sup>Required</sup> <a name="hipaa" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.hipaa"></a>

```python
hipaa: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `iso2700`<sup>Required</sup> <a name="iso2700" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.iso2700"></a>

```python
iso2700: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `nist800171_rev2`<sup>Required</sup> <a name="nist800171_rev2" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.nist800171Rev2"></a>

```python
nist800171_rev2: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `nist80053_rev4`<sup>Required</sup> <a name="nist80053_rev4" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.nist80053Rev4"></a>

```python
nist80053_rev4: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `pci`<sup>Required</sup> <a name="pci" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.pci"></a>

```python
pci: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `soc`<sup>Required</sup> <a name="soc" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.soc"></a>

```python
soc: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `soc_rev2`<sup>Required</sup> <a name="soc_rev2" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.socRev2"></a>

```python
soc_rev2: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.internalValue"></a>

```python
internal_value: ReportRuleAwsComplianceReports
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports">ReportRuleAwsComplianceReports</a>

---


### ReportRuleAzureComplianceReportsOutputReference <a name="ReportRuleAzureComplianceReportsOutputReference" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_lacework import report_rule

reportRule.ReportRuleAzureComplianceReportsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.resetCis">reset_cis</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.resetCis131">reset_cis131</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.resetPci">reset_pci</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.resetSoc">reset_soc</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cis` <a name="reset_cis" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.resetCis"></a>

```python
def reset_cis() -> None
```

##### `reset_cis131` <a name="reset_cis131" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.resetCis131"></a>

```python
def reset_cis131() -> None
```

##### `reset_pci` <a name="reset_pci" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.resetPci"></a>

```python
def reset_pci() -> None
```

##### `reset_soc` <a name="reset_soc" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.resetSoc"></a>

```python
def reset_soc() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.cis131Input">cis131_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.cisInput">cis_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.pciInput">pci_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.socInput">soc_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.cis">cis</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.cis131">cis131</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.pci">pci</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.soc">soc</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReports">ReportRuleAzureComplianceReports</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cis131_input`<sup>Optional</sup> <a name="cis131_input" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.cis131Input"></a>

```python
cis131_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cis_input`<sup>Optional</sup> <a name="cis_input" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.cisInput"></a>

```python
cis_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `pci_input`<sup>Optional</sup> <a name="pci_input" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.pciInput"></a>

```python
pci_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `soc_input`<sup>Optional</sup> <a name="soc_input" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.socInput"></a>

```python
soc_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cis`<sup>Required</sup> <a name="cis" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.cis"></a>

```python
cis: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cis131`<sup>Required</sup> <a name="cis131" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.cis131"></a>

```python
cis131: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `pci`<sup>Required</sup> <a name="pci" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.pci"></a>

```python
pci: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `soc`<sup>Required</sup> <a name="soc" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.soc"></a>

```python
soc: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.internalValue"></a>

```python
internal_value: ReportRuleAzureComplianceReports
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReports">ReportRuleAzureComplianceReports</a>

---


### ReportRuleDailyComplianceReportsOutputReference <a name="ReportRuleDailyComplianceReportsOutputReference" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_lacework import report_rule

reportRule.ReportRuleDailyComplianceReportsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resetAwsCloudtrail">reset_aws_cloudtrail</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resetAwsCompliance">reset_aws_compliance</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resetAzureActivityLog">reset_azure_activity_log</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resetAzureCompliance">reset_azure_compliance</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resetGcpAuditTrail">reset_gcp_audit_trail</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resetGcpCompliance">reset_gcp_compliance</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resetHostSecurity">reset_host_security</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resetOpenshiftCompliance">reset_openshift_compliance</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resetOpenshiftComplianceEvents">reset_openshift_compliance_events</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resetPlatform">reset_platform</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_aws_cloudtrail` <a name="reset_aws_cloudtrail" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resetAwsCloudtrail"></a>

```python
def reset_aws_cloudtrail() -> None
```

##### `reset_aws_compliance` <a name="reset_aws_compliance" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resetAwsCompliance"></a>

```python
def reset_aws_compliance() -> None
```

##### `reset_azure_activity_log` <a name="reset_azure_activity_log" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resetAzureActivityLog"></a>

```python
def reset_azure_activity_log() -> None
```

##### `reset_azure_compliance` <a name="reset_azure_compliance" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resetAzureCompliance"></a>

```python
def reset_azure_compliance() -> None
```

##### `reset_gcp_audit_trail` <a name="reset_gcp_audit_trail" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resetGcpAuditTrail"></a>

```python
def reset_gcp_audit_trail() -> None
```

##### `reset_gcp_compliance` <a name="reset_gcp_compliance" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resetGcpCompliance"></a>

```python
def reset_gcp_compliance() -> None
```

##### `reset_host_security` <a name="reset_host_security" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resetHostSecurity"></a>

```python
def reset_host_security() -> None
```

##### `reset_openshift_compliance` <a name="reset_openshift_compliance" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resetOpenshiftCompliance"></a>

```python
def reset_openshift_compliance() -> None
```

##### `reset_openshift_compliance_events` <a name="reset_openshift_compliance_events" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resetOpenshiftComplianceEvents"></a>

```python
def reset_openshift_compliance_events() -> None
```

##### `reset_platform` <a name="reset_platform" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resetPlatform"></a>

```python
def reset_platform() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.awsCloudtrailInput">aws_cloudtrail_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.awsComplianceInput">aws_compliance_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.azureActivityLogInput">azure_activity_log_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.azureComplianceInput">azure_compliance_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.gcpAuditTrailInput">gcp_audit_trail_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.gcpComplianceInput">gcp_compliance_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.hostSecurityInput">host_security_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.openshiftComplianceEventsInput">openshift_compliance_events_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.openshiftComplianceInput">openshift_compliance_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.platformInput">platform_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.awsCloudtrail">aws_cloudtrail</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.awsCompliance">aws_compliance</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.azureActivityLog">azure_activity_log</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.azureCompliance">azure_compliance</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.gcpAuditTrail">gcp_audit_trail</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.gcpCompliance">gcp_compliance</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.hostSecurity">host_security</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.openshiftCompliance">openshift_compliance</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.openshiftComplianceEvents">openshift_compliance_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.platform">platform</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports">ReportRuleDailyComplianceReports</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws_cloudtrail_input`<sup>Optional</sup> <a name="aws_cloudtrail_input" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.awsCloudtrailInput"></a>

```python
aws_cloudtrail_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `aws_compliance_input`<sup>Optional</sup> <a name="aws_compliance_input" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.awsComplianceInput"></a>

```python
aws_compliance_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `azure_activity_log_input`<sup>Optional</sup> <a name="azure_activity_log_input" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.azureActivityLogInput"></a>

```python
azure_activity_log_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `azure_compliance_input`<sup>Optional</sup> <a name="azure_compliance_input" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.azureComplianceInput"></a>

```python
azure_compliance_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `gcp_audit_trail_input`<sup>Optional</sup> <a name="gcp_audit_trail_input" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.gcpAuditTrailInput"></a>

```python
gcp_audit_trail_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `gcp_compliance_input`<sup>Optional</sup> <a name="gcp_compliance_input" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.gcpComplianceInput"></a>

```python
gcp_compliance_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `host_security_input`<sup>Optional</sup> <a name="host_security_input" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.hostSecurityInput"></a>

```python
host_security_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `openshift_compliance_events_input`<sup>Optional</sup> <a name="openshift_compliance_events_input" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.openshiftComplianceEventsInput"></a>

```python
openshift_compliance_events_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `openshift_compliance_input`<sup>Optional</sup> <a name="openshift_compliance_input" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.openshiftComplianceInput"></a>

```python
openshift_compliance_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `platform_input`<sup>Optional</sup> <a name="platform_input" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.platformInput"></a>

```python
platform_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `aws_cloudtrail`<sup>Required</sup> <a name="aws_cloudtrail" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.awsCloudtrail"></a>

```python
aws_cloudtrail: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `aws_compliance`<sup>Required</sup> <a name="aws_compliance" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.awsCompliance"></a>

```python
aws_compliance: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `azure_activity_log`<sup>Required</sup> <a name="azure_activity_log" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.azureActivityLog"></a>

```python
azure_activity_log: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `azure_compliance`<sup>Required</sup> <a name="azure_compliance" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.azureCompliance"></a>

```python
azure_compliance: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `gcp_audit_trail`<sup>Required</sup> <a name="gcp_audit_trail" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.gcpAuditTrail"></a>

```python
gcp_audit_trail: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `gcp_compliance`<sup>Required</sup> <a name="gcp_compliance" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.gcpCompliance"></a>

```python
gcp_compliance: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `host_security`<sup>Required</sup> <a name="host_security" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.hostSecurity"></a>

```python
host_security: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `openshift_compliance`<sup>Required</sup> <a name="openshift_compliance" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.openshiftCompliance"></a>

```python
openshift_compliance: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `openshift_compliance_events`<sup>Required</sup> <a name="openshift_compliance_events" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.openshiftComplianceEvents"></a>

```python
openshift_compliance_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `platform`<sup>Required</sup> <a name="platform" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.platform"></a>

```python
platform: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.internalValue"></a>

```python
internal_value: ReportRuleDailyComplianceReports
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports">ReportRuleDailyComplianceReports</a>

---


### ReportRuleGcpComplianceReportsOutputReference <a name="ReportRuleGcpComplianceReportsOutputReference" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_lacework import report_rule

reportRule.ReportRuleGcpComplianceReportsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resetCis">reset_cis</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resetCis12">reset_cis12</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resetHipaa">reset_hipaa</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resetHipaaRev2">reset_hipaa_rev2</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resetIso27001">reset_iso27001</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resetK8S">reset_k8_s</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resetPci">reset_pci</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resetPciRev2">reset_pci_rev2</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resetSoc">reset_soc</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resetSocRev2">reset_soc_rev2</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cis` <a name="reset_cis" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resetCis"></a>

```python
def reset_cis() -> None
```

##### `reset_cis12` <a name="reset_cis12" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resetCis12"></a>

```python
def reset_cis12() -> None
```

##### `reset_hipaa` <a name="reset_hipaa" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resetHipaa"></a>

```python
def reset_hipaa() -> None
```

##### `reset_hipaa_rev2` <a name="reset_hipaa_rev2" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resetHipaaRev2"></a>

```python
def reset_hipaa_rev2() -> None
```

##### `reset_iso27001` <a name="reset_iso27001" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resetIso27001"></a>

```python
def reset_iso27001() -> None
```

##### `reset_k8_s` <a name="reset_k8_s" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resetK8S"></a>

```python
def reset_k8_s() -> None
```

##### `reset_pci` <a name="reset_pci" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resetPci"></a>

```python
def reset_pci() -> None
```

##### `reset_pci_rev2` <a name="reset_pci_rev2" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resetPciRev2"></a>

```python
def reset_pci_rev2() -> None
```

##### `reset_soc` <a name="reset_soc" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resetSoc"></a>

```python
def reset_soc() -> None
```

##### `reset_soc_rev2` <a name="reset_soc_rev2" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resetSocRev2"></a>

```python
def reset_soc_rev2() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.cis12Input">cis12_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.cisInput">cis_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.hipaaInput">hipaa_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.hipaaRev2Input">hipaa_rev2_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.iso27001Input">iso27001_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.k8SInput">k8_s_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.pciInput">pci_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.pciRev2Input">pci_rev2_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.socInput">soc_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.socRev2Input">soc_rev2_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.cis">cis</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.cis12">cis12</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.hipaa">hipaa</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.hipaaRev2">hipaa_rev2</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.iso27001">iso27001</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.k8S">k8_s</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.pci">pci</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.pciRev2">pci_rev2</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.soc">soc</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.socRev2">soc_rev2</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports">ReportRuleGcpComplianceReports</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cis12_input`<sup>Optional</sup> <a name="cis12_input" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.cis12Input"></a>

```python
cis12_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cis_input`<sup>Optional</sup> <a name="cis_input" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.cisInput"></a>

```python
cis_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `hipaa_input`<sup>Optional</sup> <a name="hipaa_input" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.hipaaInput"></a>

```python
hipaa_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `hipaa_rev2_input`<sup>Optional</sup> <a name="hipaa_rev2_input" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.hipaaRev2Input"></a>

```python
hipaa_rev2_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `iso27001_input`<sup>Optional</sup> <a name="iso27001_input" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.iso27001Input"></a>

```python
iso27001_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `k8_s_input`<sup>Optional</sup> <a name="k8_s_input" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.k8SInput"></a>

```python
k8_s_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `pci_input`<sup>Optional</sup> <a name="pci_input" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.pciInput"></a>

```python
pci_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `pci_rev2_input`<sup>Optional</sup> <a name="pci_rev2_input" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.pciRev2Input"></a>

```python
pci_rev2_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `soc_input`<sup>Optional</sup> <a name="soc_input" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.socInput"></a>

```python
soc_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `soc_rev2_input`<sup>Optional</sup> <a name="soc_rev2_input" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.socRev2Input"></a>

```python
soc_rev2_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cis`<sup>Required</sup> <a name="cis" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.cis"></a>

```python
cis: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cis12`<sup>Required</sup> <a name="cis12" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.cis12"></a>

```python
cis12: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `hipaa`<sup>Required</sup> <a name="hipaa" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.hipaa"></a>

```python
hipaa: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `hipaa_rev2`<sup>Required</sup> <a name="hipaa_rev2" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.hipaaRev2"></a>

```python
hipaa_rev2: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `iso27001`<sup>Required</sup> <a name="iso27001" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.iso27001"></a>

```python
iso27001: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `k8_s`<sup>Required</sup> <a name="k8_s" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.k8S"></a>

```python
k8_s: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `pci`<sup>Required</sup> <a name="pci" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.pci"></a>

```python
pci: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `pci_rev2`<sup>Required</sup> <a name="pci_rev2" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.pciRev2"></a>

```python
pci_rev2: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `soc`<sup>Required</sup> <a name="soc" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.soc"></a>

```python
soc: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `soc_rev2`<sup>Required</sup> <a name="soc_rev2" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.socRev2"></a>

```python
soc_rev2: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.internalValue"></a>

```python
internal_value: ReportRuleGcpComplianceReports
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports">ReportRuleGcpComplianceReports</a>

---



