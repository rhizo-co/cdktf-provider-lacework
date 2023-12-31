// https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ecr
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationEcrConfig extends cdktf.TerraformMetaArguments {
  /**
  * The state of the external integration
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ecr#enabled IntegrationEcr#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ecr#id IntegrationEcr#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A list of repositories to assess
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ecr#limit_by_repositories IntegrationEcr#limit_by_repositories}
  */
  readonly limitByRepositories?: string[];
  /**
  * A list of image tags to limit the assessment of images with matching tags
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ecr#limit_by_tags IntegrationEcr#limit_by_tags}
  */
  readonly limitByTags?: string[];
  /**
  * The maximum number of newest container images to assess per repository
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ecr#limit_num_imgs IntegrationEcr#limit_num_imgs}
  */
  readonly limitNumImgs?: number;
  /**
  * The ECR integration name
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ecr#name IntegrationEcr#name}
  */
  readonly name: string;
  /**
  * Enable program language scanning
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ecr#non_os_package_support IntegrationEcr#non_os_package_support}
  */
  readonly nonOsPackageSupport?: boolean | cdktf.IResolvable;
  /**
  * The Amazon Container Registry (ECR) domain
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ecr#registry_domain IntegrationEcr#registry_domain}
  */
  readonly registryDomain: string;
  /**
  * credentials block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ecr#credentials IntegrationEcr#credentials}
  */
  readonly credentials: IntegrationEcrCredentials;
  /**
  * limit_by_label block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ecr#limit_by_label IntegrationEcr#limit_by_label}
  */
  readonly limitByLabel?: IntegrationEcrLimitByLabel[] | cdktf.IResolvable;
}
export interface IntegrationEcrCredentials {
  /**
  * The AWS access key ID for an AWS IAM user that permissions to access the Amazon Container Registry
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ecr#access_key_id IntegrationEcr#access_key_id}
  */
  readonly accessKeyId?: string;
  /**
  * The external ID for the IAM role
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ecr#external_id IntegrationEcr#external_id}
  */
  readonly externalId?: string;
  /**
  * The ARN of the IAM role with permissions to access the Amazon Container Registry
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ecr#role_arn IntegrationEcr#role_arn}
  */
  readonly roleArn?: string;
  /**
  * The AWS secret key for the specified AWS access key
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ecr#secret_access_key IntegrationEcr#secret_access_key}
  */
  readonly secretAccessKey?: string;
}

export function integrationEcrCredentialsToTerraform(struct?: IntegrationEcrCredentialsOutputReference | IntegrationEcrCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key_id: cdktf.stringToTerraform(struct!.accessKeyId),
    external_id: cdktf.stringToTerraform(struct!.externalId),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    secret_access_key: cdktf.stringToTerraform(struct!.secretAccessKey),
  }
}

export class IntegrationEcrCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IntegrationEcrCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKeyId = this._accessKeyId;
    }
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._secretAccessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretAccessKey = this._secretAccessKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationEcrCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessKeyId = undefined;
      this._externalId = undefined;
      this._roleArn = undefined;
      this._secretAccessKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessKeyId = value.accessKeyId;
      this._externalId = value.externalId;
      this._roleArn = value.roleArn;
      this._secretAccessKey = value.secretAccessKey;
    }
  }

  // access_key_id - computed: false, optional: true, required: false
  private _accessKeyId?: string; 
  public get accessKeyId() {
    return this.getStringAttribute('access_key_id');
  }
  public set accessKeyId(value: string) {
    this._accessKeyId = value;
  }
  public resetAccessKeyId() {
    this._accessKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyIdInput() {
    return this._accessKeyId;
  }

  // external_id - computed: false, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }

  // role_arn - computed: false, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // secret_access_key - computed: false, optional: true, required: false
  private _secretAccessKey?: string; 
  public get secretAccessKey() {
    return this.getStringAttribute('secret_access_key');
  }
  public set secretAccessKey(value: string) {
    this._secretAccessKey = value;
  }
  public resetSecretAccessKey() {
    this._secretAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretAccessKeyInput() {
    return this._secretAccessKey;
  }
}
export interface IntegrationEcrLimitByLabel {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ecr#key IntegrationEcr#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ecr#value IntegrationEcr#value}
  */
  readonly value: string;
}

export function integrationEcrLimitByLabelToTerraform(struct?: IntegrationEcrLimitByLabel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class IntegrationEcrLimitByLabelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): IntegrationEcrLimitByLabel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationEcrLimitByLabel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class IntegrationEcrLimitByLabelList extends cdktf.ComplexList {
  public internalValue? : IntegrationEcrLimitByLabel[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): IntegrationEcrLimitByLabelOutputReference {
    return new IntegrationEcrLimitByLabelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ecr lacework_integration_ecr}
*/
export class IntegrationEcr extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "lacework_integration_ecr";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/lacework/lacework/1.15.0/docs/resources/integration_ecr lacework_integration_ecr} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationEcrConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationEcrConfig) {
    super(scope, id, {
      terraformResourceType: 'lacework_integration_ecr',
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
    this._limitByRepositories = config.limitByRepositories;
    this._limitByTags = config.limitByTags;
    this._limitNumImgs = config.limitNumImgs;
    this._name = config.name;
    this._nonOsPackageSupport = config.nonOsPackageSupport;
    this._registryDomain = config.registryDomain;
    this._credentials.internalValue = config.credentials;
    this._limitByLabel.internalValue = config.limitByLabel;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_auth_type - computed: true, optional: false, required: false
  public get awsAuthType() {
    return this.getStringAttribute('aws_auth_type');
  }

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

  // limit_by_repositories - computed: false, optional: true, required: false
  private _limitByRepositories?: string[]; 
  public get limitByRepositories() {
    return this.getListAttribute('limit_by_repositories');
  }
  public set limitByRepositories(value: string[]) {
    this._limitByRepositories = value;
  }
  public resetLimitByRepositories() {
    this._limitByRepositories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitByRepositoriesInput() {
    return this._limitByRepositories;
  }

  // limit_by_tags - computed: false, optional: true, required: false
  private _limitByTags?: string[]; 
  public get limitByTags() {
    return this.getListAttribute('limit_by_tags');
  }
  public set limitByTags(value: string[]) {
    this._limitByTags = value;
  }
  public resetLimitByTags() {
    this._limitByTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitByTagsInput() {
    return this._limitByTags;
  }

  // limit_num_imgs - computed: false, optional: true, required: false
  private _limitNumImgs?: number; 
  public get limitNumImgs() {
    return this.getNumberAttribute('limit_num_imgs');
  }
  public set limitNumImgs(value: number) {
    this._limitNumImgs = value;
  }
  public resetLimitNumImgs() {
    this._limitNumImgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitNumImgsInput() {
    return this._limitNumImgs;
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

  // non_os_package_support - computed: false, optional: true, required: false
  private _nonOsPackageSupport?: boolean | cdktf.IResolvable; 
  public get nonOsPackageSupport() {
    return this.getBooleanAttribute('non_os_package_support');
  }
  public set nonOsPackageSupport(value: boolean | cdktf.IResolvable) {
    this._nonOsPackageSupport = value;
  }
  public resetNonOsPackageSupport() {
    this._nonOsPackageSupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonOsPackageSupportInput() {
    return this._nonOsPackageSupport;
  }

  // org_level - computed: true, optional: false, required: false
  public get orgLevel() {
    return this.getBooleanAttribute('org_level');
  }

  // registry_domain - computed: false, optional: false, required: true
  private _registryDomain?: string; 
  public get registryDomain() {
    return this.getStringAttribute('registry_domain');
  }
  public set registryDomain(value: string) {
    this._registryDomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get registryDomainInput() {
    return this._registryDomain;
  }

  // type_name - computed: true, optional: false, required: false
  public get typeName() {
    return this.getStringAttribute('type_name');
  }

  // credentials - computed: false, optional: false, required: true
  private _credentials = new IntegrationEcrCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: IntegrationEcrCredentials) {
    this._credentials.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // limit_by_label - computed: false, optional: true, required: false
  private _limitByLabel = new IntegrationEcrLimitByLabelList(this, "limit_by_label", true);
  public get limitByLabel() {
    return this._limitByLabel;
  }
  public putLimitByLabel(value: IntegrationEcrLimitByLabel[] | cdktf.IResolvable) {
    this._limitByLabel.internalValue = value;
  }
  public resetLimitByLabel() {
    this._limitByLabel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitByLabelInput() {
    return this._limitByLabel.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      limit_by_repositories: cdktf.listMapper(cdktf.stringToTerraform, false)(this._limitByRepositories),
      limit_by_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._limitByTags),
      limit_num_imgs: cdktf.numberToTerraform(this._limitNumImgs),
      name: cdktf.stringToTerraform(this._name),
      non_os_package_support: cdktf.booleanToTerraform(this._nonOsPackageSupport),
      registry_domain: cdktf.stringToTerraform(this._registryDomain),
      credentials: integrationEcrCredentialsToTerraform(this._credentials.internalValue),
      limit_by_label: cdktf.listMapper(integrationEcrLimitByLabelToTerraform, true)(this._limitByLabel.internalValue),
    };
  }
}
