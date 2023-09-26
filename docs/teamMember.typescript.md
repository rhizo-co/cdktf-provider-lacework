# `lacework_team_member`

Refer to the Terraform Registory for docs: [`lacework_team_member`](https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/team_member).

# `teamMember` Submodule <a name="`teamMember` Submodule" id="rhizo-co-terraform-provider-lacework.teamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TeamMember <a name="TeamMember" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember"></a>

Represents a {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/team_member lacework_team_member}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.Initializer"></a>

```typescript
import { teamMember } from 'rhizo-co-terraform-provider-lacework'

new teamMember.TeamMember(scope: Construct, id: string, config: TeamMemberConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberConfig">TeamMemberConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberConfig">TeamMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.putOrganization">putOrganization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.resetAdministrator">resetAdministrator</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.resetOrganization">resetOrganization</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putOrganization` <a name="putOrganization" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.putOrganization"></a>

```typescript
public putOrganization(value: TeamMemberOrganization): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.putOrganization.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganization">TeamMemberOrganization</a>

---

##### `resetAdministrator` <a name="resetAdministrator" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.resetAdministrator"></a>

```typescript
public resetAdministrator(): void
```

##### `resetEnabled` <a name="resetEnabled" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.resetId"></a>

```typescript
public resetId(): void
```

##### `resetOrganization` <a name="resetOrganization" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.resetOrganization"></a>

```typescript
public resetOrganization(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.isConstruct"></a>

```typescript
import { teamMember } from 'rhizo-co-terraform-provider-lacework'

teamMember.TeamMember.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.isTerraformElement"></a>

```typescript
import { teamMember } from 'rhizo-co-terraform-provider-lacework'

teamMember.TeamMember.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.isTerraformResource"></a>

```typescript
import { teamMember } from 'rhizo-co-terraform-provider-lacework'

teamMember.TeamMember.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.createdTime">createdTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.guid">guid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.organization">organization</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference">TeamMemberOrganizationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.updatedBy">updatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.updatedTime">updatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.administratorInput">administratorInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.companyInput">companyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.emailInput">emailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.firstNameInput">firstNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.lastNameInput">lastNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.organizationInput">organizationInput</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganization">TeamMemberOrganization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.administrator">administrator</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.company">company</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.firstName">firstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.lastName">lastName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createdTime`<sup>Required</sup> <a name="createdTime" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.createdTime"></a>

```typescript
public readonly createdTime: string;
```

- *Type:* string

---

##### `guid`<sup>Required</sup> <a name="guid" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.guid"></a>

```typescript
public readonly guid: string;
```

- *Type:* string

---

##### `organization`<sup>Required</sup> <a name="organization" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.organization"></a>

```typescript
public readonly organization: TeamMemberOrganizationOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference">TeamMemberOrganizationOutputReference</a>

---

##### `updatedBy`<sup>Required</sup> <a name="updatedBy" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.updatedBy"></a>

```typescript
public readonly updatedBy: string;
```

- *Type:* string

---

##### `updatedTime`<sup>Required</sup> <a name="updatedTime" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.updatedTime"></a>

```typescript
public readonly updatedTime: string;
```

- *Type:* string

---

##### `administratorInput`<sup>Optional</sup> <a name="administratorInput" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.administratorInput"></a>

```typescript
public readonly administratorInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `companyInput`<sup>Optional</sup> <a name="companyInput" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.companyInput"></a>

```typescript
public readonly companyInput: string;
```

- *Type:* string

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.emailInput"></a>

```typescript
public readonly emailInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `firstNameInput`<sup>Optional</sup> <a name="firstNameInput" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.firstNameInput"></a>

```typescript
public readonly firstNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `lastNameInput`<sup>Optional</sup> <a name="lastNameInput" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.lastNameInput"></a>

```typescript
public readonly lastNameInput: string;
```

- *Type:* string

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.organizationInput"></a>

```typescript
public readonly organizationInput: TeamMemberOrganization;
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganization">TeamMemberOrganization</a>

---

##### `administrator`<sup>Required</sup> <a name="administrator" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.administrator"></a>

```typescript
public readonly administrator: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `company`<sup>Required</sup> <a name="company" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.company"></a>

```typescript
public readonly company: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.firstName"></a>

```typescript
public readonly firstName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.lastName"></a>

```typescript
public readonly lastName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMember.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TeamMemberConfig <a name="TeamMemberConfig" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberConfig.Initializer"></a>

```typescript
import { teamMember } from 'rhizo-co-terraform-provider-lacework'

const teamMemberConfig: teamMember.TeamMemberConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberConfig.property.company">company</a></code> | <code>string</code> | The company name. |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberConfig.property.email">email</a></code> | <code>string</code> | The email for the team member which will also be used as the username. |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberConfig.property.firstName">firstName</a></code> | <code>string</code> | The first name of the team member. |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberConfig.property.lastName">lastName</a></code> | <code>string</code> | The last name of the team member. |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberConfig.property.administrator">administrator</a></code> | <code>boolean \| cdktf.IResolvable</code> | Set to true to make the team member an administrator, otherwise the member will be a regular user. |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | The state of the team member, whether they are enabled or not. |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/team_member#id TeamMember#id}. |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberConfig.property.organization">organization</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganization">TeamMemberOrganization</a></code> | organization block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `company`<sup>Required</sup> <a name="company" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberConfig.property.company"></a>

```typescript
public readonly company: string;
```

- *Type:* string

The company name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/team_member#company TeamMember#company}

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberConfig.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

The email for the team member which will also be used as the username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/team_member#email TeamMember#email}

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberConfig.property.firstName"></a>

```typescript
public readonly firstName: string;
```

- *Type:* string

The first name of the team member.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/team_member#first_name TeamMember#first_name}

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberConfig.property.lastName"></a>

```typescript
public readonly lastName: string;
```

- *Type:* string

The last name of the team member.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/team_member#last_name TeamMember#last_name}

---

##### `administrator`<sup>Optional</sup> <a name="administrator" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberConfig.property.administrator"></a>

```typescript
public readonly administrator: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Set to true to make the team member an administrator, otherwise the member will be a regular user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/team_member#administrator TeamMember#administrator}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

The state of the team member, whether they are enabled or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/team_member#enabled TeamMember#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/team_member#id TeamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `organization`<sup>Optional</sup> <a name="organization" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberConfig.property.organization"></a>

```typescript
public readonly organization: TeamMemberOrganization;
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganization">TeamMemberOrganization</a>

organization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/team_member#organization TeamMember#organization}

---

### TeamMemberOrganization <a name="TeamMemberOrganization" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganization"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganization.Initializer"></a>

```typescript
import { teamMember } from 'rhizo-co-terraform-provider-lacework'

const teamMemberOrganization: teamMember.TeamMemberOrganization = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganization.property.adminAccounts">adminAccounts</a></code> | <code>string[]</code> | List of accounts the team member is an admin. |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganization.property.administrator">administrator</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the team member is an org level administrator. |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganization.property.user">user</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the team member is an org level user. |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganization.property.userAccounts">userAccounts</a></code> | <code>string[]</code> | List of accounts the team member is a user. |

---

##### `adminAccounts`<sup>Optional</sup> <a name="adminAccounts" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganization.property.adminAccounts"></a>

```typescript
public readonly adminAccounts: string[];
```

- *Type:* string[]

List of accounts the team member is an admin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/team_member#admin_accounts TeamMember#admin_accounts}

---

##### `administrator`<sup>Optional</sup> <a name="administrator" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganization.property.administrator"></a>

```typescript
public readonly administrator: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the team member is an org level administrator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/team_member#administrator TeamMember#administrator}

---

##### `user`<sup>Optional</sup> <a name="user" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganization.property.user"></a>

```typescript
public readonly user: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the team member is an org level user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/team_member#user TeamMember#user}

---

##### `userAccounts`<sup>Optional</sup> <a name="userAccounts" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganization.property.userAccounts"></a>

```typescript
public readonly userAccounts: string[];
```

- *Type:* string[]

List of accounts the team member is a user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/team_member#user_accounts TeamMember#user_accounts}

---

## Classes <a name="Classes" id="Classes"></a>

### TeamMemberOrganizationOutputReference <a name="TeamMemberOrganizationOutputReference" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.Initializer"></a>

```typescript
import { teamMember } from 'rhizo-co-terraform-provider-lacework'

new teamMember.TeamMemberOrganizationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.resetAdminAccounts">resetAdminAccounts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.resetAdministrator">resetAdministrator</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.resetUser">resetUser</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.resetUserAccounts">resetUserAccounts</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdminAccounts` <a name="resetAdminAccounts" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.resetAdminAccounts"></a>

```typescript
public resetAdminAccounts(): void
```

##### `resetAdministrator` <a name="resetAdministrator" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.resetAdministrator"></a>

```typescript
public resetAdministrator(): void
```

##### `resetUser` <a name="resetUser" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.resetUser"></a>

```typescript
public resetUser(): void
```

##### `resetUserAccounts` <a name="resetUserAccounts" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.resetUserAccounts"></a>

```typescript
public resetUserAccounts(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.property.adminAccountsInput">adminAccountsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.property.administratorInput">administratorInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.property.userAccountsInput">userAccountsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.property.userInput">userInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.property.adminAccounts">adminAccounts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.property.administrator">administrator</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.property.user">user</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.property.userAccounts">userAccounts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganization">TeamMemberOrganization</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `adminAccountsInput`<sup>Optional</sup> <a name="adminAccountsInput" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.property.adminAccountsInput"></a>

```typescript
public readonly adminAccountsInput: string[];
```

- *Type:* string[]

---

##### `administratorInput`<sup>Optional</sup> <a name="administratorInput" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.property.administratorInput"></a>

```typescript
public readonly administratorInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `userAccountsInput`<sup>Optional</sup> <a name="userAccountsInput" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.property.userAccountsInput"></a>

```typescript
public readonly userAccountsInput: string[];
```

- *Type:* string[]

---

##### `userInput`<sup>Optional</sup> <a name="userInput" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.property.userInput"></a>

```typescript
public readonly userInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `adminAccounts`<sup>Required</sup> <a name="adminAccounts" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.property.adminAccounts"></a>

```typescript
public readonly adminAccounts: string[];
```

- *Type:* string[]

---

##### `administrator`<sup>Required</sup> <a name="administrator" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.property.administrator"></a>

```typescript
public readonly administrator: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `user`<sup>Required</sup> <a name="user" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.property.user"></a>

```typescript
public readonly user: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `userAccounts`<sup>Required</sup> <a name="userAccounts" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.property.userAccounts"></a>

```typescript
public readonly userAccounts: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganizationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: TeamMemberOrganization;
```

- *Type:* <a href="#rhizo-co-terraform-provider-lacework.teamMember.TeamMemberOrganization">TeamMemberOrganization</a>

---



