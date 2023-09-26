# `lacework_report_rule`

Refer to the Terraform Registory for docs: [`lacework_report_rule`](https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule).

# `reportRule` Submodule <a name="`reportRule` Submodule" id="rhizo-co-terraform-provider-lacework.reportRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ReportRule <a name="ReportRule" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule"></a>

Represents a {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule lacework_report_rule}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.lacework.report_rule.ReportRule;

ReportRule.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .emailAlertChannels(java.util.List<java.lang.String>)
    .name(java.lang.String)
    .severities(java.util.List<java.lang.String>)
//  .awsComplianceReports(ReportRuleAwsComplianceReports)
//  .azureComplianceReports(ReportRuleAzureComplianceReports)
//  .dailyComplianceReports(ReportRuleDailyComplianceReports)
//  .description(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .gcpComplianceReports(ReportRuleGcpComplianceReports)
//  .id(java.lang.String)
//  .resourceGroups(java.util.List<java.lang.String>)
//  .weeklySnapshot(java.lang.Boolean)
//  .weeklySnapshot(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer.parameter.emailAlertChannels">emailAlertChannels</a></code> | <code>java.util.List<java.lang.String></code> | List of email alert channels for the report rule. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the report rule. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer.parameter.severities">severities</a></code> | <code>java.util.List<java.lang.String></code> | List of severities for the report rule. Valid severities are: Critical, High, Medium, Low, Info. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer.parameter.awsComplianceReports">awsComplianceReports</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports">ReportRuleAwsComplianceReports</a></code> | aws_compliance_reports block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer.parameter.azureComplianceReports">azureComplianceReports</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReports">ReportRuleAzureComplianceReports</a></code> | azure_compliance_reports block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer.parameter.dailyComplianceReports">dailyComplianceReports</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports">ReportRuleDailyComplianceReports</a></code> | daily_compliance_reports block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the report rule. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The state of the report rule. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer.parameter.gcpComplianceReports">gcpComplianceReports</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports">ReportRuleGcpComplianceReports</a></code> | gcp_compliance_reports block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#id ReportRule#id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer.parameter.resourceGroups">resourceGroups</a></code> | <code>java.util.List<java.lang.String></code> | List of resource groups for the report rule. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer.parameter.weeklySnapshot">weeklySnapshot</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Weekly Snapshot Compliance Report type. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `emailAlertChannels`<sup>Required</sup> <a name="emailAlertChannels" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer.parameter.emailAlertChannels"></a>

- *Type:* java.util.List<java.lang.String>

List of email alert channels for the report rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#email_alert_channels ReportRule#email_alert_channels}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the report rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#name ReportRule#name}

---

##### `severities`<sup>Required</sup> <a name="severities" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer.parameter.severities"></a>

- *Type:* java.util.List<java.lang.String>

List of severities for the report rule. Valid severities are: Critical, High, Medium, Low, Info.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#severities ReportRule#severities}

---

##### `awsComplianceReports`<sup>Optional</sup> <a name="awsComplianceReports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer.parameter.awsComplianceReports"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports">ReportRuleAwsComplianceReports</a>

aws_compliance_reports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#aws_compliance_reports ReportRule#aws_compliance_reports}

---

##### `azureComplianceReports`<sup>Optional</sup> <a name="azureComplianceReports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer.parameter.azureComplianceReports"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReports">ReportRuleAzureComplianceReports</a>

azure_compliance_reports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#azure_compliance_reports ReportRule#azure_compliance_reports}

---

##### `dailyComplianceReports`<sup>Optional</sup> <a name="dailyComplianceReports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer.parameter.dailyComplianceReports"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports">ReportRuleDailyComplianceReports</a>

daily_compliance_reports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#daily_compliance_reports ReportRule#daily_compliance_reports}

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the report rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#description ReportRule#description}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The state of the report rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#enabled ReportRule#enabled}

---

##### `gcpComplianceReports`<sup>Optional</sup> <a name="gcpComplianceReports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer.parameter.gcpComplianceReports"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports">ReportRuleGcpComplianceReports</a>

gcp_compliance_reports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#gcp_compliance_reports ReportRule#gcp_compliance_reports}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#id ReportRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resourceGroups`<sup>Optional</sup> <a name="resourceGroups" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer.parameter.resourceGroups"></a>

- *Type:* java.util.List<java.lang.String>

List of resource groups for the report rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#resource_groups ReportRule#resource_groups}

---

##### `weeklySnapshot`<sup>Optional</sup> <a name="weeklySnapshot" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.Initializer.parameter.weeklySnapshot"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Weekly Snapshot Compliance Report type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#weekly_snapshot ReportRule#weekly_snapshot}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.putAwsComplianceReports">putAwsComplianceReports</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.putAzureComplianceReports">putAzureComplianceReports</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.putDailyComplianceReports">putDailyComplianceReports</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.putGcpComplianceReports">putGcpComplianceReports</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.resetAwsComplianceReports">resetAwsComplianceReports</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.resetAzureComplianceReports">resetAzureComplianceReports</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.resetDailyComplianceReports">resetDailyComplianceReports</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.resetGcpComplianceReports">resetGcpComplianceReports</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.resetResourceGroups">resetResourceGroups</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.resetWeeklySnapshot">resetWeeklySnapshot</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putAwsComplianceReports` <a name="putAwsComplianceReports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.putAwsComplianceReports"></a>

```java
public void putAwsComplianceReports(ReportRuleAwsComplianceReports value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.putAwsComplianceReports.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports">ReportRuleAwsComplianceReports</a>

---

##### `putAzureComplianceReports` <a name="putAzureComplianceReports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.putAzureComplianceReports"></a>

```java
public void putAzureComplianceReports(ReportRuleAzureComplianceReports value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.putAzureComplianceReports.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReports">ReportRuleAzureComplianceReports</a>

---

##### `putDailyComplianceReports` <a name="putDailyComplianceReports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.putDailyComplianceReports"></a>

```java
public void putDailyComplianceReports(ReportRuleDailyComplianceReports value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.putDailyComplianceReports.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports">ReportRuleDailyComplianceReports</a>

---

##### `putGcpComplianceReports` <a name="putGcpComplianceReports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.putGcpComplianceReports"></a>

```java
public void putGcpComplianceReports(ReportRuleGcpComplianceReports value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.putGcpComplianceReports.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports">ReportRuleGcpComplianceReports</a>

---

##### `resetAwsComplianceReports` <a name="resetAwsComplianceReports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.resetAwsComplianceReports"></a>

```java
public void resetAwsComplianceReports()
```

##### `resetAzureComplianceReports` <a name="resetAzureComplianceReports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.resetAzureComplianceReports"></a>

```java
public void resetAzureComplianceReports()
```

##### `resetDailyComplianceReports` <a name="resetDailyComplianceReports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.resetDailyComplianceReports"></a>

```java
public void resetDailyComplianceReports()
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEnabled` <a name="resetEnabled" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetGcpComplianceReports` <a name="resetGcpComplianceReports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.resetGcpComplianceReports"></a>

```java
public void resetGcpComplianceReports()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.resetId"></a>

```java
public void resetId()
```

##### `resetResourceGroups` <a name="resetResourceGroups" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.resetResourceGroups"></a>

```java
public void resetResourceGroups()
```

##### `resetWeeklySnapshot` <a name="resetWeeklySnapshot" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.resetWeeklySnapshot"></a>

```java
public void resetWeeklySnapshot()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.lacework.report_rule.ReportRule;

ReportRule.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.lacework.report_rule.ReportRule;

ReportRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.lacework.report_rule.ReportRule;

ReportRule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.awsComplianceReports">awsComplianceReports</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference">ReportRuleAwsComplianceReportsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.azureComplianceReports">azureComplianceReports</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference">ReportRuleAzureComplianceReportsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.createdOrUpdatedBy">createdOrUpdatedBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.createdOrUpdatedTime">createdOrUpdatedTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.dailyComplianceReports">dailyComplianceReports</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference">ReportRuleDailyComplianceReportsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.gcpComplianceReports">gcpComplianceReports</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference">ReportRuleGcpComplianceReportsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.guid">guid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.awsComplianceReportsInput">awsComplianceReportsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports">ReportRuleAwsComplianceReports</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.azureComplianceReportsInput">azureComplianceReportsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReports">ReportRuleAzureComplianceReports</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.dailyComplianceReportsInput">dailyComplianceReportsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports">ReportRuleDailyComplianceReports</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.emailAlertChannelsInput">emailAlertChannelsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.gcpComplianceReportsInput">gcpComplianceReportsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports">ReportRuleGcpComplianceReports</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.resourceGroupsInput">resourceGroupsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.severitiesInput">severitiesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.weeklySnapshotInput">weeklySnapshotInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.emailAlertChannels">emailAlertChannels</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.resourceGroups">resourceGroups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.severities">severities</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.weeklySnapshot">weeklySnapshot</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `awsComplianceReports`<sup>Required</sup> <a name="awsComplianceReports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.awsComplianceReports"></a>

```java
public ReportRuleAwsComplianceReportsOutputReference getAwsComplianceReports();
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference">ReportRuleAwsComplianceReportsOutputReference</a>

---

##### `azureComplianceReports`<sup>Required</sup> <a name="azureComplianceReports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.azureComplianceReports"></a>

```java
public ReportRuleAzureComplianceReportsOutputReference getAzureComplianceReports();
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference">ReportRuleAzureComplianceReportsOutputReference</a>

---

##### `createdOrUpdatedBy`<sup>Required</sup> <a name="createdOrUpdatedBy" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.createdOrUpdatedBy"></a>

```java
public java.lang.String getCreatedOrUpdatedBy();
```

- *Type:* java.lang.String

---

##### `createdOrUpdatedTime`<sup>Required</sup> <a name="createdOrUpdatedTime" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.createdOrUpdatedTime"></a>

```java
public java.lang.String getCreatedOrUpdatedTime();
```

- *Type:* java.lang.String

---

##### `dailyComplianceReports`<sup>Required</sup> <a name="dailyComplianceReports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.dailyComplianceReports"></a>

```java
public ReportRuleDailyComplianceReportsOutputReference getDailyComplianceReports();
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference">ReportRuleDailyComplianceReportsOutputReference</a>

---

##### `gcpComplianceReports`<sup>Required</sup> <a name="gcpComplianceReports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.gcpComplianceReports"></a>

```java
public ReportRuleGcpComplianceReportsOutputReference getGcpComplianceReports();
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference">ReportRuleGcpComplianceReportsOutputReference</a>

---

##### `guid`<sup>Required</sup> <a name="guid" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.guid"></a>

```java
public java.lang.String getGuid();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `awsComplianceReportsInput`<sup>Optional</sup> <a name="awsComplianceReportsInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.awsComplianceReportsInput"></a>

```java
public ReportRuleAwsComplianceReports getAwsComplianceReportsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports">ReportRuleAwsComplianceReports</a>

---

##### `azureComplianceReportsInput`<sup>Optional</sup> <a name="azureComplianceReportsInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.azureComplianceReportsInput"></a>

```java
public ReportRuleAzureComplianceReports getAzureComplianceReportsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReports">ReportRuleAzureComplianceReports</a>

---

##### `dailyComplianceReportsInput`<sup>Optional</sup> <a name="dailyComplianceReportsInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.dailyComplianceReportsInput"></a>

```java
public ReportRuleDailyComplianceReports getDailyComplianceReportsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports">ReportRuleDailyComplianceReports</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `emailAlertChannelsInput`<sup>Optional</sup> <a name="emailAlertChannelsInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.emailAlertChannelsInput"></a>

```java
public java.util.List<java.lang.String> getEmailAlertChannelsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `gcpComplianceReportsInput`<sup>Optional</sup> <a name="gcpComplianceReportsInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.gcpComplianceReportsInput"></a>

```java
public ReportRuleGcpComplianceReports getGcpComplianceReportsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports">ReportRuleGcpComplianceReports</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupsInput`<sup>Optional</sup> <a name="resourceGroupsInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.resourceGroupsInput"></a>

```java
public java.util.List<java.lang.String> getResourceGroupsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `severitiesInput`<sup>Optional</sup> <a name="severitiesInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.severitiesInput"></a>

```java
public java.util.List<java.lang.String> getSeveritiesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `weeklySnapshotInput`<sup>Optional</sup> <a name="weeklySnapshotInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.weeklySnapshotInput"></a>

```java
public java.lang.Object getWeeklySnapshotInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `emailAlertChannels`<sup>Required</sup> <a name="emailAlertChannels" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.emailAlertChannels"></a>

```java
public java.util.List<java.lang.String> getEmailAlertChannels();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroups`<sup>Required</sup> <a name="resourceGroups" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.resourceGroups"></a>

```java
public java.util.List<java.lang.String> getResourceGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `severities`<sup>Required</sup> <a name="severities" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.severities"></a>

```java
public java.util.List<java.lang.String> getSeverities();
```

- *Type:* java.util.List<java.lang.String>

---

##### `weeklySnapshot`<sup>Required</sup> <a name="weeklySnapshot" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.weeklySnapshot"></a>

```java
public java.lang.Object getWeeklySnapshot();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ReportRuleAwsComplianceReports <a name="ReportRuleAwsComplianceReports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.lacework.report_rule.ReportRuleAwsComplianceReports;

ReportRuleAwsComplianceReports.builder()
//  .cisS3(java.lang.Boolean)
//  .cisS3(IResolvable)
//  .hipaa(java.lang.Boolean)
//  .hipaa(IResolvable)
//  .iso2700(java.lang.Boolean)
//  .iso2700(IResolvable)
//  .nist800171Rev2(java.lang.Boolean)
//  .nist800171Rev2(IResolvable)
//  .nist80053Rev4(java.lang.Boolean)
//  .nist80053Rev4(IResolvable)
//  .pci(java.lang.Boolean)
//  .pci(IResolvable)
//  .soc(java.lang.Boolean)
//  .soc(IResolvable)
//  .socRev2(java.lang.Boolean)
//  .socRev2(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports.property.cisS3">cisS3</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#cis_s3 ReportRule#cis_s3}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports.property.hipaa">hipaa</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#hipaa ReportRule#hipaa}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports.property.iso2700">iso2700</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#iso_2700 ReportRule#iso_2700}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports.property.nist800171Rev2">nist800171Rev2</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#nist_800_171_rev2 ReportRule#nist_800_171_rev2}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports.property.nist80053Rev4">nist80053Rev4</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#nist_800_53_rev4 ReportRule#nist_800_53_rev4}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports.property.pci">pci</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#pci ReportRule#pci}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports.property.soc">soc</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#soc ReportRule#soc}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports.property.socRev2">socRev2</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#soc_rev2 ReportRule#soc_rev2}. |

---

##### `cisS3`<sup>Optional</sup> <a name="cisS3" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports.property.cisS3"></a>

```java
public java.lang.Object getCisS3();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#cis_s3 ReportRule#cis_s3}.

---

##### `hipaa`<sup>Optional</sup> <a name="hipaa" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports.property.hipaa"></a>

```java
public java.lang.Object getHipaa();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#hipaa ReportRule#hipaa}.

---

##### `iso2700`<sup>Optional</sup> <a name="iso2700" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports.property.iso2700"></a>

```java
public java.lang.Object getIso2700();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#iso_2700 ReportRule#iso_2700}.

---

##### `nist800171Rev2`<sup>Optional</sup> <a name="nist800171Rev2" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports.property.nist800171Rev2"></a>

```java
public java.lang.Object getNist800171Rev2();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#nist_800_171_rev2 ReportRule#nist_800_171_rev2}.

---

##### `nist80053Rev4`<sup>Optional</sup> <a name="nist80053Rev4" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports.property.nist80053Rev4"></a>

```java
public java.lang.Object getNist80053Rev4();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#nist_800_53_rev4 ReportRule#nist_800_53_rev4}.

---

##### `pci`<sup>Optional</sup> <a name="pci" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports.property.pci"></a>

```java
public java.lang.Object getPci();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#pci ReportRule#pci}.

---

##### `soc`<sup>Optional</sup> <a name="soc" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports.property.soc"></a>

```java
public java.lang.Object getSoc();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#soc ReportRule#soc}.

---

##### `socRev2`<sup>Optional</sup> <a name="socRev2" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports.property.socRev2"></a>

```java
public java.lang.Object getSocRev2();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#soc_rev2 ReportRule#soc_rev2}.

---

### ReportRuleAzureComplianceReports <a name="ReportRuleAzureComplianceReports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReports"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReports.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.lacework.report_rule.ReportRuleAzureComplianceReports;

ReportRuleAzureComplianceReports.builder()
//  .cis(java.lang.Boolean)
//  .cis(IResolvable)
//  .cis131(java.lang.Boolean)
//  .cis131(IResolvable)
//  .pci(java.lang.Boolean)
//  .pci(IResolvable)
//  .soc(java.lang.Boolean)
//  .soc(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReports.property.cis">cis</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#cis ReportRule#cis}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReports.property.cis131">cis131</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#cis_131 ReportRule#cis_131}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReports.property.pci">pci</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#pci ReportRule#pci}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReports.property.soc">soc</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#soc ReportRule#soc}. |

---

##### `cis`<sup>Optional</sup> <a name="cis" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReports.property.cis"></a>

```java
public java.lang.Object getCis();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#cis ReportRule#cis}.

---

##### `cis131`<sup>Optional</sup> <a name="cis131" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReports.property.cis131"></a>

```java
public java.lang.Object getCis131();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#cis_131 ReportRule#cis_131}.

---

##### `pci`<sup>Optional</sup> <a name="pci" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReports.property.pci"></a>

```java
public java.lang.Object getPci();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#pci ReportRule#pci}.

---

##### `soc`<sup>Optional</sup> <a name="soc" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReports.property.soc"></a>

```java
public java.lang.Object getSoc();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#soc ReportRule#soc}.

---

### ReportRuleConfig <a name="ReportRuleConfig" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.lacework.report_rule.ReportRuleConfig;

ReportRuleConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .emailAlertChannels(java.util.List<java.lang.String>)
    .name(java.lang.String)
    .severities(java.util.List<java.lang.String>)
//  .awsComplianceReports(ReportRuleAwsComplianceReports)
//  .azureComplianceReports(ReportRuleAzureComplianceReports)
//  .dailyComplianceReports(ReportRuleDailyComplianceReports)
//  .description(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .gcpComplianceReports(ReportRuleGcpComplianceReports)
//  .id(java.lang.String)
//  .resourceGroups(java.util.List<java.lang.String>)
//  .weeklySnapshot(java.lang.Boolean)
//  .weeklySnapshot(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.emailAlertChannels">emailAlertChannels</a></code> | <code>java.util.List<java.lang.String></code> | List of email alert channels for the report rule. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the report rule. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.severities">severities</a></code> | <code>java.util.List<java.lang.String></code> | List of severities for the report rule. Valid severities are: Critical, High, Medium, Low, Info. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.awsComplianceReports">awsComplianceReports</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports">ReportRuleAwsComplianceReports</a></code> | aws_compliance_reports block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.azureComplianceReports">azureComplianceReports</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReports">ReportRuleAzureComplianceReports</a></code> | azure_compliance_reports block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.dailyComplianceReports">dailyComplianceReports</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports">ReportRuleDailyComplianceReports</a></code> | daily_compliance_reports block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the report rule. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The state of the report rule. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.gcpComplianceReports">gcpComplianceReports</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports">ReportRuleGcpComplianceReports</a></code> | gcp_compliance_reports block. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#id ReportRule#id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.resourceGroups">resourceGroups</a></code> | <code>java.util.List<java.lang.String></code> | List of resource groups for the report rule. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.weeklySnapshot">weeklySnapshot</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Weekly Snapshot Compliance Report type. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `emailAlertChannels`<sup>Required</sup> <a name="emailAlertChannels" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.emailAlertChannels"></a>

```java
public java.util.List<java.lang.String> getEmailAlertChannels();
```

- *Type:* java.util.List<java.lang.String>

List of email alert channels for the report rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#email_alert_channels ReportRule#email_alert_channels}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the report rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#name ReportRule#name}

---

##### `severities`<sup>Required</sup> <a name="severities" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.severities"></a>

```java
public java.util.List<java.lang.String> getSeverities();
```

- *Type:* java.util.List<java.lang.String>

List of severities for the report rule. Valid severities are: Critical, High, Medium, Low, Info.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#severities ReportRule#severities}

---

##### `awsComplianceReports`<sup>Optional</sup> <a name="awsComplianceReports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.awsComplianceReports"></a>

```java
public ReportRuleAwsComplianceReports getAwsComplianceReports();
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports">ReportRuleAwsComplianceReports</a>

aws_compliance_reports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#aws_compliance_reports ReportRule#aws_compliance_reports}

---

##### `azureComplianceReports`<sup>Optional</sup> <a name="azureComplianceReports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.azureComplianceReports"></a>

```java
public ReportRuleAzureComplianceReports getAzureComplianceReports();
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReports">ReportRuleAzureComplianceReports</a>

azure_compliance_reports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#azure_compliance_reports ReportRule#azure_compliance_reports}

---

##### `dailyComplianceReports`<sup>Optional</sup> <a name="dailyComplianceReports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.dailyComplianceReports"></a>

```java
public ReportRuleDailyComplianceReports getDailyComplianceReports();
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports">ReportRuleDailyComplianceReports</a>

daily_compliance_reports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#daily_compliance_reports ReportRule#daily_compliance_reports}

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the report rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#description ReportRule#description}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The state of the report rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#enabled ReportRule#enabled}

---

##### `gcpComplianceReports`<sup>Optional</sup> <a name="gcpComplianceReports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.gcpComplianceReports"></a>

```java
public ReportRuleGcpComplianceReports getGcpComplianceReports();
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports">ReportRuleGcpComplianceReports</a>

gcp_compliance_reports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#gcp_compliance_reports ReportRule#gcp_compliance_reports}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#id ReportRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resourceGroups`<sup>Optional</sup> <a name="resourceGroups" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.resourceGroups"></a>

```java
public java.util.List<java.lang.String> getResourceGroups();
```

- *Type:* java.util.List<java.lang.String>

List of resource groups for the report rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#resource_groups ReportRule#resource_groups}

---

##### `weeklySnapshot`<sup>Optional</sup> <a name="weeklySnapshot" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleConfig.property.weeklySnapshot"></a>

```java
public java.lang.Object getWeeklySnapshot();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Weekly Snapshot Compliance Report type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#weekly_snapshot ReportRule#weekly_snapshot}

---

### ReportRuleDailyComplianceReports <a name="ReportRuleDailyComplianceReports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.lacework.report_rule.ReportRuleDailyComplianceReports;

ReportRuleDailyComplianceReports.builder()
//  .awsCloudtrail(java.lang.Boolean)
//  .awsCloudtrail(IResolvable)
//  .awsCompliance(java.lang.Boolean)
//  .awsCompliance(IResolvable)
//  .azureActivityLog(java.lang.Boolean)
//  .azureActivityLog(IResolvable)
//  .azureCompliance(java.lang.Boolean)
//  .azureCompliance(IResolvable)
//  .gcpAuditTrail(java.lang.Boolean)
//  .gcpAuditTrail(IResolvable)
//  .gcpCompliance(java.lang.Boolean)
//  .gcpCompliance(IResolvable)
//  .hostSecurity(java.lang.Boolean)
//  .hostSecurity(IResolvable)
//  .openshiftCompliance(java.lang.Boolean)
//  .openshiftCompliance(IResolvable)
//  .openshiftComplianceEvents(java.lang.Boolean)
//  .openshiftComplianceEvents(IResolvable)
//  .platform(java.lang.Boolean)
//  .platform(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.property.awsCloudtrail">awsCloudtrail</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#aws_cloudtrail ReportRule#aws_cloudtrail}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.property.awsCompliance">awsCompliance</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#aws_compliance ReportRule#aws_compliance}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.property.azureActivityLog">azureActivityLog</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#azure_activity_log ReportRule#azure_activity_log}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.property.azureCompliance">azureCompliance</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#azure_compliance ReportRule#azure_compliance}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.property.gcpAuditTrail">gcpAuditTrail</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#gcp_audit_trail ReportRule#gcp_audit_trail}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.property.gcpCompliance">gcpCompliance</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#gcp_compliance ReportRule#gcp_compliance}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.property.hostSecurity">hostSecurity</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#host_security ReportRule#host_security}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.property.openshiftCompliance">openshiftCompliance</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#openshift_compliance ReportRule#openshift_compliance}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.property.openshiftComplianceEvents">openshiftComplianceEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#openshift_compliance_events ReportRule#openshift_compliance_events}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.property.platform">platform</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#platform ReportRule#platform}. |

---

##### `awsCloudtrail`<sup>Optional</sup> <a name="awsCloudtrail" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.property.awsCloudtrail"></a>

```java
public java.lang.Object getAwsCloudtrail();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#aws_cloudtrail ReportRule#aws_cloudtrail}.

---

##### `awsCompliance`<sup>Optional</sup> <a name="awsCompliance" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.property.awsCompliance"></a>

```java
public java.lang.Object getAwsCompliance();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#aws_compliance ReportRule#aws_compliance}.

---

##### `azureActivityLog`<sup>Optional</sup> <a name="azureActivityLog" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.property.azureActivityLog"></a>

```java
public java.lang.Object getAzureActivityLog();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#azure_activity_log ReportRule#azure_activity_log}.

---

##### `azureCompliance`<sup>Optional</sup> <a name="azureCompliance" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.property.azureCompliance"></a>

```java
public java.lang.Object getAzureCompliance();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#azure_compliance ReportRule#azure_compliance}.

---

##### `gcpAuditTrail`<sup>Optional</sup> <a name="gcpAuditTrail" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.property.gcpAuditTrail"></a>

```java
public java.lang.Object getGcpAuditTrail();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#gcp_audit_trail ReportRule#gcp_audit_trail}.

---

##### `gcpCompliance`<sup>Optional</sup> <a name="gcpCompliance" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.property.gcpCompliance"></a>

```java
public java.lang.Object getGcpCompliance();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#gcp_compliance ReportRule#gcp_compliance}.

---

##### `hostSecurity`<sup>Optional</sup> <a name="hostSecurity" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.property.hostSecurity"></a>

```java
public java.lang.Object getHostSecurity();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#host_security ReportRule#host_security}.

---

##### `openshiftCompliance`<sup>Optional</sup> <a name="openshiftCompliance" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.property.openshiftCompliance"></a>

```java
public java.lang.Object getOpenshiftCompliance();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#openshift_compliance ReportRule#openshift_compliance}.

---

##### `openshiftComplianceEvents`<sup>Optional</sup> <a name="openshiftComplianceEvents" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.property.openshiftComplianceEvents"></a>

```java
public java.lang.Object getOpenshiftComplianceEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#openshift_compliance_events ReportRule#openshift_compliance_events}.

---

##### `platform`<sup>Optional</sup> <a name="platform" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports.property.platform"></a>

```java
public java.lang.Object getPlatform();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#platform ReportRule#platform}.

---

### ReportRuleGcpComplianceReports <a name="ReportRuleGcpComplianceReports" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.lacework.report_rule.ReportRuleGcpComplianceReports;

ReportRuleGcpComplianceReports.builder()
//  .cis(java.lang.Boolean)
//  .cis(IResolvable)
//  .cis12(java.lang.Boolean)
//  .cis12(IResolvable)
//  .hipaa(java.lang.Boolean)
//  .hipaa(IResolvable)
//  .hipaaRev2(java.lang.Boolean)
//  .hipaaRev2(IResolvable)
//  .iso27001(java.lang.Boolean)
//  .iso27001(IResolvable)
//  .k8S(java.lang.Boolean)
//  .k8S(IResolvable)
//  .pci(java.lang.Boolean)
//  .pci(IResolvable)
//  .pciRev2(java.lang.Boolean)
//  .pciRev2(IResolvable)
//  .soc(java.lang.Boolean)
//  .soc(IResolvable)
//  .socRev2(java.lang.Boolean)
//  .socRev2(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.property.cis">cis</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#cis ReportRule#cis}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.property.cis12">cis12</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#cis_12 ReportRule#cis_12}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.property.hipaa">hipaa</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#hipaa ReportRule#hipaa}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.property.hipaaRev2">hipaaRev2</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#hipaa_rev2 ReportRule#hipaa_rev2}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.property.iso27001">iso27001</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#iso_27001 ReportRule#iso_27001}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.property.k8S">k8S</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#k8s ReportRule#k8s}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.property.pci">pci</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#pci ReportRule#pci}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.property.pciRev2">pciRev2</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#pci_rev2 ReportRule#pci_rev2}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.property.soc">soc</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#soc ReportRule#soc}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.property.socRev2">socRev2</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#soc_rev2 ReportRule#soc_rev2}. |

---

##### `cis`<sup>Optional</sup> <a name="cis" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.property.cis"></a>

```java
public java.lang.Object getCis();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#cis ReportRule#cis}.

---

##### `cis12`<sup>Optional</sup> <a name="cis12" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.property.cis12"></a>

```java
public java.lang.Object getCis12();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#cis_12 ReportRule#cis_12}.

---

##### `hipaa`<sup>Optional</sup> <a name="hipaa" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.property.hipaa"></a>

```java
public java.lang.Object getHipaa();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#hipaa ReportRule#hipaa}.

---

##### `hipaaRev2`<sup>Optional</sup> <a name="hipaaRev2" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.property.hipaaRev2"></a>

```java
public java.lang.Object getHipaaRev2();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#hipaa_rev2 ReportRule#hipaa_rev2}.

---

##### `iso27001`<sup>Optional</sup> <a name="iso27001" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.property.iso27001"></a>

```java
public java.lang.Object getIso27001();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#iso_27001 ReportRule#iso_27001}.

---

##### `k8S`<sup>Optional</sup> <a name="k8S" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.property.k8S"></a>

```java
public java.lang.Object getK8S();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#k8s ReportRule#k8s}.

---

##### `pci`<sup>Optional</sup> <a name="pci" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.property.pci"></a>

```java
public java.lang.Object getPci();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#pci ReportRule#pci}.

---

##### `pciRev2`<sup>Optional</sup> <a name="pciRev2" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.property.pciRev2"></a>

```java
public java.lang.Object getPciRev2();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#pci_rev2 ReportRule#pci_rev2}.

---

##### `soc`<sup>Optional</sup> <a name="soc" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.property.soc"></a>

```java
public java.lang.Object getSoc();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#soc ReportRule#soc}.

---

##### `socRev2`<sup>Optional</sup> <a name="socRev2" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports.property.socRev2"></a>

```java
public java.lang.Object getSocRev2();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/report_rule#soc_rev2 ReportRule#soc_rev2}.

---

## Classes <a name="Classes" id="Classes"></a>

### ReportRuleAwsComplianceReportsOutputReference <a name="ReportRuleAwsComplianceReportsOutputReference" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.lacework.report_rule.ReportRuleAwsComplianceReportsOutputReference;

new ReportRuleAwsComplianceReportsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.resetCisS3">resetCisS3</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.resetHipaa">resetHipaa</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.resetIso2700">resetIso2700</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.resetNist800171Rev2">resetNist800171Rev2</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.resetNist80053Rev4">resetNist80053Rev4</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.resetPci">resetPci</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.resetSoc">resetSoc</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.resetSocRev2">resetSocRev2</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCisS3` <a name="resetCisS3" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.resetCisS3"></a>

```java
public void resetCisS3()
```

##### `resetHipaa` <a name="resetHipaa" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.resetHipaa"></a>

```java
public void resetHipaa()
```

##### `resetIso2700` <a name="resetIso2700" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.resetIso2700"></a>

```java
public void resetIso2700()
```

##### `resetNist800171Rev2` <a name="resetNist800171Rev2" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.resetNist800171Rev2"></a>

```java
public void resetNist800171Rev2()
```

##### `resetNist80053Rev4` <a name="resetNist80053Rev4" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.resetNist80053Rev4"></a>

```java
public void resetNist80053Rev4()
```

##### `resetPci` <a name="resetPci" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.resetPci"></a>

```java
public void resetPci()
```

##### `resetSoc` <a name="resetSoc" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.resetSoc"></a>

```java
public void resetSoc()
```

##### `resetSocRev2` <a name="resetSocRev2" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.resetSocRev2"></a>

```java
public void resetSocRev2()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.cisS3Input">cisS3Input</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.hipaaInput">hipaaInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.iso2700Input">iso2700Input</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.nist800171Rev2Input">nist800171Rev2Input</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.nist80053Rev4Input">nist80053Rev4Input</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.pciInput">pciInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.socInput">socInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.socRev2Input">socRev2Input</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.cisS3">cisS3</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.hipaa">hipaa</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.iso2700">iso2700</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.nist800171Rev2">nist800171Rev2</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.nist80053Rev4">nist80053Rev4</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.pci">pci</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.soc">soc</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.socRev2">socRev2</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports">ReportRuleAwsComplianceReports</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cisS3Input`<sup>Optional</sup> <a name="cisS3Input" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.cisS3Input"></a>

```java
public java.lang.Object getCisS3Input();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hipaaInput`<sup>Optional</sup> <a name="hipaaInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.hipaaInput"></a>

```java
public java.lang.Object getHipaaInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `iso2700Input`<sup>Optional</sup> <a name="iso2700Input" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.iso2700Input"></a>

```java
public java.lang.Object getIso2700Input();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nist800171Rev2Input`<sup>Optional</sup> <a name="nist800171Rev2Input" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.nist800171Rev2Input"></a>

```java
public java.lang.Object getNist800171Rev2Input();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nist80053Rev4Input`<sup>Optional</sup> <a name="nist80053Rev4Input" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.nist80053Rev4Input"></a>

```java
public java.lang.Object getNist80053Rev4Input();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `pciInput`<sup>Optional</sup> <a name="pciInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.pciInput"></a>

```java
public java.lang.Object getPciInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `socInput`<sup>Optional</sup> <a name="socInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.socInput"></a>

```java
public java.lang.Object getSocInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `socRev2Input`<sup>Optional</sup> <a name="socRev2Input" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.socRev2Input"></a>

```java
public java.lang.Object getSocRev2Input();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `cisS3`<sup>Required</sup> <a name="cisS3" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.cisS3"></a>

```java
public java.lang.Object getCisS3();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hipaa`<sup>Required</sup> <a name="hipaa" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.hipaa"></a>

```java
public java.lang.Object getHipaa();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `iso2700`<sup>Required</sup> <a name="iso2700" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.iso2700"></a>

```java
public java.lang.Object getIso2700();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nist800171Rev2`<sup>Required</sup> <a name="nist800171Rev2" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.nist800171Rev2"></a>

```java
public java.lang.Object getNist800171Rev2();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nist80053Rev4`<sup>Required</sup> <a name="nist80053Rev4" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.nist80053Rev4"></a>

```java
public java.lang.Object getNist80053Rev4();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `pci`<sup>Required</sup> <a name="pci" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.pci"></a>

```java
public java.lang.Object getPci();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `soc`<sup>Required</sup> <a name="soc" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.soc"></a>

```java
public java.lang.Object getSoc();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `socRev2`<sup>Required</sup> <a name="socRev2" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.socRev2"></a>

```java
public java.lang.Object getSocRev2();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReportsOutputReference.property.internalValue"></a>

```java
public ReportRuleAwsComplianceReports getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAwsComplianceReports">ReportRuleAwsComplianceReports</a>

---


### ReportRuleAzureComplianceReportsOutputReference <a name="ReportRuleAzureComplianceReportsOutputReference" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.lacework.report_rule.ReportRuleAzureComplianceReportsOutputReference;

new ReportRuleAzureComplianceReportsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.resetCis">resetCis</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.resetCis131">resetCis131</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.resetPci">resetPci</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.resetSoc">resetSoc</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCis` <a name="resetCis" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.resetCis"></a>

```java
public void resetCis()
```

##### `resetCis131` <a name="resetCis131" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.resetCis131"></a>

```java
public void resetCis131()
```

##### `resetPci` <a name="resetPci" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.resetPci"></a>

```java
public void resetPci()
```

##### `resetSoc` <a name="resetSoc" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.resetSoc"></a>

```java
public void resetSoc()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.cis131Input">cis131Input</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.cisInput">cisInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.pciInput">pciInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.socInput">socInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.cis">cis</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.cis131">cis131</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.pci">pci</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.soc">soc</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReports">ReportRuleAzureComplianceReports</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cis131Input`<sup>Optional</sup> <a name="cis131Input" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.cis131Input"></a>

```java
public java.lang.Object getCis131Input();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `cisInput`<sup>Optional</sup> <a name="cisInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.cisInput"></a>

```java
public java.lang.Object getCisInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `pciInput`<sup>Optional</sup> <a name="pciInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.pciInput"></a>

```java
public java.lang.Object getPciInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `socInput`<sup>Optional</sup> <a name="socInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.socInput"></a>

```java
public java.lang.Object getSocInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `cis`<sup>Required</sup> <a name="cis" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.cis"></a>

```java
public java.lang.Object getCis();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `cis131`<sup>Required</sup> <a name="cis131" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.cis131"></a>

```java
public java.lang.Object getCis131();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `pci`<sup>Required</sup> <a name="pci" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.pci"></a>

```java
public java.lang.Object getPci();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `soc`<sup>Required</sup> <a name="soc" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.soc"></a>

```java
public java.lang.Object getSoc();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReportsOutputReference.property.internalValue"></a>

```java
public ReportRuleAzureComplianceReports getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleAzureComplianceReports">ReportRuleAzureComplianceReports</a>

---


### ReportRuleDailyComplianceReportsOutputReference <a name="ReportRuleDailyComplianceReportsOutputReference" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.lacework.report_rule.ReportRuleDailyComplianceReportsOutputReference;

new ReportRuleDailyComplianceReportsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resetAwsCloudtrail">resetAwsCloudtrail</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resetAwsCompliance">resetAwsCompliance</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resetAzureActivityLog">resetAzureActivityLog</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resetAzureCompliance">resetAzureCompliance</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resetGcpAuditTrail">resetGcpAuditTrail</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resetGcpCompliance">resetGcpCompliance</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resetHostSecurity">resetHostSecurity</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resetOpenshiftCompliance">resetOpenshiftCompliance</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resetOpenshiftComplianceEvents">resetOpenshiftComplianceEvents</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resetPlatform">resetPlatform</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAwsCloudtrail` <a name="resetAwsCloudtrail" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resetAwsCloudtrail"></a>

```java
public void resetAwsCloudtrail()
```

##### `resetAwsCompliance` <a name="resetAwsCompliance" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resetAwsCompliance"></a>

```java
public void resetAwsCompliance()
```

##### `resetAzureActivityLog` <a name="resetAzureActivityLog" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resetAzureActivityLog"></a>

```java
public void resetAzureActivityLog()
```

##### `resetAzureCompliance` <a name="resetAzureCompliance" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resetAzureCompliance"></a>

```java
public void resetAzureCompliance()
```

##### `resetGcpAuditTrail` <a name="resetGcpAuditTrail" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resetGcpAuditTrail"></a>

```java
public void resetGcpAuditTrail()
```

##### `resetGcpCompliance` <a name="resetGcpCompliance" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resetGcpCompliance"></a>

```java
public void resetGcpCompliance()
```

##### `resetHostSecurity` <a name="resetHostSecurity" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resetHostSecurity"></a>

```java
public void resetHostSecurity()
```

##### `resetOpenshiftCompliance` <a name="resetOpenshiftCompliance" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resetOpenshiftCompliance"></a>

```java
public void resetOpenshiftCompliance()
```

##### `resetOpenshiftComplianceEvents` <a name="resetOpenshiftComplianceEvents" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resetOpenshiftComplianceEvents"></a>

```java
public void resetOpenshiftComplianceEvents()
```

##### `resetPlatform` <a name="resetPlatform" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.resetPlatform"></a>

```java
public void resetPlatform()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.awsCloudtrailInput">awsCloudtrailInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.awsComplianceInput">awsComplianceInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.azureActivityLogInput">azureActivityLogInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.azureComplianceInput">azureComplianceInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.gcpAuditTrailInput">gcpAuditTrailInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.gcpComplianceInput">gcpComplianceInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.hostSecurityInput">hostSecurityInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.openshiftComplianceEventsInput">openshiftComplianceEventsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.openshiftComplianceInput">openshiftComplianceInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.platformInput">platformInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.awsCloudtrail">awsCloudtrail</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.awsCompliance">awsCompliance</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.azureActivityLog">azureActivityLog</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.azureCompliance">azureCompliance</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.gcpAuditTrail">gcpAuditTrail</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.gcpCompliance">gcpCompliance</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.hostSecurity">hostSecurity</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.openshiftCompliance">openshiftCompliance</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.openshiftComplianceEvents">openshiftComplianceEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.platform">platform</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports">ReportRuleDailyComplianceReports</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `awsCloudtrailInput`<sup>Optional</sup> <a name="awsCloudtrailInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.awsCloudtrailInput"></a>

```java
public java.lang.Object getAwsCloudtrailInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `awsComplianceInput`<sup>Optional</sup> <a name="awsComplianceInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.awsComplianceInput"></a>

```java
public java.lang.Object getAwsComplianceInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `azureActivityLogInput`<sup>Optional</sup> <a name="azureActivityLogInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.azureActivityLogInput"></a>

```java
public java.lang.Object getAzureActivityLogInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `azureComplianceInput`<sup>Optional</sup> <a name="azureComplianceInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.azureComplianceInput"></a>

```java
public java.lang.Object getAzureComplianceInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `gcpAuditTrailInput`<sup>Optional</sup> <a name="gcpAuditTrailInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.gcpAuditTrailInput"></a>

```java
public java.lang.Object getGcpAuditTrailInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `gcpComplianceInput`<sup>Optional</sup> <a name="gcpComplianceInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.gcpComplianceInput"></a>

```java
public java.lang.Object getGcpComplianceInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hostSecurityInput`<sup>Optional</sup> <a name="hostSecurityInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.hostSecurityInput"></a>

```java
public java.lang.Object getHostSecurityInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `openshiftComplianceEventsInput`<sup>Optional</sup> <a name="openshiftComplianceEventsInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.openshiftComplianceEventsInput"></a>

```java
public java.lang.Object getOpenshiftComplianceEventsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `openshiftComplianceInput`<sup>Optional</sup> <a name="openshiftComplianceInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.openshiftComplianceInput"></a>

```java
public java.lang.Object getOpenshiftComplianceInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `platformInput`<sup>Optional</sup> <a name="platformInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.platformInput"></a>

```java
public java.lang.Object getPlatformInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `awsCloudtrail`<sup>Required</sup> <a name="awsCloudtrail" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.awsCloudtrail"></a>

```java
public java.lang.Object getAwsCloudtrail();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `awsCompliance`<sup>Required</sup> <a name="awsCompliance" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.awsCompliance"></a>

```java
public java.lang.Object getAwsCompliance();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `azureActivityLog`<sup>Required</sup> <a name="azureActivityLog" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.azureActivityLog"></a>

```java
public java.lang.Object getAzureActivityLog();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `azureCompliance`<sup>Required</sup> <a name="azureCompliance" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.azureCompliance"></a>

```java
public java.lang.Object getAzureCompliance();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `gcpAuditTrail`<sup>Required</sup> <a name="gcpAuditTrail" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.gcpAuditTrail"></a>

```java
public java.lang.Object getGcpAuditTrail();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `gcpCompliance`<sup>Required</sup> <a name="gcpCompliance" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.gcpCompliance"></a>

```java
public java.lang.Object getGcpCompliance();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hostSecurity`<sup>Required</sup> <a name="hostSecurity" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.hostSecurity"></a>

```java
public java.lang.Object getHostSecurity();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `openshiftCompliance`<sup>Required</sup> <a name="openshiftCompliance" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.openshiftCompliance"></a>

```java
public java.lang.Object getOpenshiftCompliance();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `openshiftComplianceEvents`<sup>Required</sup> <a name="openshiftComplianceEvents" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.openshiftComplianceEvents"></a>

```java
public java.lang.Object getOpenshiftComplianceEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `platform`<sup>Required</sup> <a name="platform" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.platform"></a>

```java
public java.lang.Object getPlatform();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReportsOutputReference.property.internalValue"></a>

```java
public ReportRuleDailyComplianceReports getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleDailyComplianceReports">ReportRuleDailyComplianceReports</a>

---


### ReportRuleGcpComplianceReportsOutputReference <a name="ReportRuleGcpComplianceReportsOutputReference" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.lacework.report_rule.ReportRuleGcpComplianceReportsOutputReference;

new ReportRuleGcpComplianceReportsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resetCis">resetCis</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resetCis12">resetCis12</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resetHipaa">resetHipaa</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resetHipaaRev2">resetHipaaRev2</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resetIso27001">resetIso27001</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resetK8S">resetK8S</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resetPci">resetPci</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resetPciRev2">resetPciRev2</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resetSoc">resetSoc</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resetSocRev2">resetSocRev2</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCis` <a name="resetCis" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resetCis"></a>

```java
public void resetCis()
```

##### `resetCis12` <a name="resetCis12" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resetCis12"></a>

```java
public void resetCis12()
```

##### `resetHipaa` <a name="resetHipaa" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resetHipaa"></a>

```java
public void resetHipaa()
```

##### `resetHipaaRev2` <a name="resetHipaaRev2" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resetHipaaRev2"></a>

```java
public void resetHipaaRev2()
```

##### `resetIso27001` <a name="resetIso27001" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resetIso27001"></a>

```java
public void resetIso27001()
```

##### `resetK8S` <a name="resetK8S" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resetK8S"></a>

```java
public void resetK8S()
```

##### `resetPci` <a name="resetPci" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resetPci"></a>

```java
public void resetPci()
```

##### `resetPciRev2` <a name="resetPciRev2" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resetPciRev2"></a>

```java
public void resetPciRev2()
```

##### `resetSoc` <a name="resetSoc" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resetSoc"></a>

```java
public void resetSoc()
```

##### `resetSocRev2` <a name="resetSocRev2" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.resetSocRev2"></a>

```java
public void resetSocRev2()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.cis12Input">cis12Input</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.cisInput">cisInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.hipaaInput">hipaaInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.hipaaRev2Input">hipaaRev2Input</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.iso27001Input">iso27001Input</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.k8SInput">k8SInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.pciInput">pciInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.pciRev2Input">pciRev2Input</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.socInput">socInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.socRev2Input">socRev2Input</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.cis">cis</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.cis12">cis12</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.hipaa">hipaa</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.hipaaRev2">hipaaRev2</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.iso27001">iso27001</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.k8S">k8S</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.pci">pci</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.pciRev2">pciRev2</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.soc">soc</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.socRev2">socRev2</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports">ReportRuleGcpComplianceReports</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cis12Input`<sup>Optional</sup> <a name="cis12Input" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.cis12Input"></a>

```java
public java.lang.Object getCis12Input();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `cisInput`<sup>Optional</sup> <a name="cisInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.cisInput"></a>

```java
public java.lang.Object getCisInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hipaaInput`<sup>Optional</sup> <a name="hipaaInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.hipaaInput"></a>

```java
public java.lang.Object getHipaaInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hipaaRev2Input`<sup>Optional</sup> <a name="hipaaRev2Input" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.hipaaRev2Input"></a>

```java
public java.lang.Object getHipaaRev2Input();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `iso27001Input`<sup>Optional</sup> <a name="iso27001Input" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.iso27001Input"></a>

```java
public java.lang.Object getIso27001Input();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `k8SInput`<sup>Optional</sup> <a name="k8SInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.k8SInput"></a>

```java
public java.lang.Object getK8SInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `pciInput`<sup>Optional</sup> <a name="pciInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.pciInput"></a>

```java
public java.lang.Object getPciInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `pciRev2Input`<sup>Optional</sup> <a name="pciRev2Input" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.pciRev2Input"></a>

```java
public java.lang.Object getPciRev2Input();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `socInput`<sup>Optional</sup> <a name="socInput" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.socInput"></a>

```java
public java.lang.Object getSocInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `socRev2Input`<sup>Optional</sup> <a name="socRev2Input" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.socRev2Input"></a>

```java
public java.lang.Object getSocRev2Input();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `cis`<sup>Required</sup> <a name="cis" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.cis"></a>

```java
public java.lang.Object getCis();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `cis12`<sup>Required</sup> <a name="cis12" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.cis12"></a>

```java
public java.lang.Object getCis12();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hipaa`<sup>Required</sup> <a name="hipaa" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.hipaa"></a>

```java
public java.lang.Object getHipaa();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hipaaRev2`<sup>Required</sup> <a name="hipaaRev2" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.hipaaRev2"></a>

```java
public java.lang.Object getHipaaRev2();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `iso27001`<sup>Required</sup> <a name="iso27001" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.iso27001"></a>

```java
public java.lang.Object getIso27001();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `k8S`<sup>Required</sup> <a name="k8S" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.k8S"></a>

```java
public java.lang.Object getK8S();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `pci`<sup>Required</sup> <a name="pci" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.pci"></a>

```java
public java.lang.Object getPci();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `pciRev2`<sup>Required</sup> <a name="pciRev2" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.pciRev2"></a>

```java
public java.lang.Object getPciRev2();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `soc`<sup>Required</sup> <a name="soc" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.soc"></a>

```java
public java.lang.Object getSoc();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `socRev2`<sup>Required</sup> <a name="socRev2" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.socRev2"></a>

```java
public java.lang.Object getSocRev2();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReportsOutputReference.property.internalValue"></a>

```java
public ReportRuleGcpComplianceReports getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.reportRule.ReportRuleGcpComplianceReports">ReportRuleGcpComplianceReports</a>

---



