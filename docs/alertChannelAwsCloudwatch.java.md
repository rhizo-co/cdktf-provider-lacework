# `lacework_alert_channel_aws_cloudwatch`

Refer to the Terraform Registory for docs: [`lacework_alert_channel_aws_cloudwatch`](https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_aws_cloudwatch).

# `alertChannelAwsCloudwatch` Submodule <a name="`alertChannelAwsCloudwatch` Submodule" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AlertChannelAwsCloudwatch <a name="AlertChannelAwsCloudwatch" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch"></a>

Represents a {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_aws_cloudwatch lacework_alert_channel_aws_cloudwatch}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.lacework.alert_channel_aws_cloudwatch.AlertChannelAwsCloudwatch;

AlertChannelAwsCloudwatch.Builder.create(Construct scope, java.lang.String id)
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
    .eventBusArn(java.lang.String)
    .name(java.lang.String)
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
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.Initializer.parameter.eventBusArn">eventBusArn</a></code> | <code>java.lang.String</code> | The ARN of your AWS CloudWatch event bus. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The integration name. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The state of the external integration. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.Initializer.parameter.groupIssuesBy">groupIssuesBy</a></code> | <code>java.lang.String</code> | Defines how Lacework compliance events get grouped. Must be one of Events or Resources. Defaults to Events. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_aws_cloudwatch#id AlertChannelAwsCloudwatch#id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.Initializer.parameter.testIntegration">testIntegration</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to test the integration of an alert channel upon creation and modification. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `eventBusArn`<sup>Required</sup> <a name="eventBusArn" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.Initializer.parameter.eventBusArn"></a>

- *Type:* java.lang.String

The ARN of your AWS CloudWatch event bus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_aws_cloudwatch#event_bus_arn AlertChannelAwsCloudwatch#event_bus_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The integration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_aws_cloudwatch#name AlertChannelAwsCloudwatch#name}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The state of the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_aws_cloudwatch#enabled AlertChannelAwsCloudwatch#enabled}

---

##### `groupIssuesBy`<sup>Optional</sup> <a name="groupIssuesBy" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.Initializer.parameter.groupIssuesBy"></a>

- *Type:* java.lang.String

Defines how Lacework compliance events get grouped. Must be one of Events or Resources. Defaults to Events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_aws_cloudwatch#group_issues_by AlertChannelAwsCloudwatch#group_issues_by}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_aws_cloudwatch#id AlertChannelAwsCloudwatch#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `testIntegration`<sup>Optional</sup> <a name="testIntegration" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.Initializer.parameter.testIntegration"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to test the integration of an alert channel upon creation and modification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_aws_cloudwatch#test_integration AlertChannelAwsCloudwatch#test_integration}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.resetGroupIssuesBy">resetGroupIssuesBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.resetTestIntegration">resetTestIntegration</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetEnabled` <a name="resetEnabled" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetGroupIssuesBy` <a name="resetGroupIssuesBy" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.resetGroupIssuesBy"></a>

```java
public void resetGroupIssuesBy()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.resetId"></a>

```java
public void resetId()
```

##### `resetTestIntegration` <a name="resetTestIntegration" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.resetTestIntegration"></a>

```java
public void resetTestIntegration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.lacework.alert_channel_aws_cloudwatch.AlertChannelAwsCloudwatch;

AlertChannelAwsCloudwatch.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.lacework.alert_channel_aws_cloudwatch.AlertChannelAwsCloudwatch;

AlertChannelAwsCloudwatch.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.lacework.alert_channel_aws_cloudwatch.AlertChannelAwsCloudwatch;

AlertChannelAwsCloudwatch.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.createdOrUpdatedBy">createdOrUpdatedBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.createdOrUpdatedTime">createdOrUpdatedTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.intgGuid">intgGuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.orgLevel">orgLevel</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.typeName">typeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.eventBusArnInput">eventBusArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.groupIssuesByInput">groupIssuesByInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.testIntegrationInput">testIntegrationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.eventBusArn">eventBusArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.groupIssuesBy">groupIssuesBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.testIntegration">testIntegration</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createdOrUpdatedBy`<sup>Required</sup> <a name="createdOrUpdatedBy" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.createdOrUpdatedBy"></a>

```java
public java.lang.String getCreatedOrUpdatedBy();
```

- *Type:* java.lang.String

---

##### `createdOrUpdatedTime`<sup>Required</sup> <a name="createdOrUpdatedTime" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.createdOrUpdatedTime"></a>

```java
public java.lang.String getCreatedOrUpdatedTime();
```

- *Type:* java.lang.String

---

##### `intgGuid`<sup>Required</sup> <a name="intgGuid" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.intgGuid"></a>

```java
public java.lang.String getIntgGuid();
```

- *Type:* java.lang.String

---

##### `orgLevel`<sup>Required</sup> <a name="orgLevel" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.orgLevel"></a>

```java
public IResolvable getOrgLevel();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `typeName`<sup>Required</sup> <a name="typeName" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.typeName"></a>

```java
public java.lang.String getTypeName();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `eventBusArnInput`<sup>Optional</sup> <a name="eventBusArnInput" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.eventBusArnInput"></a>

```java
public java.lang.String getEventBusArnInput();
```

- *Type:* java.lang.String

---

##### `groupIssuesByInput`<sup>Optional</sup> <a name="groupIssuesByInput" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.groupIssuesByInput"></a>

```java
public java.lang.String getGroupIssuesByInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `testIntegrationInput`<sup>Optional</sup> <a name="testIntegrationInput" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.testIntegrationInput"></a>

```java
public java.lang.Object getTestIntegrationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `eventBusArn`<sup>Required</sup> <a name="eventBusArn" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.eventBusArn"></a>

```java
public java.lang.String getEventBusArn();
```

- *Type:* java.lang.String

---

##### `groupIssuesBy`<sup>Required</sup> <a name="groupIssuesBy" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.groupIssuesBy"></a>

```java
public java.lang.String getGroupIssuesBy();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `testIntegration`<sup>Required</sup> <a name="testIntegration" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.testIntegration"></a>

```java
public java.lang.Object getTestIntegration();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatch.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AlertChannelAwsCloudwatchConfig <a name="AlertChannelAwsCloudwatchConfig" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatchConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatchConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.lacework.alert_channel_aws_cloudwatch.AlertChannelAwsCloudwatchConfig;

AlertChannelAwsCloudwatchConfig.builder()
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
    .eventBusArn(java.lang.String)
    .name(java.lang.String)
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
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatchConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatchConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatchConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatchConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatchConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatchConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatchConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatchConfig.property.eventBusArn">eventBusArn</a></code> | <code>java.lang.String</code> | The ARN of your AWS CloudWatch event bus. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatchConfig.property.name">name</a></code> | <code>java.lang.String</code> | The integration name. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatchConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The state of the external integration. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatchConfig.property.groupIssuesBy">groupIssuesBy</a></code> | <code>java.lang.String</code> | Defines how Lacework compliance events get grouped. Must be one of Events or Resources. Defaults to Events. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatchConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_aws_cloudwatch#id AlertChannelAwsCloudwatch#id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatchConfig.property.testIntegration">testIntegration</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to test the integration of an alert channel upon creation and modification. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatchConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatchConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatchConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatchConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatchConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatchConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatchConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `eventBusArn`<sup>Required</sup> <a name="eventBusArn" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatchConfig.property.eventBusArn"></a>

```java
public java.lang.String getEventBusArn();
```

- *Type:* java.lang.String

The ARN of your AWS CloudWatch event bus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_aws_cloudwatch#event_bus_arn AlertChannelAwsCloudwatch#event_bus_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatchConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The integration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_aws_cloudwatch#name AlertChannelAwsCloudwatch#name}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatchConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The state of the external integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_aws_cloudwatch#enabled AlertChannelAwsCloudwatch#enabled}

---

##### `groupIssuesBy`<sup>Optional</sup> <a name="groupIssuesBy" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatchConfig.property.groupIssuesBy"></a>

```java
public java.lang.String getGroupIssuesBy();
```

- *Type:* java.lang.String

Defines how Lacework compliance events get grouped. Must be one of Events or Resources. Defaults to Events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_aws_cloudwatch#group_issues_by AlertChannelAwsCloudwatch#group_issues_by}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatchConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_aws_cloudwatch#id AlertChannelAwsCloudwatch#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `testIntegration`<sup>Optional</sup> <a name="testIntegration" id="rhizo-co-terraform-provider-lacework.alertChannelAwsCloudwatch.AlertChannelAwsCloudwatchConfig.property.testIntegration"></a>

```java
public java.lang.Object getTestIntegration();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to test the integration of an alert channel upon creation and modification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/alert_channel_aws_cloudwatch#test_integration AlertChannelAwsCloudwatch#test_integration}

---



