
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
        "$id": "scp-index@0.1",
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
          "surveyParts": {
            "description": "Groups of instruments, administrated the same way or at the same time.",
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "id": {
                  "type": "string",
                  "description": "Identifier for the survey part",
                  "x-parser-schema-id": "<anonymous-schema-27>"
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
                        "x-parser-schema-id": "<anonymous-schema-30>"
                      },
                      "name": {
                        "type": "string",
                        "x-parser-schema-id": "<anonymous-schema-31>"
                      },
                      "description": {
                        "type": "string",
                        "x-parser-schema-id": "<anonymous-schema-32>"
                      },
                      "lang": {
                        "description": "ISO-language code",
                        "type": "string",
                        "minLength": 1,
                        "pattern": "^[a-z]{2}$",
                        "x-parser-schema-id": "<anonymous-schema-33>"
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
                              "x-parser-schema-id": "<anonymous-schema-36>"
                            },
                            "alias": {
                              "description": "Identifier for responses",
                              "type": "string",
                              "x-parser-schema-id": "<anonymous-schema-37>"
                            },
                            "name": {
                              "type": "string",
                              "x-parser-schema-id": "<anonymous-schema-38>"
                            },
                            "description": {
                              "type": "string",
                              "x-parser-schema-id": "<anonymous-schema-39>"
                            },
                            "order": {
                              "description": "Default sorting is alpha-numeric.",
                              "type": "integer",
                              "minimum": 0,
                              "default": 0,
                              "x-parser-schema-id": "<anonymous-schema-40>"
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
                                    "x-parser-schema-id": "<anonymous-schema-43>"
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
                                    "x-parser-schema-id": "<anonymous-schema-44>"
                                  }
                                },
                                "required": [
                                  "id",
                                  "type"
                                ],
                                "additionalProperties": false,
                                "x-parser-schema-id": "<anonymous-schema-42>"
                              },
                              "minItems": 1,
                              "x-parser-schema-id": "<anonymous-schema-41>"
                            }
                          },
                          "required": [
                            "id",
                            "dependencies"
                          ],
                          "additionalProperties": false,
                          "x-parser-schema-id": "<anonymous-schema-35>"
                        },
                        "minItems": 1,
                        "x-parser-schema-id": "<anonymous-schema-34>"
                      }
                    },
                    "required": [
                      "id",
                      "lang",
                      "units"
                    ],
                    "additionalProperties": false,
                    "x-parser-schema-id": "<anonymous-schema-29>"
                  },
                  "minItems": 1,
                  "x-parser-schema-id": "<anonymous-schema-28>"
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
                        "x-parser-schema-id": "<anonymous-schema-47>"
                      },
                      "name": "$ref:$.components.schemas.survey-content-index.properties.name",
                      "metadata": "$ref:$.components.schemas.survey-content-index.properties.metadata",
                      "testcenterBooklets": {
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
                              "x-parser-schema-id": "<anonymous-schema-50>"
                            },
                            "definitionId": {
                              "description": "Id/path to the booklet XML to run this instrument",
                              "type": "string",
                              "x-parser-schema-id": "<anonymous-schema-51>"
                            },
                            "modules": {
                              "type": "array",
                              "items": {
                                "type": "object",
                                "properties": {
                                  "moduleId": {
                                    "description": "Reference to the module id at surveyPart level",
                                    "type": "string",
                                    "x-parser-schema-id": "<anonymous-schema-54>"
                                  },
                                  "order": {
                                    "description": "Default sorting is alpha-numeric.",
                                    "type": "integer",
                                    "minimum": 0,
                                    "default": 0,
                                    "x-parser-schema-id": "<anonymous-schema-55>"
                                  }
                                },
                                "required": [
                                  "moduleId"
                                ],
                                "additionalProperties": false,
                                "x-parser-schema-id": "<anonymous-schema-53>"
                              },
                              "minItems": 1,
                              "x-parser-schema-id": "<anonymous-schema-52>"
                            }
                          },
                          "required": [
                            "lang",
                            "definitionId",
                            "modules"
                          ],
                          "additionalProperties": false,
                          "x-parser-schema-id": "<anonymous-schema-49>"
                        },
                        "x-parser-schema-id": "<anonymous-schema-48>"
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
                              "x-parser-schema-id": "<anonymous-schema-58>"
                            },
                            "asPrintOut": {
                              "type": "boolean",
                              "default": false,
                              "x-parser-schema-id": "<anonymous-schema-59>"
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
                                      "x-parser-schema-id": "<anonymous-schema-63>"
                                    },
                                    "lang": {
                                      "type": "string",
                                      "minLength": 1,
                                      "description": "ISO-language code",
                                      "pattern": "^[a-z]{2}$",
                                      "x-parser-schema-id": "<anonymous-schema-64>"
                                    },
                                    "label": {
                                      "type": "string",
                                      "x-parser-schema-id": "<anonymous-schema-65>"
                                    },
                                    "description": {
                                      "type": "string",
                                      "x-parser-schema-id": "<anonymous-schema-66>"
                                    }
                                  },
                                  "required": [
                                    "id",
                                    "lang",
                                    "label"
                                  ],
                                  "additionalProperties": false,
                                  "x-parser-schema-id": "<anonymous-schema-62>"
                                },
                                "minItems": 1,
                                "x-parser-schema-id": "<anonymous-schema-61>"
                              },
                              "minItems": 1,
                              "x-parser-schema-id": "<anonymous-schema-60>"
                            }
                          },
                          "required": [
                            "file"
                          ],
                          "additionalProperties": false,
                          "x-parser-schema-id": "<anonymous-schema-57>"
                        },
                        "minItems": 1,
                        "x-parser-schema-id": "<anonymous-schema-56>"
                      },
                      "handOutsForTestProctor": {
                        "description": "All documents must be presented to the test proctor (online or print-out).",
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
                            "asPrintOut": {
                              "type": "boolean",
                              "default": false,
                              "x-parser-schema-id": "<anonymous-schema-70>"
                            },
                            "file": {
                              "description": "All language variants of the same hand-out",
                              "type": "array",
                              "items": "$ref:$.components.schemas.survey-content-index.properties.surveyParts.items.properties.instruments.items.properties.handOutsForTestTaker.items.properties.file.items",
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
                      "name"
                    ],
                    "additionalProperties": false,
                    "x-parser-schema-id": "<anonymous-schema-46>"
                  },
                  "minItems": 1,
                  "x-parser-schema-id": "<anonymous-schema-45>"
                },
                "analysis": {
                  "description": "Definitions on how to proceed the survey outcome.",
                  "type": "array",
                  "items": {
                    "$id": "scp-analysis@0.2",
                    "$schema": "http://json-schema.org/draft-07/schema#",
                    "title": "Survey output analysis",
                    "description": "Specification for processing survey output.",
                    "type": "object",
                    "properties": {
                      "id": {
                        "description": "Identifier to handle different analysis definitions.",
                        "type": "string",
                        "x-parser-schema-id": "<anonymous-schema-73>"
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
                              "x-parser-schema-id": "<anonymous-schema-76>"
                            },
                            "value": {
                              "type": "string",
                              "x-parser-schema-id": "<anonymous-schema-77>"
                            }
                          },
                          "required": [
                            "lang",
                            "value"
                          ],
                          "additionalProperties": false,
                          "x-parser-schema-id": "<anonymous-schema-75>"
                        },
                        "minItems": 1,
                        "x-parser-schema-id": "<anonymous-schema-74>"
                      },
                      "description": "$ref:$.components.schemas.survey-content-index.properties.surveyParts.items.properties.analysis.items.properties.name",
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
                            "name": "$ref:$.components.schemas.survey-content-index.properties.surveyParts.items.properties.analysis.items.properties.name",
                            "sources": {
                              "description": "This item will get its value from various sources throughout the survey",
                              "type": "array",
                              "items": {
                                "type": "object",
                                "properties": {
                                  "moduleId": {
                                    "description": "Refers to the module used by an instrument of the surveyPart",
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
                                  "moduleId",
                                  "unitId",
                                  "sourceVariable"
                                ],
                                "additionalProperties": false,
                                "x-parser-schema-id": "<anonymous-schema-82>"
                              },
                              "minItems": 1,
                              "x-parser-schema-id": "<anonymous-schema-81>"
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
                      "statusMapping": {
                        "description": "Rules how to translate response status into item value",
                        "type": "array",
                        "items": {
                          "type": "object",
                          "properties": {
                            "itemValue": {
                              "type": "integer",
                              "x-parser-schema-id": "<anonymous-schema-89>"
                            },
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
                                "x-parser-schema-id": "<anonymous-schema-91>"
                              },
                              "minItems": 1,
                              "x-parser-schema-id": "<anonymous-schema-90>"
                            }
                          },
                          "required": [
                            "itemValue",
                            "status"
                          ],
                          "additionalProperties": false,
                          "x-parser-schema-id": "<anonymous-schema-88>"
                        },
                        "x-parser-schema-id": "<anonymous-schema-87>"
                      },
                      "itemScales": {
                        "description": "Scales based directly on item values, providing one numeric value per test taker",
                        "type": "array",
                        "items": {
                          "type": "object",
                          "properties": {
                            "id": {
                              "description": "Identifier referred by other scales and survey output.",
                              "type": "string",
                              "x-parser-schema-id": "<anonymous-schema-94>"
                            },
                            "name": "$ref:$.components.schemas.survey-content-index.properties.surveyParts.items.properties.analysis.items.properties.name",
                            "description": "$ref:$.components.schemas.survey-content-index.properties.surveyParts.items.properties.analysis.items.properties.name",
                            "method": {
                              "description": "Way how to process the item values.",
                              "type": "string",
                              "enum": [
                                "SUM",
                                "RATIO",
                                "MEAN",
                                "MEDIAN"
                              ],
                              "x-parser-schema-id": "<anonymous-schema-95>"
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
                                      "x-parser-schema-id": "<anonymous-schema-98>"
                                    }
                                  },
                                  "required": [
                                    "maxValue"
                                  ],
                                  "additionalProperties": false,
                                  "x-parser-schema-id": "<anonymous-schema-97>"
                                }
                              ],
                              "x-parser-schema-id": "<anonymous-schema-96>"
                            },
                            "items": {
                              "description": "List of all items providing it's value to this specific scale",
                              "type": "array",
                              "items": {
                                "type": "object",
                                "properties": {
                                  "itemId": {
                                    "description": "This parameter refers to one entry of the surveyPart item list.",
                                    "type": "string",
                                    "x-parser-schema-id": "<anonymous-schema-101>"
                                  },
                                  "weight": {
                                    "description": "Modifies the item value before processing - works as a multiplier.",
                                    "type": "number",
                                    "default": 1,
                                    "x-parser-schema-id": "<anonymous-schema-102>"
                                  }
                                },
                                "required": [
                                  "itemId"
                                ],
                                "additionalProperties": false,
                                "x-parser-schema-id": "<anonymous-schema-100>"
                              },
                              "minItems": 1,
                              "x-parser-schema-id": "<anonymous-schema-99>"
                            }
                          },
                          "required": [
                            "id",
                            "name",
                            "method",
                            "items"
                          ],
                          "additionalProperties": false,
                          "x-parser-schema-id": "<anonymous-schema-93>"
                        },
                        "x-parser-schema-id": "<anonymous-schema-92>"
                      },
                      "derivedScales": {
                        "description": "Scales based on other scale's value, providing one alphanumeric value per test taker",
                        "type": "array",
                        "items": {
                          "type": "object",
                          "properties": {
                            "id": {
                              "description": "Identifier referred by other scales and survey output.",
                              "type": "string",
                              "x-parser-schema-id": "<anonymous-schema-105>"
                            },
                            "name": "$ref:$.components.schemas.survey-content-index.properties.surveyParts.items.properties.analysis.items.properties.name",
                            "description": "$ref:$.components.schemas.survey-content-index.properties.surveyParts.items.properties.analysis.items.properties.name",
                            "source": {
                              "description": "Id of the scale providing the value for this derived scale",
                              "type": "string",
                              "x-parser-schema-id": "<anonymous-schema-106>"
                            },
                            "preProcessing": {
                              "description": "Modifies the value before mapping.",
                              "type": "string",
                              "enum": [
                                "TO_LOWER_CASE",
                                "ROUND_TO_INTEGER"
                              ],
                              "x-parser-schema-id": "<anonymous-schema-107>"
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
                                      "MATCH",
                                      "MATCH_REGEX",
                                      "LESS_THAN",
                                      "MORE_THAN",
                                      "MAX",
                                      "MIN"
                                    ],
                                    "x-parser-schema-id": "<anonymous-schema-110>"
                                  },
                                  "parameters": {
                                    "type": "array",
                                    "description": "Depending on the method, additional parameter(s) is needed.",
                                    "items": {
                                      "type": "string",
                                      "x-parser-schema-id": "<anonymous-schema-112>"
                                    },
                                    "minItems": 1,
                                    "x-parser-schema-id": "<anonymous-schema-111>"
                                  },
                                  "newValue": {
                                    "description": "Value as outcome of this scale",
                                    "type": "string",
                                    "x-parser-schema-id": "<anonymous-schema-113>"
                                  },
                                  "valueLabel": "$ref:$.components.schemas.survey-content-index.properties.surveyParts.items.properties.analysis.items.properties.name",
                                  "valueDescription": "$ref:$.components.schemas.survey-content-index.properties.surveyParts.items.properties.analysis.items.properties.name"
                                },
                                "required": [
                                  "method",
                                  "parameters",
                                  "newValue"
                                ],
                                "additionalProperties": false,
                                "x-parser-schema-id": "<anonymous-schema-109>"
                              },
                              "minItems": 1,
                              "x-parser-schema-id": "<anonymous-schema-108>"
                            },
                            "elseValue": {
                              "description": "Value if no mapping matches",
                              "type": "string",
                              "default": "0",
                              "x-parser-schema-id": "<anonymous-schema-114>"
                            },
                            "elseValueLabel": "$ref:$.components.schemas.survey-content-index.properties.surveyParts.items.properties.analysis.items.properties.name",
                            "elseValueDescription": "$ref:$.components.schemas.survey-content-index.properties.surveyParts.items.properties.analysis.items.properties.name"
                          },
                          "required": [
                            "id",
                            "name",
                            "source",
                            "mappings"
                          ],
                          "additionalProperties": false,
                          "x-parser-schema-id": "<anonymous-schema-104>"
                        },
                        "x-parser-schema-id": "<anonymous-schema-103>"
                      }
                    },
                    "required": [
                      "id",
                      "items"
                    ],
                    "additionalProperties": false,
                    "$defs": {
                      "languageTaggedText": "$ref:$.components.schemas.survey-content-index.properties.surveyParts.items.properties.analysis.items.properties.name",
                      "metadata": "$ref:$.components.schemas.survey-content-index.properties.metadata",
                      "item": "$ref:$.components.schemas.survey-content-index.properties.surveyParts.items.properties.analysis.items.properties.items.items",
                      "methodParametersRatio": "$ref:$.components.schemas.survey-content-index.properties.surveyParts.items.properties.analysis.items.properties.itemScales.items.properties.methodParameters.oneOf[0]"
                    }
                  },
                  "minItems": 1,
                  "x-parser-schema-id": "<anonymous-schema-72>"
                }
              },
              "required": [
                "id",
                "name",
                "instruments"
              ],
              "additionalProperties": false,
              "x-parser-schema-id": "<anonymous-schema-26>"
            },
            "minItems": 1,
            "x-parser-schema-id": "<anonymous-schema-25>"
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
          "surveyPart": "$ref:$.components.schemas.survey-content-index.properties.surveyParts.items",
          "scp-analysis": "$ref:$.components.schemas.survey-content-index.properties.surveyParts.items.properties.analysis.items",
          "metadata": "$ref:$.components.schemas.survey-content-index.properties.metadata"
        },
        "x-parser-schema-id": "scp-index@0.1"
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
  