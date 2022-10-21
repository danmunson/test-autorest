import * as coreClient from "@azure/core-client";

export interface Paths12O7243AccountPostRequestbodyContentApplicationJsonSchema {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  emailAddress?: string;
  company?: string;
  phone?: string;
  addressStreet?: string;
  addressCity?: string;
  addressState?: string;
  addressZip?: string;
}

export interface Paths1JrcezeAccountPostResponses200ContentApplicationJsonSchema {
  accountId?: string;
  apiKey?: string;
  createdDate?: string;
}

export interface Paths1Qp9MjbAccountAccountidGetResponses200ContentApplicationJsonSchema {
  id?: string;
  apiKey?: string;
  username?: string;
  firstName?: string;
  lastName?: string;
  emailAddress?: string;
  company?: string;
  phone?: string;
  addressStreet?: string;
  addressCity?: string;
  addressState?: string;
  addressZip?: string;
  parentId?: string;
  createdDate?: string;
}

export interface Paths63Nd43AccountAccountidPutResponses200ContentApplicationJsonSchema {
  accountId?: string;
  updatedDate?: string;
}

export interface Paths1M9IuipAccountAccountidDeleteResponses200ContentApplicationJsonSchema {
  accountId?: string;
  deletedDate?: string;
}

export interface Get200ApplicationJsonItemsItem {
  contactListId?: string;
  name?: string;
  count?: string;
  createdDate?: string;
}

export interface Paths1J9W60LContactsPostRequestbodyContentApplicationJsonSchema {
  contactListId: number;
  firstName: string;
  lastName: string;
  company?: string;
  phone?: string;
  addressStreet: string;
  addressStreet2: string;
  addressCity: string;
  addressState: string;
  addressZip: string;
  emailAddress?: string;
  varField1?: string;
  varField2?: string;
  varField3?: string;
  varField4?: string;
  varField5?: string;
  varField6?: string;
  varField7?: string;
  varField8?: string;
  varField9?: string;
  varField10?: string;
}

export interface PathsY4Gyj1ContactsPostResponses200ContentApplicationJsonSchema {
  createdDate?: string;
}

export interface Paths108O5PeContactsIdGetResponses200ContentApplicationJsonSchemaItems {
  row?: string;
  contactId?: string;
  firstName?: string;
  lastName?: string;
  company?: string;
  phone?: string;
  addressStreet?: string;
  addressStreet2?: string;
  addressCity?: string;
  addressState?: string;
  addressZip?: string;
  emailAddress?: string;
  varField1?: string;
  varField2?: string;
  varField3?: string;
  varField4?: string;
  varField5?: string;
  varField6?: string;
  varField7?: string;
  varField8?: string;
  varField9?: string;
  varField10?: string;
}

export interface Paths1Bo51WcContactsIdPutRequestbodyContentApplicationJsonSchema {
  contactId: number;
  contactListId: number;
  firstName: string;
  lastName: string;
  company?: string;
  phone?: string;
  addressStreet: string;
  addressStreet2?: string;
  addressCity: string;
  addressState: string;
  addressZip: string;
  emailAddress?: string;
  varField1?: string;
  varField2?: string;
  varField3?: string;
  varField4?: string;
  varField5?: string;
  varField6?: string;
  varField7?: string;
  varField8?: string;
  varField9?: string;
  varField10?: string;
}

export interface Paths4KcmzrContactsIdPutResponses200ContentApplicationJsonSchema {
  updatedDate?: string;
}

export interface PathsPf12G8ContactsIdDeleteResponses200ContentApplicationJsonSchema {
  deletedDate?: string;
}

/** Known values of {@link HostOptions} that the service accepts. */
export enum KnownHostOptions {
  /** host: https://api.postalytics.com/ */
  HttpsApiPostalyticsCom = "https://api.postalytics.com/",
  /** host: https://api-sandbox.postalytics.com/ */
  HttpsApiSandboxPostalyticsCom = "https://api-sandbox.postalytics.com/"
}

/**
 * Defines values for HostOptions. \
 * {@link KnownHostOptions} can be used interchangeably with HostOptions,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **https:\/\/api.postalytics.com\/**: host: https:\/\/api.postalytics.com\/ \
 * **https:\/\/api-sandbox.postalytics.com\/**: host: https:\/\/api-sandbox.postalytics.com\/
 */
export type HostOptions = string;

/** Optional parameters. */
export interface CreateAccountOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the createAccount operation. */
export type CreateAccountResponse = Paths1JrcezeAccountPostResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export interface GetAccountByIdOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getAccountById operation. */
export type GetAccountByIdResponse = Paths1Qp9MjbAccountAccountidGetResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export interface UpdateAccountOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the updateAccount operation. */
export type UpdateAccountResponse = Paths63Nd43AccountAccountidPutResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export interface DeleteAccountOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the deleteAccount operation. */
export type DeleteAccountResponse = Paths1M9IuipAccountAccountidDeleteResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export interface GetAllContactsOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getAllContacts operation. */
export type GetAllContactsResponse = Get200ApplicationJsonItemsItem[];

/** Optional parameters. */
export interface CreateContactOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the createContact operation. */
export type CreateContactResponse = PathsY4Gyj1ContactsPostResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export interface GetContactByIdOptionalParams
  extends coreClient.OperationOptions {
  /** The row to start getting records at */
  start?: number;
  /** The number of rows to retrieve. Value can be from 1 to 100 */
  limit?: number;
}

/** Contains response data for the getContactById operation. */
export type GetContactByIdResponse = Paths108O5PeContactsIdGetResponses200ContentApplicationJsonSchemaItems[];

/** Optional parameters. */
export interface UpdateContactOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the updateContact operation. */
export type UpdateContactResponse = Paths4KcmzrContactsIdPutResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export interface DeleteContactOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the deleteContact operation. */
export type DeleteContactResponse = PathsPf12G8ContactsIdDeleteResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export interface PostalyticsIntegrationOptionalParams
  extends coreClient.ServiceClientOptions {
  /** server parameter */
  $host?: HostOptions;
  /** Overrides client endpoint. */
  endpoint?: string;
}
