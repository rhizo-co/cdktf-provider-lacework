// https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_azure_al
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationAzureAlConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_azure_al#enabled IntegrationAzureAl#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_azure_al#id IntegrationAzureAl#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_azure_al#name IntegrationAzureAl#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_azure_al#queue_url IntegrationAzureAl#queue_url}
  */
  readonly queueUrl: string;
  /**
  * The number of attempts to create the external integration.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_azure_al#retries IntegrationAzureAl#retries}
  */
  readonly retries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_azure_al#tenant_id IntegrationAzureAl#tenant_id}
  */
  readonly tenantId: string;
  /**
  * credentials block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_azure_al#credentials IntegrationAzureAl#credentials}
  */
  readonly credentials: IntegrationAzureAlCredentials;
}
export interface IntegrationAzureAlCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_azure_al#client_id IntegrationAzureAl#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_azure_al#client_secret IntegrationAzureAl#client_secret}
  */
  readonly clientSecret: string;
}

export function integrationAzureAlCredentialsToTerraform(struct?: IntegrationAzureAlCredentialsOutputReference | IntegrationAzureAlCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
  }
}

export class IntegrationAzureAlCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IntegrationAzureAlCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationAzureAlCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._clientSecret = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
    }
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: false, required: true
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_azure_al lacework_integration_azure_al}
*/
export class IntegrationAzureAl extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "lacework_integration_azure_al";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_azure_al lacework_integration_azure_al} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationAzureAlConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationAzureAlConfig) {
    super(scope, id, {
      terraformResourceType: 'lacework_integration_azure_al',
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
    this._queueUrl = config.queueUrl;
    this._retries = config.retries;
    this._tenantId = config.tenantId;
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

  // queue_url - computed: false, optional: false, required: true
  private _queueUrl?: string; 
  public get queueUrl() {
    return this.getStringAttribute('queue_url');
  }
  public set queueUrl(value: string) {
    this._queueUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queueUrlInput() {
    return this._queueUrl;
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

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // type_name - computed: true, optional: false, required: false
  public get typeName() {
    return this.getStringAttribute('type_name');
  }

  // credentials - computed: false, optional: false, required: true
  private _credentials = new IntegrationAzureAlCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: IntegrationAzureAlCredentials) {
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
      queue_url: cdktf.stringToTerraform(this._queueUrl),
      retries: cdktf.numberToTerraform(this._retries),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      credentials: integrationAzureAlCredentialsToTerraform(this._credentials.internalValue),
    };
  }
}
