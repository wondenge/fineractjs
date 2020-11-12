

import ApiClient from '../ApiClient';

/**
 * The GetStandingInstructionHistoryPageItemsFromClient model module.
 * @module model/GetStandingInstructionHistoryPageItemsFromClient
 * @version 1.0
 */
class GetStandingInstructionHistoryPageItemsFromClient {
    /**
     * Constructs a new <code>GetStandingInstructionHistoryPageItemsFromClient</code>.
     * @alias module:model/GetStandingInstructionHistoryPageItemsFromClient
     */
    constructor() { 
        
        GetStandingInstructionHistoryPageItemsFromClient.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetStandingInstructionHistoryPageItemsFromClient</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetStandingInstructionHistoryPageItemsFromClient} obj Optional instance to populate.
     * @return {module:model/GetStandingInstructionHistoryPageItemsFromClient} The populated <code>GetStandingInstructionHistoryPageItemsFromClient</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetStandingInstructionHistoryPageItemsFromClient();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('displayName')) {
                obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
            }
            if (data.hasOwnProperty('officeId')) {
                obj['officeId'] = ApiClient.convertToType(data['officeId'], 'Number');
            }
            if (data.hasOwnProperty('officeName')) {
                obj['officeName'] = ApiClient.convertToType(data['officeName'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetStandingInstructionHistoryPageItemsFromClient.prototype['id'] = undefined;

/**
 * @member {String} displayName
 */
GetStandingInstructionHistoryPageItemsFromClient.prototype['displayName'] = undefined;

/**
 * @member {Number} officeId
 */
GetStandingInstructionHistoryPageItemsFromClient.prototype['officeId'] = undefined;

/**
 * @member {String} officeName
 */
GetStandingInstructionHistoryPageItemsFromClient.prototype['officeName'] = undefined;






export default GetStandingInstructionHistoryPageItemsFromClient;

