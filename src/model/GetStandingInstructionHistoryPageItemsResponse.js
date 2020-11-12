

import ApiClient from '../ApiClient';
import GetFromAccountTypeStandingInstructionSwagger from './GetFromAccountTypeStandingInstructionSwagger';
import GetFromOfficeStandingInstructionSwagger from './GetFromOfficeStandingInstructionSwagger';
import GetStandingInstructionHistoryFromAccount from './GetStandingInstructionHistoryFromAccount';
import GetStandingInstructionHistoryPageItemsFromClient from './GetStandingInstructionHistoryPageItemsFromClient';
import GetStandingInstructionHistoryToAccount from './GetStandingInstructionHistoryToAccount';
import GetStandingInstructionHistoryToClient from './GetStandingInstructionHistoryToClient';
import GetToAccountTypeStandingInstructionSwagger from './GetToAccountTypeStandingInstructionSwagger';
import GetToOfficeStandingInstructionSwagger from './GetToOfficeStandingInstructionSwagger';

/**
 * The GetStandingInstructionHistoryPageItemsResponse model module.
 * @module model/GetStandingInstructionHistoryPageItemsResponse
 * @version 1.0
 */
class GetStandingInstructionHistoryPageItemsResponse {
    /**
     * Constructs a new <code>GetStandingInstructionHistoryPageItemsResponse</code>.
     * @alias module:model/GetStandingInstructionHistoryPageItemsResponse
     */
    constructor() { 
        
        GetStandingInstructionHistoryPageItemsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetStandingInstructionHistoryPageItemsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetStandingInstructionHistoryPageItemsResponse} obj Optional instance to populate.
     * @return {module:model/GetStandingInstructionHistoryPageItemsResponse} The populated <code>GetStandingInstructionHistoryPageItemsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetStandingInstructionHistoryPageItemsResponse();

            if (data.hasOwnProperty('standingInstructionId')) {
                obj['standingInstructionId'] = ApiClient.convertToType(data['standingInstructionId'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('fromOffice')) {
                obj['fromOffice'] = GetFromOfficeStandingInstructionSwagger.constructFromObject(data['fromOffice']);
            }
            if (data.hasOwnProperty('fromClient')) {
                obj['fromClient'] = GetStandingInstructionHistoryPageItemsFromClient.constructFromObject(data['fromClient']);
            }
            if (data.hasOwnProperty('fromAccountType')) {
                obj['fromAccountType'] = GetFromAccountTypeStandingInstructionSwagger.constructFromObject(data['fromAccountType']);
            }
            if (data.hasOwnProperty('fromAccount')) {
                obj['fromAccount'] = GetStandingInstructionHistoryFromAccount.constructFromObject(data['fromAccount']);
            }
            if (data.hasOwnProperty('toAccountType')) {
                obj['toAccountType'] = GetToAccountTypeStandingInstructionSwagger.constructFromObject(data['toAccountType']);
            }
            if (data.hasOwnProperty('toAccount')) {
                obj['toAccount'] = GetStandingInstructionHistoryToAccount.constructFromObject(data['toAccount']);
            }
            if (data.hasOwnProperty('toOffice')) {
                obj['toOffice'] = GetToOfficeStandingInstructionSwagger.constructFromObject(data['toOffice']);
            }
            if (data.hasOwnProperty('toClient')) {
                obj['toClient'] = GetStandingInstructionHistoryToClient.constructFromObject(data['toClient']);
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('executionTime')) {
                obj['executionTime'] = ApiClient.convertToType(data['executionTime'], 'Date');
            }
            if (data.hasOwnProperty('errorLog')) {
                obj['errorLog'] = ApiClient.convertToType(data['errorLog'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} standingInstructionId
 */
GetStandingInstructionHistoryPageItemsResponse.prototype['standingInstructionId'] = undefined;

/**
 * @member {String} name
 */
GetStandingInstructionHistoryPageItemsResponse.prototype['name'] = undefined;

/**
 * @member {module:model/GetFromOfficeStandingInstructionSwagger} fromOffice
 */
GetStandingInstructionHistoryPageItemsResponse.prototype['fromOffice'] = undefined;

/**
 * @member {module:model/GetStandingInstructionHistoryPageItemsFromClient} fromClient
 */
GetStandingInstructionHistoryPageItemsResponse.prototype['fromClient'] = undefined;

/**
 * @member {module:model/GetFromAccountTypeStandingInstructionSwagger} fromAccountType
 */
GetStandingInstructionHistoryPageItemsResponse.prototype['fromAccountType'] = undefined;

/**
 * @member {module:model/GetStandingInstructionHistoryFromAccount} fromAccount
 */
GetStandingInstructionHistoryPageItemsResponse.prototype['fromAccount'] = undefined;

/**
 * @member {module:model/GetToAccountTypeStandingInstructionSwagger} toAccountType
 */
GetStandingInstructionHistoryPageItemsResponse.prototype['toAccountType'] = undefined;

/**
 * @member {module:model/GetStandingInstructionHistoryToAccount} toAccount
 */
GetStandingInstructionHistoryPageItemsResponse.prototype['toAccount'] = undefined;

/**
 * @member {module:model/GetToOfficeStandingInstructionSwagger} toOffice
 */
GetStandingInstructionHistoryPageItemsResponse.prototype['toOffice'] = undefined;

/**
 * @member {module:model/GetStandingInstructionHistoryToClient} toClient
 */
GetStandingInstructionHistoryPageItemsResponse.prototype['toClient'] = undefined;

/**
 * @member {Number} amount
 */
GetStandingInstructionHistoryPageItemsResponse.prototype['amount'] = undefined;

/**
 * @member {String} status
 */
GetStandingInstructionHistoryPageItemsResponse.prototype['status'] = undefined;

/**
 * @member {Date} executionTime
 */
GetStandingInstructionHistoryPageItemsResponse.prototype['executionTime'] = undefined;

/**
 * @member {String} errorLog
 */
GetStandingInstructionHistoryPageItemsResponse.prototype['errorLog'] = undefined;






export default GetStandingInstructionHistoryPageItemsResponse;

