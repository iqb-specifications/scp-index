
    const schema = {
  "asyncapi": "3.0.0",
  "id": "urn:iqb-specifications:acp-index",
  "defaultContentType": "application/json",
  "info": {
    "title": "acp-index",
    "description": "Specification for assessment content package index.",
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
      "address": "iqb_data_structures",
      "messages": {
        "select_schema": {
          "payload": {
            "$id": "acp-index@0.5",
            "$schema": "http://json-schema.org/draft-07/schema#",
            "title": "Assessment Content Package Index",
            "description": "Specification for assessment content package index.",
            "type": "object",
            "properties": {
              "packageId": {
                "description": "Identifier for the assessment content package",
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
              "description": "$ref:$.channels.iqb_data_structures.messages.select_schema.payload.properties.name",
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
                "description": "Describes the progress of development and visibility issues.",
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
                            "$ref:$.channels.iqb_data_structures.messages.select_schema.payload.properties.metadata.properties.entries.items.properties.label",
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
                                  "label": "$ref:$.channels.iqb_data_structures.messages.select_schema.payload.properties.metadata.properties.entries.items.properties.label",
                                  "annotation": "$ref:$.channels.iqb_data_structures.messages.select_schema.payload.properties.metadata.properties.entries.items.properties.label"
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
                                "asText": "$ref:$.channels.iqb_data_structures.messages.select_schema.payload.properties.metadata.properties.entries.items.properties.label"
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
                  "language_coded_texts": "$ref:$.channels.iqb_data_structures.messages.select_schema.payload.properties.metadata.properties.entries.items.properties.label",
                  "vocabulary_entries": "$ref:$.channels.iqb_data_structures.messages.select_schema.payload.properties.metadata.properties.entries.items.properties.value.anyOf[1]",
                  "simple_value": "$ref:$.channels.iqb_data_structures.messages.select_schema.payload.properties.metadata.properties.entries.items.properties.value.anyOf[2]"
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
                        "itemValueType": "$ref:$.channels.iqb_data_structures.messages.select_schema.payload.properties.codingParameters.properties.itemValues.items.properties.type",
                        "status": {
                          "type": "array",
                          "items": {
                            "type": "string",
                            "enum": [
                              "UNSET",
                              "NOT_REACHED",
                              "DISPLAYED",
                              "INVALID",
                              "CODING_ERROR"
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
                  }
                },
                "additionalProperties": false,
                "x-parser-schema-id": "<anonymous-schema-25>"
              },
              "assessmentParts": {
                "description": "Groups of instruments, administrated the same way or at the same time.",
                "type": "array",
                "items": {
                  "type": "object",
                  "properties": {
                    "id": {
                      "type": "string",
                      "description": "Identifier for the assessment part",
                      "x-parser-schema-id": "<anonymous-schema-36>"
                    },
                    "name": "$ref:$.channels.iqb_data_structures.messages.select_schema.payload.properties.name",
                    "description": "$ref:$.channels.iqb_data_structures.messages.select_schema.payload.properties.name",
                    "metadata": "$ref:$.channels.iqb_data_structures.messages.select_schema.payload.properties.metadata",
                    "units": {
                      "description": "Definition of all units and items used by modules.",
                      "type": "array",
                      "items": {
                        "$id": "acp-unit@0.5",
                        "$schema": "http://json-schema.org/draft-07/schema#",
                        "title": "Assessment Content Package Unit",
                        "description": "Specification for assessment content package unit.",
                        "type": "object",
                        "properties": {
                          "id": {
                            "type": "string",
                            "x-parser-schema-id": "<anonymous-schema-38>"
                          },
                          "name": {
                            "type": "string",
                            "x-parser-schema-id": "<anonymous-schema-39>"
                          },
                          "description": {
                            "type": "string",
                            "x-parser-schema-id": "<anonymous-schema-40>"
                          },
                          "lang": {
                            "description": "ISO-language code",
                            "type": "string",
                            "minLength": 1,
                            "pattern": "^[a-z]{2}$",
                            "default": "de",
                            "x-parser-schema-id": "<anonymous-schema-41>"
                          },
                          "items": {
                            "description": "Default sorting is alpha-numeric.",
                            "type": "array",
                            "items": {
                              "type": "object",
                              "properties": {
                                "id": {
                                  "type": "string",
                                  "x-parser-schema-id": "<anonymous-schema-44>"
                                },
                                "useUnitAliasAsPrefix": {
                                  "description": "If true, the unique item identifier will be composed of the unit alias and the item id. If false, the item id has no prefix.",
                                  "type": "boolean",
                                  "default": true,
                                  "x-parser-schema-id": "<anonymous-schema-45>"
                                },
                                "name": {
                                  "type": "string",
                                  "x-parser-schema-id": "<anonymous-schema-46>"
                                },
                                "sourceVariable": {
                                  "description": "Refers to the variable providing its score as item value",
                                  "type": "string",
                                  "x-parser-schema-id": "<anonymous-schema-47>"
                                }
                              },
                              "required": [
                                "id",
                                "sourceVariable"
                              ],
                              "additionalProperties": false,
                              "x-parser-schema-id": "<anonymous-schema-43>"
                            },
                            "minItems": 1,
                            "x-parser-schema-id": "<anonymous-schema-42>"
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
                                  "x-parser-schema-id": "<anonymous-schema-50>"
                                },
                                "type": {
                                  "description": "Describes the function of the dependency.",
                                  "type": "string",
                                  "enum": [
                                    "UNIT_INDEX",
                                    "UNIT_CODING_SCHEME",
                                    "UNIT_METADATA",
                                    "UNIT_UI_DEFINITION",
                                    "PLAYER",
                                    "PLAYER_DEPENDENCY",
                                    "WIDGET"
                                  ],
                                  "x-parser-schema-id": "<anonymous-schema-51>"
                                }
                              },
                              "required": [
                                "id",
                                "type"
                              ],
                              "additionalProperties": false,
                              "x-parser-schema-id": "<anonymous-schema-49>"
                            },
                            "minItems": 1,
                            "x-parser-schema-id": "<anonymous-schema-48>"
                          }
                        },
                        "required": [
                          "id",
                          "dependencies"
                        ],
                        "additionalProperties": false,
                        "$defs": {
                          "unitDependency": "$ref:$.channels.iqb_data_structures.messages.select_schema.payload.properties.assessmentParts.items.properties.units.items.properties.dependencies.items"
                        }
                      },
                      "minItems": 1,
                      "x-parser-schema-id": "<anonymous-schema-37>"
                    },
                    "bookletModules": {
                      "description": "All modules used in this assessmentPart by instruments",
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "id": {
                            "description": "Id to be referred in instruments",
                            "type": "string",
                            "x-parser-schema-id": "<anonymous-schema-54>"
                          },
                          "name": {
                            "type": "string",
                            "x-parser-schema-id": "<anonymous-schema-55>"
                          },
                          "description": {
                            "type": "string",
                            "x-parser-schema-id": "<anonymous-schema-56>"
                          },
                          "lang": {
                            "description": "ISO-language code",
                            "type": "string",
                            "minLength": 1,
                            "pattern": "^[a-z]{2}$",
                            "default": "de",
                            "x-parser-schema-id": "<anonymous-schema-57>"
                          },
                          "units": {
                            "description": "All units being part of the module",
                            "type": "array",
                            "items": {
                              "type": "object",
                              "properties": {
                                "id": {
                                  "description": "Identifier referring to unit list",
                                  "type": "string",
                                  "x-parser-schema-id": "<anonymous-schema-60>"
                                },
                                "alias": {
                                  "description": "Prefix for full item identifier. If not given, the id will be used instead.",
                                  "type": "string",
                                  "x-parser-schema-id": "<anonymous-schema-61>"
                                },
                                "order": {
                                  "description": "Default sorting is alpha-numeric.",
                                  "type": "integer",
                                  "minimum": 0,
                                  "default": 0,
                                  "x-parser-schema-id": "<anonymous-schema-62>"
                                }
                              },
                              "required": [
                                "id"
                              ],
                              "additionalProperties": false,
                              "x-parser-schema-id": "<anonymous-schema-59>"
                            },
                            "minItems": 1,
                            "x-parser-schema-id": "<anonymous-schema-58>"
                          }
                        },
                        "required": [
                          "id",
                          "units"
                        ],
                        "additionalProperties": false,
                        "x-parser-schema-id": "<anonymous-schema-53>"
                      },
                      "minItems": 1,
                      "x-parser-schema-id": "<anonymous-schema-52>"
                    },
                    "instruments": {
                      "description": "All instruments for the assessment part, online or to hand out",
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "id": {
                            "description": "Identifier for the instrument",
                            "type": "string",
                            "x-parser-schema-id": "<anonymous-schema-65>"
                          },
                          "name": "$ref:$.channels.iqb_data_structures.messages.select_schema.payload.properties.name",
                          "metadata": "$ref:$.channels.iqb_data_structures.messages.select_schema.payload.properties.metadata",
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
                                  "default": "de",
                                  "x-parser-schema-id": "<anonymous-schema-68>"
                                },
                                "definitionId": {
                                  "description": "Id/path to the booklet XML to run this instrument",
                                  "type": "string",
                                  "x-parser-schema-id": "<anonymous-schema-69>"
                                },
                                "modules": {
                                  "type": "array",
                                  "items": {
                                    "type": "object",
                                    "properties": {
                                      "moduleId": {
                                        "description": "Reference to the module id at assessmentPart level",
                                        "type": "string",
                                        "x-parser-schema-id": "<anonymous-schema-72>"
                                      },
                                      "order": {
                                        "description": "Default sorting is alpha-numeric.",
                                        "type": "integer",
                                        "minimum": 0,
                                        "default": 0,
                                        "x-parser-schema-id": "<anonymous-schema-73>"
                                      }
                                    },
                                    "required": [
                                      "moduleId"
                                    ],
                                    "additionalProperties": false,
                                    "x-parser-schema-id": "<anonymous-schema-71>"
                                  },
                                  "minItems": 1,
                                  "x-parser-schema-id": "<anonymous-schema-70>"
                                }
                              },
                              "required": [
                                "definitionId",
                                "modules"
                              ],
                              "additionalProperties": false,
                              "x-parser-schema-id": "<anonymous-schema-67>"
                            },
                            "x-parser-schema-id": "<anonymous-schema-66>"
                          },
                          "administrationMode": {
                            "type": "string",
                            "enum": [
                              "TEST_BY_TEST_TAKER",
                              "TEST_BY_PROCTOR",
                              "STIMULUS_FOR_TEST_TAKER"
                            ],
                            "default": "TEST_BY_TEST_TAKER",
                            "x-parser-schema-id": "<anonymous-schema-74>"
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
                                  "x-parser-schema-id": "<anonymous-schema-77>"
                                },
                                "mode": {
                                  "type": "string",
                                  "enum": [
                                    "PRINT_SHOW",
                                    "PRINT_WRITE_DRAW",
                                    "ON_SCREEN"
                                  ],
                                  "default": "PRINT",
                                  "x-parser-schema-id": "<anonymous-schema-78>"
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
                                          "x-parser-schema-id": "<anonymous-schema-82>"
                                        },
                                        "lang": {
                                          "type": "string",
                                          "minLength": 1,
                                          "description": "ISO-language code",
                                          "pattern": "^[a-z]{2}$",
                                          "x-parser-schema-id": "<anonymous-schema-83>"
                                        },
                                        "label": {
                                          "type": "string",
                                          "x-parser-schema-id": "<anonymous-schema-84>"
                                        },
                                        "description": {
                                          "type": "string",
                                          "x-parser-schema-id": "<anonymous-schema-85>"
                                        }
                                      },
                                      "required": [
                                        "id",
                                        "lang",
                                        "label"
                                      ],
                                      "additionalProperties": false,
                                      "x-parser-schema-id": "<anonymous-schema-81>"
                                    },
                                    "minItems": 1,
                                    "x-parser-schema-id": "<anonymous-schema-80>"
                                  },
                                  "minItems": 1,
                                  "x-parser-schema-id": "<anonymous-schema-79>"
                                }
                              },
                              "required": [
                                "file"
                              ],
                              "additionalProperties": false,
                              "x-parser-schema-id": "<anonymous-schema-76>"
                            },
                            "minItems": 1,
                            "x-parser-schema-id": "<anonymous-schema-75>"
                          }
                        },
                        "required": [
                          "id",
                          "name",
                          "testcenterBooklet"
                        ],
                        "additionalProperties": false,
                        "x-parser-schema-id": "<anonymous-schema-64>"
                      },
                      "minItems": 1,
                      "x-parser-schema-id": "<anonymous-schema-63>"
                    },
                    "scales": {
                      "description": "Scales to calculate performance indicators",
                      "type": "array",
                      "items": {
                        "$id": "acp-scale@0.2",
                        "$schema": "http://json-schema.org/draft-07/schema#",
                        "title": "Assessment Content Package: Scale",
                        "description": "Specification for assessment content package scale.",
                        "type": "object",
                        "properties": {
                          "id": {
                            "description": "Identifier referred by other scales and assessment output.",
                            "type": "string",
                            "x-parser-schema-id": "<anonymous-schema-87>"
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
                                  "x-parser-schema-id": "<anonymous-schema-90>"
                                },
                                "value": {
                                  "type": "string",
                                  "x-parser-schema-id": "<anonymous-schema-91>"
                                }
                              },
                              "required": [
                                "lang",
                                "value"
                              ],
                              "additionalProperties": false,
                              "x-parser-schema-id": "<anonymous-schema-89>"
                            },
                            "minItems": 1,
                            "x-parser-schema-id": "<anonymous-schema-88>"
                          },
                          "description": "$ref:$.channels.iqb_data_structures.messages.select_schema.payload.properties.assessmentParts.items.properties.scales.items.properties.name",
                          "scaleType": {
                            "type": "string",
                            "enum": [
                              "BASE",
                              "DERIVED",
                              "AGGREGATED"
                            ],
                            "x-parser-schema-id": "<anonymous-schema-92>"
                          },
                          "typeParameters": {
                            "description": "Every type needs a different set of parameters.",
                            "oneOf": [
                              {
                                "description": "These parameters will be used for scaleType BASE",
                                "type": "object",
                                "properties": {
                                  "method": {
                                    "description": "Way how to process the item values.",
                                    "type": "string",
                                    "enum": [
                                      "SCORE_SUM",
                                      "SCORE_RATIO",
                                      "SCORE_MEAN",
                                      "SCORE_MEDIAN",
                                      "WLE",
                                      "CODE_COUNT"
                                    ],
                                    "x-parser-schema-id": "<anonymous-schema-95>"
                                  },
                                  "methodParameters": {
                                    "description": "Depending on the method, different parameters may specify the processing.",
                                    "oneOf": [
                                      {
                                        "description": "Parameters for the processing method SCORE_RATIO.",
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
                                      },
                                      {
                                        "description": "Parameters for the processing method CODE_COUNT.",
                                        "type": "object",
                                        "properties": {
                                          "codeValue": {
                                            "description": "Value of code to be counted",
                                            "type": "number",
                                            "x-parser-schema-id": "<anonymous-schema-100>"
                                          }
                                        },
                                        "required": [
                                          "codeValue"
                                        ],
                                        "additionalProperties": false,
                                        "x-parser-schema-id": "<anonymous-schema-99>"
                                      }
                                    ],
                                    "x-parser-schema-id": "<anonymous-schema-96>"
                                  },
                                  "items": {
                                    "description": "List of all items providing it's value to this scale",
                                    "type": "array",
                                    "items": {
                                      "type": "object",
                                      "properties": {
                                        "id": {
                                          "description": "Identifier referring to unique identifier of item in unit list.",
                                          "type": "string",
                                          "x-parser-schema-id": "<anonymous-schema-103>"
                                        },
                                        "parameters": {
                                          "type": "array",
                                          "description": "List of item values relevant for processing",
                                          "items": {
                                            "type": "object",
                                            "properties": {
                                              "key": {
                                                "type": "string",
                                                "enum": [
                                                  "LOGIT_FULL_CREDIT",
                                                  "LOGIT_PARTIAL_CREDIT_1",
                                                  "LOGIT_PARTIAL_CREDIT_2",
                                                  "LOGIT_PARTIAL_CREDIT_3"
                                                ],
                                                "x-parser-schema-id": "<anonymous-schema-106>"
                                              },
                                              "value": {
                                                "type": "string",
                                                "x-parser-schema-id": "<anonymous-schema-107>"
                                              }
                                            },
                                            "required": [
                                              "key"
                                            ],
                                            "additionalProperties": false,
                                            "x-parser-schema-id": "<anonymous-schema-105>"
                                          },
                                          "x-parser-schema-id": "<anonymous-schema-104>"
                                        },
                                        "weight": {
                                          "type": "number",
                                          "default": 1,
                                          "x-parser-schema-id": "<anonymous-schema-108>"
                                        }
                                      },
                                      "required": [
                                        "id"
                                      ],
                                      "additionalProperties": false,
                                      "x-parser-schema-id": "<anonymous-schema-102>"
                                    },
                                    "minItems": 1,
                                    "x-parser-schema-id": "<anonymous-schema-101>"
                                  },
                                  "minItemNumber": {
                                    "description": "Minimum number of items in responses for this scale to be reported; set '0' for unlimited",
                                    "type": "number",
                                    "default": 0,
                                    "x-parser-schema-id": "<anonymous-schema-109>"
                                  }
                                },
                                "required": [
                                  "method",
                                  "items"
                                ],
                                "additionalProperties": false,
                                "x-parser-schema-id": "<anonymous-schema-94>"
                              },
                              {
                                "description": "These parameters will be used for scaleType DERIVED",
                                "type": "object",
                                "properties": {
                                  "source": {
                                    "description": "Id of the scale providing the value for this derived scale.",
                                    "type": "string",
                                    "x-parser-schema-id": "<anonymous-schema-111>"
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
                                          "x-parser-schema-id": "<anonymous-schema-114>"
                                        },
                                        "parameters": {
                                          "type": "array",
                                          "description": "Depending on the method, additional parameter(s) is needed.",
                                          "items": {
                                            "type": "string",
                                            "x-parser-schema-id": "<anonymous-schema-116>"
                                          },
                                          "minItems": 1,
                                          "x-parser-schema-id": "<anonymous-schema-115>"
                                        },
                                        "newValue": {
                                          "description": "Value as outcome of this scale",
                                          "type": "number",
                                          "x-parser-schema-id": "<anonymous-schema-117>"
                                        },
                                        "valueLabel": "$ref:$.channels.iqb_data_structures.messages.select_schema.payload.properties.assessmentParts.items.properties.scales.items.properties.name",
                                        "valueDescription": "$ref:$.channels.iqb_data_structures.messages.select_schema.payload.properties.assessmentParts.items.properties.scales.items.properties.name"
                                      },
                                      "required": [
                                        "method",
                                        "parameters",
                                        "newValue"
                                      ],
                                      "additionalProperties": false,
                                      "x-parser-schema-id": "<anonymous-schema-113>"
                                    },
                                    "minItems": 1,
                                    "x-parser-schema-id": "<anonymous-schema-112>"
                                  },
                                  "elseValue": {
                                    "description": "Value if no mapping matches",
                                    "type": "number",
                                    "default": 0,
                                    "x-parser-schema-id": "<anonymous-schema-118>"
                                  },
                                  "elseValueLabel": "$ref:$.channels.iqb_data_structures.messages.select_schema.payload.properties.assessmentParts.items.properties.scales.items.properties.name",
                                  "elseValueDescription": "$ref:$.channels.iqb_data_structures.messages.select_schema.payload.properties.assessmentParts.items.properties.scales.items.properties.name",
                                  "relatedVocabularies": {
                                    "description": "Refers to public vocabularies to map the proficiency level to well known concepts",
                                    "type": "array",
                                    "items": {
                                      "type": "object",
                                      "properties": {
                                        "url": {
                                          "description": "URL to access the related vocabulary",
                                          "type": "string",
                                          "x-parser-schema-id": "<anonymous-schema-121>"
                                        },
                                        "name": {
                                          "description": "Shorthand title or name to understand the relation quickly",
                                          "type": "string",
                                          "x-parser-schema-id": "<anonymous-schema-122>"
                                        },
                                        "values": {
                                          "type": "array",
                                          "items": {
                                            "type": "object",
                                            "properties": {
                                              "value": {
                                                "type": "number",
                                                "x-parser-schema-id": "<anonymous-schema-125>"
                                              },
                                              "url": {
                                                "type": "string",
                                                "x-parser-schema-id": "<anonymous-schema-126>"
                                              },
                                              "relationShip": {
                                                "type": "string",
                                                "enum": [
                                                  "SAME_AS",
                                                  "ALIKE"
                                                ],
                                                "default": "SAME_AS",
                                                "x-parser-schema-id": "<anonymous-schema-127>"
                                              }
                                            },
                                            "required": [
                                              "value",
                                              "url"
                                            ],
                                            "additionalProperties": false,
                                            "x-parser-schema-id": "<anonymous-schema-124>"
                                          },
                                          "minItems": 1,
                                          "x-parser-schema-id": "<anonymous-schema-123>"
                                        }
                                      },
                                      "required": [
                                        "values",
                                        "url"
                                      ],
                                      "additionalProperties": false,
                                      "x-parser-schema-id": "<anonymous-schema-120>"
                                    },
                                    "x-parser-schema-id": "<anonymous-schema-119>"
                                  }
                                },
                                "required": [
                                  "source",
                                  "mappings"
                                ],
                                "additionalProperties": false,
                                "x-parser-schema-id": "<anonymous-schema-110>"
                              },
                              {
                                "description": "These parameters will be used for scaleType AGGREGATED",
                                "type": "object",
                                "properties": {
                                  "method": {
                                    "description": "Way how to process the item values.",
                                    "type": "string",
                                    "enum": [
                                      "SUM",
                                      "MEAN"
                                    ],
                                    "default": "SUM",
                                    "x-parser-schema-id": "<anonymous-schema-129>"
                                  },
                                  "sources": {
                                    "description": "List of all scales providing it's value to this scale",
                                    "type": "array",
                                    "items": {
                                      "type": "object",
                                      "properties": {
                                        "id": {
                                          "description": "Id of the scale providing the value for this aggregation.",
                                          "type": "string",
                                          "x-parser-schema-id": "<anonymous-schema-132>"
                                        },
                                        "weight": {
                                          "description": "Factor to adapt the scale value",
                                          "type": "number",
                                          "default": 1,
                                          "x-parser-schema-id": "<anonymous-schema-133>"
                                        }
                                      },
                                      "required": [
                                        "id"
                                      ],
                                      "additionalProperties": false,
                                      "x-parser-schema-id": "<anonymous-schema-131>"
                                    },
                                    "minItems": 2,
                                    "x-parser-schema-id": "<anonymous-schema-130>"
                                  }
                                },
                                "required": [
                                  "sources"
                                ],
                                "additionalProperties": false,
                                "x-parser-schema-id": "<anonymous-schema-128>"
                              }
                            ],
                            "x-parser-schema-id": "<anonymous-schema-93>"
                          }
                        },
                        "required": [
                          "id",
                          "name",
                          "scaleType",
                          "typeParameters"
                        ],
                        "additionalProperties": false,
                        "$defs": {
                          "languageTaggedText": "$ref:$.channels.iqb_data_structures.messages.select_schema.payload.properties.assessmentParts.items.properties.scales.items.properties.name",
                          "itemValueType": {
                            "type": "string",
                            "enum": [
                              "FULL_CREDIT",
                              "NO_CREDIT",
                              "MISSING"
                            ]
                          },
                          "methodParametersScoreRatio": "$ref:$.channels.iqb_data_structures.messages.select_schema.payload.properties.assessmentParts.items.properties.scales.items.properties.typeParameters.oneOf[0].properties.methodParameters.oneOf[0]",
                          "methodParametersCodeCount": "$ref:$.channels.iqb_data_structures.messages.select_schema.payload.properties.assessmentParts.items.properties.scales.items.properties.typeParameters.oneOf[0].properties.methodParameters.oneOf[1]",
                          "itemInScale": "$ref:$.channels.iqb_data_structures.messages.select_schema.payload.properties.assessmentParts.items.properties.scales.items.properties.typeParameters.oneOf[0].properties.items.items",
                          "parametersBASE": "$ref:$.channels.iqb_data_structures.messages.select_schema.payload.properties.assessmentParts.items.properties.scales.items.properties.typeParameters.oneOf[0]",
                          "parametersAGGREGATED": "$ref:$.channels.iqb_data_structures.messages.select_schema.payload.properties.assessmentParts.items.properties.scales.items.properties.typeParameters.oneOf[2]",
                          "parametersDERIVED": "$ref:$.channels.iqb_data_structures.messages.select_schema.payload.properties.assessmentParts.items.properties.scales.items.properties.typeParameters.oneOf[1]"
                        }
                      },
                      "minItems": 1,
                      "x-parser-schema-id": "<anonymous-schema-86>"
                    },
                    "additionalDocuments": {
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
                            "x-parser-schema-id": "<anonymous-schema-136>"
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
                              "x-parser-schema-id": "<anonymous-schema-138>"
                            },
                            "minItems": 1,
                            "x-parser-schema-id": "<anonymous-schema-137>"
                          },
                          "file": "$ref:$.channels.iqb_data_structures.messages.select_schema.payload.properties.assessmentParts.items.properties.instruments.items.properties.handOutsForTestTaker.items.properties.file.items"
                        },
                        "required": [
                          "file",
                          "targeting",
                          "contentType"
                        ],
                        "additionalProperties": false,
                        "x-parser-schema-id": "<anonymous-schema-135>"
                      },
                      "minItems": 1,
                      "x-parser-schema-id": "<anonymous-schema-134>"
                    }
                  },
                  "required": [
                    "id",
                    "name",
                    "bookletModules",
                    "instruments",
                    "units"
                  ],
                  "additionalProperties": false,
                  "x-parser-schema-id": "<anonymous-schema-35>"
                },
                "minItems": 1,
                "x-parser-schema-id": "<anonymous-schema-34>"
              }
            },
            "required": [
              "packageId",
              "version",
              "name"
            ],
            "additionalProperties": false,
            "$defs": {
              "languageTaggedText": "$ref:$.channels.iqb_data_structures.messages.select_schema.payload.properties.name",
              "languageTaggedObjectRef": "$ref:$.channels.iqb_data_structures.messages.select_schema.payload.properties.assessmentParts.items.properties.instruments.items.properties.handOutsForTestTaker.items.properties.file.items",
              "bookletModule": "$ref:$.channels.iqb_data_structures.messages.select_schema.payload.properties.assessmentParts.items.properties.bookletModules.items",
              "instrument": "$ref:$.channels.iqb_data_structures.messages.select_schema.payload.properties.assessmentParts.items.properties.instruments.items",
              "itemValueType": "$ref:$.channels.iqb_data_structures.messages.select_schema.payload.properties.codingParameters.properties.itemValues.items.properties.type",
              "codingParameters": "$ref:$.channels.iqb_data_structures.messages.select_schema.payload.properties.codingParameters",
              "assessmentPart": "$ref:$.channels.iqb_data_structures.messages.select_schema.payload.properties.assessmentParts.items",
              "metadata": "$ref:$.channels.iqb_data_structures.messages.select_schema.payload.properties.metadata"
            },
            "x-parser-schema-id": "acp-index@0.5"
          },
          "x-parser-unique-object-id": "select_schema",
          "x-parser-message-name": "select_schema"
        }
      },
      "x-parser-unique-object-id": "iqb_data_structures"
    }
  },
  "components": {
    "schemas": {
      "acp-index": "$ref:$.channels.iqb_data_structures.messages.select_schema.payload"
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
  