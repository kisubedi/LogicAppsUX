const SCHEMA = {
  GA_PREVIEW_20160401: {
    URL: 'https://schema.management.azure.com/providers/Microsoft.Logic/schemas/2016-04-01-preview/workflowdefinition.json#',
    VERSION: '2016-04-01-preview',
  },
  GA_20160601: {
    URL: 'https://schema.management.azure.com/providers/Microsoft.Logic/schemas/2016-06-01/workflowdefinition.json#',
    VERSION: '2016-06-01',
  },
};

const SWAGGER = {
  TYPE: {
    ANY: 'any',
    ARRAY: 'array',
    BOOLEAN: 'boolean',
    FILE: 'file',
    INTEGER: 'integer',
    NUMBER: 'number',
    OBJECT: 'object',
    STRING: 'string',
  },
  FORMAT: {
    BINARY: 'binary',
    BYTE: 'byte',
    DATAURI: 'datauri',
    DATE: 'date',
    DATETIME: 'date-time',
    DOUBLE: 'double',
    EMAIL: 'email',
    FLOAT: 'float',
    HOSTNAME: 'hostname',
    INT32: 'int32',
    INT64: 'int64',
    IPV4: 'ipv4',
    IPV6: 'ipv6',
    HTML: 'html',
    JAVASCRIPT: 'javascript',
    URI: 'uri',
    UUID: 'uuid',
  },
  EXTENSION: {
    CAPABILITIES: 'x-ms-capabilities',
  },
};

const VARIABLE_TYPE = {
  ARRAY: 'array',
  BOOLEAN: 'boolean',
  FLOAT: 'float',
  INTEGER: 'integer',
  OBJECT: 'object',
  STRING: 'string',
};

export default {
  API_TIER: {
    PREMIUM: 'PREMIUM',
    STANDARD: 'STANDARD',
  },
  ACTION_PALETTE_KEY: 'actionpalettekey',
  ARM_RESOURCE: {
    FUNCTION: {
      TYPE: 'functions',
      RESOURCE_TYPE: 'Microsoft.Web/functions',
    },
  },
  ANALYTICS_SERVICE_URI: '{0}/providers/Internal.Telemetry/collect?api-version={1}',
  AUTHENTICATION: 'authentication',
  AUTHENTICATION_KEY: '$authentication',
  DEBATCH_KEY: 'splitOn',
  BATCH_TRIGGER: 'batch',
  BOOLEAN_PARAMETER_VALUE: {
    TRUE: 'true',
    FALSE: 'false',
  },
  CONTENT_SIZE_MAX: 262144, // 2^18
  API_CATEGORIES: {
    APP_SERVICES: 'Microsoft.Web/sites',
    AZURE_FUNCTIONS: 'Microsoft.Web/sites/functions',
    MICROSOFT_MANAGED: 'Microsoft.Web/locations/managedApis/apiOperations',
    WORKFLOWS: 'Microsoft.Logic/workflows',
    API_MANAGEMENT: 'Microsoft.ApiManagement/service',
  },
  API_KINDS: {
    BOT_APP: 'botapp',
    FUNCTION_APP: 'functionapp',
    WORKFLOW_APP: 'workflowapp',
  },
  API_SUBCATEGORIES: {
    AZURE_FUNCTION: 'functionapp',
    AZURE_FUNCTION_WITH_SWAGGER: 'azurefunctionwithswagger',
    API_MANAGEMENT_API: 'apimanagementapi',
    API_MANAGEMENT_SERVICE: 'apimanagementservice',
  },
  API_TYPES: {
    WEBSITE_OLD: 'Microsoft.Web/global',
    WEBSITE_NEW: 'Microsoft.Web/sites',
  },
  AZURE_FUNCTION: {
    AUTHORIZATION_LEVEL: {
      ANONYMOUS: 'anonymous',
      FUNCTION: 'function',
    },
    GENERIC_JSON_WEBHOOK: 'genericJson',
    HTTP_TRIGGER: 'httpTrigger',
  },
  BATCH_GROUP_NAME: {
    DEFAULT: 'DEFAULT',
  },
  BATCH_NAME: {
    DEFAULT: 'DEFAULT',
  },
  BATCH_TRIGGER_MODE: {
    INLINE: 'Inline',
    INTEGRATION_ACCOUNT: 'IntegrationAccount',
  },
  BATCH_TRIGGER_RELEASE_CRITERIA: {
    MESSAGE_COUNT: 'MessageCount',
    BATCH_SIZE: 'BatchSize',
    SCHEDULE: 'Schedule',
  },
  CHILD_GRAPH_KEYS: {
    ACTIONS: 'actions',
    CASES: 'cases',
  },
  CHILD_NODE_KEYS: {
    ELSE: 'else',
    DEFAULT: 'default',
  },
  CONCURRENCY_ACTION_SLIDER_LIMITS: {
    DEFAULT: 20,
    MIN: 1,
    MAX: 50,
  },
  CONCURRENCY_TRIGGER_SLIDER_LIMITS: {
    DEFAULT: 25,
    MIN: 1,
    MAX: 100,
  },
  CONDITION_COLORS: {
    YES: '#88DA8D',
    NO: '#FB8981',
  },
  CONDITION_COLORS_V2: {
    YES: '#428000',
    NO: '#A4262C',
  },
  CONNECTION_ID: 'connectionId',
  CONNECTIONS_KEY: '$connections',
  CONNECTION_STATUS_CODE: {
    CONNECTED: 'Connected',
    UNAUTHENTICATED: 'Unauthenticated',
  },
  CONTEXT_SETTING: {
    ACTION_CONCURRENCY_DEFAULT: 'core.action.concurrency.default',
    ACTION_CONCURRENCY_MIN: 'core.action.concurrency.min',
    ACTION_CONCURRENCY_MAX: 'core.action.concurrency.max',
    DEFAULT_RECURRENCE: 'core.defaultRecurrence',
    LOCALE: 'locale',
    SETTING_TRIGGER_CONCURRENCY_DESCRIPTION: 'ui.setting.trigger.concurrency.description',
    SETTING_ACTION_CONCURRENCY_DESCRIPTION: 'ui.setting.action.concurrency.description',
    TRIGGER_CONCURRENCY_DEFAULT: 'core.trigger.concurrency.default',
    TRIGGER_CONCURRENCY_MIN: 'core.trigger.concurrency.min',
    TRIGGER_CONCURRENCY_MAX: 'core.trigger.concurrency.max',
  },
  DATETIME_FORMAT_STRINGS: ['d', 'D', 'f', 'F', 'g', 'G', 'm', 'o', 'r', 's', 't', 'T', 'u', 'U', 'y'],
  DEFAULT_BRAND_COLOR: '#474747',
  DEFAULT_FREQUENCY_VALUE: 'Second',
  DEFAULT_INTERVAL_VALUE: 15,
  DEFAULT_KEY_PREFIX: '$',
  DEFAULT_SCHEMA: SCHEMA.GA_20160601,
  EDITOR: {
    ARRAY: 'array',
    AUTHENTICATION: 'authentication',
    CODE: 'code',
    CONDITION: 'condition',
    COMBOBOX: 'combobox',
    COPYABLE: 'copyable',
    DICTIONARY: 'dictionary',
    DROPDOWN: 'dropdown',
    FILEPICKER: 'filepicker',
    SCHEMA: 'schema',
    STRING: 'string',
    TABLE: 'table',
    VARIABLE_NAME: 'variablename',
    HTML: 'html'
  },
  EVENT_AUTH_COMPLETED: 'MSLA_AUTH_COMPLETED',
  ERROR_MESSAGES: {
    FAILED_TO_FETCH: 'Failed to fetch',
    NO_AVAILABLE_STORAGE_METHOD_FOUND: 'No available storage method found.',
  },
  ERROR_NAMES: {
    UNAUTHORIZED: 'Unauthorized',
  },
  FILEPICKER_TYPE: {
    FILE: 'file',
    FOLDER: 'folder',
  },
  FOREACH_CURRENT_ITEM_KEY: 'builtin.$.currentItem',
  FOREACH_CURRENT_ITEM_EXPRESSION_NAME: 'items',
  FREQUENCY: {
    MONTH: 'month',
    WEEK: 'week',
    DAY: 'day',
    HOUR: 'hour',
    MINUTE: 'minute',
    SECOND: 'second',
  },
  FUNCTION_NAME: {
    VARIABLES: 'variables',
    PARAMETERS: 'parameters',
  },
  GATEWAY_CHECKBOX_KEY: '__GATEWAY_CHECKBOX',
  GATEWAY_DEFAULT_REFRESH_INTERVAL_IN_MILLISECONDS: 15000,
  HTTP_WEBHOOK_LIST_CALLBACK_URL_NAME: 'listCallbackUrl()',
  HTTP_WEBHOOK_PARAMETER_KEYS: {
    SUBSCRIBE_AUTHENTICATION: 'subscribe_authentication',
    SUBSCRIBE_BODY: 'subscribe_body',
    SUBSCRIBE_HEADER: 'subscribe_headers',
    SUBSCRIBE_METHOD: 'subscribe_method',
    SUBSCRIBE_URI: 'subscribe_uri',
    UNSUBSCRIBE_AUTHENTICATION: 'unsubscribe_authentication',
    UNSUBSCRIBE_BODY: 'unsubscribe_body',
    UNSUBSCRIBE_HEADER: 'unsubscribe_headers',
    UNSUBSCRIBE_METHOD: 'unsubscribe_method',
    UNSUBSCRIBE_URI: 'unsubscribe_uri',
  },
  HTTP_AUTHENTICATION_TYPE: {
    NONE: 'NONE',
    BASIC: 'BASIC',
    CERTIFICATE: 'CLIENTCERTIFICATE',
    OAUTH: 'ACTIVEDIRECTORYOAUTH',
    RAW: 'RAW',
    MSI: 'MANAGEDSERVICEIDENTITY',
  },
  HTTP_AUTHENTICATION_OAUTH_TYPE: {
    SECRET: 'SECRET',
    CERTIFICATE: 'CERTIFICATE',
  },
  HTTP_METHOD: {
    GET: 'GET',
    PUT: 'PUT',
    POST: 'POST',
    PATCH: 'PATCH',
    DELETE: 'DELETE',
  },
  INT_MAX: 2147483647,
  INT_MIN: -2147483648,
  INTEGRATION_ACCOUNT_ARTIFACT_LOOKUP_ARTIFACT_TYPES: ['Schema', 'Map', 'Partner', 'Agreement'],
  INVOKER_CONNECTION: {
    DATAVERSE_CUD_TRIGGER: 'When_a_row_is_added,_modified_or_deleted',
    DATAVERSE_CONNECTOR_ID: '/providers/Microsoft.PowerApps/apis/shared_commondataserviceforapps',
  },
  ITEM: 'item()',
  LINKS: {
    CUSTOM_API: 'http://aka.ms/logicapps-customapi',
    FUNCTION: 'http://aka.ms/logicapps-functions',
    FUNCTION_CONTAINER: 'http://aka.ms/logicapps-containers',
    MANAGED_API: 'https://go.microsoft.com/fwlink/?linkid=837836',
    MANAGED_API_LOGICAPPS: 'https://aka.ms/logicapps-wish',
    USERVOICE: 'http://aka.ms/connectorfeedback',
    WORKFLOW: 'http://aka.ms/logicapps-nesteddoc',
  },
  LOCATION: {
    australiaeast: 'Australia East',
    australiasoutheast: 'Australia Southeast',
    brazilsouth: 'Brazil South',
    centralindia: 'Central India',
    centralus: 'Central US',
    eastasia: 'East Asia',
    eastus: 'East US',
    eastus2: 'East US 2',
    japaneast: 'Japan East',
    japanwest: 'Japan West',
    northcentralus: 'North Central US',
    northeurope: 'North Europe',
    southcentralus: 'South Central US',
    southeastasia: 'Southeast Asia',
    southindia: 'South India',
    westeurope: 'West Europe',
    westindia: 'West India',
    westus: 'West US',
  },
  MANUAL_BUTTON_TRIGGER_OUTPUTS_NAMES: {
    BUTTON_TRIGGER_OUTPUT_USERID: 'x-ms-user-id',
    BUTTON_TRIGGER_OUTPUT_USERNAME_ENCODED: 'x-ms-user-name-encoded',
    BUTTON_TRIGGER_OUTPUT_EMAIL_ENCODED: 'x-ms-user-email-encoded',
    BUTTON_TRIGGER_OUTPUT_TIMESTAMP: 'x-ms-user-timestamp',
    BUTTON_TRIGGER_OUTPUT_FORMATED_DATE: 'key-button-date',
    BUTTON_TRIGGER_OUTPUT_LOCATION_FULL_ADDRESS: 'location.fullAddress',
    BUTTON_TRIGGER_OUTPUT_LOCATION_COUNTRY: 'location.address.countryOrRegion',
    BUTTON_TRIGGER_OUTPUT_LOCATION_CITY: 'location.address.city',
    BUTTON_TRIGGER_OUTPUT_LOCATION_POSTALCODE: 'location.address.postalCode',
    BUTTON_TRIGGER_OUTPUT_LOCATION_STATE: 'location.address.state',
    BUTTON_TRIGGER_OUTPUT_LOCATION_STREET: 'location.address.street',
    BUTTON_TRIGGER_OUTPUT_LOCATION_LATITUDE: 'location.coordinates.latitude',
    BUTTON_TRIGGER_OUTPUT_LOCATION_LONGITUDE: 'location.coordinates.longitude',
  },
  MANUAL_TRIGGER_OUTPUT: `@json(decodeBase64(triggerOutputs().headers['X-MS-APIM-Tokens']))`,
  MAX_COMMENT_LENGTH: 256,
  MAX_EXPAND_ARRAY_DEPTH: 100,
  MAX_DYNAMICALLY_ADDED_PARAMETERS: 20,
  MAX_NEST_SCOPE_DEPTH: 8,
  MAX_PAGING_COUNT: 100000,
  MAX_TITLE_LENGTH: 80,
  MAX_VISIBLE_ACTION_BUTTON_NUMBERS: 2,
  MAX_VISIBLE_ACTION_BUTTON_NUMBERS_IF: 1,
  MAX_VISIBLE_ACTION_BUTTON_NUMBERS_SCOPE: 2,
  MAX_VARIABLE_NAME_LENGTH: 80,
  MAX_INTEGER_NUMBER: Number.MAX_SAFE_INTEGER || 9007199254740991, // the fallback value for IE
  NO_ERROR_MESSAGE_LEVEL: -1,
  NODE: {
    CATEGORY: {
      NOT_SPECIFIED: 'notspecified',
      ACTION: 'action',
      TRIGGER: 'trigger',
      BRANCH: 'branch',
    },
    TYPE: {
      // Special types which are neither actions nor triggers.
      NOT_SPECIFIED: 'notspecified',
      PLACEHOLDER: 'placeholder',
      CONDITION: 'condition',
      CONNECTION_WIZARD: 'connectionwizard',
      ELSE: 'else',
      SWITCH_CASE: 'switchcase',
      SWITCH_DEFAULT: 'switchdefault',
      // Action and trigger types.
      API_CONNECTION_WEBHOOK: 'apiconnectionwebhook',
      API_CONNECTION: 'apiconnection',
      API_CONNECTION_NOTIFICATION: 'apiconnectionnotification',
      API_MANAGEMENT: 'apimanagement',
      APPEND_TO_ARRAY_VARIABLE: 'appendtoarrayvariable',
      APPEND_TO_STRING_VARIABLE: 'appendtostringvariable',
      BATCH: 'batch',
      COMPOSE: 'compose',
      DECREMENT_VARIABLE: 'decrementvariable',
      EXPRESSION: 'expression',
      FLAT_FILE_DECODING: 'flatfiledecoding',
      FLAT_FILE_ENCODING: 'flatfileencoding',
      FOREACH: 'foreach',
      FUNCTION: 'function',
      HTTP_WEBHOOK: 'httpwebhook',
      HTTP: 'http',
      IF: 'if',
      INCREMENT_VARIABLE: 'incrementvariable',
      INITIALIZE_VARIABLE: 'initializevariable',
      INTEGRATION_ACCOUNT_ARTIFACT_LOOKUP: 'integrationaccountartifactlookup',
      JOIN: 'join',
      LIQUID: 'liquid',
      MANUAL: 'manual',
      OPEN_API_CONNECTION: 'openapiconnection',
      OPEN_API_CONNECTION_WEBHOOK: 'openapiconnectionwebhook',
      OPEN_API_CONNECTION_NOTIFICATION: 'openapiconnectionnotification',
      PARSE_JSON: 'parsejson',
      QUERY: 'query',
      RECURRENCE: 'recurrence',
      REQUEST: 'request',
      RESPONSE: 'response',
      SCOPE: 'scope',
      SELECT: 'select',
      SEND_TO_BATCH: 'sendtobatch',
      SET_VARIABLE: 'setvariable',
      SLIDING_WINDOW: 'slidingwindow',
      SWITCH: 'switch',
      TABLE: 'table',
      TERMINATE: 'terminate',
      UNTIL: 'until',
      WAIT: 'wait',
      WORKFLOW: 'workflow',
      XML_VALIDATION: 'xmlvalidation',
      XSLT: 'xslt',
    },
    KIND: {
      ADDTOTIME: 'addtotime',
      APICONNECTION: 'apiconnection',
      BUTTON: 'button',
      CONVERTTIMEZONE: 'converttimezone',
      CURRENTTIME: 'currenttime',
      EVENTGRID: 'eventgrid',
      GEOFENCE: 'geofence',
      GETFUTURETIME: 'getfuturetime',
      GETPASTTIME: 'getpasttime',
      HTTP: 'http',
      JSON_TO_JSON: 'jsontojson',
      JSON_TO_TEXT: 'jsontotext',
      POWERAPP: 'powerapp',
      POWERAPPV2: 'powerappv2',
      SECURITY_CENTER_ALERT: 'securitycenteralert',
      SUBTRACTFROMTIME: 'subtractfromtime',
      TEAMS: 'teams',
      VIRTUALAGENT: 'virtualagent',
      XML_TO_JSON: 'xmltojson',
      XML_TO_TEXT: 'xmltotext',
    },
    PHASE: {
      NOT_SPECIFIED: 'NOTSPECIFIED',
      AUTH: 'AUTH',
      CHOOSE_PREREQUISITE_CONNECTION: 'CHOOSE_PREREQUISITE_CONNECTION',
      CONDITION: 'CONDITION',
      CONNECTION_WIZARD: 'CONNECTION_WIZARD',
      CREATE_CONFIG_CONNECTION: 'CREATE_CONFIG_CONNECTION',
      CREATE_CONNECTION_ASSISTED: 'CREATE_CONNECTION_ASSISTED',
      CREATE_PARAMETERSET_CONNECTION: 'CREATE_PARAMETERSET_CONNECTION',
      CREATE_SIMPLE_CONNECTION: 'CREATE_SIMPLE_CONNECTION',
      ERROR: 'ERROR',
      FUNCTION_CREATE: 'FUNCTION_CREATE',
      HTTP_SWAGGER_ENDPOINT: 'HTTP_SWAGGER_ENDPOINT',
      OPERATION_SELECT: 'OPERATION_SELECT',
      PARAMETERS: 'PARAMETERS',
      STATIC_RESULT: 'STATIC_RESULT',
      PEEK: 'PEEK',
      PROFILE: 'PROFILE',
      RECOMMENDATION: 'RECOMMENDATION',
      RUN_AFTER_SETTINGS: 'RUN_AFTER_SETTINGS',
      SETTINGS: 'SETTINGS',
      SELECT_BATCH_TRIGGER: 'SELECT_BATCH_TRIGGER',
      SELECT_MANUAL_TRIGGER: 'SELECT_MANUAL_TRIGGER',
    },
  },
  OBJECT: 'Object',
  OUTPUTS: 'outputs',
  OPEN_API_CONNECTION: {
    BODY: 'body',
  },
  OUTPUT_LOCATIONS: {
    BODY: 'body',
    HEADERS: 'headers',
    QUERIES: 'queries',
    STATUS_CODE: 'statusCode',
    NAME: 'name',
    PROPERTIES: 'properties',
    RELATIVE_PATH_PARAMETERS: 'relativePathParameters',
  },
  PARAMETER_VALUE_TYPE: {
    ALTERNATIVE: 'Alternative',
  },
  PANEL_TAB_NAMES: {
    ABOUT: 'ABOUT',
    AUTH_CONNECTION: 'AUTH_CONNECTION',
    CODE_VIEW: 'CODE_VIEW',
    CONNECTION_SELECTOR: 'CONNECTION_SELECTOR',
    CONNECTION_CREATE: 'CONNECTION_CREATE',
    CONNECTION_CREATE_ASSISTED: 'CREATE_CONNECTION_ASSISTED',
    CONNECTION_CREATE_PARAMETER_SET: 'CREATE_PARAMETER_SET_CONNECTION',
    EXPRESSION_TRACE: 'EXPRESSION_TRACE',
    FUNCTION_CREATE: 'FUNCTION_CREATE',
    LOADING: 'LOADING',
    MONITORING: 'MONITORING',
    OPERATION_SELECTOR: 'OPERATION_SELECTOR',
    PARAMETERS: 'PARAMETERS',
    QUERY_PARAMETERS: 'QUERY_PARAMETERS',
    RECOMMENDATION: 'RECOMMENDATION',
    REQUEST_HISTORY: 'REQUEST_HISTORY',
    RETRY_HISTORY: 'RETRY_HISTORY',
    RUN_AFTER: 'RUN_AFTER',
    SCRATCH: 'SCRATCH',
    SETTINGS: 'SETTINGS',
    SETTINGS_2: 'SETTINGS_2',
    STATE_VIEWER: 'STATE_VIEWER',
    STATIC_RESULT: 'STATIC_RESULT',
    SWAGGER_ENDPOINT: 'SWAGGER_ENDPOINT',
    WORKFLOW_PARAMETERS: 'WORKFLOW_PARAMETERS',
    TESTING: 'TESTING',
  },
  PROFILE_KEY_TYPE: {
    DESIGNER: 'designer:',
    INITIALIZE_NODES: 'designer:initializeNodes',
    INITIALIZE_TOPOLOGY: 'designer:initializeTopology',
    // TODO: Prefix the existing profiling events to have this key
    NODEID: 'nodeId:',
    PRE_INITIALIZE_NODES: 'designer:preInitializeNodes',
    POST_INITIALIZE_NODES: 'designer:postInitializeNodes',
    WORKFLOW_LOAD: 'workflowLoad:',
  },
  PATH: 'Path',
  POST: 'post',
  PROPERTY: {
    BROWSE: 'browse',
    FILE_PICKER: 'file-picker',
    OPEN: 'open',
    VALUE_COLLECTION: 'value-collection',
    VALUE_DESCRIPTION: 'value-description',
    VALUE_FOLDER_PROPERTY: 'value-folder-property',
    VALUE_MEDIA_PROPERTY: 'value-media-property',
    VALUE_PATH: 'value-path',
    VALUE_PROPERTY: 'value-property',
    VALUE_SELECTABLE: 'value-selectable',
    VALUE_TITLE: 'value-title',
  },
  RAW: 'Raw',
  // Note: DEFAULT_RECURRENCE frequency should same with RECURRENCE_FREQUENCY_VALUES value
  DEFAULT_RECURRENCE: {
    FREE: {
      interval: 1,
      frequency: 'Hour',
    },
    STANDARD: {
      interval: 1,
      frequency: 'Minute',
    },
    PREMIUM: {
      interval: 15,
      frequency: 'Second',
    },
    CONSUMPTION: {
      interval: 3,
      frequency: 'Minute',
    },
  },
  RECURRENCE_FREQUENCY_VALUES: ['Month', 'Week', 'Day', 'Hour', 'Minute', 'Second'],
  RECURRENCE_TITLE_JOIN_SEPARATOR: ',',
  RECURRENCE_SCHEDULE_VALUES: {
    WEEKDAYS: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    HOURS: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
  },
  // Note: The order of these entries must match the order of the resource strings in resources.resjson.
  RECURRENCE_TIMEZONE_VALUES: [
    'Dateline Standard Time',
    'UTC-11',
    'Aleutian Standard Time',
    'Hawaiian Standard Time',
    'Marquesas Standard Time',
    'Alaskan Standard Time',
    'UTC-09',
    'Pacific Standard Time (Mexico)',
    'UTC-08',
    'Pacific Standard Time',
    'US Mountain Standard Time',
    'Mountain Standard Time (Mexico)',
    'Mountain Standard Time',
    'Central America Standard Time',
    'Central Standard Time',
    'Easter Island Standard Time',
    'Central Standard Time (Mexico)',
    'Canada Central Standard Time',
    'SA Pacific Standard Time',
    'Eastern Standard Time (Mexico)',
    'Eastern Standard Time',
    'Haiti Standard Time',
    'Cuba Standard Time',
    'US Eastern Standard Time',
    'Paraguay Standard Time',
    'Atlantic Standard Time',
    'Venezuela Standard Time',
    'Central Brazilian Standard Time',
    'SA Western Standard Time',
    'Pacific SA Standard Time',
    'Turks And Caicos Standard Time',
    'Newfoundland Standard Time',
    'Tocantins Standard Time',
    'E. South America Standard Time',
    'SA Eastern Standard Time',
    'Argentina Standard Time',
    'Greenland Standard Time',
    'Montevideo Standard Time',
    'Saint Pierre Standard Time',
    'Bahia Standard Time',
    'UTC-02',
    'Mid-Atlantic Standard Time',
    'Azores Standard Time',
    'Cape Verde Standard Time',
    'UTC',
    'Morocco Standard Time',
    'GMT Standard Time',
    'Greenwich Standard Time',
    'W. Europe Standard Time',
    'Central Europe Standard Time',
    'Romance Standard Time',
    'Central European Standard Time',
    'W. Central Africa Standard Time',
    'Namibia Standard Time',
    'Jordan Standard Time',
    'GTB Standard Time',
    'Middle East Standard Time',
    'Egypt Standard Time',
    'E. Europe Standard Time',
    'Syria Standard Time',
    'West Bank Standard Time',
    'South Africa Standard Time',
    'FLE Standard Time',
    'Turkey Standard Time',
    'Israel Standard Time',
    'Kaliningrad Standard Time',
    'Libya Standard Time',
    'Arabic Standard Time',
    'Arab Standard Time',
    'Belarus Standard Time',
    'Russian Standard Time',
    'E. Africa Standard Time',
    'Iran Standard Time',
    'Arabian Standard Time',
    'Astrakhan Standard Time',
    'Azerbaijan Standard Time',
    'Russia Time Zone 3',
    'Mauritius Standard Time',
    'Georgian Standard Time',
    'Caucasus Standard Time',
    'Afghanistan Standard Time',
    'West Asia Standard Time',
    'Ekaterinburg Standard Time',
    'Pakistan Standard Time',
    'India Standard Time',
    'Sri Lanka Standard Time',
    'Nepal Standard Time',
    'Central Asia Standard Time',
    'Bangladesh Standard Time',
    'N. Central Asia Standard Time',
    'Myanmar Standard Time',
    'SE Asia Standard Time',
    'Altai Standard Time',
    'W. Mongolia Standard Time',
    'North Asia Standard Time',
    'Tomsk Standard Time',
    'China Standard Time',
    'North Asia East Standard Time',
    'Singapore Standard Time',
    'W. Australia Standard Time',
    'Taipei Standard Time',
    'Ulaanbaatar Standard Time',
    'North Korea Standard Time',
    'Aus Central W. Standard Time',
    'Transbaikal Standard Time',
    'Tokyo Standard Time',
    'Korea Standard Time',
    'Yakutsk Standard Time',
    'Cen. Australia Standard Time',
    'AUS Central Standard Time',
    'E. Australia Standard Time',
    'AUS Eastern Standard Time',
    'West Pacific Standard Time',
    'Tasmania Standard Time',
    'Vladivostok Standard Time',
    'Lord Howe Standard Time',
    'Bougainville Standard Time',
    'Russia Time Zone 10',
    'Magadan Standard Time',
    'Norfolk Standard Time',
    'Sakhalin Standard Time',
    'Central Pacific Standard Time',
    'Russia Time Zone 11',
    'New Zealand Standard Time',
    'UTC+12',
    'Fiji Standard Time',
    'Kamchatka Standard Time',
    'Chatham Islands Standard Time',
    'Tonga Standard Time',
    'Samoa Standard Time',
    'Line Islands Standard Time',
  ],
  RESULT_SIZE: 50,
  RESULT_SIZE_ALL: -1,
  RETRY_POLICY_LIMITS: {
    MAX_COUNT: 90,
    MIN_COUNT: 1,
  },
  RETRY_POLICY_TYPE: {
    DEFAULT: 'default',
    FIXED: 'fixed',
    EXPONENTIAL: 'exponential',
    NONE: 'none',
  },
  SCHEMA,
  SEARCH_THROTTLE_LIMIT_IN_MS: 750, // Throttling limit for search in milliseconds
  SECURE_OBJECT: 'SecureObject',
  SKU: {
    STANDARD: 'Standard',
    PREMIUM: 'Premium',
    CONSUMPTION: 'Consumption',
  },
  FLOW_STATUS: {
    ABORTED: 'Aborted',
    CANCELLED: 'Cancelled',
    FAILED: 'Failed',
    FAULTED: 'Faulted',
    IGNORED: 'Ignored',
    PAUSED: 'Paused',
    RUNNING: 'Running',
    SKIPPED: 'Skipped',
    SUCCEEDED: 'Succeeded',
    SUSPENDED: 'Suspended',
    TIMEDOUT: 'TimedOut',
    WAITING: 'Waiting',
  },
  SWAGGER_SOURCE: {
    WEBSITE: 'website',
    CUSTOM: 'custom',
  },
  TABLE_COLUMNS: {
    AUTOMATIC: 'automatic',
    CUSTOM: 'custom',
  },
  TABLE_FORMAT: {
    CSV: 'CSV',
    HTML: 'HTML',
  },
  TEMPLATE_GALLERY_SUPPORTED_SCHEMA_VERSIONS: [SCHEMA.GA_PREVIEW_20160401.VERSION, SCHEMA.GA_20160601.VERSION],
  TOKENS: {
    [SWAGGER.TYPE.ANY]: [
      SWAGGER.TYPE.ANY,
      SWAGGER.TYPE.ARRAY,
      SWAGGER.TYPE.BOOLEAN,
      SWAGGER.TYPE.FILE,
      SWAGGER.TYPE.INTEGER,
      SWAGGER.TYPE.NUMBER,
      SWAGGER.TYPE.OBJECT,
      SWAGGER.TYPE.STRING,
    ],
    [SWAGGER.TYPE.ARRAY]: [SWAGGER.TYPE.ANY, SWAGGER.TYPE.ARRAY],
    [SWAGGER.TYPE.BOOLEAN]: [SWAGGER.TYPE.ANY, SWAGGER.TYPE.BOOLEAN],
    [SWAGGER.TYPE.FILE]: [
      SWAGGER.TYPE.ANY,
      SWAGGER.TYPE.FILE,
      SWAGGER.TYPE.BOOLEAN,
      SWAGGER.TYPE.INTEGER,
      SWAGGER.TYPE.NUMBER,
      SWAGGER.TYPE.OBJECT,
      SWAGGER.TYPE.STRING,
    ],
    [SWAGGER.TYPE.INTEGER]: [SWAGGER.TYPE.ANY, SWAGGER.TYPE.INTEGER, SWAGGER.TYPE.NUMBER],
    [SWAGGER.TYPE.NUMBER]: [SWAGGER.TYPE.ANY, SWAGGER.TYPE.INTEGER, SWAGGER.TYPE.NUMBER],
    [SWAGGER.TYPE.OBJECT]: [
      SWAGGER.TYPE.ANY,
      SWAGGER.TYPE.ARRAY,
      SWAGGER.TYPE.BOOLEAN,
      SWAGGER.TYPE.FILE,
      SWAGGER.TYPE.INTEGER,
      SWAGGER.TYPE.NUMBER,
      SWAGGER.TYPE.OBJECT,
      SWAGGER.TYPE.STRING,
    ],
    [SWAGGER.TYPE.STRING]: [SWAGGER.TYPE.ANY, SWAGGER.TYPE.BOOLEAN, SWAGGER.TYPE.INTEGER, SWAGGER.TYPE.NUMBER, SWAGGER.TYPE.STRING],
  },
  KEY_SEGMENTS: {
    BUILTIN: 'builtin',
    SYSTEM: 'system',
    FUNCTION: 'function',
    CONTENT: '$content',
    FILENAME: '$filename',
  },
  SERIALIZED_TYPE: {
    API_CONNECTION: 'ApiConnection',
    API_CONNECTION_NOTIFICATION: 'ApiConnectionNotification',
    API_CONNECTION_WEBHOOK: 'ApiConnectionWebhook',
    API_MANAGEMENT: 'ApiManagement',
    APPEND_TO_ARRAY_VARIABLE: 'AppendToArrayVariable',
    APPEND_TO_STRING_VARIABLE: 'AppendToStringVariable',
    BATCH: 'Batch',
    CONDITION: 'Condition', // 2015-08-01-preview
    COMPOSE: 'Compose',
    DECREMENT_VARIABLE: 'DecrementVariable',
    EXPRESSION: 'Expression',
    FLAT_FILE_DECODING: 'FlatFileDecoding',
    FLAT_FILE_ENCODING: 'FlatFileEncoding',
    FOREACH: 'Foreach',
    FUNCTION: 'Function',
    HTTP: 'Http',
    HTTP_WEBHOOK: 'HttpWebhook',
    IF: 'If',
    INCREMENT_VARIABLE: 'IncrementVariable',
    INITIALIZE_VARIABLE: 'InitializeVariable',
    INTEGRATION_ACCOUNT_ARTIFACT_LOOKUP: 'IntegrationAccountArtifactLookup',
    JOIN: 'Join',
    LIQUID: 'Liquid',
    MANUAL: 'Manual', // 2015-08-01-preview
    OPEN_API_CONNECTION: 'OpenApiConnection',
    OPEN_API_CONNECTION_WEBHOOK: 'OpenApiConnectionWebhook',
    OPEN_API_CONNECTION_NOTIFICATION: 'OpenApiConnectionNotification',
    PARSE_JSON: 'ParseJson',
    QUERY: 'Query',
    REQUEST: 'Request',
    RECURRENCE: 'Recurrence',
    RESPONSE: 'Response',
    SCOPE: 'Scope',
    SELECT: 'Select',
    SEND_TO_BATCH: 'SendToBatch',
    SET_VARIABLE: 'SetVariable',
    SLIDING_WINDOW: 'SlidingWindow',
    SWITCH: 'Switch',
    TABLE: 'Table',
    TERMINATE: 'Terminate',
    UNTIL: 'Until',
    WAIT: 'Wait',
    WORKFLOW: 'Workflow',
    XML_VALIDATION: 'XmlValidation',
    XSLT: 'Xslt',
  },
  SERIALIZED_KIND: {
    ADDTOTIME: 'AddToTime',
    APICONNECTION: 'ApiConnection',
    BUTTON: 'Button',
    CURRENTTIME: 'CurrentTime',
    CONVERTTIMEZONE: 'ConvertTimeZone',
    EVENTGRID: 'EventGrid',
    GETFUTURETIME: 'GetFutureTime',
    GETPASTTIME: 'GetPastTime',
    HTTP: 'Http',
    JSON_TO_JSON: 'JsonToJson',
    JSON_TO_TEXT: 'JsonToText',
    GEOFENCE: 'Geofence',
    XML_TO_JSON: 'XmlToJson',
    XML_TO_TEXT: 'XmlToText',
    POWERAPP: 'PowerApp',
    POWERAPPV2: 'PowerAppV2',
    SECURITY_CENTER_ALERT: 'SecurityCenterAlert',
    SUBTRACTFROMTIME: 'SubtractFromTime',
    TEAMS: 'Teams',
    VIRTUALAGENT: 'VirtualAgent',
  },
  SETTINGS: {
    OPERATION_OPTIONS: {
      ASYNCHRONOUS: 'Asynchronous',
      DISABLE_ASYNC: 'DisableAsyncPattern',
      DISABLE_AUTOMATIC_DECOMPRESSION: 'DisableAutomaticDecompression',
      REQUEST_SCHEMA_VALIDATION: 'EnableSchemaValidation',
      SEQUENTIAL: 'Sequential',
      SINGLE_INSTANCE: 'SingleInstance',
      SUPPRESS_WORKFLOW_HEADERS: 'SuppressWorkflowHeaders',
      SUPPRESS_WORKFLOW_HEADERS_ON_RESPONSE: 'SuppressWorkflowHeadersOnResponse',
    },
    TRANSFER_MODE: {
      CHUNKED: 'Chunked',
    },
    PROPERTY_NAMES: {
      RUNTIME_CONFIGURATION: 'runtimeConfiguration',
      CONTENT_TRANSFER: 'contentTransfer',
      TRANSFER_MODE: 'transferMode',
      PAGINATION_POLICY: 'paginationPolicy',
      MINIMUM_ITEM_COUNT: 'minimumItemCount',
      CONCURRENCY: 'concurrency',
      REPETITIONS: 'repetitions',
      RUNS: 'runs',
      STATIC_RESULT: 'staticResult',
      SECURE_DATA: 'secureData',
      UPLOAD_CHUNK_SIZE: 'uploadChunkSizeInMB',
      DOWNLOAD_CHUNK_SIZE: 'downloadChunkSizeInMB',
    },
    SECURE_DATA_PROPERTY_NAMES: {
      INPUTS: 'inputs',
      OUTPUTS: 'outputs',
    },
  },
  SETTINGSECTIONS: {
    RUNAFTER: 'runafter',
    NETWORKING: 'networking',
    DATAHANDLING: 'datahandling',
    SECURITY: 'security',
    TRACKING: 'tracking',
    GENERAL: 'general',
  },
  SWAGGER,
  SYSTEM_ASSIGNED_MANAGED_IDENTITY: 'System-assigned managed identity',
  TIP_LOGGING_KEYS: {
    ACTION_RECOMMENDATION: 'ACTION_RECOMMENDATION',
    AUTO_CASTING_TOKEN_FOR_PARAMETER: 'AUTO_CASTING_TOKEN_FOR_PARAMETER',
    AZURE_FUNCTION_WITHOUT_SWAGGER: 'AZURE_FUNCTION_WITHOUT_SWAGGER',
    EXCEL_CONNECTOR: 'EXCEL_CONNECTOR',
    GOOGLE_SHEETS_CONNECTOR: 'GOOGLE_SHEETS_CONNECTOR',
    IMPLICIT_FOREACH: 'IMPLICIT_FOREACH',
    INVALID_RECURRENT_TRIGGER: 'INVALID_RECURRENT_TRIGGER',
    INVALID_RESPONSE: 'INVALID_RESPONSE',
    ODATA_PARAMETER: 'ODATA_PARAMETER',
    OPTIONAL_TOKEN_IN_REQUIRED_FIELD: 'OPTIONAL_TOKEN_IN_REQUIRED_FIELD',
    PARAMETER_SUGGESTION: 'PARAMETER_SUGGESTION',
    REQUEST_TRIGGER_SCHEMA: 'REQUEST_TRIGGER_SCHEMA',
    SERVICE_BUS_TRIGGER: 'SERVICE_BUS_TRIGGER',
    SET_VARIABLE_ACTION_INSIDE_FOREACH: 'SET_VARIABLE_ACTION_INSIDE_FOREACH',
    SHAREPOINT_CONNECTOR_CARD: 'SHAREPOINT_CONNECTOR_CARD',
    SQL_SERVER_PAGING_ACTION: 'SQL_SERVER_PAGING_ACTION',
    TRIGGER_RECOMMENDATION: 'TRIGGER_RECOMMENDATION',
  },
  TRIGGER_BODY_OUTPUT: 'triggerBody()',
  TRIGGER_QUERIES_OUTPUT: `triggerOutputs()['queries']`,
  TRIGGER_HEADERS_OUTPUT: `triggerOutputs()['headers']`,
  TRIGGER_OUTPUTS_OUTPUT: 'triggerOutputs()',
  UIDEFINITION_TYPES: {
    BOOLEAN: 'bool',
    INTEGER: 'int',
    SECURESTRING: 'securestring',
    STRING: 'string',
  },
  UIOPERATION_TYPES: {
    SELECT_APIMANAGEMENT_ACTION: 'selectapimanagementaction',
    SELECT_APIMANAGEMENT_TRIGGER: 'selectapimanagementtrigger',
    SELECT_APPSERVICE_ACTION: 'selectappserviceaction',
    SELECT_APPSERVICE_TRIGGER: 'selectappservicetrigger',
    SELECT_FUNCTION_ACTION: 'selectfunction',
    SELECT_BATCH_WORKFLOW_ACTION: 'selectbatchworkflow',
    SELECT_MANUAL_WORKFLOW_ACTION: 'selectmanualworkflow',
  },
  UNTIL_CURRENT_ITERATION_INDEX_KEY: 'builtin.$.currentIterationIndexes',
  VALUE_UPDATE_INTERVAL_IN_MS: 750, // Throttling limit for capturing parameter value update in milliseconds
  VARIABLE_TYPE,
  VISIBILITY: {
    ADVANCED: 'advanced',
    IMPORTANT: 'important',
    INTERNAL: 'internal',
  },
  INCREMENT_VARIABLE_SUPPORTED_TYPES: [VARIABLE_TYPE.FLOAT, VARIABLE_TYPE.INTEGER],
  WEBHOOK_PATH_POSTFIX: '/$subscriptions',
  WILD_INDEX_SEGMENT: '[*]',
  WORKFLOW: 'workflow',
  X_MS_USER_AGENT: 'x-ms-user-agent',
  STATUS_CODES: {
    NO_CONTENT: 204,
    OK: 200,
    UNAUTHORIZED: 401,
  },
  SMART_SUGGESTION: {
    CONNECTOR_LIMIT: 3,
    OPERATIONS_PER_CONNECTOR_LIMIT: 3,
  },
  Settings: {
    SETTING_SEPARATOR_COLOR_DARK: '#323130',
    SETTING_SEPARATOR_COLOR_LIGHT: '#eaeaea',
    CHEVRON_ROOT_COLOR_LIGHT: '#514f4e',
  },
  AZURE_RESOURCE_ACTION_TYPES: {
    SELECT_APIMANAGEMENT_ACTION: 'apimanagement',
    SELECT_APIMANAGEMENT_TRIGGER: 'apimanagementtrigger',
    SELECT_APPSERVICE_ACTION: 'appservice',
    SELECT_APPSERVICE_TRIGGER: 'appservicetrigger',
    SELECT_FUNCTION_ACTION: 'azurefunction',
    SELECT_BATCH_WORKFLOW_ACTION: 'sendtobatch',
    SELECT_BATCH_WORKFLOW_TRIGGER: 'sendtobatchtrigger',
    SELECT_MANUAL_WORKFLOW_ACTION: 'invokeworkflow',
  },
};
