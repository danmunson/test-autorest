import * as coreClient from "@azure/core-client";

export const Paths12O7243AccountPostRequestbodyContentApplicationJsonSchema: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Paths12O7243AccountPostRequestbodyContentApplicationJsonSchema",
    modelProperties: {
      username: {
        serializedName: "username",
        required: true,
        type: {
          name: "String"
        }
      },
      password: {
        serializedName: "password",
        required: true,
        type: {
          name: "String"
        }
      },
      firstName: {
        serializedName: "first_name",
        required: true,
        type: {
          name: "String"
        }
      },
      lastName: {
        serializedName: "last_name",
        required: true,
        type: {
          name: "String"
        }
      },
      emailAddress: {
        serializedName: "email_address",
        type: {
          name: "String"
        }
      },
      company: {
        serializedName: "company",
        type: {
          name: "String"
        }
      },
      phone: {
        serializedName: "phone",
        type: {
          name: "String"
        }
      },
      addressStreet: {
        serializedName: "address_street",
        type: {
          name: "String"
        }
      },
      addressCity: {
        serializedName: "address_city",
        type: {
          name: "String"
        }
      },
      addressState: {
        serializedName: "address_state",
        type: {
          name: "String"
        }
      },
      addressZip: {
        serializedName: "address_zip",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Paths1JrcezeAccountPostResponses200ContentApplicationJsonSchema: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Paths1JrcezeAccountPostResponses200ContentApplicationJsonSchema",
    modelProperties: {
      accountId: {
        serializedName: "account_id",
        type: {
          name: "String"
        }
      },
      apiKey: {
        serializedName: "api_key",
        type: {
          name: "String"
        }
      },
      createdDate: {
        serializedName: "created_date",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Paths1Qp9MjbAccountAccountidGetResponses200ContentApplicationJsonSchema: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Paths1Qp9MjbAccountAccountidGetResponses200ContentApplicationJsonSchema",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      apiKey: {
        serializedName: "api_key",
        type: {
          name: "String"
        }
      },
      username: {
        serializedName: "username",
        type: {
          name: "String"
        }
      },
      firstName: {
        serializedName: "first_name",
        type: {
          name: "String"
        }
      },
      lastName: {
        serializedName: "last_name",
        type: {
          name: "String"
        }
      },
      emailAddress: {
        serializedName: "email_address",
        type: {
          name: "String"
        }
      },
      company: {
        serializedName: "company",
        type: {
          name: "String"
        }
      },
      phone: {
        serializedName: "phone",
        type: {
          name: "String"
        }
      },
      addressStreet: {
        serializedName: "address_street",
        type: {
          name: "String"
        }
      },
      addressCity: {
        serializedName: "address_city",
        type: {
          name: "String"
        }
      },
      addressState: {
        serializedName: "address_state",
        type: {
          name: "String"
        }
      },
      addressZip: {
        serializedName: "address_zip",
        type: {
          name: "String"
        }
      },
      parentId: {
        serializedName: "parent_id",
        type: {
          name: "String"
        }
      },
      createdDate: {
        serializedName: "created_date",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Paths63Nd43AccountAccountidPutResponses200ContentApplicationJsonSchema: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Paths63Nd43AccountAccountidPutResponses200ContentApplicationJsonSchema",
    modelProperties: {
      accountId: {
        serializedName: "account_id",
        type: {
          name: "String"
        }
      },
      updatedDate: {
        serializedName: "updated_date",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Paths1M9IuipAccountAccountidDeleteResponses200ContentApplicationJsonSchema: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Paths1M9IuipAccountAccountidDeleteResponses200ContentApplicationJsonSchema",
    modelProperties: {
      accountId: {
        serializedName: "account_id",
        type: {
          name: "String"
        }
      },
      deletedDate: {
        serializedName: "deleted_date",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Get200ApplicationJsonItemsItem: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Get200ApplicationJsonItemsItem",
    modelProperties: {
      contactListId: {
        serializedName: "contact_list_id",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      count: {
        serializedName: "count",
        type: {
          name: "String"
        }
      },
      createdDate: {
        serializedName: "created_date",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Paths1J9W60LContactsPostRequestbodyContentApplicationJsonSchema: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Paths1J9W60LContactsPostRequestbodyContentApplicationJsonSchema",
    modelProperties: {
      contactListId: {
        serializedName: "contact_list_id",
        required: true,
        type: {
          name: "Number"
        }
      },
      firstName: {
        serializedName: "first_name",
        required: true,
        type: {
          name: "String"
        }
      },
      lastName: {
        serializedName: "last_name",
        required: true,
        type: {
          name: "String"
        }
      },
      company: {
        serializedName: "company",
        type: {
          name: "String"
        }
      },
      phone: {
        serializedName: "phone",
        type: {
          name: "String"
        }
      },
      addressStreet: {
        serializedName: "address_street",
        required: true,
        type: {
          name: "String"
        }
      },
      addressStreet2: {
        serializedName: "address_street2",
        required: true,
        type: {
          name: "String"
        }
      },
      addressCity: {
        serializedName: "address_city",
        required: true,
        type: {
          name: "String"
        }
      },
      addressState: {
        serializedName: "address_state",
        required: true,
        type: {
          name: "String"
        }
      },
      addressZip: {
        serializedName: "address_zip",
        required: true,
        type: {
          name: "String"
        }
      },
      emailAddress: {
        serializedName: "email_address",
        type: {
          name: "String"
        }
      },
      varField1: {
        serializedName: "var_field_1",
        type: {
          name: "String"
        }
      },
      varField2: {
        serializedName: "var_field_2",
        type: {
          name: "String"
        }
      },
      varField3: {
        serializedName: "var_field_3",
        type: {
          name: "String"
        }
      },
      varField4: {
        serializedName: "var_field_4",
        type: {
          name: "String"
        }
      },
      varField5: {
        serializedName: "var_field_5",
        type: {
          name: "String"
        }
      },
      varField6: {
        serializedName: "var_field_6",
        type: {
          name: "String"
        }
      },
      varField7: {
        serializedName: "var_field_7",
        type: {
          name: "String"
        }
      },
      varField8: {
        serializedName: "var_field_8",
        type: {
          name: "String"
        }
      },
      varField9: {
        serializedName: "var_field_9",
        type: {
          name: "String"
        }
      },
      varField10: {
        serializedName: "var_field_10",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PathsY4Gyj1ContactsPostResponses200ContentApplicationJsonSchema: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "PathsY4Gyj1ContactsPostResponses200ContentApplicationJsonSchema",
    modelProperties: {
      createdDate: {
        serializedName: "created_date",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Paths108O5PeContactsIdGetResponses200ContentApplicationJsonSchemaItems: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Paths108O5PeContactsIdGetResponses200ContentApplicationJsonSchemaItems",
    modelProperties: {
      row: {
        serializedName: "row",
        type: {
          name: "String"
        }
      },
      contactId: {
        serializedName: "contact_id",
        type: {
          name: "String"
        }
      },
      firstName: {
        serializedName: "first_name",
        type: {
          name: "String"
        }
      },
      lastName: {
        serializedName: "last_name",
        type: {
          name: "String"
        }
      },
      company: {
        serializedName: "company",
        type: {
          name: "String"
        }
      },
      phone: {
        serializedName: "phone",
        type: {
          name: "String"
        }
      },
      addressStreet: {
        serializedName: "address_street",
        type: {
          name: "String"
        }
      },
      addressStreet2: {
        serializedName: "address_street2",
        type: {
          name: "String"
        }
      },
      addressCity: {
        serializedName: "address_city",
        type: {
          name: "String"
        }
      },
      addressState: {
        serializedName: "address_state",
        type: {
          name: "String"
        }
      },
      addressZip: {
        serializedName: "address_zip",
        type: {
          name: "String"
        }
      },
      emailAddress: {
        serializedName: "email_address",
        type: {
          name: "String"
        }
      },
      varField1: {
        serializedName: "var_field_1",
        type: {
          name: "String"
        }
      },
      varField2: {
        serializedName: "var_field_2",
        type: {
          name: "String"
        }
      },
      varField3: {
        serializedName: "var_field_3",
        type: {
          name: "String"
        }
      },
      varField4: {
        serializedName: "var_field_4",
        type: {
          name: "String"
        }
      },
      varField5: {
        serializedName: "var_field_5",
        type: {
          name: "String"
        }
      },
      varField6: {
        serializedName: "var_field_6",
        type: {
          name: "String"
        }
      },
      varField7: {
        serializedName: "var_field_7",
        type: {
          name: "String"
        }
      },
      varField8: {
        serializedName: "var_field_8",
        type: {
          name: "String"
        }
      },
      varField9: {
        serializedName: "var_field_9",
        type: {
          name: "String"
        }
      },
      varField10: {
        serializedName: "var_field_10",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Paths1Bo51WcContactsIdPutRequestbodyContentApplicationJsonSchema: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Paths1Bo51WcContactsIdPutRequestbodyContentApplicationJsonSchema",
    modelProperties: {
      contactId: {
        serializedName: "contact_id",
        required: true,
        type: {
          name: "Number"
        }
      },
      contactListId: {
        serializedName: "contact_list_id",
        required: true,
        type: {
          name: "Number"
        }
      },
      firstName: {
        serializedName: "first_name",
        required: true,
        type: {
          name: "String"
        }
      },
      lastName: {
        serializedName: "last_name",
        required: true,
        type: {
          name: "String"
        }
      },
      company: {
        serializedName: "company",
        type: {
          name: "String"
        }
      },
      phone: {
        serializedName: "phone",
        type: {
          name: "String"
        }
      },
      addressStreet: {
        serializedName: "address_street",
        required: true,
        type: {
          name: "String"
        }
      },
      addressStreet2: {
        serializedName: "address_street2",
        type: {
          name: "String"
        }
      },
      addressCity: {
        serializedName: "address_city",
        required: true,
        type: {
          name: "String"
        }
      },
      addressState: {
        serializedName: "address_state",
        required: true,
        type: {
          name: "String"
        }
      },
      addressZip: {
        serializedName: "address_zip",
        required: true,
        type: {
          name: "String"
        }
      },
      emailAddress: {
        serializedName: "email_address",
        type: {
          name: "String"
        }
      },
      varField1: {
        serializedName: "var_field_1",
        type: {
          name: "String"
        }
      },
      varField2: {
        serializedName: "var_field_2",
        type: {
          name: "String"
        }
      },
      varField3: {
        serializedName: "var_field_3",
        type: {
          name: "String"
        }
      },
      varField4: {
        serializedName: "var_field_4",
        type: {
          name: "String"
        }
      },
      varField5: {
        serializedName: "var_field_5",
        type: {
          name: "String"
        }
      },
      varField6: {
        serializedName: "var_field_6",
        type: {
          name: "String"
        }
      },
      varField7: {
        serializedName: "var_field_7",
        type: {
          name: "String"
        }
      },
      varField8: {
        serializedName: "var_field_8",
        type: {
          name: "String"
        }
      },
      varField9: {
        serializedName: "var_field_9",
        type: {
          name: "String"
        }
      },
      varField10: {
        serializedName: "var_field_10",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Paths4KcmzrContactsIdPutResponses200ContentApplicationJsonSchema: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Paths4KcmzrContactsIdPutResponses200ContentApplicationJsonSchema",
    modelProperties: {
      updatedDate: {
        serializedName: "updated_date",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PathsPf12G8ContactsIdDeleteResponses200ContentApplicationJsonSchema: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "PathsPf12G8ContactsIdDeleteResponses200ContentApplicationJsonSchema",
    modelProperties: {
      deletedDate: {
        serializedName: "deleted_date",
        type: {
          name: "String"
        }
      }
    }
  }
};
