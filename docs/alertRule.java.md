# `lacework_alert_rule`

Refer to the Terraform Registory for docs: [`lacework_alert_rule`](https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_rule).

# `alertRule` Submodule <a name="`alertRule` Submodule" id="rhizo-co-terraform-provider-lacework.alertRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AlertRule <a name="AlertRule" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule"></a>

Represents a {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_rule lacework_alert_rule}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.lacework.alert_rule.AlertRule;

AlertRule.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
    .severities(java.util.List<java.lang.String>)
//  .alertCategories(java.util.List<java.lang.String>)
//  .alertChannels(java.util.List<java.lang.String>)
//  .alertSources(java.util.List<java.lang.String>)
//  .alertSubcategories(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .eventCategories(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .resourceGroups(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the alert rule. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.Initializer.parameter.severities">severities</a></code> | <code>java.util.List<java.lang.String></code> | List of severities for the alert rule. Valid severities are: Critical, High, Medium, Low, Info. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.Initializer.parameter.alertCategories">alertCategories</a></code> | <code>java.util.List<java.lang.String></code> | List of alert categories for the alert rule. Valid categories are: Anomaly, Policy, Composite. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.Initializer.parameter.alertChannels">alertChannels</a></code> | <code>java.util.List<java.lang.String></code> | List of alert channels for the alert rule. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.Initializer.parameter.alertSources">alertSources</a></code> | <code>java.util.List<java.lang.String></code> | List of alert sources for the alert rule. Valid sources are: Agent, Aws, Azure, Gcp, K8s. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.Initializer.parameter.alertSubcategories">alertSubcategories</a></code> | <code>java.util.List<java.lang.String></code> | List of alert subcategories for the alert rule. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the alert rule. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The state of the alert rule. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.Initializer.parameter.eventCategories">eventCategories</a></code> | <code>java.util.List<java.lang.String></code> | List of event categories for the alert rule. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_rule#id AlertRule#id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.Initializer.parameter.resourceGroups">resourceGroups</a></code> | <code>java.util.List<java.lang.String></code> | List of resource groups for the alert rule. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the alert rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_rule#name AlertRule#name}

---

##### `severities`<sup>Required</sup> <a name="severities" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.Initializer.parameter.severities"></a>

- *Type:* java.util.List<java.lang.String>

List of severities for the alert rule. Valid severities are: Critical, High, Medium, Low, Info.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_rule#severities AlertRule#severities}

---

##### `alertCategories`<sup>Optional</sup> <a name="alertCategories" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.Initializer.parameter.alertCategories"></a>

- *Type:* java.util.List<java.lang.String>

List of alert categories for the alert rule. Valid categories are: Anomaly, Policy, Composite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_rule#alert_categories AlertRule#alert_categories}

---

##### `alertChannels`<sup>Optional</sup> <a name="alertChannels" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.Initializer.parameter.alertChannels"></a>

- *Type:* java.util.List<java.lang.String>

List of alert channels for the alert rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_rule#alert_channels AlertRule#alert_channels}

---

##### `alertSources`<sup>Optional</sup> <a name="alertSources" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.Initializer.parameter.alertSources"></a>

- *Type:* java.util.List<java.lang.String>

List of alert sources for the alert rule. Valid sources are: Agent, Aws, Azure, Gcp, K8s.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_rule#alert_sources AlertRule#alert_sources}

---

##### `alertSubcategories`<sup>Optional</sup> <a name="alertSubcategories" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.Initializer.parameter.alertSubcategories"></a>

- *Type:* java.util.List<java.lang.String>

List of alert subcategories for the alert rule.

Valid categories are: Compliance, App, Cloud, File, Machine, User, Platform, K8sActivity, Registry, SystemCall

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_rule#alert_subcategories AlertRule#alert_subcategories}

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the alert rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_rule#description AlertRule#description}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The state of the alert rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_rule#enabled AlertRule#enabled}

---

##### `eventCategories`<sup>Optional</sup> <a name="eventCategories" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.Initializer.parameter.eventCategories"></a>

- *Type:* java.util.List<java.lang.String>

List of event categories for the alert rule.

Valid categories are: Compliance, App, Cloud, File, Machine, User, Platform, K8sActivity, Registry, SystemCall

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_rule#event_categories AlertRule#event_categories}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_rule#id AlertRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resourceGroups`<sup>Optional</sup> <a name="resourceGroups" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.Initializer.parameter.resourceGroups"></a>

- *Type:* java.util.List<java.lang.String>

List of resource groups for the alert rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_rule#resource_groups AlertRule#resource_groups}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.resetAlertCategories">resetAlertCategories</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.resetAlertChannels">resetAlertChannels</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.resetAlertSources">resetAlertSources</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.resetAlertSubcategories">resetAlertSubcategories</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.resetEventCategories">resetEventCategories</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.resetResourceGroups">resetResourceGroups</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetAlertCategories` <a name="resetAlertCategories" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.resetAlertCategories"></a>

```java
public void resetAlertCategories()
```

##### `resetAlertChannels` <a name="resetAlertChannels" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.resetAlertChannels"></a>

```java
public void resetAlertChannels()
```

##### `resetAlertSources` <a name="resetAlertSources" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.resetAlertSources"></a>

```java
public void resetAlertSources()
```

##### `resetAlertSubcategories` <a name="resetAlertSubcategories" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.resetAlertSubcategories"></a>

```java
public void resetAlertSubcategories()
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEnabled` <a name="resetEnabled" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetEventCategories` <a name="resetEventCategories" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.resetEventCategories"></a>

```java
public void resetEventCategories()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.resetId"></a>

```java
public void resetId()
```

##### `resetResourceGroups` <a name="resetResourceGroups" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.resetResourceGroups"></a>

```java
public void resetResourceGroups()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.lacework.alert_rule.AlertRule;

AlertRule.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.lacework.alert_rule.AlertRule;

AlertRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.lacework.alert_rule.AlertRule;

AlertRule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.createdOrUpdatedBy">createdOrUpdatedBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.createdOrUpdatedTime">createdOrUpdatedTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.guid">guid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.alertCategoriesInput">alertCategoriesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.alertChannelsInput">alertChannelsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.alertSourcesInput">alertSourcesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.alertSubcategoriesInput">alertSubcategoriesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.eventCategoriesInput">eventCategoriesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.resourceGroupsInput">resourceGroupsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.severitiesInput">severitiesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.alertCategories">alertCategories</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.alertChannels">alertChannels</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.alertSources">alertSources</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.alertSubcategories">alertSubcategories</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.eventCategories">eventCategories</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.resourceGroups">resourceGroups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.severities">severities</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createdOrUpdatedBy`<sup>Required</sup> <a name="createdOrUpdatedBy" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.createdOrUpdatedBy"></a>

```java
public java.lang.String getCreatedOrUpdatedBy();
```

- *Type:* java.lang.String

---

##### `createdOrUpdatedTime`<sup>Required</sup> <a name="createdOrUpdatedTime" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.createdOrUpdatedTime"></a>

```java
public java.lang.String getCreatedOrUpdatedTime();
```

- *Type:* java.lang.String

---

##### `guid`<sup>Required</sup> <a name="guid" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.guid"></a>

```java
public java.lang.String getGuid();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `alertCategoriesInput`<sup>Optional</sup> <a name="alertCategoriesInput" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.alertCategoriesInput"></a>

```java
public java.util.List<java.lang.String> getAlertCategoriesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `alertChannelsInput`<sup>Optional</sup> <a name="alertChannelsInput" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.alertChannelsInput"></a>

```java
public java.util.List<java.lang.String> getAlertChannelsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `alertSourcesInput`<sup>Optional</sup> <a name="alertSourcesInput" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.alertSourcesInput"></a>

```java
public java.util.List<java.lang.String> getAlertSourcesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `alertSubcategoriesInput`<sup>Optional</sup> <a name="alertSubcategoriesInput" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.alertSubcategoriesInput"></a>

```java
public java.util.List<java.lang.String> getAlertSubcategoriesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `eventCategoriesInput`<sup>Optional</sup> <a name="eventCategoriesInput" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.eventCategoriesInput"></a>

```java
public java.util.List<java.lang.String> getEventCategoriesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupsInput`<sup>Optional</sup> <a name="resourceGroupsInput" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.resourceGroupsInput"></a>

```java
public java.util.List<java.lang.String> getResourceGroupsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `severitiesInput`<sup>Optional</sup> <a name="severitiesInput" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.severitiesInput"></a>

```java
public java.util.List<java.lang.String> getSeveritiesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `alertCategories`<sup>Required</sup> <a name="alertCategories" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.alertCategories"></a>

```java
public java.util.List<java.lang.String> getAlertCategories();
```

- *Type:* java.util.List<java.lang.String>

---

##### `alertChannels`<sup>Required</sup> <a name="alertChannels" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.alertChannels"></a>

```java
public java.util.List<java.lang.String> getAlertChannels();
```

- *Type:* java.util.List<java.lang.String>

---

##### `alertSources`<sup>Required</sup> <a name="alertSources" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.alertSources"></a>

```java
public java.util.List<java.lang.String> getAlertSources();
```

- *Type:* java.util.List<java.lang.String>

---

##### `alertSubcategories`<sup>Required</sup> <a name="alertSubcategories" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.alertSubcategories"></a>

```java
public java.util.List<java.lang.String> getAlertSubcategories();
```

- *Type:* java.util.List<java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `eventCategories`<sup>Required</sup> <a name="eventCategories" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.eventCategories"></a>

```java
public java.util.List<java.lang.String> getEventCategories();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroups`<sup>Required</sup> <a name="resourceGroups" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.resourceGroups"></a>

```java
public java.util.List<java.lang.String> getResourceGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `severities`<sup>Required</sup> <a name="severities" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.severities"></a>

```java
public java.util.List<java.lang.String> getSeverities();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AlertRuleConfig <a name="AlertRuleConfig" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRuleConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRuleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.lacework.alert_rule.AlertRuleConfig;

AlertRuleConfig.builder()
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
    .name(java.lang.String)
    .severities(java.util.List<java.lang.String>)
//  .alertCategories(java.util.List<java.lang.String>)
//  .alertChannels(java.util.List<java.lang.String>)
//  .alertSources(java.util.List<java.lang.String>)
//  .alertSubcategories(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .eventCategories(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .resourceGroups(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRuleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRuleConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRuleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRuleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRuleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRuleConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the alert rule. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRuleConfig.property.severities">severities</a></code> | <code>java.util.List<java.lang.String></code> | List of severities for the alert rule. Valid severities are: Critical, High, Medium, Low, Info. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRuleConfig.property.alertCategories">alertCategories</a></code> | <code>java.util.List<java.lang.String></code> | List of alert categories for the alert rule. Valid categories are: Anomaly, Policy, Composite. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRuleConfig.property.alertChannels">alertChannels</a></code> | <code>java.util.List<java.lang.String></code> | List of alert channels for the alert rule. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRuleConfig.property.alertSources">alertSources</a></code> | <code>java.util.List<java.lang.String></code> | List of alert sources for the alert rule. Valid sources are: Agent, Aws, Azure, Gcp, K8s. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRuleConfig.property.alertSubcategories">alertSubcategories</a></code> | <code>java.util.List<java.lang.String></code> | List of alert subcategories for the alert rule. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRuleConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the alert rule. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRuleConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The state of the alert rule. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRuleConfig.property.eventCategories">eventCategories</a></code> | <code>java.util.List<java.lang.String></code> | List of event categories for the alert rule. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRuleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_rule#id AlertRule#id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertRule.AlertRuleConfig.property.resourceGroups">resourceGroups</a></code> | <code>java.util.List<java.lang.String></code> | List of resource groups for the alert rule. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRuleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRuleConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRuleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRuleConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the alert rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_rule#name AlertRule#name}

---

##### `severities`<sup>Required</sup> <a name="severities" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRuleConfig.property.severities"></a>

```java
public java.util.List<java.lang.String> getSeverities();
```

- *Type:* java.util.List<java.lang.String>

List of severities for the alert rule. Valid severities are: Critical, High, Medium, Low, Info.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_rule#severities AlertRule#severities}

---

##### `alertCategories`<sup>Optional</sup> <a name="alertCategories" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRuleConfig.property.alertCategories"></a>

```java
public java.util.List<java.lang.String> getAlertCategories();
```

- *Type:* java.util.List<java.lang.String>

List of alert categories for the alert rule. Valid categories are: Anomaly, Policy, Composite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_rule#alert_categories AlertRule#alert_categories}

---

##### `alertChannels`<sup>Optional</sup> <a name="alertChannels" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRuleConfig.property.alertChannels"></a>

```java
public java.util.List<java.lang.String> getAlertChannels();
```

- *Type:* java.util.List<java.lang.String>

List of alert channels for the alert rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_rule#alert_channels AlertRule#alert_channels}

---

##### `alertSources`<sup>Optional</sup> <a name="alertSources" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRuleConfig.property.alertSources"></a>

```java
public java.util.List<java.lang.String> getAlertSources();
```

- *Type:* java.util.List<java.lang.String>

List of alert sources for the alert rule. Valid sources are: Agent, Aws, Azure, Gcp, K8s.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_rule#alert_sources AlertRule#alert_sources}

---

##### `alertSubcategories`<sup>Optional</sup> <a name="alertSubcategories" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRuleConfig.property.alertSubcategories"></a>

```java
public java.util.List<java.lang.String> getAlertSubcategories();
```

- *Type:* java.util.List<java.lang.String>

List of alert subcategories for the alert rule.

Valid categories are: Compliance, App, Cloud, File, Machine, User, Platform, K8sActivity, Registry, SystemCall

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_rule#alert_subcategories AlertRule#alert_subcategories}

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRuleConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the alert rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_rule#description AlertRule#description}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRuleConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The state of the alert rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_rule#enabled AlertRule#enabled}

---

##### `eventCategories`<sup>Optional</sup> <a name="eventCategories" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRuleConfig.property.eventCategories"></a>

```java
public java.util.List<java.lang.String> getEventCategories();
```

- *Type:* java.util.List<java.lang.String>

List of event categories for the alert rule.

Valid categories are: Compliance, App, Cloud, File, Machine, User, Platform, K8sActivity, Registry, SystemCall

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_rule#event_categories AlertRule#event_categories}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRuleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_rule#id AlertRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resourceGroups`<sup>Optional</sup> <a name="resourceGroups" id="rhizo-co-terraform-provider-lacework.alertRule.AlertRuleConfig.property.resourceGroups"></a>

```java
public java.util.List<java.lang.String> getResourceGroups();
```

- *Type:* java.util.List<java.lang.String>

List of resource groups for the alert rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_rule#resource_groups AlertRule#resource_groups}

---



