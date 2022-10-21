import * as coreClient from "@azure/core-client";
import * as coreRestPipeline from "@azure/core-rest-pipeline";
import * as Parameters from "./models/parameters";
import * as Mappers from "./models/mappers";
import {
  HostOptions,
  PostalyticsIntegrationOptionalParams,
  Paths12O7243AccountPostRequestbodyContentApplicationJsonSchema,
  CreateAccountOptionalParams,
  CreateAccountResponse,
  GetAccountByIdOptionalParams,
  GetAccountByIdResponse,
  UpdateAccountOptionalParams,
  UpdateAccountResponse,
  DeleteAccountOptionalParams,
  DeleteAccountResponse,
  GetAllContactsOptionalParams,
  GetAllContactsResponse,
  Paths1J9W60LContactsPostRequestbodyContentApplicationJsonSchema,
  CreateContactOptionalParams,
  CreateContactResponse,
  GetContactByIdOptionalParams,
  GetContactByIdResponse,
  Paths1Bo51WcContactsIdPutRequestbodyContentApplicationJsonSchema,
  UpdateContactOptionalParams,
  UpdateContactResponse,
  DeleteContactOptionalParams,
  DeleteContactResponse
} from "./models";

export class PostalyticsIntegration extends coreClient.ServiceClient {
  $host: HostOptions;

  /**
   * Initializes a new instance of the PostalyticsIntegration class.
   * @param options The parameter options
   */
  constructor(options?: PostalyticsIntegrationOptionalParams) {
    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: PostalyticsIntegrationOptionalParams = {
      requestContentType: "application/json; charset=utf-8"
    };

    const packageDetails = `azsdk-js-postalyticsIntegration/1.0.0-beta.1`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
        : `${packageDetails}`;

    const optionsWithDefaults = {
      ...defaults,
      ...options,
      userAgentOptions: {
        userAgentPrefix
      },
      baseUri:
        options.endpoint ?? options.baseUri ?? "https://api.postalytics.com/"
    };
    super(optionsWithDefaults);

    let bearerTokenAuthenticationPolicyFound: boolean = false;
    if (options?.pipeline && options.pipeline.getOrderedPolicies().length > 0) {
      const pipelinePolicies: coreRestPipeline.PipelinePolicy[] = options.pipeline.getOrderedPolicies();
      bearerTokenAuthenticationPolicyFound = pipelinePolicies.some(
        (pipelinePolicy) =>
          pipelinePolicy.name ===
          coreRestPipeline.bearerTokenAuthenticationPolicyName
      );
    }
    if (
      !options ||
      !options.pipeline ||
      options.pipeline.getOrderedPolicies().length == 0 ||
      !bearerTokenAuthenticationPolicyFound
    ) {
      this.pipeline.removePolicy({
        name: coreRestPipeline.bearerTokenAuthenticationPolicyName
      });
      this.pipeline.addPolicy(
        coreRestPipeline.bearerTokenAuthenticationPolicy({
          credential: credentials,
          scopes: `${optionsWithDefaults.credentialScopes}`,
          challengeCallbacks: {
            authorizeRequestOnChallenge:
              coreClient.authorizeRequestOnClaimChallenge
          }
        })
      );
    }

    // Assigning values to Constant parameters
    this.$host = options.$host || "https://api.postalytics.com/";
  }

  /**
   * Create Account
   * @param body
   * @param options The options parameters.
   */
  createAccount(
    body: Paths12O7243AccountPostRequestbodyContentApplicationJsonSchema,
    options?: CreateAccountOptionalParams
  ): Promise<CreateAccountResponse> {
    return this.sendOperationRequest(
      { body, options },
      createAccountOperationSpec
    );
  }

  /**
   * Get Account
   * @param accountId ID of the account
   * @param options The options parameters.
   */
  getAccountById(
    accountId: number,
    options?: GetAccountByIdOptionalParams
  ): Promise<GetAccountByIdResponse> {
    return this.sendOperationRequest(
      { accountId, options },
      getAccountByIdOperationSpec
    );
  }

  /**
   * Update Account
   * @param accountId ID of the account
   * @param options The options parameters.
   */
  updateAccount(
    accountId: number,
    options?: UpdateAccountOptionalParams
  ): Promise<UpdateAccountResponse> {
    return this.sendOperationRequest(
      { accountId, options },
      updateAccountOperationSpec
    );
  }

  /**
   * Delete Account
   * @param accountId ID of the account
   * @param options The options parameters.
   */
  deleteAccount(
    accountId: number,
    options?: DeleteAccountOptionalParams
  ): Promise<DeleteAccountResponse> {
    return this.sendOperationRequest(
      { accountId, options },
      deleteAccountOperationSpec
    );
  }

  /**
   * Get all contact lists
   * @param options The options parameters.
   */
  getAllContacts(
    options?: GetAllContactsOptionalParams
  ): Promise<GetAllContactsResponse> {
    return this.sendOperationRequest({ options }, getAllContactsOperationSpec);
  }

  /**
   * Add A Contact To Contact List
   * @param body
   * @param options The options parameters.
   */
  createContact(
    body: Paths1J9W60LContactsPostRequestbodyContentApplicationJsonSchema,
    options?: CreateContactOptionalParams
  ): Promise<CreateContactResponse> {
    return this.sendOperationRequest(
      { body, options },
      createContactOperationSpec
    );
  }

  /**
   * Get All Contacts On A List
   * @param id ID of the account
   * @param options The options parameters.
   */
  getContactById(
    id: number,
    options?: GetContactByIdOptionalParams
  ): Promise<GetContactByIdResponse> {
    return this.sendOperationRequest(
      { id, options },
      getContactByIdOperationSpec
    );
  }

  /**
   * Update Contact
   * @param id ID of the account
   * @param body
   * @param options The options parameters.
   */
  updateContact(
    id: number,
    body: Paths1Bo51WcContactsIdPutRequestbodyContentApplicationJsonSchema,
    options?: UpdateContactOptionalParams
  ): Promise<UpdateContactResponse> {
    return this.sendOperationRequest(
      { id, body, options },
      updateContactOperationSpec
    );
  }

  /**
   * Delete Contact
   * @param id ID of the account
   * @param options The options parameters.
   */
  deleteContact(
    id: number,
    options?: DeleteContactOptionalParams
  ): Promise<DeleteContactResponse> {
    return this.sendOperationRequest(
      { id, options },
      deleteContactOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createAccountOperationSpec: coreClient.OperationSpec = {
  path: "/account",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper:
        Mappers.Paths1JrcezeAccountPostResponses200ContentApplicationJsonSchema
    }
  },
  requestBody: Parameters.body,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const getAccountByIdOperationSpec: coreClient.OperationSpec = {
  path: "/account/{accountId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper:
        Mappers.Paths1Qp9MjbAccountAccountidGetResponses200ContentApplicationJsonSchema
    }
  },
  urlParameters: [Parameters.$host, Parameters.accountId],
  headerParameters: [Parameters.accept],
  serializer
};
const updateAccountOperationSpec: coreClient.OperationSpec = {
  path: "/account/{accountId}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper:
        Mappers.Paths63Nd43AccountAccountidPutResponses200ContentApplicationJsonSchema
    }
  },
  urlParameters: [Parameters.$host, Parameters.accountId],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteAccountOperationSpec: coreClient.OperationSpec = {
  path: "/account/{accountId}",
  httpMethod: "DELETE",
  responses: {
    200: {
      bodyMapper:
        Mappers.Paths1M9IuipAccountAccountidDeleteResponses200ContentApplicationJsonSchema
    }
  },
  urlParameters: [Parameters.$host, Parameters.accountId],
  headerParameters: [Parameters.accept],
  serializer
};
const getAllContactsOperationSpec: coreClient.OperationSpec = {
  path: "/contacts",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Get200ApplicationJsonItemsItem"
            }
          }
        }
      }
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const createContactOperationSpec: coreClient.OperationSpec = {
  path: "/contacts",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper:
        Mappers.PathsY4Gyj1ContactsPostResponses200ContentApplicationJsonSchema
    }
  },
  requestBody: Parameters.body1,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const getContactByIdOperationSpec: coreClient.OperationSpec = {
  path: "/contacts/{id}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className:
                "Paths108O5PeContactsIdGetResponses200ContentApplicationJsonSchemaItems"
            }
          }
        }
      }
    }
  },
  queryParameters: [Parameters.start, Parameters.limit],
  urlParameters: [Parameters.$host, Parameters.id],
  headerParameters: [Parameters.accept],
  serializer
};
const updateContactOperationSpec: coreClient.OperationSpec = {
  path: "/contacts/{id}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper:
        Mappers.Paths4KcmzrContactsIdPutResponses200ContentApplicationJsonSchema
    }
  },
  requestBody: Parameters.body2,
  urlParameters: [Parameters.$host, Parameters.id],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const deleteContactOperationSpec: coreClient.OperationSpec = {
  path: "/contacts/{id}",
  httpMethod: "DELETE",
  responses: {
    200: {
      bodyMapper:
        Mappers.PathsPf12G8ContactsIdDeleteResponses200ContentApplicationJsonSchema
    }
  },
  urlParameters: [Parameters.$host, Parameters.id],
  headerParameters: [Parameters.accept],
  serializer
};
