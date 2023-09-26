# `lacework_alert_channel_jira_server`

Refer to the Terraform Registory for docs: [`lacework_alert_channel_jira_server`](https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_jira_server).

# `alertChannelJiraServer` Submodule <a name="`alertChannelJiraServer` Submodule" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AlertChannelJiraServer <a name="AlertChannelJiraServer" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer"></a>

Represents a {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_jira_server lacework_alert_channel_jira_server}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.lacework.alert_channel_jira_server.AlertChannelJiraServer;

AlertChannelJiraServer.Builder.create(Construct scope, java.lang.String id)
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
    .issueType(java.lang.String)
    .jiraUrl(java.lang.String)
    .name(java.lang.String)
    .password(java.lang.String)
    .projectKey(java.lang.String)
    .username(java.lang.String)
//  .configuration(java.lang.String)
//  .customTemplateFile(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .groupIssuesBy(java.lang.String)
//  .id(java.lang.String)
//  .testIntegration(java.lang.Boolean)
//  .testIntegration(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.Initializer.parameter.issueType">issueType</a></code> | <code>java.lang.String</code> | The Jira issue type (such as a Bug) to create when a new Jira issue is created. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.Initializer.parameter.jiraUrl">jiraUrl</a></code> | <code>java.lang.String</code> | The URL of your Jira implementation without https protocol. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The alert channel integration name. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.Initializer.parameter.password">password</a></code> | <code>java.lang.String</code> | The password to the Jira user. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.Initializer.parameter.projectKey">projectKey</a></code> | <code>java.lang.String</code> | The project key for the Jira project where the new Jira issues should be created. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.Initializer.parameter.username">username</a></code> | <code>java.lang.String</code> | The Jira user name. Lacework recommends a dedicated Jira user. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.Initializer.parameter.configuration">configuration</a></code> | <code>java.lang.String</code> | Whether the integration is Unidirectional or Bidirectional. Defaults to Unidirectional. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.Initializer.parameter.customTemplateFile">customTemplateFile</a></code> | <code>java.lang.String</code> | A Custom Template JSON file to populate fields in the new Jira issues. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The state of the external integration. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.Initializer.parameter.groupIssuesBy">groupIssuesBy</a></code> | <code>java.lang.String</code> | Defines how Lacework compliance events get grouped. Must be one of Events or Resources. Defaults to Events. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_jira_server#id AlertChannelJiraServer#id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.Initializer.parameter.testIntegration">testIntegration</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to test the integration of an alert channel upon creation and modification. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `issueType`<sup>Required</sup> <a name="issueType" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.Initializer.parameter.issueType"></a>

- *Type:* java.lang.String

The Jira issue type (such as a Bug) to create when a new Jira issue is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_jira_server#issue_type AlertChannelJiraServer#issue_type}

---

##### `jiraUrl`<sup>Required</sup> <a name="jiraUrl" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.Initializer.parameter.jiraUrl"></a>

- *Type:* java.lang.String

The URL of your Jira implementation without https protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_jira_server#jira_url AlertChannelJiraServer#jira_url}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The alert channel integration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_jira_server#name AlertChannelJiraServer#name}

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.Initializer.parameter.password"></a>

- *Type:* java.lang.String

The password to the Jira user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_jira_server#password AlertChannelJiraServer#password}

---

##### `projectKey`<sup>Required</sup> <a name="projectKey" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.Initializer.parameter.projectKey"></a>

- *Type:* java.lang.String

The project key for the Jira project where the new Jira issues should be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_jira_server#project_key AlertChannelJiraServer#project_key}

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.Initializer.parameter.username"></a>

- *Type:* java.lang.String

The Jira user name. Lacework recommends a dedicated Jira user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_jira_server#username AlertChannelJiraServer#username}

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.Initializer.parameter.configuration"></a>

- *Type:* java.lang.String

Whether the integration is Unidirectional or Bidirectional. Defaults to Unidirectional.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_jira_server#configuration AlertChannelJiraServer#configuration}

---

##### `customTemplateFile`<sup>Optional</sup> <a name="customTemplateFile" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.Initializer.parameter.customTemplateFile"></a>

- *Type:* java.lang.String

A Custom Template JSON file to populate fields in the new Jira issues.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_jira_server#custom_template_file AlertChannelJiraServer#custom_template_file}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The state of the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_jira_server#enabled AlertChannelJiraServer#enabled}

---

##### `groupIssuesBy`<sup>Optional</sup> <a name="groupIssuesBy" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.Initializer.parameter.groupIssuesBy"></a>

- *Type:* java.lang.String

Defines how Lacework compliance events get grouped. Must be one of Events or Resources. Defaults to Events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_jira_server#group_issues_by AlertChannelJiraServer#group_issues_by}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_jira_server#id AlertChannelJiraServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `testIntegration`<sup>Optional</sup> <a name="testIntegration" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.Initializer.parameter.testIntegration"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to test the integration of an alert channel upon creation and modification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_jira_server#test_integration AlertChannelJiraServer#test_integration}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.resetConfiguration">resetConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.resetCustomTemplateFile">resetCustomTemplateFile</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.resetGroupIssuesBy">resetGroupIssuesBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.resetTestIntegration">resetTestIntegration</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetConfiguration` <a name="resetConfiguration" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.resetConfiguration"></a>

```java
public void resetConfiguration()
```

##### `resetCustomTemplateFile` <a name="resetCustomTemplateFile" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.resetCustomTemplateFile"></a>

```java
public void resetCustomTemplateFile()
```

##### `resetEnabled` <a name="resetEnabled" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetGroupIssuesBy` <a name="resetGroupIssuesBy" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.resetGroupIssuesBy"></a>

```java
public void resetGroupIssuesBy()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.resetId"></a>

```java
public void resetId()
```

##### `resetTestIntegration` <a name="resetTestIntegration" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.resetTestIntegration"></a>

```java
public void resetTestIntegration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.lacework.alert_channel_jira_server.AlertChannelJiraServer;

AlertChannelJiraServer.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.lacework.alert_channel_jira_server.AlertChannelJiraServer;

AlertChannelJiraServer.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.lacework.alert_channel_jira_server.AlertChannelJiraServer;

AlertChannelJiraServer.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.createdOrUpdatedBy">createdOrUpdatedBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.createdOrUpdatedTime">createdOrUpdatedTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.intgGuid">intgGuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.orgLevel">orgLevel</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.typeName">typeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.configurationInput">configurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.customTemplateFileInput">customTemplateFileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.groupIssuesByInput">groupIssuesByInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.issueTypeInput">issueTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.jiraUrlInput">jiraUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.projectKeyInput">projectKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.testIntegrationInput">testIntegrationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.configuration">configuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.customTemplateFile">customTemplateFile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.groupIssuesBy">groupIssuesBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.issueType">issueType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.jiraUrl">jiraUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.projectKey">projectKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.testIntegration">testIntegration</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createdOrUpdatedBy`<sup>Required</sup> <a name="createdOrUpdatedBy" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.createdOrUpdatedBy"></a>

```java
public java.lang.String getCreatedOrUpdatedBy();
```

- *Type:* java.lang.String

---

##### `createdOrUpdatedTime`<sup>Required</sup> <a name="createdOrUpdatedTime" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.createdOrUpdatedTime"></a>

```java
public java.lang.String getCreatedOrUpdatedTime();
```

- *Type:* java.lang.String

---

##### `intgGuid`<sup>Required</sup> <a name="intgGuid" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.intgGuid"></a>

```java
public java.lang.String getIntgGuid();
```

- *Type:* java.lang.String

---

##### `orgLevel`<sup>Required</sup> <a name="orgLevel" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.orgLevel"></a>

```java
public IResolvable getOrgLevel();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `typeName`<sup>Required</sup> <a name="typeName" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.typeName"></a>

```java
public java.lang.String getTypeName();
```

- *Type:* java.lang.String

---

##### `configurationInput`<sup>Optional</sup> <a name="configurationInput" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.configurationInput"></a>

```java
public java.lang.String getConfigurationInput();
```

- *Type:* java.lang.String

---

##### `customTemplateFileInput`<sup>Optional</sup> <a name="customTemplateFileInput" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.customTemplateFileInput"></a>

```java
public java.lang.String getCustomTemplateFileInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `groupIssuesByInput`<sup>Optional</sup> <a name="groupIssuesByInput" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.groupIssuesByInput"></a>

```java
public java.lang.String getGroupIssuesByInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `issueTypeInput`<sup>Optional</sup> <a name="issueTypeInput" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.issueTypeInput"></a>

```java
public java.lang.String getIssueTypeInput();
```

- *Type:* java.lang.String

---

##### `jiraUrlInput`<sup>Optional</sup> <a name="jiraUrlInput" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.jiraUrlInput"></a>

```java
public java.lang.String getJiraUrlInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `projectKeyInput`<sup>Optional</sup> <a name="projectKeyInput" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.projectKeyInput"></a>

```java
public java.lang.String getProjectKeyInput();
```

- *Type:* java.lang.String

---

##### `testIntegrationInput`<sup>Optional</sup> <a name="testIntegrationInput" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.testIntegrationInput"></a>

```java
public java.lang.Object getTestIntegrationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.configuration"></a>

```java
public java.lang.String getConfiguration();
```

- *Type:* java.lang.String

---

##### `customTemplateFile`<sup>Required</sup> <a name="customTemplateFile" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.customTemplateFile"></a>

```java
public java.lang.String getCustomTemplateFile();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `groupIssuesBy`<sup>Required</sup> <a name="groupIssuesBy" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.groupIssuesBy"></a>

```java
public java.lang.String getGroupIssuesBy();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `issueType`<sup>Required</sup> <a name="issueType" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.issueType"></a>

```java
public java.lang.String getIssueType();
```

- *Type:* java.lang.String

---

##### `jiraUrl`<sup>Required</sup> <a name="jiraUrl" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.jiraUrl"></a>

```java
public java.lang.String getJiraUrl();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `projectKey`<sup>Required</sup> <a name="projectKey" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.projectKey"></a>

```java
public java.lang.String getProjectKey();
```

- *Type:* java.lang.String

---

##### `testIntegration`<sup>Required</sup> <a name="testIntegration" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.testIntegration"></a>

```java
public java.lang.Object getTestIntegration();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServer.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AlertChannelJiraServerConfig <a name="AlertChannelJiraServerConfig" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.lacework.alert_channel_jira_server.AlertChannelJiraServerConfig;

AlertChannelJiraServerConfig.builder()
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
    .issueType(java.lang.String)
    .jiraUrl(java.lang.String)
    .name(java.lang.String)
    .password(java.lang.String)
    .projectKey(java.lang.String)
    .username(java.lang.String)
//  .configuration(java.lang.String)
//  .customTemplateFile(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .groupIssuesBy(java.lang.String)
//  .id(java.lang.String)
//  .testIntegration(java.lang.Boolean)
//  .testIntegration(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.issueType">issueType</a></code> | <code>java.lang.String</code> | The Jira issue type (such as a Bug) to create when a new Jira issue is created. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.jiraUrl">jiraUrl</a></code> | <code>java.lang.String</code> | The URL of your Jira implementation without https protocol. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.name">name</a></code> | <code>java.lang.String</code> | The alert channel integration name. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.password">password</a></code> | <code>java.lang.String</code> | The password to the Jira user. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.projectKey">projectKey</a></code> | <code>java.lang.String</code> | The project key for the Jira project where the new Jira issues should be created. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.username">username</a></code> | <code>java.lang.String</code> | The Jira user name. Lacework recommends a dedicated Jira user. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.configuration">configuration</a></code> | <code>java.lang.String</code> | Whether the integration is Unidirectional or Bidirectional. Defaults to Unidirectional. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.customTemplateFile">customTemplateFile</a></code> | <code>java.lang.String</code> | A Custom Template JSON file to populate fields in the new Jira issues. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The state of the external integration. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.groupIssuesBy">groupIssuesBy</a></code> | <code>java.lang.String</code> | Defines how Lacework compliance events get grouped. Must be one of Events or Resources. Defaults to Events. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_jira_server#id AlertChannelJiraServer#id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.testIntegration">testIntegration</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to test the integration of an alert channel upon creation and modification. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `issueType`<sup>Required</sup> <a name="issueType" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.issueType"></a>

```java
public java.lang.String getIssueType();
```

- *Type:* java.lang.String

The Jira issue type (such as a Bug) to create when a new Jira issue is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_jira_server#issue_type AlertChannelJiraServer#issue_type}

---

##### `jiraUrl`<sup>Required</sup> <a name="jiraUrl" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.jiraUrl"></a>

```java
public java.lang.String getJiraUrl();
```

- *Type:* java.lang.String

The URL of your Jira implementation without https protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_jira_server#jira_url AlertChannelJiraServer#jira_url}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The alert channel integration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_jira_server#name AlertChannelJiraServer#name}

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

The password to the Jira user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_jira_server#password AlertChannelJiraServer#password}

---

##### `projectKey`<sup>Required</sup> <a name="projectKey" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.projectKey"></a>

```java
public java.lang.String getProjectKey();
```

- *Type:* java.lang.String

The project key for the Jira project where the new Jira issues should be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_jira_server#project_key AlertChannelJiraServer#project_key}

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

The Jira user name. Lacework recommends a dedicated Jira user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_jira_server#username AlertChannelJiraServer#username}

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.configuration"></a>

```java
public java.lang.String getConfiguration();
```

- *Type:* java.lang.String

Whether the integration is Unidirectional or Bidirectional. Defaults to Unidirectional.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_jira_server#configuration AlertChannelJiraServer#configuration}

---

##### `customTemplateFile`<sup>Optional</sup> <a name="customTemplateFile" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.customTemplateFile"></a>

```java
public java.lang.String getCustomTemplateFile();
```

- *Type:* java.lang.String

A Custom Template JSON file to populate fields in the new Jira issues.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_jira_server#custom_template_file AlertChannelJiraServer#custom_template_file}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The state of the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_jira_server#enabled AlertChannelJiraServer#enabled}

---

##### `groupIssuesBy`<sup>Optional</sup> <a name="groupIssuesBy" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.groupIssuesBy"></a>

```java
public java.lang.String getGroupIssuesBy();
```

- *Type:* java.lang.String

Defines how Lacework compliance events get grouped. Must be one of Events or Resources. Defaults to Events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_jira_server#group_issues_by AlertChannelJiraServer#group_issues_by}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_jira_server#id AlertChannelJiraServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `testIntegration`<sup>Optional</sup> <a name="testIntegration" id="rhizo-co-terraform-provider-lacework.alertChannelJiraServer.AlertChannelJiraServerConfig.property.testIntegration"></a>

```java
public java.lang.Object getTestIntegration();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to test the integration of an alert channel upon creation and modification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_jira_server#test_integration AlertChannelJiraServer#test_integration}

---



