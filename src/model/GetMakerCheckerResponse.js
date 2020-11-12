

import ApiClient from '../ApiClient';

/**
 * The GetMakerCheckerResponse model module.
 * @module model/GetMakerCheckerResponse
 * @version 1.0
 */
class GetMakerCheckerResponse {
    /**
     * Constructs a new <code>GetMakerCheckerResponse</code>.
     * GetMakerCheckerResponse
     * @alias module:model/GetMakerCheckerResponse
     */
    constructor() { 
        
        GetMakerCheckerResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetMakerCheckerResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetMakerCheckerResponse} obj Optional instance to populate.
     * @return {module:model/GetMakerCheckerResponse} The populated <code>GetMakerCheckerResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetMakerCheckerResponse();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('actionName')) {
                obj['actionName'] = ApiClient.convertToType(data['actionName'], 'String');
            }
            if (data.hasOwnProperty('entityName')) {
                obj['entityName'] = ApiClient.convertToType(data['entityName'], 'String');
            }
            if (data.hasOwnProperty('resourceId')) {
                obj['resourceId'] = ApiClient.convertToType(data['resourceId'], 'Number');
            }
            if (data.hasOwnProperty('subresourceId')) {
                obj['subresourceId'] = ApiClient.convertToType(data['subresourceId'], 'Number');
            }
            if (data.hasOwnProperty('maker')) {
                obj['maker'] = ApiClient.convertToType(data['maker'], 'String');
            }
            if (data.hasOwnProperty('madeOnDate')) {
                obj['madeOnDate'] = ApiClient.convertToType(data['madeOnDate'], 'Date');
            }
            if (data.hasOwnProperty('checker')) {
                obj['checker'] = ApiClient.convertToType(data['checker'], 'String');
            }
            if (data.hasOwnProperty('checkedOnDate')) {
                obj['checkedOnDate'] = ApiClient.convertToType(data['checkedOnDate'], 'Date');
            }
            if (data.hasOwnProperty('processingResult')) {
                obj['processingResult'] = ApiClient.convertToType(data['processingResult'], 'String');
            }
            if (data.hasOwnProperty('commandAsJson')) {
                obj['commandAsJson'] = ApiClient.convertToType(data['commandAsJson'], 'String');
            }
            if (data.hasOwnProperty('officeName')) {
                obj['officeName'] = ApiClient.convertToType(data['officeName'], 'String');
            }
            if (data.hasOwnProperty('groupLevelName')) {
                obj['groupLevelName'] = ApiClient.convertToType(data['groupLevelName'], 'String');
            }
            if (data.hasOwnProperty('groupName')) {
                obj['groupName'] = ApiClient.convertToType(data['groupName'], 'String');
            }
            if (data.hasOwnProperty('clientName')) {
                obj['clientName'] = ApiClient.convertToType(data['clientName'], 'String');
            }
            if (data.hasOwnProperty('loanAccountNo')) {
                obj['loanAccountNo'] = ApiClient.convertToType(data['loanAccountNo'], 'String');
            }
            if (data.hasOwnProperty('savingsAccountNo')) {
                obj['savingsAccountNo'] = ApiClient.convertToType(data['savingsAccountNo'], 'String');
            }
            if (data.hasOwnProperty('clientId')) {
                obj['clientId'] = ApiClient.convertToType(data['clientId'], 'Number');
            }
            if (data.hasOwnProperty('loanId')) {
                obj['loanId'] = ApiClient.convertToType(data['loanId'], 'Number');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetMakerCheckerResponse.prototype['id'] = undefined;

/**
 * @member {String} actionName
 */
GetMakerCheckerResponse.prototype['actionName'] = undefined;

/**
 * @member {String} entityName
 */
GetMakerCheckerResponse.prototype['entityName'] = undefined;

/**
 * @member {Number} resourceId
 */
GetMakerCheckerResponse.prototype['resourceId'] = undefined;

/**
 * @member {Number} subresourceId
 */
GetMakerCheckerResponse.prototype['subresourceId'] = undefined;

/**
 * @member {String} maker
 */
GetMakerCheckerResponse.prototype['maker'] = undefined;

/**
 * @member {Date} madeOnDate
 */
GetMakerCheckerResponse.prototype['madeOnDate'] = undefined;

/**
 * @member {String} checker
 */
GetMakerCheckerResponse.prototype['checker'] = undefined;

/**
 * @member {Date} checkedOnDate
 */
GetMakerCheckerResponse.prototype['checkedOnDate'] = undefined;

/**
 * @member {String} processingResult
 */
GetMakerCheckerResponse.prototype['processingResult'] = undefined;

/**
 * @member {String} commandAsJson
 */
GetMakerCheckerResponse.prototype['commandAsJson'] = undefined;

/**
 * @member {String} officeName
 */
GetMakerCheckerResponse.prototype['officeName'] = undefined;

/**
 * @member {String} groupLevelName
 */
GetMakerCheckerResponse.prototype['groupLevelName'] = undefined;

/**
 * @member {String} groupName
 */
GetMakerCheckerResponse.prototype['groupName'] = undefined;

/**
 * @member {String} clientName
 */
GetMakerCheckerResponse.prototype['clientName'] = undefined;

/**
 * @member {String} loanAccountNo
 */
GetMakerCheckerResponse.prototype['loanAccountNo'] = undefined;

/**
 * @member {String} savingsAccountNo
 */
GetMakerCheckerResponse.prototype['savingsAccountNo'] = undefined;

/**
 * @member {Number} clientId
 */
GetMakerCheckerResponse.prototype['clientId'] = undefined;

/**
 * @member {Number} loanId
 */
GetMakerCheckerResponse.prototype['loanId'] = undefined;

/**
 * @member {String} url
 */
GetMakerCheckerResponse.prototype['url'] = undefined;






export default GetMakerCheckerResponse;

