
    const schema = {
  "asyncapi": "2.5.0",
  "info": {
    "title": "scp-index",
    "description": "Specification for survey content package index.",
    "license": {
      "name": "CC0 1.0",
      "url": "https://creativecommons.org/publicdomain/zero/1.0/"
    },
    "version": " - click on schema id to expand",
    "contact": {
      "name": "Home of iqb-specifications (German only)",
      "url": "https://iqb-specifications.github.io/"
    }
  },
  "channels": {
    "iqb_data_structures": {
      "subscribe": {
        "operationId": "Please select one schema",
        "message": {
          "messageId": "select_schema",
          "x-parser-message-name": "select_schema"
        }
      }
    }
  },
  "components": {
    "schemas": {
      "survey-content-index": {
        "$id": "scp-index@0.2",
        "$schema": "http://json-schema.org/draft-07/schema#",
        "title": "Survey Content Package Index",
        "description": "Specification for survey content package index.",
        "type": "object",
        "properties": {
          "packageId": {
            "description": "Identifier for the survey content package",
            "type": "string",
            "x-parser-schema-id": "<anonymous-schema-1>"
          },
          "version": {
            "description": "Package Version in SemVer format.",
            "type": "string",
            "x-parser-schema-id": "<anonymous-schema-2>"
          },
          "name": {
            "description": "Language tagged text",
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "lang": {
                  "description": "ISO-language code",
                  "type": "string",
                  "minLength": 1,
                  "pattern": "^[a-z]{2}$",
                  "x-parser-schema-id": "<anonymous-schema-5>"
                },
                "value": {
                  "type": "string",
                  "x-parser-schema-id": "<anonymous-schema-6>"
                }
              },
              "required": [
                "lang",
                "value"
              ],
              "additionalProperties": false,
              "x-parser-schema-id": "<anonymous-schema-4>"
            },
            "minItems": 1,
            "x-parser-schema-id": "<anonymous-schema-3>"
          },
          "description": "$ref:$.components.schemas.survey-content-index.properties.name",
          "maintainerName": {
            "description": "Name of the person or institution responsable for creating and maintaining",
            "type": "string",
            "examples": [
              "IQB - Institut zur Qualitätsentwicklung im Bildungswesen"
            ],
            "x-parser-schema-id": "<anonymous-schema-7>"
          },
          "maintainerUrl": {
            "description": "Url of maintainer to get more information or to get in contact",
            "type": "string",
            "examples": [
              "https://www.iqb.hu-berlin.de/tba"
            ],
            "x-parser-schema-id": "<anonymous-schema-8>"
          },
          "status": {
            "description": "Describes the progress of development and visibility issues. During development, version suffixes may be used like 'beta', 'rc' etc.",
            "type": "string",
            "enum": [
              "IN_DEVELOPMENT",
              "DISCONTINUED",
              "RELEASED_PUBLIC",
              "RELEASED_CONFIDENTIAL"
            ],
            "default": "IN_DEVELOPMENT",
            "x-parser-schema-id": "<anonymous-schema-9>"
          },
          "metadata": {
            "$id": "metadata-values@iqb-standard@3.0",
            "$schema": "http://json-schema.org/draft-07/schema#",
            "title": "Metadata Values",
            "description": "Data structure to store metadata",
            "type": "object",
            "properties": {
              "profileId": {
                "type": "string",
                "description": "Identifier for the metadata profile",
                "minLength": 1,
                "x-parser-schema-id": "<anonymous-schema-10>"
              },
              "order": {
                "type": "integer",
                "description": "Specifies the position of this profile if more than one are used. Set to -1 if you want to hide/disable the profile.",
                "x-parser-schema-id": "<anonymous-schema-11>"
              },
              "entries": {
                "type": "array",
                "items": {
                  "type": "object",
                  "properties": {
                    "id": {
                      "type": "string",
                      "description": "Id of the profile entry related to these data",
                      "minLength": 1,
                      "x-parser-schema-id": "<anonymous-schema-14>"
                    },
                    "label": {
                      "type": "array",
                      "description": "Used for storing the input of texts. This type applies also in cases when only one language is used.",
                      "items": {
                        "type": "object",
                        "properties": {
                          "lang": {
                            "type": "string",
                            "minLength": 1,
                            "description": "ISO-language code",
                            "pattern": "^[a-z]{2}$",
                            "x-parser-schema-id": "<anonymous-schema-17>"
                          },
                          "value": {
                            "type": "string",
                            "x-parser-schema-id": "<anonymous-schema-18>"
                          }
                        },
                        "required": [
                          "lang",
                          "value"
                        ],
                        "additionalProperties": false,
                        "x-parser-schema-id": "<anonymous-schema-16>"
                      },
                      "minItems": 1,
                      "x-parser-schema-id": "<anonymous-schema-15>"
                    },
                    "value": {
                      "anyOf": [
                        "$ref:$.components.schemas.survey-content-index.properties.metadata.properties.entries.items.properties.label",
                        {
                          "type": "array",
                          "description": "Used for storing selected vocabulary entries and (optional) additional texts.",
                          "items": {
                            "type": "object",
                            "properties": {
                              "id": {
                                "type": "string",
                                "minLength": 1,
                                "description": "Full id of the vocabulary entry as url - including the vocabulary url",
                                "x-parser-schema-id": "<anonymous-schema-22>"
                              },
                              "label": "$ref:$.components.schemas.survey-content-index.properties.metadata.properties.entries.items.properties.label",
                              "annotation": "$ref:$.components.schemas.survey-content-index.properties.metadata.properties.entries.items.properties.label"
                            },
                            "required": [
                              "id"
                            ],
                            "additionalProperties": false,
                            "x-parser-schema-id": "<anonymous-schema-21>"
                          },
                          "minItems": 1,
                          "x-parser-schema-id": "<anonymous-schema-20>"
                        },
                        {
                          "type": "object",
                          "description": "Used for uncoded text, numbers and boolean.",
                          "properties": {
                            "raw": {
                              "type": "string",
                              "description": "Pure value. Numbers and boolean in JavaScript toString() notation ('true', 'false', '23.566').",
                              "x-parser-schema-id": "<anonymous-schema-24>"
                            },
                            "asText": "$ref:$.components.schemas.survey-content-index.properties.metadata.properties.entries.items.properties.label"
                          },
                          "required": [
                            "raw"
                          ],
                          "additionalProperties": false,
                          "x-parser-schema-id": "<anonymous-schema-23>"
                        }
                      ],
                      "x-parser-schema-id": "<anonymous-schema-19>"
                    }
                  },
                  "required": [
                    "id",
                    "value"
                  ],
                  "x-parser-schema-id": "<anonymous-schema-13>"
                },
                "minItems": 1,
                "x-parser-schema-id": "<anonymous-schema-12>"
              }
            },
            "required": [
              "profileId",
              "entries"
            ],
            "additionalProperties": false,
            "$defs": {
              "language_coded_texts": "$ref:$.components.schemas.survey-content-index.properties.metadata.properties.entries.items.properties.label",
              "vocabulary_entries": "$ref:$.components.schemas.survey-content-index.properties.metadata.properties.entries.items.properties.value.anyOf[1]",
              "simple_value": "$ref:$.components.schemas.survey-content-index.properties.metadata.properties.entries.items.properties.value.anyOf[2]"
            }
          },
          "codingParameters": {
            "description": "Some parameters for coding and analysis in general",
            "type": "object",
            "properties": {
              "itemValues": {
                "description": "Mapping logical item values to numeric values. Standards are 1-FULL_CREDIT, 0-NO_CREDIT, -99-MISSING.",
                "type": "array",
                "items": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string",
                      "enum": [
                        "FULL_CREDIT",
                        "NO_CREDIT",
                        "MISSING"
                      ],
                      "x-parser-schema-id": "<anonymous-schema-28>"
                    },
                    "value": {
                      "type": "integer",
                      "x-parser-schema-id": "<anonymous-schema-29>"
                    }
                  },
                  "x-parser-schema-id": "<anonymous-schema-27>"
                },
                "x-parser-schema-id": "<anonymous-schema-26>"
              },
              "statusMapping": {
                "description": "Rules how to translate response status into item value",
                "type": "array",
                "items": {
                  "type": "object",
                  "properties": {
                    "itemValueType": "$ref:$.components.schemas.survey-content-index.properties.codingParameters.properties.itemValues.items.properties.type",
                    "status": {
                      "type": "array",
                      "items": {
                        "type": "string",
                        "enum": [
                          "UNSET",
                          "NOT_REACHED",
                          "DISPLAYED",
                          "VALUE_CHANGED",
                          "DERIVE_ERROR",
                          "NO_CODING",
                          "INVALID",
                          "CODING_INCOMPLETE",
                          "CODING_ERROR",
                          "PARTLY_DISPLAYED",
                          "DERIVE_PENDING",
                          "INTENDED_INCOMPLETE",
                          "CODE_SELECTION_PENDING"
                        ],
                        "x-parser-schema-id": "<anonymous-schema-33>"
                      },
                      "minItems": 1,
                      "x-parser-schema-id": "<anonymous-schema-32>"
                    }
                  },
                  "required": [
                    "itemValueType",
                    "status"
                  ],
                  "additionalProperties": false,
                  "x-parser-schema-id": "<anonymous-schema-31>"
                },
                "x-parser-schema-id": "<anonymous-schema-30>"
              },
              "minItemsPercent": {
                "description": "Minimum number of items in responses for a scale to be reported (percent)",
                "type": "number",
                "default": 0,
                "x-parser-schema-id": "<anonymous-schema-34>"
              }
            },
            "additionalProperties": false,
            "x-parser-schema-id": "<anonymous-schema-25>"
          },
          "surveyParts": {
            "description": "Groups of instruments, administrated the same way or at the same time.",
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "id": {
                  "type": "string",
                  "description": "Identifier for the survey part",
                  "x-parser-schema-id": "<anonymous-schema-37>"
                },
                "name": "$ref:$.components.schemas.survey-content-index.properties.name",
                "description": "$ref:$.components.schemas.survey-content-index.properties.name",
                "metadata": "$ref:$.components.schemas.survey-content-index.properties.metadata",
                "bookletModules": {
                  "description": "All modules used in this surveyPart by instruments",
                  "type": "array",
                  "items": {
                    "type": "object",
                    "properties": {
                      "id": {
                        "description": "Id to be referred in instruments",
                        "type": "string",
                        "x-parser-schema-id": "<anonymous-schema-40>"
                      },
                      "name": {
                        "type": "string",
                        "x-parser-schema-id": "<anonymous-schema-41>"
                      },
                      "description": {
                        "type": "string",
                        "x-parser-schema-id": "<anonymous-schema-42>"
                      },
                      "lang": {
                        "description": "ISO-language code",
                        "type": "string",
                        "minLength": 1,
                        "pattern": "^[a-z]{2}$",
                        "x-parser-schema-id": "<anonymous-schema-43>"
                      },
                      "units": {
                        "description": "All units being part of the module",
                        "type": "array",
                        "items": {
                          "type": "object",
                          "properties": {
                            "id": {
                              "description": "Identifier for the instrument",
                              "type": "string",
                              "x-parser-schema-id": "<anonymous-schema-46>"
                            },
                            "alias": {
                              "description": "Identifier for responses",
                              "type": "string",
                              "x-parser-schema-id": "<anonymous-schema-47>"
                            },
                            "name": {
                              "type": "string",
                              "x-parser-schema-id": "<anonymous-schema-48>"
                            },
                            "description": {
                              "type": "string",
                              "x-parser-schema-id": "<anonymous-schema-49>"
                            },
                            "order": {
                              "description": "Default sorting is alpha-numeric.",
                              "type": "integer",
                              "minimum": 0,
                              "default": 0,
                              "x-parser-schema-id": "<anonymous-schema-50>"
                            },
                            "dependencies": {
                              "description": "All digital objects being part of the unit",
                              "type": "array",
                              "items": {
                                "type": "object",
                                "properties": {
                                  "id": {
                                    "description": "Id/path to find the digital object",
                                    "type": "string",
                                    "x-parser-schema-id": "<anonymous-schema-53>"
                                  },
                                  "type": {
                                    "description": "Describes the function of the dependency.",
                                    "type": "string",
                                    "enum": [
                                      "UNIT_XML",
                                      "CODING_SCHEME",
                                      "METADATA",
                                      "UI_DEFINITION",
                                      "PLAYER",
                                      "PLAYER_DEPENDENCY",
                                      "WIDGET"
                                    ],
                                    "x-parser-schema-id": "<anonymous-schema-54>"
                                  }
                                },
                                "required": [
                                  "id",
                                  "type"
                                ],
                                "additionalProperties": false,
                                "x-parser-schema-id": "<anonymous-schema-52>"
                              },
                              "minItems": 1,
                              "x-parser-schema-id": "<anonymous-schema-51>"
                            }
                          },
                          "required": [
                            "id",
                            "dependencies"
                          ],
                          "additionalProperties": false,
                          "x-parser-schema-id": "<anonymous-schema-45>"
                        },
                        "minItems": 1,
                        "x-parser-schema-id": "<anonymous-schema-44>"
                      }
                    },
                    "required": [
                      "id",
                      "lang",
                      "units"
                    ],
                    "additionalProperties": false,
                    "x-parser-schema-id": "<anonymous-schema-39>"
                  },
                  "minItems": 1,
                  "x-parser-schema-id": "<anonymous-schema-38>"
                },
                "instruments": {
                  "description": "All instruments for the survey part, online or to hand out",
                  "type": "array",
                  "items": {
                    "type": "object",
                    "properties": {
                      "id": {
                        "description": "Identifier for the instrument",
                        "type": "string",
                        "x-parser-schema-id": "<anonymous-schema-57>"
                      },
                      "name": "$ref:$.components.schemas.survey-content-index.properties.name",
                      "metadata": "$ref:$.components.schemas.survey-content-index.properties.metadata",
                      "testcenterBooklet": {
                        "description": "If part of TBA, this ids refer to the language specific XML definition used to run the instrument in IQB-Testcenter.",
                        "type": "array",
                        "items": {
                          "type": "object",
                          "properties": {
                            "lang": {
                              "type": "string",
                              "minLength": 1,
                              "description": "ISO-language code",
                              "pattern": "^[a-z]{2}$",
                              "x-parser-schema-id": "<anonymous-schema-60>"
                            },
                            "definitionId": {
                              "description": "Id/path to the booklet XML to run this instrument",
                              "type": "string",
                              "x-parser-schema-id": "<anonymous-schema-61>"
                            },
                            "modules": {
                              "type": "array",
                              "items": {
                                "type": "object",
                                "properties": {
                                  "moduleId": {
                                    "description": "Reference to the module id at surveyPart level",
                                    "type": "string",
                                    "x-parser-schema-id": "<anonymous-schema-64>"
                                  },
                                  "order": {
                                    "description": "Default sorting is alpha-numeric.",
                                    "type": "integer",
                                    "minimum": 0,
                                    "default": 0,
                                    "x-parser-schema-id": "<anonymous-schema-65>"
                                  }
                                },
                                "required": [
                                  "moduleId"
                                ],
                                "additionalProperties": false,
                                "x-parser-schema-id": "<anonymous-schema-63>"
                              },
                              "minItems": 1,
                              "x-parser-schema-id": "<anonymous-schema-62>"
                            }
                          },
                          "required": [
                            "lang",
                            "definitionId",
                            "modules"
                          ],
                          "additionalProperties": false,
                          "x-parser-schema-id": "<anonymous-schema-59>"
                        },
                        "x-parser-schema-id": "<anonymous-schema-58>"
                      },
                      "administrationMode": {
                        "type": "string",
                        "enum": [
                          "TEST_BY_TEST_TAKER",
                          "TEST_BY_PROCTOR",
                          "STIMULUS_FOR_TEST_TAKER"
                        ],
                        "default": "TEST_BY_TEST_TAKER",
                        "x-parser-schema-id": "<anonymous-schema-66>"
                      },
                      "handOutsForTestTaker": {
                        "description": "All documents must be presented to the test taker (online or print-out).",
                        "type": "array",
                        "items": {
                          "type": "object",
                          "properties": {
                            "order": {
                              "description": "Default sorting is alpha-numeric.",
                              "type": "integer",
                              "minimum": 0,
                              "default": 0,
                              "x-parser-schema-id": "<anonymous-schema-69>"
                            },
                            "mode": {
                              "type": "string",
                              "enum": [
                                "PRINT_SHOW",
                                "PRINT_WRITE_DRAW",
                                "ON_SCREEN"
                              ],
                              "default": "PRINT",
                              "x-parser-schema-id": "<anonymous-schema-70>"
                            },
                            "file": {
                              "description": "All language variants of the same hand-out",
                              "type": "array",
                              "items": {
                                "description": "Variants of the same object in different languages",
                                "type": "array",
                                "items": {
                                  "type": "object",
                                  "properties": {
                                    "id": {
                                      "description": "id/path to the object, used as reference",
                                      "type": "string",
                                      "x-parser-schema-id": "<anonymous-schema-74>"
                                    },
                                    "lang": {
                                      "type": "string",
                                      "minLength": 1,
                                      "description": "ISO-language code",
                                      "pattern": "^[a-z]{2}$",
                                      "x-parser-schema-id": "<anonymous-schema-75>"
                                    },
                                    "label": {
                                      "type": "string",
                                      "x-parser-schema-id": "<anonymous-schema-76>"
                                    },
                                    "description": {
                                      "type": "string",
                                      "x-parser-schema-id": "<anonymous-schema-77>"
                                    }
                                  },
                                  "required": [
                                    "id",
                                    "lang",
                                    "label"
                                  ],
                                  "additionalProperties": false,
                                  "x-parser-schema-id": "<anonymous-schema-73>"
                                },
                                "minItems": 1,
                                "x-parser-schema-id": "<anonymous-schema-72>"
                              },
                              "minItems": 1,
                              "x-parser-schema-id": "<anonymous-schema-71>"
                            }
                          },
                          "required": [
                            "file"
                          ],
                          "additionalProperties": false,
                          "x-parser-schema-id": "<anonymous-schema-68>"
                        },
                        "minItems": 1,
                        "x-parser-schema-id": "<anonymous-schema-67>"
                      }
                    },
                    "required": [
                      "id",
                      "name",
                      "testcenterBooklet"
                    ],
                    "additionalProperties": false,
                    "x-parser-schema-id": "<anonymous-schema-56>"
                  },
                  "minItems": 1,
                  "x-parser-schema-id": "<anonymous-schema-55>"
                },
                "items": {
                  "description": "Definition of all items from all modules.",
                  "type": "array",
                  "items": {
                    "type": "object",
                    "properties": {
                      "id": {
                        "description": "Identifier used in all other definitions of this document",
                        "type": "string",
                        "x-parser-schema-id": "<anonymous-schema-80>"
                      },
                      "name": "$ref:$.components.schemas.survey-content-index.properties.name",
                      "sources": {
                        "description": "This item will get its value from various sources throughout the survey",
                        "type": "array",
                        "items": {
                          "type": "object",
                          "properties": {
                            "moduleId": {
                              "description": "Refers to the module used by an instrument of the surveyPart. If no moduleId is given, all modules will searched for the unit.",
                              "type": "string",
                              "x-parser-schema-id": "<anonymous-schema-83>"
                            },
                            "unitId": {
                              "description": "Refers to the unit data (UI definition, coding scheme, metadata etc.)",
                              "type": "string",
                              "x-parser-schema-id": "<anonymous-schema-84>"
                            },
                            "unitAlias": {
                              "description": "Refers to the unit id used in response data",
                              "type": "string",
                              "x-parser-schema-id": "<anonymous-schema-85>"
                            },
                            "sourceVariable": {
                              "description": "Refers to the variable providing its score as item value",
                              "type": "string",
                              "x-parser-schema-id": "<anonymous-schema-86>"
                            }
                          },
                          "required": [
                            "unitId",
                            "sourceVariable"
                          ],
                          "additionalProperties": false,
                          "x-parser-schema-id": "<anonymous-schema-82>"
                        },
                        "minItems": 1,
                        "x-parser-schema-id": "<anonymous-schema-81>"
                      },
                      "fullCreditValue": {
                        "description": "Score of source variable representing full credit",
                        "type": "integer",
                        "default": 1,
                        "x-parser-schema-id": "<anonymous-schema-87>"
                      },
                      "noCreditValue": {
                        "description": "Score of source variable representing no credit",
                        "type": "integer",
                        "default": 0,
                        "x-parser-schema-id": "<anonymous-schema-88>"
                      }
                    },
                    "required": [
                      "id",
                      "name",
                      "sources"
                    ],
                    "additionalProperties": false,
                    "x-parser-schema-id": "<anonymous-schema-79>"
                  },
                  "minItems": 1,
                  "x-parser-schema-id": "<anonymous-schema-78>"
                },
                "baseScales": {
                  "description": "Scales based directly on item values, providing one value per test taker",
                  "type": "array",
                  "items": {
                    "type": "object",
                    "properties": {
                      "id": {
                        "description": "Identifier referred by other scales and survey output.",
                        "type": "string",
                        "x-parser-schema-id": "<anonymous-schema-91>"
                      },
                      "name": "$ref:$.components.schemas.survey-content-index.properties.name",
                      "description": "$ref:$.components.schemas.survey-content-index.properties.name",
                      "method": {
                        "description": "Way how to process the item values.",
                        "type": "string",
                        "enum": [
                          "SUM",
                          "RATIO",
                          "MEAN",
                          "MEDIAN"
                        ],
                        "x-parser-schema-id": "<anonymous-schema-92>"
                      },
                      "methodParameters": {
                        "description": "Depending on the method, different parameters specify the processing.",
                        "oneOf": [
                          {
                            "description": "Parameters for the processing method RATIO.",
                            "type": "object",
                            "properties": {
                              "maxValue": {
                                "description": "If methodParameters is not given, the number of items will be taken as maxValue",
                                "type": "number",
                                "x-parser-schema-id": "<anonymous-schema-95>"
                              }
                            },
                            "required": [
                              "maxValue"
                            ],
                            "additionalProperties": false,
                            "x-parser-schema-id": "<anonymous-schema-94>"
                          }
                        ],
                        "x-parser-schema-id": "<anonymous-schema-93>"
                      },
                      "items": {
                        "description": "List of all items providing it's value to this specific scale",
                        "type": "array",
                        "items": {
                          "type": "string",
                          "x-parser-schema-id": "<anonymous-schema-97>"
                        },
                        "minItems": 1,
                        "x-parser-schema-id": "<anonymous-schema-96>"
                      }
                    },
                    "required": [
                      "id",
                      "name",
                      "method",
                      "items"
                    ],
                    "additionalProperties": false,
                    "x-parser-schema-id": "<anonymous-schema-90>"
                  },
                  "x-parser-schema-id": "<anonymous-schema-89>"
                },
                "derivedScales": {
                  "description": "Scales based on other scale's value, providing one value per test taker",
                  "type": "array",
                  "items": {
                    "type": "object",
                    "properties": {
                      "id": {
                        "description": "Identifier referred by other scales and survey output.",
                        "type": "string",
                        "x-parser-schema-id": "<anonymous-schema-100>"
                      },
                      "name": "$ref:$.components.schemas.survey-content-index.properties.name",
                      "description": "$ref:$.components.schemas.survey-content-index.properties.name",
                      "source": {
                        "description": "Id of the scale providing the value for this derived scale.",
                        "type": "string",
                        "x-parser-schema-id": "<anonymous-schema-101>"
                      },
                      "mappings": {
                        "description": "Applies the method to the value. The first match will go.",
                        "type": "array",
                        "items": {
                          "type": "object",
                          "properties": {
                            "method": {
                              "type": "string",
                              "description": "Condition for evaluation",
                              "enum": [
                                "EQUALS",
                                "LESS_THAN",
                                "MORE_THAN",
                                "MAX",
                                "MIN"
                              ],
                              "x-parser-schema-id": "<anonymous-schema-104>"
                            },
                            "parameters": {
                              "type": "array",
                              "description": "Depending on the method, additional parameter(s) is needed.",
                              "items": {
                                "type": "string",
                                "x-parser-schema-id": "<anonymous-schema-106>"
                              },
                              "minItems": 1,
                              "x-parser-schema-id": "<anonymous-schema-105>"
                            },
                            "newValue": {
                              "description": "Value as outcome of this scale",
                              "type": "number",
                              "x-parser-schema-id": "<anonymous-schema-107>"
                            },
                            "valueLabel": "$ref:$.components.schemas.survey-content-index.properties.name",
                            "valueDescription": "$ref:$.components.schemas.survey-content-index.properties.name"
                          },
                          "required": [
                            "method",
                            "parameters",
                            "newValue"
                          ],
                          "additionalProperties": false,
                          "x-parser-schema-id": "<anonymous-schema-103>"
                        },
                        "minItems": 1,
                        "x-parser-schema-id": "<anonymous-schema-102>"
                      },
                      "elseValue": {
                        "description": "Value if no mapping matches",
                        "type": "number",
                        "default": 0,
                        "x-parser-schema-id": "<anonymous-schema-108>"
                      },
                      "elseValueLabel": "$ref:$.components.schemas.survey-content-index.properties.name",
                      "elseValueDescription": "$ref:$.components.schemas.survey-content-index.properties.name",
                      "relatedVocabularies": {
                        "description": "Refers to public vocabularies to map the proficiency level to well known concepts",
                        "type": "array",
                        "items": {
                          "type": "object",
                          "properties": {
                            "url": {
                              "description": "URL to access the related vocabulary",
                              "type": "string",
                              "x-parser-schema-id": "<anonymous-schema-111>"
                            },
                            "name": {
                              "description": "Shorthand title or name to understand the relation quickly",
                              "type": "string",
                              "x-parser-schema-id": "<anonymous-schema-112>"
                            },
                            "values": {
                              "type": "array",
                              "items": {
                                "type": "object",
                                "properties": {
                                  "value": {
                                    "type": "number",
                                    "x-parser-schema-id": "<anonymous-schema-115>"
                                  },
                                  "url": {
                                    "type": "string",
                                    "x-parser-schema-id": "<anonymous-schema-116>"
                                  },
                                  "relationShip": {
                                    "type": "string",
                                    "enum": [
                                      "SAME_AS",
                                      "ALIKE"
                                    ],
                                    "default": "SAME_AS",
                                    "x-parser-schema-id": "<anonymous-schema-117>"
                                  }
                                },
                                "required": [
                                  "value",
                                  "url"
                                ],
                                "additionalProperties": false,
                                "x-parser-schema-id": "<anonymous-schema-114>"
                              },
                              "minItems": 1,
                              "x-parser-schema-id": "<anonymous-schema-113>"
                            }
                          },
                          "required": [
                            "values",
                            "url"
                          ],
                          "additionalProperties": false,
                          "x-parser-schema-id": "<anonymous-schema-110>"
                        },
                        "x-parser-schema-id": "<anonymous-schema-109>"
                      }
                    },
                    "required": [
                      "id",
                      "name",
                      "source",
                      "mappings"
                    ],
                    "additionalProperties": false,
                    "x-parser-schema-id": "<anonymous-schema-99>"
                  },
                  "x-parser-schema-id": "<anonymous-schema-98>"
                },
                "supportingDocuments": {
                  "description": "Additional documents supporting the assessment",
                  "type": "array",
                  "items": {
                    "type": "object",
                    "properties": {
                      "contentType": {
                        "type": "string",
                        "enum": [
                          "CODING_INSTRUCTIONS",
                          "STUDY_BACKGROUND"
                        ],
                        "x-parser-schema-id": "<anonymous-schema-120>"
                      },
                      "targeting": {
                        "type": "array",
                        "items": {
                          "type": "string",
                          "enum": [
                            "PROCTOR",
                            "TEST_TAKER",
                            "TEACHER",
                            "TEST_ADMINISTRATION",
                            "GOVERNANCE",
                            "CODER"
                          ],
                          "x-parser-schema-id": "<anonymous-schema-122>"
                        },
                        "minItems": 1,
                        "x-parser-schema-id": "<anonymous-schema-121>"
                      },
                      "file": "$ref:$.components.schemas.survey-content-index.properties.surveyParts.items.properties.instruments.items.properties.handOutsForTestTaker.items.properties.file.items"
                    },
                    "required": [
                      "file",
                      "targeting",
                      "contentType"
                    ],
                    "additionalProperties": false,
                    "x-parser-schema-id": "<anonymous-schema-119>"
                  },
                  "minItems": 1,
                  "x-parser-schema-id": "<anonymous-schema-118>"
                }
              },
              "required": [
                "id",
                "name",
                "instruments",
                "items"
              ],
              "additionalProperties": false,
              "x-parser-schema-id": "<anonymous-schema-36>"
            },
            "minItems": 1,
            "x-parser-schema-id": "<anonymous-schema-35>"
          }
        },
        "required": [
          "packageId",
          "version",
          "name"
        ],
        "additionalProperties": false,
        "$defs": {
          "languageTaggedText": "$ref:$.components.schemas.survey-content-index.properties.name",
          "languageTaggedObjectRef": "$ref:$.components.schemas.survey-content-index.properties.surveyParts.items.properties.instruments.items.properties.handOutsForTestTaker.items.properties.file.items",
          "unitDependency": "$ref:$.components.schemas.survey-content-index.properties.surveyParts.items.properties.bookletModules.items.properties.units.items.properties.dependencies.items",
          "unitInModule": "$ref:$.components.schemas.survey-content-index.properties.surveyParts.items.properties.bookletModules.items.properties.units.items",
          "bookletModule": "$ref:$.components.schemas.survey-content-index.properties.surveyParts.items.properties.bookletModules.items",
          "instrument": "$ref:$.components.schemas.survey-content-index.properties.surveyParts.items.properties.instruments.items",
          "itemValueType": "$ref:$.components.schemas.survey-content-index.properties.codingParameters.properties.itemValues.items.properties.type",
          "item": "$ref:$.components.schemas.survey-content-index.properties.surveyParts.items.properties.items.items",
          "methodParametersRatio": "$ref:$.components.schemas.survey-content-index.properties.surveyParts.items.properties.baseScales.items.properties.methodParameters.oneOf[0]",
          "codingParameters": "$ref:$.components.schemas.survey-content-index.properties.codingParameters",
          "baseScale": "$ref:$.components.schemas.survey-content-index.properties.surveyParts.items.properties.baseScales.items",
          "derivedScale": "$ref:$.components.schemas.survey-content-index.properties.surveyParts.items.properties.derivedScales.items",
          "surveyPart": "$ref:$.components.schemas.survey-content-index.properties.surveyParts.items",
          "metadata": "$ref:$.components.schemas.survey-content-index.properties.metadata"
        },
        "x-parser-schema-id": "scp-index@0.2"
      }
    }
  },
  "x-parser-spec-parsed": true,
  "x-parser-api-version": 3,
  "x-parser-spec-stringified": true
};
    const config = {"show":{"sidebar":false},"sidebar":{"showOperations":"byDefault"},"showOperations":false};
    const appRoot = document.getElementById('root');
    AsyncApiStandalone.render(
        { schema, config, }, appRoot
    );
  