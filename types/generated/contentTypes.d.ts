import type { Schema, Attribute } from '@strapi/strapi';

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    name: 'Permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    name: 'User';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    username: Attribute.String;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    registrationToken: Attribute.String & Attribute.Private;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
      Attribute.Private;
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    preferedLanguage: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    name: 'Role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
    permissions: Attribute.Relation<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    name: 'Api Token';
    singularName: 'api-token';
    pluralName: 'api-tokens';
    displayName: 'Api Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions';
  info: {
    name: 'API Token Permission';
    description: '';
    singularName: 'api-token-permission';
    pluralName: 'api-token-permissions';
    displayName: 'API Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    name: 'Transfer Token';
    singularName: 'transfer-token';
    pluralName: 'transfer-tokens';
    displayName: 'Transfer Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    name: 'Transfer Token Permission';
    description: '';
    singularName: 'transfer-token-permission';
    pluralName: 'transfer-token-permissions';
    displayName: 'Transfer Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    singularName: 'file';
    pluralName: 'files';
    displayName: 'File';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    alternativeText: Attribute.String;
    caption: Attribute.String;
    width: Attribute.Integer;
    height: Attribute.Integer;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    ext: Attribute.String;
    mime: Attribute.String & Attribute.Required;
    size: Attribute.Decimal & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
    folder: Attribute.Relation<
      'plugin::upload.file',
      'manyToOne',
      'plugin::upload.folder'
    > &
      Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    singularName: 'folder';
    pluralName: 'folders';
    displayName: 'Folder';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    parent: Attribute.Relation<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    children: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    files: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: 'i18n_locale';
  info: {
    singularName: 'locale';
    pluralName: 'locales';
    collectionName: 'locales';
    displayName: 'Locale';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.SetMinMax<{
        min: 1;
        max: 50;
      }>;
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Schema.CollectionType {
  collectionName: 'up_permissions';
  info: {
    name: 'permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String & Attribute.Required;
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles';
  info: {
    name: 'role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    description: Attribute.String;
    type: Attribute.String & Attribute.Unique;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users';
  info: {
    name: 'user';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    username: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    email: Attribute.String & Attribute.Required;
    provider: Attribute.String;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    customer: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'api::customer.customer'
    >;
    userGroup: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::multi-tenant.user-group'
    >;
    userSetting: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'api::user-setting.user-setting'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginMultiTenantOrganization extends Schema.CollectionType {
  collectionName: 'organizations';
  info: {
    singularName: 'organization';
    pluralName: 'organizations';
    displayName: 'Organization';
    description: '';
  };
  options: {
    draftAndPublish: false;
    comment: '';
  };
  attributes: {
    name: Attribute.String;
    userGroups: Attribute.Relation<
      'plugin::multi-tenant.organization',
      'oneToMany',
      'plugin::multi-tenant.user-group'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::multi-tenant.organization',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::multi-tenant.organization',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginMultiTenantUserGroup extends Schema.CollectionType {
  collectionName: 'user_groups';
  info: {
    singularName: 'user-group';
    pluralName: 'user-groups';
    displayName: 'UserGroup';
  };
  options: {
    draftAndPublish: false;
    comment: '';
  };
  attributes: {
    name: Attribute.String;
    users: Attribute.Relation<
      'plugin::multi-tenant.user-group',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    organization: Attribute.Relation<
      'plugin::multi-tenant.user-group',
      'manyToOne',
      'plugin::multi-tenant.organization'
    >;
    parent: Attribute.Relation<
      'plugin::multi-tenant.user-group',
      'manyToOne',
      'plugin::multi-tenant.user-group'
    >;
    children: Attribute.Relation<
      'plugin::multi-tenant.user-group',
      'oneToMany',
      'plugin::multi-tenant.user-group'
    >;
    placeOfIssues: Attribute.Relation<
      'plugin::multi-tenant.user-group',
      'oneToMany',
      'api::place-of-issue.place-of-issue'
    >;
    cars: Attribute.Relation<
      'plugin::multi-tenant.user-group',
      'oneToMany',
      'api::car.car'
    >;
    organisations: Attribute.Relation<
      'plugin::multi-tenant.user-group',
      'oneToMany',
      'api::organisation.organisation'
    >;
    individuals: Attribute.Relation<
      'plugin::multi-tenant.user-group',
      'oneToMany',
      'api::individual.individual'
    >;
    customers: Attribute.Relation<
      'plugin::multi-tenant.user-group',
      'oneToMany',
      'api::customer.customer'
    >;
    carGroups: Attribute.Relation<
      'plugin::multi-tenant.user-group',
      'oneToMany',
      'api::car-group.car-group'
    >;
    carContracts: Attribute.Relation<
      'plugin::multi-tenant.user-group',
      'oneToMany',
      'api::car-contract.car-contract'
    >;
    carContractInvoices: Attribute.Relation<
      'plugin::multi-tenant.user-group',
      'oneToMany',
      'api::car-contract-invoice.car-contract-invoice'
    >;
    carReservations: Attribute.Relation<
      'plugin::multi-tenant.user-group',
      'oneToMany',
      'api::car-reservation.car-reservation'
    >;
    invoices: Attribute.Relation<
      'plugin::multi-tenant.user-group',
      'oneToMany',
      'api::invoice.invoice'
    >;
    carMaintenances: Attribute.Relation<
      'plugin::multi-tenant.user-group',
      'oneToMany',
      'api::car-maintenance.car-maintenance'
    >;
    rentalAgreementDetails: Attribute.Relation<
      'plugin::multi-tenant.user-group',
      'oneToMany',
      'api::rental-agreement-detail.rental-agreement-detail'
    >;
    transactions: Attribute.Relation<
      'plugin::multi-tenant.user-group',
      'oneToMany',
      'api::transaction.transaction'
    >;
    contacts: Attribute.Relation<
      'plugin::multi-tenant.user-group',
      'oneToMany',
      'api::contact.contact'
    >;
    paymentDetails: Attribute.Relation<
      'plugin::multi-tenant.user-group',
      'oneToMany',
      'api::payment-detail.payment-detail'
    >;
    organizationDetails: Attribute.Relation<
      'plugin::multi-tenant.user-group',
      'oneToMany',
      'api::organization-detail.organization-detail'
    >;
    flightNumbers: Attribute.Relation<
      'plugin::multi-tenant.user-group',
      'oneToMany',
      'api::flight-number.flight-number'
    >;
    organizationEmailConfigs: Attribute.Relation<
      'plugin::multi-tenant.user-group',
      'oneToMany',
      'api::organization-email-config.organization-email-config'
    >;
    agreementDetails: Attribute.Relation<
      'plugin::multi-tenant.user-group',
      'oneToMany',
      'api::agreement-detail.agreement-detail'
    >;
    carContractFines: Attribute.Relation<
      'plugin::multi-tenant.user-group',
      'oneToMany',
      'api::car-contract-fine.car-contract-fine'
    >;
    documents: Attribute.Relation<
      'plugin::multi-tenant.user-group',
      'oneToMany',
      'api::document.document'
    >;
    fines: Attribute.Relation<
      'plugin::multi-tenant.user-group',
      'oneToMany',
      'api::fine.fine'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::multi-tenant.user-group',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::multi-tenant.user-group',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    colors: Attribute.Relation<
      'plugin::multi-tenant.user-group',
      'oneToMany',
      'api::color.color'
    >;
    documentConnections: Attribute.Relation<
      'plugin::multi-tenant.user-group',
      'oneToMany',
      'api::document-connection.document-connection'
    >;
    fuelTypes: Attribute.Relation<
      'plugin::multi-tenant.user-group',
      'oneToMany',
      'api::fuel-type.fuel-type'
    >;
    guests: Attribute.Relation<
      'plugin::multi-tenant.user-group',
      'oneToMany',
      'api::guest.guest'
    >;
    invoicePlaceOfIssues: Attribute.Relation<
      'plugin::multi-tenant.user-group',
      'oneToMany',
      'api::invoice-place-of-issue.invoice-place-of-issue'
    >;
    locations: Attribute.Relation<
      'plugin::multi-tenant.user-group',
      'oneToMany',
      'api::location.location'
    >;
    serviceLocations: Attribute.Relation<
      'plugin::multi-tenant.user-group',
      'oneToMany',
      'api::service-location.service-location'
    >;
    statuses: Attribute.Relation<
      'plugin::multi-tenant.user-group',
      'oneToMany',
      'api::status.status'
    >;
    transmissionTypes: Attribute.Relation<
      'plugin::multi-tenant.user-group',
      'oneToMany',
      'api::transmission-type.transmission-type'
    >;
    typeOfServices: Attribute.Relation<
      'plugin::multi-tenant.user-group',
      'oneToMany',
      'api::type-of-service.type-of-service'
    >;
    vehicleTypes: Attribute.Relation<
      'plugin::multi-tenant.user-group',
      'oneToMany',
      'api::vehicle-type.vehicle-type'
    >;
    prices: Attribute.Relation<
      'plugin::multi-tenant.user-group',
      'oneToMany',
      'api::price.price'
    >;
    discounts: Attribute.Relation<
      'plugin::multi-tenant.user-group',
      'oneToMany',
      'api::discount.discount'
    >;
    recurringDiscounts: Attribute.Relation<
      'plugin::multi-tenant.user-group',
      'oneToMany',
      'api::recurring-discount.recurring-discount'
    >;
    temporaryDiscounts: Attribute.Relation<
      'plugin::multi-tenant.user-group',
      'oneToMany',
      'api::temporary-discount.temporary-discount'
    >;
    extras: Attribute.Relation<
      'plugin::multi-tenant.user-group',
      'oneToMany',
      'api::extra.extra'
    >;
    paymentMethods: Attribute.Relation<
      'plugin::multi-tenant.user-group',
      'oneToMany',
      'api::payment-method.payment-method'
    >;
    rentalExtras: Attribute.Relation<
      'plugin::multi-tenant.user-group',
      'oneToMany',
      'api::rental-extra.rental-extra'
    >;
    organizationSkins: Attribute.Relation<
      'plugin::multi-tenant.user-group',
      'oneToMany',
      'api::organization-skin.organization-skin'
    >;
    addresses: Attribute.Relation<
      'plugin::multi-tenant.user-group',
      'oneToMany',
      'api::address.address'
    >;
    userSettings: Attribute.Relation<
      'plugin::multi-tenant.user-group',
      'oneToMany',
      'api::user-setting.user-setting'
    >;
    addressOfStays: Attribute.Relation<
      'plugin::multi-tenant.user-group',
      'oneToMany',
      'api::payment-method.payment-method'
    >;
    radarNumbers: Attribute.Relation<
      'plugin::multi-tenant.user-group',
      'oneToMany',
      'api::radar-number.radar-number'
    >;
    policeStations: Attribute.Relation<
      'plugin::multi-tenant.user-group',
      'oneToMany',
      'api::police-station.police-station'
    >;
  };
}

export interface ApiAddressAddress extends Schema.CollectionType {
  collectionName: 'addresses';
  info: {
    singularName: 'address';
    pluralName: 'addresses';
    displayName: 'Address';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    postalCode: Attribute.String;
    city: Attribute.String;
    country: Attribute.String;
    state: Attribute.String;
    addressLine1: Attribute.String;
    addressLine2: Attribute.String;
    addressLine3: Attribute.String;
    province: Attribute.String;
    userGroup: Attribute.Relation<
      'api::address.address',
      'manyToOne',
      'plugin::multi-tenant.user-group'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::address.address',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::address.address',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAddressOfStayAddressOfStay extends Schema.CollectionType {
  collectionName: 'address_of_stays';
  info: {
    singularName: 'address-of-stay';
    pluralName: 'address-of-stays';
    displayName: 'Address Of Stay';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    name: Attribute.String;
    userGroup: Attribute.Relation<
      'api::address-of-stay.address-of-stay',
      'manyToOne',
      'plugin::multi-tenant.user-group'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::address-of-stay.address-of-stay',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::address-of-stay.address-of-stay',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAgreementDetailAgreementDetail
  extends Schema.CollectionType {
  collectionName: 'agreement_details';
  info: {
    singularName: 'agreement-detail';
    pluralName: 'agreement-details';
    displayName: 'Agreement Detail';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    startDatetime: Attribute.DateTime;
    endDatetime: Attribute.DateTime;
    comment: Attribute.String;
    author: Attribute.String;
    userGroup: Attribute.Relation<
      'api::agreement-detail.agreement-detail',
      'manyToOne',
      'plugin::multi-tenant.user-group'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::agreement-detail.agreement-detail',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::agreement-detail.agreement-detail',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCarCar extends Schema.CollectionType {
  collectionName: 'cars';
  info: {
    singularName: 'car';
    pluralName: 'cars';
    displayName: 'Car';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    registrationPlate: Attribute.String & Attribute.Unique;
    color: Attribute.String;
    chassis: Attribute.String & Attribute.Unique;
    seats: Attribute.Integer &
      Attribute.SetMinMax<{
        min: 0;
      }>;
    doors: Attribute.Integer &
      Attribute.SetMinMax<{
        min: 0;
      }>;
    smallBaggage: Attribute.Integer &
      Attribute.SetMinMax<{
        min: 0;
      }>;
    largeBaggage: Attribute.Integer &
      Attribute.SetMinMax<{
        min: 0;
      }>;
    isAvailable: Attribute.Boolean & Attribute.DefaultTo<true>;
    registeredUntil: Attribute.DateTime;
    year: Attribute.Integer &
      Attribute.SetMinMax<{
        min: 1900;
      }>;
    cubicSize: Attribute.Integer &
      Attribute.SetMinMax<{
        min: 0;
      }>;
    make: Attribute.String;
    model: Attribute.String;
    carType: Attribute.String;
    fuelType: Attribute.String;
    transmissionType: Attribute.String;
    carGroup: Attribute.Relation<
      'api::car.car',
      'manyToOne',
      'api::car-group.car-group'
    >;
    userGroup: Attribute.Relation<
      'api::car.car',
      'manyToOne',
      'plugin::multi-tenant.user-group'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::car.car', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::car.car', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiCarContractCarContract extends Schema.CollectionType {
  collectionName: 'car_contracts';
  info: {
    singularName: 'car-contract';
    pluralName: 'car-contracts';
    displayName: 'Car Contract';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    primaryDriver: Attribute.Relation<
      'api::car-contract.car-contract',
      'oneToOne',
      'api::customer.customer'
    >;
    secondaryDriver: Attribute.Relation<
      'api::car-contract.car-contract',
      'oneToOne',
      'api::customer.customer'
    >;
    primaryDriverDocumentVersions: Attribute.Relation<
      'api::car-contract.car-contract',
      'oneToOne',
      'api::document-connection.document-connection'
    >;
    secondaryDriverDocumentVersions: Attribute.Relation<
      'api::car-contract.car-contract',
      'oneToOne',
      'api::document-connection.document-connection'
    >;
    userGroup: Attribute.Relation<
      'api::car-contract.car-contract',
      'manyToOne',
      'plugin::multi-tenant.user-group'
    >;
    car: Attribute.Relation<
      'api::car-contract.car-contract',
      'oneToOne',
      'api::car.car'
    >;
    rentalAgreementDetail: Attribute.Relation<
      'api::car-contract.car-contract',
      'oneToOne',
      'api::rental-agreement-detail.rental-agreement-detail'
    >;
    agreementDetail: Attribute.Relation<
      'api::car-contract.car-contract',
      'oneToOne',
      'api::agreement-detail.agreement-detail'
    >;
    transaction: Attribute.Relation<
      'api::car-contract.car-contract',
      'oneToOne',
      'api::transaction.transaction'
    >;
    rentalExtras: Attribute.Relation<
      'api::car-contract.car-contract',
      'oneToMany',
      'api::rental-extra.rental-extra'
    >;
    addressOfStay: Attribute.String;
    invoice: Attribute.Relation<
      'api::car-contract.car-contract',
      'oneToOne',
      'api::car-contract-invoice.car-contract-invoice'
    >;
    fines: Attribute.Relation<
      'api::car-contract.car-contract',
      'oneToMany',
      'api::car-contract-fine.car-contract-fine'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::car-contract.car-contract',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::car-contract.car-contract',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCarContractFineCarContractFine
  extends Schema.CollectionType {
  collectionName: 'car_contract_fines';
  info: {
    singularName: 'car-contract-fine';
    pluralName: 'car-contract-fines';
    displayName: 'Car Contract Fine';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    fine: Attribute.Relation<
      'api::car-contract-fine.car-contract-fine',
      'oneToOne',
      'api::fine.fine'
    >;
    userGroup: Attribute.Relation<
      'api::car-contract-fine.car-contract-fine',
      'manyToOne',
      'plugin::multi-tenant.user-group'
    >;
    carContract: Attribute.Relation<
      'api::car-contract-fine.car-contract-fine',
      'manyToOne',
      'api::car-contract.car-contract'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::car-contract-fine.car-contract-fine',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::car-contract-fine.car-contract-fine',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCarContractInvoiceCarContractInvoice
  extends Schema.CollectionType {
  collectionName: 'car_contract_invoices';
  info: {
    singularName: 'car-contract-invoice';
    pluralName: 'car-contract-invoices';
    displayName: 'Car Contract Invoice';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    invoice: Attribute.Relation<
      'api::car-contract-invoice.car-contract-invoice',
      'oneToOne',
      'api::invoice.invoice'
    >;
    userGroup: Attribute.Relation<
      'api::car-contract-invoice.car-contract-invoice',
      'manyToOne',
      'plugin::multi-tenant.user-group'
    >;
    carContract: Attribute.Relation<
      'api::car-contract-invoice.car-contract-invoice',
      'oneToOne',
      'api::car-contract.car-contract'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::car-contract-invoice.car-contract-invoice',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::car-contract-invoice.car-contract-invoice',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCarGroupCarGroup extends Schema.CollectionType {
  collectionName: 'car_groups';
  info: {
    singularName: 'car-group';
    pluralName: 'car-groups';
    displayName: 'Car Group';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    cars: Attribute.Relation<
      'api::car-group.car-group',
      'oneToMany',
      'api::car.car'
    >;
    name: Attribute.String;
    userGroup: Attribute.Relation<
      'api::car-group.car-group',
      'manyToOne',
      'plugin::multi-tenant.user-group'
    >;
    prices: Attribute.Relation<
      'api::car-group.car-group',
      'oneToMany',
      'api::price.price'
    >;
    thumbnail: Attribute.Media;
    inspectionImages: Attribute.Media;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::car-group.car-group',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::car-group.car-group',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCarMaintenanceCarMaintenance extends Schema.CollectionType {
  collectionName: 'car_maintenances';
  info: {
    singularName: 'car-maintenance';
    pluralName: 'car-maintenances';
    displayName: 'Car Maintenance';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    typeOfService: Attribute.String;
    location: Attribute.String;
    userGroup: Attribute.Relation<
      'api::car-maintenance.car-maintenance',
      'manyToOne',
      'plugin::multi-tenant.user-group'
    >;
    car: Attribute.Relation<
      'api::car-maintenance.car-maintenance',
      'oneToOne',
      'api::car.car'
    >;
    agreementDetail: Attribute.Relation<
      'api::car-maintenance.car-maintenance',
      'oneToOne',
      'api::agreement-detail.agreement-detail'
    >;
    transaction: Attribute.Relation<
      'api::car-maintenance.car-maintenance',
      'oneToOne',
      'api::transaction.transaction'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::car-maintenance.car-maintenance',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::car-maintenance.car-maintenance',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCarReservationCarReservation extends Schema.CollectionType {
  collectionName: 'car_reservations';
  info: {
    singularName: 'car-reservation';
    pluralName: 'car-reservations';
    displayName: 'Car Reservation';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    flightNumber: Attribute.String;
    status: Attribute.String;
    userGroup: Attribute.Relation<
      'api::car-reservation.car-reservation',
      'manyToOne',
      'plugin::multi-tenant.user-group'
    >;
    car: Attribute.Relation<
      'api::car-reservation.car-reservation',
      'oneToOne',
      'api::car.car'
    >;
    rentalAgreementDetail: Attribute.Relation<
      'api::car-reservation.car-reservation',
      'oneToOne',
      'api::rental-agreement-detail.rental-agreement-detail'
    >;
    agreementDetail: Attribute.Relation<
      'api::car-reservation.car-reservation',
      'oneToOne',
      'api::agreement-detail.agreement-detail'
    >;
    transaction: Attribute.Relation<
      'api::car-reservation.car-reservation',
      'oneToOne',
      'api::transaction.transaction'
    >;
    rentalExtras: Attribute.Relation<
      'api::car-reservation.car-reservation',
      'oneToMany',
      'api::rental-extra.rental-extra'
    >;
    code: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::car-reservation.car-reservation',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::car-reservation.car-reservation',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiColorColor extends Schema.CollectionType {
  collectionName: 'colors';
  info: {
    singularName: 'color';
    pluralName: 'colors';
    displayName: 'Color';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    name: Attribute.String;
    userGroup: Attribute.Relation<
      'api::color.color',
      'manyToOne',
      'plugin::multi-tenant.user-group'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::color.color',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::color.color',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiContactContact extends Schema.CollectionType {
  collectionName: 'contacts';
  info: {
    singularName: 'contact';
    pluralName: 'contacts';
    displayName: 'Contact';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    email: Attribute.Email;
    telephonePrimary: Attribute.String;
    telephoneSecondary: Attribute.String;
    userGroup: Attribute.Relation<
      'api::contact.contact',
      'manyToOne',
      'plugin::multi-tenant.user-group'
    >;
    website: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::contact.contact',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::contact.contact',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCustomerCustomer extends Schema.CollectionType {
  collectionName: 'customers';
  info: {
    singularName: 'customer';
    pluralName: 'customers';
    displayName: 'Customer';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    contact: Attribute.Relation<
      'api::customer.customer',
      'oneToOne',
      'api::contact.contact'
    >;
    country: Attribute.String;
    comment: Attribute.Text;
    isLocal: Attribute.Boolean;
    individual: Attribute.Relation<
      'api::customer.customer',
      'oneToOne',
      'api::individual.individual'
    >;
    organisation: Attribute.Relation<
      'api::customer.customer',
      'oneToOne',
      'api::organisation.organisation'
    >;
    type: Attribute.Enumeration<['USER', 'GUEST']>;
    userGroup: Attribute.Relation<
      'api::customer.customer',
      'manyToOne',
      'plugin::multi-tenant.user-group'
    >;
    name: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::customer.customer',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::customer.customer',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiDiscountDiscount extends Schema.CollectionType {
  collectionName: 'discounts';
  info: {
    singularName: 'discount';
    pluralName: 'discounts';
    displayName: 'Discount';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    name: Attribute.String;
    description: Attribute.String;
    amount: Attribute.Decimal;
    userGroup: Attribute.Relation<
      'api::discount.discount',
      'oneToOne',
      'plugin::multi-tenant.user-group'
    >;
    type: Attribute.Enumeration<['FIXED', 'PER_DAY', 'PERCENTAGE']>;
    carGroups: Attribute.Relation<
      'api::discount.discount',
      'oneToMany',
      'api::car-group.car-group'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::discount.discount',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::discount.discount',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiDocumentDocument extends Schema.CollectionType {
  collectionName: 'documents';
  info: {
    singularName: 'document';
    pluralName: 'documents';
    displayName: 'Document';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    issuedBy: Attribute.String;
    expiry: Attribute.DateTime;
    type: Attribute.String;
    number: Attribute.String;
    individual: Attribute.Relation<
      'api::document.document',
      'manyToOne',
      'api::individual.individual'
    >;
    userGroup: Attribute.Relation<
      'api::document.document',
      'manyToOne',
      'plugin::multi-tenant.user-group'
    >;
    unlimited: Attribute.Boolean & Attribute.DefaultTo<false>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::document.document',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::document.document',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiDocumentConnectionDocumentConnection
  extends Schema.CollectionType {
  collectionName: 'document_connections';
  info: {
    singularName: 'document-connection';
    pluralName: 'document-connections';
    displayName: 'Document Connection';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    passport: Attribute.Relation<
      'api::document-connection.document-connection',
      'oneToOne',
      'api::document.document'
    >;
    driverLicense: Attribute.Relation<
      'api::document-connection.document-connection',
      'oneToOne',
      'api::document.document'
    >;
    identityLicense: Attribute.Relation<
      'api::document-connection.document-connection',
      'oneToOne',
      'api::document.document'
    >;
    userGroup: Attribute.Relation<
      'api::document-connection.document-connection',
      'manyToOne',
      'plugin::multi-tenant.user-group'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::document-connection.document-connection',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::document-connection.document-connection',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiExtraExtra extends Schema.CollectionType {
  collectionName: 'extras';
  info: {
    singularName: 'extra';
    pluralName: 'extras';
    displayName: 'Extra';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    name: Attribute.String;
    description: Attribute.String;
    quantity: Attribute.Integer;
    thumbnail: Attribute.Media;
    price: Attribute.Decimal;
    userGroup: Attribute.Relation<
      'api::extra.extra',
      'manyToOne',
      'plugin::multi-tenant.user-group'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::extra.extra',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::extra.extra',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFineFine extends Schema.CollectionType {
  collectionName: 'fines';
  info: {
    singularName: 'fine';
    pluralName: 'fines';
    displayName: 'Fine';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    policeStation: Attribute.RichText;
    noticeNumber: Attribute.String;
    radarNumber: Attribute.String;
    dateOfIssue: Attribute.DateTime;
    dateOfIncident: Attribute.DateTime;
    dateOfSending: Attribute.DateTime;
    userGroup: Attribute.Relation<
      'api::fine.fine',
      'manyToOne',
      'plugin::multi-tenant.user-group'
    >;
    dateOfCreation: Attribute.DateTime;
    showSecondsInDateOfIncident: Attribute.Boolean & Attribute.DefaultTo<false>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::fine.fine', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::fine.fine', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiFlightNumberFlightNumber extends Schema.CollectionType {
  collectionName: 'flight_numbers';
  info: {
    singularName: 'flight-number';
    pluralName: 'flight-numbers';
    displayName: 'Flight Number';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    name: Attribute.String;
    userGroup: Attribute.Relation<
      'api::flight-number.flight-number',
      'manyToOne',
      'plugin::multi-tenant.user-group'
    >;
    time: Attribute.String;
    code: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::flight-number.flight-number',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::flight-number.flight-number',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFuelTypeFuelType extends Schema.CollectionType {
  collectionName: 'fuel_types';
  info: {
    singularName: 'fuel-type';
    pluralName: 'fuel-types';
    displayName: 'Fuel Type';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    name: Attribute.String;
    userGroup: Attribute.Relation<
      'api::fuel-type.fuel-type',
      'manyToOne',
      'plugin::multi-tenant.user-group'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::fuel-type.fuel-type',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::fuel-type.fuel-type',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiGuestGuest extends Schema.CollectionType {
  collectionName: 'guests';
  info: {
    singularName: 'guest';
    pluralName: 'guests';
    displayName: 'Guest';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    customer: Attribute.Relation<
      'api::guest.guest',
      'oneToOne',
      'api::customer.customer'
    >;
    userGroup: Attribute.Relation<
      'api::guest.guest',
      'manyToOne',
      'plugin::multi-tenant.user-group'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::guest.guest',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::guest.guest',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiIndividualIndividual extends Schema.CollectionType {
  collectionName: 'individuals';
  info: {
    singularName: 'individual';
    pluralName: 'individuals';
    displayName: 'Individual';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    civilNumber: Attribute.String & Attribute.Unique;
    dateOfBirth: Attribute.DateTime;
    documents: Attribute.Relation<
      'api::individual.individual',
      'oneToMany',
      'api::document.document'
    >;
    customer: Attribute.Relation<
      'api::individual.individual',
      'oneToOne',
      'api::customer.customer'
    >;
    userGroup: Attribute.Relation<
      'api::individual.individual',
      'manyToOne',
      'plugin::multi-tenant.user-group'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::individual.individual',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::individual.individual',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiInvoiceInvoice extends Schema.CollectionType {
  collectionName: 'invoices';
  info: {
    singularName: 'invoice';
    pluralName: 'invoices';
    displayName: 'Invoice';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    invoiceNumber: Attribute.String;
    fiscalNumber: Attribute.Integer;
    placeOfIssue: Attribute.String;
    dateOfIssue: Attribute.DateTime;
    dateOfDelivery: Attribute.DateTime;
    userGroup: Attribute.Relation<
      'api::invoice.invoice',
      'manyToOne',
      'plugin::multi-tenant.user-group'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::invoice.invoice',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::invoice.invoice',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiInvoicePlaceOfIssueInvoicePlaceOfIssue
  extends Schema.CollectionType {
  collectionName: 'invoice_place_of_issues';
  info: {
    singularName: 'invoice-place-of-issue';
    pluralName: 'invoice-place-of-issues';
    displayName: 'Invoice Place of Issue';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    name: Attribute.String;
    userGroup: Attribute.Relation<
      'api::invoice-place-of-issue.invoice-place-of-issue',
      'manyToOne',
      'plugin::multi-tenant.user-group'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::invoice-place-of-issue.invoice-place-of-issue',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::invoice-place-of-issue.invoice-place-of-issue',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLocationLocation extends Schema.CollectionType {
  collectionName: 'locations';
  info: {
    singularName: 'location';
    pluralName: 'locations';
    displayName: 'Location';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    name: Attribute.String;
    userGroup: Attribute.Relation<
      'api::location.location',
      'manyToOne',
      'plugin::multi-tenant.user-group'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::location.location',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::location.location',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiOrganisationOrganisation extends Schema.CollectionType {
  collectionName: 'organisations';
  info: {
    singularName: 'organisation';
    pluralName: 'organisations';
    displayName: 'Organisation';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    organisationId: Attribute.String;
    customer: Attribute.Relation<
      'api::organisation.organisation',
      'oneToOne',
      'api::customer.customer'
    >;
    userGroup: Attribute.Relation<
      'api::organisation.organisation',
      'manyToOne',
      'plugin::multi-tenant.user-group'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::organisation.organisation',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::organisation.organisation',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiOrganizationDetailOrganizationDetail
  extends Schema.CollectionType {
  collectionName: 'organization_details';
  info: {
    singularName: 'organization-detail';
    pluralName: 'organization-details';
    displayName: 'Organization Detail';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    organizationName: Attribute.String;
    address: Attribute.Relation<
      'api::organization-detail.organization-detail',
      'oneToOne',
      'api::address.address'
    >;
    contact: Attribute.Relation<
      'api::organization-detail.organization-detail',
      'oneToOne',
      'api::contact.contact'
    >;
    organizationId: Attribute.String;
    paymentDetail: Attribute.Relation<
      'api::organization-detail.organization-detail',
      'oneToOne',
      'api::payment-detail.payment-detail'
    >;
    organizationTaxId: Attribute.String;
    userGroup: Attribute.Relation<
      'api::organization-detail.organization-detail',
      'manyToOne',
      'plugin::multi-tenant.user-group'
    >;
    organizationBrandName: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::organization-detail.organization-detail',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::organization-detail.organization-detail',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiOrganizationEmailConfigOrganizationEmailConfig
  extends Schema.CollectionType {
  collectionName: 'organization_email_configs';
  info: {
    singularName: 'organization-email-config';
    pluralName: 'organization-email-configs';
    displayName: 'Organization Email Config';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    host: Attribute.String;
    email: Attribute.String;
    userGroup: Attribute.Relation<
      'api::organization-email-config.organization-email-config',
      'manyToOne',
      'plugin::multi-tenant.user-group'
    >;
    password: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::organization-email-config.organization-email-config',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::organization-email-config.organization-email-config',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiOrganizationSkinOrganizationSkin
  extends Schema.CollectionType {
  collectionName: 'organization_skins';
  info: {
    singularName: 'organization-skin';
    pluralName: 'organization-skins';
    displayName: 'Organization Skin';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    primaryColorLight: Attribute.String;
    secondaryColorLight: Attribute.String;
    accentColorLight: Attribute.String;
    iconLight: Attribute.Media;
    logoLight: Attribute.Media;
    logoDark: Attribute.Media;
    iconDark: Attribute.Media;
    primaryColorDark: Attribute.String;
    secondaryColorDark: Attribute.String;
    accentColorDark: Attribute.String;
    userGroup: Attribute.Relation<
      'api::organization-skin.organization-skin',
      'manyToOne',
      'plugin::multi-tenant.user-group'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::organization-skin.organization-skin',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::organization-skin.organization-skin',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPaymentDetailPaymentDetail extends Schema.CollectionType {
  collectionName: 'payment_details';
  info: {
    singularName: 'payment-detail';
    pluralName: 'payment-details';
    displayName: 'Payment Detail';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    bankName: Attribute.String;
    localCurrencyAccountNumber: Attribute.String;
    foreignCurrencyAccountNumber: Attribute.String;
    IBAN: Attribute.String;
    swiftCode: Attribute.String;
    userGroup: Attribute.Relation<
      'api::payment-detail.payment-detail',
      'manyToOne',
      'plugin::multi-tenant.user-group'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::payment-detail.payment-detail',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::payment-detail.payment-detail',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPaymentMethodPaymentMethod extends Schema.CollectionType {
  collectionName: 'payment_methods';
  info: {
    singularName: 'payment-method';
    pluralName: 'payment-methods';
    displayName: 'Payment Method';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    name: Attribute.String;
    userGroup: Attribute.Relation<
      'api::payment-method.payment-method',
      'manyToOne',
      'plugin::multi-tenant.user-group'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::payment-method.payment-method',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::payment-method.payment-method',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPlaceOfIssuePlaceOfIssue extends Schema.CollectionType {
  collectionName: 'place_of_issues';
  info: {
    singularName: 'place-of-issue';
    pluralName: 'place-of-issues';
    displayName: 'Place of Issue';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    name: Attribute.String;
    userGroup: Attribute.Relation<
      'api::place-of-issue.place-of-issue',
      'manyToOne',
      'plugin::multi-tenant.user-group'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::place-of-issue.place-of-issue',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::place-of-issue.place-of-issue',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPoliceStationPoliceStation extends Schema.CollectionType {
  collectionName: 'police_stations';
  info: {
    singularName: 'police-station';
    pluralName: 'police-stations';
    displayName: 'Police Station';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    name: Attribute.RichText;
    userGroup: Attribute.Relation<
      'api::police-station.police-station',
      'manyToOne',
      'plugin::multi-tenant.user-group'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::police-station.police-station',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::police-station.police-station',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPricePrice extends Schema.CollectionType {
  collectionName: 'prices';
  info: {
    singularName: 'price';
    pluralName: 'prices';
    displayName: 'Price';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    minDays: Attribute.Integer;
    amount: Attribute.Decimal;
    userGroup: Attribute.Relation<
      'api::price.price',
      'oneToOne',
      'plugin::multi-tenant.user-group'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::price.price',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::price.price',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiRadarNumberRadarNumber extends Schema.CollectionType {
  collectionName: 'radar_numbers';
  info: {
    singularName: 'radar-number';
    pluralName: 'radar-numbers';
    displayName: 'Radar Number';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    name: Attribute.String;
    userGroup: Attribute.Relation<
      'api::radar-number.radar-number',
      'manyToOne',
      'plugin::multi-tenant.user-group'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::radar-number.radar-number',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::radar-number.radar-number',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiRecurringDiscountRecurringDiscount
  extends Schema.CollectionType {
  collectionName: 'recurring_discounts';
  info: {
    singularName: 'recurring-discount';
    pluralName: 'recurring-discounts';
    displayName: 'Recurring Discount';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    startDay: Attribute.Integer;
    startMonth: Attribute.Integer;
    endDay: Attribute.Integer;
    endMonth: Attribute.Integer;
    discount: Attribute.Relation<
      'api::recurring-discount.recurring-discount',
      'oneToOne',
      'api::discount.discount'
    >;
    userGroup: Attribute.Relation<
      'api::recurring-discount.recurring-discount',
      'oneToOne',
      'plugin::multi-tenant.user-group'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::recurring-discount.recurring-discount',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::recurring-discount.recurring-discount',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiRentalAgreementDetailRentalAgreementDetail
  extends Schema.CollectionType {
  collectionName: 'rental_agreement_details';
  info: {
    singularName: 'rental-agreement-detail';
    pluralName: 'rental-agreement-details';
    displayName: 'Rental Agreement Detail';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    renter: Attribute.Relation<
      'api::rental-agreement-detail.rental-agreement-detail',
      'oneToOne',
      'api::customer.customer'
    >;
    startLocation: Attribute.String;
    endLocation: Attribute.String;
    userGroup: Attribute.Relation<
      'api::rental-agreement-detail.rental-agreement-detail',
      'manyToOne',
      'plugin::multi-tenant.user-group'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::rental-agreement-detail.rental-agreement-detail',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::rental-agreement-detail.rental-agreement-detail',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiRentalExtraRentalExtra extends Schema.CollectionType {
  collectionName: 'rental_extras';
  info: {
    singularName: 'rental-extra';
    pluralName: 'rental-extras';
    displayName: 'Rental Extra';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    extra: Attribute.Relation<
      'api::rental-extra.rental-extra',
      'oneToOne',
      'api::extra.extra'
    >;
    quantity: Attribute.Integer;
    userGroup: Attribute.Relation<
      'api::rental-extra.rental-extra',
      'manyToOne',
      'plugin::multi-tenant.user-group'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::rental-extra.rental-extra',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::rental-extra.rental-extra',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiServiceLocationServiceLocation
  extends Schema.CollectionType {
  collectionName: 'service_locations';
  info: {
    singularName: 'service-location';
    pluralName: 'service-locations';
    displayName: 'Service Location';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    name: Attribute.String;
    userGroup: Attribute.Relation<
      'api::service-location.service-location',
      'manyToOne',
      'plugin::multi-tenant.user-group'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::service-location.service-location',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::service-location.service-location',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiStatusStatus extends Schema.CollectionType {
  collectionName: 'statuses';
  info: {
    singularName: 'status';
    pluralName: 'statuses';
    displayName: 'Status';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    name: Attribute.String;
    userGroup: Attribute.Relation<
      'api::status.status',
      'manyToOne',
      'plugin::multi-tenant.user-group'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::status.status',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::status.status',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTemporaryDiscountTemporaryDiscount
  extends Schema.CollectionType {
  collectionName: 'temporary_discounts';
  info: {
    singularName: 'temporary-discount';
    pluralName: 'temporary-discounts';
    displayName: 'Temporary Discount';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    startDatetime: Attribute.DateTime;
    endDatetime: Attribute.DateTime;
    discount: Attribute.Relation<
      'api::temporary-discount.temporary-discount',
      'oneToOne',
      'api::discount.discount'
    >;
    userGroup: Attribute.Relation<
      'api::temporary-discount.temporary-discount',
      'oneToOne',
      'plugin::multi-tenant.user-group'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::temporary-discount.temporary-discount',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::temporary-discount.temporary-discount',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTestTableTestTable extends Schema.CollectionType {
  collectionName: 'test_tables';
  info: {
    singularName: 'test-table';
    pluralName: 'test-tables';
    displayName: 'Test Table';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    requestBody: Attribute.JSON;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::test-table.test-table',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::test-table.test-table',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTransactionTransaction extends Schema.CollectionType {
  collectionName: 'transactions';
  info: {
    singularName: 'transaction';
    pluralName: 'transactions';
    displayName: 'Transaction';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    discount: Attribute.Decimal &
      Attribute.SetMinMax<{
        min: 0;
      }> &
      Attribute.DefaultTo<0>;
    discountType: Attribute.Enumeration<['FIXED', 'PER_DAY', 'PERCENTAGE']>;
    additionalCost: Attribute.Decimal &
      Attribute.SetMinMax<{
        min: 0;
      }> &
      Attribute.DefaultTo<0>;
    deposit: Attribute.Decimal &
      Attribute.SetMinMax<{
        min: 0;
      }> &
      Attribute.DefaultTo<0>;
    tax: Attribute.Decimal &
      Attribute.SetMinMax<{
        min: 0;
      }> &
      Attribute.DefaultTo<0>;
    paymentMethod: Attribute.String;
    totalWithTax: Attribute.Decimal &
      Attribute.SetMinMax<{
        min: 0;
      }> &
      Attribute.DefaultTo<0>;
    totalWithoutTax: Attribute.Decimal &
      Attribute.SetMinMax<{
        min: 0;
      }> &
      Attribute.DefaultTo<0>;
    userGroup: Attribute.Relation<
      'api::transaction.transaction',
      'manyToOne',
      'plugin::multi-tenant.user-group'
    >;
    extrasPrice: Attribute.Decimal &
      Attribute.SetMinMax<{
        min: 0;
      }> &
      Attribute.DefaultTo<0>;
    pricePerDay: Attribute.Decimal &
      Attribute.SetMinMax<{
        min: 0;
      }> &
      Attribute.DefaultTo<0>;
    days: Attribute.Integer &
      Attribute.SetMinMax<{
        min: 0;
      }>;
    totalPricePerDay: Attribute.Decimal &
      Attribute.SetMinMax<{
        min: 0;
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::transaction.transaction',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::transaction.transaction',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTransmissionTypeTransmissionType
  extends Schema.CollectionType {
  collectionName: 'transmission_types';
  info: {
    singularName: 'transmission-type';
    pluralName: 'transmission-types';
    displayName: 'Transmission Type';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    name: Attribute.String;
    userGroup: Attribute.Relation<
      'api::transmission-type.transmission-type',
      'manyToOne',
      'plugin::multi-tenant.user-group'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::transmission-type.transmission-type',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::transmission-type.transmission-type',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTypeOfServiceTypeOfService extends Schema.CollectionType {
  collectionName: 'type_of_services';
  info: {
    singularName: 'type-of-service';
    pluralName: 'type-of-services';
    displayName: 'Type of Service';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    name: Attribute.String;
    userGroup: Attribute.Relation<
      'api::type-of-service.type-of-service',
      'manyToOne',
      'plugin::multi-tenant.user-group'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::type-of-service.type-of-service',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::type-of-service.type-of-service',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiUserSettingUserSetting extends Schema.CollectionType {
  collectionName: 'user_settings';
  info: {
    singularName: 'user-setting';
    pluralName: 'user-settings';
    displayName: 'User Setting';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    language: Attribute.String & Attribute.DefaultTo<'ba'>;
    ui: Attribute.String;
    userGroup: Attribute.Relation<
      'api::user-setting.user-setting',
      'manyToOne',
      'plugin::multi-tenant.user-group'
    >;
    user: Attribute.Relation<
      'api::user-setting.user-setting',
      'oneToOne',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::user-setting.user-setting',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::user-setting.user-setting',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiVehicleTypeVehicleType extends Schema.CollectionType {
  collectionName: 'vehicle_types';
  info: {
    singularName: 'vehicle-type';
    pluralName: 'vehicle-types';
    displayName: 'Vehicle Type';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    name: Attribute.String;
    userGroup: Attribute.Relation<
      'api::vehicle-type.vehicle-type',
      'manyToOne',
      'plugin::multi-tenant.user-group'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::vehicle-type.vehicle-type',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::vehicle-type.vehicle-type',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::permission': AdminPermission;
      'admin::user': AdminUser;
      'admin::role': AdminRole;
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
      'plugin::multi-tenant.organization': PluginMultiTenantOrganization;
      'plugin::multi-tenant.user-group': PluginMultiTenantUserGroup;
      'api::address.address': ApiAddressAddress;
      'api::address-of-stay.address-of-stay': ApiAddressOfStayAddressOfStay;
      'api::agreement-detail.agreement-detail': ApiAgreementDetailAgreementDetail;
      'api::car.car': ApiCarCar;
      'api::car-contract.car-contract': ApiCarContractCarContract;
      'api::car-contract-fine.car-contract-fine': ApiCarContractFineCarContractFine;
      'api::car-contract-invoice.car-contract-invoice': ApiCarContractInvoiceCarContractInvoice;
      'api::car-group.car-group': ApiCarGroupCarGroup;
      'api::car-maintenance.car-maintenance': ApiCarMaintenanceCarMaintenance;
      'api::car-reservation.car-reservation': ApiCarReservationCarReservation;
      'api::color.color': ApiColorColor;
      'api::contact.contact': ApiContactContact;
      'api::customer.customer': ApiCustomerCustomer;
      'api::discount.discount': ApiDiscountDiscount;
      'api::document.document': ApiDocumentDocument;
      'api::document-connection.document-connection': ApiDocumentConnectionDocumentConnection;
      'api::extra.extra': ApiExtraExtra;
      'api::fine.fine': ApiFineFine;
      'api::flight-number.flight-number': ApiFlightNumberFlightNumber;
      'api::fuel-type.fuel-type': ApiFuelTypeFuelType;
      'api::guest.guest': ApiGuestGuest;
      'api::individual.individual': ApiIndividualIndividual;
      'api::invoice.invoice': ApiInvoiceInvoice;
      'api::invoice-place-of-issue.invoice-place-of-issue': ApiInvoicePlaceOfIssueInvoicePlaceOfIssue;
      'api::location.location': ApiLocationLocation;
      'api::organisation.organisation': ApiOrganisationOrganisation;
      'api::organization-detail.organization-detail': ApiOrganizationDetailOrganizationDetail;
      'api::organization-email-config.organization-email-config': ApiOrganizationEmailConfigOrganizationEmailConfig;
      'api::organization-skin.organization-skin': ApiOrganizationSkinOrganizationSkin;
      'api::payment-detail.payment-detail': ApiPaymentDetailPaymentDetail;
      'api::payment-method.payment-method': ApiPaymentMethodPaymentMethod;
      'api::place-of-issue.place-of-issue': ApiPlaceOfIssuePlaceOfIssue;
      'api::police-station.police-station': ApiPoliceStationPoliceStation;
      'api::price.price': ApiPricePrice;
      'api::radar-number.radar-number': ApiRadarNumberRadarNumber;
      'api::recurring-discount.recurring-discount': ApiRecurringDiscountRecurringDiscount;
      'api::rental-agreement-detail.rental-agreement-detail': ApiRentalAgreementDetailRentalAgreementDetail;
      'api::rental-extra.rental-extra': ApiRentalExtraRentalExtra;
      'api::service-location.service-location': ApiServiceLocationServiceLocation;
      'api::status.status': ApiStatusStatus;
      'api::temporary-discount.temporary-discount': ApiTemporaryDiscountTemporaryDiscount;
      'api::test-table.test-table': ApiTestTableTestTable;
      'api::transaction.transaction': ApiTransactionTransaction;
      'api::transmission-type.transmission-type': ApiTransmissionTypeTransmissionType;
      'api::type-of-service.type-of-service': ApiTypeOfServiceTypeOfService;
      'api::user-setting.user-setting': ApiUserSettingUserSetting;
      'api::vehicle-type.vehicle-type': ApiVehicleTypeVehicleType;
    }
  }
}
