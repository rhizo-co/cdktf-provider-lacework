// https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_cfg
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationAwsCfgConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_cfg#enabled IntegrationAwsCfg#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_cfg#id IntegrationAwsCfg#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_cfg#name IntegrationAwsCfg#name}
  */
  readonly name: string;
  /**
  * The number of attempts to create the external integration.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_cfg#retries IntegrationAwsCfg#retries}
  */
  readonly retries?: number;
  /**
  * credentials block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_cfg#credentials IntegrationAwsCfg#credentials}
  */
  readonly credentials: IntegrationAwsCfgCredentials;
}
export interface IntegrationAwsCfgCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_cfg#external_id IntegrationAwsCfg#external_id}
  */
  readonly externalId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_cfg#role_arn IntegrationAwsCfg#role_arn}
  */
  readonly roleArn: string;
}

export function integrationAwsCfgCredentialsToTerraform(struct?: IntegrationAwsCfgCredentialsOutputReference | IntegrationAwsCfgCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_id: cdktf.stringToTerraform(struct!.externalId),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

export class IntegrationAwsCfgCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IntegrationAwsCfgCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationAwsCfgCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._externalId = undefined;
      this._roleArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._externalId = value.externalId;
      this._roleArn = value.roleArn;
    }
  }

  // external_id - computed: false, optional: false, required: true
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_cfg lacework_integration_aws_cfg}
*/
export class IntegrationAwsCfg extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "lacework_integration_aws_cfg";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_aws_cfg lacework_integration_aws_cfg} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationAwsCfgConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationAwsCfgConfig) {
    super(scope, id, {
      terraformResourceType: 'lacework_integration_aws_cfg',
      terraformGeneratorMetadata: {
        providerName: 'lacework',
        providerVersion: '1.15.0',
        providerVersionConstraint: '~> 1.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enabled = config.enabled;
    this._id = config.id;
    this._name = config.name;
    this._retries = config.retries;
    this._credentials.internalValue = config.credentials;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_or_updated_by - computed: true, optional: false, required: false
  public get createdOrUpdatedBy() {
    return this.getStringAttribute('created_or_updated_by');
  }

  // created_or_updated_time - computed: true, optional: false, required: false
  public get createdOrUpdatedTime() {
    return this.getStringAttribute('created_or_updated_time');
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // intg_guid - computed: true, optional: false, required: false
  public get intgGuid() {
    return this.getStringAttribute('intg_guid');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // org_level - computed: true, optional: false, required: false
  public get orgLevel() {
    return this.getBooleanAttribute('org_level');
  }

  // retries - computed: false, optional: true, required: false
  private _retries?: number; 
  public get retries() {
    return this.getNumberAttribute('retries');
  }
  public set retries(value: number) {
    this._retries = value;
  }
  public resetRetries() {
    this._retries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retriesInput() {
    return this._retries;
  }

  // type_name - computed: true, optional: false, required: false
  public get typeName() {
    return this.getStringAttribute('type_name');
  }

  // credentials - computed: false, optional: false, required: true
  private _credentials = new IntegrationAwsCfgCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: IntegrationAwsCfgCredentials) {
    this._credentials.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      retries: cdktf.numberToTerraform(this._retries),
      credentials: integrationAwsCfgCredentialsToTerraform(this._credentials.internalValue),
    };
  }
}
