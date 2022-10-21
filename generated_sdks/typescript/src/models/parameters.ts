import {
  OperationParameter,
  OperationURLParameter,
  OperationQueryParameter
} from "@azure/core-client";
import {
  Paths12O7243AccountPostRequestbodyContentApplicationJsonSchema as Paths12O7243AccountPostRequestbodyContentApplicationJsonSchemaMapper,
  Paths1J9W60LContactsPostRequestbodyContentApplicationJsonSchema as Paths1J9W60LContactsPostRequestbodyContentApplicationJsonSchemaMapper,
  Paths1Bo51WcContactsIdPutRequestbodyContentApplicationJsonSchema as Paths1Bo51WcContactsIdPutRequestbodyContentApplicationJsonSchemaMapper
} from "../models/mappers";

export const contentType: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String"
    }
  }
};

export const body: OperationParameter = {
  parameterPath: "body",
  mapper: Paths12O7243AccountPostRequestbodyContentApplicationJsonSchemaMapper
};

export const accept: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const $host: OperationURLParameter = {
  parameterPath: "$host",
  mapper: {
    serializedName: "$host",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const accountId: OperationURLParameter = {
  parameterPath: "accountId",
  mapper: {
    serializedName: "accountId",
    required: true,
    type: {
      name: "Number"
    }
  }
};

export const body1: OperationParameter = {
  parameterPath: "body",
  mapper: Paths1J9W60LContactsPostRequestbodyContentApplicationJsonSchemaMapper
};

export const id: OperationURLParameter = {
  parameterPath: "id",
  mapper: {
    serializedName: "id",
    required: true,
    type: {
      name: "Number"
    }
  }
};

export const start: OperationQueryParameter = {
  parameterPath: ["options", "start"],
  mapper: {
    serializedName: "start",
    type: {
      name: "Number"
    }
  }
};

export const limit: OperationQueryParameter = {
  parameterPath: ["options", "limit"],
  mapper: {
    serializedName: "limit",
    type: {
      name: "Number"
    }
  }
};

export const body2: OperationParameter = {
  parameterPath: "body",
  mapper: Paths1Bo51WcContactsIdPutRequestbodyContentApplicationJsonSchemaMapper
};
